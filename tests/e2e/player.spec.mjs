// ストリームビューワー / ミニプレイヤーのライフサイクル検証。
// フェイク YT API (fixtures/fake-youtube-api.js) を使い、プレイヤーインスタンスの
// 生成・破棄・所有権移譲(ビューワー⇔ミニ)がリロードなしで行われることを保証する。
// main.js リファクタリング(プレイヤー抽出)の挙動固定テスト。
import { test, expect } from '@playwright/test';
import {
  setupFakeYouTube,
  openApp,
  getStream,
  openViewer,
  fakeSummary,
  waitForPlayerCount,
} from './helpers.mjs';

test.beforeEach(async ({ page }) => {
  await setupFakeYouTube(page);
  await openApp(page);
});

test('ビューワーを開くとプレイヤーが1つだけ生成される', async ({ page }) => {
  const stream = await getStream(page);
  await openViewer(page, stream);

  await expect(page.locator('#stream-viewer')).toBeVisible();
  await waitForPlayerCount(page, 1);
  await expect(page.locator('#sv-player-wrap iframe.fake-yt-iframe')).toHaveCount(1);

  const s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);
  expect(s.live).toHaveLength(1);
});

test('閉じる → ミニ化: 同一プレイヤーを破棄せず引き継ぐ(リロードなし)', async ({ page }) => {
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);

  await page.click('#sv-close');

  const viewer = page.locator('#stream-viewer');
  await expect(viewer).toHaveClass(/sv-minified/);
  await expect(page.locator('#yt-player-panel')).toBeVisible();
  await expect(page.locator('#yt-player-panel')).toHaveClass(/has-stream/);
  // iframe は DOM 移動されず #sv-player-wrap 内に残る(CSS でドック表示)
  await expect(page.locator('#sv-player-wrap iframe.fake-yt-iframe')).toHaveCount(1);

  let s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);

  // ミニ → ビューワー復帰(こちらもリロードなし)
  await page.click('#yt-mini-restore');
  await expect(viewer).not.toHaveClass(/sv-minified/);
  await expect(viewer).toBeVisible();
  await expect(page.locator('#yt-player-panel')).toBeHidden();

  s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);
});

test('ミニプレイヤーを閉じるとプレイヤーが破棄される', async ({ page }) => {
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);
  await page.click('#sv-close');
  await expect(page.locator('#yt-player-panel')).toBeVisible();

  await page.click('#yt-player-close');

  await expect(page.locator('#yt-player-panel')).toBeHidden();
  await expect(page.locator('#stream-viewer')).toBeHidden();
  const s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(1);
  expect(s.live).toHaveLength(0);
});

test('ドック中に同じ動画を開くと復帰のみ(プレイヤー再生成なし)', async ({ page }) => {
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);
  await page.click('#sv-close');
  await expect(page.locator('#stream-viewer')).toHaveClass(/sv-minified/);

  await openViewer(page, stream);

  await expect(page.locator('#stream-viewer')).not.toHaveClass(/sv-minified/);
  await expect(page.locator('#stream-viewer')).toBeVisible();
  const s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);
});

test('ドック中に別の動画を開くと旧プレイヤーだけが破棄される', async ({ page }) => {
  const streamA = await getStream(page, 0);
  const streamB = await getStream(page, 1);
  await openViewer(page, streamA);
  await waitForPlayerCount(page, 1);
  await page.click('#sv-close');

  await openViewer(page, streamB);
  await waitForPlayerCount(page, 2);

  await expect(page.locator('#sv-bc-title')).toHaveText(streamB.title);
  const s = await fakeSummary(page);
  expect(s.created).toBe(2);
  expect(s.destroyed).toBe(1);
  expect(s.live).toHaveLength(1);
});

test('開閉を繰り返してもプレイヤー・iframe がリークしない', async ({ page }) => {
  const stream = await getStream(page);
  for (let i = 1; i <= 3; i++) {
    await openViewer(page, stream);
    await waitForPlayerCount(page, i);
    await page.click('#sv-close');
    await page.click('#yt-player-close');
    await expect(page.locator('#yt-player-panel')).toBeHidden();
  }
  const s = await fakeSummary(page);
  expect(s.created).toBe(3);
  expect(s.destroyed).toBe(3);
  expect(s.live).toHaveLength(0);
  await expect(page.locator('iframe.fake-yt-iframe')).toHaveCount(0);
});
