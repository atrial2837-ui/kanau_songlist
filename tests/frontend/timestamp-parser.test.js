import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  TS_TOKEN_RE,
  _parseTs,
  _parseTsCommentLine,
  _cleanTsCommentBody,
  _stripSongEdgeDecor,
  _splitTsCommentSong,
  _normForMatch,
  _matchSongIdx,
} from '../../docs/js/player/timestamps/parser.js';

const songs = [
  { title: '群青', artist: 'YOASOBI' },
  { title: 'Lemon', artist: '米津玄師' },
  { title: '紅蓮華', artist: 'LiSA' },
];

describe('timestamp parser', () => {
  it('TS_TOKEN_RE: MM:SSトークン抽出', () => {
    assert.deepEqual('12:34'.match(TS_TOKEN_RE), ['12:34']);
  });

  it('TS_TOKEN_RE: H:MM:SSと不完全MM:SSが混在(不完全側は非マッチ)', () => {
    assert.deepEqual('1:02:03 and 4:5'.match(TS_TOKEN_RE), ['1:02:03']);
  });

  it('_parseTs: MM:SS形式のパース', () => {
    assert.equal(_parseTs('12:34'), 754);
  });

  it('_parseTs: H:MM:SS形式(1桁時)のパース', () => {
    assert.equal(_parseTs('1:02:03'), 3723);
  });

  it('_parseTs: 不正入力(数値なし文字列)', () => {
    assert.equal(_parseTs('abc'), null);
  });

  it('_parseTs: null入力', () => {
    assert.equal(_parseTs(null), null);
  });

  it('_parseTs: MM/SSが60超でも検証されず計算される', () => {
    assert.equal(_parseTs('99:99'), 6039);
  });

  it('_parseTs: H:MM:SS形式(別の1桁時)', () => {
    assert.equal(_parseTs('9:05:07'), 32707);
  });

  it('_parseTsCommentLine: スラッシュ区切りの典型コメント行', () => {
    assert.deepEqual(_parseTsCommentLine('12:34 群青 / YOASOBI'), {
      start: '12:34',
      title: '群青',
      artist: 'YOASOBI',
      end: '',
      raw: '群青 / YOASOBI',
    });
  });

  it('_parseTsCommentLine: 複数タイムスタンプ+ダッシュ区切り(開始/終了とも取得)', () => {
    assert.deepEqual(_parseTsCommentLine('[03:15] 曲名A - アーティストA 03:45'), {
      start: '03:15',
      title: '曲名A',
      artist: 'アーティストA',
      end: '03:45',
      raw: '曲名A - アーティストA',
    });
  });

  it('_parseTsCommentLine: タイムスタンプが無い行はnull', () => {
    assert.equal(_parseTsCommentLine('曲名だけのコメント'), null);
  });

  it('_parseTsCommentLine: 空白のみの行はnull', () => {
    assert.equal(_parseTsCommentLine('   '), null);
  });

  it('_parseTsCommentLine: タイムスタンプのみで本文が空になりnull', () => {
    assert.equal(_parseTsCommentLine('12:34'), null);
  });

  it('_parseTsCommentLine: 装飾記号(♪)+by区切りの行', () => {
    assert.deepEqual(_parseTsCommentLine('♪ Lemon by 米津玄師 05:00'), {
      start: '05:00',
      title: 'Lemon',
      artist: '米津玄師',
      end: '',
      raw: 'Lemon by 米津玄師',
    });
  });

  it('_parseTsCommentLine: 区切りが無くアーティストが取れずタイトルのみ', () => {
    assert.deepEqual(_parseTsCommentLine('12:34 タイトルのみ'), {
      start: '12:34',
      title: 'タイトルのみ',
      artist: '',
      end: '',
      raw: 'タイトルのみ',
    });
  });

  it('_cleanTsCommentBody: 番号プレフィックス(1) )の除去', () => {
    assert.equal(_cleanTsCommentBody('1) 曲名 - アーティスト'), '曲名 - アーティスト');
  });

  it('_cleanTsCommentBody: URLとタイムスタンプ除去+スペース圧縮', () => {
    assert.equal(_cleanTsCommentBody('12:34 曲名 https://youtu.be/xyz123 アーティスト'), '曲名 アーティスト');
  });

  it('_cleanTsCommentBody: 末尾のダッシュ装飾(--)除去', () => {
    assert.equal(_cleanTsCommentBody('曲名 アーティスト --'), '曲名 アーティスト');
  });

  it('_stripSongEdgeDecor: 前後の♪装飾:先頭のみ除去され末尾は残る非対称挙動', () => {
    assert.equal(_stripSongEdgeDecor('♪♪曲名♪♪'), '曲名♪♪');
  });

  it('_stripSongEdgeDecor: 全角括弧【】の前後除去', () => {
    assert.equal(_stripSongEdgeDecor('【曲名】'), '曲名');
  });

  it('_stripSongEdgeDecor: 先頭スペース+ダッシュの除去', () => {
    assert.equal(_stripSongEdgeDecor(' - 曲名'), '曲名');
  });

  it('_stripSongEdgeDecor: 装飾記号のみの文字列は空文字になる', () => {
    assert.equal(_stripSongEdgeDecor('♪♪'), '');
  });

  it('_splitTsCommentSong: 「曲名 / アーティスト」パターン', () => {
    assert.deepEqual(_splitTsCommentSong('群青 / YOASOBI'), { title: '群青', artist: 'YOASOBI' });
  });

  it('_splitTsCommentSong: 「曲名 - アーティスト」パターン', () => {
    assert.deepEqual(_splitTsCommentSong('曲名 - アーティスト'), { title: '曲名', artist: 'アーティスト' });
  });

  it("_splitTsCommentSong: 'covered by'は専用パターンより先に汎用byパターンにマッチしtitleに'covered'が残る", () => {
    assert.deepEqual(_splitTsCommentSong('Pretender covered by 歌い手A'), { title: 'Pretender covered', artist: '歌い手A' });
  });

  it('_splitTsCommentSong: 「歌: 」区切りパターン', () => {
    assert.deepEqual(_splitTsCommentSong('歌ってみた 歌: 初音ミク'), { title: '歌ってみた', artist: '初音ミク' });
  });

  it('_splitTsCommentSong: 区切りが無い場合はtitleのみでフォールバック', () => {
    assert.deepEqual(_splitTsCommentSong('アカペラ'), { title: 'アカペラ', artist: '' });
  });

  it('_normForMatch: 半角英字の小文字化', () => {
    assert.equal(_normForMatch('Lemon'), 'lemon');
  });

  it('_normForMatch: 全角英字を小文字化してから半角化', () => {
    assert.equal(_normForMatch('ＹＯＡＳＯＢＩ'), 'yoasobi');
  });

  it('_normForMatch: 全角スペース除去して文字列結合', () => {
    assert.equal(_normForMatch('群青　YOASOBI'), '群青yoasobi');
  });

  it('_normForMatch: 括弧・中点・半角!の除去', () => {
    assert.equal(_normForMatch('「群青」・YOASOBI!'), '群青yoasobi');
  });

  it("_matchSongIdx: タイトル・アーティストとも完全一致", () => {
    assert.equal(_matchSongIdx('群青', 'YOASOBI', songs), 0);
  });

  it('_matchSongIdx: タイトル部分一致(括弧付き表記、アーティスト空)', () => {
    assert.equal(_matchSongIdx('Lemon (Cover)', '', songs), 1);
  });

  it('_matchSongIdx: 完全に一致しない入力は-1', () => {
    assert.equal(_matchSongIdx('全然違う曲', '謎のアーティスト', songs), -1);
  });

  it('_matchSongIdx: title/artistが入れ替わっていてもフォールバックループで一致', () => {
    assert.equal(_matchSongIdx('YOASOBI', '群青', songs), 0);
  });
});
