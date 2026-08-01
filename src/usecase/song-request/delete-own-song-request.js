/**
 * @module usecase/song-request/delete-own-song-request
 * @description 投稿者本人による楽曲リクエストの取り消しユースケース。
 *
 * ログイン機能がないため、投稿時に発行した所有者トークン(生値はクライアント保持)を
 * 送ってもらい、DB のハッシュと照合して本人性を確認する。
 * 本人であっても「他の人が投票済み」「運営が対応を開始済み」の場合は取り消せない。
 */

import { NotFoundError } from '../../domain/error/not-found-error.js';
import { ValidationError } from '../../domain/error/validation-error.js';
import { ForbiddenError } from '../../domain/error/forbidden-error.js';
import { ConflictError } from '../../domain/error/conflict-error.js';
import { verifyOwnerToken } from '../../domain/song-request/owner-token.js';

/**
 * 取り消しを許容する票数の上限。
 * song_requests.vote_count は DEFAULT 1（投稿者自身の1票）で始まるため、
 * 1票のままなら「まだ誰も賛同していない」= 取り消してよい状態とみなす。
 * 2票以上は他の人が「聴きたい」を押しているので取り消させない。
 */
const MAX_VOTES_FOR_SELF_DELETE = 1;

/** 運営が未対応の状態。これ以外に進んでいたら取り消せない。 */
const DELETABLE_STATUS = 'unregistered';

/**
 * @param {object} deps
 * @param {object} deps.songRequests
 * @param {{ id: number, ownerToken: string }} input
 * @returns {Promise<{ ok: true }>}
 */
export async function deleteOwnSongRequest(deps, { id, ownerToken }) {
  if (!Number.isInteger(id) || id < 1) {
    throw new ValidationError('id は 1 以上の整数でなければなりません');
  }
  if (!ownerToken || typeof ownerToken !== 'string') {
    throw new ValidationError('取り消しキーがありません');
  }

  const item = await deps.songRequests.findById(id);
  if (!item) throw new NotFoundError('リクエストが見つかりません');

  // トークン不一致 / ハッシュ未設定(トークン方式導入前の古いデータ)はどちらも拒否。
  // 「存在しない」と区別できるが、ID が連番で総当たり可能なため
  // 本人でないことの通知以上の情報は返さない。
  const ok = await verifyOwnerToken(ownerToken, item.ownerTokenHash);
  if (!ok) throw new ForbiddenError('このリクエストは取り消せません');

  if (Number(item.voteCount || 0) > MAX_VOTES_FOR_SELF_DELETE) {
    throw new ConflictError('他の人が投票しているため取り消せません');
  }
  if ((item.status || DELETABLE_STATUS) !== DELETABLE_STATUS) {
    throw new ConflictError('すでに対応が始まっているため取り消せません');
  }

  const deleted = await deps.songRequests.delete(id);
  if (!deleted) throw new NotFoundError('リクエストが見つかりません');
  return { ok: true };
}
