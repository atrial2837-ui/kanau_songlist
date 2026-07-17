// コミュニティタイムスタンプ API クライアントの契約テスト。
// パス・メソッド・payload・エラー時挙動を fetch スタブで固定する。
import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

let calls = [];
let nextResponse;
globalThis.fetch = async (url, init) => {
  calls.push({ url, init });
  return nextResponse;
};

const { fetchCommunityTimestamps, submitCommunityTimestamp } =
  await import('../../docs/js/player/timestamps/repository.js');

const jsonRes = (ok, body, statusText = '') => ({
  ok, statusText, json: async () => body,
});

describe('timestamp repository 契約', () => {
  beforeEach(() => { calls = []; });

  it('GET /api/timestamps/{channel}/{index}、channelはencodeURIComponent', async () => {
    nextResponse = jsonRes(true, { items: [{ songIndex: 0, timeSeconds: 61 }] });
    const items = await fetchCommunityTimestamps('new ch', 5);
    assert.equal(calls[0].url, '/api/timestamps/new%20ch/5');
    assert.equal(calls[0].init, undefined);
    assert.deepEqual(items, [{ songIndex: 0, timeSeconds: 61 }]);
  });

  it('GET: items欠落は[]、非okはnull', async () => {
    nextResponse = jsonRes(true, {});
    assert.deepEqual(await fetchCommunityTimestamps('new', 1), []);
    nextResponse = jsonRes(false, {});
    assert.equal(await fetchCommunityTimestamps('new', 1), null);
  });

  it('POST: JSONヘッダ + {songIndex,timeSeconds,submitterNote} payload', async () => {
    nextResponse = jsonRes(true, {});
    const r = await submitCommunityTimestamp('new', 7, { songIndex: 2, timeSeconds: 130, submitterNote: 'x' });
    assert.deepEqual(r, { ok: true });
    assert.equal(calls[0].url, '/api/timestamps/new/7');
    assert.equal(calls[0].init.method, 'POST');
    assert.equal(calls[0].init.headers['Content-Type'], 'application/json');
    assert.deepEqual(JSON.parse(calls[0].init.body), { songIndex: 2, timeSeconds: 130, submitterNote: 'x' });
  });

  it('POST失敗: body.error優先、無ければstatusText', async () => {
    nextResponse = jsonRes(false, { error: 'rate limited' });
    assert.deepEqual(await submitCommunityTimestamp('new', 7, { songIndex: 0, timeSeconds: 1, submitterNote: '' }),
      { ok: false, error: 'rate limited' });
    nextResponse = { ok: false, statusText: 'Bad Gateway', json: async () => { throw new Error('no json'); } };
    assert.deepEqual(await submitCommunityTimestamp('new', 7, { songIndex: 0, timeSeconds: 1, submitterNote: '' }),
      { ok: false, error: 'Bad Gateway' });
  });
});
