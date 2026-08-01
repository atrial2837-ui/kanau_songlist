/**
 * @module domain/error/conflict-error
 * @description リソースの現在の状態と要求が両立しない場合を表すエラークラス。
 *
 * 権限はあるが、状態のせいで操作を許可できない場合に throw する。
 * 楽曲リクエストの自己削除で、他の人が投票済み／運営が対応を開始済みのケースなど。
 * HTTP Presenter は status プロパティを参照して 409 Conflict に変換する。
 *
 * @副作用 なし
 */

/**
 * 状態競合エラー。HTTP 409 相当。
 *
 * @extends {Error}
 */
export class ConflictError extends Error {
  /**
   * @param {string} message - エラーメッセージ
   */
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    /** @type {409} */
    this.status = 409;
  }
}
