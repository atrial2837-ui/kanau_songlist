// P3用: acorn ASTに基づく決定論的なシンボル移動ツール。
// manifest(名前リスト+副作用マーカー)に従い、トップレベル宣言を本体無変更のまま
// 別モジュールへ移動する。LLMによる書き換えを介さないため、移動の正確性は
// AST範囲切り出しの機械的処理で保証される。検証は symbol-baseline.mjs が担う。
//
//   node scripts/refactor/move-symbols.mjs <manifest.json>
//
// manifest 形式:
// {
//   "source": "docs/js/main.js",
//   "dest": "docs/js/player/stream-player.js",
//   "header": ["// コメント行", ...],
//   "symbols": ["name", ...],            // 移動する名前付きトップレベル宣言
//   "sideEffectMarkers": ["window.__x ="], // 移動する無名トップレベル文(前方一致)
//   "keepExport": ["getWatchHistory"]     // 既に export 済みで維持するもの(情報用)
// }
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, relative, join } from 'path';
import * as acorn from 'acorn';

const manifestPath = process.argv[2];
if (!manifestPath) { console.error('usage: move-symbols.mjs <manifest.json>'); process.exit(2); }
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const source = readFileSync(manifest.source, 'utf8');

const comments = [];
const ast = acorn.parse(source, {
  ecmaVersion: 'latest', sourceType: 'module', locations: true,
  onComment: (block, text, start, end, startLoc, endLoc) =>
    comments.push({ start, end, startLine: startLoc.line, endLine: endLoc.line }),
});

const lineStarts = [0];
for (let i = 0; i < source.length; i++) if (source[i] === '\n') lineStarts.push(i + 1);

const wanted = new Set(manifest.symbols);
const markers = manifest.sideEffectMarkers ?? [];

// トップレベルノード → { names, start, end, startLine, exported }
const nodes = ast.body.map((raw) => {
  let node = raw, exported = false;
  if (raw.type === 'ExportNamedDeclaration' && raw.declaration) { node = raw.declaration; exported = true; }
  const names = [];
  if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') {
    if (node.id) names.push(node.id.name);
  } else if (node.type === 'VariableDeclaration') {
    for (const d of node.declarations) if (d.id.type === 'Identifier') names.push(d.id.name);
  }
  return { raw, names, exported, start: raw.start, end: raw.end, startLine: raw.loc.start.line, endLine: raw.loc.end.line };
});

// 選択判定
const selected = [];
for (const n of nodes) {
  const byName = n.names.some((name) => wanted.has(name));
  const src = source.slice(n.start, n.end);
  const byMarker = n.names.length === 0 && markers.some((m) => src.startsWith(m));
  if (byName || byMarker) selected.push(n);
}

const foundNames = new Set(selected.flatMap((n) => n.names));
const missing = manifest.symbols.filter((s) => !foundNames.has(s));
if (missing.length) {
  console.error(`NG: manifestのシンボルが見つからない: ${missing.join(', ')}`);
  process.exit(1);
}

// 直上コメントの付着判定: ノード開始行から遡って、空行1つまでを許容して
// 連続するコメント行ブロックを同伴させる(セクション見出しの孤立を防ぐ)。
// ただし直前ノードの終了行に接しているコメントは同伴しない。
function attachedStart(n, prevEndLine) {
  let start = n.start;
  let expectLine = n.startLine; // この行の直上を探す
  let allowGap = 1;
  const sorted = [...comments].sort((a, b) => b.startLine - a.startLine);
  const lineText = (ln) => source.slice(lineStarts[ln - 1], (lineStarts[ln] ?? source.length + 1) - 1);
  for (;;) {
    let c = sorted.find((c) => c.endLine === expectLine - 1);
    if (!c && allowGap) {
      // 空行を1つだけ挟んだセクション見出しコメントを許容(間の行が本当に空行の場合のみ)
      const gapBlank = expectLine - 2 >= 1 && lineText(expectLine - 1).trim() === '';
      if (gapBlank) c = sorted.find((c) => c.endLine === expectLine - 2);
      if (c) allowGap = 0;
    }
    if (!c) break;
    if (c.startLine <= prevEndLine) break; // 直前ノードに接触
    start = lineStarts[c.startLine - 1];
    expectLine = c.startLine;
  }
  return start;
}

// 移動ブロックの範囲確定(元の順序を維持)
selected.sort((a, b) => a.start - b.start);
const blocks = [];
for (const n of selected) {
  const prev = nodes.filter((m) => m.end <= n.start).at(-1);
  const prevEndLine = prev ? prev.endLine : 0; // 選択済みノードのコメント巻き込みも禁止(重複防止)
  let start = attachedStart(n, prevEndLine);
  const prevBlock = blocks.at(-1);
  if (prevBlock && start < prevBlock.end) start = n.start; // 範囲重複の安全弁
  // 同一行末尾のコメント(let x = 0; // 説明)もノードと一緒に移動する
  let end = n.end;
  const nl = source.indexOf('\n', end);
  const tail = source.slice(end, nl === -1 ? source.length : nl);
  if (/^[ \t]*(\/\/.*)?\r?$/.test(tail)) end = nl === -1 ? source.length : nl;
  blocks.push({ ...n, blockStart: start, end });
}

// main.js 側の import 済みバインディングを収集(モジュール別)
const importMap = new Map(); // localName → sourceModule
for (const raw of ast.body) {
  if (raw.type !== 'ImportDeclaration') continue;
  for (const spec of raw.specifiers) importMap.set(spec.local.name, raw.source.value);
}

// 残す側のソースを構築
let rest = '';
let cursor = 0;
for (const b of blocks) {
  rest += source.slice(cursor, b.blockStart);
  cursor = b.end;
  if (source[cursor] === '\n') cursor++;
}
rest += source.slice(cursor);
rest = rest.replace(/\n{3,}/g, '\n\n');

// 残す側が参照する移動シンボル → 移動先からの import 対象
const identsIn = (src) => {
  const ids = new Set();
  for (const t of acorn.tokenizer(src, { ecmaVersion: 'latest', sourceType: 'module' })) {
    if (t.type.label === 'name') ids.add(t.value);
  }
  return ids;
};
const restIdents = identsIn(rest);
const neededFromPlayer = manifest.symbols.filter((s) => restIdents.has(s)).sort();

// 移動側が参照する import 済みバインディング → 移動先の import 文を生成
const movedText = blocks.map((b) => source.slice(b.blockStart, b.end)).join('\n\n');
const movedIdents = identsIn(movedText);
const destImports = new Map(); // sourceModule → [names]
for (const [name, mod] of importMap) {
  if (!movedIdents.has(name)) continue;
  if (!destImports.has(mod)) destImports.set(mod, []);
  destImports.get(mod).push(name);
}
// 相対パスを移動先基準に付け替え
const destDir = dirname(manifest.dest);
const srcDir = dirname(manifest.source);
const rel = (mod) => {
  if (!mod.startsWith('.')) return mod;
  let r = relative(destDir, join(srcDir, mod)).split('\\').join('/');
  if (!r.startsWith('.')) r = './' + r;
  return r;
};

// 移動側のexport付与
let destBody = movedText;
// 移動した本体内の「文字列リテラルの動的import」の相対パスを移動先基準に付け替える
destBody = destBody.replace(/import\((['"])(\.[^'"]+)\1\)/g, (_, q, p) => `import(${q}${rel(p)}${q})`);
for (const name of neededFromPlayer) {
  const fnRe = new RegExp(`^((?:async )?function ${name}\\b)`, 'm');
  const varRe = new RegExp(`^((?:const|let|var) ${name}\\b)`, 'm');
  if (fnRe.test(destBody)) destBody = destBody.replace(fnRe, `export $1`);
  else if (varRe.test(destBody)) destBody = destBody.replace(varRe, `export $1`);
  else if (!new RegExp(`^export (?:async function|function|const|let|var) ${name}\\b`, 'm').test(destBody)) {
    console.error(`NG: export付与に失敗: ${name}`);
    process.exit(1);
  }
}

const destSource = [
  ...(manifest.header ?? []),
  ...[...destImports.entries()].map(([mod, names]) => `import { ${names.sort().join(', ')} } from '${rel(mod)}';`),
  '',
  destBody,
  '',
].join('\n');

// 残す側に import 行を挿入(既存 import 群の直後)
const lastImport = ast.body.filter((n) => n.type === 'ImportDeclaration').at(-1);
const importLine = `import { ${neededFromPlayer.join(', ')} } from './${relative(srcDir, manifest.dest).split('\\').join('/')}';`;
const insertAt = source.slice(0, lastImport.end).length;
// rest はすでに構築済みのため、行ベースで挿入し直す
const restLines = rest.split('\n');
const lastImportIdx = restLines.findLastIndex((l) => l.startsWith('import '));
restLines.splice(lastImportIdx + 1, 0, importLine);

mkdirSync(dirname(manifest.dest), { recursive: true });
writeFileSync(manifest.dest, destSource);
writeFileSync(manifest.source, restLines.join('\n'));

console.log(`moved: ${selected.length} top-level node(s) (${foundNames.size} named symbols)`);
console.log(`dest imports: ${[...destImports.entries()].map(([m, n]) => `${m}(${n.length})`).join(', ')}`);
console.log(`re-exported to shell: ${neededFromPlayer.length} — ${neededFromPlayer.join(', ')}`);
