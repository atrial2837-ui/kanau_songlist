// move-only リファクタリングの検証ゲート③: ビルド構造比較。
//
// build.mjs と同一設定で main バンドルをメモリ上にビルドし(docs/dist は触らない)、
// esbuild metafile からチャンク構成を正規化して比較する。チャンク名は内容ハッシュで
// 変わるため、「entryPoint または入力ファイル集合」でチャンクを同定する。
//
//   snapshot: node scripts/refactor/build-compare.mjs snapshot tmp/build-base.json
//   compare:  node scripts/refactor/build-compare.mjs compare tmp/build-base.json
//
// compare の判定:
//   - チャンクの増減・入力ファイル集合の変化 → 構造変化として報告(exit 1)
//   - サイズのみの変動 → 参考情報として表示(exit 0)
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { createHash } from 'crypto';
import { mainBuildOptions } from '../../build.mjs';

async function snapshot() {
  const result = await esbuild.build({ ...mainBuildOptions(), write: false });
  const chunks = [];
  for (const [outPath, meta] of Object.entries(result.metafile.outputs)) {
    const inputs = Object.keys(meta.inputs).sort();
    const id = meta.entryPoint
      ? `entry:${meta.entryPoint}`
      : `chunk:${createHash('sha1').update(inputs.join('\n')).digest('hex').slice(0, 8)}`;
    chunks.push({ id, outPath, entryPoint: meta.entryPoint ?? null, inputs, bytes: meta.bytes });
  }
  chunks.sort((a, b) => a.id.localeCompare(b.id));
  return { chunks, totalBytes: chunks.reduce((n, c) => n + c.bytes, 0) };
}

const [mode, baselinePath] = process.argv.slice(2);
if (!mode || !baselinePath) {
  console.error('usage: build-compare.mjs <snapshot|compare> <baseline.json>');
  process.exit(2);
}

const cur = await snapshot();

if (mode === 'snapshot') {
  mkdirSync(dirname(baselinePath), { recursive: true });
  writeFileSync(baselinePath, JSON.stringify(cur, null, 2));
  console.log(`snapshot: ${cur.chunks.length} chunk(s), total ${cur.totalBytes} bytes → ${baselinePath}`);
  process.exit(0);
}

if (mode !== 'compare') {
  console.error(`unknown mode: ${mode}`);
  process.exit(2);
}

const base = JSON.parse(readFileSync(baselinePath, 'utf8'));
const baseById = new Map(base.chunks.map((c) => [c.id, c]));
const curById = new Map(cur.chunks.map((c) => [c.id, c]));
let structuralChanges = 0;

for (const [id, b] of baseById) {
  const c = curById.get(id);
  if (!c) {
    console.error(`NG chunk removed: ${id} (${b.outPath})`);
    structuralChanges++;
    continue;
  }
  const bIn = new Set(b.inputs);
  const cIn = new Set(c.inputs);
  const addedIn = c.inputs.filter((f) => !bIn.has(f));
  const removedIn = b.inputs.filter((f) => !cIn.has(f));
  for (const f of addedIn) { console.error(`NG input added to ${id}: ${f}`); structuralChanges++; }
  for (const f of removedIn) { console.error(`NG input removed from ${id}: ${f}`); structuralChanges++; }
  const delta = c.bytes - b.bytes;
  if (delta !== 0) {
    const pct = ((delta / b.bytes) * 100).toFixed(2);
    console.log(`size: ${id}  ${b.bytes} → ${c.bytes} bytes (${delta > 0 ? '+' : ''}${pct}%)`);
  }
}
for (const [id, c] of curById) {
  if (!baseById.has(id)) {
    console.error(`NG chunk added: ${id} (${c.outPath}) inputs=[${c.inputs.join(', ')}]`);
    structuralChanges++;
  }
}

const totalDelta = cur.totalBytes - base.totalBytes;
console.log(`\ntotal: ${base.totalBytes} → ${cur.totalBytes} bytes (${totalDelta >= 0 ? '+' : ''}${totalDelta})`);
console.log(structuralChanges ? `structural changes: ${structuralChanges}` : 'structure: unchanged');
process.exit(structuralChanges ? 1 : 0);
