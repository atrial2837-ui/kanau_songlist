import { state, initStore, toggleFavorite, isFavorite } from './store.js';
import { ensureSongTags, loadAll, loadInitial } from './data.js';
import { buildIndex } from './search.js';
import { initTheme, onThemeChange, cycleTheme } from './theme.js';
import { onRerenderNeeded, destroyAllCharts } from './charts.js';
import { $, $$, escapeHtml, fmtDate, daysSince, isLink, formatNumber, streamKey } from './utils.js';
import { DEFAULT_CHANNEL } from './config.js';
import { readUrlState, writeUrlState } from './url-state.js';
import { initSearchPalette, openSearchPalette, closeSearchPalette, isSearchPaletteOpen } from './views/search-palette.js';

initTheme();
initStore();

const VIEW_LOADERS = {
  dashboard: () => import('./views/dashboard.js').then(m => m.renderDashboard),
  ranking:   () => import('./views/ranking.js').then(m => m.renderRanking),
  songs:     () => import('./views/songs.js').then(m => m.renderSongs),
  timeline:  () => import('./views/timeline.js').then(m => m.renderTimeline),
  analytics: () => import('./views/analytics.js').then(m => m.renderAnalytics),
};
const rendererCache = new Map();
let renderToken = 0;
let fullDataPromise = null;

function isValidTab(tab) {
  return Object.prototype.hasOwnProperty.call(VIEW_LOADERS, tab);
}

async function getRenderer(tab) {
  if (!rendererCache.has(tab)) rendererCache.set(tab, VIEW_LOADERS[tab]());
  try {
    return await rendererCache.get(tab);
  } catch (error) {
    rendererCache.delete(tab);
    throw error;
  }
}

// ストリームデータが必要なタブ（dashboard/timeline/analytics）
// ranking/songs は songs.json だけで描画できる
function needsStreams(tab) {
  return ['dashboard', 'timeline', 'analytics'].includes(tab);
}

function renderDeferredPanel(tab, options = {}) {
  const panel = $(`#panel-${tab}`);
  if (!panel) return;
  const labels = {
    dashboard: 'ダッシュボード詳細',
    ranking: 'ランキング',
    songs: '曲リスト',
    timeline: '配信タイムライン',
    analytics: 'アナリティクス',
  };
  panel.innerHTML = `
    <div class="state-card">
      <div class="msg">${escapeHtml(labels[tab] || '詳細データ')}</div>
      <div class="err-detail">読み込み中です。</div>
    </div>
  `;
}

function renderPanelLoading(tab) {
  const panel = $(`#panel-${tab}`);
  if (!panel) return;
  panel.innerHTML = `
    <div class="state-card">
      <div class="msg">詳細データを読み込んでいます</div>
    </div>
  `;
}

// songs.json が届いた時点で ranking/songs を早期描画
function applyPartialData(partial) {
  if (state.channelData?.fullLoaded) return;
  state.channelData = partial; // partialLoaded: true, fullLoaded: false
  // state.data を常に最新の channelData に合わせる（タブ問わず）
  const ch = getDataset(state.channel) ? state.channel : DEFAULT_CHANNEL;
  const newData = getDataset(ch);
  if (newData) state.data = newData;
  // streams 不要なタブのみ即時描画（dashboard 等は full 待ち）
  if (!needsStreams(state.activeTab) && state.data) {
    renderTab(state.activeTab, { autoLoad: false });
  }
}

// streams.json まで揃ったときに全タブを更新
function applyFullData(fullData) {
  state.channelData = fullData;
  state.channelData.fullLoaded = true;
  const ch = getDataset(state.channel) ? state.channel : DEFAULT_CHANNEL;
  switchChannel(ch, { resetSearch: false, updateUrl: false, render: false });
  renderTab(state.activeTab, { autoLoad: false });
}

function startFullDataLoad() {
  fullDataPromise = loadAll({
    meta: state.channelData,
    onSongsReady: applyPartialData,
  }).then(applyFullData).finally(() => { fullDataPromise = null; });
  return fullDataPromise;
}

async function ensureFullData() {
  if (state.channelData?.fullLoaded) return;
  if (!fullDataPromise) startFullDataLoad();
  await fullDataPromise;
}

async function renderTab(tab = state.activeTab, options = {}) {
  if (!state.data || !isValidTab(tab)) return;
  const hasPartial = state.channelData?.partialLoaded || state.channelData?.fullLoaded;
  const hasFull    = state.channelData?.fullLoaded;
  const waitNeeded = needsStreams(tab) ? !hasFull : !hasPartial;

  if (waitNeeded) {
    if (options.autoLoad) {
      renderPanelLoading(tab);
      try {
        await ensureFullData();
      } catch (error) {
        console.error('[data] full load failed', error);
        const panel = $(`#panel-${tab}`);
        if (panel) {
          panel.innerHTML = `
            <div class="state-card">
              <div class="msg">詳細データの読み込みに失敗しました</div>
              <div class="err-detail">${escapeHtml(error?.message || String(error))}</div>
              <button class="btn primary" type="button" data-load-full-data="${escapeHtml(tab)}">再読み込み</button>
            </div>
          `;
          panel.querySelector('[data-load-full-data]')?.addEventListener('click', () => {
            renderTab(tab, { autoLoad: true });
          });
        }
        return;
      }
    } else {
      renderDeferredPanel(tab, { initial: options.initial });
      return;
    }
  }
  const token = ++renderToken;
  try {
    const renderer = await getRenderer(tab);
    if (token !== renderToken || tab !== state.activeTab || !state.data) return;
    if (tab === 'songs') buildIndex(state.data.songs || []);
    renderer();
  } catch (error) {
    console.error(`[${tab}] render failed`, error);
    const panel = $(`#panel-${tab}`);
    if (panel) {
      panel.innerHTML = `
        <div class="state-card">
          <div class="msg">表示に失敗しました</div>
          <div class="err-detail">${escapeHtml(error?.message || String(error))}</div>
        </div>
      `;
    }
  }
}

function activateTab(tab, options = {}) {
  if (!isValidTab(tab)) tab = 'dashboard';
  state.activeTab = tab;
  syncActiveTabUi(tab);
  if (options.updateUrl !== false) writeUrlState({ tab });
  renderTab(tab, {
    autoLoad: options.autoLoad !== false,
    initial: !!options.initial,
  });
}

function syncActiveTabUi(tab) {
  $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  $$('.panel').forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));
}

function getDataset(channelId) {
  if (!state.channelData) return null;
  if (channelId === 'all') return state.channelData.combined;
  return state.channelData.channels[channelId] || null;
}

function switchChannel(channelId, options = {}) {
  const ds = getDataset(channelId);
  if (!ds) return;
  state.channel = channelId;
  updatePageTitle(channelId);
  state.data = ds;
  state.timelineFilter = null;
  state.timelineFocus = null;
  state.timelineLimit = 12;
  state.songsLimit = 100;
  if (options.resetSearch !== false) {
    state.songsQuery = '';
    state.songsGenre = 'all';
  }
  destroyAllCharts();
  $$('#channel-switch [data-channel]').forEach(b => b.classList.toggle('active', b.dataset.channel === channelId));
  updateMobileMenuLabel();
  if (options.updateUrl !== false) {
    writeUrlState({
      tab: state.activeTab,
      channel: channelId,
      q: state.songsQuery,
    });
  }
  renderHero();
  if (options.render !== false) {
    renderTab(state.activeTab, {
      autoLoad: options.autoLoad !== false,
      initial: !!options.initial,
    });
  }
}

function switchAudience(audience, options = {}) {
  state.audience = audience === 'singer' ? 'singer' : 'listener';
  state.singerMode = state.audience === 'singer';
  if (!state.singerMode) state.singerPreset = 'all';
  $$('.audience-switch [data-audience]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.audience === state.audience);
  });
  document.body.dataset.audience = state.audience;
  updateMobileMenuLabel();
  if (state.audience === 'singer') {
    state.songsLimit = 100;
    activateTab('songs', { autoLoad: options.autoLoad !== false });
  } else if (state.data) {
    renderTab(state.activeTab, {
      autoLoad: options.autoLoad !== false,
      initial: !!options.initial,
    });
  }
}

function updateMobileMenuLabel() {
  const label = $('#mobile-menu-label');
  if (!label) return;
  const channel = $('#channel-switch [data-channel].active')?.textContent?.trim() || '新ch';
  const audience = $('#audience-switch [data-audience].active')?.textContent?.trim() || 'リスナー';
  label.textContent = `${channel} / ${audience}`;
}

function initMobileMenu() {
  const toggle = $('#mobile-menu-toggle');
  const checkbox = $('#mobile-menu-state');
  const menu = $('#topbar-actions');
  if (!toggle || !checkbox || !menu) return;
  const setOpen = (open) => {
    checkbox.checked = open;
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  const close = () => {
    setOpen(false);
    toggle.focus();
  };
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    requestAnimationFrame(() => setOpen(checkbox.checked));
  });
  toggle.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    setOpen(!checkbox.checked);
  });
  checkbox.addEventListener('change', () => {
    setOpen(checkbox.checked);
  });
  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('is-open')) return;
    if (event.target.closest('#topbar-actions') || event.target.closest('#mobile-menu-toggle') || event.target.closest('#mobile-menu-state')) return;
    close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  updateMobileMenuLabel();
}

function initPageTopToast() {
  const button = $('#page-top-toast');
  if (!button) return;
  const image = button.querySelector('img[data-src]');
  let ticking = false;
  const threshold = 420;
  const loadImage = () => {
    if (!image || image.src) return;
    image.src = image.dataset.src || '';
  };
  const update = () => {
    ticking = false;
    const visible = window.scrollY > threshold;
    if (visible) loadImage();
    button.hidden = !visible;
    button.classList.toggle('is-visible', visible);
    button.setAttribute('aria-hidden', String(!visible));
    button.tabIndex = visible ? 0 : -1;
  };
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  button.hidden = true;
  button.setAttribute('aria-hidden', 'true');
  button.tabIndex = -1;
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  update();
}

function refreshChannelButtons() {
  if (!state.channelData) return;
  for (const btn of $$('#channel-switch [data-channel]')) {
    const ch = btn.dataset.channel;
    const available = ch === 'all'
      ? !!state.channelData.combined
      : !!(state.channelData.channels && state.channelData.channels[ch]);
    btn.disabled = !available;
    if (!available) {
      btn.title = 'データを取得できませんでした';
    } else {
      btn.removeAttribute('title');
    }
  }
}

function filterTimelineBySong({ key, title, artist }) {
  const sameFilter = state.timelineFilter && state.timelineFilter.key === key;
  if (sameFilter && state.activeTab === 'timeline') {
    state.timelineFilter = null;
  } else {
    state.timelineFilter = { key, title, artist };
  }
  state.timelineFocus = null;
  state.timelineLimit = 12;
  activateTab('timeline');
  $('#panel-timeline').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function jumpToStreamFromDetail(song, ref) {
  state.timelineFilter = { key: song.key, title: song.title, artist: song.artist };
  state.timelineFocus = streamKey(ref);
  state.timelineLimit = 9999;
  activateTab('timeline');
  $('#panel-timeline').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function searchArtistFromDetail(song) {
  searchArtistName(song.artist || '');
}

function searchArtistName(artist) {
  const name = String(artist || '').replace(/"/g, '');
  state.songsQuery = name ? `artist:"${name}"` : '';
  state.songsLimit = 100;
  writeUrlState({ tab: 'songs', q: state.songsQuery });
  activateTab('songs', { updateUrl: false });
}

function findSong(key) {
  return (state.data?.songs || []).find(song => song.key === key) || null;
}

function youtubeVideoId(url) {
  const text = String(url || '');
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/watch\?[^#]*v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/live\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return '';
}

function youtubeThumb(url) {
  const id = youtubeVideoId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '';
}

function youtubeThumbFallback(url) {
  const id = youtubeVideoId(url);
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : '';
}

function youtubeThumbTiny(url) {
  const id = youtubeVideoId(url);
  return id ? `https://i.ytimg.com/vi/${id}/default.jpg` : '';
}

function playYouTubeInline(url, startAt = 0, streamTitle = '') {
  const id = youtubeVideoId(url);
  if (!id) return;
  if (window.matchMedia('(max-width: 600px)').matches) {
    window.open(String(url || ''), '_blank', 'noopener');
    return;
  }
  initYouTubePlayer();
  const container = $('#yt-player-container');
  const panel = $('#yt-player-panel');
  const openLink = $('#yt-player-open');
  if (!container || !panel) return;
  const startParam = startAt > 0 ? `&start=${Math.floor(startAt)}` : '';
  container.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1${startParam}&vq=hd1080" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
  if (openLink) openLink.href = String(url || '');
  // ミニプレイヤー情報更新
  const titleEl = $('#yt-mini-title');
  if (titleEl) titleEl.textContent = streamTitle || 'インライン再生';
  const songEl = $('#yt-mini-song');
  if (songEl) songEl.textContent = '';
  // ストリームコンテキストがある場合のみ展開ボタンを表示
  panel.classList.toggle('has-stream', !!_svLastStream);
  panel.hidden = false;
}

function initYouTubePlayer() {
  if ($('#yt-player-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'yt-player-panel';
  panel.hidden = true;
  panel.innerHTML = `
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
      <button class="yt-mini-expand" id="yt-mini-expand" type="button" aria-label="大画面で見る">
        <span class="yt-mini-expand-icon">⛶</span>
        <span class="yt-mini-expand-label">大画面で見る</span>
      </button>
    </div>
    <div class="yt-mini-bar">
      <div class="yt-mini-info">
        <span class="yt-mini-stream-title" id="yt-mini-title">インライン再生</span>
        <span class="yt-mini-song-name" id="yt-mini-song"></span>
      </div>
      <a id="yt-player-open" href="#" target="_blank" rel="noopener" class="yt-mini-yt-btn" title="YouTubeで開く">↗</a>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="閉じる">✕</button>
    </div>
  `;
  document.body.appendChild(panel);

  $('#yt-player-close').addEventListener('click', () => {
    panel.hidden = true;
    const container = $('#yt-player-container');
    if (container) container.innerHTML = '';
    _svLastStream = null;
  });

  $('#yt-mini-expand').addEventListener('click', () => {
    if (!_svLastStream) return;
    const elapsed = (Date.now() - _svMiniStartWallTime) / 1000;
    const resumeAt = Math.max(0, _svMiniStartAt + elapsed);
    openStreamViewer(_svLastStream, resumeAt);
  });
}

// ─── YouTube IFrame API ───────────────────────────────────────────────────────

let _ytApiReady = false;
const _ytApiQueue = [];

window.onYouTubeIframeAPIReady = () => {
  _ytApiReady = true;
  _ytApiQueue.splice(0).forEach(fn => fn());
};

function _loadYtApi() {
  if (document.getElementById('yt-iframe-api-script')) return;
  const s = document.createElement('script');
  s.id = 'yt-iframe-api-script';
  s.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(s);
}

function _onYtReady(fn) {
  if (_ytApiReady && window.YT?.Player) { fn(); return; }
  _ytApiQueue.push(fn);
}

// ─── Stream Viewer ────────────────────────────────────────────────────────────

let _svPlayer = null;
let _svGen = 0;
let _svLastStream = null;     // stream currently loaded in mini player
let _svMiniStartAt = 0;       // seconds into video when mini player started
let _svMiniStartWallTime = 0; // Date.now() when mini player started
let _svFullscreen = false;    // stream viewer が全画面モードか
let _epPrevTab = 'timeline';  // 埋め込みプレイヤーを開く前のタブ

/** 埋め込みプレイヤーパネルを表示（タブバーの active はリセット） */
function showPlayerPanel() {
  _epPrevTab = state.activeTab || 'timeline';
  state.activeTab = 'player';
  $$('.tab-btn').forEach(b => b.classList.remove('active'));
  $$('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-player'));
}

/** 前のタブに戻る */
function hidePlayerPanel() {
  activateTab(_epPrevTab || 'timeline');
}

/** 埋め込み → 全画面に切り替え
 *  .container { z-index: 1 } がスタッキングコンテキストを作るため、
 *  全画面時は <body> 直下に移動してトップバーより前面に出す */
function enterStreamFullscreen() {
  _svFullscreen = true;
  const viewer = $('#stream-viewer');
  if (!viewer) return;
  // body 直下に移動 → z-index 競合を回避
  document.body.appendChild(viewer);
  viewer.classList.add('sv-fullscreen');
  document.body.style.overflow = 'hidden';
  const closeBtn = $('#sv-close');
  if (closeBtn) closeBtn.title = '通常表示に戻る（Esc）';
  const fsBtn = $('#sv-fullscreen-btn');
  if (fsBtn) fsBtn.setAttribute('aria-pressed', 'true');
}

function _fmtTs(sec) {
  const s = Math.floor(sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
    : `${m}:${String(ss).padStart(2, '0')}`;
}

function _svTsKey(stream) {
  return `kanau-ts-${stream.channel || ''}-${stream.index || ''}`;
}

function _svLoadTs(stream) {
  try { return JSON.parse(localStorage.getItem(_svTsKey(stream)) || 'null') || {}; }
  catch (_) { return {}; }
}

function _svSaveTs(stream, ts) {
  try { localStorage.setItem(_svTsKey(stream), JSON.stringify(ts)); }
  catch (_) { /* quota */ }
}

function _svSongRow(song, i, ts) {
  const time = ts[i];
  const badge = time != null
    ? `<button class="sv-ts-badge" data-idx="${i}" data-action="seek" title="${escapeHtml(_fmtTs(time))} に移動">${escapeHtml(_fmtTs(time))}</button><button class="sv-ts-del" data-idx="${i}" data-action="del-ts" aria-label="タイムスタンプ削除">✕</button>`
    : '';
  return `<div class="sv-song" data-idx="${i}">
    <span class="sv-song-num">${i + 1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${escapeHtml(song.title)}</span>
      <span class="sv-song-artist">${escapeHtml(song.artist)}</span>
    </div>
    <div class="sv-song-actions">${badge}<button class="sv-ts-set" data-idx="${i}" data-action="set-ts" title="現在の再生時刻をタイムスタンプに記録">⏱ メモ</button></div>
  </div>`;
}

function _svRefreshSetlist(setlistEl, songs, ts) {
  setlistEl.innerHTML = songs.map((s, i) => _svSongRow(s, i, ts)).join('');
}

// タイムスタンプ文字列（MM:SS or H:MM:SS）を秒数に変換
function _parseTs(str) {
  const m = str.match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);
  if (!m) return null;
  if (m[1] !== undefined) return parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseInt(m[3]);
  return parseInt(m[4]) * 60 + parseInt(m[5]);
}

function initStreamViewer() {
  if ($('#stream-viewer')) return;
  const panel = $('#panel-player');
  if (!panel) return;
  const el = document.createElement('div');
  el.id = 'stream-viewer';
  el.hidden = true;
  el.setAttribute('aria-label', '配信プレイヤー');
  el.innerHTML = `
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="ミニプレイヤーで再生を続けながら戻ります（Esc）">
          ← 戻る <span class="sv-esc-hint">Esc</span>
        </button>
        <div class="sv-title-area">
          <nav class="sv-breadcrumb" aria-label="現在地">
            <button class="sv-bc-btn" type="button" data-bc-tab="dashboard">ホーム</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <button class="sv-bc-btn" type="button" data-bc-tab="timeline">タイムライン</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <span class="sv-bc-current" id="sv-bc-title"></span>
          </nav>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <button class="sv-fullscreen-btn" id="sv-fullscreen-btn" type="button"
          title="大画面で再生" aria-pressed="false">⛶</button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener">↗ YouTubeで開く</a>
      </div>
      <div class="sv-body">
        <div class="sv-player-wrap" id="sv-player-wrap">
          <div class="sv-player-loading">読み込み中…</div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>セットリスト</span>
            <div class="sv-panel-head-right">
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">一括入力</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
          <div class="sv-import-area" id="sv-import-area" hidden>
            <p class="sv-import-desc">タイムスタンプを1行に1つ入力（上から順に曲へ割り当て）</p>
            <textarea class="sv-import-input" id="sv-import-input" rows="6"
              placeholder="例:&#10;15:59&#10;21:12&#10;25:57&#10;1:08:13"></textarea>
            <div class="sv-import-btns">
              <button class="sv-import-apply" id="sv-import-apply" type="button">適用</button>
              <button class="sv-import-cancel" id="sv-import-cancel" type="button">キャンセル</button>
            </div>
          </div>
          <div class="sv-panel-hint">⏱ で現在時刻をメモ ／ バッジをタップで移動</div>
          <div class="sv-setlist" id="sv-setlist"></div>
        </div>
      </div>
    </div>
  `;
  panel.appendChild(el);

  $('#sv-close').addEventListener('click', closeStreamViewer);

  // 全画面ボタン
  $('#sv-fullscreen-btn').addEventListener('click', enterStreamFullscreen);

  // パンくずナビゲーション
  el.querySelectorAll('[data-bc-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeStreamViewer();
      activateTab(btn.dataset.bcTab);
    });
  });

  // 一括インポート
  $('#sv-import-toggle').addEventListener('click', () => {
    const area = $('#sv-import-area');
    if (!area) return;
    area.hidden = !area.hidden;
    if (!area.hidden) $('#sv-import-input')?.focus();
  });
  $('#sv-import-cancel').addEventListener('click', () => {
    const area = $('#sv-import-area');
    if (area) { area.hidden = true; }
    const input = $('#sv-import-input');
    if (input) input.value = '';
  });
  $('#sv-import-apply').addEventListener('click', () => {
    const stream = el._currentStream;
    if (!stream) return;
    const input = $('#sv-import-input');
    if (!input) return;
    const lines = input.value.split('\n');
    const times = lines.map(l => _parseTs(l)).filter(t => t !== null);
    if (!times.length) return;
    const ts = _svLoadTs(stream);
    times.forEach((t, i) => { if (i < stream.songs.length) ts[i] = t; });
    _svSaveTs(stream, ts);
    _svRefreshSetlist($('#sv-setlist'), stream.songs, ts);
    const area = $('#sv-import-area');
    if (area) area.hidden = true;
    input.value = '';
  });

  $('#sv-setlist').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    const stream = el._currentStream;
    if (!stream) return;
    const ts = _svLoadTs(stream);

    if (btn.dataset.action === 'seek') {
      if (ts[idx] != null && _svPlayer?.seekTo) {
        _svPlayer.seekTo(ts[idx], true);
        try { _svPlayer.playVideo(); } catch (_) {}
      }
    } else if (btn.dataset.action === 'set-ts') {
      const time = _svPlayer?.getCurrentTime?.();
      if (time != null) {
        ts[idx] = Math.floor(time);
        _svSaveTs(stream, ts);
        _svRefreshSetlist($('#sv-setlist'), stream.songs, ts);
      }
    } else if (btn.dataset.action === 'del-ts') {
      delete ts[idx];
      _svSaveTs(stream, ts);
      _svRefreshSetlist($('#sv-setlist'), stream.songs, ts);
    }
  });
}

function openStreamViewer(stream, resumeAt = 0) {
  if (!stream?.url) return;
  const id = youtubeVideoId(stream.url);
  if (!id) { playYouTubeInline(stream.url); return; }

  initStreamViewer();
  _loadYtApi();

  // ミニプレイヤーを閉じてストリームコンテキストをクリア
  const miniPanel = $('#yt-player-panel');
  if (miniPanel && !miniPanel.hidden) {
    miniPanel.hidden = true;
    const miniContainer = $('#yt-player-container');
    if (miniContainer) miniContainer.innerHTML = '';
  }
  _svLastStream = null;

  // 全画面中なら埋め込みに戻してから開く
  if (_svFullscreen) {
    _svFullscreen = false;
    const existingViewer = $('#stream-viewer');
    if (existingViewer) {
      existingViewer.classList.remove('sv-fullscreen');
      const panelEl = $('#panel-player');
      if (panelEl) panelEl.appendChild(existingViewer);
    }
    document.body.style.overflow = '';
  }
  _svFullscreen = false;

  // 埋め込みプレイヤーパネルを表示
  showPlayerPanel();

  const viewer = $('#stream-viewer');
  viewer.classList.remove('sv-fullscreen');
  viewer._currentStream = stream;
  const gen = ++_svGen;

  // パンくずタイトルを更新
  const bcTitleEl = $('#sv-bc-title');
  if (bcTitleEl) bcTitleEl.textContent = stream.title || '配信';
  const metaEl = $('#sv-stream-meta');
  if (metaEl) metaEl.textContent = `${fmtDate(stream.date)}　第${stream.index}枠　🎤 ${stream.songs.length}曲`;
  const ytLink = $('#sv-yt-link');
  if (ytLink) ytLink.href = stream.url;
  const songCount = $('#sv-song-count');
  if (songCount) songCount.textContent = `${stream.songs.length}曲`;

  const ts = _svLoadTs(stream);
  _svRefreshSetlist($('#sv-setlist'), stream.songs, ts);

  viewer.hidden = false;
  document.body.style.overflow = ''; // 埋め込みモードではスクロールロックしない
  // フォーカス先: 埋め込み時はスクロールを引き起こさないよう遅延
  setTimeout(() => { $('#sv-close')?.focus({ preventScroll: true }); }, 50);

  _svPlayer = null;
  const wrap = $('#sv-player-wrap');
  wrap.innerHTML = '<div class="sv-player-loading">読み込み中…</div>';

  const startSec = Math.floor(resumeAt);

  _onYtReady(() => {
    if (gen !== _svGen || viewer.hidden) return;
    wrap.innerHTML = '';
    const playerDiv = document.createElement('div');
    wrap.appendChild(playerDiv);
    try {
      _svPlayer = new window.YT.Player(playerDiv, {
        videoId: id,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          ...(startSec > 0 ? { start: startSec } : {}),
        },
        events: {
          onReady: (event) => {
            // HD 画質優先（adaptive QA より先に設定）
            try { event.target.setPlaybackQuality('hd1080'); } catch (_) {}
            try { event.target.setPlaybackQualityRange('hd720', 'hd1080'); } catch (_) {}
            // start パラメータより seekTo の方が中間地点で確実
            if (startSec > 5) {
              try { event.target.seekTo(startSec, true); } catch (_) {}
            }
          },
          onError: () => {
            if (gen !== _svGen) return;
            wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${escapeHtml(id)}?autoplay=1&playsinline=1&rel=0${startSec > 0 ? `&start=${startSec}` : ''}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
          },
        },
      });
    } catch (_) {
      wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${escapeHtml(id)}?autoplay=1&playsinline=1&rel=0${startSec > 0 ? `&start=${startSec}` : ''}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }
  });
}

function closeStreamViewer() {
  const viewer = $('#stream-viewer');
  if (!viewer) return;

  // ── 全画面モードの場合 → 埋め込みに戻るだけ（ミニプレイヤーは起動しない）──
  if (_svFullscreen) {
    _svFullscreen = false;
    viewer.classList.remove('sv-fullscreen');
    document.body.style.overflow = '';
    // #panel-player に戻す
    const panelEl = $('#panel-player');
    if (panelEl) panelEl.appendChild(viewer);
    const closeBtn = $('#sv-close');
    if (closeBtn) closeBtn.title = 'ミニプレイヤーで再生を続けながら戻ります（Esc）';
    const fsBtn = $('#sv-fullscreen-btn');
    if (fsBtn) fsBtn.setAttribute('aria-pressed', 'false');
    return; // 動画はそのまま継続再生
  }

  // ── 埋め込みモードの場合 → ミニプレイヤーへ引き継ぎ ──
  const stream = viewer._currentStream;
  const currentTime = _svPlayer?.getCurrentTime?.() ?? 0;
  const videoId = stream?.url ? youtubeVideoId(stream.url) : '';

  ++_svGen;
  viewer.hidden = true;
  viewer._currentStream = null;
  _svPlayer = null;
  const wrap = $('#sv-player-wrap');
  if (wrap) wrap.innerHTML = '';
  document.body.style.overflow = '';

  // 前のタブに戻る
  hidePlayerPanel();

  if (videoId && stream?.url) {
    // ミニプレイヤー再開位置を記録してから起動
    _svLastStream = stream;
    _svMiniStartAt = Math.floor(currentTime);
    _svMiniStartWallTime = Date.now();
    playYouTubeInline(stream.url, _svMiniStartAt, stream.title || '');
  }
}

function openSongDetail(key) {
  const song = findSong(key);
  const modal = $('#song-modal');
  const body = $('#song-modal-body');
  const title = $('#song-modal-title');
  if (!song || !modal || !body || !title) return;
  ensureSongTags(song);

  title.textContent = song.title;
  const refs = (song.streamRefs || []).slice(0, 8).map(ref => ({
    ...ref,
    thumbnail: youtubeThumb(ref.url),
    thumbnailFallback: youtubeThumbFallback(ref.url),
    thumbnailTiny: youtubeThumbTiny(ref.url),
    detailKey: streamKey(ref),
  }));
  const tags = [
    song.genre,
    ...(song.seasonTags || []),
    ...(song.moodTags || []),
    ...(song.singerTags || []),
  ].filter(Boolean);
  const favActive = isFavorite(song.key);
  body.innerHTML = `
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${escapeHtml(song.key)}">${escapeHtml(song.artist)}</button>
        <div class="song-detail-tags">${tags.map(tag => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join('')}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${song.count}</strong><span>歌唱回数</span></div>
        <div><strong>${song.displayKey || '—'}</strong><span>キー</span></div>
        <div><strong>${song.daysSinceLast ?? '—'}</strong><span>日前</span></div>
        <div><strong>${fmtDate(song.firstSung) || '—'}</strong><span>初披露</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${favActive ? 'primary' : 'ghost'}" type="button" data-detail-action="favorite" data-songkey="${escapeHtml(song.key)}">${favActive ? '♥ お気に入り解除' : '♡ お気に入りに追加'}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${escapeHtml(song.key)}">歌枠を見る</button>
      <button class="btn ghost" type="button" data-detail-action="close">閉じる</button>
    </div>
    <div class="song-detail-history">
      <h3>歌った歌枠</h3>
      ${refs.length ? refs.map(ref => `
        <div class="song-detail-stream">
          ${ref.thumbnail && ref.url
            ? `<span class="song-detail-thumb-wrap"><button class="song-detail-thumb-link" type="button" data-inline-youtube="${escapeHtml(ref.url)}" aria-label="インライン再生"><img class="song-detail-thumb" src="${escapeHtml(ref.thumbnail)}" data-fallback="${escapeHtml(ref.thumbnailFallback)}" data-tiny="${escapeHtml(ref.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"><span>再生</span></button><a class="song-detail-youtube-link" href="${escapeHtml(ref.url)}" target="_blank" rel="noopener">開く</a></span>`
            : '<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${escapeHtml(song.key)}" data-streamkey="${escapeHtml(ref.detailKey)}">
            <span>${fmtDate(ref.date)}</span>
            <strong>${escapeHtml(ref.title || '配信')}</strong>
          </button>
        </div>
      `).join('') : '<p class="song-detail-empty">履歴未確認</p>'}
    </div>
  `;
  modal.hidden = false;
  $('#song-modal-close')?.focus();
}

function initSongModal() {
  const modal = $('#song-modal');
  const closeBtn = $('#song-modal-close');
  if (!modal || !closeBtn) return;
  const close = () => { modal.hidden = true; };
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
    const inlineYt = event.target.closest('[data-inline-youtube]');
    if (inlineYt) {
      event.preventDefault();
      event.stopPropagation();
      playYouTubeInline(inlineYt.dataset.inlineYoutube);
      return;
    }
    const action = event.target.closest('[data-detail-action]');
    if (!action) return;
    event.stopPropagation();
    if (action.dataset.detailAction === 'close') close();
    if (action.dataset.detailAction === 'favorite') {
      const key = action.dataset.songkey;
      toggleFavorite(key);
      const nowActive = isFavorite(key);
      action.textContent = nowActive ? '♥ お気に入り解除' : '♡ お気に入りに追加';
      action.classList.toggle('primary', nowActive);
      action.classList.toggle('ghost', !nowActive);
    }
    if (action.dataset.detailAction === 'timeline') {
      const song = findSong(action.dataset.songkey);
      close();
      if (song) filterTimelineBySong(song);
    }
    if (action.dataset.detailAction === 'stream') {
      const song = findSong(action.dataset.songkey);
      const ref = song?.streamRefs?.find(item => streamKey(item) === action.dataset.streamkey);
      close();
      if (song && ref) jumpToStreamFromDetail(song, ref);
    }
    if (action.dataset.detailAction === 'artist') {
      const song = findSong(action.dataset.songkey);
      close();
      if (song) searchArtistFromDetail(song);
    }
  });
  modal.addEventListener('error', (event) => {
    const img = event.target.closest?.('.song-detail-thumb');
    if (!img) return;
    const next = img.dataset.fallback || img.dataset.tiny || '';
    if (next && img.src !== next) {
      img.src = next;
      if (img.dataset.fallback === next) {
        delete img.dataset.fallback;
      } else {
        delete img.dataset.tiny;
      }
      return;
    }
    img.closest('.song-detail-thumb-link')?.classList.add('thumb-missing');
  }, true);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
}

let _heroCardsReady = false;

function renderHero() {
  if (!state.data) return;
  const { stats, streams = [] } = state.data;
  const latest = streams[0]?.date || null;
  const dSinceLatest = daysSince(latest);
  const dataGeneratedDate = stats.dataGeneratedDate || state.channelData?.dataGeneratedDate || null;
  const dSinceUpdate = daysSince(dataGeneratedDate);
  const chLabel = stats.channelLabel || stats.channelId || '';
  const chBadge = chLabel ? `<span class="badge accent" style="margin-right:8px;">${escapeHtml(chLabel)}</span>` : '';

  $('#updated-info').innerHTML =
    chBadge +
    `データ更新日：<strong>${fmtDate(dataGeneratedDate) || '—'}</strong>` +
    (dSinceUpdate != null ? ` <span class="badge">${dSinceUpdate}日前</span>` : '');

  const statsGrid = $('#stats-grid');
  if (!_heroCardsReady) {
    statsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-label">総歌唱数</div>
        <div class="stat-value">${formatNumber(stats.total)}<span class="stat-unit">回</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">持ち曲数</div>
        <div class="stat-value">${formatNumber(stats.repertoire)}<span class="stat-unit">曲</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">歌枠回数</div>
        <div class="stat-value">${formatNumber(stats.streams)}<span class="stat-unit">回</span></div>
      </div>
      <div class="stat-card">
        <div class="stat-label">1枠平均</div>
        <div class="stat-value">${stats.avgPerStream}<span class="stat-unit">曲</span></div>
      </div>
      <div class="stat-card accent">
        <div class="stat-label">最新歌枠から</div>
        <div class="stat-value">${dSinceLatest != null ? dSinceLatest : '—'}<span class="stat-unit">日</span></div>
      </div>
      <div class="stat-card gold">
        <div class="stat-label">活動期間</div>
        <div class="stat-value">${activeDays(state.data)}<span class="stat-unit">日</span></div>
      </div>
    `;
    _heroCardsReady = true;
  } else {
    const values = statsGrid.querySelectorAll('.stat-value');
    if (values.length >= 6) {
      values[0].textContent = formatNumber(stats.total);
      values[0].innerHTML += '<span class="stat-unit">回</span>';
      values[1].textContent = formatNumber(stats.repertoire);
      values[1].innerHTML += '<span class="stat-unit">曲</span>';
      values[2].textContent = formatNumber(stats.streams);
      values[2].innerHTML += '<span class="stat-unit">回</span>';
      values[3].textContent = stats.avgPerStream;
      values[3].innerHTML += '<span class="stat-unit">曲</span>';
      values[4].textContent = dSinceLatest != null ? dSinceLatest : '—';
      values[4].innerHTML += '<span class="stat-unit">日</span>';
      values[5].textContent = activeDays(state.data);
      values[5].innerHTML += '<span class="stat-unit">日</span>';
    }
  }
}

function activeDays(data) {
  if (!data.streams?.length) return '—';
  const first = data.streams[data.streams.length - 1].date;
  const last = data.streams[0].date;
  return Math.floor((last - first) / 86400000) + 1;
}

function showLoading() { $('#loading').hidden = false; $('#error').hidden = true; }
function hideLoading() { $('#loading').hidden = true; }
function showError(err) {
  const loading = $('#loading');
  const error = $('#error');
  const errDetail = $('#err-detail');
  if (loading) loading.hidden = true;
  if (error) error.hidden = false;
  if (errDetail) errDetail.textContent = err && err.message ? err.message : String(err);
}

function updatePageTitle(mode) {
  const el = document.getElementById('page-title');
  if (!el) return;

  if (mode === 'new') {
    el.innerHTML = '<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">夢川かなう 新ch 歌唱データベース';
    document.title = '夢川かなう 新ch 歌唱データベース';
  } else if (mode === 'old') {
    el.innerHTML = '<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">夢川かなう 旧ch 歌唱データベース';
    document.title = '夢川かなう 旧ch 歌唱データベース';
  } else {
    el.innerHTML = '<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">夢川かなう 歌唱データベース';
    document.title = '夢川かなう 歌唱データベース';
  }
}

function initHelpModal() {
  const modal = $('#help-modal');
  const openBtn = $('#help-btn');
  const closeBtn = $('#help-close');
  if (!modal || !openBtn || !closeBtn) return;

  const open = () => {
    modal.hidden = false;
    closeBtn.focus();
  };
  const close = () => {
    modal.hidden = true;
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
}

function initWelcomeTip() {
  const tip = $('#welcome-tip');
  const close = $('#welcome-close');
  if (!tip || !close) return;
  if (window.matchMedia('(max-width: 760px)').matches) return;
  if (localStorage.getItem('kanau-welcome-tip-dismissed') === '1') return;
  const show = () => { tip.hidden = false; };
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(show, { timeout: 5000 });
  } else {
    window.setTimeout(show, 2500);
  }
  close.addEventListener('click', () => {
    tip.hidden = true;
    localStorage.setItem('kanau-welcome-tip-dismissed', '1');
  });
}

async function init() {
  showLoading();
  try {
    const channelData = await loadInitial();
    state.channelData = channelData;
    // meta.json 完了直後に songs/streams の fetch を開始（ヒーロー描画処理を待たない）
    if (!fullDataPromise && !channelData.fullLoaded) {
      startFullDataLoad();
    }
    const url = readUrlState();
    state.songsQuery = url.q;
    state.activeTab = isValidTab(url.tab) ? url.tab : 'dashboard';
    syncActiveTabUi(state.activeTab);
    let initialChannel = url.channel || state.channel || DEFAULT_CHANNEL;
    if (!getDataset(initialChannel)) initialChannel = DEFAULT_CHANNEL;
    if (!getDataset(initialChannel)) {
      const fallback = Object.keys(channelData.channels)[0];
      if (fallback) initialChannel = fallback;
    }
    if (!getDataset(initialChannel)) throw new Error('No channel data could be loaded');
    refreshChannelButtons();
    hideLoading();
    switchChannel(initialChannel, {
      resetSearch: false,
      updateUrl: false,
      autoLoad: true,
      initial: true,
    });
  } catch (e) {
    console.error('[init] failed:', e);
    showError(e);
  }
}

function applyUrlState() {
  if (!state.channelData) return;
  const url = readUrlState();
  state.songsQuery = url.q;
  if (url.channel !== state.channel && getDataset(url.channel)) {
    switchChannel(url.channel, { resetSearch: false, updateUrl: false });
  }
  activateTab(url.tab, { updateUrl: false });
}

// Tab buttons
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// Channel switch
$$('.ch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!btn.dataset.channel) return;
    if (btn.disabled) return;
    switchChannel(btn.dataset.channel);
  });
});

window.addEventListener('popstate', applyUrlState);

// Audience switch
$$('[data-audience]').forEach(btn => {
  btn.addEventListener('click', () => switchAudience(btn.dataset.audience));
});

// Global click → filter timeline by song
document.body.addEventListener('click', (e) => {
  const artist = e.target.closest('[data-artist-search]');
  if (artist) {
    e.preventDefault();
    e.stopPropagation();
    searchArtistName(artist.dataset.artistSearch || artist.textContent || '');
    return;
  }
  const streamPlayEl = e.target.closest('[data-stream-play]');
  if (streamPlayEl) {
    e.preventDefault();
    e.stopPropagation();
    const skey = streamPlayEl.dataset.streamPlay;
    const foundStream = (state.data?.streams || []).find(s => streamKey(s) === skey);
    if (foundStream?.url) {
      openStreamViewer(foundStream);
    } else if (streamPlayEl.dataset.inlineYoutube) {
      playYouTubeInline(streamPlayEl.dataset.inlineYoutube);
    }
    return;
  }
  const inlineYt = e.target.closest('[data-inline-youtube]');
  if (inlineYt) {
    e.preventDefault();
    e.stopPropagation();
    playYouTubeInline(inlineYt.dataset.inlineYoutube);
    return;
  }
  if (isLink(e.target)) return;
  const target = e.target.closest('[data-songkey]');
  if (!target) return;
  openSongDetail(target.dataset.songkey);
});

$('#retry-btn').addEventListener('click', init);
$('#reload-btn').addEventListener('click', init);
initHelpModal();
initYouTubePlayer();
initStreamViewer();
initSongModal();
initMobileMenu();
initPageTopToast();
initWelcomeTip();

// グローバル検索パレット初期化
initSearchPalette((result) => {
  if (result.type === 'song') {
    openSongDetail(result.song.key);
  } else if (result.type === 'artist') {
    searchArtistName(result.artist);
  } else if (result.type === 'stream') {
    // 配信枠へジャンプ（タイムライン）
    state.timelineFocus = streamKey(result.stream);
    state.timelineFilter = null;
    state.timelineLimit = 9999;
    activateTab('timeline');
    $('#panel-timeline')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ──────────────────────────────────────────────────────────────────────────────
// キーボードショートカット
//   /  または Ctrl+K / Cmd+K → グローバル検索を開く
//   T                         → テーマ切替
//   ?                         → ヘルプモーダルを開く
//   Esc                       → 検索パレット→曲モーダル→ヘルプ→検索クリア の順で閉じる
// ──────────────────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  // グローバル検索を開く: / (非入力中) または Ctrl+K / Cmd+K
  const openSearch =
    (e.key === '/' && !inInput && !e.metaKey && !e.ctrlKey) ||
    (e.key === 'k' && (e.ctrlKey || e.metaKey) && !e.shiftKey);
  if (openSearch) {
    e.preventDefault();
    openSearchPalette();
    return;
  }

  // テーマ切替: T
  if (e.key === 't' && !inInput && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    cycleTheme();
    return;
  }

  // ヘルプ: ?
  if (e.key === '?' && !inInput && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    const modal = $('#help-modal');
    if (modal && modal.hidden) {
      modal.hidden = false;
      $('#help-close')?.focus();
    }
    return;
  }

  // Esc: 優先度順に閉じる
  if (e.key === 'Escape' && !e.metaKey && !e.ctrlKey) {
    // 0. 配信プレイヤー（全画面 or プレイヤーパネルがアクティブな場合）
    const streamViewer = $('#stream-viewer');
    const playerPanelActive = !!$('#panel-player.active');
    if (streamViewer && !streamViewer.hidden && (_svFullscreen || playerPanelActive)) {
      e.preventDefault();
      closeStreamViewer();
      return;
    }
    // 1. グローバル検索
    if (isSearchPaletteOpen()) {
      e.preventDefault();
      closeSearchPalette();
      return;
    }
    // 2. 曲詳細モーダル
    const songModal = $('#song-modal');
    if (songModal && !songModal.hidden) {
      // song modal の Esc は initSongModal 内で処理済み
      return;
    }
    // 3. ヘルプモーダル
    const helpModal = $('#help-modal');
    if (helpModal && !helpModal.hidden) {
      helpModal.hidden = true;
      $('#help-btn')?.focus();
      return;
    }
    // 4. 曲リスト検索クリア
    const searchEl = $('#songs-search');
    if (searchEl && document.activeElement === searchEl && searchEl.value) {
      e.preventDefault();
      searchEl.value = '';
      searchEl.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
});

// Re-render charts on theme change
onRerenderNeeded(() => {
  if (!state.data) return;
  destroyAllCharts();
  if (state.activeTab === 'dashboard' || state.activeTab === 'analytics') renderTab();
});

function startApp() {
  init();
}

startApp();
