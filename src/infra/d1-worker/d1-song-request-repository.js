/**
 * @module infra/d1-worker/d1-song-request-repository
 * @description song_requests テーブルへの D1 Worker Binding 実装。
 */

import { SongRequest } from '../../domain/song-request/song-request.js';

export class D1SongRequestRepository {
  /** @param {import('./d1-worker-client.js').D1WorkerClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * @param {{ limit?: number }} [opts]
   * @returns {Promise<SongRequest[]>}
   */
  async listOpen({ limit = 80 } = {}) {
    const rows = await this.client.query(
      `SELECT * FROM song_requests
       ORDER BY vote_count DESC, created_at DESC
       LIMIT ?`,
      limit,
    );
    return rows.map(toEntity);
  }

  /**
   * @param {number} id
   * @returns {Promise<SongRequest|null>}
   */
  async findById(id) {
    const row = await this.client.queryFirst(
      `SELECT * FROM song_requests WHERE id = ?`,
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * @param {object} props
   * @param {string} props.title
   * @param {string} [props.artist]
   * @param {string|null} [props.url]
   * @param {string|null} [props.requesterName]
   * @param {string|null} [props.ownerTokenHash] - 投稿者確認用トークンの SHA-256
   * @returns {Promise<SongRequest>}
   */
  async insert({ title, artist = '', url = null, requesterName = null, ownerTokenHash = null }) {
    try {
      const row = await this.client.queryFirst(
        `INSERT INTO song_requests
           (title, artist, url, requester_name, owner_token_hash)
         VALUES (?, ?, ?, ?, ?)
         RETURNING *`,
        title,
        artist,
        url,
        requesterName,
        ownerTokenHash,
      );
      return toEntity(row);
    } catch (err) {
      // owner_token_hash 列が無い環境（マイグレーション 0002 未適用）でも
      // 投稿自体は成功させる。取り消し機能だけが使えない状態になる。
      if (!isMissingOwnerTokenColumn(err)) throw err;
      const row = await this.client.queryFirst(
        `INSERT INTO song_requests
           (title, artist, url, requester_name)
         VALUES (?, ?, ?, ?)
         RETURNING *`,
        title,
        artist,
        url,
        requesterName,
      );
      return toEntity(row);
    }
  }

  /**
   * @param {number} id
   * @param {{ title?: string, artist?: string, url?: string|null, requesterName?: string|null, status?: string }} patch
   * @returns {Promise<SongRequest|null>}
   */
  async update(id, patch) {
    const current = await this.client.queryFirst(
      `SELECT * FROM song_requests WHERE id = ?`,
      id,
    );
    if (!current) return null;
    const row = await this.client.queryFirst(
      `UPDATE song_requests
       SET title = ?, artist = ?, url = ?, requester_name = ?, status = ?, updated_at = datetime('now')
       WHERE id = ?
       RETURNING *`,
      patch.title ?? current.title,
      patch.artist ?? current.artist ?? '',
      patch.url === undefined ? current.url ?? null : patch.url,
      patch.requesterName === undefined ? current.requester_name ?? null : patch.requesterName,
      patch.status ?? current.status ?? 'unregistered',
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * @param {number} id
   * @returns {Promise<SongRequest|null>}
   */
  async incrementVote(id) {
    const row = await this.client.queryFirst(
      `UPDATE song_requests
       SET vote_count = vote_count + 1,
           updated_at = datetime('now')
       WHERE id = ?
       RETURNING *`,
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * 投票を1つ取り消す。二重取り消しでも票数が負にならないよう CASE で下限0にする。
   *
   * @param {number} id
   * @returns {Promise<SongRequest|null>}
   */
  async decrementVote(id) {
    const row = await this.client.queryFirst(
      `UPDATE song_requests
       SET vote_count = CASE WHEN vote_count > 0 THEN vote_count - 1 ELSE 0 END,
           updated_at = datetime('now')
       WHERE id = ?
       RETURNING *`,
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  async delete(id) {
    const result = await this.client.run(
      `DELETE FROM song_requests WHERE id = ?`,
      id,
    );
    return Number(result.meta?.changes || 0) > 0;
  }
}

/**
 * owner_token_hash 列が存在しないことによるエラーか判定する。
 * D1/SQLite は "no such column: owner_token_hash" を返す。
 * 他の SQL エラーを握りつぶさないよう列名まで含めて判定する。
 *
 * @param {unknown} err
 * @returns {boolean}
 */
function isMissingOwnerTokenColumn(err) {
  const msg = String(err?.message || err || '');
  return /no such column/i.test(msg) && msg.includes('owner_token_hash');
}

/**
 * @param {Record<string, unknown>} row
 * @returns {SongRequest}
 */
function toEntity(row) {
  return new SongRequest({
    id:            row.id,
    title:         row.title,
    artist:        row.artist ?? '',
    url:           row.url ?? null,
    requesterName: row.requester_name ?? null,
    status:        row.status ?? 'unregistered',
    voteCount:     row.vote_count ?? 0,
    ownerTokenHash: row.owner_token_hash ?? null,
    createdAt:     row.created_at,
    updatedAt:     row.updated_at,
  });
}
