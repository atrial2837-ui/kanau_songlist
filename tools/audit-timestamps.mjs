// 歌枠ごとのセトリとタイムスタンプを突き合わせて、抜けと不整合を洗い出す。
//
// docs/data/streams.json は D1 の承認済みタイムスタンプから生成しているので、
// 「セトリに曲があるのに t が無い」＝ D1 に登録が無い、と読める。
// 併せて、登録はあるが明らかにおかしいもの（順序の逆転・時刻の重複・0秒）も拾う。
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const streams = JSON.parse(readFileSync(join(ROOT, 'docs', 'data', 'streams.json'), 'utf-8'));
const songsPayload = JSON.parse(readFileSync(join(ROOT, 'docs', 'data', 'songs.json'), 'utf-8'));

// key → 表示用の曲名
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

const report = { none: [], partial: [], anomaly: [], complete: 0 };
let totalSongs = 0, totalWithT = 0, totalStreams = 0;

for (const [channel, list] of Object.entries(streams.channels || {})) {
  for (const stream of list) {
    const songs = stream.songs || [];
    if (!songs.length) continue;
    totalStreams++;
    const withT = songs.filter(s => s.t != null && s.t > 0);
    const without = songs.filter(s => s.t == null || s.t <= 0);
    totalSongs += songs.length;
    totalWithT += withT.length;

    const head = {
      channel, index: stream.index, date: stream.date,
      title: stream.title, url: stream.url,
      total: songs.length, missing: without.length,
    };

    if (withT.length === 0) {
      report.none.push({ ...head, songs: songs.map((s, i) => `${i + 1}. ${label(s.key)}`) });
    } else if (without.length > 0) {
      report.partial.push({
        ...head,
        songs: songs.map((s, i) => `${i + 1}. ${label(s.key)}${s.t == null || s.t <= 0 ? '  ← 抜け' : `  ${fmt(s.t)}`}`),
      });
    } else {
      report.complete++;
    }

    // 登録されている時刻そのものの不整合
    const issues = [];
    let prev = -1, prevIdx = -1;
    songs.forEach((s, i) => {
      if (s.t == null) return;
      if (s.t === 0) issues.push(`${i + 1}曲目「${label(s.key)}」が 0:00`);
      if (prev >= 0 && s.t < prev) {
        issues.push(`${prevIdx + 1}→${i + 1}曲目で逆転（${fmt(prev)} → ${fmt(s.t)}：「${label(s.key)}」）`);
      }
      if (prev >= 0 && s.t === prev) {
        issues.push(`${prevIdx + 1}曲目と${i + 1}曲目が同時刻（${fmt(s.t)}）`);
      }
      prev = s.t; prevIdx = i;
    });
    if (issues.length) report.anomaly.push({ ...head, issues });
  }
}

const lines = [];
lines.push('# タイムスタンプ突き合わせ結果', '');
lines.push(`対象: ${totalStreams}枠 / ${totalSongs}曲`);
lines.push(`登録済み: ${totalWithT}曲（${(totalWithT / totalSongs * 100).toFixed(1)}%）`);
lines.push(`未登録  : ${totalSongs - totalWithT}曲`);
lines.push('');
lines.push(`- 全曲そろっている枠: ${report.complete}`);
lines.push(`- 一部抜けている枠  : ${report.partial.length}（${report.partial.reduce((a, r) => a + r.missing, 0)}曲）`);
lines.push(`- まるごと無い枠    : ${report.none.length}（${report.none.reduce((a, r) => a + r.total, 0)}曲）`);
lines.push(`- 時刻に不整合がある枠: ${report.anomaly.length}`);
lines.push('');

if (report.anomaly.length) {
  lines.push('## 時刻の不整合（登録はあるが順序などがおかしい）', '');
  for (const r of report.anomaly) {
    lines.push(`### #${r.index} [${r.channel}] ${r.date} ${r.title}`);
    lines.push(r.url);
    r.issues.forEach(i => lines.push(`- ${i}`));
    lines.push('');
  }
}

if (report.partial.length) {
  lines.push('## 一部だけ抜けている枠', '');
  for (const r of report.partial.sort((a, b) => b.missing - a.missing)) {
    lines.push(`### #${r.index} [${r.channel}] ${r.date} — ${r.missing}/${r.total}曲が未登録`);
    lines.push(r.title);
    lines.push(r.url);
    r.songs.forEach(s => lines.push(`- ${s}`));
    lines.push('');
  }
}

if (report.none.length) {
  lines.push('## タイムスタンプがまったく無い枠', '');
  for (const r of report.none.sort((a, b) => String(b.date).localeCompare(String(a.date)))) {
    lines.push(`### #${r.index} [${r.channel}] ${r.date} — ${r.total}曲`);
    lines.push(r.title);
    lines.push(r.url);
    r.songs.forEach(s => lines.push(`- ${s}`));
    lines.push('');
  }
}

const out = join(ROOT, 'tmp', 'timestamp-audit.md');
writeFileSync(out, lines.join('\n'));
console.log(lines.slice(0, 12).join('\n'));
console.log(`\n→ ${out}`);
