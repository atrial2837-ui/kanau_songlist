/**
 * プレイリスト管理ビュー（localStorage 保存）
 *
 * データ形式: localStorage['kanau-playlists'] =
 *   [{ id, name, createdAt, streams: [streamKey,...] }]
 */
import { state } from '../store.js';
import { $, escapeHtml, fmtDate, streamKey } from '../utils.js';

const STORAGE_KEY = 'kanau-playlists';

/* ── データ操作 ──────────────────────────────────────────── */

export function getPlaylists() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (_) { return []; }
}

function savePlaylists(lists) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lists)); } catch (_) {}
}

export function createPlaylist(name) {
  const lists = getPlaylists();
  const pl = { id: String(Date.now()), name: name.trim(), createdAt: new Date().toISOString(), streams: [] };
  lists.unshift(pl);
  savePlaylists(lists);
  return pl;
}

export function deletePlaylist(id) {
  savePlaylists(getPlaylists().filter(p => p.id !== id));
}

export function addStreamToPlaylist(playlistId, skey) {
  const lists = getPlaylists();
  const pl = lists.find(p => p.id === playlistId);
  if (!pl) return false;
  if (pl.streams.includes(skey)) return false; // 重複防止
  pl.streams.push(skey);
  savePlaylists(lists);
  return true;
}

export function removeStreamFromPlaylist(playlistId, skey) {
  const lists = getPlaylists();
  const pl = lists.find(p => p.id === playlistId);
  if (!pl) return;
  pl.streams = pl.streams.filter(s => s !== skey);
  savePlaylists(lists);
}

export function isStreamInAnyPlaylist(skey) {
  return getPlaylists().some(p => p.streams.includes(skey));
}

/* ── 描画 ────────────────────────────────────────────────── */

export function renderPlaylists() {
  const panel = $('#panel-playlists');
  if (!panel) return;

  const allStreams = state.data?.streams || [];
  const lists = getPlaylists();

  panel.innerHTML = `
    <div class="pl-wrap">
      <div class="section-header">
        <h2>📋 プレイリスト</h2>
        <span class="count-pill">${lists.length}件</span>
        <button class="pl-new-btn" id="pl-new-btn" type="button">＋ 新規作成</button>
      </div>

      ${!lists.length ? `
        <div class="pl-empty-state">
          <p>まだプレイリストがありません</p>
          <p class="pl-empty-hint">タイムラインの配信枠から <strong>☆ 保存</strong> を押して追加できます</p>
        </div>
      ` : `
        <div class="pl-grid">
          ${lists.map(pl => _renderPlaylistCard(pl, allStreams)).join('')}
        </div>
      `}
    </div>
  `;

  // ── イベント ──
  panel.addEventListener('click', (e) => {
    // 新規作成
    if (e.target.closest('#pl-new-btn')) {
      _promptCreate();
      return;
    }
    // 削除
    const delBtn = e.target.closest('[data-pl-del]');
    if (delBtn) {
      const id = delBtn.dataset.plDel;
      const pl = getPlaylists().find(p => p.id === id);
      if (pl && confirm(`「${pl.name}」を削除しますか？`)) {
        deletePlaylist(id);
        renderPlaylists();
      }
      return;
    }
    // 配信を削除
    const rmBtn = e.target.closest('[data-pl-rm-stream]');
    if (rmBtn) {
      const [plId, skey] = rmBtn.dataset.plRmStream.split('|:|');
      removeStreamFromPlaylist(plId, skey);
      renderPlaylists();
      return;
    }
    // 再生（プレイリスト内の配信）
    const playBtn = e.target.closest('[data-pl-play-stream]');
    if (playBtn) {
      const skey = playBtn.dataset.plPlayStream;
      const found = allStreams.find(s => streamKey(s) === skey);
      if (found?.url) {
        // main.js の openStreamViewer をグローバル経由で呼ぶ
        window.__openStreamViewer?.(found);
      }
      return;
    }
    // プレイリスト名編集
    const nameEl = e.target.closest('[data-pl-rename]');
    if (nameEl) {
      const id = nameEl.dataset.plRename;
      const pl = getPlaylists().find(p => p.id === id);
      if (!pl) return;
      const newName = prompt('プレイリスト名', pl.name)?.trim();
      if (newName) {
        const lists = getPlaylists();
        const target = lists.find(p => p.id === id);
        if (target) { target.name = newName; savePlaylists(lists); renderPlaylists(); }
      }
      return;
    }
  }, { once: false });
}

function _renderPlaylistCard(pl, allStreams) {
  const streams = pl.streams
    .map(skey => ({ skey, stream: allStreams.find(s => streamKey(s) === skey) }));

  const streamItems = streams.map(({ skey, stream }) => {
    if (!stream) return `
      <div class="pl-stream-row pl-stream-missing">
        <span class="pl-stream-title">（配信データなし）</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${escapeHtml(pl.id + '|:|' + skey)}" title="削除">✕</button>
      </div>`;
    return `
      <div class="pl-stream-row">
        <div class="pl-stream-info">
          <span class="pl-stream-date">${fmtDate(stream.date)}</span>
          <span class="pl-stream-title">${escapeHtml(stream.title || '配信')}</span>
          <span class="pl-stream-meta">第${stream.index}枠 · ${stream.songs?.length ?? 0}曲</span>
        </div>
        <div class="pl-stream-actions">
          ${stream.url ? `<button class="pl-play-stream-btn" data-pl-play-stream="${escapeHtml(skey)}" title="再生">▶</button>` : ''}
          <button class="pl-rm-btn" data-pl-rm-stream="${escapeHtml(pl.id + '|:|' + skey)}" title="削除">✕</button>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="pl-card">
      <div class="pl-card-head">
        <button class="pl-card-name" data-pl-rename="${escapeHtml(pl.id)}" title="クリックで名前変更">${escapeHtml(pl.name)}</button>
        <span class="pl-card-count">${pl.streams.length}枠</span>
        <button class="pl-del-btn" data-pl-del="${escapeHtml(pl.id)}" title="プレイリストを削除">🗑</button>
      </div>
      <div class="pl-stream-list">
        ${streamItems || '<div class="pl-stream-empty">配信が追加されていません</div>'}
      </div>
    </div>
  `;
}

function _promptCreate() {
  const name = prompt('プレイリスト名を入力してください')?.trim();
  if (!name) return;
  createPlaylist(name);
  // タブを再レンダリング
  renderPlaylists();
}

/* ── プレイリスト追加モーダル（タイムラインから呼ばれる） ── */

export function showAddToPlaylistModal(skey, streamTitle) {
  let modal = $('#pl-add-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'pl-add-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    document.body.appendChild(modal);
  }

  const lists = getPlaylists();

  modal.innerHTML = `
    <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
    <div class="pl-modal-box">
      <div class="pl-modal-head">
        <span>プレイリストに追加</span>
        <button class="pl-modal-close" id="pl-modal-close" type="button">✕</button>
      </div>
      <div class="pl-modal-sub">${escapeHtml(streamTitle || '配信')}</div>
      <div class="pl-modal-list">
        ${!lists.length
          ? '<p class="pl-modal-empty">プレイリストがありません</p>'
          : lists.map(pl => `
            <button class="pl-modal-item ${pl.streams.includes(skey) ? 'pl-modal-item--added' : ''}"
              data-pl-add="${escapeHtml(pl.id)}"
              ${pl.streams.includes(skey) ? 'disabled' : ''}>
              <span class="pl-modal-item-name">${escapeHtml(pl.name)}</span>
              <span class="pl-modal-item-count">${pl.streams.length}枠</span>
              ${pl.streams.includes(skey) ? '<span class="pl-modal-check">✓ 追加済み</span>' : '＋'}
            </button>
          `).join('')
        }
      </div>
      <button class="pl-modal-new" id="pl-modal-new" type="button">＋ 新しいプレイリストを作成して追加</button>
    </div>
  `;
  modal.hidden = false;

  const close = () => { modal.hidden = true; };

  modal.querySelector('#pl-modal-close').addEventListener('click', close);
  modal.querySelector('#pl-modal-backdrop').addEventListener('click', close);

  modal.querySelector('#pl-modal-new').addEventListener('click', () => {
    const name = prompt('プレイリスト名')?.trim();
    if (!name) return;
    const pl = createPlaylist(name);
    addStreamToPlaylist(pl.id, skey);
    close();
    _showToast(`「${name}」に追加しました`);
  });

  modal.querySelectorAll('[data-pl-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const plId = btn.dataset.plAdd;
      const pl = getPlaylists().find(p => p.id === plId);
      addStreamToPlaylist(plId, skey);
      close();
      _showToast(`「${pl?.name}」に追加しました`);
    });
  });

  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });
}

function _showToast(msg) {
  let toast = $('#pl-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'pl-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('pl-toast--show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('pl-toast--show'), 2500);
}
