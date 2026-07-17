// P5(playerMode状態機械・所有権統合)が変更する分岐の挙動固定テスト。
// Sol協議で「PR E着手のblocking前提」とされた4シナリオ+モバイル外部再生。
import { test, expect } from '@playwright/test';
import {
  setupFakeYouTube,
  openApp,
  getStream,
  openViewer,
  fakeSummary,
  waitForPlayerCount,
} from './helpers.mjs';

// 生存中のフェイクプレイヤーに ENDED を発火させる
const fireEnded = (page) => page.evaluate(() => {
  const live = window.__fakeYT.instances.find((p) => !p._destroyed);
  live._setState(0); // YT.PlayerState.ENDED
});

test('全画面 → Esc で埋め込みへ、再度 Esc でミニ化(プレイヤー破棄なし)', async ({ page }) => {
  await setupFakeYouTube(page);
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);

  await page.click('#sv-fullscreen-btn');
  await expect(page.locator('body')).toHaveClass(/has-sv-fullscreen/);

  await page.keyboard.press('Escape');
  await expect(page.locator('body')).not.toHaveClass(/has-sv-fullscreen/);
  await expect(page.locator('#stream-viewer')).toBeVisible();
  await expect(page.locator('#stream-viewer')).not.toHaveClass(/sv-minified/);

  await page.keyboard.press('Escape');
  await expect(page.locator('#stream-viewer')).toHaveClass(/sv-minified/);

  const s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);
});

test('キュー再生: ENDED で次のアイテムへ遷移し、旧プレイヤーのみ破棄', async ({ page }) => {
  await setupFakeYouTube(page);
  await openApp(page);
  const streamA = await getStream(page, 0);
  const streamB = await getStream(page, 1);

  await page.evaluate(([a, b]) => {
    window.__kanauDebug.playMyListInViewer({ name: 'テストキュー', items: [{ stream: a }, { stream: b }], idx: 0 });
  }, [streamA, streamB]);
  await waitForPlayerCount(page, 1);
  await expect(page.locator('#sv-bc-title')).toHaveText(streamA.title);

  await fireEnded(page);
  await waitForPlayerCount(page, 2);
  await expect(page.locator('#sv-bc-title')).toHaveText(streamB.title);

  const s = await fakeSummary(page);
  expect(s.created).toBe(2);
  // P5b: 動画切替時に旧プレイヤーを destroy する(所有権リーク修正済み)
  expect(s.destroyed).toBe(1);
  expect(s.live).toHaveLength(1);
  await expect(page.locator('iframe.fake-yt-iframe')).toHaveCount(1);
});

test('ビューワー → 音楽バー → ビューワー復帰で同一プレイヤーを引き継ぐ', async ({ page }) => {
  await setupFakeYouTube(page);
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);

  await page.click('#sv-music-btn');
  await expect(page.locator('#music-bar')).toBeVisible();
  await expect(page.locator('#stream-viewer')).toHaveClass(/sv-music-minified/);

  let s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);

  await page.click('#mbar-expand');
  await expect(page.locator('#stream-viewer')).toBeVisible();
  await expect(page.locator('#stream-viewer')).not.toHaveClass(/sv-music-minified/);

  s = await fakeSummary(page);
  expect(s.created).toBe(1);
  expect(s.destroyed).toBe(0);
});

test('?v=&t= 付きURLのcold startでビューワーが該当位置から開く', async ({ page }) => {
  await setupFakeYouTube(page);
  await page.goto('/?v=_qXMjq1xWTE&t=90');
  await page.waitForSelector('#loading', { state: 'hidden' });
  await waitForPlayerCount(page, 1);

  await expect(page.locator('#stream-viewer')).toBeVisible();
  const s = await fakeSummary(page);
  expect(s.live[0].videoId).toBe('_qXMjq1xWTE');
  expect(s.live[0].t).toBeGreaterThanOrEqual(90);

  // 完全クローズで v/t がURLから消える
  await page.click('#sv-close');
  await page.click('#yt-player-close');
  const params = await page.evaluate(() => Object.fromEntries(new URLSearchParams(location.search)));
  expect(params.v).toBeUndefined();
  expect(params.t).toBeUndefined();
});

test('モバイル幅では内部プレイヤーを生成せず外部YouTubeへ', async ({ page }) => {
  await setupFakeYouTube(page);
  await page.addInitScript(() => {
    window.__openedUrls = [];
    window.open = (url) => { window.__openedUrls.push(url); return null; };
  });
  await page.setViewportSize({ width: 500, height: 800 });
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream, 42);

  const opened = await page.evaluate(() => window.__openedUrls);
  expect(opened).toHaveLength(1);
  expect(opened[0]).toContain('https://www.youtube.com/watch?v=_qXMjq1xWTE');
  expect(opened[0]).toContain('t=42s');
  const s = await fakeSummary(page);
  expect(s?.created ?? 0).toBe(0);
  await expect(page.locator('#stream-viewer')).toBeHidden();
});
