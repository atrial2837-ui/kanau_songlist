/**
 * @file tests/domain/song-request/owner-token.test.js
 * @description 所有者トークンの生成・ハッシュ・照合のテスト。
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  generateOwnerToken,
  hashOwnerToken,
  verifyOwnerToken,
} from '../../../src/domain/song-request/owner-token.js';

describe('generateOwnerToken', () => {
  test('64桁の16進文字列（256bit）を返す', () => {
    const token = generateOwnerToken();
    assert.match(token, /^[0-9a-f]{64}$/);
  });

  test('呼ぶたびに異なる値になる', () => {
    const tokens = new Set(Array.from({ length: 50 }, () => generateOwnerToken()));
    assert.equal(tokens.size, 50);
  });
});

describe('hashOwnerToken', () => {
  test('64桁の16進文字列を返す', async () => {
    assert.match(await hashOwnerToken('abc'), /^[0-9a-f]{64}$/);
  });

  test('同じ入力なら同じハッシュ（決定的）', async () => {
    assert.equal(await hashOwnerToken('abc'), await hashOwnerToken('abc'));
  });

  test('異なる入力なら異なるハッシュ', async () => {
    assert.notEqual(await hashOwnerToken('abc'), await hashOwnerToken('abd'));
  });

  test('ハッシュは元のトークンと一致しない（生値を保存していない）', async () => {
    const token = generateOwnerToken();
    assert.notEqual(await hashOwnerToken(token), token);
  });

  test('SHA-256 の既知ベクタと一致する', async () => {
    // echo -n "abc" | sha256sum
    assert.equal(
      await hashOwnerToken('abc'),
      'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
    );
  });
});

describe('verifyOwnerToken', () => {
  test('正しいトークンなら true', async () => {
    const token = generateOwnerToken();
    assert.equal(await verifyOwnerToken(token, await hashOwnerToken(token)), true);
  });

  test('異なるトークンなら false', async () => {
    const hash = await hashOwnerToken(generateOwnerToken());
    assert.equal(await verifyOwnerToken(generateOwnerToken(), hash), false);
  });

  test('保存ハッシュが無い（旧データ）なら常に false', async () => {
    const token = generateOwnerToken();
    for (const stored of [null, undefined, '']) {
      assert.equal(await verifyOwnerToken(token, stored), false);
    }
  });

  test('トークンが空なら常に false', async () => {
    const hash = await hashOwnerToken('x');
    for (const token of [null, undefined, '']) {
      assert.equal(await verifyOwnerToken(token, hash), false);
    }
  });
});
