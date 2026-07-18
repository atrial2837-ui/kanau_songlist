import { readFileSync } from 'fs';

export const FAKE_YT_SOURCE = readFileSync(
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

/**
 * YT API を「準備未完了」の状態で差し替える。fake は window.YT を用意するが
 * onYouTubeIframeAPIReady を自動発火しないため、プレイヤーは生成されない。
 * ready を発火させたいときは fireYtReady(page) を呼ぶ。壁時計遅延に依存せず、
 * 「準備前」の状態を並列実行下でも決定論的に作れる。
 */
export async function setupFakeYouTubeDeferred(page) {
  const deferred = FAKE_YT_SOURCE.replace(
    /if \(typeof window\.onYouTubeIframeAPIReady === 'function'\) \{[\s\S]*?\}\n/,
    '',
  );
  await page.route('https://www.youtube.com/iframe_api', (route) =>
    route.fulfill({ contentType: 'text/javascript', body: deferred }),
  );
  await page.route(/https:\/\/(i\.ytimg\.com|img\.youtube\.com|www\.youtube\.com\/embed)\/.*/, (route) =>
    route.abort(),
  );
}

/** setupFakeYouTubeDeferred 後、YT API 準備完了を発火する。 */
export function fireYtReady(page) {
  return page.evaluate(() => window.onYouTubeIframeAPIReady?.());
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

/** ストリームビューワーをプログラム経由で開く(テスト用デバッグフック経由)。 */
export async function openViewer(page, stream, resumeAt = 0) {
  await page.evaluate(
    ([s, t]) => window.__kanauDebug.openStreamViewer(s, t),
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
