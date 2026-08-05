/**
 * @module infra/d1-rest/d1-timestamp-repository
 * @description community_timestamps の D1 REST API 実装。
 *
 * 静的データ生成（tools/generate_static_data.mjs）が、曲ごとの開始時刻を
 * streams.json に埋め込むために使う。承認済みの読み出しだけを担当し、
 * 投稿・審査は Worker 側 (infra/d1-worker/d1-timestamp-repository.js) が扱う。
 */

export class D1RestTimestampRepository {
  /** @param {import('./d1-rest-client.js').D1RestClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * 承認済みタイムスタンプを全件返す。
   *
   * 静的データ生成では全枠ぶんを一度に引いてメモリ上で突き合わせるため、
   * 枠ごとに問い合わせず 1 クエリでまとめて取る。
   *
   * @returns {Promise<{channelCode:string, streamIndex:number, songIndex:number, timeSeconds:number}[]>}
   */
  async getAllApproved() {
    const rows = await this.client.query(
      `SELECT channel_code, stream_index, song_index, time_seconds
         FROM community_timestamps
        WHERE status = 'approved'
        ORDER BY channel_code ASC, stream_index ASC, song_index ASC`,
    );
    return rows.map((row) => ({
      channelCode: String(row.channel_code),
      streamIndex: Number(row.stream_index),
      songIndex:   Number(row.song_index),
      timeSeconds: Number(row.time_seconds),
    }));
  }
}
