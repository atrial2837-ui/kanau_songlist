import { state } from './state.js';
import { loadAll } from './data.js';
import { buildIndex } from './search.js';
import { initTheme, onThemeChange } from './theme.js';
import { onRerenderNeeded, destroyAllCharts } from './charts.js';
import { $, $$, escapeHtml, fmtDate, daysSince, isLink, formatNumber } from './utils.js';
import { DEFAULT_CHANNEL } from './config.js';

import { renderDashboard } from './views/dashboard.js';
import { renderRanking }   from './views/ranking.js';
import { renderSongs }     from './views/songs.js';
import { renderTimeline }  from './views/timeline.js';
import { renderAnalytics } from './views/analytics.js';

initTheme();

const RENDERERS = {
  dashboard: renderDashboard,
  ranking:   renderRanking,
  songs:     renderSongs,
  timeline:  renderTimeline,
  analytics: renderAnalytics,
};

function activateTab(tab) {
  if (!RENDERERS[tab]) tab = 'dashboard';
  state.activeTab = tab;
  $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  $$('.panel').forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));
  if (state.data) RENDERERS[tab]();
}

function getDataset(channelId) {
  if (!state.channelData) return null;
  if (channelId === 'all') return state.channelData.combined;
  return state.channelData.channels[channelId] || null;
}

function switchChannel(channelId) {
  const ds = getDataset(channelId);
  if (!ds) return;
  state.channel = channelId;
  state.data = ds;
  state.timelineFilter = null;
  state.timelineLimit = 12;
  state.songsLimit = 100;
  state.songsQuery = '';
  buildIndex(ds.songs);
  destroyAllCharts();
  $$('.ch-btn').forEach(b => b.classList.toggle('active', b.dataset.channel === channelId));
  renderHero();
  if (state.data) RENDERERS[state.activeTab]();
}

function refreshChannelButtons() {
  if (!state.channelData) return;
  for (const btn of $$('.ch-btn')) {
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
  state.timelineFilter = { key, title, artist };
  state.timelineLimit = 12;
  activateTab('timeline');
  $('#panel-timeline').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderHero() {
  const { stats, streams } = state.data;
  const latest = streams[0]?.date || null;
  const dSinceLatest = daysSince(latest);
  const dSinceUpdate = daysSince(stats.updateDate);
  const chLabel = stats.channelLabel || stats.channelId || '';
  const chBadge = chLabel ? `<span class="badge accent" style="margin-right:8px;">${escapeHtml(chLabel)}</span>` : '';

  $('#updated-info').innerHTML =
    chBadge +
    `スプレッドシート更新日：<strong>${fmtDate(stats.updateDate) || '—'}</strong>` +
    (dSinceUpdate != null ? ` <span class="badge">${dSinceUpdate}日前</span>` : '');

  $('#stats-grid').innerHTML = `
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
}

function activeDays(data) {
  if (!data.streams.length) return '—';
  const first = data.streams[data.streams.length - 1].date;
  const last = data.streams[0].date;
  return Math.floor((last - first) / 86400000) + 1;
}

function showLoading() { $('#loading').hidden = false; $('#error').hidden = true; }
function hideLoading() { $('#loading').hidden = true; }
function showError(err) {
  $('#loading').hidden = true;
  $('#error').hidden = false;
  $('#err-detail').textContent = err && err.message ? err.message : String(err);
}

async function init() {
  showLoading();
  try {
    const channelData = await loadAll();
    state.channelData = channelData;
    let initialChannel = state.channel || DEFAULT_CHANNEL;
    if (!getDataset(initialChannel)) initialChannel = DEFAULT_CHANNEL;
    if (!getDataset(initialChannel)) {
      const fallback = Object.keys(channelData.channels)[0];
      if (fallback) initialChannel = fallback;
    }
    if (!getDataset(initialChannel)) throw new Error('No channel data could be loaded');
    refreshChannelButtons();
    hideLoading();
    switchChannel(initialChannel);
    for (const ch of Object.values(channelData.channels)) {
      if (ch.orphans.length) {
        console.warn(`[${ch.stats.channelLabel}] セトリ→リスト未マッチ: ${ch.orphans.length}件`, ch.orphans);
      }
    }
  } catch (e) {
    console.error(e);
    showError(e);
  }
}

// Tab buttons
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// Channel switch
$$('.ch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    switchChannel(btn.dataset.channel);
  });
});

// Global click → filter timeline by song
document.body.addEventListener('click', (e) => {
  if (isLink(e.target)) return;
  const target = e.target.closest('[data-songkey]');
  if (!target) return;
  filterTimelineBySong({
    key: target.dataset.songkey,
    title: target.dataset.songtitle || '',
    artist: target.dataset.songartist || '',
  });
});

$('#retry-btn').addEventListener('click', init);
$('#reload-btn').addEventListener('click', init);

// Re-render charts on theme change
onRerenderNeeded(() => {
  if (!state.data) return;
  destroyAllCharts();
  if (state.activeTab === 'dashboard') renderDashboard();
  if (state.activeTab === 'analytics') renderAnalytics();
});

init();
