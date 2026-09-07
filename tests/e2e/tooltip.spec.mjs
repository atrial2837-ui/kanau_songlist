// data-tooltip の自動配置ポップアップのE2E。
// 下優先・入らなければ上・横は画面内・二重表示なし・ページはみ出しなしを固定する。
import { test, expect } from '@playwright/test';
import { openApp, getStream, setupFakeYouTube } from './helpers.mjs';

async function tipBox(page) {
  return page.evaluate(() => {
    const tip = document.querySelector('.global-tip');
    if (!tip || tip.hidden) return null;
    const r = tip.getBoundingClientRect();
    return { l: r.left, t: r.top, r: r.right, b: r.bottom, text: tip.textContent };
  });
}

function inViewport(box, vw, vh) {
  return !!box && box.l >= 0 && box.t >= 0 && box.r <= vw && box.b <= vh;
}

test.beforeEach(async ({ page }) => {
  await openApp(page);
});

test('ヘッダーと一覧のポップアップは画面内に収まり二重表示しない', async ({ page }) => {
  const vw = 1280;
  const vh = 800;
  await page.setViewportSize({ width: vw, height: vh });

  await page.locator('#help-btn').hover({ force: true });
  let box = await tipBox(page);
  expect(inViewport(box, vw, vh)).toBe(true);

  await page.goto('/?tab=songs');
  await page.waitForSelector('#loading', { state: 'hidden' });
  await page.locator('[data-audience-toggle]').hover({ force: true });
  box = await tipBox(page);
  expect(inViewport(box, vw, vh)).toBe(true);

  // 二重表示なし
  await expect(page.locator('.global-tip:not([hidden])')).toHaveCount(1);
  // ページ全体のはみ出しなし
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(overflow).toBe(true);
});

test('ビューワーの戻るボタン説明は画面内に収まる', async ({ page }) => {
  await setupFakeYouTube(page);
  const stream = await getStream(page);
  const vid = String(stream.url).match(/([A-Za-z0-9_-]{11})/)[1];
  await page.goto(`/?v=${vid}`);
  await page.waitForSelector('#loading', { state: 'hidden' });
  await page.waitForSelector('#stream-viewer:not([hidden])');

  await page.locator('#sv-close').hover({ force: true });
  const box = await tipBox(page);
  expect(inViewport(box, 1280, 800)).toBe(true);
  await expect(page.locator('.global-tip:not([hidden])')).toHaveCount(1);
});
