/**
 * @file tests/usecase/song-request/delete-own-song-request.test.js
 * @description deleteOwnSongRequest UseCase のテスト。
 *
 * ログイン機能がないため、投稿時に配った所有者トークンで本人性を確認する。
 * 「本人か」だけでなく「まだ取り消してよい状態か」も判定するため、
 * 指示書の7ケース（未送信/不在/不一致/旧データ/投票済み/対応開始済み/成功）を網羅する。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { deleteOwnSongRequest } from '../../../src/usecase/song-request/delete-own-song-request.js';
import { hashOwnerToken } from '../../../src/domain/song-request/owner-token.js';
import { NotFoundError } from '../../../src/domain/error/not-found-error.js';
import { ValidationError } from '../../../src/domain/error/validation-error.js';
import { ForbiddenError } from '../../../src/domain/error/forbidden-error.js';
import { ConflictError } from '../../../src/domain/error/conflict-error.js';

const TOKEN = 'a'.repeat(64);

/**
 * findById / delete だけを持つ最小のフェイクリポジトリ。
 * @param {object|null} item - findById が返す行（null なら未存在）
 */
function fakeDeps(item) {
  const state = { deleted: false };
  return {
    state,
    songRequests: {
      async findById() { return item; },
      async delete() { state.deleted = true; return true; },
    },
  };
}

/**
 * 指定条件のリクエスト行を作る（既定は削除可能な状態）。
 * voteCount の既定を 1 にしているのは、song_requests.vote_count が
 * DEFAULT 1（投稿者自身の1票）で作られるため＝投稿直後の実際の状態。
 */
async function makeItem(overrides = {}) {
  return {
    id: 1,
    title: 'テスト曲',
    status: 'unregistered',
    voteCount: 1,
    ownerTokenHash: await hashOwnerToken(TOKEN),
    ...overrides,
  };
}

describe('deleteOwnSongRequest', () => {
  test('本人・未対応・1票以下なら削除できる', async () => {
    const deps = fakeDeps(await makeItem());
    const res = await deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN });
    assert.deepEqual(res, { ok: true });
    assert.equal(deps.state.deleted, true);
  });

  test('0票でも削除できる', async () => {
    const deps = fakeDeps(await makeItem({ voteCount: 0 }));
    await deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN });
    assert.equal(deps.state.deleted, true);
  });

  test('投稿直後（DEFAULT 1 = 自分の1票のみ）は削除できる', async () => {
    // song_requests.vote_count は DEFAULT 1 で作られる。
    // ここが取り消せないと「投稿した直後に自分で消せない」不具合になる。
    const deps = fakeDeps(await makeItem({ voteCount: 1 }));
    await deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN });
    assert.equal(deps.state.deleted, true);
  });

  test('トークン未送信は ValidationError（400）', async () => {
    const deps = fakeDeps(await makeItem());
    for (const token of ['', undefined, null]) {
      await assert.rejects(
        () => deleteOwnSongRequest(deps, { id: 1, ownerToken: token }),
        (err) => err instanceof ValidationError && err.status === 400,
      );
    }
    assert.equal(deps.state.deleted, false);
  });

  test('存在しない id は NotFoundError（404）', async () => {
    const deps = fakeDeps(null);
    await assert.rejects(
      () => deleteOwnSongRequest(deps, { id: 999, ownerToken: TOKEN }),
      (err) => err instanceof NotFoundError && err.status === 404,
    );
  });

  test('トークン不一致は ForbiddenError（403）', async () => {
    const deps = fakeDeps(await makeItem());
    await assert.rejects(
      () => deleteOwnSongRequest(deps, { id: 1, ownerToken: 'b'.repeat(64) }),
      (err) => err instanceof ForbiddenError && err.status === 403,
    );
    assert.equal(deps.state.deleted, false);
  });

  test('旧データ（ハッシュ未設定）は ForbiddenError（403）', async () => {
    const deps = fakeDeps(await makeItem({ ownerTokenHash: null }));
    await assert.rejects(
      () => deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN }),
      (err) => err instanceof ForbiddenError && err.status === 403,
    );
    assert.equal(deps.state.deleted, false);
  });

  test('他の人が投票済み（2票以上）は ConflictError（409）', async () => {
    const deps = fakeDeps(await makeItem({ voteCount: 2 }));
    await assert.rejects(
      () => deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN }),
      (err) => err instanceof ConflictError && err.status === 409,
    );
    assert.equal(deps.state.deleted, false);
  });

  test('運営が対応開始済み（status != unregistered）は ConflictError（409）', async () => {
    for (const status of ['singable', 'practicing']) {
      const deps = fakeDeps(await makeItem({ status }));
      await assert.rejects(
        () => deleteOwnSongRequest(deps, { id: 1, ownerToken: TOKEN }),
        (err) => err instanceof ConflictError && err.status === 409,
      );
      assert.equal(deps.state.deleted, false);
    }
  });

  test('不正な id は ValidationError', async () => {
    const deps = fakeDeps(await makeItem());
    for (const id of [0, -1, 1.5, NaN, '1']) {
      await assert.rejects(
        () => deleteOwnSongRequest(deps, { id, ownerToken: TOKEN }),
        ValidationError,
      );
    }
  });
});
