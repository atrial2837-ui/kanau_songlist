// D1 の承認済みタイムスタンプを全枠ぶん取得し、セトリと突き合わせて抜けを洗い出す。
//
// tools/audit-timestamps.mjs は静的データ(docs/data)だけを見る。こちらは公開APIを
// 通して D1 の現物を引き、静的データとのズレ（生成が古い等）も併せて検出する。
//
// 使い方: node tools/audit-timestamps-d1.mjs [origin]
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = process.argv[2] || 'https://kanau-songlist.pages.dev';
const CONCURRENCY = 8;

const streams = JSON.parse(readFileSync(join(ROOT, 'docs', 'data', 'streams.json'), 'utf-8'));
const songsPayload = JSON.parse(readFileSync(join(ROOT, 'docs', 'data', 'songs.json'), 'utf-8'));

const titleByKey = new Map();
for (const list of Object.values(songsPayload.channels || {})) {
  for (const s of list) if (s.key && !titleByKey.has(s.key)) titleByKey.set(s.key, `${s.title} / ${s.artist}`);
}
const label = (key) => titleByKey.get(key) || key;

const fmt = (sec) => {
  const n = Math.max(0, Math.floor(Number(sec) || 0));
  const h = Math.floor(n / 3600), m = Math.floor((n % 3600) / 60), s = n % 60;
  const p = (v) => String(v).padStart(2, '0');
  return h > 0 ? `${h}:${p(m)}:${p(s)}` : `${m}:${p(s)}`;
};

const targets = [];
for (const [channel, list] of Object.entries(streams.channels || {})) {
  for (const stream of list) if ((stream.songs || []).length) targets.push({ channel, stream });
}

async function fetchApproved({ channel, stream }) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`${ORIGIN}/api/timestamps/${channel}/${stream.index}`);
      if (res.ok) return (await res.json()).items || [];
    } catch (_) { /* リトライ */ }
    await new Promise(r => setTimeout(r, 400 * (attempt + 1)));
  }
  return null; // 取得失敗（未登録と区別する）
}

// 並列に流す（449件を1件ずつだと遅すぎる）
const results = new Array(targets.length);
let cursor = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (cursor < targets.length) {
    const i = cursor++;
    results[i] = await fetchApproved(targets[i]);
    if (i % 50 === 0) process.stdout.write(`\r取得中… ${i}/${targets.length}`);
  }
}));
process.stdout.write(`\r取得完了 ${targets.length}/${targets.length}\n`);

const report = { none: [], partial: [], anomaly: [], drift: [], failed: [], complete: 0 };
let totalSongs = 0, totalInD1 = 0;

targets.forEach(({ channel, stream }, i) => {
  const items = results[i];
  const songs = stream.songs || [];
  const head = { channel, index: stream.index, date: stream.date, title: stream.title, url: stream.url, total: songs.length };

  if (items === null) { report.failed.push(head); return; }

  totalSongs += songs.length;
  const byIndex = new Map();
  for (const it of items) byIndex.set(Number(it.songIndex), Number(it.timeSeconds));
  totalInD1 += [...byIndex.keys()].filter(k => k >= 0 && k < songs.length).length;

  const missing = songs.map((s, idx) => ({ idx, s })).filter(({ idx }) => !byIndex.has(idx));

  // 静的データと D1 のズレ（= docs/data の生成が古い、または手動編集の取りこぼし）
  const drift = [];
  songs.forEach((s, idx) => {
    const d1 = byIndex.get(idx);
    const st = s.t == null ? null : Number(s.t);
    if (d1 == null && st != null) drift.push(`${idx + 1}曲目「${label(s.key)}」: 静的=${fmt(st)} / D1=なし`);
    else if (d1 != null && st == null) drift.push(`${idx + 1}曲目「${label(s.key)}」: 静的=なし / D1=${fmt(d1)}`);
    else if (d1 != null && st != null && d1 !== st) drift.push(`${idx + 1}曲目「${label(s.key)}」: 静的=${fmt(st)} / D1=${fmt(d1)}`);
  });
  if (drift.length) report.drift.push({ ...head, drift });

  // セトリの範囲外を指している登録（曲数が変わった枠の取り残し）
  const orphan = [...byIndex.keys()].filter(k => k < 0 || k >= songs.length);

  const issues = [];
  if (orphan.length) issues.push(`セトリ範囲外(${songs.length}曲)を指す登録: ${orphan.map(k => k + 1).join(', ')}曲目`);
  let prev = -1, prevIdx = -1;
  songs.forEach((s, idx) => {
    const t = byIndex.get(idx);
    if (t == null) return;
    if (t === 0) issues.push(`${idx + 1}曲目「${label(s.key)}」が 0:00`);
    if (prev >= 0 && t < prev) issues.push(`${prevIdx + 1}→${idx + 1}曲目で逆転（${fmt(prev)} → ${fmt(t)}：「${label(s.key)}」）`);
    if (prev >= 0 && t === prev) issues.push(`${prevIdx + 1}曲目と${idx + 1}曲目が同時刻（${fmt(t)}）`);
    prev = t; prevIdx = idx;
  });
  if (issues.length) report.anomaly.push({ ...head, issues });

  if (missing.length === songs.length) {
    report.none.push({ ...head, songs: songs.map((s, idx) => `${idx + 1}. ${label(s.key)}`) });
  } else if (missing.length) {
    report.partial.push({
      ...head, missing: missing.length,
      songs: songs.map((s, idx) => `${idx + 1}. ${label(s.key)}${byIndex.has(idx) ? `  ${fmt(byIndex.get(idx))}` : '  ← 抜け'}`),
    });
  } else {
    report.complete++;
  }
});

const L = [];
L.push('# D1 突き合わせ結果（承認済みタイムスタンプ × セトリ）', '');
L.push(`参照元: ${ORIGIN}`);
L.push(`対象: ${targets.length}枠 / ${totalSongs}曲`, '');
L.push(`- D1登録済み: ${totalInD1}曲（${(totalInD1 / totalSongs * 100).toFixed(1)}%）`);
L.push(`- 未登録    : ${totalSongs - totalInD1}曲`);
L.push(`- 全曲そろっている枠: ${report.complete}`);
L.push(`- 一部抜けている枠  : ${report.partial.length}（${report.partial.reduce((a, r) => a + r.missing, 0)}曲）`);
L.push(`- まるごと無い枠    : ${report.none.length}（${report.none.reduce((a, r) => a + r.total, 0)}曲）`);
L.push(`- 時刻に不整合がある枠: ${report.anomaly.length}`);
L.push(`- 静的データとD1がズレている枠: ${report.drift.length}`);
if (report.failed.length) L.push(`- 取得失敗: ${report.failed.length}枠`);
L.push('');

const section = (title, rows, render) => {
  if (!rows.length) return;
  L.push(`## ${title}`, '');
  for (const r of rows) {
    L.push(`### #${r.index} [${r.channel}] ${r.date}`);
    L.push(r.title);
    L.push(r.url);
    render(r);
    L.push('');
  }
};

section('時刻の不整合', report.anomaly, r => r.issues.forEach(i => L.push(`- ${i}`)));
section('静的データとD1のズレ', report.drift, r => r.drift.forEach(i => L.push(`- ${i}`)));
section('一部だけ抜けている枠', report.partial.sort((a, b) => b.missing - a.missing), r => r.songs.forEach(s => L.push(`- ${s}`)));
section('タイムスタンプがまったく無い枠', report.none.sort((a, b) => String(b.date).localeCompare(String(a.date))), r => r.songs.forEach(s => L.push(`- ${s}`)));
section('取得に失敗した枠', report.failed, () => {});

const out = join(ROOT, 'tmp', 'timestamp-audit-d1.md');
writeFileSync(out, L.join('\n'));
console.log(L.slice(0, 14).join('\n'));
console.log(`\n→ ${out}`);
