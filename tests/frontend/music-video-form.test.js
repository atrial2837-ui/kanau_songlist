// 歌みた・オリ曲の入力チェックと絞り込みのテスト。
// 重複は「止める」のではなく「警告して押し切れる」ことが仕様の要なので、
// errors と warnings の振り分けを重点的に見る。
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  defaultMusicVideoId,
  filterMusicVideos,
  nextAvailableId,
  validateMusicVideo,
  youtubeIdOf,
} from '../../docs/js/admin/music-video-form.js';

const existing = [
  { id: 'mv_4tQcByOPu6Y', title: 'MV⌇いつか恋をした/夢川かなう 2nd Single', type: 'original', url: 'https://www.youtube.com/watch?v=4tQcByOPu6Y' },
  { id: 'mv_9wQBNog3weI', title: 'MV⌇水没▽えすけーぷ / 夢川かなう 4th Single', type: 'original', url: 'https://youtu.be/9wQBNog3weI' },
  { id: 'mv_abcdefghijk', title: '花に亡霊', type: 'cover', originalArtist: 'ヨルシカ', url: 'https://www.youtube.com/watch?v=abcdefghijk' },
];

describe('youtubeIdOf', () => {
  it('watch / youtu.be / live / shorts から取り出す', () => {
    assert.equal(youtubeIdOf('https://www.youtube.com/watch?v=4tQcByOPu6Y'), '4tQcByOPu6Y');
    assert.equal(youtubeIdOf('https://youtu.be/9wQBNog3weI?si=x'), '9wQBNog3weI');
    assert.equal(youtubeIdOf('https://www.youtube.com/live/j-JIFnd9LEA'), 'j-JIFnd9LEA');
    assert.equal(youtubeIdOf('https://www.youtube.com/shorts/abcdefghijk'), 'abcdefghijk');
  });

  it('YouTube 以外や空は空文字', () => {
    assert.equal(youtubeIdOf('https://example.com/x'), '');
    assert.equal(youtubeIdOf(null), '');
  });
});

describe('defaultMusicVideoId', () => {
  it('動画IDから作る', () => {
    assert.equal(defaultMusicVideoId('https://youtu.be/9wQBNog3weI'), 'mv_9wQBNog3weI');
  });

  it('動画IDが取れなければ時刻から作る', () => {
    assert.equal(defaultMusicVideoId('https://example.com', 1712345678901), 'mv678901');
  });
});

describe('nextAvailableId', () => {
  it('空いていればそのまま', () => {
    assert.equal(nextAvailableId('mv_new', existing), 'mv_new');
  });

  it('埋まっていれば連番を足す', () => {
    assert.equal(nextAvailableId('mv_4tQcByOPu6Y', existing), 'mv_4tQcByOPu6Y-2');
  });

  it('連番も埋まっていれば次へ進む', () => {
    const taken = [...existing, { id: 'mv_x' }, { id: 'mv_x-2' }];
    assert.equal(nextAvailableId('mv_x', taken), 'mv_x-3');
  });
});

describe('validateMusicVideo', () => {
  it('問題なければ何も出ない', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: '新曲', type: 'original' }, existing);
    assert.deepEqual(r.errors, []);
    assert.deepEqual(r.warnings, []);
  });

  it('URL とタイトルは必須', () => {
    const r = validateMusicVideo({ url: '', title: '' }, existing);
    assert.equal(r.errors.length, 2);
  });

  it('YouTube以外のURLは弾く', () => {
    const r = validateMusicVideo({ url: 'https://example.com/x', title: 'あ' }, existing);
    assert.match(r.errors[0], /動画URLとして読み取れません/);
  });

  it('知らない種別は弾く', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: 'あ', type: 'nope' }, existing);
    assert.match(r.errors.join(), /種別/);
  });

  it('同じ動画の重複は「止めず」に警告する', () => {
    const r = validateMusicVideo({ url: 'https://www.youtube.com/watch?v=9wQBNog3weI', title: '別名で再掲', type: 'original' }, existing);
    assert.deepEqual(r.errors, []);
    assert.match(r.warnings.join(), /同じ動画がすでに1件/);
  });

  it('URLの書き方が違っても同じ動画として気づく', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/4tQcByOPu6Y?si=abc', title: 'x', type: 'cover' }, existing);
    assert.match(r.warnings.join(), /同じ動画/);
  });

  it('同じタイトルも警告だけ', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: '花に亡霊', type: 'cover' }, existing);
    assert.deepEqual(r.errors, []);
    assert.match(r.warnings.join(), /同じタイトル/);
  });

  it('タイトルの表記ゆれも同じ扱いにする', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: '花に亡霊　', type: 'cover' }, existing);
    assert.match(r.warnings.join(), /同じタイトル/);
  });

  it('IDの重複は警告し、振り直す前提だと伝える', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: 'x', type: 'cover', id: 'mv_4tQcByOPu6Y' }, existing);
    assert.deepEqual(r.errors, []);
    assert.match(r.warnings.join(), /別のIDを振り直します/);
  });

  it('既存が空でも落ちない', () => {
    const r = validateMusicVideo({ url: 'https://youtu.be/zzzzzzzzzzz', title: 'x' });
    assert.deepEqual(r.errors, []);
  });
});

describe('filterMusicVideos', () => {
  it('絞り込み無しなら全件', () => {
    assert.equal(filterMusicVideos(existing).length, 3);
  });

  it('種別で絞る', () => {
    assert.equal(filterMusicVideos(existing, { type: 'cover' }).length, 1);
  });

  it('タイトルの一部で探せる', () => {
    assert.equal(filterMusicVideos(existing, { query: '水没' })[0].id, 'mv_9wQBNog3weI');
  });

  it('アーティスト名でも探せる', () => {
    assert.equal(filterMusicVideos(existing, { query: 'ヨルシカ' })[0].id, 'mv_abcdefghijk');
  });

  it('記号や全半角の違いを無視する', () => {
    assert.equal(filterMusicVideos(existing, { query: 'いつか恋をした' }).length, 1);
  });

  it('種別と語の両方で絞る', () => {
    assert.equal(filterMusicVideos(existing, { type: 'original', query: 'ヨルシカ' }).length, 0);
  });

  it('空でも落ちない', () => {
    assert.deepEqual(filterMusicVideos(null, { query: 'x' }), []);
  });
});
