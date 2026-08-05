/**
 * @module usecase/generate-static-data
 * @description 静的 JSON 出力用の構造を組み立てる UseCase。
 *
 * **ファイル書き出しはしない** (Infra の責務)。生データから meta / songs / streams
 * の 3 つの構造を返す。
 *
 * 根拠となる既存コード:
 *   - admin-server/server.js:758-798 (generateStaticData)
 *   - admin-server/server.js:750-756 (buildStaticSiteData)
 *   - functions/api/data.js (BuildDatasetUseCase 相当)
 *
 * 依存: Phase 3C の buildDataset を内部で呼ぶ。
 *   - import { buildDataset } from './build-dataset.js'
 *   - Phase 3C 完了まで import エラーが発生可能。テストはモック で回避。
 *
 * @副作用 なし (Repository 読み取り + 構造組み立てのみ)
 */

/**
 * @typedef {object} GenerateStaticDataDeps
 * @property {import('../domain/port/repositories/channel-repository.js').ChannelRepository} channels
 * @property {import('../domain/port/repositories/artist-repository.js').ArtistRepository} artists
 * @property {import('../domain/port/repositories/song-repository.js').SongRepository} songs
 * @property {import('../domain/port/repositories/stream-repository.js').StreamRepository} streams
 * @property {import('../domain/port/repositories/stream-song-repository.js').StreamSongRepository} streamSongs
 * @property {import('../domain/port/repositories/song-channel-stats-repository.js').SongChannelStatsRepository} stats
 * @property {import('../domain/port/clock.js').Clock} clock
 */

/**
 * @typedef {object} GenerateStaticDataResult
 * @property {object} meta - メタ情報: { generatedAt, channels, combined }
 * @property {object} songs - 曲データ: { generatedAt, channels: { [code]: SongRecord[] } }
 * @property {object} streams - 歌枠データ: { generatedAt, channels: { [code]: StreamRecord[] } }
 */

/**
 * 静的 JSON 出力用の構造を組み立てる。
 *
 * admin-server:758-798 の generateStaticData と同じロジック。
 * ただし ファイル出力は行わない (戻り値のみ)。
 *
 * @param {GenerateStaticDataDeps} deps
 * @returns {Promise<GenerateStaticDataResult>}
 */
export async function generateStaticData(deps) {
  // Phase 3C の buildDataset を import して呼ぶ
  // (Phase 3C が未完成の場合は import エラー → テストでモック)
  let buildDataset;
  try {
    const module = await import('./build-dataset.js');
    buildDataset = module.buildDataset;
  } catch (err) {
    // Phase 3C がまだ実装されていない場合のフォールバック
    // テストのみでここに達し、実運用では build-dataset.js が存在するはず
    throw new Error('build-dataset.js is not available yet (Phase 3C in progress)');
  }

  // buildDataset で全データセットを取得
  const dataset = await buildDataset(deps);

  await attachTimestamps(deps, dataset);

  // 現在時刻を ISO 文字列で取得
  const generatedAt = deps.clock.now().toISOString();

  // 3 つの構造に分割
  const split = {
    meta: {
      generatedAt,
      channels: Object.fromEntries(
        Object.entries(dataset.channels).map(([code, channelData]) => [code, channelData.stats]),
      ),
      combined: dataset.combined.stats,
    },
    songs: {
      generatedAt,
      channels: Object.fromEntries(
        Object.entries(dataset.channels).map(([code, channelData]) => [code, channelData.songs]),
      ),
    },
    streams: {
      generatedAt,
      channels: Object.fromEntries(
        Object.entries(dataset.channels).map(([code, channelData]) => [code, channelData.streams]),
      ),
    },
  };

  return split;
}

/**
 * 承認済みタイムスタンプを各曲へ `t`（開始秒）として付ける。
 *
 * これを埋めておくことで、曲詳細から「その曲が始まる位置」へ直接飛べる。
 * フロントが枠ごとに API を叩かずに済むよう、静的データに含めるのが狙い。
 *
 * timestamps リポジトリを持たない構成（既存のテストなど）では何もしない。
 *
 * @param {GenerateStaticDataDeps & { timestamps?: { getAllApproved: () => Promise<object[]> } }} deps
 * @param {{ channels: Record<string, { streams: object[] }> }} dataset
 */
async function attachTimestamps(deps, dataset) {
  if (!deps.timestamps?.getAllApproved) return;

  const rows = await deps.timestamps.getAllApproved();
  if (!rows?.length) return;

  const byKey = new Map();
  for (const row of rows) {
    byKey.set(`${row.channelCode}#${row.streamIndex}#${row.songIndex}`, row.timeSeconds);
  }

  for (const [code, channelData] of Object.entries(dataset.channels || {})) {
    for (const stream of channelData.streams || []) {
      (stream.songs || []).forEach((song, i) => {
        const seconds = byKey.get(`${code}#${stream.index}#${i}`);
        if (seconds != null) song.t = seconds;
      });
    }
  }
}
