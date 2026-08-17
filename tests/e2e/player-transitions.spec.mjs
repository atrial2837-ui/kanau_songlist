// P5(playerMode状態機械・所有権統合)が変更する分岐の挙動固定テスト。
// Sol協議で「PR E着手のblocking前提」とされた4シナリオ+モバイル外部再生。
import { test, expect } from '@playwright/test';
import {
  setupFakeYouTube,
  setupFakeYouTubeDeferred,
  fireYtReady,
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
  // 動画IDは実データ由来。ハードコードすると streams.json 更新で先頭が入れ替わった時点で腐る
  const videoId = stream.url.match(/(?:\/live\/|[?&]v=|youtu\.be\/)([\w-]{11})/)[1];
  expect(opened[0]).toContain(`https://www.youtube.com/watch?v=${videoId}`);
  expect(opened[0]).toContain('t=42s');
  const s = await fakeSummary(page);
  expect(s?.created ?? 0).toBe(0);
  await expect(page.locator('#stream-viewer')).toBeHidden();
});

test('YT API準備完了前に音楽バーへ移してもプレイヤーが二重生成されない', async ({ page }) => {
  await setupFakeYouTubeDeferred(page); // ready 未発火 = プレイヤー未生成
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream);
  await page.click('#sv-music-btn'); // プレイヤー未生成のまま移譲

  await expect(page.locator('#music-bar')).toBeVisible();
  await expect(page.locator('#stream-viewer')).toBeHidden();

  // ready 発火で、無効化されたビューワー側と音楽バー側の両待機が走る
  await fireYtReady(page);
  await waitForPlayerCount(page, 1);
  await page.waitForTimeout(200);
  const s = await fakeSummary(page);
  expect(s.created).toBe(1); // ビューワー側の待機生成は _svGen で無効化されている
  expect(s.live).toHaveLength(1);
});

test('YTエラー時は壊れたプレイヤーを破棄してfallback iframeへ切り替える', async ({ page }) => {
  await setupFakeYouTube(page);
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream);
  await waitForPlayerCount(page, 1);

  await page.evaluate(() => {
    const live = window.__fakeYT.instances.find((p) => !p._destroyed);
    live._fire('onError', { target: live, data: 101 });
  });

  await page.waitForFunction(() => window.__fakeYT.destroyed === 1);
  await expect(page.locator('#sv-player-wrap iframe:not(.fake-yt-iframe)')).toHaveCount(1);

  // 壊れた所有者が残らないため、閉じるとミニ化せず正常終了する
  await page.click('#sv-close');
  await expect(page.locator('#stream-viewer')).toBeHidden();
  await expect(page.locator('#yt-player-panel')).toBeHidden();
});

test('API準備前にfullscreenから音楽バーへ移すとfullscreen状態が残らない', async ({ page }) => {
  await setupFakeYouTubeDeferred(page); // ready 未発火 = プレイヤー未生成
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream);
  await page.click('#sv-fullscreen-btn'); // プレイヤー生成前でも全画面に入れる
  await expect(page.locator('body')).toHaveClass(/has-sv-fullscreen/);

  await page.click('#sv-music-btn'); // 未生成のまま音楽バーへ移譲

  await expect(page.locator('#music-bar')).toBeVisible();
  await expect(page.locator('#stream-viewer')).toBeHidden();
  await expect(page.locator('body')).not.toHaveClass(/has-sv-fullscreen/);
  await expect(page.locator('#stream-viewer')).not.toHaveClass(/sv-fullscreen/);

  await fireYtReady(page); // ビューワー側待機の無効化を確認(音楽バー側の1つだけ生成)
  await page.waitForTimeout(200);
  const s = await fakeSummary(page);
  expect(s.created).toBe(1);
});

test('music-playerチャンク未ロード中に音楽バーへ移しても再生要求が失われない', async ({ page }) => {
  // YT は ready 未発火(プレイヤー未生成)。music-player チャンクをゲートで止め、
  // bridge 未登録の窓を壁時計に依存せず決定論的に作る(has-music-bar で識別)。
  await setupFakeYouTubeDeferred(page);
  let releaseChunk;
  const gate = new Promise((r) => { releaseChunk = r; });
  await page.route('**/chunk-*.js', async (route) => {
    const resp = await route.fetch();
    const body = await resp.text();
    if (body.includes('has-music-bar')) await gate; // music-player チャンクだけ保留
    await route.fulfill({ response: resp, body });
  });
  await openApp(page);
  const stream = await getStream(page);
  await openViewer(page, stream); // プレイヤー未生成
  await page.click('#sv-music-btn'); // 早期移譲(!_svPlayer)、bridge 未登録の窓

  // bridge 未登録の間は再生要求を保持(バーはまだ出ない)
  await expect(page.locator('#stream-viewer')).toBeHidden();
  await expect(page.locator('#music-bar')).toBeHidden();

  releaseChunk(); // music-player ロード完了 → _ensureMusicBridge が再生要求を届ける
  await expect(page.locator('#music-bar')).toBeVisible();
});
