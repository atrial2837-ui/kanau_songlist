/**
 * @file tests/usecase/list-incomplete-songs.test.js
 * @description listIncompleteSongs UseCase のテスト。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { listIncompleteSongs } from '../../src/usecase/list-incomplete-songs.js';
import { ValidationError } from '../../src/domain/error/validation-error.js';
import {
  InMemoryArtistRepository,
  InMemorySongRepository,
} from '../../src/infra/in-memory/index.js';

/**
 * テスト用セットアップ。
 * @returns {{ deps: import('../../src/usecase/list-incomplete-songs.js').ListIncompleteSongsDeps }}
 */
async function setup() {
  const artists = new InMemoryArtistRepository();
  const songs = new InMemorySongRepository(artists);

  const { id: artistId } = await artists.insert({
    name: 'YOASOBI',
    normalizedName: 'yoasobi',
    createdAt: '2026-01-01T00:00:00.000Z',
  });
  const base = {
    normalizedTitle: 'x',
    artistId,
    createdAt: '2026-01-01T00:00:00.000Z',
  };

  // 設定済み (キー・ジャンルともあり)
  await songs.insert({
    ...base, title: '完璧な曲', songKey: '完璧な曲__yoasobi',
    displayKey: '原キー', genre: 'J-POP',
  });
  // キー未設定
  await songs.insert({
    ...base, title: 'キーなし曲', songKey: 'キーなし曲__yoasobi',
    displayKey: '', genre: 'J-POP',
  });
  // ジャンル未設定 ('')
  await songs.insert({
    ...base, title: 'ジャンルなし曲', songKey: 'ジャンルなし曲__yoasobi',
    displayKey: '-1', genre: '',
  });
  // ジャンル未分類 ('未分類' も未設定扱い)
  await songs.insert({
    ...base, title: '未分類曲', songKey: '未分類曲__yoasobi',
    displayKey: '+2', genre: '未分類',
  });
  // 両方未設定
  await songs.insert({
    ...base, title: '全部なし曲', songKey: '全部なし曲__yoasobi',
    displayKey: '', genre: '',
  });

  return { deps: { songs } };
}

describe('listIncompleteSongs', () => {
  test('missing=all でキーまたはジャンル未設定の曲を返す', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'all' });
    assert.deepEqual(
      result.songs.map((s) => s.title).sort(),
      ['キーなし曲', 'ジャンルなし曲', '未分類曲', '全部なし曲'].sort(),
    );
  });

  test('missing=genre でジャンル未設定(空・未分類)の曲を返す', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'genre' });
    assert.deepEqual(
      result.songs.map((s) => s.title).sort(),
      ['ジャンルなし曲', '未分類曲', '全部なし曲'].sort(),
    );
  });

  test('missing=key でキー未設定の曲を返す', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'key' });
    assert.deepEqual(
      result.songs.map((s) => s.title).sort(),
      ['キーなし曲', '全部なし曲'].sort(),
    );
  });

  test('missing 省略時は all 扱い', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, {});
    assert.equal(result.songs.length, 4);
  });

  test('不正な missing は ValidationError', async () => {
    const { deps } = await setup();
    await assert.rejects(() => listIncompleteSongs(deps, { missing: 'xxx' }), ValidationError);
  });

  test('limit で件数が制限される', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'all', limit: 2 });
    assert.equal(result.songs.length, 2);
  });

  test('limit 未指定はデフォルト 200', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'all' });
    assert.equal(result.songs.length, 4);
  });

  test('songs プロパティを含むオブジェクトを返す', async () => {
    const { deps } = await setup();
    const result = await listIncompleteSongs(deps, { missing: 'key' });
    assert.ok(Array.isArray(result.songs));
  });
});
