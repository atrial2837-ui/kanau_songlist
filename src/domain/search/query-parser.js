/**
 * @module domain/search/query-parser
 * @description 検索クエリの field:value フィルタ解析。
 *
 * 既存: docs/js/search.js:52-66
 * @副作用 なし
 */

import { GENRE_LIST } from '../song/genre.js';
import { normalize } from '../shared/text.js';

/** @type {RegExp} */
export const FIELD_FILTER_RE = /(?<key>title|artist|genre|tag|mood|season|key|count|last|days)\s*(?<op>:|<=|>=|=|<|>)\s*(?<val>"[^"]*"|\S+)/gi;

/**
 * @typedef {object} FieldFilter
 * @property {string} key
 * @property {string} op
 * @property {string} val
 */

/**
 * @typedef {object} SearchQuery
 * @property {string[]} tokens
 * @property {FieldFilter[]} filters
 */

/**
 * @param {string} raw
 * @returns {SearchQuery}
 */
export function parseQuery(raw) {
  /** @type {FieldFilter[]} */
  const filters = [];
  let rest = raw;
  rest = rest.replace(FIELD_FILTER_RE, (_m, key, op, val) => {
    let v = val;
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    filters.push({ key: key.toLowerCase(), op: op || ':', val: v });
    return ' ';
  });

  rest = applyNaturalLanguageFilters(rest, filters);
  rest = rest.trim().replace(/\s+/g, ' ');
  const tokens = rest ? rest.split(' ') : [];
  return { tokens, filters };
}

/**
 * フリーワード内のよくある日本語条件を既存の field filter に寄せる。
 * 例: "最近歌っていないボカロ" → genre:ボカロ + days:>30
 *
 * @param {string} raw
 * @param {FieldFilter[]} filters
 * @returns {string}
 */
function applyNaturalLanguageFilters(raw, filters) {
  let rest = raw || '';
  const before = filters.length;

  for (const { label, patterns } of NATURAL_GENRES) {
    for (const pattern of patterns) {
      if (!pattern.test(rest)) continue;
      addFilter(filters, 'genre', ':', label);
      rest = rest.replace(pattern, ' ');
      break;
    }
  }

  for (const { key, label, patterns } of NATURAL_FACETS) {
    for (const pattern of patterns) {
      if (!pattern.test(rest)) continue;
      addFilter(filters, key, ':', label);
      rest = rest.replace(pattern, ' ');
      break;
    }
  }

  for (const rule of NATURAL_RULES) {
    if (!rule.pattern.test(rest)) continue;
    addFilter(filters, rule.key, rule.op, rule.val);
    rest = rest.replace(rule.pattern, ' ');
  }

  if (filters.length > before) {
    rest = rest
      .replace(/[、。]/g, ' ')
      .replace(/\b(の|な|で|を|が|に|は|だけ|から|曲|楽曲)\b/g, ' ')
      .replace(/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+/g, ' ')
      .replace(/(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/g, ' ');
    if (/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/.test(rest.replace(/\s+/g, ''))) {
      rest = ' ';
    }
  }

  return rest;
}

/**
 * @param {FieldFilter[]} filters
 * @param {string} key
 * @param {string} op
 * @param {string} val
 */
function addFilter(filters, key, op, val) {
  if (filters.some((filter) => filter.key === key && filter.op === op && filter.val === val)) return;
  filters.push({ key, op, val });
}

const NATURAL_GENRES = [
  ...GENRE_LIST.map((genre) => ({
    label: genre,
    patterns: [new RegExp(escapeRegExp(normalize(genre)), 'i')],
  })),
  { label: 'ボカロ', patterns: [/ボーカロイド/i, /vocaloid/i] },
  { label: 'アニソン', patterns: [/アニメソング/i, /アニメ曲/i] },
  { label: 'J-POP', patterns: [/jpop/i, /邦楽/i] },
];

const NATURAL_FACETS = [
  { key: 'mood', label: 'しっとり', patterns: [/しっとり/i, /バラード/i, /落ち着(い|く)/i, /静か/i, /泣ける/i] },
  { key: 'mood', label: '明るい', patterns: [/明るい/i, /元気/i, /楽しい/i, /盛り上が(る|り)/i, /アップテンポ/i] },
  { key: 'mood', label: 'かわいい', patterns: [/かわいい/i, /可愛い/i, /キュート/i] },
  { key: 'mood', label: 'かっこいい', patterns: [/かっこいい/i, /格好いい/i, /クール/i, /ロック/i] },
  { key: 'mood', label: '切ない', patterns: [/切ない/i, /せつない/i, /エモい/i, /エモ/i] },
  { key: 'mood', label: 'chill', patterns: [/chill/i, /チル/i, /のんびり/i, /リラックス/i, /ほっこり/i, /まったり/i] },
  { key: 'mood', label: '激しい', patterns: [/激しい/i, /アグレッシブ/i, /パンク/i, /メタル/i, /スクリーム/i, /叫ぶ/i] },
  { key: 'mood', label: 'ミステリアス', patterns: [/ミステリ/i, /怪談/i, /幽霊/i, /魔女/i, /魔法/i, /幻想/i] },
  { key: 'mood', label: 'ノスタルジック', patterns: [/ノスタルジ/i, /レトロ/i, /昭和/i, /平成/i, /青春/i, /初恋/i, /あの頃/i] },
  { key: 'mood', label: 'エモい', patterns: [/エモい/i, /エモ/i, /胸が痛/i, /涙/i, /夕焼け/i, /卒業/i, /別れ/i, /さよなら/i] },
  { key: 'mood', label: 'ダーク', patterns: [/ダーク/i, /闇/i, /地獄/i, /悪魔/i, /カオス/i] },
  { key: 'mood', label: 'ファンキー', patterns: [/ファンキー/i, /ファンク/i, /グルーヴ/i, /ディスコ/i, /ソウル/i] },
  { key: 'mood', label: '甘い', patterns: [/甘い/i, /ハニー/i, /シュガー/i, /キャンディ/i, /チョコ/i, /バニラ/i] },
  { key: 'mood', label: 'セクシー', patterns: [/セクシー/i, /セクシ/i, /エロ/i, /色っぽい/i, /誘惑/i] },
  { key: 'mood', label: '和風', patterns: [/和風/i, /日本風/i, /大和/i, /桜/i, /侍/i, /忍者/i, /演歌/i] },
  { key: 'mood', label: 'エレクトロ', patterns: [/エレクトロ/i, /エレクトロニカ/i, /シンセ/i, /テクノ/i, /edm/i] },
  { key: 'mood', label: 'アコースティック', patterns: [/アコースティック/i, /アコギ/i, /ピアノ/i, /ヴァイオリン/i, /弾き語り/i] },
  { key: 'season', label: '春', patterns: [/春/i, /桜/i, /卒業/i] },
  { key: 'season', label: '夏', patterns: [/夏/i, /海/i, /花火/i] },
  { key: 'season', label: '秋', patterns: [/秋/i] },
  { key: 'season', label: '冬', patterns: [/冬/i, /雪/i, /クリスマス/i] },
  { key: 'tag', label: 'キー確認済み', patterns: [/キー\s*(確認済み|あり|有り|公開|わかる|分かる)/i] },
  { key: 'tag', label: '定番', patterns: [/定番/i] },
  { key: 'tag', label: '久しぶり候補', patterns: [/久しぶり候補/i] },
  { key: 'tag', label: 'レア', patterns: [/レア/i] },
  { key: 'key', label: '+1', patterns: [/\+1/i, /プラス1/i] },
  { key: 'key', label: '+2', patterns: [/\+2/i, /プラス2/i] },
  { key: 'key', label: '+3', patterns: [/\+3/i, /プラス3/i] },
  { key: 'key', label: '-1', patterns: [/-1/i, /マイナス1/i] },
  { key: 'key', label: '-2', patterns: [/-2/i, /マイナス2/i] },
  { key: 'key', label: '-3', patterns: [/-3/i, /マイナス3/i] },
];

const NATURAL_RULES = [
  { pattern: /最近\s*(歌っ?て)?\s*(いない|ない|なさそう|なさげ)/i, key: 'days', op: '>', val: '30' },
  { pattern: /しばらく\s*(歌っ?て)?\s*(いない|ない)/i, key: 'days', op: '>', val: '30' },
  { pattern: /(久しぶり|久々|半年以上|180日以上|長く\s*歌っ?て\s*(いない|ない))/i, key: 'last', op: ':', val: 'stale' },
  { pattern: /(最近\s*(歌った|歌ってる|歌われた)|30日以内)/i, key: 'last', op: ':', val: 'fresh' },
  { pattern: /(履歴未確認|未歌唱|歌ったこと\s*(が)?\s*ない)/i, key: 'last', op: ':', val: 'never' },
  { pattern: /(定番|よく歌う|よく歌っている)/i, key: 'count', op: '>=', val: '8' },
  { pattern: /(レア|あまり歌っていない|あまり歌わない)/i, key: 'count', op: '<=', val: '2' },
  { pattern: /(10回以上|10回超え|たくさん歌)/i, key: 'count', op: '>=', val: '10' },
  { pattern: /(5回以下|5回以内|少なめ)/i, key: 'count', op: '<=', val: '5' },
  { pattern: /(100日以上|3ヶ月以上|半年以上)\s*(歌っ?て)?\s*(いない|ない)/i, key: 'days', op: '>', val: '100' },
];

/**
 * @param {string} value
 * @returns {string}
 */
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
