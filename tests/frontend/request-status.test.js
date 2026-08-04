/**
 * @file tests/frontend/request-status.test.js
 * @description リクエストのステータスバッジ表示ロジックのテスト。
 *
 * views/requests.js は DOM 依存で import できないため、
 * バッジ生成部分は views/requests/status.js に切り出してテストする。
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { statusBadge, STATUS_LABELS } from '../../docs/js/views/requests/status.js';

describe('statusBadge', () => {
  it('singable は「歌える曲」バッジを出す', () => {
    const html = statusBadge('singable');
    assert.match(html, /歌える曲/);
    assert.match(html, /req-status--singable/);
  });

  it('practicing は「練習中」バッジを出す', () => {
    const html = statusBadge('practicing');
    assert.match(html, /練習中/);
    assert.match(html, /req-status--practicing/);
  });

  it('unregistered（未対応）はバッジを出さない', () => {
    // バッジがある = 運営が確認済み、という意味づけを崩さないため
    assert.equal(statusBadge('unregistered'), '');
  });

  it('未知・空・null でもバッジを出さず例外にもならない', () => {
    for (const v of ['', null, undefined, 'unknown-status', 0]) {
      assert.equal(statusBadge(v), '');
    }
  });

  it('title 属性に補足説明が入る', () => {
    assert.match(statusBadge('singable'), /title="[^"]+"/);
  });

  it('ラベル定義は singable / practicing の2つだけ', () => {
    assert.deepEqual(Object.keys(STATUS_LABELS).sort(), ['practicing', 'singable']);
  });
});
