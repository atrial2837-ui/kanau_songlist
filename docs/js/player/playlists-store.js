// プレイリスト保存の localStorage ヘルパー(キー: kanau-playlists)。
// views/playlists.js 側の保存ロジックとの重複解消は別キャンペーン(P5b)で扱う。

// ─── Below-Player: Playlist helpers ──────────────────────────────────────────

export function _getPlaylists() {
  try { return JSON.parse(localStorage.getItem('kanau-playlists') || 'null') || []; }
  catch (_) { return []; }
}

function _savePlaylists(pls) {
  try { localStorage.setItem('kanau-playlists', JSON.stringify(pls)); } catch (_) {}
}

function _addStreamToPlaylist(playlistId, skey) {
  const pls = _getPlaylists();
  const pl = pls.find(p => String(p.id) === String(playlistId));
  if (!pl) return false;
  if (!pl.streams) pl.streams = [];
  if (!pl.streams.includes(skey)) { pl.streams.push(skey); _savePlaylists(pls); }
  return true;
}
