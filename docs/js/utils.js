import { $, $$ } from './utils-dom.js';
import { normalize, escapeHtml, escapeRegExp, parseDateIso, formatDateRaw, formatMonth, monthKey, daysSince as domainDaysSince, daysClass } from '../../src/domain/index.js';
import { buildSongKey } from '../../src/domain/song/song-key.js';

export { $, $$, normalize, escapeHtml, escapeRegExp, parseDateIso, formatDateRaw, formatMonth, monthKey, daysClass };

export const TODAY = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; })();

export const songKey = (title, artist) => buildSongKey(title, artist);

export const daysSince = (date, today = TODAY) => domainDaysSince(date, today);

export const parseDate = parseDateIso;

export const fmtDate = formatDateRaw;

export const fmtMonth = formatMonth;

export const streamKey = (stream) => `${stream?.channelCode || stream?.channel || ''}:${stream?.dateText || stream?.streamedOn || stream?.dateRaw || ''}:${stream?.url || stream?.title || ''}`;

export const debounce = (fn, ms = 150) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};

export const groupBy = (arr, fn) => {
  const m = new Map();
  for (const x of arr) {
    const k = fn(x);
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(x);
  }
  return m;
};

export const sumBy = (arr, fn) => arr.reduce((s, x) => s + (fn(x) || 0), 0);

export const formatNumber = (n) => Number(n || 0).toLocaleString();

export const isLink = (el) => !!(el && el.closest && el.closest('a, button'));

export function highlightText(text, queries) {
  if (!queries || !queries.length) return escapeHtml(text);
  const escaped = escapeHtml(text);
  let result = escaped;
  for (const q of queries) {
    if (!q) continue;
    const re = new RegExp(escapeRegExp(escapeHtml(q)), 'gi');
    result = result.replace(re, (m) => `<mark class="hl">${m}</mark>`);
  }
  return result;
}
