// ダッシュボード構成・旧URL互換・配信者モード切替のE2E。
// ダッシュボードは単一スクロール構成（概要→分析の順に常時表示）。
import { test, expect } from '@playwright/test';
import { openApp } from './helpers.mjs';

test.beforeEach(async ({ page }) => {
  await openApp(page);
});

test('ダッシュボードは3列→概要→履歴→直近→分析の順に表示される', async ({ page }) => {
  await expect(page.locator('.dashboard-trio-grid')).toBeVisible();
  await expect(page.locator('.dashboard-overview-grid')).toBeVisible();
  await expect(page.locator('.dashboard-analytics-section')).toBeVisible();
  // 旧来の目次タブは存在しない
  await expect(page.locator('#dashboard-subnav')).toHaveCount(0);
});

test('分析セクションまでスクロールできる', async ({ page }) => {
  const section = page.locator('#dashboard-analytics');
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible();
  await expect(page.locator('#artist-bar-list .bar-row').first()).toBeVisible();
});

test('旧URL(?tab=analytics)はダッシュボードに読み替えられる', async ({ page }) => {
  await page.goto('/?tab=analytics');
  await page.waitForSelector('#loading', { state: 'hidden' });
  await expect(page.locator('#tab-dashboard')).toHaveClass(/active/);
  await expect(page.locator('#panel-dashboard')).toHaveClass(/active/);
  // 旧パネルは存在しない
  await expect(page.locator('#panel-analytics')).toHaveCount(0);
});

test('全曲リスト内のボタンで配信者モードを往復できる', async ({ page }) => {
  await page.locator('#tab-songs').click();
  const toggle = page.locator('[data-audience-toggle]');
  await expect(toggle).toBeVisible();

  await toggle.click();
  await expect(page.locator('#panel-songs h2')).toContainText('選曲ボード');
  await expect(page.locator('body')).toHaveAttribute('data-audience', 'singer');

  await page.locator('[data-audience-toggle]').click();
  await expect(page.locator('#panel-songs h2')).toContainText('全曲リスト');
  await expect(page.locator('body')).toHaveAttribute('data-audience', 'listener');
});

test('テーマ切替後もダッシュボードが描画される', async ({ page }) => {
  await page.locator('#dashboard-analytics').scrollIntoViewIfNeeded();
  await expect(page.locator('#dashboard-analytics')).toBeVisible();

  await page.locator('#theme-toggle').click();
  await expect(page.locator('.dashboard-trio-grid')).toBeVisible();
  await expect(page.locator('#dashboard-analytics')).toBeVisible();
});
