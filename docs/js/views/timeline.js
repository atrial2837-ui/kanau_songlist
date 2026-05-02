import { state } from '../state.js';
import { TIMELINE_INITIAL, TIMELINE_STEP } from '../config.js';
import { $, $$, escapeHtml, fmtDate } from '../utils.js';

export function renderTimeline() {
  const { streams } = state.data;
  const filter = state.timelineFilter;
  const visible = filter
    ? streams.filter(s => s.songs.some(sg => sg.key === filter.key))
    : streams;

  const panel = $('#panel-timeline');
  panel.innerHTML = `
    <div class="section-header">
      <h2>📅 配信タイムライン</h2>
      <span class="count-pill">${visible.length}枠</span>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `;

  const banner = $('#timeline-filter-banner');
  if (filter) {
    const totalCount = visible.reduce(
      (n, s) => n + s.songs.filter(sg => sg.key === filter.key).length, 0);
    banner.innerHTML = `
      <div class="filter-banner">
        <span class="filter-icon">🔎</span>
        <div class="filter-text">
          <strong>${escapeHtml(filter.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${escapeHtml(filter.artist)}</span>
          <span class="meta">この曲を歌った配信のみ表示中（${visible.length}枠 / ${totalCount}回歌唱）</span>
        </div>
        <button class="clear-btn" id="clear-filter">✕ 絞り込みを解除</button>
      </div>
    `;
    $('#clear-filter').addEventListener('click', () => {
      state.timelineFilter = null;
      state.timelineLimit = TIMELINE_INITIAL;
      renderTimeline();
    });
  }

  if (!visible.length) {
    $('#timeline').innerHTML = `<div class="empty-state">該当する配信がありません 🐠</div>`;
    return;
  }

  const limited = visible.slice(0, state.timelineLimit);
  $('#timeline').innerHTML = limited.map((s, idx) => renderItem(s, idx, filter)).join('');

  const ctrl = $('#timeline-controls');
  if (state.timelineLimit < visible.length) {
    ctrl.innerHTML = `<button class="load-more-btn" id="load-more">▼ もっと見る (残り${visible.length - state.timelineLimit}枠)</button>`;
    $('#load-more').addEventListener('click', () => {
      state.timelineLimit += TIMELINE_STEP;
      renderTimeline();
    });
  }
}

function renderItem(s, idx, filter) {
  const recentClass = !filter && idx < 3 ? 'recent' : '';
  const setlistHtml = s.songs.map((song, i) => {
    const hit = filter && song.key === filter.key ? ' hit' : '';
    return `<span class="setlist-song${hit}" data-songkey="${escapeHtml(song.key)}" data-songtitle="${escapeHtml(song.title)}" data-songartist="${escapeHtml(song.artist)}" title="クリックで絞り込み"><span class="sl-num">${i + 1}</span>${escapeHtml(song.title)}<span style="color:var(--ink-mute);"> / ${escapeHtml(song.artist)}</span></span>`;
  }).join('');
  const titleHtml = s.url
    ? `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title || '配信')}</a>`
    : escapeHtml(s.title || '配信');
  const watchHtml = s.url
    ? `<a class="watch-link" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">▶ YouTube</a>`
    : '';
  return `
    <article class="timeline-item ${recentClass}">
      <header class="timeline-head">
        <span class="timeline-date">${fmtDate(s.date)}</span>
        <span class="timeline-stream-no">第${s.index}枠</span>
        <span class="timeline-songcount">🎤 ${s.songs.length}曲</span>
        ${watchHtml}
      </header>
      <div class="timeline-title">${titleHtml}</div>
      <div class="setlist">${setlistHtml}</div>
    </article>
  `;
}
