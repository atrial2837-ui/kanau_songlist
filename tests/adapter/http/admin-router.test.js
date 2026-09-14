import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { buildAdminRouter } from '../../../src/adapter/http/admin-router.js';
import { jsonResponse } from '../../../src/adapter/http/json-presenter.js';
import {
  InMemoryArtistRepository,
  InMemoryChannelRepository,
  InMemorySongChannelStatsRepository,
  InMemorySongRepository,
  InMemoryStreamRepository,
  InMemoryStreamSongRepository,
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

  it('POST /songs/merge で誤登録曲を正規曲へ統合する', async () => {
    const artists = new InMemoryArtistRepository();
    const songs = new InMemorySongRepository(artists);
    const streamSongs = new InMemoryStreamSongRepository();
    const stats = new InMemorySongChannelStatsRepository();
    const clock = new FakeClock(new Date('2026-09-12T00:00:00Z'));
    const NOW = '2026-09-12T00:00:00.000Z';
    const { id: artistId } = await artists.insert({
      name: '歌手', normalizedName: '歌手', createdAt: NOW,
    });
    const { id: targetId } = await songs.insert({
      title: '正規曲', normalizedTitle: '正規曲', artistId,
      songKey: '正規曲__歌手', displayKey: '', genre: '', createdAt: NOW,
    });
    const { id: sourceId } = await songs.insert({
      title: '誤登録曲', normalizedTitle: '誤登録曲', artistId,
      songKey: '誤登録曲__歌手', displayKey: '', genre: '', createdAt: NOW,
    });
    await streamSongs.insertBatch([{
      streamId: 1, songId: sourceId, position: 1, rawText: '誤登録曲',
      titleSnapshot: '誤登録曲', artistSnapshot: '歌手',
      songKeySnapshot: '誤登録曲__歌手', createdAt: NOW,
    }]);
    const router = buildAdminRouter({
      pathPrefix: '/api',
      getDeps: () => ({ songs, streamSongs, stats, artists, clock }),
      getAdminToken: () => null,
      authStrict: false,
      staticDataHandler: async () => jsonResponse({ ok: true }),
    });

    const response = await router.dispatch(
      new Request('http://localhost/api/songs/merge', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sourceSongId: sourceId, targetSongId: targetId }),
      }),
      {},
    );
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.movedStreamSongs, 1);
    assert.equal(await songs.findById(sourceId), null);
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
