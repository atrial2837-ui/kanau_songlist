import { readFileSync } from 'fs';

const FAKE_YT_SOURCE = readFileSync(
  new URL('./fixtures/fake-youtube-api.js', import.meta.url),
  'utf8',
);

/**
 * YouTube IFrame API をフェイクに差し替え、外部 YouTube ドメインを遮断する。
 * page.goto より前に呼ぶこと。
 */
export async function setupFakeYouTube(page) {
  await page.route('https://www.youtube.com/iframe_api', (route) =>
    route.fulfill({ contentType: 'text/javascript', body: FAKE_YT_SOURCE }),
  );
  // サムネイル等の外部リクエストはテストを不安定にするだけなので遮断
  await page.route(/https:\/\/(i\.ytimg\.com|img\.youtube\.com|www\.youtube\.com\/embed)\/.*/, (route) =>
    route.abort(),
  );
}

/** アプリを開き、初期ロード完了(#loading 非表示)まで待つ。 */
export async function openApp(page) {
  await page.goto('/');
  await page.waitForSelector('#loading', { state: 'hidden' });
}

/** 実データから配信オブジェクトを取得する(new チャンネルの index 番目)。 */
export async function getStream(page, index = 0) {
  return page.evaluate(async (i) => {
    const res = await fetch('data/streams.json');
    const data = await res.json();
    return data.channels.new[i];
  }, index);
}

/** ストリームビューワーをプログラム経由で開く(main.js が公開する正規の入口)。 */
export async function openViewer(page, stream, resumeAt = 0) {
  await page.evaluate(
    ([s, t]) => window.__openStreamViewer(s, t),
    [stream, resumeAt],
  );
}

/** フェイク YT の生成・破棄・生存状況を取得する。 */
export function fakeSummary(page) {
  return page.evaluate(() => window.__fakeYT?.summary() ?? null);
}

/** フェイクプレイヤーが count 個生成されるまで待つ。 */
export async function waitForPlayerCount(page, count) {
  await page.waitForFunction(
    (n) => (window.__fakeYT?.created ?? 0) >= n,
    count,
  );
}
