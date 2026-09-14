/**
 * @file tests/usecase/merge-songs.test.js
 * @description mergeSongs UseCase のテスト。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { mergeSongs } from '../../src/usecase/merge-songs.js';
import { ValidationError } from '../../src/domain/error/validation-error.js';
import { NotFoundError } from '../../src/domain/error/not-found-error.js';
import {
  FakeClock,
  InMemoryArtistRepository,
  InMemorySongRepository,
  InMemoryStreamSongRepository,
  InMemorySongChannelStatsRepository,
} from '../../src/infra/in-memory/index.js';

const NOW = '2026-09-12T00:00:00.000Z';

/**
 * 正規曲 (target) + 誤登録曲 (source, セトリ2行・統計2回) を用意する。
 */
async function setup() {
  const artists = new InMemoryArtistRepository();
  const songs = new InMemorySongRepository(artists);
  const streamSongs = new InMemoryStreamSongRepository();
  const stats = new InMemorySongChannelStatsRepository();
  const clock = new FakeClock(new Date(NOW));

  const { id: canonicalArtistId } = await artists.insert({
    name: '夢川かなう', normalizedName: '夢川かなう', createdAt: NOW,
  });
  const { id: wrongArtistId } = await artists.insert({
    name: '夢川かな', normalizedName: '夢川かな', createdAt: NOW,
  });
  const { id: targetId } = await songs.insert({
    title: 'アイリス', normalizedTitle: 'アイリス', artistId: canonicalArtistId,
    songKey: 'アイリス__夢川かなう', displayKey: '原キー', genre: 'オリジナル', createdAt: NOW,
  });
  const { id: sourceId } = await songs.insert({
    title: 'アイリス', normalizedTitle: 'アイリス', artistId: wrongArtistId,
    songKey: 'アイリス__夢川かな', displayKey: '', genre: '', createdAt: NOW,
  });

  await streamSongs.insertBatch([
    {
      streamId: 1, songId: sourceId, position: 5, rawText: 'アイリス / 夢川かな',
      titleSnapshot: 'アイリス', artistSnapshot: '夢川かな',
      songKeySnapshot: 'アイリス__夢川かな', createdAt: NOW,
    },
    {
      streamId: 2, songId: sourceId, position: 3, rawText: 'アイリス / 夢川かな',
      titleSnapshot: 'アイリス', artistSnapshot: '夢川かな',
      songKeySnapshot: 'アイリス__夢川かな', createdAt: NOW,
    },
    {
      streamId: 3, songId: targetId, position: 1, rawText: 'アイリス / 夢川かなう',
      titleSnapshot: 'アイリス', artistSnapshot: '夢川かなう',
      songKeySnapshot: 'アイリス__夢川かなう', createdAt: NOW,
    },
  ]);

  await stats.upsertIncrement(sourceId, 1, NOW);
  await stats.upsertIncrement(sourceId, 1, NOW);
  for (let i = 0; i < 5; i++) await stats.upsertIncrement(targetId, 1, NOW);

  const deps = { songs, streamSongs, stats, artists, clock };
  return { deps, targetId, sourceId, canonicalArtistId, wrongArtistId };
}

describe('mergeSongs', () => {
  test('参照・統計を付け替えて誤登録曲と孤立アーティストを削除する', async () => {
    const { deps, targetId, sourceId, wrongArtistId } = await setup();
    const result = await mergeSongs(deps, { sourceSongId: sourceId, targetSongId: targetId });

    assert.equal(result.sourceSongId, sourceId);
    assert.equal(result.targetSongId, targetId);
    assert.equal(result.movedStreamSongs, 2);
    assert.equal(result.movedStats, 2);
    assert.equal(result.deletedArtistId, wrongArtistId);

    // セトリ参照は全て target へ (スナップショットのキーも更新)
    const rows = await deps.streamSongs.findAll();
    assert.ok(rows.every((r) => r.song_id !== sourceId));
    assert.equal(rows.filter((r) => r.song_id === targetId).length, 3);
    assert.ok(rows.every((r) => r.song_key_snapshot === 'アイリス__夢川かなう'));

    // 統計は target に合算 (5 + 2)、source 行は削除
    const allStats = await deps.stats.findAll();
    assert.equal(allStats.filter((s) => s.song_id === sourceId).length, 0);
    assert.equal(allStats.find((s) => s.song_id === targetId && s.channel_id === 1)?.sing_count, 7);

    // 誤登録曲・孤立アーティストは削除、正規は残る
    assert.equal(await deps.songs.findById(sourceId), null);
    assert.ok(await deps.songs.findById(targetId));
    assert.equal((await deps.artists.findAll()).some((a) => a.id === wrongArtistId), false);
  });

  test('参照も統計もない誤登録曲はそのまま削除できる', async () => {
    const { deps, targetId } = await setup();
    const { id: lonelyId } = await deps.songs.insert({
      title: 'ゴミ曲', normalizedTitle: 'ゴミ曲', artistId: null,
      songKey: 'ゴミ曲__x', displayKey: '', genre: '', createdAt: NOW,
    });
    const result = await mergeSongs(deps, { sourceSongId: lonelyId, targetSongId: targetId });
    assert.equal(result.movedStreamSongs, 0);
    assert.equal(result.movedStats, 0);
    assert.equal(result.deletedArtistId, null);
    assert.equal(await deps.songs.findById(lonelyId), null);
  });

  test('他曲が使うアーティストは削除しない', async () => {
    const artists = new InMemoryArtistRepository();
    const songs = new InMemorySongRepository(artists);
    const streamSongs = new InMemoryStreamSongRepository();
    const stats = new InMemorySongChannelStatsRepository();
    const clock = new FakeClock(new Date(NOW));
    const { id: artistId } = await artists.insert({
      name: '共有歌手', normalizedName: '共有歌手', createdAt: NOW,
    });
    const { id: targetId } = await songs.insert({
      title: '正規曲', normalizedTitle: '正規曲', artistId,
      songKey: '正規曲__共有歌手', displayKey: '', genre: '', createdAt: NOW,
    });
    const { id: sourceId } = await songs.insert({
      title: '誤登録曲', normalizedTitle: '誤登録曲', artistId,
      songKey: '誤登録曲__共有歌手', displayKey: '', genre: '', createdAt: NOW,
    });
    const result = await mergeSongs(
      { songs, streamSongs, stats, artists, clock },
      { sourceSongId: sourceId, targetSongId: targetId },
    );
    assert.equal(result.deletedArtistId, null);
    assert.equal((await artists.findAll()).length, 1);
  });

  test('同一 id 同士は ValidationError', async () => {
    const { deps, targetId } = await setup();
    await assert.rejects(
      () => mergeSongs(deps, { sourceSongId: targetId, targetSongId: targetId }),
      ValidationError,
    );
  });

  test('存在しない source は NotFoundError', async () => {
    const { deps, targetId } = await setup();
    await assert.rejects(
      () => mergeSongs(deps, { sourceSongId: 9999, targetSongId: targetId }),
      NotFoundError,
    );
  });

  test('存在しない target は NotFoundError', async () => {
    const { deps, sourceId } = await setup();
    await assert.rejects(
      () => mergeSongs(deps, { sourceSongId: sourceId, targetSongId: 9999 }),
      NotFoundError,
    );
  });
});
