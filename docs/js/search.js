import Fuse from 'fuse';
import { normalize } from './utils.js';

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.65 },
    { name: 'artist', weight: 0.35 },
    { name: 'genreText', weight: 0.18 },
    { name: 'keyText', weight: 0.1 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  minMatchCharLength: 1,
  includeScore: true,
};

let fuse = null;
let songRef = null;

export function buildIndex(songs) {
  songRef = songs;
  fuse = new Fuse(songs, fuseOptions);
}

const FIELD_RE = /(?<key>title|artist|genre|key|count|last|days)\s*(?<op>:|<=|>=|=|<|>)\s*(?<val>"[^"]*"|\S+)/gi;

function parseQuery(raw) {
  const filters = [];
  let rest = raw;
  rest = rest.replace(FIELD_RE, (m, key, op, val, ..._args) => {
    let v = val;
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    filters.push({ key: key.toLowerCase(), op: op || ':', val: v });
    return ' ';
  });
  rest = rest.trim().replace(/\s+/g, ' ');
  const tokens = rest ? rest.split(' ') : [];
  return { tokens, filters };
}

function applyFieldFilters(songs, filters) {
  return songs.filter(song => {
    for (const f of filters) {
      const v = f.val;
      switch (f.key) {
        case 'title': {
          if (!normalize(song.title).toLowerCase().includes(normalize(v).toLowerCase())) return false;
          break;
        }
        case 'artist': {
          if (!normalize(song.artist).toLowerCase().includes(normalize(v).toLowerCase())) return false;
          break;
        }
        case 'genre': {
          if (!normalize(song.genreText || song.genre).toLowerCase().includes(normalize(v).toLowerCase())) return false;
          break;
        }
        case 'key': {
          if (!normalize(song.keyText).toLowerCase().split(/\s+/).includes(normalize(v).toLowerCase())) return false;
          break;
        }
        case 'count': {
          const n = parseFloat(v);
          if (Number.isNaN(n)) return false;
          if (!cmp(song.count, f.op, n)) return false;
          break;
        }
        case 'days': {
          const n = parseFloat(v);
          if (Number.isNaN(n)) return false;
          const d = song.daysSinceLast == null ? Infinity : song.daysSinceLast;
          if (!cmp(d, f.op, n)) return false;
          break;
        }
        case 'last': {
          if (v === 'never' || v === 'untouched') {
            if (song.lastSung) return false;
          } else if (v === 'fresh') {
            if (song.daysSinceLast == null || song.daysSinceLast > 30) return false;
          } else if (v === 'stale') {
            if (song.daysSinceLast == null || song.daysSinceLast < 180) return false;
          } else {
            const days = parseInt(String(v).replace(/d$/i, ''), 10);
            if (!Number.isNaN(days)) {
              const d = song.daysSinceLast == null ? Infinity : song.daysSinceLast;
              if (!cmp(d, f.op === ':' ? '<=' : f.op, days)) return false;
            }
          }
          break;
        }
      }
    }
    return true;
  });
}

function cmp(a, op, b) {
  switch (op) {
    case '>':  return a >  b;
    case '<':  return a <  b;
    case '>=': return a >= b;
    case '<=': return a <= b;
    case '=':
    case ':':  return a == b;
  }
  return true;
}

export function search(rawQuery, fallbackSongs) {
  const songs = songRef || fallbackSongs || [];
  const q = (rawQuery || '').trim();
  if (!q) return { results: songs, tokens: [] };
  const { tokens, filters } = parseQuery(q);
  let pool = applyFieldFilters(songs, filters);
  if (!tokens.length) return { results: pool, tokens: [] };
  const phrase = tokens.join(' ');
  const fuseLocal = (pool === songs && fuse)
    ? fuse
    : new Fuse(pool, fuseOptions);
  const fuseResults = fuseLocal.search(phrase);
  return { results: fuseResults.map(r => r.item), tokens };
}
