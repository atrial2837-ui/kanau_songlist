/**
 * 歌枠のライブチャット（リプレイ）から、曲の切れ目になりそうな時刻を推定する。
 *
 * 固定コメントにタイムスタンプが無い枠へ手で打刻する際の「当たり」を出すのが目的で、
 * 出力は答えではなく候補。管理画面の打刻ツールがこれを読み込み、
 * 「次の山へ飛ぶ」ためのナビゲーションとして使う。
 *
 * ## 何を見ているか
 *   - 全コメントの密度   … 曲の前後は盛り上がってコメントが増える
 *   - 拍手コメントの密度 … 「888」「パチパチ」「👏」は曲が終わった直後に集中する
 * 歌枠では拍手の山＝曲の終わりであることが多く、次の曲はその少し後から始まる。
 * どちらの山も出しておき、人間が見て判断できるようにする。
 *
 * ## 使い方
 * ```
 * node tools/chat-spikes.mjs <videoURLまたはID> [--songs 24] [--out out.json]
 * node tools/chat-spikes.mjs <...> --chat-file path/to/xxx.live_chat.json   # DL済みを使う
 * ```
 * yt-dlp が PATH に必要（チャット取得のみ、動画はダウンロードしない）。
 */
import { execFileSync } from 'node:child_process';
import { createReadStream, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { tmpdir } from 'node:os';
import path from 'node:path';

const BIN_SECONDS = 5;        // 集計の粒度
const SMOOTH_BINS = 3;        // 移動平均の窓（5秒×3=15秒）
const MIN_GAP_SECONDS = 90;   // 山どうしの最小間隔。曲は最低でもこれくらい離れる

/**
 * 拍手コメント。曲が終わった直後に集中するため、曲の「終わり」の目印になる。
 * このチャンネルでは 888 ではなくメンバー用カスタム絵文字 :clapping_hands: が使われる
 * （実データで 2,327 回。8 の連打は 0 回だった）ため、両方を拾う。
 */
const APPLAUSE_RE = /clapping_hands|clap|👏|8{3,}|ぱち|パチ|拍手/iu;

/**
 * 歌唱中に流れるスタンプ。このチャンネルでは :fish::musical_notes: の連投が定番で、
 * 曲が始まると増えるため「曲の中」の目印になる。
 */
const SINGING_RE = /musical_note/iu;

const ID_RE = /(?:live\/|v=|youtu\.be\/|shorts\/|embed\/)([A-Za-z0-9_-]{11})/;

/** URL でも ID でも受け取れるようにする。 */
export function toVideoId(input) {
  const s = String(input || '').trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  const m = s.match(ID_RE);
  return m ? m[1] : null;
}

/** 秒 → "h:mm:ss" */
export function hms(total) {
  const s = Math.max(0, Math.round(total));
  const h = Math.floor(s / 3600);
  const m = Math.floor(s / 60) % 60;
  const sec = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${m}:${String(sec).padStart(2, '0')}`;
}

/** チャット1件のテキストを組み立てる（絵文字はショートカット名で拾う）。 */
function runsToText(runs) {
  if (!Array.isArray(runs)) return '';
  return runs.map((r) => r.text ?? r.emoji?.shortcuts?.[0] ?? '').join('');
}

/**
 * live_chat.json（1行1JSON）を読み、{ sec, text } の配列にする。
 *
 * @param {string} file
 * @returns {Promise<{sec:number,text:string}[]>}
 */
export async function readChatEvents(file) {
  const events = [];
  const rl = createInterface({ input: createReadStream(file, 'utf-8'), crlfDelay: Infinity });
  for await (const line of rl) {
    if (!line.trim()) continue;
    let obj;
    try { obj = JSON.parse(line); } catch { continue; }
    const replay = obj.replayChatItemAction;
    if (!replay) continue;
    const sec = Number(replay.videoOffsetTimeMsec ?? 0) / 1000;
    if (!Number.isFinite(sec)) continue;
    for (const action of replay.actions || []) {
      const item = action.addChatItemAction?.item;
      if (!item) continue;
      // 通常メッセージとスーパーチャットのみ。システムメッセージは無視する
      const renderer = item.liveChatTextMessageRenderer || item.liveChatPaidMessageRenderer;
      if (!renderer) continue;
      events.push({ sec, text: runsToText(renderer.message?.runs) });
    }
  }
  events.sort((a, b) => a.sec - b.sec);
  return events;
}

/**
 * イベント列を一定幅で集計し、移動平均をかけた系列にする。
 *
 * @param {{sec:number,text:string}[]} events
 * @param {(e:{sec:number,text:string}) => boolean} [filter]
 * @returns {number[]} bin ごとの件数（平滑化後）
 */
export function buildSeries(events, filter) {
  if (!events.length) return [];
  const last = events[events.length - 1].sec;
  const bins = new Array(Math.floor(last / BIN_SECONDS) + 1).fill(0);
  for (const e of events) {
    if (filter && !filter(e)) continue;
    bins[Math.floor(e.sec / BIN_SECONDS)]++;
  }
  // 移動平均。単発のスパムで山ができるのを抑える
  const half = Math.floor(SMOOTH_BINS / 2);
  return bins.map((_, i) => {
    let sum = 0, n = 0;
    for (let j = i - half; j <= i + half; j++) {
      if (j < 0 || j >= bins.length) continue;
      sum += bins[j]; n++;
    }
    return sum / n;
  });
}

/**
 * 系列から山を検出する。高い順に取り、既に採った山から minGap 秒以内は捨てる。
 *
 * @param {number[]} series
 * @param {{ limit?: number, minGap?: number }} [options]
 * @returns {{ seconds: number, score: number }[]} 時刻の昇順
 */
export function findPeaks(series, { limit = 40, minGap = MIN_GAP_SECONDS } = {}) {
  const candidates = [];
  for (let i = 1; i < series.length - 1; i++) {
    // 局所最大だけを候補にする（平坦部を拾わないよう厳密な > を片側に使う）
    if (series[i] >= series[i - 1] && series[i] > series[i + 1] && series[i] > 0) {
      candidates.push({ seconds: i * BIN_SECONDS, score: series[i] });
    }
  }
  candidates.sort((a, b) => b.score - a.score);

  const picked = [];
  for (const c of candidates) {
    if (picked.length >= limit) break;
    if (picked.some((p) => Math.abs(p.seconds - c.seconds) < minGap)) continue;
    picked.push(c);
  }
  return picked.sort((a, b) => a.seconds - b.seconds);
}

/** yt-dlp でチャットリプレイを落とし、live_chat.json のパスを返す。 */
function downloadChat(videoId, outDir) {
  mkdirSync(outDir, { recursive: true });
  execFileSync('yt-dlp', [
    '--skip-download',
    '--write-subs',
    '--sub-langs', 'live_chat',
    '--no-warnings',
    '-o', path.join(outDir, '%(id)s.%(ext)s'),
    `https://www.youtube.com/watch?v=${videoId}`,
  ], { stdio: ['ignore', 'ignore', 'inherit'] });

  const file = readdirSync(outDir).find((f) => f.startsWith(videoId) && f.endsWith('.live_chat.json'));
  if (!file) throw new Error('チャットリプレイが取得できませんでした（配信が古い・チャット無効の可能性）');
  return path.join(outDir, file);
}

async function main() {
  const args = process.argv.slice(2);
  if (!args.length) {
    console.error('使い方: node tools/chat-spikes.mjs <videoURLまたはID> [--songs N] [--out file] [--chat-file path]');
    process.exit(1);
  }
  const flag = (name) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : null;
  };
  const videoId = toVideoId(args[0]);
  if (!videoId) throw new Error(`動画IDを取り出せません: ${args[0]}`);

  const songs = Number(flag('--songs')) || 0;
  const chatFile = flag('--chat-file');
  const outPath = flag('--out') || path.join('tmp', `chat-spikes-${videoId}.json`);

  const tempDir = path.join(tmpdir(), `kanau-chat-${videoId}`);
  let file = chatFile;
  let cleanup = false;
  if (!file) {
    console.log(`チャットリプレイを取得中: ${videoId}`);
    file = downloadChat(videoId, tempDir);
    cleanup = true;
  }
  if (!existsSync(file)) throw new Error(`ファイルがありません: ${file}`);

  const events = await readChatEvents(file);
  console.log(`コメント ${events.length}件 / 配信長 約${hms(events[events.length - 1]?.sec ?? 0)}`);

  // 曲数が分かっていれば、その2倍を上限にする（曲の始まりと終わりで山が立つため）
  const limit = songs > 0 ? songs * 2 : 40;
  const all = findPeaks(buildSeries(events), { limit });
  const applause = findPeaks(buildSeries(events, (e) => APPLAUSE_RE.test(e.text)), { limit });
  const singing = findPeaks(buildSeries(events, (e) => SINGING_RE.test(e.text)), { limit });

  const result = {
    videoId,
    songCount: songs || null,
    binSeconds: BIN_SECONDS,
    generatedAt: new Date().toISOString(),
    note: '候補であって答えではない。打刻ツールで「次の山へ飛ぶ」ナビとして使う。拍手の山は曲の終わり際、歌唱スタンプの山は曲の途中に立ちやすい。',
    allPeaks: all.map((p) => ({ seconds: p.seconds, at: hms(p.seconds), score: Number(p.score.toFixed(2)) })),
    applausePeaks: applause.map((p) => ({ seconds: p.seconds, at: hms(p.seconds), score: Number(p.score.toFixed(2)) })),
    singingPeaks: singing.map((p) => ({ seconds: p.seconds, at: hms(p.seconds), score: Number(p.score.toFixed(2)) })),
  };

  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');

  const preview = (list) => `${String(list.length).padStart(3)}件: ${list.slice(0, 10).map((p) => hms(p.seconds)).join(' ')}${list.length > 10 ? ' …' : ''}`;
  console.log(`\n全コメントの山   ${preview(all)}`);
  console.log(`拍手の山(曲の終) ${preview(applause)}`);
  console.log(`歌唱スタンプの山 ${preview(singing)}`);
  console.log(`\n出力: ${outPath}`);

  if (cleanup) rmSync(tempDir, { recursive: true, force: true });
}

// 直接実行されたときだけ main を走らせる（テストから import できるようにするため）
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.slice(1))) {
  main().catch((err) => { console.error(err.message || err); process.exit(1); });
}
