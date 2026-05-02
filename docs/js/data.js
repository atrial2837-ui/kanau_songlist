import { CHANNELS, gvizUrl } from './config.js';
import { normalize, songKey, parseDate, daysSince, monthKey } from './utils.js';

// Split a "曲名 / アーティスト" or "曲名/アーティスト" cell.
// Tries " / " (space-slash-space) first; falls back to bare "/" or "／".
// Always uses the LAST occurrence — matches our existing canonical convention
// and handles titles that contain slashes by deferring to the rightmost separator.
function splitSongCell(raw) {
  let idx = raw.lastIndexOf(' / ');
  if (idx >= 0) return { title: raw.slice(0, idx), artist: raw.slice(idx + 3) };
  idx = raw.lastIndexOf('／');
  if (idx >= 0) return { title: raw.slice(0, idx), artist: raw.slice(idx + 1) };
  idx = raw.lastIndexOf('/');
  if (idx >= 0) return { title: raw.slice(0, idx), artist: raw.slice(idx + 1) };
  return { title: raw, artist: '' };
}

async function fetchCsv(gid) {
  const res = await fetch(gvizUrl(gid));
  if (!res.ok) throw new Error(`gid=${gid} HTTP ${res.status}`);
  const text = await res.text();
  return Papa.parse(text, { skipEmptyLines: false }).data;
}

function parseListSheet(rows, channelId) {
  const top = rows[0] || [];
  const updateRaw = String(top[2] || '');
  const stats = {
    title: normalize(top[1]),
    updateText: normalize(top[2]),
    updateDate: parseDate(updateRaw.replace(/^更新日[:：]?\s*/, '')),
    total: parseInt(top[3], 10) || 0,
    repertoire: parseInt(top[4], 10) || 0,
    streams: parseInt(top[5], 10) || 0,
    avgPerStream: parseFloat(top[6]) || 0,
  };
  const byKey = new Map();
  let dedupes = 0;
  for (let i = 2; i < rows.length; i++) {
    const r = rows[i] || [];
    const title = normalize(r[1]);
    if (!title) continue;
    const artist = normalize(r[2]);
    const count = parseInt(r[3], 10) || 0;
    const k = songKey(title, artist);
    const existing = byKey.get(k);
    if (existing) {
      // duplicate row in リスト — keep the larger count, prefer first-seen title/artist casing
      if (count > existing.count) existing.count = count;
      dedupes++;
      continue;
    }
    byKey.set(k, {
      sourceIndex: parseInt(r[0], 10) || i - 1,
      title, artist, count,
      key: k,
      channels: new Set([channelId]),
      dates: [],
      streamRefs: [],
      lastSung: null,
      firstSung: null,
      daysSinceLast: null,
      rank: 0,
    });
  }
  if (dedupes) {
    console.info(`[${channelId}] リストの重複行を ${dedupes} 件マージしました`);
  }
  return { stats, songs: Array.from(byKey.values()) };
}

function parseSetlistSheet(rows, channelId) {
  if (!rows || rows.length < 5) return [];
  const indexRow = rows[0] || [];
  const dateRow = rows[1] || [];
  const titleRow = rows[2] || [];
  const urlRow = rows[3] || [];
  const countRow = rows[4] || [];
  const colCount = Math.max(indexRow.length, dateRow.length);
  const streams = [];
  for (let c = 1; c < colCount; c++) {
    const dateStr = (dateRow[c] || '').trim();
    const date = parseDate(dateStr);
    if (!date) continue;
    const stream = {
      index: parseInt(indexRow[c], 10) || c,
      channel: channelId,
      dateRaw: dateStr,
      date,
      title: normalize(titleRow[c]),
      url: (urlRow[c] || '').trim(),
      songCount: parseInt(countRow[c], 10) || 0,
      songs: [],
      monthKey: monthKey(date),
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      dayOfWeek: date.getDay(),
    };
    for (let r = 5; r < rows.length; r++) {
      const cell = rows[r] && rows[r][c];
      if (!cell || !String(cell).trim()) continue;
      const raw = String(cell).trim();
      let { title, artist } = splitSongCell(raw);
      stream.songs.push({
        title: normalize(title),
        artist: normalize(artist),
        key: songKey(title, artist),
        raw,
      });
    }
    streams.push(stream);
  }
  return streams;
}

function joinData(songs, streams) {
  const byKey = new Map(songs.map(s => [s.key, s]));
  const orphans = [];
  for (const stream of streams) {
    for (const ss of stream.songs) {
      const song = byKey.get(ss.key);
      if (song) {
        song.dates.push(stream.date);
        song.streamRefs.push(stream);
      } else {
        orphans.push({ streamDate: stream.dateRaw, raw: ss.raw, key: ss.key, channel: stream.channel });
      }
    }
  }
  for (const s of songs) {
    if (s.dates.length) {
      s.dates.sort((a, b) => b - a);
      s.lastSung = s.dates[0];
      s.firstSung = s.dates[s.dates.length - 1];
      s.daysSinceLast = daysSince(s.lastSung);
    }
  }
  return orphans;
}

function assignRanks(songs) {
  const sorted = [...songs].sort((a, b) => b.count - a.count);
  let prev = null, prevRank = 0;
  sorted.forEach((s, i) => {
    if (prev !== null && s.count === prev) {
      s.rank = prevRank;
    } else {
      s.rank = i + 1;
      prevRank = s.rank;
    }
    prev = s.count;
  });
}

function deriveArtistAggregates(songs) {
  const byArtist = new Map();
  for (const s of songs) {
    const a = s.artist || '(不明)';
    if (!byArtist.has(a)) {
      byArtist.set(a, { artist: a, songs: [], totalCount: 0, songCount: 0 });
    }
    const ag = byArtist.get(a);
    ag.songs.push(s);
    ag.totalCount += s.count;
    ag.songCount += 1;
  }
  return Array.from(byArtist.values()).sort((a, b) => b.totalCount - a.totalCount);
}

function buildDataset(stats, songs, streams) {
  streams.sort((a, b) => b.date - a.date);
  const orphans = joinData(songs, streams);
  assignRanks(songs);
  const artists = deriveArtistAggregates(songs);
  return { stats, songs, streams, orphans, artists };
}

async function loadChannel(channelConfig) {
  const [listRows, setlistRows] = await Promise.all([
    fetchCsv(channelConfig.listGid),
    fetchCsv(channelConfig.setlistGid),
  ]);
  const { stats, songs } = parseListSheet(listRows, channelConfig.id);
  stats.channelId = channelConfig.id;
  stats.channelLabel = channelConfig.label;
  const streams = parseSetlistSheet(setlistRows, channelConfig.id);
  return buildDataset(stats, songs, streams);
}

function mergeChannels(datasets) {
  // datasets: [{ stats, songs, streams, orphans, artists }, ...]
  const songMap = new Map();
  const streams = [];

  for (const d of datasets) {
    for (const s of d.songs) {
      const existing = songMap.get(s.key);
      if (!existing) {
        songMap.set(s.key, {
          sourceIndex: s.sourceIndex,
          title: s.title,
          artist: s.artist,
          count: s.count,
          key: s.key,
          channels: new Set(s.channels),
          dates: [],
          streamRefs: [],
          lastSung: null,
          firstSung: null,
          daysSinceLast: null,
          rank: 0,
        });
      } else {
        existing.count += s.count;
        for (const c of s.channels) existing.channels.add(c);
      }
    }
    streams.push(...d.streams);
  }

  // recompute dates/streamRefs from merged streams
  const songs = Array.from(songMap.values());
  // Reset before re-join (joinData appends; we cleared above already)
  const orphans = joinData(songs, streams);
  streams.sort((a, b) => b.date - a.date);
  assignRanks(songs);
  const artists = deriveArtistAggregates(songs);

  // Aggregate stats
  const totalSheets = datasets.reduce((n, d) => n + (d.stats.total || 0), 0);
  const totalStreams = datasets.reduce((n, d) => n + (d.stats.streams || 0), 0);
  const updateDates = datasets.map(d => d.stats.updateDate).filter(Boolean);
  const newestUpdate = updateDates.length ? new Date(Math.max(...updateDates.map(d => d.getTime()))) : null;
  const stats = {
    title: '全期間',
    updateText: newestUpdate ? `更新日：${newestUpdate.getFullYear()}/${String(newestUpdate.getMonth()+1).padStart(2,'0')}/${String(newestUpdate.getDate()).padStart(2,'0')}` : '',
    updateDate: newestUpdate,
    total: totalSheets,
    repertoire: songs.length,
    streams: totalStreams,
    avgPerStream: totalStreams ? Math.round((totalSheets / totalStreams) * 10) / 10 : 0,
    channelId: 'all',
    channelLabel: '全期間',
  };

  return { stats, songs, streams, orphans, artists };
}

export async function loadAll() {
  const channelEntries = Object.values(CHANNELS);
  const results = await Promise.all(
    channelEntries.map(c => loadChannel(c).catch(err => {
      console.warn(`channel ${c.id} load failed:`, err);
      return null;
    }))
  );
  const channels = {};
  channelEntries.forEach((c, i) => { if (results[i]) channels[c.id] = results[i]; });

  const allDatasets = Object.values(channels);
  const combined = allDatasets.length ? mergeChannels(allDatasets) : null;

  return { channels, combined };
}
