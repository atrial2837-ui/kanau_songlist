/**
 * @module usecase/song-request/submit-song-request
 * @description 楽曲リクエスト投稿ユースケース。
 */

import { ValidationError } from '../../domain/error/validation-error.js';

const TITLE_MAX = 120;
const ARTIST_MAX = 120;
const URL_MAX = 2000;
const NAME_MAX = 40;

/**
 * @param {object} deps
 * @param {object} deps.songRequests
 * @param {object} input
 * @param {string} input.title
 * @param {string} [input.artist]
 * @param {string|null} [input.url]
 * @param {string|null} [input.requesterName]
 */
export async function submitSongRequest(deps, input) {
  const title = clean(input.title);
  const artist = clean(input.artist);
  const url = clean(input.url);
  const requesterName = clean(input.requesterName);

  if (!title) throw new ValidationError('曲名を入力してください');
  if (title.length > TITLE_MAX) throw new ValidationError(`曲名は${TITLE_MAX}文字以内にしてください`);
  if (artist.length > ARTIST_MAX) throw new ValidationError(`アーティスト名は${ARTIST_MAX}文字以内にしてください`);
  if (url.length > URL_MAX) throw new ValidationError(`URLは${URL_MAX}文字以内にしてください`);
  if (requesterName.length > NAME_MAX) throw new ValidationError(`名前は${NAME_MAX}文字以内にしてください`);

  return deps.songRequests.insert({
    title,
    artist,
    url: url || null,
    requesterName: requesterName || null,
  });
}

function clean(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .trim();
}
