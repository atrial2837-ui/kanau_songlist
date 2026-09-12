/**
 * @module tests/contract/song-repository.contract
 * @description SongRepository の契約テスト (共通テストスイート)。
 *
 * 任意の SongRepository 実装に対して同一テストを実行できる。
 * InMemory, D1Worker, D1Rest など、新しい実装を追加する際は
 * このモジュールの `runSongRepositoryContract` を呼ぶだけでよい。
 *
 * @example
 * import { runSongRepositoryContract } from '../../contract/song-repository.contract.js';
 * import { InMemorySongRepository } from '../../../src/infra/in-memory/in-memory-song-repository.js';
 *
 * runSongRepositoryContract('InMemorySongRepository', async () => {
 *   const repo = new InMemorySongRepository();
 *   return { repo };
 * });
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';

/**
 * @typedef {import('../../src/domain/port/repositories/song-repository.js').SongRepository} SongRepository
 * @typedef {import('../../src/domain/port/repositories/song-repository.js').NewSong} NewSong
 */

/** @returns {NewSong} */
function makeSong(overrides = {}) {
  return {
    title: 'テスト曲',
    normalizedTitle: 'テスト曲',
    artistId: 1,
    songKey: 'テスト曲__アーティスト',
    displayKey: '',
    genre: 'J-POP',
    createdAt: '2026-01-01T00:00:00.000Z',
    ...overrides,
  };
}

/**
 * @param {string} label                       テストラベル ('InMemory', 'D1Worker', 'D1Rest')
 * @param {() => Promise<{ repo: SongRepository, cleanup?: () => Promise<void> }>} factory
 */
export function runSongRepositoryContract(label, factory) {
  test(`${label}: findByKey - 存在しない key は null を返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const result = await repo.findByKey('nonexistent__key');
      assert.equal(result, null);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: insert then findByKey - 登録後に key で取得できる`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const song = makeSong();
      await repo.insert(song);
      const found = await repo.findByKey(song.songKey);
      assert.ok(found !== null);
      assert.equal(found.title, song.title);
      assert.equal(found.song_key, song.songKey);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: insert - 返り値に id が含まれる`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const { id } = await repo.insert(makeSong());
      assert.equal(typeof id, 'number');
      assert.ok(id > 0);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: insert - 同一 song_key の重複登録は Error を throw する`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const song = makeSong();
      await repo.insert(song);
      await assert.rejects(() => repo.insert(song), Error);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findAll - 空の場合は空配列を返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const all = await repo.findAll();
      assert.deepEqual(all, []);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findAll - 複数登録後に全件取得できる`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ songKey: 'a__x' }));
      await repo.insert(makeSong({ songKey: 'b__y' }));
      const all = await repo.findAll();
      assert.equal(all.length, 2);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: updateMetadata - displayKey と genre が更新される`, async () => {
    const { repo, cleanup } = await factory();
    try {
      const { id } = await repo.insert(makeSong());
      await repo.updateMetadata(id, { displayKey: '+2', genre: 'ボカロ' });
      const found = await repo.findByKey(makeSong().songKey);
      assert.ok(found !== null);
      assert.equal(found.display_key, '+2');
      assert.equal(found.genre, 'ボカロ');
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: search - クエリにヒットする曲のみ返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ title: 'ラブソング', songKey: 'ラブソング__a' }));
      await repo.insert(makeSong({ title: '別の曲', songKey: '別の曲__b' }));
      const results = await repo.search('ラブ', 80);
      assert.equal(results.length, 1);
      assert.equal(results[0].title, 'ラブソング');
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: search - limit で件数が制限される`, async () => {
    const { repo, cleanup } = await factory();
    try {
      for (let i = 0; i < 5; i++) {
        await repo.insert(makeSong({ title: `曲${i}`, songKey: `曲${i}__x` }));
      }
      const results = await repo.search('曲', 3);
      assert.equal(results.length, 3);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: search - マッチなしの場合は空配列を返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong());
      const results = await repo.search('zzznotfound', 80);
      assert.deepEqual(results, []);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findByNormalizedTitle - 部分一致で返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ title: 'テスト曲A', normalizedTitle: 'テスト曲a', songKey: 'テスト曲a__x' }));
      await repo.insert(makeSong({ title: '別の曲', normalizedTitle: '別の曲', songKey: '別の曲__x' }));
      const results = await repo.findByNormalizedTitle('テスト曲');
      assert.equal(results.length, 1);
      assert.equal(results[0].normalized_title, 'テスト曲a');
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findById - 存在しない id は null を返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      if (typeof repo.findById !== 'function') return; // optional method
      const result = await repo.findById(9999);
      assert.equal(result, null);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findById - 登録後に id で取得できる`, async () => {
    const { repo, cleanup } = await factory();
    try {
      if (typeof repo.findById !== 'function') return; // optional method
      const { id } = await repo.insert(makeSong());
      const found = await repo.findById(id);
      assert.ok(found !== null);
      assert.equal(found.id, id);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findIncomplete - キーまたはジャンル未設定の曲を返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ title: '完璧', songKey: '完璧__x', displayKey: '原キー', genre: 'J-POP' }));
      await repo.insert(makeSong({ title: 'キーなし', songKey: 'キーなし__x', displayKey: '', genre: 'J-POP' }));
      await repo.insert(makeSong({ title: 'ジャンルなし', songKey: 'ジャンルなし__x', displayKey: '-1', genre: '' }));
      const results = await repo.findIncomplete('all', 100);
      assert.deepEqual(results.map((s) => s.title).sort(), ['キーなし', 'ジャンルなし']);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findIncomplete - genre は空と未分類を未設定扱いする`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ title: '空', songKey: '空__x', displayKey: '原キー', genre: '' }));
      await repo.insert(makeSong({ title: '未分類', songKey: '未分類__x', displayKey: '原キー', genre: '未分類' }));
      await repo.insert(makeSong({ title: '済', songKey: '済__x', displayKey: '原キー', genre: 'J-POP' }));
      const results = await repo.findIncomplete('genre', 100);
      assert.deepEqual(results.map((s) => s.title).sort(), ['未分類', '空']);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findIncomplete - key は display_key 空のみ返す`, async () => {
    const { repo, cleanup } = await factory();
    try {
      await repo.insert(makeSong({ title: 'キーなし', songKey: 'キーなし__x', displayKey: '', genre: 'J-POP' }));
      await repo.insert(makeSong({ title: 'キーあり', songKey: 'キーあり__x', displayKey: '+2', genre: '' }));
      const results = await repo.findIncomplete('key', 100);
      assert.deepEqual(results.map((s) => s.title), ['キーなし']);
    } finally {
      await cleanup?.();
    }
  });

  test(`${label}: findIncomplete - limit で件数が制限される`, async () => {
    const { repo, cleanup } = await factory();
    try {
      for (let i = 0; i < 5; i++) {
        await repo.insert(makeSong({ title: `未設定${i}`, songKey: `未設定${i}__x`, displayKey: '', genre: '' }));
      }
      const results = await repo.findIncomplete('all', 3);
      assert.equal(results.length, 3);
    } finally {
      await cleanup?.();
    }
  });
}
