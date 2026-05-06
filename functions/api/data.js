const PAGE_SIZE = 1000;
const CACHE_SECONDS = 60;
const SPREADSHEET_ID = '1mM9TQGYm7VAOds90XpSbSzF6xnFeq-95XZwL2mz8B4o';
const INTEGRATED_GID = '1012689826';
const KEY_TITLE_COL = 19;
const KEY_ARTIST_COL = 20;
const KEY_VALUE_COL = 21;
const KEY_PUBLISH_COL = 22;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${CACHE_SECONDS}`,
    },
  });
}

function normalize(value) {
  return String(value == null ? '' : value).trim().replace(/\s+/g, ' ').normalize('NFKC');
}

function monthKey(dateText) {
  return dateText ? dateText.slice(0, 7) : '';
}

function daysSince(dateText) {
  if (!dateText) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return Math.floor((today - date) / 86400000);
}

function lookupKey(title, artist) {
  return `${normalize(title).toLowerCase()}__${normalize(artist).toLowerCase()}`;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ',') {
      row.push(cell);
      cell = '';
    } else if (ch === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (ch !== '\r') {
      cell += ch;
    }
  }
  row.push(cell);
  if (row.length > 1 || row[0]) rows.push(row);
  return rows;
}

async function fetchDisplayKeys() {
  const query = new URLSearchParams({ tqx: 'out:csv', gid: INTEGRATED_GID });
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?${query}`;
  const res = await fetch(url);
  if (!res.ok) return new Map();
  const rows = parseCsv(await res.text());
  const publishFlag = normalize(rows[0]?.[KEY_PUBLISH_COL] || '');
  if (publishFlag !== '公開') return new Map();
  const keys = new Map();
  for (const row of rows) {
    const title = normalize(row[KEY_TITLE_COL] || '');
    const artist = normalize(row[KEY_ARTIST_COL] || '');
    const key = normalize(row[KEY_VALUE_COL] || '');
    if (title && artist && key) keys.set(lookupKey(title, artist), key);
  }
  return keys;
}

async function supabaseSelect(env, table, query = {}) {
  const key = env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
  const rows = [];
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const params = new URLSearchParams({
      select: '*',
      limit: String(PAGE_SIZE),
      offset: String(offset),
      ...query,
    });
    const res = await fetch(`${env.SUPABASE_URL}/rest/v1/${table}?${params}`, {
      headers: {
        apikey: key,
        authorization: `Bearer ${key}`,
        accept: 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`${table} ${res.status}: ${await res.text()}`);
    }
    const page = await res.json();
    rows.push(...page);
    if (page.length < PAGE_SIZE) break;
  }
  return rows;
}

function assignRanks(songs) {
  const sorted = [...songs].sort((a, b) => b.count - a.count);
  let previousCount = null;
  let previousRank = 0;
  sorted.forEach((song, index) => {
    if (previousCount !== null && song.count === previousCount) {
      song.rank = previousRank;
    } else {
      song.rank = index + 1;
      previousRank = song.rank;
    }
    previousCount = song.count;
  });
}

function deriveArtists(songs) {
  const byArtist = new Map();
  for (const song of songs) {
    const artist = song.artist || '(不明)';
    if (!byArtist.has(artist)) {
      byArtist.set(artist, { artist, songs: [], totalCount: 0, songCount: 0 });
    }
    const item = byArtist.get(artist);
    item.songs.push(song);
    item.totalCount += song.count;
    item.songCount += 1;
  }
  return Array.from(byArtist.values()).sort((a, b) => b.totalCount - a.totalCount);
}

function buildDataset(channel, tables, displayKeys) {
  const statsBySong = new Map(
    tables.song_channel_stats
      .filter((row) => row.channel_id === channel.id)
      .map((row) => [row.song_id, row])
  );
  const artistsById = new Map(tables.artists.map((row) => [row.id, row]));
  const songsById = new Map(tables.songs.map((row) => [row.id, row]));
  const streams = tables.streams
    .filter((row) => row.channel_id === channel.id)
    .map((stream) => {
      const date = stream.streamed_on;
      const songs = tables.stream_songs
        .filter((row) => row.stream_id === stream.id)
        .sort((a, b) => a.position - b.position)
        .map((row) => {
          const song = songsById.get(row.song_id);
          return {
            title: normalize(song?.title || row.title_snapshot),
            artist: normalize(artistsById.get(song?.artist_id)?.name || row.artist_snapshot),
            key: song?.song_key || row.song_key_snapshot,
            raw: row.raw_text || '',
          };
        });
      const jsDate = new Date(`${date}T00:00:00`);
      return {
        index: stream.source_index || 0,
        channel: channel.code,
        dateRaw: date ? date.replaceAll('-', '/') : '',
        date,
        title: normalize(stream.title),
        url: stream.url || '',
        songCount: stream.song_count || songs.length,
        songs,
        monthKey: monthKey(date),
        year: date ? Number(date.slice(0, 4)) : null,
        month: date ? Number(date.slice(5, 7)) : null,
        dayOfWeek: Number.isNaN(jsDate.getTime()) ? null : jsDate.getDay(),
      };
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  const streamRefsBySongKey = new Map();
  for (const stream of streams) {
    for (const song of stream.songs) {
      if (!streamRefsBySongKey.has(song.key)) streamRefsBySongKey.set(song.key, []);
      streamRefsBySongKey.get(song.key).push(stream);
    }
  }

  const songs = Array.from(statsBySong.values()).map((stat) => {
    const song = songsById.get(stat.song_id);
    const artist = artistsById.get(song?.artist_id);
    const refs = streamRefsBySongKey.get(song?.song_key) || [];
    const dates = refs.map((stream) => stream.date).filter(Boolean).sort().reverse();
    const displayKey = displayKeys.get(lookupKey(song?.title, artist?.name)) || '';
    return {
      sourceIndex: stat.source_index || 0,
      title: normalize(song?.title),
      artist: normalize(artist?.name),
      count: stat.sing_count || 0,
      key: song?.song_key || '',
      displayKey,
      keyText: displayKey,
      channels: [channel.code],
      dates,
      streamRefs: refs,
      lastSung: dates[0] || null,
      firstSung: dates[dates.length - 1] || null,
      daysSinceLast: daysSince(dates[0]),
      rank: 0,
    };
  });

  assignRanks(songs);
  const total = songs.reduce((sum, song) => sum + song.count, 0);
  const newestStream = streams[0]?.date || null;
  const stats = {
    title: channel.name,
    updateText: newestStream ? `更新日：${newestStream.replaceAll('-', '/')}` : '',
    updateDate: newestStream,
    total,
    repertoire: songs.length,
    streams: streams.length,
    avgPerStream: streams.length ? Math.round((total / streams.length) * 10) / 10 : 0,
    channelId: channel.code,
    channelLabel: channel.name,
  };

  return { stats, songs, streams, orphans: [], artists: deriveArtists(songs) };
}

function mergeChannels(datasets) {
  const songMap = new Map();
  const streams = [];
  for (const dataset of datasets) {
    for (const song of dataset.songs) {
      const existing = songMap.get(song.key);
      if (existing) {
        existing.count += song.count;
        existing.channels = Array.from(new Set([...existing.channels, ...song.channels]));
      } else {
        songMap.set(song.key, { ...song, channels: [...song.channels], dates: [], streamRefs: [] });
      }
    }
    streams.push(...dataset.streams);
  }
  streams.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  for (const song of songMap.values()) {
    const refs = streams.filter((stream) => stream.songs.some((item) => item.key === song.key));
    const dates = refs.map((stream) => stream.date).filter(Boolean).sort().reverse();
    song.streamRefs = refs;
    song.dates = dates;
    song.lastSung = dates[0] || null;
    song.firstSung = dates[dates.length - 1] || null;
    song.daysSinceLast = daysSince(dates[0]);
  }
  const songs = Array.from(songMap.values());
  assignRanks(songs);
  const total = datasets.reduce((sum, dataset) => sum + dataset.stats.total, 0);
  const newestStream = streams[0]?.date || null;
  return {
    stats: {
      title: '全期間',
      updateText: newestStream ? `更新日：${newestStream.replaceAll('-', '/')}` : '',
      updateDate: newestStream,
      total,
      repertoire: songs.length,
      streams: datasets.reduce((sum, dataset) => sum + dataset.stats.streams, 0),
      avgPerStream: streams.length ? Math.round((total / streams.length) * 10) / 10 : 0,
      channelId: 'all',
      channelLabel: '全期間',
    },
    songs,
    streams,
    orphans: [],
    artists: deriveArtists(songs),
  };
}

export async function onRequestGet({ env }) {
  try {
    if (!env.SUPABASE_URL || !(env.SUPABASE_SECRET_KEY || env.SUPABASE_SERVICE_ROLE_KEY)) {
      return json({ error: 'Supabase environment variables are missing' }, 500);
    }
    const [channels, artists, songs, streams, streamSongs, songChannelStats] = await Promise.all([
      supabaseSelect(env, 'channels', { order: 'sort_order.asc' }),
      supabaseSelect(env, 'artists'),
      supabaseSelect(env, 'songs'),
      supabaseSelect(env, 'streams', { order: 'streamed_on.desc' }),
      supabaseSelect(env, 'stream_songs', { order: 'position.asc' }),
      supabaseSelect(env, 'song_channel_stats'),
    ]);
    const displayKeys = await fetchDisplayKeys();
    const tables = {
      artists,
      songs,
      streams,
      stream_songs: streamSongs,
      song_channel_stats: songChannelStats,
    };
    const channelDatasets = {};
    for (const channel of channels) {
      channelDatasets[channel.code] = buildDataset(channel, tables, displayKeys);
    }
    return json({
      channels: channelDatasets,
      combined: mergeChannels(Object.values(channelDatasets)),
    });
  } catch (error) {
    return json({ error: error.message || String(error) }, 500);
  }
}
