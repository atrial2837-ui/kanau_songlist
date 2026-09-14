/**
 * @module usecase/merge-songs
 * @description 曲の統合 UseCase (誤登録曲の修正用)。
 *
 * 誤登録曲 (source) のセトリ参照・統計を正規曲 (target) へ付け替えた後、
 * 誤登録曲を削除する。参照されなくなった誤登録アーティストも削除する。
 * 根拠となる既存コード:
 *   - replace-setlist.js (stats の decrement / upsert による増減管理)
 *   - save-song-metadata.js (songId の検証・NotFoundError)
 *
 * @副作用 あり (stream_songs / song_channel_stats / songs / artists への書き込み)
 */

import { ValidationError } from '../domain/error/validation-error.js';
import { NotFoundError } from '../domain/error/not-found-error.js';

/**
 * @typedef {object} MergeSongsDeps
 * @property {import('../domain/port/repositories/song-repository.js').SongRepository} songs
 * @property {import('../domain/port/repositories/stream-song-repository.js').StreamSongRepository} streamSongs
 * @property {import('../domain/port/repositories/song-channel-stats-repository.js').SongChannelStatsRepository} stats
 * @property {import('../domain/port/repositories/artist-repository.js').ArtistRepository} artists
 * @property {import('../domain/port/clock.js').Clock} clock
 */

/**
 * @typedef {object} MergeSongsInput
 * @property {number|string} sourceSongId - 統合元 (誤登録曲) の id。統合後に削除される
 * @property {number|string} targetSongId - 統合先 (正規曲) の id。残る
 */

/**
 * @typedef {object} MergeSongsResult
 * @property {number} sourceSongId
 * @property {number} targetSongId
 * @property {number} movedStreamSongs - 付け替えたセトリ行数
 * @property {number} movedStats       - 移譲した歌唱回数の合計
 * @property {number|null} deletedArtistId - 削除したアーティスト id (なければ null)
 */

/**
 * 誤登録曲を正規曲に統合する。
 *
 * @param {MergeSongsDeps} deps
 * @param {MergeSongsInput} input
 * @returns {Promise<MergeSongsResult>}
 */
export async function mergeSongs(deps, input) {
  const sourceId = Number(input.sourceSongId);
  const targetId = Number(input.targetSongId);
  if (!sourceId || !targetId || !Number.isFinite(sourceId) || !Number.isFinite(targetId)) {
    throw new ValidationError('sourceSongId と targetSongId は正の整数で指定してください');
  }
  if (sourceId === targetId) {
    throw new ValidationError('同じ曲同士は統合できません');
  }

  const source = await deps.songs.findById(sourceId);
  if (!source) throw new NotFoundError(`source song not found: id=${sourceId}`);
  const target = await deps.songs.findById(targetId);
  if (!target) throw new NotFoundError(`target song not found: id=${targetId}`);

  const now = deps.clock.now().toISOString();

  // 1. セトリ参照の付け替え (song_key_snapshot も付け替え先に更新)
  const movedStreamSongs = await deps.streamSongs.updateSongId(sourceId, targetId, target.song_key);

  // 2. 統計の移譲: source を 0 に戻し、同数を target に加算して source 行を削除
  const allStats = await deps.stats.findAll();
  let movedStats = 0;
  for (const row of allStats.filter((s) => s.song_id === sourceId)) {
    const n = row.sing_count;
    if (n > 0) {
      await deps.stats.decrementBySongIds(Array(n).fill(sourceId), row.channel_id, now);
      for (let i = 0; i < n; i++) {
        await deps.stats.upsertIncrement(targetId, row.channel_id, now);
      }
      movedStats += n;
    }
  }
  await deps.stats.deleteBySongId(sourceId);

  // 3. 誤登録曲の削除
  await deps.songs.deleteById(sourceId);

  // 4. 参照されなくなったアーティストの削除
  let deletedArtistId = null;
  if (source.artist_id != null) {
    const remaining = await deps.songs.findAll();
    if (!remaining.some((s) => s.artist_id === source.artist_id)) {
      await deps.artists.deleteById(source.artist_id);
      deletedArtistId = source.artist_id;
    }
  }

  return { sourceSongId: sourceId, targetSongId: targetId, movedStreamSongs, movedStats, deletedArtistId };
}
