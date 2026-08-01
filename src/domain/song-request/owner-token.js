/**
 * @module domain/song-request/owner-token
 * @description 楽曲リクエストの「自分の投稿」を証明する所有者トークン。
 *
 * ログイン機能がないため、投稿者本人であることを推測不可能な乱数トークンで示す。
 * サーバーは SHA-256 ハッシュのみを保存し、生トークンは作成レスポンスで
 * 1回だけ返してクライアント(localStorage)に持たせる。
 * リクエストIDは連番で総当たり可能なため、ID だけでの本人判定はしない。
 *
 * Web Crypto (globalThis.crypto) を使うため Cloudflare Workers / Node 18+ で動く。
 *
 * @副作用 crypto.getRandomValues による乱数生成のみ（I/O なし）
 */

/** トークンのバイト長（256bit）。 */
const TOKEN_BYTES = 32;

/**
 * バイト列を小文字16進文字列に変換する。
 *
 * @param {ArrayBuffer|Uint8Array} buf
 * @returns {string}
 */
function toHex(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * 推測不可能な所有者トークン（256bit / 64桁の16進文字列）を生成する。
 *
 * @returns {string}
 */
export function generateOwnerToken() {
  const bytes = new Uint8Array(TOKEN_BYTES);
  crypto.getRandomValues(bytes);
  return toHex(bytes);
}

/**
 * 所有者トークンを SHA-256 でハッシュする。DB にはこの値だけを保存する。
 *
 * @param {string} token
 * @returns {Promise<string>} 64桁の16進文字列
 */
export async function hashOwnerToken(token) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(token)));
  return toHex(digest);
}

/**
 * 送られてきたトークンが保存済みハッシュと一致するか判定する。
 * ハッシュ未設定（トークン方式の導入前に投稿された古いデータ）は常に false。
 *
 * @param {string} token - クライアントが送ってきた生トークン
 * @param {string|null|undefined} storedHash - DB に保存されたハッシュ
 * @returns {Promise<boolean>}
 */
export async function verifyOwnerToken(token, storedHash) {
  if (!token || !storedHash) return false;
  return (await hashOwnerToken(token)) === storedHash;
}
