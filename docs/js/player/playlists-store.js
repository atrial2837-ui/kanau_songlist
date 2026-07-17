// プレイリスト保存の localStorage ヘルパー(キー: kanau-playlists)。
// views/playlists.js 側の保存ロジックとの重複解消は別キャンペーン(P5b)で扱う。

// ─── Below-Player: Playlist helpers ──────────────────────────────────────────

export function _getPlaylists() {
  try { return JSON.parse(localStorage.getItem('kanau-playlists') || 'null') || []; }
  catch (_) { return []; }
}
