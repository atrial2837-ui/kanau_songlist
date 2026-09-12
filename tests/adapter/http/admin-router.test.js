import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { buildAdminRouter } from '../../../src/adapter/http/admin-router.js';
import { jsonResponse } from '../../../src/adapter/http/json-presenter.js';
import {
  InMemoryChannelRepository,
  InMemorySongRepository,
  InMemoryStreamRepository,
  FakeClock,
} from '../../../src/infra/in-memory/index.js';

describe('buildAdminRouter', () => {
  it('GET /status で loadAdminStatus 結果を返す', async () => {
    const channels = new InMemoryChannelRepository();
    const songs = new InMemorySongRepository();
    const streams = new InMemoryStreamRepository();
    const clock = new FakeClock(new Date('2026-05-24T12:00:00Z'));

    const router = buildAdminRouter({
      pathPrefix: '/api',
      getDeps: () => ({ channels, songs, streams, clock }),
      getAdminToken: () => null,
      authStrict: false,
      staticDataHandler: async () => jsonResponse({ ok: true }),
    });

    const request = new Request('http://localhost/api/status', { method: 'GET' });
    const response = await router.dispatch(request, {});
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.ok(Array.isArray(body.channels));
    assert.ok(Array.isArray(body.issues));
    assert.ok(body.checkedAt);
  });

  it('GET /songs/incomplete でキー・ジャンル未設定の曲を返す', async () => {
    const songs = new InMemorySongRepository();
    const base = {
      normalizedTitle: 'x',
      artistId: 1,
      createdAt: '2026-01-01T00:00:00.000Z',
    };
    await songs.insert({ ...base, title: 'キーなし', songKey: 'キーなし__x', displayKey: '', genre: 'J-POP' });
    await songs.insert({ ...base, title: '完璧', songKey: '完璧__x', displayKey: '原キー', genre: 'J-POP' });
    const router = buildAdminRouter({
      pathPrefix: '/api',
      getDeps: () => ({ songs }),
      getAdminToken: () => null,
      authStrict: false,
      staticDataHandler: async () => jsonResponse({ ok: true }),
    });

    const response = await router.dispatch(
      new Request('http://localhost/api/songs/incomplete?missing=key'),
      {},
    );
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.songs.length, 1);
    assert.equal(body.songs[0].title, 'キーなし');
  });

  it('GET /songs/incomplete は不正な missing で 400', async () => {
    const router = buildAdminRouter({
      pathPrefix: '/api',
      getDeps: () => ({ songs: new InMemorySongRepository() }),
      getAdminToken: () => null,
      authStrict: false,
      staticDataHandler: async () => jsonResponse({ ok: true }),
    });

    const response = await router.dispatch(
      new Request('http://localhost/api/songs/incomplete?missing=xxx'),
      {},
    );
    assert.equal(response.status, 400);
  });

  it('pathPrefix なしで /health', async () => {
    const router = buildAdminRouter({
      pathPrefix: '',
      getDeps: () => ({
        channels: new InMemoryChannelRepository(),
        songs: new InMemorySongRepository(),
        streams: new InMemoryStreamRepository(),
        clock: new FakeClock(new Date('2026-05-24T12:00:00Z')),
      }),
      getAdminToken: () => null,
      authStrict: false,
      staticDataHandler: async () => jsonResponse({ ok: true }),
    });

    const response = await router.dispatch(
      new Request('http://localhost/health', { method: 'GET' }),
      { DB: {} },
    );
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.ok, true);
    assert.equal(body.db, true);
  });
});
