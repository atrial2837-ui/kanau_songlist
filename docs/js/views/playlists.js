/**
 * プレイリスト管理ビュー
 *
 * Sub-tabs:
 *   「歌枠一覧」  — 全配信枠をサムネグリッド表示
 *   「歌みた・オリ曲」— music.json の動画ライブラリ（グリッド/リスト/カテゴリ切替）
 *   「マイリスト」 — localStorage 保存のユーザー作成プレイリスト
 *
 * localStorage データ形式:
 *   kanau-playlists = [{ id, name, createdAt, streams: [streamKey|"mv:<id>",...] }]
 */

import { state } from '../store.js';
import { $, escapeHtml, fmtDate, streamKey, youtubeThumb, youtubeThumbFallback, youtubeVideoId } from '../utils.js';
import { icon } from '../icons.js';
import { openStreamViewer, playMyListInViewer } from '../player/stream-player.js';
import { getPlaylists as storeGetPlaylists, savePlaylists as storeSavePlaylists, isStreamInAnyPlaylist } from '../player/playlists-store.js';
import {
  initMusicLibrary,
  renderMusicSubtab as _renderMusicSubtab,
  loadAndRenderMusic as _loadAndRenderMusic,
  ensureMusicVideos,
  handleMusicClick,
  handleMusicSearchInput,
  getMusicVideos,
  resolveMusicVideoId,
  setMusicQuery,
  mvBadge as _mvBadge,
} from './playlists/music-library.js';

// 歌みた・オリ曲データへの外部アクセスは facade 経由の従来 API を維持
export { getMusicVideos, resolveMusicVideoId } from './playlists/music-library.js';

// 永続化は player/playlists-store.js が唯一の所有者(キー: kanau-playlists)
const PER_PAGE    = 24; // 4列 × 6行

/* ── モジュールレベルの状態（サブタブ / ページ） ─────────────────────────── */

let _activeSubTab = 'all-streams';
let _streamPage   = 1;
let _streamSort   = 'newest';

/* ── データ操作（localStorage） ─────────────────────────────────────────── */

export function getPlaylists() {
  return storeGetPlaylists();
}

function savePlaylists(lists) {
  storeSavePlaylists(lists);
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

// プレイリスト所属判定は player/playlists-store.js が所有（ビュー間依存を作らないため）
export { isStreamInAnyPlaylist } from '../player/playlists-store.js';

/* ── メイン描画 ────────────────────────────────────────────────────────── */

export function renderPlaylists() {
  const panel = $('#panel-playlists');
  if (!panel) return;

  initMusicLibrary({
    isActive: () => _activeSubTab === 'music',
    openAddModal: (keys, title) => showAddToPlaylistModal(keys, title),
  });

  const allStreams = state.data?.streams || [];

  // マイリストに mv: 項目があるとき music.json 未ロードだと「動画データなし」に
  // なるため、マイリスト表示時はキャッシュ即時反映 + 未取得なら fetch して再描画
  if (_activeSubTab === 'my-playlists') {
    ensureMusicVideos(() => {
      if (_activeSubTab === 'my-playlists') renderPlaylists();
    });
  }

  // データ更新などによる全再描画で検索欄のフォーカスが失われないよう退避
  const searchHadFocus = document.activeElement?.id === 'pl-music-search';
  let searchSel = null;
  if (searchHadFocus) {
    try { searchSel = document.activeElement.selectionStart; } catch (_) {}
    setMusicQuery(document.activeElement.value);
  }

  panel.innerHTML = `
    <nav class="panel-topnav" aria-label="ページナビゲーション">
      <button class="panel-topnav-btn" type="button" data-nav-tab="dashboard"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h5v7H4z"/><path d="M10 4h5v16h-5z"/><path d="M16 9h4v11h-4z"/></svg>ダッシュボード</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="ranking"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0z"/><path d="M6 5H3v2a4 4 0 0 0 4 4"/><path d="M18 5h3v2a4 4 0 0 1-4 4"/><path d="M12 11v5"/><path d="M8 20h8"/><path d="M9 16h6v4H9z"/></svg>ランキング</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="songs"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>全曲リスト</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="timeline"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M8 17h3"/></svg>タイムライン</button>
      <button class="panel-topnav-btn" type="button" data-nav-tab="analytics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l3-4 4 2 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>アナリティクス</button>
      <button class="panel-topnav-btn active" type="button" data-nav-tab="playlists"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h10"/><path d="M5 11h10"/><path d="M5 16h7"/><path d="M18 8v10l3-2 3 2V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"/></svg>プレイリスト</button>
    </nav>
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="プレイリストサブタブ">
        <button class="pl-subtab${_activeSubTab === 'all-streams'  ? ' active' : ''}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${_activeSubTab === 'all-streams'}">歌枠一覧</button>
        <button class="pl-subtab${_activeSubTab === 'music' ? ' active' : ''}"
          data-pl-subtab="music" role="tab"
          aria-selected="${_activeSubTab === 'music'}">歌みた・オリ曲</button>
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
          : _activeSubTab === 'music'
            ? _renderMusicSubtab()
            : _renderMyPlaylists(allStreams)}
      </div>
    </div>
  `;

  // music サブタブ表示中は常にローダーを起動（未取得なら fetch、取得済みなら結果同期）
  if (_activeSubTab === 'music') _loadAndRenderMusic();

  // 検索欄のフォーカス・カーソル位置を復元
  if (searchHadFocus) {
    const inp = $('#pl-music-search');
    if (inp) {
      inp.focus();
      if (searchSel !== null) { try { inp.setSelectionRange(searchSel, searchSel); } catch (_) {} }
    }
  }

  // サブタブ切り替え（panel.onclick で毎回上書き → リスナー重複なし）
  panel.onclick = (e) => {
    // ── トップナビタブ切り替え ──
    const navTabBtn = e.target.closest('[data-nav-tab]');
    if (navTabBtn) {
      document.querySelector(`[data-tab="${navTabBtn.dataset.navTab}"]`)?.click();
      return;
    }
    // ── サブタブ ──
    const subtabBtn = e.target.closest('[data-pl-subtab]');
    if (subtabBtn) {
      _activeSubTab = subtabBtn.dataset.plSubtab;
      if (_activeSubTab === 'all-streams') _streamPage = 1;
      renderPlaylists(); // music サブタブのローダーは renderPlaylists 内で起動される
      return;
    }

    // ── ソート ──
    const sortBtn = e.target.closest('[data-pl-sort]');
    if (sortBtn) {
      _streamSort = sortBtn.dataset.plSort;
      _streamPage = 1;
      _renderPageInPlace(allStreams);
      return;
    }

    // ── ページネーション ──
    const pageBtn = e.target.closest('[data-pl-page]');
    if (pageBtn && !pageBtn.disabled) {
      _streamPage = Number(pageBtn.dataset.plPage);
      _renderPageInPlace(allStreams);
      return;
    }

    // ── 歌みた・オリ曲サブタブ由来のクリック（music-library.js に委譲） ──
    if (handleMusicClick(e)) return;

    if (_activeSubTab === 'my-playlists') {
      _handleMyPlaylistsClick(e, allStreams);
    }
  };

  // 検索: 入力欄は描画し直さず結果(#pl-music-results)だけ差し替えるので、
  // IME 変換中でもライブフィルタして問題ない（抑制ロジック不要）
  panel.oninput = (e) => { handleMusicSearchInput(e); };
  // IME 確定直後にも即時反映（ブラウザ差異対策）
  panel.oncompositionend = (e) => { handleMusicSearchInput(e, { immediate: true }); };

  // サムネ 404 フォールバック
  panel.addEventListener('error', (e) => {
    const img = e.target;
    if (!img.classList.contains('pl-sg-thumb')) return;
    const fb = img.dataset.fallback;
    if (fb && img.src !== fb) { img.src = fb; delete img.dataset.fallback; }
  }, true);

  // マイリストのドラッグ並び替えを初期化
  _initDragSort();
}


/* ── 歌枠一覧グリッド ──────────────────────────────────────────────────── */

const SORT_OPTIONS = [
  { key: 'newest',      label: '新しい順' },
  { key: 'oldest',      label: '古い順'   },
  { key: 'most-songs',  label: '曲数↓'    },
  { key: 'fewest-songs',label: '曲数↑'    },
];

function _sortStreams(streams, sort) {
  const s = streams.slice();
  if (sort === 'oldest')       return s.reverse();
  if (sort === 'most-songs')   return s.sort((a, b) => (b.songs?.length ?? 0) - (a.songs?.length ?? 0));
  if (sort === 'fewest-songs') return s.sort((a, b) => (a.songs?.length ?? 0) - (b.songs?.length ?? 0));
  return s; // newest (default — already sorted newest-first in store)
}

function _renderAllStreams(streams, page) {
  if (!streams.length) {
    return `
      <div class="pl-empty-state">
        <p>配信データを読み込んでいます…</p>
        <p class="pl-empty-hint">先にタイムラインタブを開くとすぐに表示されます</p>
      </div>`;
  }

  const sorted     = _sortStreams(streams, _streamSort);
  const total      = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage   = Math.min(Math.max(1, page), totalPages);
  const start      = (safePage - 1) * PER_PAGE;
  const slice      = sorted.slice(start, start + PER_PAGE);

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
          <span class="pl-sg-add${isStreamInAnyPlaylist(skey) ? ' is-saved' : ''}" role="button" tabindex="0"
            aria-label="プレイリストに追加"
            data-playlist-add="${escapeHtml(skey)}" data-stream-title="${escapeHtml(s.title || '配信')}"
            title="プレイリストに追加">${PL_BOOKMARK_SVG}</span>
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

  const sortBar = `
    <div class="pl-sort-bar">
      ${SORT_OPTIONS.map(o => `
        <button class="pl-sort-opt${_streamSort === o.key ? ' active' : ''}"
          data-pl-sort="${o.key}" type="button">${o.label}</button>`).join('')}
    </div>`;

  return `${sortBar}<div class="pl-stream-grid" id="pl-stream-grid">${cards}</div>${pagination}`;
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


/**
 * プレイリストの YouTube 動画 ID を収集する共有ヘルパー。
 * mv: キーは resolveMusicVideoId で解決し、それ以外は allStreams で解決する。
 * 解決できた URL から youtubeVideoId で ID を抽出し、falsy を除いた配列を返す。
 */
function _playlistVideoIds(pl, allStreams) {
  return (pl.streams || [])
    .map(skey => {
      if (skey.startsWith('mv:')) {
        const mv = resolveMusicVideoId(skey);
        return mv?.url ? youtubeVideoId(mv.url) : '';
      }
      const s = allStreams.find(st => streamKey(st) === skey);
      return s?.url ? youtubeVideoId(s.url) : '';
    })
    .filter(Boolean);
}

/**
 * 動画 ID 配列から YouTube 再生 URL を開く（Task A / B 共通ロジック）。
 * - 0 本: alert
 * - 1 本: watch?v=ID
 * - 2 本以上: watch_videos?video_ids= (先頭 50 本)
 */
function _openYouTubePlaylist(videoIds) {
  if (!videoIds.length) {
    alert('YouTubeで再生できる動画がありません');
    return;
  }
  let url;
  if (videoIds.length === 1) {
    url = `https://www.youtube.com/watch?v=${videoIds[0]}`;
  } else {
    const ids = videoIds.slice(0, 50);
    if (videoIds.length > 50) {
      alert(`動画が${videoIds.length}本あります。先頭50本で連続再生します。`);
    }
    url = `https://www.youtube.com/watch_videos?video_ids=${ids.join(',')}`;
  }
  window.open(url, '_blank', 'noopener noreferrer');
}

/* ── マイリスト ────────────────────────────────────────────────────────── */

function _renderMyPlaylists(allStreams) {
  const lists = getPlaylists();
  if (!lists.length) {
    return `
      <div class="pl-empty-state">
        <p>まだプレイリストがありません</p>
        <p class="pl-empty-hint">タイムラインの配信枠から <strong>栞ボタン</strong> を押して追加できます</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${icon('plus')} 新規作成</button>
      </div>`;
  }

  return `
    <div class="pl-my-actions">
      <span class="pl-my-count">${lists.length}件のプレイリスト</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${icon('plus')} 新規作成</button>
    </div>
    <div class="pl-grid">
      ${lists.map(pl => _renderPlaylistCard(pl, allStreams)).join('')}
    </div>`;
}

function _renderPlaylistCard(pl, allStreams) {
  const entries = pl.streams.map(skey => {
    const isMv = skey.startsWith('mv:');
    const mv   = isMv ? resolveMusicVideoId(skey) : null;
    return { skey, isMv, mv, stream: isMv ? null : allStreams.find(s => streamKey(s) === skey) };
  });

  const firstUrl = entries.find(({ stream, mv }) => stream?.url || mv?.url)?.stream?.url
    || entries.find(({ mv }) => mv?.url)?.mv?.url;
  const coverThumbs = firstUrl
    ? `<img class="pl-card-cover" src="${escapeHtml(youtubeThumb(firstUrl))}" alt="" loading="lazy" referrerpolicy="no-referrer">`
    : '';

  const totalItems = entries.length;
  const items = entries.map(({ skey, isMv, mv, stream }) => {
    const moveKey = escapeHtml(pl.id + '|:|' + skey);
    const dragHandle = `<span class="pl-drag-handle" aria-hidden="true" title="ドラッグして並び替え">${icon('drag')}</span>`;
    const rmBtn = `<button class="pl-rm-btn" data-pl-rm-stream="${moveKey}" type="button" title="削除">${icon('close')}</button>`;

    if (isMv) {
      if (!mv) return `
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${escapeHtml(skey)}" data-pl-id="${escapeHtml(pl.id)}">${dragHandle}
          <div class="pl-stream-info"><span class="pl-stream-title">（動画データなし）</span></div>
          <div class="pl-stream-actions">${rmBtn}</div>
        </div>`;
      const { label: badge, sub } = _mvBadge(mv);
      const mvTypeKey = mv.type || 'original';
      const mvIdx = getMusicVideos().indexOf(mv);
      return `
        <div class="pl-stream-row" data-pl-skey="${escapeHtml(skey)}" data-pl-id="${escapeHtml(pl.id)}">
          ${dragHandle}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${mvTypeKey}">${badge}</span></span>
            <span class="pl-stream-title">${escapeHtml(mv.title || '—')}</span>
            <span class="pl-stream-meta">${escapeHtml(sub)}</span>
          </div>
          <div class="pl-stream-actions">
            ${mvIdx >= 0
              ? `<button class="pl-play-stream-btn" data-play-music-pl="${mvIdx}" type="button" title="再生">${icon('play')}</button>`
              : ''}
            ${rmBtn}
          </div>
        </div>`;
    }

    if (!stream) return `
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${escapeHtml(skey)}" data-pl-id="${escapeHtml(pl.id)}">${dragHandle}
        <div class="pl-stream-info"><span class="pl-stream-title">（配信データなし）</span></div>
        <div class="pl-stream-actions">${rmBtn}</div>
      </div>`;
    return `
      <div class="pl-stream-row" data-pl-skey="${escapeHtml(skey)}" data-pl-id="${escapeHtml(pl.id)}">
        ${dragHandle}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${fmtDate(stream.date)}</span>
          <span class="pl-stream-title">${escapeHtml(stream.title || '配信')}</span>
          <span class="pl-stream-meta">第${stream.index}枠 · ${stream.songs?.length ?? 0}曲</span>
        </div>
        <div class="pl-stream-actions">
          ${stream.url
            ? `<button class="pl-play-stream-btn" data-pl-play-stream="${escapeHtml(skey)}"
                type="button" title="再生">${icon('play')}</button>`
            : ''}
          ${rmBtn}
        </div>
      </div>`;
  }).join('');

  // YouTube共有可能な動画IDを収集（stream + mv: 両方を含む）
  const videoIds = _playlistVideoIds(pl, allStreams);

  return `
    <div class="pl-card">
      <div class="pl-card-head">
        ${coverThumbs ? `<div class="pl-card-cover-wrap">${coverThumbs}</div>` : ''}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${escapeHtml(pl.id)}"
            type="button" title="クリックで名前変更">${escapeHtml(pl.name)}</button>
          <span class="pl-card-count">${pl.streams.length}件</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${escapeHtml(pl.id)}"
          type="button" title="プレイリストを削除">🗑</button>
      </div>
      <div class="pl-stream-list">
        ${items || '<div class="pl-stream-empty">配信が追加されていません</div>'}
      </div>
      ${(videoIds.length || pl.streams.length) ? `
      <div class="pl-card-footer">
        ${videoIds.length ? `
        <button class="pl-yt-share-btn" data-pl-yt-share="${escapeHtml(pl.id)}"
          type="button" title="YouTubeで連続再生（一時的なプレイリストとして開きます）">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTubeで連続再生 (${videoIds.length}本)
        </button>` : ''}
        ${pl.streams.length ? `
        <button class="pl-yt-share-btn" data-pl-share="${escapeHtml(pl.id)}"
          type="button" title="このプレイリストの共有リンクをコピー">${icon('link')} リンクを共有</button>` : ''}
      </div>` : ''}
    </div>`;
}

function _handleMyPlaylistsClick(e, allStreams) {
  // 新規作成
  if (e.target.closest('#pl-new-btn')) {
    _promptCreate();
    return;
  }
  // プレイリスト共有リンクをコピー
  const shareBtn = e.target.closest('[data-pl-share]');
  if (shareBtn) {
    const pl = getPlaylists().find(p => p.id === shareBtn.dataset.plShare);
    if (!pl) return;
    const payload = JSON.stringify({ n: pl.name, s: pl.streams });
    const b64 = btoa(String.fromCharCode(...new TextEncoder().encode(payload)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const url = `${location.origin}${location.pathname}?pl=${b64}`;
    const done = (ok) => {
      shareBtn.innerHTML = ok ? `${icon('check')} コピーしました` : 'コピーできません';
      setTimeout(() => { shareBtn.innerHTML = `${icon('link')} リンクを共有`; }, 1600);
    };
    navigator.clipboard?.writeText(url).then(() => done(true)).catch(() => {
      try {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        ta.remove();
        done(ok);
      } catch (_) { done(false); }
    });
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
  // 再生（プレイリスト内の配信）→ マイリストをキューとしてビューワーで再生
  const playBtn = e.target.closest('[data-pl-play-stream]');
  if (playBtn) {
    const row = playBtn.closest('.pl-stream-row');
    if (row && _playMyListFromRow(row, allStreams)) return;
    const skey = playBtn.dataset.plPlayStream;
    const found = allStreams.find(s => streamKey(s) === skey);
    if (found?.url) openStreamViewer(found);
    return;
  }
  // 再生（プレイリスト内の音楽動画）→ 同上
  const playMvBtn = e.target.closest('[data-play-music-pl]');
  if (playMvBtn) {
    const row = playMvBtn.closest('.pl-stream-row');
    if (row && _playMyListFromRow(row, allStreams)) return;
    const musicVideos = getMusicVideos();
    if (musicVideos.length) {
      const idx = Number(playMvBtn.dataset.playMusicPl);
      import('../music-player.js').then(m => m.playMusicQueue(musicVideos, idx));
    }
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

  // YouTubeで連続再生
  const ytShareBtn = e.target.closest('[data-pl-yt-share]');
  if (ytShareBtn) {
    const plId = ytShareBtn.dataset.plYtShare;
    const pl = getPlaylists().find(p => p.id === plId);
    if (!pl) return;
    _openYouTubePlaylist(_playlistVideoIds(pl, allStreams));
    return;
  }
}

function _promptCreate() {
  const name = prompt('プレイリスト名を入力してください')?.trim();
  if (!name) return;
  createPlaylist(name);
  renderPlaylists();
}

/* ── プレイリスト追加モーダル（YouTube の保存先選択風） ──────────────────── */

const PL_BOOKMARK_SVG = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';

/** プレイリストの先頭動画のサムネ URL（カバー用）。なければ空文字 */
function _playlistCoverUrl(pl) {
  const allStreams = state.data?.streams || [];
  for (const k of (pl.streams || [])) {
    if (k.startsWith('mv:')) { const mv = resolveMusicVideoId(k); if (mv?.url) return mv.url; }
    else { const s = allStreams.find(st => streamKey(st) === k); if (s?.url) return s.url; }
  }
  return '';
}

/** プレイリスト追加モーダル。skeyOrArray は単一キーまたはキー配列（まとめて追加）。
 *  YouTube の保存先選択のように、サムネ + 曲数 + 栞アイコンで表示し、
 *  栞をタップで追加/削除トグル（登録済みは色付き）。再描画で再ポップしない。 */
export function showAddToPlaylistModal(skeyOrArray, streamTitle, opts = {}) {
  const keys = Array.isArray(skeyOrArray) ? skeyOrArray.filter(Boolean) : [skeyOrArray].filter(Boolean);
  if (!keys.length) return;
  const isBulk = keys.length > 1;
  // 追加/削除のたびに呼ぶ。呼び出し元のボタンの保存済み表示を即時更新するため。
  const notifyChange = () => {
    try { opts.onChange?.(keys.some(k => isStreamInAnyPlaylist(k))); } catch (_) {}
  };

  let modal = $('#pl-add-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'pl-add-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    document.body.appendChild(modal);
  }

  // このリストに（すべての）キーが入っているか
  const isSaved = (pl) => keys.every(k => (pl.streams || []).includes(k));

  /** 1プレイリストぶんの行 HTML */
  const itemHtml = (pl) => {
    const saved = isSaved(pl);
    const coverUrl = _playlistCoverUrl(pl);
    const thumb = coverUrl ? youtubeThumb(coverUrl) : '';
    return `
      <button class="pl-modal-item${saved ? ' is-saved' : ''}" data-pl-add="${escapeHtml(pl.id)}"
        type="button" role="checkbox" aria-checked="${saved}">
        <span class="pl-modal-item-cover">
          ${thumb
            ? `<img src="${escapeHtml(thumb)}" alt="" loading="lazy" referrerpolicy="no-referrer">`
            : `<span class="pl-modal-item-cover--empty">${icon('music')}</span>`}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${escapeHtml(pl.name)}</span>
          <span class="pl-modal-item-count">${pl.streams.length}曲</span>
        </span>
        <span class="pl-modal-bookmark${saved ? ' is-saved' : ''}" aria-hidden="true">${PL_BOOKMARK_SVG}</span>
      </button>`;
  };

  const listHtmlAll = () => {
    const currentLists = getPlaylists();
    if (!currentLists.length) {
      return '<p class="pl-modal-empty">プレイリストがありません<br><span style="font-size:11px">下の「新しいプレイリストを作成」から追加できます</span></p>';
    }
    return currentLists.map(itemHtml).join('');
  };

  const subText = isBulk ? `${keys.length}曲をまとめて保存` : (streamTitle || '配信');

  const _build = () => {
    modal.innerHTML = `
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="プレイリストに保存">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">保存先</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="閉じる">${icon('close')}</button>
        </div>
        <div class="pl-modal-sub">${escapeHtml(subText)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${listHtmlAll()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${icon('plus')}</span> 新しいプレイリストを作成
        </button>
      </div>`;
    modal.hidden = false;

    modal.querySelector('#pl-modal-close').addEventListener('click', close);
    modal.querySelector('#pl-modal-backdrop').addEventListener('click', close);

    modal.querySelector('#pl-modal-new').addEventListener('click', () => {
      const name = prompt('プレイリスト名')?.trim();
      if (!name) return;
      const pl = createPlaylist(name);
      keys.forEach(k => addStreamToPlaylist(pl.id, k));
      _showToast(isBulk ? `「${name}」に${keys.length}曲保存しました` : `「${name}」に保存しました`);
      // 行を1つ追加するだけ（モーダルは閉じない）
      const listEl = modal.querySelector('#pl-modal-list');
      const empty = listEl?.querySelector('.pl-modal-empty');
      if (empty) listEl.innerHTML = '';
      if (listEl) listEl.insertAdjacentHTML('afterbegin', itemHtml(getPlaylists().find(p => p.id === pl.id)));
      notifyChange();
    });

    // 行クリック＝保存トグル（その行だけ更新、モーダルは再ポップしない）
    modal.querySelector('#pl-modal-list').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-pl-add]');
      if (!btn) return;
      const plId = btn.dataset.plAdd;
      const lists = getPlaylists();
      const pl = lists.find(p => p.id === plId);
      if (!pl) return;
      if (!Array.isArray(pl.streams)) pl.streams = [];
      if (isSaved(pl)) {
        keys.forEach(k => { pl.streams = pl.streams.filter(s => s !== k); });
        savePlaylists(lists);
        _showToast(isBulk ? `${keys.length}曲を削除しました` : '削除しました');
      } else {
        keys.forEach(k => { if (!pl.streams.includes(k)) pl.streams.push(k); });
        savePlaylists(lists);
        _showToast(isBulk ? `「${pl.name}」に${keys.length}曲保存しました` : `「${pl.name}」に保存しました`);
      }
      // クリックした行だけ差し替え（再描画による再ポップを避ける）
      btn.outerHTML = itemHtml(getPlaylists().find(p => p.id === plId));
      notifyChange();
    });
  };

  const close = () => { modal.hidden = true; };
  _build();

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

/* ── ドラッグ並び替え（Pointer Events ベース） ─────────────────────────── */

/** マイリストの行 ▶ から、リスト全体をビューワーのキューとして再生する。
 *  解決できた項目（配信 + 動画）だけをキューに積み、クリック行から開始する。 */
function _playMyListFromRow(row, allStreams) {
  const pl = getPlaylists().find(p => p.id === row.dataset.plId);
  if (!pl) return false;
  const items = [];
  for (const k of pl.streams) {
    if (k.startsWith('mv:')) {
      const mv = resolveMusicVideoId(k);
      if (mv?.url) items.push({ kind: 'mv', key: k, video: mv });
    } else {
      const s = allStreams.find(st => streamKey(st) === k);
      if (s?.url) items.push({ kind: 'stream', key: k, stream: s });
    }
  }
  if (!items.length) return false;
  let idx = items.findIndex(it => it.key === row.dataset.plSkey);
  if (idx < 0) idx = 0;
  playMyListInViewer({ name: pl.name || 'マイリスト', items, idx });
  return true;
}

/* ── ドラッグ並び替え ──────────────────────────────────────────────────────
 * ドラッグ中の行は transform でポインタに追従し、他の行は CSS トランジションで
 * 滑らかにシフト表示する。DOM の並び替えと保存はドロップ確定時に一度だけ行う。 */

function _initDragSort() {
  if (_activeSubTab !== 'my-playlists') return;
  const panel = $('#panel-playlists');
  if (!panel) return;
  panel.querySelectorAll('.pl-stream-list').forEach(list => {
    list.addEventListener('pointerdown', _onDragStart, { passive: false });
  });
}

let _dragState = null;

function _onDragStart(e) {
  if (_dragState) return; // 多重ドラッグ防止
  const handle = e.target.closest('.pl-drag-handle');
  if (!handle) return;
  const row = handle.closest('.pl-stream-row');
  const list = handle.closest('.pl-stream-list');
  if (!row || !list) return;

  e.preventDefault();

  const rows = Array.from(list.querySelectorAll('.pl-stream-row'));
  const startIdx = rows.indexOf(row);
  if (startIdx < 0) return;

  // ドラッグ開始時点の各行の中心 Y（固定値として使う — レイアウトは動かさないので不変）
  const mids = rows.map(r => {
    const rc = r.getBoundingClientRect();
    return rc.top + rc.height / 2;
  });
  const rowRect = row.getBoundingClientRect();

  _dragState = {
    list, row, rows, mids, startIdx,
    targetIdx: startIdx,
    startY: e.clientY,
    rowH: rowRect.height + (parseFloat(getComputedStyle(list).rowGap || getComputedStyle(list).gap) || 0),
    plId: row.dataset.plId,
    moved: false,
  };

  row.classList.add('is-dragging');
  list.classList.add('is-drag-active');
  try { row.setPointerCapture(e.pointerId); } catch (_) { /* 合成イベント等 */ }

  row.addEventListener('pointermove', _onDragMove, { passive: false });
  row.addEventListener('pointerup', _onDragEnd);
  row.addEventListener('pointercancel', _onDragCancel);
}

function _onDragMove(e) {
  const st = _dragState;
  if (!st) return;
  e.preventDefault();

  const dy = e.clientY - st.startY;
  if (!st.moved && Math.abs(dy) < 3) return; // 微小移動はクリック扱い
  st.moved = true;
  st.row.style.transform = `translateY(${dy}px)`;

  // ドラッグ中の行の中心位置から挿入先インデックスを決定
  const centerY = st.mids[st.startIdx] + dy;
  let target = 0;
  for (let i = 0; i < st.mids.length; i++) {
    if (i === st.startIdx) continue;
    if (centerY > st.mids[i]) target++;
  }

  if (target !== st.targetIdx) {
    st.targetIdx = target;
    // 間にある行をシフト表示（CSS transition で滑らかに動く）
    st.rows.forEach((r, i) => {
      if (i === st.startIdx) return;
      let shift = 0;
      if (st.startIdx < target && i > st.startIdx && i <= target) shift = -st.rowH;
      else if (st.startIdx > target && i >= target && i < st.startIdx) shift = st.rowH;
      r.style.transform = shift ? `translateY(${shift}px)` : '';
    });
  }
}

function _onDragEnd() {
  const st = _dragState;
  if (!st) return;
  const { plId, startIdx, targetIdx, moved } = st;
  _cleanupDrag();
  if (!moved || targetIdx === startIdx) return;

  const lists = getPlaylists();
  const pl = lists.find(p => p.id === plId);
  if (pl && startIdx < pl.streams.length) {
    const arr = pl.streams.slice();
    const [item] = arr.splice(startIdx, 1);
    arr.splice(targetIdx, 0, item);
    pl.streams = arr;
    savePlaylists(lists);
  }
  renderPlaylists();
}

function _onDragCancel() {
  _cleanupDrag();
}

function _cleanupDrag() {
  const st = _dragState;
  if (!st) return;
  st.rows.forEach(r => { r.style.transform = ''; });
  st.row.classList.remove('is-dragging');
  st.list.classList.remove('is-drag-active');
  st.row.removeEventListener('pointermove', _onDragMove);
  st.row.removeEventListener('pointerup', _onDragEnd);
  st.row.removeEventListener('pointercancel', _onDragCancel);
  _dragState = null;
}
