/**
 * @module usecase/song-request/unvote-song-request
 * @description 楽曲リクエストの投票取り消しユースケース。
 *
 * ログイン機能がないため「誰が投票したか」はサーバーで管理しない。
 * 投票済みかどうかはクライアント(localStorage)が持ち、取り消し要求として
 * このユースケースを呼ぶ。二重取り消しでも票数が負にならないことは
 * リポジトリ側(decrementVote)で保証する。
 */

import { NotFoundError } from '../../domain/error/not-found-error.js';
import { ValidationError } from '../../domain/error/validation-error.js';

/**
 * @param {object} deps
 * @param {object} deps.songRequests
 * @param {{ id: number }} input
 */
export async function unvoteSongRequest(deps, { id }) {
  if (!Number.isInteger(id) || id < 1) {
    throw new ValidationError('id は 1 以上の整数でなければなりません');
  }
  const item = await deps.songRequests.decrementVote(id);
  if (!item) throw new NotFoundError('リクエストが見つかりません');
  return item;
}
