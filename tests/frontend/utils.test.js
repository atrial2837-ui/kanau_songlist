/**
 * @file tests/frontend/utils.test.js
 * @description docs/js/utils.js の DOM 非依存ユーティリティのテスト。
 *
 * サムネ URL の取り違え（maxres/mq/hq）は実際に本番で表示崩れを起こしたことがあるため、
 * どの関数がどの解像度を返すかを固定する。
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  youtubeVideoId,
  youtubeThumb,
  youtubeThumbFallback,
  youtubeThumbHq,
  youtubeThumbTiny,
  streamKey,
  groupBy,
  sumBy,
  formatNumber,
  highlightText,
  escapeHtml,
} from '../../docs/js/utils.js';

const ID = 'dQw4w9WgXcQ'; // 11桁の実在フォーマット

describe('youtubeVideoId', () => {
  it('主要な URL 形式から ID を取り出す', () => {
    const urls = [
      `https://youtu.be/${ID}`,
      `https://www.youtube.com/watch?v=${ID}`,
      `https://www.youtube.com/live/${ID}`,
      `https://www.youtube.com/shorts/${ID}`,
      `https://www.youtube.com/embed/${ID}`,
    ];
    for (const url of urls) {
      assert.equal(youtubeVideoId(url), ID, url);
    }
  });

  it('watch?v= はクエリが前後にあっても取り出せる', () => {
    assert.equal(youtubeVideoId(`https://www.youtube.com/watch?list=PL123&v=${ID}&t=90s`), ID);
  });

  it('タイムスタンプ付き短縮 URL でも ID だけ返す', () => {
    assert.equal(youtubeVideoId(`https://youtu.be/${ID}?t=120`), ID);
  });

  it('YouTube 以外・空・不正入力は空文字', () => {
    for (const v of ['', null, undefined, 'https://example.com/watch?v=abc', 'ただの文字列']) {
      assert.equal(youtubeVideoId(v), '');
    }
  });

  it('11桁でない ID は拾わない', () => {
    assert.equal(youtubeVideoId('https://youtu.be/tooshort'), '');
  });
});

describe('サムネ URL', () => {
  it('youtubeThumb は 16:9 の mqdefault（黒帯なし）', () => {
    assert.equal(youtubeThumb(`https://youtu.be/${ID}`), `https://i.ytimg.com/vi/${ID}/mqdefault.jpg`);
  });

  it('youtubeThumbFallback は 4:3 の hqdefault', () => {
    assert.equal(youtubeThumbFallback(`https://youtu.be/${ID}`), `https://i.ytimg.com/vi/${ID}/hqdefault.jpg`);
  });

  it('youtubeThumbHq は高解像度の maxresdefault', () => {
    assert.equal(youtubeThumbHq(`https://youtu.be/${ID}`), `https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`);
  });

  it('youtubeThumbTiny は default', () => {
    assert.equal(youtubeThumbTiny(`https://youtu.be/${ID}`), `https://i.ytimg.com/vi/${ID}/default.jpg`);
  });

  it('ID を取れない URL では全て空文字（壊れた img を作らない）', () => {
    for (const fn of [youtubeThumb, youtubeThumbFallback, youtubeThumbHq, youtubeThumbTiny]) {
      assert.equal(fn('https://example.com'), '');
      assert.equal(fn(''), '');
    }
  });
});

describe('streamKey', () => {
  it('チャンネル・日付・URL から一意キーを作る', () => {
    const key = streamKey({ channel: 'new', date: '2026-07-01', url: 'https://youtu.be/x' });
    assert.equal(key, 'new:2026-07-01:https://youtu.be/x');
  });

  it('別の配信なら別のキーになる', () => {
    const a = streamKey({ channel: 'new', date: '2026-07-01', url: 'https://youtu.be/a' });
    const b = streamKey({ channel: 'new', date: '2026-07-01', url: 'https://youtu.be/b' });
    assert.notEqual(a, b);
  });

  it('URL が無い場合はタイトルで代用する', () => {
    assert.equal(streamKey({ channel: 'old', date: '2026-01-01', title: '歌枠' }), 'old:2026-01-01:歌枠');
  });

  it('空オブジェクト・null でも例外にならない', () => {
    assert.equal(streamKey({}), '::');
    assert.equal(streamKey(null), '::');
  });
});

describe('groupBy / sumBy / formatNumber', () => {
  it('groupBy はキーごとに配列へまとめる', () => {
    const m = groupBy([{ g: 'a' }, { g: 'b' }, { g: 'a' }], (x) => x.g);
    assert.equal(m.get('a').length, 2);
    assert.equal(m.get('b').length, 1);
  });

  it('groupBy は空配列で空 Map', () => {
    assert.equal(groupBy([], (x) => x).size, 0);
  });

  it('sumBy は数値を合計し、欠損を 0 として扱う', () => {
    assert.equal(sumBy([{ n: 1 }, { n: 2 }, {}], (x) => x.n), 3);
    assert.equal(sumBy([], (x) => x.n), 0);
  });

  it('formatNumber は桁区切りを入れる', () => {
    assert.equal(formatNumber(2768), '2,768');
    assert.equal(formatNumber(0), '0');
    assert.equal(formatNumber(null), '0');
  });
});

describe('highlightText', () => {
  it('一致部分を mark で囲む', () => {
    assert.equal(highlightText('アイドル', ['アイ']), '<mark class="hl">アイ</mark>ドル');
  });

  it('大文字小文字を区別しない', () => {
    assert.match(highlightText('Lemon', ['lem']), /<mark class="hl">Lem<\/mark>on/);
  });

  it('クエリが無ければエスケープのみ', () => {
    assert.equal(highlightText('<b>x</b>', []), escapeHtml('<b>x</b>'));
    assert.equal(highlightText('<b>x</b>', null), escapeHtml('<b>x</b>'));
  });

  it('HTML を含む入力でもタグとして解釈させない', () => {
    const out = highlightText('<script>alert(1)</script>', ['script']);
    assert.ok(!out.includes('<script>'), 'エスケープされているべき');
    assert.ok(out.includes('<mark class="hl">script</mark>'));
  });

  it('正規表現メタ文字を含むクエリでも壊れない', () => {
    assert.doesNotThrow(() => highlightText('a+b (c)', ['+', '(']));
  });
});
