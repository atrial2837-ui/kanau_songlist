import { daysSince } from './utils.js';

const API_URL = '/api/data';

function parseApiDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const text = String(value).trim().replaceAll('/', '-');
  const m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!m) return null;
  const date = new Date(+m[1], +m[2] - 1, +m[3]);
  date.setHours(0, 0, 0, 0);
  return date;
}

function assignRanks(songs) {
  const sorted = [...songs].sort((a, b) => b.count - a.count);
  let prev = null;
  let prevRank = 0;
  sorted.forEach((song, i) => {
    if (prev !== null && song.count === prev) {
      song.rank = prevRank;
    } else {
      song.rank = i + 1;
      prevRank = song.rank;
    }
    prev = song.count;
  });
}

function hydrateDataset(dataset) {
  if (!dataset) return null;

  dataset.stats = dataset.stats || {};
  dataset.stats.updateDate = parseApiDate(dataset.stats.updateDate);
  dataset.songs = dataset.songs || [];
  dataset.streams = dataset.streams || [];
  dataset.orphans = dataset.orphans || [];
  dataset.artists = dataset.artists || [];

  for (const stream of dataset.streams) {
    stream.date = parseApiDate(stream.date);
    stream.monthKey = stream.monthKey || (
      stream.date
        ? `${stream.date.getFullYear()}-${String(stream.date.getMonth() + 1).padStart(2, '0')}`
        : ''
    );
    stream.year = stream.year || stream.date?.getFullYear() || null;
    stream.month = stream.month || (stream.date ? stream.date.getMonth() + 1 : null);
    stream.dayOfWeek = stream.dayOfWeek ?? (stream.date ? stream.date.getDay() : null);
    stream.songs = stream.songs || [];
  }
  dataset.streams.sort((a, b) => (b.date || 0) - (a.date || 0));

  const refsBySongKey = new Map();
  for (const stream of dataset.streams) {
    for (const song of stream.songs) {
      if (!refsBySongKey.has(song.key)) refsBySongKey.set(song.key, []);
      refsBySongKey.get(song.key).push(stream);
    }
  }

  for (const song of dataset.songs) {
    const refs = refsBySongKey.get(song.key) || [];
    const dates = refs.map((stream) => stream.date).filter(Boolean).sort((a, b) => b - a);
    song.channels = Array.isArray(song.channels) ? song.channels : Array.from(song.channels || []);
    song.streamRefs = refs;
    song.dates = dates;
    song.lastSung = dates[0] || null;
    song.firstSung = dates[dates.length - 1] || null;
    song.daysSinceLast = daysSince(song.lastSung);
    song.count = Number(song.count || 0);
  }
  assignRanks(dataset.songs);

  return dataset;
}

function hydratePayload(payload) {
  const channels = payload.channels || {};
  for (const key of Object.keys(channels)) {
    channels[key] = hydrateDataset(channels[key]);
  }
  return {
    channels,
    combined: hydrateDataset(payload.combined),
  };
}

export async function loadAll() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body.error ? `: ${body.error}` : '';
    } catch (_) {
      detail = `: HTTP ${res.status}`;
    }
    throw new Error(`APIからデータを取得できませんでした${detail}`);
  }
  return hydratePayload(await res.json());
}
