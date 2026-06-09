/**
 * プレイリスト管理ビュー
 *
 * Sub-tabs:
 *   「歌枠一覧」 — 全配信枠をサムネグリッド表示（4列×6行、ページネーション）
 *   「マイリスト」— localStorage 保存のユーザー作成プレイリスト
 *
 * localStorage データ形式:
 *   kanau-playlists = [{ id, name, createdAt, streams: [streamKey,...] }]
 */

import { state } from '../store.js';
import { $, escapeHtml, fmtDate, streamKey, youtubeThumb, youtubeThumbFallback } from '../utils.js';

const STORAGE_KEY = 'kanau-playlists';
const PER_PAGE    = 24; // 4列 × 6行

/* ── モジュールレベルの状態（サブタブ / ページ） ─────────────────────────── */

let _activeSubTab = 'all-streams';
let _streamPage   = 1;

/* ── データ操作（localStorage） ─────────────────────────────────────────── */

export function getPlaylists() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (_) { return []; }
}

function savePlaylists(lists) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lists)); } catch (_) {}
}

export function createPlaylist(name) {
  const lists = getPlaylists();
  const pl = {
    id: String(Date.now()),
    name: name.trim(),
    createdAt: new Date().toISOString(),
    streams: [],
  };
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
  if (pl.streams.includes(skey)) return false;
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

/* ── メイン描画 ────────────────────────────────────────────────────────── */

export function renderPlaylists() {
  const panel = $('#panel-playlists');
  if (!panel) return;

  const allStreams = state.data?.streams || [];

  panel.innerHTML = `
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="プレイリストサブタブ">
        <button class="pl-subtab${_activeSubTab === 'all-streams'  ? ' active' : ''}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${_activeSubTab === 'all-streams'}">歌枠一覧</button>
        <button class="pl-subtab${_activeSubTab === 'my-playlists' ? ' active' : ''}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${_activeSubTab === 'my-playlists'}">
          マイリスト
          <span class="pl-subtab-count">${getPlaylists().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${_activeSubTab === 'all-streams'
          ? _renderAllStreams(allStreams, _streamPage)
          : _renderMyPlaylists(allStreams)}
      </div>
    </div>
  `;

  // サブタブ切り替え（panel.onclick で毎回上書き → リスナー重複なし）
  panel.onclick = (e) => {
    // ── サブタブ ──
    const subtabBtn = e.target.closest('[data-pl-subtab]');
    if (subtabBtn) {
      _activeSubTab = subtabBtn.dataset.plSubtab;
      if (_activeSubTab === 'all-streams') _streamPage = 1;
      renderPlaylists();
      return;
    }

    // ── ページネーション ──
    const pageBtn = e.target.closest('[data-pl-page]');
    if (pageBtn && !pageBtn.disabled) {
      _streamPage = Number(pageBtn.dataset.plPage);
      _renderPageInPlace(allStreams);
      return;
    }

    if (_activeSubTab === 'my-playlists') {
      _handleMyPlaylistsClick(e, allStreams);
    }
  };

  // サムネ 404 フォールバック
  panel.addEventListener('error', (e) => {
    const img = e.target;
    if (!img.classList.contains('pl-sg-thumb')) return;
    const fb = img.dataset.fallback;
    if (fb && img.src !== fb) { img.src = fb; delete img.dataset.fallback; }
  }, true);
}

/* ── 歌枠一覧グリッド ──────────────────────────────────────────────────── */

function _renderAllStreams(streams, page) {
  if (!streams.length) {
    return `
      <div class="pl-empty-state">
        <p>配信データを読み込んでいます…</p>
        <p class="pl-empty-hint">先にタイムラインタブを開くとすぐに表示されます</p>
      </div>`;
  }

  const total      = streams.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage   = Math.min(Math.max(1, page), totalPages);
  const start      = (safePage - 1) * PER_PAGE;
  const slice      = streams.slice(start, start + PER_PAGE);

  const cards = slice.map(s => {
    const skey = streamKey(s);
    const thumb = youtubeThumb(s.url);
    const thumbFb = youtubeThumbFallback(s.url);
    const songCount = s.songs?.length ?? 0;
    return `
      <button class="pl-sg-card" type="button" data-stream-play="${escapeHtml(skey)}"
        title="${escapeHtml(s.title || '配信')}">
        <div class="pl-sg-thumb-wrap">
          ${thumb
            ? `<img class="pl-sg-thumb" src="${escapeHtml(thumb)}"
                data-fallback="${escapeHtml(thumbFb)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`
            : '<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${songCount}<span class="pl-sg-badge-unit">曲</span></span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${escapeHtml(s.title || '配信')}</span>
          <span class="pl-sg-date">${escapeHtml(fmtDate(s.date) || '')}</span>
        </div>
      </button>`;
  }).join('');

  const pagination = totalPages > 1 ? `
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${safePage - 1}"
        ${safePage <= 1 ? 'disabled' : ''} type="button" aria-label="前のページ">前へ</button>
      <span class="pl-page-info">${safePage} / ${totalPages}</span>
      <button class="pl-page-btn" data-pl-page="${safePage + 1}"
        ${safePage >= totalPages ? 'disabled' : ''} type="button" aria-label="次のページ">次へ</button>
    </div>` : '';

  return `<div class="pl-stream-grid" id="pl-stream-grid">${cards}</div>${pagination}`;
}

/** ページ切替時はグリッド部分だけ差し替えてスクロールを戻す */
function _renderPageInPlace(allStreams) {
  const body = $('#pl-subtab-body');
  if (!body) { renderPlaylists(); return; }
  body.innerHTML = _renderAllStreams(allStreams, _streamPage);
  // サムネフォールバック再セット
  const panel = $('#panel-playlists');
  if (panel) {
    panel.addEventListener('error', (e) => {
      const img = e.target;
      if (!img.classList.contains('pl-sg-thumb')) return;
      const fb = img.dataset.fallback;
      if (fb && img.src !== fb) { img.src = fb; delete img.dataset.fallback; }
    }, { once: true, capture: true });
  }
  body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── マイリスト ────────────────────────────────────────────────────────── */

function _renderMyPlaylists(allStreams) {
  const lists = getPlaylists();
  if (!lists.length) {
    return `
      <div class="pl-empty-state">
        <p>まだプレイリストがありません</p>
        <p class="pl-empty-hint">タイムラインの配信枠から <strong>☆ 保存</strong> を押して追加できます</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">＋ 新規作成</button>
      </div>`;
  }

  return `
    <div class="pl-my-actions">
      <span class="pl-my-count">${lists.length}件のプレイリスト</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">＋ 新規作成</button>
    </div>
    <div class="pl-grid">
      ${lists.map(pl => _renderPlaylistCard(pl, allStreams)).join('')}
    </div>`;
}

function _renderPlaylistCard(pl, allStreams) {
  const streams = pl.streams.map(skey => ({
    skey,
    stream: allStreams.find(s => streamKey(s) === skey),
  }));

  const coverThumbs = streams
    .filter(({ stream }) => stream?.url)
    .slice(0, 1)
    .map(({ stream }) => {
      const thumb = youtubeThumb(stream.url);
      return thumb
        ? `<img class="pl-card-cover" src="${escapeHtml(thumb)}" alt="" loading="lazy" referrerpolicy="no-referrer">`
        : '';
    }).join('');

  const items = streams.map(({ skey, stream }) => {
    if (!stream) return `
      <div class="pl-stream-row pl-stream-missing">
        <span class="pl-stream-title">（配信データなし）</span>
        <button class="pl-rm-btn" data-pl-rm-stream="${escapeHtml(pl.id + '|:|' + skey)}"
          type="button" title="削除">✕</button>
      </div>`;
    return `
      <div class="pl-stream-row">
        <div class="pl-stream-info">
          <span class="pl-stream-date">${fmtDate(stream.date)}</span>
          <span class="pl-stream-title">${escapeHtml(stream.title || '配信')}</span>
          <span class="pl-stream-meta">第${stream.index}枠 · ${stream.songs?.length ?? 0}曲</span>
        </div>
        <div class="pl-stream-actions">
          ${stream.url
            ? `<button class="pl-play-stream-btn" data-pl-play-stream="${escapeHtml(skey)}"
                type="button" title="再生">▶</button>`
            : ''}
          <button class="pl-rm-btn" data-pl-rm-stream="${escapeHtml(pl.id + '|:|' + skey)}"
            type="button" title="削除">✕</button>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="pl-card">
      <div class="pl-card-head">
        ${coverThumbs ? `<div class="pl-card-cover-wrap">${coverThumbs}</div>` : ''}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${escapeHtml(pl.id)}"
            type="button" title="クリックで名前変更">${escapeHtml(pl.name)}</button>
          <span class="pl-card-count">${pl.streams.length}枠</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${escapeHtml(pl.id)}"
          type="button" title="プレイリストを削除">🗑</button>
      </div>
      <div class="pl-stream-list">
        ${items || '<div class="pl-stream-empty">配信が追加されていません</div>'}
      </div>
    </div>`;
}

function _handleMyPlaylistsClick(e, allStreams) {
  // 新規作成
  if (e.target.closest('#pl-new-btn')) {
    _promptCreate();
    return;
  }
  // プレイリスト削除
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
  // 配信削除
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
    if (found?.url) window.__openStreamViewer?.(found);
    return;
  }
  // プレイリスト名変更
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
}

function _promptCreate() {
  const name = prompt('プレイリスト名を入力してください')?.trim();
  if (!name) return;
  createPlaylist(name);
  renderPlaylists();
}

/* ── プレイリスト追加モーダル（タイムラインから呼ばれる） ──────────────── */

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
            <button class="pl-modal-item${pl.streams.includes(skey) ? ' pl-modal-item--added' : ''}"
              data-pl-add="${escapeHtml(pl.id)}"
              ${pl.streams.includes(skey) ? 'disabled' : ''} type="button">
              <span class="pl-modal-item-name">${escapeHtml(pl.name)}</span>
              <span class="pl-modal-item-count">${pl.streams.length}枠</span>
              ${pl.streams.includes(skey) ? '<span class="pl-modal-check">✓ 追加済み</span>' : '＋'}
            </button>`).join('')}
      </div>
      <button class="pl-modal-new" id="pl-modal-new" type="button">＋ 新しいプレイリストを作成して追加</button>
    </div>`;
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
