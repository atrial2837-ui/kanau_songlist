// P4a で抽出した葉モジュールの契約テスト(特性テスト)。
// localStorage キー・エントリ形状・URLパラメータ規則は外部(views/dashboard.js や
// 共有リンク)との契約なので、現挙動を固定する。
import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

// ブラウザグローバルの最小シム(import より先に用意する)
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
};
globalThis.location = { origin: 'https://example.test', pathname: '/', search: '' };
globalThis.window = { location: globalThis.location, addEventListener: () => {} };

const { getWatchHistory, _saveWatchEntry } = await import('../../docs/js/player/watch-history.js');
const { _getPlaylists } = await import('../../docs/js/player/playlists-store.js');
const { _youtubeExternalUrl, _svBuildShareUrl } = await import('../../docs/js/player/share-url.js');

describe('watch-history 契約', () => {
  beforeEach(() => store.clear());

  it('キーは kanau-watch-history-v1、未保存時は []', () => {
    assert.deepEqual(getWatchHistory(), []);
    _saveWatchEntry({ url: 'https://youtu.be/aaaaaaaaaaa', title: 'A' }, 30);
    assert.ok(store.has('kanau-watch-history-v1'));
  });

  it('壊れたJSONは [] にフォールバック', () => {
    store.set('kanau-watch-history-v1', '{broken');
    assert.deepEqual(getWatchHistory(), []);
  });

  it('10秒未満の再生は記録しない', () => {
    _saveWatchEntry({ url: 'https://youtu.be/aaaaaaaaaaa' }, 9);
    assert.deepEqual(getWatchHistory(), []);
  });

  it('エントリ形状: url/title/t(床関数)/isMv/channel/index/date/updatedAt', () => {
    _saveWatchEntry({ url: 'u1', title: 'T', isMv: false, channel: 'new', index: 5, date: '2026-01-01' }, 62.9);
    const [e] = getWatchHistory();
    assert.equal(e.url, 'u1');
    assert.equal(e.title, 'T');
    assert.equal(e.t, 62);
    assert.equal(e.isMv, false);
    assert.equal(e.channel, 'new');
    assert.equal(e.index, 5);
    assert.equal(e.date, '2026-01-01');
    assert.equal(typeof e.updatedAt, 'number');
  });

  it('同一URLは重複せず先頭に更新、最大10件', () => {
    for (let i = 0; i < 12; i++) _saveWatchEntry({ url: `u${i}`, title: `t${i}` }, 30);
    _saveWatchEntry({ url: 'u11', title: 'again' }, 99);
    const list = getWatchHistory();
    assert.equal(list.length, 10);
    assert.equal(list[0].url, 'u11');
    assert.equal(list[0].t, 99);
    assert.equal(list.filter(e => e.url === 'u11').length, 1);
  });
});

describe('playlists-store 契約', () => {
  beforeEach(() => store.clear());

  it('キーは kanau-playlists、未保存時と "null" は []', () => {
    assert.deepEqual(_getPlaylists(), []);
    store.set('kanau-playlists', 'null');
    assert.deepEqual(_getPlaylists(), []);
  });

  it('保存済みリストをそのまま返す', () => {
    store.set('kanau-playlists', JSON.stringify([{ id: 1, name: 'A', streams: ['x'] }]));
    assert.deepEqual(_getPlaylists(), [{ id: 1, name: 'A', streams: ['x'] }]);
  });
});

describe('share-url 契約', () => {
  it('_youtubeExternalUrl: watch?v=ID&t=Ns 形式、t=0 は t なし', () => {
    assert.equal(_youtubeExternalUrl('https://youtu.be/AAAAAAAAAAA', 75.8), 'https://www.youtube.com/watch?v=AAAAAAAAAAA&t=75s');
    assert.equal(_youtubeExternalUrl('https://youtu.be/AAAAAAAAAAA', 0), 'https://www.youtube.com/watch?v=AAAAAAAAAAA');
  });

  it('_youtubeExternalUrl: YouTube以外のURLはそのまま返す', () => {
    assert.equal(_youtubeExternalUrl('https://example.com/x'), 'https://example.com/x');
  });

  it('_svBuildShareUrl: v/t パラメータ、t は 5秒以下で省略', () => {
    assert.equal(_svBuildShareUrl('AAAAAAAAAAA', 90), 'https://example.test/?v=AAAAAAAAAAA&t=90');
    assert.equal(_svBuildShareUrl('AAAAAAAAAAA', 5), 'https://example.test/?v=AAAAAAAAAAA');
    assert.equal(_svBuildShareUrl(''), '');
  });

  it('_svBuildShareUrl: 非デフォルトチャンネルは ch を付与、new は省略', () => {
    globalThis.window.location.search = '?ch=old';
    assert.equal(_svBuildShareUrl('AAAAAAAAAAA', 0), 'https://example.test/?ch=old&v=AAAAAAAAAAA');
    globalThis.window.location.search = '';
  });
});
