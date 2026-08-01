/**
 * @file tests/infra/d1-worker/d1-song-request-repository.test.js
 * @description D1SongRequestRepository の SQL 分岐テスト（フェイククライアント）。
 *
 * 特に insert は owner_token_hash 列の有無で挙動が変わるため、
 * マイグレーション未適用の本番でも投稿が失敗しないことを固定する。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { D1SongRequestRepository } from '../../../src/infra/d1-worker/d1-song-request-repository.js';

const BASE_ROW = {
  id: 1,
  title: 'テスト曲',
  artist: '',
  url: null,
  requester_name: null,
  status: 'unregistered',
  vote_count: 1,
  created_at: '2026-07-01T00:00:00Z',
  updated_at: '2026-07-01T00:00:00Z',
};

/**
 * queryFirst を記録するフェイククライアント。
 * @param {(sql: string) => object|Error} handler - SQL に応じて返す行、または投げるエラー
 */
function fakeClient(handler) {
  const calls = [];
  return {
    calls,
    async queryFirst(sql, ...args) {
      calls.push({ sql, args });
      const result = handler(sql);
      if (result instanceof Error) throw result;
      return result;
    },
    async query() { return []; },
    async run() { return { meta: { changes: 1 } }; },
  };
}

describe('D1SongRequestRepository#insert', () => {
  test('owner_token_hash 列がある環境ではハッシュを保存する', async () => {
    const client = fakeClient(() => ({ ...BASE_ROW, owner_token_hash: 'HASH' }));
    const repo = new D1SongRequestRepository(client);

    const item = await repo.insert({ title: 'テスト曲', ownerTokenHash: 'HASH' });

    assert.equal(client.calls.length, 1);
    assert.match(client.calls[0].sql, /owner_token_hash/);
    assert.equal(item.ownerTokenHash, 'HASH');
  });

  test('列が無い環境（0002 未適用）でも投稿は成功する', async () => {
    // 1回目は "no such column"、2回目(列なしSQL)は成功させる
    let first = true;
    const client = fakeClient((sql) => {
      if (first && sql.includes('owner_token_hash')) {
        first = false;
        return new Error('D1_ERROR: no such column: owner_token_hash');
      }
      return { ...BASE_ROW };
    });
    const repo = new D1SongRequestRepository(client);

    const item = await repo.insert({ title: 'テスト曲', ownerTokenHash: 'HASH' });

    assert.equal(client.calls.length, 2, 'フォールバックの再実行が必要');
    assert.doesNotMatch(client.calls[1].sql, /owner_token_hash/);
    assert.equal(item.title, 'テスト曲');
    // 保存できていないので取り消し不可（= null）になる
    assert.equal(item.ownerTokenHash, null);
  });

  test('無関係な SQL エラーは握りつぶさず投げ直す', async () => {
    const client = fakeClient(() => new Error('D1_ERROR: UNIQUE constraint failed'));
    const repo = new D1SongRequestRepository(client);

    await assert.rejects(
      () => repo.insert({ title: 'テスト曲', ownerTokenHash: 'HASH' }),
      /UNIQUE constraint failed/,
    );
    assert.equal(client.calls.length, 1, 'リトライしてはいけない');
  });

  test('別の列が無いエラーもフォールバックしない', async () => {
    const client = fakeClient(() => new Error('D1_ERROR: no such column: title'));
    const repo = new D1SongRequestRepository(client);

    await assert.rejects(
      () => repo.insert({ title: 'テスト曲', ownerTokenHash: 'HASH' }),
      /no such column: title/,
    );
    assert.equal(client.calls.length, 1);
  });
});

describe('D1SongRequestRepository#decrementVote', () => {
  test('0 を下限にする SQL を発行する', async () => {
    const client = fakeClient(() => ({ ...BASE_ROW, vote_count: 0 }));
    const repo = new D1SongRequestRepository(client);

    const item = await repo.decrementVote(1);

    assert.match(client.calls[0].sql, /CASE WHEN vote_count > 0/);
    assert.equal(item.voteCount, 0);
  });

  test('存在しない id では null を返す', async () => {
    const client = fakeClient(() => null);
    const repo = new D1SongRequestRepository(client);
    assert.equal(await repo.decrementVote(999), null);
  });
});

describe('D1SongRequestRepository#findById', () => {
  test('owner_token_hash をエンティティに載せる', async () => {
    const client = fakeClient(() => ({ ...BASE_ROW, owner_token_hash: 'HASH' }));
    const repo = new D1SongRequestRepository(client);

    const item = await repo.findById(1);
    assert.equal(item.ownerTokenHash, 'HASH');
  });

  test('列が無い行では null になる（旧データ扱い）', async () => {
    const client = fakeClient(() => ({ ...BASE_ROW }));
    const repo = new D1SongRequestRepository(client);

    const item = await repo.findById(1);
    assert.equal(item.ownerTokenHash, null);
  });
});
