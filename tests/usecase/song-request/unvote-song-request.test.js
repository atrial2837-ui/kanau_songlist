/**
 * @file tests/usecase/song-request/unvote-song-request.test.js
 * @description unvoteSongRequest UseCase のテスト。
 *
 * ログイン機能がないため誰が投票したかはサーバーで持たない。
 * このユースケースは「取り消し要求」を受けて票数を1減らすだけで、
 * 二重取り消しでも負にならないことをリポジトリと合わせて確認する。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { unvoteSongRequest } from '../../../src/usecase/song-request/unvote-song-request.js';
import { NotFoundError } from '../../../src/domain/error/not-found-error.js';
import { ValidationError } from '../../../src/domain/error/validation-error.js';

/**
 * decrementVote だけを持つ最小のフェイクリポジトリ。
 * 票数は 0 を下限にする（D1 側の CASE 式と同じ挙動）。
 * @param {Record<number, number>} initialCounts - { id: voteCount }
 */
function fakeDeps(initialCounts = {}) {
  const counts = { ...initialCounts };
  return {
    calls: [],
    songRequests: {
      async decrementVote(id) {
        if (!(id in counts)) return null;
        counts[id] = counts[id] > 0 ? counts[id] - 1 : 0;
        return { id, title: 'テスト曲', voteCount: counts[id] };
      },
    },
    counts,
  };
}

describe('unvoteSongRequest', () => {
  test('投票数が1減る', async () => {
    const deps = fakeDeps({ 1: 3 });
    const item = await unvoteSongRequest(deps, { id: 1 });
    assert.equal(item.voteCount, 2);
  });

  test('0票のとき取り消しても負にならない', async () => {
    const deps = fakeDeps({ 1: 0 });
    const item = await unvoteSongRequest(deps, { id: 1 });
    assert.equal(item.voteCount, 0);
  });

  test('連続で取り消しても0で止まる', async () => {
    const deps = fakeDeps({ 1: 1 });
    await unvoteSongRequest(deps, { id: 1 });
    const item = await unvoteSongRequest(deps, { id: 1 });
    assert.equal(item.voteCount, 0);
  });

  test('存在しない id は NotFoundError', async () => {
    const deps = fakeDeps({ 1: 1 });
    await assert.rejects(
      () => unvoteSongRequest(deps, { id: 999 }),
      NotFoundError,
    );
  });

  test('不正な id は ValidationError', async () => {
    const deps = fakeDeps({ 1: 1 });
    for (const id of [0, -1, 1.5, NaN, undefined, null, '1']) {
      await assert.rejects(
        () => unvoteSongRequest(deps, { id }),
        ValidationError,
        `id=${String(id)} は ValidationError であるべき`,
      );
    }
  });
});
