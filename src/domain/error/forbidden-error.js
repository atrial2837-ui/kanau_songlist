/**
 * @module domain/error/forbidden-error
 * @description 認可されていない操作を表すエラークラス。
 *
 * 「リソースは存在するが、この要求者には操作する権限がない」場合に throw する。
 * 楽曲リクエストの自己削除で、所有者トークンが一致しないケースなど。
 * HTTP Presenter は status プロパティを参照して 403 Forbidden に変換する。
 *
 * @副作用 なし
 */

/**
 * 認可エラー。HTTP 403 相当。
 *
 * @extends {Error}
 */
export class ForbiddenError extends Error {
  /**
   * @param {string} message - エラーメッセージ
   */
  constructor(message) {
    super(message);
    this.name = 'ForbiddenError';
    /** @type {403} */
    this.status = 403;
  }
}
