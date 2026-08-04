/**
 * @file tests/frontend/timeline-grouping.test.js
 * @description 配信タイムラインの並び替え・月グループ化・セトリ整形のテスト。
 *
 * 月グループは「日付順ソートのときだけ」使われる前提なので、
 * ソート結果とグループ化の組み合わせが崩れないことを固定する。
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  groupByYearMonth,
  sortTimelineStreams,
  formatStreamSetlist,
} from '../../docs/js/views/timeline/grouping.js';

/** テスト用の配信を作る */
function stream({ date, index = 1, songs = 0, title = '配信' }) {
  return {
    date: new Date(date),
    index,
    title,
    songs: Array.from({ length: songs }, (_, i) => ({ title: `曲${i + 1}`, artist: 'A' })),
  };
}

const SAMPLE = [
  stream({ date: '2026-07-20', index: 10, songs: 5, title: 'ゼータ' }),
  stream({ date: '2026-07-02', index: 8,  songs: 20, title: 'アルファ' }),
  stream({ date: '2026-06-15', index: 5,  songs: 12, title: 'ベータ' }),
  stream({ date: '2025-12-31', index: 1,  songs: 3,  title: 'オメガ' }),
];

describe('groupByYearMonth', () => {
  it('年月ごとにまとめる', () => {
    const groups = groupByYearMonth(SAMPLE);
    assert.deepEqual(groups.map((g) => g.key), ['2026-07', '2026-06', '2025-12']);
    assert.equal(groups[0].streams.length, 2);
  });

  it('key は 0 埋め・label は日本語表記', () => {
    const [g] = groupByYearMonth([stream({ date: '2026-01-05' })]);
    assert.equal(g.key, '2026-01');
    assert.equal(g.label, '2026年1月');
  });

  it('入力の並び順を保つ（ソート済みを前提に月が並ぶ）', () => {
    const asc = sortTimelineStreams(SAMPLE, 'date-asc');
    assert.deepEqual(groupByYearMonth(asc).map((g) => g.key), ['2025-12', '2026-06', '2026-07']);
  });

  it('空配列なら空配列', () => {
    assert.deepEqual(groupByYearMonth([]), []);
  });

  it('年をまたぐ同月は別グループになる', () => {
    const groups = groupByYearMonth([
      stream({ date: '2026-01-10' }),
      stream({ date: '2025-01-10' }),
    ]);
    assert.equal(groups.length, 2);
  });

  it('文字列の日付でも扱える', () => {
    const [g] = groupByYearMonth([{ date: '2026-03-01', songs: [] }]);
    assert.equal(g.key, '2026-03');
  });
});

describe('sortTimelineStreams', () => {
  it('date-desc（既定）は新しい順', () => {
    const titles = sortTimelineStreams(SAMPLE, 'date-desc').map((s) => s.title);
    assert.deepEqual(titles, ['ゼータ', 'アルファ', 'ベータ', 'オメガ']);
  });

  it('未知のソート指定は date-desc として扱う', () => {
    const a = sortTimelineStreams(SAMPLE, 'unknown-sort').map((s) => s.title);
    const b = sortTimelineStreams(SAMPLE, 'date-desc').map((s) => s.title);
    assert.deepEqual(a, b);
  });

  it('date-asc は古い順', () => {
    const titles = sortTimelineStreams(SAMPLE, 'date-asc').map((s) => s.title);
    assert.deepEqual(titles, ['オメガ', 'ベータ', 'アルファ', 'ゼータ']);
  });

  it('songs-desc は曲数の多い順', () => {
    const counts = sortTimelineStreams(SAMPLE, 'songs-desc').map((s) => s.songs.length);
    assert.deepEqual(counts, [20, 12, 5, 3]);
  });

  it('songs-asc は曲数の少ない順', () => {
    const counts = sortTimelineStreams(SAMPLE, 'songs-asc').map((s) => s.songs.length);
    assert.deepEqual(counts, [3, 5, 12, 20]);
  });

  it('index-desc / index-asc は枠番号順', () => {
    assert.deepEqual(sortTimelineStreams(SAMPLE, 'index-desc').map((s) => s.index), [10, 8, 5, 1]);
    assert.deepEqual(sortTimelineStreams(SAMPLE, 'index-asc').map((s) => s.index), [1, 5, 8, 10]);
  });

  it('title は日本語の読み順で並ぶ', () => {
    const titles = sortTimelineStreams(SAMPLE, 'title').map((s) => s.title);
    assert.deepEqual(titles, ['アルファ', 'オメガ', 'ゼータ', 'ベータ']);
  });

  it('元の配列を壊さない', () => {
    const before = SAMPLE.map((s) => s.title);
    sortTimelineStreams(SAMPLE, 'title');
    assert.deepEqual(SAMPLE.map((s) => s.title), before);
  });

  it('曲数が同じときは新しい配信・大きい枠番号が先（安定した決着）', () => {
    const tie = [
      stream({ date: '2026-07-01', index: 1, songs: 5, title: '古い' }),
      stream({ date: '2026-07-05', index: 2, songs: 5, title: '新しい' }),
    ];
    assert.deepEqual(sortTimelineStreams(tie, 'songs-desc').map((s) => s.title), ['新しい', '古い']);
  });

  it('空配列でも例外にならない', () => {
    assert.deepEqual(sortTimelineStreams([], 'date-desc'), []);
  });
});

describe('formatStreamSetlist', () => {
  it('曲名 / アーティスト の行に整形する', () => {
    const text = formatStreamSetlist({
      songs: [
        { title: 'アイドル', artist: 'YOASOBI' },
        { title: 'Lemon', artist: '米津玄師' },
      ],
    });
    assert.equal(text, 'アイドル / YOASOBI\nLemon / 米津玄師');
  });

  it('アーティストが無い曲は曲名のみ（区切りを残さない）', () => {
    assert.equal(formatStreamSetlist({ songs: [{ title: 'magnet' }] }), 'magnet');
    assert.equal(formatStreamSetlist({ songs: [{ title: 'magnet', artist: '  ' }] }), 'magnet');
  });

  it('曲名が空の行は落とす', () => {
    const text = formatStreamSetlist({ songs: [{ title: '' }, { title: 'A', artist: 'B' }] });
    assert.equal(text, 'A / B');
  });

  it('前後の空白を除去する', () => {
    assert.equal(formatStreamSetlist({ songs: [{ title: '  X  ', artist: '  Y  ' }] }), 'X / Y');
  });

  it('songs が無い・空でも空文字を返す', () => {
    assert.equal(formatStreamSetlist({}), '');
    assert.equal(formatStreamSetlist({ songs: [] }), '');
  });
});
