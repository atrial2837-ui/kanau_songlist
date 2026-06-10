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
  playlists: () => import('./views/playlists.js').then(m => m.renderPlaylists),
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
  // playlists は localStorage のみで動作するため state.data 不要
  if (tab !== 'playlists' && (!state.data || !isValidTab(tab))) return;
  if (!isValidTab(tab)) return;
  const hasPartial = state.channelData?.partialLoaded || state.channelData?.fullLoaded;
  const hasFull    = state.channelData?.fullLoaded;
  // playlists は常にすぐ描画（データ待ち不要）
  const waitNeeded = tab === 'playlists' ? false : (needsStreams(tab) ? !hasFull : !hasPartial);

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

  // ブラウザ操作などで埋め込みモードのままタブ切替が来た場合、ミニプレイヤーへ引き継ぐ
  const streamViewer = $('#stream-viewer');
  if (tab !== 'player' && streamViewer && !streamViewer.hidden && !_svFullscreen) {
    _epPrevTab = tab;
    _pendingTabOptions = options;
    closeStreamViewer();
    return;
  }

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

// ─── ミニプレイヤー 進捗バー ──────────────────────────────────────────────────

function _miniStopProgress() {
  if (_miniProgressInterval) { clearInterval(_miniProgressInterval); _miniProgressInterval = null; }
}

function _miniStartProgress() {
  _miniStopProgress();
  _miniProgressInterval = setInterval(() => {
    if (!_miniPlayer) return;
    try {
      const dur = _miniPlayer.getDuration?.() || 0;
      const cur = _miniPlayer.getCurrentTime?.() || 0;
      const pct = dur > 0 ? Math.min((cur / dur) * 100, 100) : 0;
      const fill = $('#yt-mini-progress-fill');
      if (fill) fill.style.width = `${pct}%`;
      const st = _miniPlayer.getPlayerState?.();
      const isPlaying = st === window.YT?.PlayerState?.PLAYING;
      const playBtn = $('#yt-mini-play');
      if (playBtn) playBtn.setAttribute('data-playing', isPlaying ? '1' : '0');
    } catch (_) {}
  }, 400);
}

function _miniDestroyPlayer() {
  _miniStopProgress();
  if (_miniPlayer) { try { _miniPlayer.destroy(); } catch (_) {} _miniPlayer = null; }
  const container = $('#yt-player-container');
  if (container) container.innerHTML = '';
}

// ─── ミニプレイヤー 復帰 ─────────────────────────────────────────────────────

function _miniResumeAt() {
  if (_miniPlayer?.getCurrentTime) {
    try { return _miniPlayer.getCurrentTime(); } catch (_) {}
  }
  return Math.max(0, _svMiniStartAt + (Date.now() - _svMiniStartWallTime) / 1000);
}

// ─── YouTube IFrame API ───────────────────────────────────────────────────────

function playYouTubeInline(url, startAt = 0, streamTitle = '') {
  const id = youtubeVideoId(url);
  if (!id) return;
  if (window.matchMedia('(max-width: 600px)').matches) {
    window.open(String(url || ''), '_blank', 'noopener');
    return;
  }

  // 埋め込みモードでビューワーが開いていたら、ミニプレイヤーへの引き継ぎなしで閉じる
  {
    const svViewer = $('#stream-viewer');
    if (svViewer && !svViewer.hidden && !_svFullscreen) {
      ++_svGen;
      svViewer.hidden = true;
      svViewer._currentStream = null;
      _svPlayer = null;
      const wrap = $('#sv-player-wrap');
      if (wrap) wrap.innerHTML = '';
      document.body.style.overflow = '';
      _svLastStream = null;
      _pendingTabOptions = {};
      hidePlayerPanel();
    }
  }

  _loadYtApi();
  initYouTubePlayer();
  const container = $('#yt-player-container');
  const panel = $('#yt-player-panel');
  if (!container || !panel) return;

  // 前のミニプレイヤーを破棄
  _miniDestroyPlayer();

  // UI 更新
  const titleEl = $('#yt-mini-title');
  if (titleEl) titleEl.textContent = streamTitle || 'インライン再生';
  const hintEl = $('#yt-mini-hint');
  if (hintEl) hintEl.textContent = _svLastStream ? '▲ タップして配信ビューワーへ戻る' : '';
  panel.classList.toggle('has-stream', !!_svLastStream);
  panel.hidden = false;

  // YT.Player を生成（API 準備完了後）
  _onYtReady(() => {
    const playerDiv = document.createElement('div');
    container.appendChild(playerDiv);
    try {
      _miniPlayer = new window.YT.Player(playerDiv, {
        videoId: id,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          rel: 0,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          ...(startAt > 0 ? { start: Math.floor(startAt) } : {}),
        },
        events: {
          onReady: (event) => {
            if (startAt > 5) { try { event.target.seekTo(startAt, true); } catch (_) {} }
            _miniStartProgress();
          },
          onStateChange: (event) => {
            const isPlaying = event.data === window.YT.PlayerState.PLAYING;
            const playBtn = $('#yt-mini-play');
            if (playBtn) playBtn.setAttribute('data-playing', isPlaying ? '1' : '0');
          },
        },
      });
    } catch (_) {
      // フォールバック: iframe
      const startParam = startAt > 0 ? `&start=${Math.floor(startAt)}` : '';
      container.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1${startParam}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
    }
  });
}

function initYouTubePlayer() {
  if ($('#yt-player-panel')) return;
  const panel = document.createElement('div');
  panel.id = 'yt-player-panel';
  panel.hidden = true;
  panel.innerHTML = `
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
    </div>
    <div class="yt-mini-progress-wrap">
      <div class="yt-mini-progress-bar" id="yt-mini-progress-bar" title="クリックでシーク">
        <div class="yt-mini-progress-fill" id="yt-mini-progress-fill"></div>
      </div>
    </div>
    <div class="yt-mini-bar">
      <button class="yt-mini-play-btn" id="yt-mini-play" type="button" data-playing="0" aria-label="再生/停止"></button>
      <button class="yt-mini-info yt-mini-restore" id="yt-mini-restore" type="button" aria-label="配信ビューワーへ戻る">
        <span class="yt-mini-stream-title" id="yt-mini-title">インライン再生</span>
        <span class="yt-mini-hint" id="yt-mini-hint"></span>
      </button>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="閉じる">✕</button>
    </div>
  `;
  document.body.appendChild(panel);

  // 閉じる
  $('#yt-player-close').addEventListener('click', () => {
    panel.hidden = true;
    _miniDestroyPlayer();
    _svLastStream = null;
  });

  // 再生 / 停止トグル
  $('#yt-mini-play').addEventListener('click', () => {
    if (!_miniPlayer) return;
    try {
      const st = _miniPlayer.getPlayerState?.();
      if (st === window.YT?.PlayerState?.PLAYING) { _miniPlayer.pauseVideo(); }
      else { _miniPlayer.playVideo(); }
    } catch (_) {}
  });

  // タイトルバークリック → 配信ビューワーへ戻る
  $('#yt-mini-restore').addEventListener('click', () => {
    if (!_svLastStream) return;
    openStreamViewer(_svLastStream, _miniResumeAt());
  });

  // プログレスバークリック → シーク
  $('#yt-mini-progress-bar').addEventListener('click', (e) => {
    if (!_miniPlayer) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    try {
      const dur = _miniPlayer.getDuration?.() || 0;
      if (dur > 0) _miniPlayer.seekTo(pct * dur, true);
    } catch (_) {}
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
let _pendingTabOptions = {};  // activateTab → closeStreamViewer → hidePlayerPanel に引き継ぐ options
/** @type {Object<number, Array<{timeSeconds: number, note: string|null}>>} */
let _svCommunityTs = {};      // songIndex → 承認済みコミュニティタイムスタンプ
let _svAutoPlay = false;      // 連続再生フラグ
let _miniPlayer = null;           // ミニプレイヤーの YT.Player インスタンス
let _miniProgressInterval = null; // 進捗バー更新タイマー

/** 埋め込みプレイヤーパネルを表示（タブバーの active はリセット） */
function showPlayerPanel() {
  _epPrevTab = state.activeTab || 'timeline';
  state.activeTab = 'player';
  $$('.tab-btn').forEach(b => b.classList.remove('active'));
  $$('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-player'));
}

/** 前のタブに戻る */
function hidePlayerPanel() {
  const opts = _pendingTabOptions;
  _pendingTabOptions = {};
  activateTab(_epPrevTab || 'timeline', opts);
}

/** 埋め込み → 全画面に切り替え
 *  DOM を移動すると iframe がリロードされ再生位置がリセットされるため、
 *  DOM は動かさず body クラスで .container の stacking context を解除して
 *  position:fixed が root レベルで機能するようにする */
function enterStreamFullscreen() {
  _svFullscreen = true;
  const viewer = $('#stream-viewer');
  if (!viewer) return;
  viewer.classList.add('sv-fullscreen');
  document.body.classList.add('has-sv-fullscreen');
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
  // コミュニティタイムスタンプ（承認済み）
  const ctsItems = _svCommunityTs[i] || [];
  const ctsBadges = ctsItems.map(ct =>
    `<button class="sv-cts-badge" data-idx="${i}" data-action="cts-seek" data-cts-seconds="${ct.timeSeconds}" title="みんなのタイムスタンプ: ${escapeHtml(_fmtTs(ct.timeSeconds))}">${escapeHtml(_fmtTs(ct.timeSeconds))}</button>`
  ).join('');
  const proposeBtn = `<button class="sv-cts-propose" data-idx="${i}" data-action="cts-propose" type="button">+ 提案</button>`;
  const ctsRow = `<div class="sv-cts-row">${ctsBadges}${proposeBtn}</div>`;
  return `<div class="sv-song" data-idx="${i}">
    <span class="sv-song-num">${i + 1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${escapeHtml(song.title)}</span>
      <span class="sv-song-artist">${escapeHtml(song.artist)}</span>
    </div>
    <div class="sv-song-actions">${badge}<button class="sv-ts-set" data-idx="${i}" data-action="set-ts" title="現在の再生時刻をタイムスタンプに記録">⏱ メモ</button></div>
    ${ctsRow}
  </div>`;
}

/**
 * 特定の配信枠の承認済みコミュニティタイムスタンプを取得し _svCommunityTs に格納する。
 * 取得後に sv-setlist を再描画する。
 *
 * @param {object} stream
 */
async function _svLoadCommunityTs(stream) {
  _svCommunityTs = {};
  if (!stream?.channel || stream?.index == null) return;
  try {
    const url = `/api/timestamps/${encodeURIComponent(stream.channel)}/${stream.index}`;
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();
    for (const item of (data.items || [])) {
      if (!_svCommunityTs[item.songIndex]) _svCommunityTs[item.songIndex] = [];
      _svCommunityTs[item.songIndex].push({ timeSeconds: item.timeSeconds, note: item.note ?? null });
    }
  } catch (_) { /* ネットワークエラーは無視 */ }
  // 再描画（stream-viewer が同じ配信のままの場合のみ）
  const el = $('#stream-viewer');
  if (!el || el._currentStream !== stream) return;
  const setlistEl = $('#sv-setlist');
  if (setlistEl) _svRefreshSetlist(setlistEl, stream.songs, _svLoadTs(stream));
  _svUpdateBulkBtn(stream);
}

/**
 * コミュニティタイムスタンプを提案するモーダルを表示する。
 *
 * @param {object} stream
 * @param {number} songIdx
 * @param {string} songTitle
 */
function _svShowProposeModal(stream, songIdx, songTitle) {
  // 既存モーダルがあれば除去
  $('#sv-cts-modal')?.remove();

  const currentTime = _svPlayer?.getCurrentTime?.() ?? 0;
  const defaultTime = _fmtTs(Math.floor(currentTime));

  const modal = document.createElement('div');
  modal.id = 'sv-cts-modal';
  modal.className = 'sv-cts-modal-overlay';
  modal.innerHTML = `
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="タイムスタンプを提案">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">タイムスタンプを提案</span>
        <button class="sv-cts-modal-close" type="button" aria-label="閉じる">✕</button>
      </div>
      <p class="sv-cts-modal-song">${escapeHtml(songTitle)}</p>
      <label class="sv-cts-modal-label">
        タイムスタンプ（MM:SS または H:MM:SS）
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${escapeHtml(defaultTime)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        コメント（任意・200文字以内）
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">提案は管理者の審査後に公開されます。</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">提案する</button>
        <button class="sv-cts-modal-cancel" type="button">キャンセル</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `;
  document.body.appendChild(modal);

  const close = () => modal.remove();
  modal.querySelector('.sv-cts-modal-close').addEventListener('click', close);
  modal.querySelector('.sv-cts-modal-cancel').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  modal.querySelector('#sv-cts-submit').addEventListener('click', async () => {
    const tsStr = modal.querySelector('#sv-cts-ts-input').value.trim();
    const note  = modal.querySelector('#sv-cts-note-input').value.trim() || null;
    const parsedSec = _parseTs(tsStr);
    const statusEl = modal.querySelector('#sv-cts-status');
    if (parsedSec === null) {
      statusEl.textContent = 'タイムスタンプの形式が正しくありません（例: 1:23 または 1:23:45）';
      statusEl.className = 'sv-cts-modal-status error';
      statusEl.hidden = false;
      return;
    }
    const submitBtn = modal.querySelector('#sv-cts-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中…';
    try {
      const res = await fetch(`/api/timestamps/${encodeURIComponent(stream.channel)}/${stream.index}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          songIndex:     songIdx,
          timeSeconds:   parsedSec,
          submitterNote: note,
        }),
      });
      if (res.ok) {
        statusEl.textContent = '提案を送信しました！審査後に公開されます。';
        statusEl.className = 'sv-cts-modal-status success';
        statusEl.hidden = false;
        submitBtn.hidden = true;
        modal.querySelector('.sv-cts-modal-cancel').textContent = '閉じる';
      } else {
        const body = await res.json().catch(() => ({}));
        statusEl.textContent = `送信に失敗しました: ${body.error || res.statusText}`;
        statusEl.className = 'sv-cts-modal-status error';
        statusEl.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = '提案する';
      }
    } catch (err) {
      statusEl.textContent = `送信に失敗しました: ${err.message}`;
      statusEl.className = 'sv-cts-modal-status error';
      statusEl.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = '提案する';
    }
  });

  // フォーカス
  setTimeout(() => modal.querySelector('#sv-cts-ts-input')?.focus(), 50);
  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });
}

// ─── Bulk community timestamp proposal ───────────────────────────────────────

/** セトリ登録ボタンのテキスト・表示状態を更新する */
function _svUpdateBulkBtn(stream) {
  const btn = $('#sv-cts-bulk-btn');
  if (!btn || !stream?.songs?.length) return;
  const registeredCount = Object.keys(_svCommunityTs).length;
  const allRegistered   = registeredCount >= stream.songs.length;
  btn.textContent = allRegistered ? '修正申請' : 'セトリ登録';
  btn.hidden = false;
}

/** 全曲まとめてタイムスタンプを申請するモーダルを表示する */
function _svShowBulkProposeModal(stream) {
  $('#sv-bulk-modal')?.remove();

  const localTs = _svLoadTs(stream); // 一括入力で保存済みのタイムスタンプ
  const registeredCount = Object.keys(_svCommunityTs).length;
  const allRegistered   = registeredCount >= stream.songs.length;
  const isRevise = allRegistered;

  const rows = stream.songs.map((song, idx) => {
    const localVal = localTs[idx] != null ? _fmtTs(localTs[idx]) : '';
    const communityVal = _svCommunityTs[idx]?.[0]?.timeSeconds != null
      ? _fmtTs(_svCommunityTs[idx][0].timeSeconds) : '';
    const prefill = localVal || communityVal;
    return `
      <div class="sv-bulk-row" data-idx="${idx}">
        <span class="sv-bulk-num">${idx + 1}</span>
        <span class="sv-bulk-title" title="${escapeHtml(song.title)}">${escapeHtml(song.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${escapeHtml(prefill)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${idx}">
        <button class="sv-bulk-ts-now" type="button" title="現在時刻を入力" data-bulk-now="${idx}">⏱</button>
      </div>`;
  }).join('');

  const modal = document.createElement('div');
  modal.id = 'sv-bulk-modal';
  modal.className = 'sv-cts-modal-overlay';
  modal.innerHTML = `
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${isRevise ? '修正申請' : 'セトリ登録'}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${isRevise ? '修正申請' : 'セトリ登録'}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="閉じる">✕</button>
      </div>
      <p class="sv-bulk-hint">タイムスタンプを入力して一括申請できます。空欄の曲はスキップされます。</p>
      <div class="sv-bulk-rows">${rows}</div>
      <label class="sv-cts-modal-label" style="margin-top:10px">
        共通コメント（任意・200文字以内）
        <input class="sv-cts-modal-input" id="sv-bulk-note" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">提案は管理者の審査後に公開されます。</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-bulk-submit" type="button">一括申請する</button>
        <button class="sv-cts-modal-cancel" type="button">キャンセル</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-bulk-status" hidden></p>
    </div>
  `;
  document.body.appendChild(modal);

  const close = () => modal.remove();
  modal.querySelector('.sv-cts-modal-close').addEventListener('click', close);
  modal.querySelector('.sv-cts-modal-cancel').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  // ⏱ ボタン：現在時刻を入力欄にセット
  modal.querySelector('.sv-bulk-rows').addEventListener('click', e => {
    const btn = e.target.closest('[data-bulk-now]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.bulkNow, 10);
    const time = _svPlayer?.getCurrentTime?.();
    if (time != null) {
      const input = modal.querySelector(`[data-bulk-ts-idx="${idx}"]`);
      if (input) input.value = _fmtTs(Math.floor(time));
    }
  });

  modal.querySelector('#sv-bulk-submit').addEventListener('click', async () => {
    const note = modal.querySelector('#sv-bulk-note').value.trim() || null;
    const statusEl = modal.querySelector('#sv-bulk-status');
    const submitBtn = modal.querySelector('#sv-bulk-submit');

    // 入力値を収集
    const entries = [];
    modal.querySelectorAll('[data-bulk-ts-idx]').forEach(input => {
      const idx = parseInt(input.dataset.bulkTsIdx, 10);
      const sec = _parseTs(input.value.trim());
      if (sec !== null) entries.push({ songIndex: idx, timeSeconds: sec });
    });

    if (!entries.length) {
      statusEl.textContent = 'タイムスタンプが1つも入力されていません';
      statusEl.className = 'sv-cts-modal-status error';
      statusEl.hidden = false;
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = `申請中… (0/${entries.length})`;
    statusEl.hidden = true;

    let succeeded = 0;
    let failed = 0;
    await Promise.all(entries.map(async entry => {
      try {
        const res = await fetch(
          `/api/timestamps/${encodeURIComponent(stream.channel)}/${stream.index}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ songIndex: entry.songIndex, timeSeconds: entry.timeSeconds, submitterNote: note }),
          }
        );
        if (res.ok) succeeded++; else failed++;
      } catch (_) { failed++; }
      submitBtn.textContent = `申請中… (${succeeded + failed}/${entries.length})`;
    }));

    if (failed === 0) {
      statusEl.textContent = `${succeeded}曲分のタイムスタンプを申請しました！審査後に公開されます。`;
      statusEl.className = 'sv-cts-modal-status success';
      submitBtn.hidden = true;
      modal.querySelector('.sv-cts-modal-cancel').textContent = '閉じる';
    } else {
      statusEl.textContent = `${succeeded}件成功 / ${failed}件失敗。失敗分を再試行してください。`;
      statusEl.className = 'sv-cts-modal-status error';
      submitBtn.disabled = false;
      submitBtn.textContent = '一括申請する';
    }
    statusEl.hidden = false;
  });

  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });
}

// ─── Below-Player: Playlist helpers ──────────────────────────────────────────

function _getPlaylists() {
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

/** 連続再生: 現在より1つ古い配信（配列の次のインデックス）を開く */
function _svPlayNext() {
  const streams = state.data?.streams || [];
  const viewer = $('#stream-viewer');
  const stream = viewer?._currentStream;
  if (!stream) return;
  const idx = streams.findIndex(s => s.channel === stream.channel && s.index === stream.index);
  if (idx < 0 || idx >= streams.length - 1) return;
  openStreamViewer(streams[idx + 1]);
}

/** プレイヤー下のナビカードHTMLを返す */
function _svNavCard(s, dir) {
  if (!s) {
    const label = dir === 'newer' ? '最新配信' : '最初の配信';
    return `<div class="sv-bp-nav-card sv-bp-nav-empty">${escapeHtml(label)}</div>`;
  }
  const thumb = youtubeThumb(s.url);
  const label = dir === 'newer' ? '新しい配信 →' : '← 古い配信';
  return `<button class="sv-bp-nav-card" type="button" data-bp-action="open-stream" data-bp-channel="${escapeHtml(s.channel)}" data-bp-index="${s.index}">
    <div class="sv-bp-nav-dir">${escapeHtml(label)}</div>
    ${thumb ? `<img class="sv-bp-nav-thumb" src="${escapeHtml(thumb)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${escapeHtml(s.title || '配信')}</div>
      <div class="sv-bp-nav-meta">${fmtDate(s.date)}　${s.songs.length}曲</div>
    </div>
  </button>`;
}

/**
 * プレイヤー下エリアを描画する。
 * 前後ナビ / 連続再生トグル / 配信統計 / 関連配信 / プレイリスト追加
 *
 * @param {object} stream
 */
function _svRenderBelowPlayer(stream) {
  const el = $('#sv-below-player');
  if (!el) return;

  const streams = state.data?.streams || [];
  const idx = streams.findIndex(s => s.channel === stream.channel && s.index === stream.index);

  // streams[0] = 最新, streams[n] = 最古
  // "古い" = idx+1, "新しい" = idx-1
  const olderStream = idx >= 0 && idx < streams.length - 1 ? streams[idx + 1] : null;
  const newerStream = idx > 0 ? streams[idx - 1] : null;

  // 関連配信: 曲かぶりが多い順
  const songTitles = new Set(stream.songs.map(s => s.title));
  const related = streams
    .filter((_, i) => i !== idx)
    .map(s => {
      const shared = s.songs.filter(sg => songTitles.has(sg.title));
      return { stream: s, overlap: shared.length, sharedSongs: shared.slice(0, 3).map(sg => sg.title) };
    })
    .filter(r => r.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 8);

  // プレイリスト
  const playlists = _getPlaylists();
  const skey = streamKey(stream);

  el.innerHTML = `
    <div class="sv-bp-wrap">

      <!-- 連続再生 + 前後ナビ -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-autoplay-bar">
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${_svAutoPlay ? ' sv-bp-ap-switch--on' : ''}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${_svAutoPlay ? ' checked' : ''}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            連続再生
          </label>
          ${olderStream
            ? `<span class="sv-bp-ap-hint">次：${escapeHtml(olderStream.title || '次の配信')}</span>`
            : `<span class="sv-bp-ap-hint sv-bp-ap-hint--end">（最後の配信）</span>`}
        </div>
        <div class="sv-bp-nav-cards">
          ${_svNavCard(olderStream, 'older')}
          ${_svNavCard(newerStream, 'newer')}
        </div>
      </div>

      <!-- 配信統計 -->
      <div class="sv-bp-section">
        <div class="sv-bp-sh">配信情報</div>
        <div class="sv-bp-stats">
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${stream.songs.length}</span>
            <span class="sv-bp-stat-label">曲数</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">第${stream.index}枠</span>
            <span class="sv-bp-stat-label">配信番号</span>
          </div>
          <div class="sv-bp-stat">
            <span class="sv-bp-stat-val">${fmtDate(stream.date)}</span>
            <span class="sv-bp-stat-label">配信日</span>
          </div>
        </div>
      </div>

      <!-- 関連配信 -->
      ${related.length ? `
      <div class="sv-bp-section">
        <div class="sv-bp-sh">関連配信 <span class="sv-bp-sh-sub">（同じ曲を歌った回）</span></div>
        <div class="sv-bp-related-list">
          ${related.map(r => {
            const rthumb = youtubeThumb(r.stream.url);
            return `<button class="sv-bp-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${escapeHtml(r.stream.channel)}" data-bp-index="${r.stream.index}">
              ${rthumb ? `<img class="sv-bp-rel-thumb" src="${escapeHtml(rthumb)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${escapeHtml(r.stream.title || '配信')}</div>
                <div class="sv-bp-rel-meta">${fmtDate(r.stream.date)}</div>
                <div class="sv-bp-rel-songs">${r.sharedSongs.map(t => escapeHtml(t)).join('、')}</div>
              </div>
              <div class="sv-bp-rel-badge">${r.overlap}曲</div>
            </button>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

      <!-- プレイリストへ追加 -->
      ${playlists.length ? `
      <div class="sv-bp-section">
        <div class="sv-bp-sh">プレイリストへ追加</div>
        <div class="sv-bp-pl-list" id="sv-bp-pl-list">
          ${playlists.map(pl => {
            const added = (pl.streams || []).includes(skey);
            return `<button class="sv-bp-pl-btn${added ? ' sv-bp-pl-btn--added' : ''}" type="button"
              data-bp-action="add-pl" data-bp-pl-id="${escapeHtml(String(pl.id))}"${added ? ' disabled' : ''}>
              <span class="sv-bp-pl-name">${escapeHtml(pl.name || 'プレイリスト')}</span>
              <span class="sv-bp-pl-status">${added ? '✓ 登録済み' : '＋ 追加'}</span>
            </button>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

    </div>
  `;

  // イベント委譲（el.onXxx で上書きして重複防止）
  el.onchange = (e) => {
    const check = e.target.closest('#sv-ap-check');
    if (!check) return;
    _svAutoPlay = check.checked;
    const sw = el.querySelector('.sv-bp-ap-switch');
    if (sw) sw.classList.toggle('sv-bp-ap-switch--on', _svAutoPlay);
  };

  el.onclick = (e) => {
    const btn = e.target.closest('[data-bp-action]');
    if (!btn) return;
    const action = btn.dataset.bpAction;

    if (action === 'open-stream') {
      const ch = btn.dataset.bpChannel;
      const targetIdx = parseInt(btn.dataset.bpIndex, 10);
      const target = (state.data?.streams || []).find(s => s.channel === ch && s.index === targetIdx);
      if (target) openStreamViewer(target);
    } else if (action === 'add-pl') {
      const plId = btn.dataset.bpPlId;
      if (_addStreamToPlaylist(plId, skey)) {
        btn.classList.add('sv-bp-pl-btn--added');
        btn.disabled = true;
        const statusEl = btn.querySelector('.sv-bp-pl-status');
        if (statusEl) statusEl.textContent = '✓ 登録済み';
      }
    }
  };
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
        <div class="sv-player-section">
          <div class="sv-player-wrap" id="sv-player-wrap">
            <div class="sv-player-loading">読み込み中…</div>
          </div>
          <div class="sv-below-player" id="sv-below-player"></div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>セットリスト</span>
            <div class="sv-panel-head-right">
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">一括入力</button>
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>セトリ登録</button>
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

  $('#sv-cts-bulk-btn').addEventListener('click', () => {
    const stream = el._currentStream;
    if (stream) _svShowBulkProposeModal(stream);
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
    } else if (btn.dataset.action === 'cts-seek') {
      const sec = Number(btn.dataset.ctsSeconds);
      if (!isNaN(sec) && _svPlayer?.seekTo) {
        _svPlayer.seekTo(sec, true);
        try { _svPlayer.playVideo(); } catch (_) {}
      }
    } else if (btn.dataset.action === 'cts-propose') {
      const song = stream.songs[idx];
      _svShowProposeModal(stream, idx, song?.title || `曲 ${idx + 1}`);
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
    _miniDestroyPlayer();
  }
  _svLastStream = null;

  // 全画面中なら埋め込みに戻してから開く
  if (_svFullscreen) {
    _svFullscreen = false;
    const existingViewer = $('#stream-viewer');
    if (existingViewer) existingViewer.classList.remove('sv-fullscreen');
    document.body.classList.remove('has-sv-fullscreen');
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

  _svCommunityTs = {}; // 前の配信のコミュニティタイムスタンプをリセット
  const ts = _svLoadTs(stream);
  _svRefreshSetlist($('#sv-setlist'), stream.songs, ts);
  // コミュニティタイムスタンプを非同期取得（取得完了後にセットリストを再描画）
  _svLoadCommunityTs(stream);
  _svRenderBelowPlayer(stream);

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
          onStateChange: (event) => {
            if (gen !== _svGen) return;
            if (event.data === window.YT.PlayerState.PLAYING) {
              try { event.target.setPlaybackQuality('hd1080'); } catch (_) {}
            }
            if (event.data === window.YT.PlayerState.ENDED && _svAutoPlay) {
              _svPlayNext();
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
    document.body.classList.remove('has-sv-fullscreen');
    document.body.style.overflow = '';
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

// プレイリストビューからストリームを開けるようにグローバル公開
window.__openStreamViewer = openStreamViewer;

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

  // ヒーロー背景ウォーターマーク切替
  const bg = document.getElementById('hero-ch-bg');
  if (bg) bg.dataset.mode = mode || 'all';
}

// ─── チャンネル情報モーダル ────────────────────────────────────────────────────

const CH_INFO = {
  new: {
    name: '夢川かなう - Kanau Yumekawa',
    handle: '@YumekawaKanau',
    url: 'https://www.youtube.com/@YumekawaKanau',
    label: '新ch',
    desc: 'Re:AcT所属の海のお姫さまになりたい、泡沫たゆたうVsinger 🐟\n夢川かなうじゃよ、ちょっと休憩していこ〜\nイメージ星座一魚座 ／ 星言葉は「魅力あふれる芸術的能」',
    links: [
      { icon: '𝕏', label: 'X (Twitter)',    url: 'https://twitter.com/Kanau_Yumekawa' },
      { icon: '🛍', label: 'official store', url: 'https://react.booth.pm' },
      { icon: '🌐', label: 'official site',  url: 'https://v-react.com' },
      { icon: '🎵', label: 'Apple Music',    url: 'https://music.apple.com/jp/artist/1614216914' },
      { icon: '🎧', label: 'Spotify',        url: 'https://open.spotify.com/intl-ja/artist/0sVSaI5Q6w9zNWeNkILwLQ' },
    ],
    avatarUrl: 'https://yt3.googleusercontent.com/n3rxKDtxPPTKJvicX3gH7Zcsb0POnFranvtpOJVNEHiIoO5byTcKBSJkdixlfvFs1KqMzxLfG78=s176-c-k-c0x00ffffff-no-rj-mo',
    bannerUrl: 'https://yt3.googleusercontent.com/khwuxCUEYr__Mkl4ReGfyihrgGNoL0bh5yjGOO_XIBO03pXgqpVpp7_Ebv1IlUDy_EDryDjyXA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
  },
  old: {
    name: '夢川かなう / Kanau ch',
    handle: '@Kanau_Yumekawa',
    url: 'https://www.youtube.com/@Kanau_Yumekawa',
    label: '旧ch',
    desc: '🐟姫になりたいアイドルVtuber夢川かなう 🐟\nイメージ星座:うお座 ／ 星言葉《魅力あふれる芸術的才能》\n欲しい言葉を欲しい声で届けます*.+゜\n和菓子が大好物なんじゃあ〜( ˙˙ ) 和菓子情報やおすすめゲームなど何かあれば\n#夢川聞いて を気軽に使ってツイートしてくれ！何でも良いぞ！@Re:AcT所属',
    links: [
      { icon: '▶', label: '新チャンネルはこちら', url: 'https://www.youtube.com/@YumekawaKanau' },
      { icon: '𝕏', label: 'X (Twitter)',          url: 'https://twitter.com/Kanau_Yumekawa' },
    ],
    avatarUrl: 'https://yt3.googleusercontent.com/RzGaNftqAH8jHQ_o4jwgzi28yV6Qm6kl_-UdxfQOTG69PmumlfgSb1gNj0rtduR5eQywPzoiuA=s900-c-k-c0x00ffffff-no-rj',
    bannerUrl: 'https://yt3.googleusercontent.com/o5PE0uSJL6gWyisa1As1SRmJgerzaf2BG4OdBwEz-9slJ2KQGONpciczZbHNNfUgJ7_549G3=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
  },
};

function _buildChCard(key) {
  const info = CH_INFO[key];
  if (!info) return '';

  // バナー部分（画像URL があれば img、なければグラデーション）
  const bannerInner = info.bannerUrl
    ? `<img class="ch-card-banner-img" src="${escapeHtml(info.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${escapeHtml(info.label)}</span>`
    : `<span class="ch-card-banner-label">${escapeHtml(info.label)}</span>`;

  // アバター部分（画像URL があれば img、なければ文字）
  const avatarInner = info.avatarUrl
    ? `<img class="ch-card-avatar-img" src="${escapeHtml(info.avatarUrl)}" alt="${escapeHtml(info.name)}" loading="lazy" referrerpolicy="no-referrer">`
    : (key === 'new' ? '新' : '旧');

  // 説明文（改行対応）
  const descHtml = info.desc
    ? `<p class="ch-card-desc">${info.desc.split('\n').map(l => escapeHtml(l)).join('<br>')}</p>`
    : '';

  // リンク一覧
  const linksHtml = info.links?.length ? `
    <div class="ch-card-links">
      ${info.links.map(l => `
        <a class="ch-card-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${l.icon}</span>
          <span>${escapeHtml(l.label)}</span>
        </a>`).join('')}
    </div>` : '';

  return `
    <div class="ch-card ch-card--${key}">
      <div class="ch-card-banner ch-card-banner--${key}${info.bannerUrl ? ' ch-card-banner--img' : ''}">
        ${bannerInner}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${key}${info.avatarUrl ? ' ch-card-avatar--img' : ''}">${avatarInner}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${escapeHtml(info.name)}</div>
            <div class="ch-card-handle">${escapeHtml(info.handle)}</div>
          </div>
        </div>
        ${descHtml}
        ${linksHtml}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${escapeHtml(info.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTubeチャンネルへ
          </a>
        </div>
      </div>
    </div>`;
}

function openChannelModal(chKey) {
  const modal = $('#ch-modal');
  const body  = $('#ch-modal-body');
  if (!modal || !body) return;

  // chKey が 'new' または 'old' → 1枚、それ以外(all/undefined) → 両方
  let html = '';
  if (chKey === 'new') {
    html = _buildChCard('new');
  } else if (chKey === 'old') {
    html = _buildChCard('old');
  } else {
    html = _buildChCard('new') + _buildChCard('old');
  }

  body.innerHTML = html;
  modal.hidden = false;
  $('#ch-modal-close')?.focus();
}

function initChannelModal() {
  const modal    = $('#ch-modal');
  const closeBtn = $('#ch-modal-close');
  if (!modal || !closeBtn) return;

  const close = () => { modal.hidden = true; };
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  // Official Channel ボタン
  document.querySelectorAll('[data-ch-modal]').forEach(btn => {
    btn.addEventListener('click', () => openChannelModal(btn.dataset.chModal));
  });
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
// 埋め込みプレイヤーが開いている状態で別タブへ移動した場合、
// ミニプレイヤーへ再生を引き継ぎながらタブ遷移する
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    const streamViewer = $('#stream-viewer');
    // 埋め込みモード（非全画面）でストリームが再生中 → ミニプレイヤーへ引き継ぐ
    if (tab !== 'player' && streamViewer && !streamViewer.hidden && !_svFullscreen) {
      _epPrevTab = tab; // closeStreamViewer 内の hidePlayerPanel がこのタブへ遷移する
      closeStreamViewer();
      return;
    }
    activateTab(tab);
  });
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
  // プレイリストに追加ボタン
  const plAddEl = e.target.closest('[data-playlist-add]');
  if (plAddEl) {
    e.preventDefault();
    e.stopPropagation();
    const skey = plAddEl.dataset.playlistAdd;
    const title = plAddEl.dataset.streamTitle || '';
    import('./views/playlists.js').then(m => m.showAddToPlaylistModal(skey, title));
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
initChannelModal();
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
    openStreamViewer(result.stream);
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
    // 3. チャンネル情報モーダル
    const chModal = $('#ch-modal');
    if (chModal && !chModal.hidden) {
      chModal.hidden = true;
      return;
    }
    // 4. ヘルプモーダル
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
