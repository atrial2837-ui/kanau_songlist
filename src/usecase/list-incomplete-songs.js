/**
 * @module usecase/list-incomplete-songs
 * @description キー / ジャンル未設定曲の一覧 UseCase。
 *
 * 管理画面の「未設定のキー・ジャンル」プルダウンが使用する。
 * 未設定の定義は domain/analytics/data-quality.js と同義:
 *   - ジャンル未設定 = genre が '' または '未分類'
 *   - キー未設定 = display_key が ''
 *
 * @副作用 なし (Repository への読み取りのみ)
 */

/**
 * @typedef {object} ListIncompleteSongsDeps
 * @property {import('../domain/port/repositories/song-repository.js').SongRepository} songs
 */

/**
 * @typedef {object} ListIncompleteSongsInput
 * @property {string} [missing] - 'all' (既定) | 'genre' | 'key'
 * @property {number} [limit] - 最大取得件数 (既定 200, 上限 500)
 */

/**
 * @typedef {object} ListIncompleteSongsResult
 * @property {import('../domain/port/repositories/song-repository.js').Song[]} songs
 */

import { ValidationError } from '../domain/error/validation-error.js';

const MISSING_VALUES = new Set(['all', 'genre', 'key']);

const DEFAULT_LIMIT = 200;
const MAX_LIMIT = 500;

/**
 * キー / ジャンルが未設定の曲をタイトル順で返す。
 *
 * @param {ListIncompleteSongsDeps} deps
 * @param {ListIncompleteSongsInput} [input]
 * @returns {Promise<ListIncompleteSongsResult>}
 */
export async function listIncompleteSongs(deps, input = {}) {
  const missing = input.missing ?? 'all';
  if (!MISSING_VALUES.has(missing)) {
    throw new ValidationError(`missing は all/genre/key のいずれかで指定してください: ${missing}`);
  }

  let limit = Number(input.limit);
  if (!Number.isFinite(limit) || limit <= 0) limit = DEFAULT_LIMIT;
  limit = Math.min(Math.floor(limit), MAX_LIMIT);

  const songs = await deps.songs.findIncomplete(missing, limit);
  return { songs };
}
