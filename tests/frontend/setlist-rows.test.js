// 管理画面のセトリ行編集で使う純粋関数のテスト。
// 保存時はサーバ側の splitSongLine が解析するため、
// 「行配列 → テキスト」が splitSongLine で元の曲名・アーティストに戻ることを併せて確認する。
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  emptySetlistRow,
  parseSetlistLine,
  serializeSetlistLine,
  parseSetlistText,
  serializeSetlistRows,
  moveSetlistRow,
  removeSetlistRow,
  insertSetlistRow,
  updateSetlistRow,
} from '../../docs/js/admin/setlist-rows.js';
import { splitSongLine } from '../../src/domain/stream/setlist-parser.js';

const rows = () => [
  { title: '曲A', artist: '歌手A', displayKey: '', genre: '' },
  { title: '曲B', artist: '歌手B', displayKey: '+2', genre: 'アニソン' },
  { title: '曲C', artist: '歌手C', displayKey: '', genre: '' },
];

describe('parseSetlistLine', () => {
  it('曲名 / アーティスト を分解する', () => {
    assert.deepEqual(parseSetlistLine('曲名 / アーティスト'),
      { title: '曲名', artist: 'アーティスト', displayKey: '', genre: '' });
  });

  it('キー・ジャンル付きを分解する', () => {
    assert.deepEqual(parseSetlistLine('曲名 / アーティスト | +2 | アニソン'),
      { title: '曲名', artist: 'アーティスト', displayKey: '+2', genre: 'アニソン' });
  });

  it('アーティスト名の / で誤分割しない（右端のセパレータを採用）', () => {
    assert.deepEqual(parseSetlistLine('ステラ / Leo/need'),
      { title: 'ステラ', artist: 'Leo/need', displayKey: '', genre: '' });
  });

  it('全角スラッシュも区切りとして扱う', () => {
    const row = parseSetlistLine('曲名／アーティスト');
    assert.equal(row.title, '曲名');
    assert.equal(row.artist, 'アーティスト');
  });

  it('セパレータが無ければ全体を曲名にする', () => {
    assert.deepEqual(parseSetlistLine('曲名だけ'),
      { title: '曲名だけ', artist: '', displayKey: '', genre: '' });
  });

  it('キーを飛ばしてジャンルだけ指定できる', () => {
    assert.deepEqual(parseSetlistLine('曲名 / 歌手 |  | ボカロ'),
      { title: '曲名', artist: '歌手', displayKey: '', genre: 'ボカロ' });
  });

  it('null / undefined は空行として扱う', () => {
    assert.deepEqual(parseSetlistLine(null), emptySetlistRow());
    assert.deepEqual(parseSetlistLine(undefined), emptySetlistRow());
  });

  it('入力をそのまま保持する（編集中に勝手に正規化しない）', () => {
    // 全角スペースや連続スペースは normalize では潰れるが、編集中は保持する
    assert.equal(parseSetlistLine('曲　名 / 歌手').title, '曲　名');
  });
});

describe('serializeSetlistLine', () => {
  it('アーティストが空なら曲名だけにする', () => {
    assert.equal(serializeSetlistLine({ title: '曲名', artist: '', displayKey: '', genre: '' }), '曲名');
  });

  it('末尾の空項目を省略する', () => {
    assert.equal(serializeSetlistLine({ title: '曲', artist: '歌手', displayKey: '+2', genre: '' }), '曲 / 歌手 | +2');
  });

  it('ジャンルだけある場合はキー欄を空で残す', () => {
    assert.equal(serializeSetlistLine({ title: '曲', artist: '歌手', displayKey: '', genre: 'ボカロ' }), '曲 / 歌手 |  | ボカロ');
  });
});

describe('parse → serialize の往復', () => {
  const samples = [
    '曲名 / アーティスト',
    '曲名 / アーティスト | +2 | アニソン',
    'ステラ / Leo/need | 原キー | ゲーム・キャラソン',
    '曲名だけ',
  ];

  it('同じテキストに戻る', () => {
    for (const line of samples) {
      assert.equal(serializeSetlistLine(parseSetlistLine(line)), line, line);
    }
  });

  it('サーバ側の splitSongLine が同じ曲名・アーティストとして解析する', () => {
    for (const line of samples) {
      const before = splitSongLine(line);
      const after = splitSongLine(serializeSetlistLine(parseSetlistLine(line)));
      assert.equal(after.title, before.title, line);
      assert.equal(after.artist, before.artist, line);
      assert.equal(after.displayKey, before.displayKey, line);
      assert.equal(after.genre, before.genre, line);
    }
  });
});

describe('parseSetlistText / serializeSetlistRows', () => {
  it('空行を落とす', () => {
    assert.equal(parseSetlistText('曲A / 歌手A\n\n  \n曲B / 歌手B').length, 2);
  });

  it('CRLF を扱える', () => {
    assert.equal(parseSetlistText('曲A / 歌手A\r\n曲B / 歌手B').length, 2);
  });

  it('曲名が空の行は保存対象から外す', () => {
    const list = [{ title: '', artist: '歌手', displayKey: '', genre: '' }, ...rows()];
    assert.equal(serializeSetlistRows(list).split('\n').length, 3);
  });

  it('曲が無ければ空文字を返す', () => {
    assert.equal(serializeSetlistRows([]), '');
    assert.equal(serializeSetlistRows(null), '');
  });
});

describe('moveSetlistRow', () => {
  it('下へ移動する', () => {
    assert.deepEqual(moveSetlistRow(rows(), 0, 1).map((r) => r.title), ['曲B', '曲A', '曲C']);
  });

  it('上へ移動する', () => {
    assert.deepEqual(moveSetlistRow(rows(), 2, 0).map((r) => r.title), ['曲C', '曲A', '曲B']);
  });

  it('元の配列を変更しない', () => {
    const original = rows();
    moveSetlistRow(original, 0, 2);
    assert.deepEqual(original.map((r) => r.title), ['曲A', '曲B', '曲C']);
  });

  it('範囲外の移動元は何もしない', () => {
    assert.deepEqual(moveSetlistRow(rows(), 9, 0).map((r) => r.title), ['曲A', '曲B', '曲C']);
    assert.deepEqual(moveSetlistRow(rows(), -1, 0).map((r) => r.title), ['曲A', '曲B', '曲C']);
  });

  it('移動先は配列の範囲に丸める（先頭より上・末尾より下へ押しても壊れない）', () => {
    assert.deepEqual(moveSetlistRow(rows(), 0, -1).map((r) => r.title), ['曲A', '曲B', '曲C']);
    assert.deepEqual(moveSetlistRow(rows(), 2, 99).map((r) => r.title), ['曲A', '曲B', '曲C']);
  });

  it('同じ位置への移動は変化しない', () => {
    assert.deepEqual(moveSetlistRow(rows(), 1, 1).map((r) => r.title), ['曲A', '曲B', '曲C']);
  });
});

describe('removeSetlistRow / insertSetlistRow', () => {
  it('指定位置を削除する', () => {
    assert.deepEqual(removeSetlistRow(rows(), 1).map((r) => r.title), ['曲A', '曲C']);
  });

  it('範囲外の削除は何もしない', () => {
    assert.equal(removeSetlistRow(rows(), 9).length, 3);
  });

  it('位置を省略すると末尾に追加する', () => {
    const list = insertSetlistRow(rows());
    assert.equal(list.length, 4);
    assert.deepEqual(list[3], emptySetlistRow());
  });

  it('指定位置に挿入する', () => {
    assert.deepEqual(insertSetlistRow(rows(), 1, { title: '新曲' }).map((r) => r.title),
      ['曲A', '新曲', '曲B', '曲C']);
  });

  it('元の配列を変更しない', () => {
    const original = rows();
    insertSetlistRow(original, 0);
    removeSetlistRow(original, 0);
    assert.equal(original.length, 3);
  });
});

describe('updateSetlistRow', () => {
  it('指定した項目だけ差し替える', () => {
    const list = updateSetlistRow(rows(), 0, 'title', '曲Z');
    assert.equal(list[0].title, '曲Z');
    assert.equal(list[0].artist, '歌手A');
  });

  it('範囲外は何もしない', () => {
    assert.deepEqual(updateSetlistRow(rows(), 9, 'title', 'x').map((r) => r.title), ['曲A', '曲B', '曲C']);
  });
});
