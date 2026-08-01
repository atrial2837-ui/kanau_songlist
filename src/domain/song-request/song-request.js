/**
 * @module domain/song-request/song-request
 * @description 楽曲リクエストのエンティティ。
 */

export class SongRequest {
  /**
   * @param {object} props
   * @param {number|null} props.id
   * @param {string} props.title
   * @param {string} [props.artist]
   * @param {string|null} [props.url]
   * @param {string|null} [props.requesterName]
   * @param {string} [props.status] - singable | practicing | unregistered
   * @param {number} [props.voteCount]
   * @param {string|null} [props.ownerTokenHash] - 投稿者本人確認用トークンの SHA-256。生値は保持しない
   * @param {string} props.createdAt
   * @param {string} props.updatedAt
   */
  constructor({
    id,
    title,
    artist = '',
    url = null,
    requesterName = null,
    status = 'unregistered',
    voteCount = 0,
    ownerTokenHash = null,
    createdAt,
    updatedAt,
  }) {
    this.id = id ?? null;
    this.title = title;
    this.artist = artist || '';
    this.url = url || null;
    this.requesterName = requesterName || null;
    this.status = status;
    this.voteCount = Number(voteCount || 0);
    // 公開 API では絶対に返さない（toPublic に含めない）
    this.ownerTokenHash = ownerTokenHash || null;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
