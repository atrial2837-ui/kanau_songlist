/**
 * @file tests/frontend/doughnut-anchor.test.js
 * @description doughnutOutsideAnchor のテスト。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { doughnutOutsideAnchor } from '../../docs/js/doughnut-anchor.js';

const EPS = 1e-9;

describe('doughnutOutsideAnchor', () => {
  test('右側の点は右向きの単位方向と外側アンカーを返す', () => {
    const r = doughnutOutsideAnchor(100, 100, 160, 100, 50, 10);
    assert.ok(Math.abs(r.dx - 1) < EPS);
    assert.ok(Math.abs(r.dy - 0) < EPS);
    assert.ok(Math.abs(r.ax - 160) < EPS);
    assert.ok(Math.abs(r.ay - 100) < EPS);
  });

  test('左下の点は中心から遠ざかる方向になる', () => {
    const r = doughnutOutsideAnchor(100, 100, 60, 140, 50, 10);
    // 方向は (-1, 1) を正規化したもの
    assert.ok(Math.abs(r.dx + Math.SQRT1_2) < EPS);
    assert.ok(Math.abs(r.dy - Math.SQRT1_2) < EPS);
    // アンカーは外半径+gap の距離にある
    const dist = Math.hypot(r.ax - 100, r.ay - 100);
    assert.ok(Math.abs(dist - 60) < EPS);
  });

  test('中心と一致する点は上向きに倒す', () => {
    const r = doughnutOutsideAnchor(100, 100, 100, 100, 50, 10);
    assert.equal(r.dx, 0);
    assert.equal(r.dy, -1);
    assert.ok(Math.abs(r.ax - 100) < EPS);
    assert.ok(Math.abs(r.ay - 40) < EPS);
  });

  test('gap 省略時は 10 になる', () => {
    const r = doughnutOutsideAnchor(0, 0, 30, 0, 50);
    assert.ok(Math.abs(r.ax - 60) < EPS);
    assert.ok(Math.abs(r.ay - 0) < EPS);
  });
});
