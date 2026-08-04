/**
 * D1 マイグレーションの適用状態管理
 *
 *   npm run db:status               … ローカル(既定) の適用状況を表示
 *   npm run db:status -- --remote   … 本番 D1 の適用状況を表示
 *   npm run db:migrate -- --remote   … 未適用のマイグレーションを順に適用
 *
 * 背景:
 *   以前 d1/migrations/0001_song_requests.sql が本番未適用のまま放置され、
 *   曲リクエスト機能が「テーブルが無い」ことに気づけない状態が続いた。
 *   適用済みかどうかを DB 自身に記録し、差分を機械的に出せるようにする。
 *
 * 仕組み:
 *   schema_migrations(name TEXT PRIMARY KEY, applied_at TEXT) に適用済みファイル名を記録。
 *   ディレクトリのファイル一覧と突き合わせて未適用を検出する。
 *
 * 注意:
 *   マイグレーションは「何度流しても壊れない」書き方（IF NOT EXISTS 等）を推奨。
 *   ALTER TABLE ADD COLUMN のように再実行でエラーになるものは、
 *   このスクリプトが適用済みを記録するので通常は二重実行されない。
 */

import { readdirSync, existsSync, writeFileSync, rmSync, mkdtempSync } from 'fs';
import { join, dirname } from 'path';
import { tmpdir } from 'os';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/**
 * マイグレーションを置くディレクトリ。
 * 以前は d1/migrations と migrations に分かれていて連番が衝突していたため、
 * d1/migrations に一本化した（適用順が曖昧にならないよう1箇所に保つ）。
 */
const MIGRATION_DIRS = ['d1/migrations'];

const DB_NAME = process.env.D1_DATABASE_NAME || 'kanau-songlist-db';

const args = process.argv.slice(2);
const REMOTE = args.includes('--remote');
const APPLY = args.includes('--apply');
/**
 * 既に手で適用済みのマイグレーションを「適用済み」として記録だけする。
 * このスクリプト導入前に手動適用した分を取り込むための一度きりの救済措置。
 */
const MARK_ONLY = args.includes('--mark-applied');

/** 全マイグレーションを {name, dir, path} で返す（name はディレクトリを含む一意キー） */
function listMigrations() {
  const out = [];
  for (const dir of MIGRATION_DIRS) {
    const abs = join(ROOT, dir);
    if (!existsSync(abs)) continue;
    for (const file of readdirSync(abs).filter((f) => f.endsWith('.sql')).sort()) {
      out.push({ name: `${dir}/${file}`, path: join(abs, file) });
    }
  }
  return out;
}

/**
 * wrangler d1 execute を叩いて JSON 結果を返す。
 *
 * mode:
 *   'file'    … --file で実行。DDL/複数文向け。
 *               ※ 行データではなく実行統計が返るので SELECT には使えない。
 *   'command' … --command で実行。SELECT の結果行を取得したいとき用。
 *
 * Windows では npx が .cmd のため shell:true が必要で、その状態だと
 * 引数中の空白で分割されてしまう。--command のときは SQL 全体を
 * ダブルクォートで括って 1 引数に見せる。
 */
function runSql(sql, mode = 'file') {
  const argv = ['wrangler', 'd1', 'execute', DB_NAME];
  if (REMOTE) argv.push('--remote');
  if (mode === 'command') {
    const quoted = process.platform === 'win32' ? `"${sql.replace(/"/g, '\\"')}"` : sql;
    argv.push('--command', quoted, '--json', '-y');
  } else {
    argv.push('--file', sql, '--json', '-y');
  }
  let stdout;
  try {
    stdout = execFileSync('npx', argv, {
      cwd: ROOT,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
      maxBuffer: 32 * 1024 * 1024,
    });
  } catch (err) {
    // wrangler の失敗理由（未ログイン・SQL エラー等）をそのまま見せる
    const detail = String(err.stderr || err.stdout || err.message || '')
      .replace(/\x1B\[[0-9;]*m/g, '')
      .trim();
    throw new Error(`wrangler 実行に失敗しました:\n${detail}`);
  }
  // wrangler は JSON の前後にバナーを出すことがあるので配列部分だけ取り出す
  const start = stdout.indexOf('[');
  const end = stdout.lastIndexOf(']');
  if (start < 0 || end < 0) return [];
  try {
    return JSON.parse(stdout.slice(start, end + 1));
  } catch {
    return [];
  }
}

/** SQL 文字列を一時ファイル経由で実行する（DDL/INSERT 用。戻り値は統計） */
function d1(sql) {
  const dir = mkdtempSync(join(tmpdir(), 'kanau-d1-'));
  const file = join(dir, 'q.sql');
  try {
    writeFileSync(file, sql, 'utf-8');
    return runSql(file, 'file');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/** SELECT を実行して結果行を返す（--file では行が返らないため --command を使う） */
function d1Query(sql) {
  const res = runSql(sql, 'command');
  return res?.[0]?.results ?? [];
}

/** 適用済みマイグレーション名の集合を返す（テーブルが無ければ作る） */
function appliedNames() {
  d1(
    `CREATE TABLE IF NOT EXISTS schema_migrations (
       name       TEXT PRIMARY KEY,
       applied_at TEXT NOT NULL DEFAULT (datetime('now'))
     )`,
  );
  const rows = d1Query('SELECT name FROM schema_migrations');
  return new Set(rows.map((r) => r.name));
}

function main() {
  const target = REMOTE ? '本番(remote)' : 'ローカル(local)';
  console.log(`D1 マイグレーション状況: ${DB_NAME} [${target}]\n`);

  const all = listMigrations();
  if (!all.length) {
    console.log('  マイグレーションファイルがありません');
    return;
  }

  const applied = appliedNames();
  const pending = all.filter((m) => !applied.has(m.name));

  for (const m of all) {
    console.log(`  ${applied.has(m.name) ? '✓ 適用済み' : '· 未適用  '}  ${m.name}`);
  }

  if (!pending.length) {
    console.log('\nOK: 未適用のマイグレーションはありません');
    return;
  }

  console.log(`\n未適用: ${pending.length} 件`);

  if (!APPLY && !MARK_ONLY) {
    console.log(`適用するには: npm run db:migrate${REMOTE ? ' -- --remote' : ''}`);
    process.exitCode = 1; // CI で検知できるように
    return;
  }

  for (const m of pending) {
    if (MARK_ONLY) {
      console.log(`\n記録のみ: ${m.name}（SQL は実行しない）`);
    } else {
      console.log(`\n適用中: ${m.name}`);
      runSql(m.path, 'file');
    }
    const escaped = m.name.replace(/'/g, "''");
    d1(`INSERT OR IGNORE INTO schema_migrations (name) VALUES ('${escaped}')`);
    console.log(`  ✓ 完了`);
  }
  console.log(MARK_ONLY ? '\nOK: 適用済みとして記録しました' : '\nOK: すべて適用しました');
}

main();
