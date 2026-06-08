import { state } from '../store.js';
import { $, escapeHtml, fmtDate, fmtMonth, daysSince } from '../utils.js';
import { periodHits, countStreamsThisMonth, countSongsThisMonth, countNewSongsThisMonth, buildMonthly, buildHeatmap, heatLevel, isoDate } from '../domain-compat.js';
import { getToday } from '../store.js';

export function renderDashboard() {
  const { songs, streams } = state.data;
  const sorted = [...songs].sort((a, b) => b.count - a.count);
  const top5 = sorted.slice(0, 5);
  const top5Max = top5[0]?.count || 1;
  const recent = streams.slice(0, 5);
  const today = getToday();
  const newSongs = countNewSongsThisMonth(songs, today);
  const panel = $('#panel-dashboard');
  const heatmap = buildHeatmap(streams, today);
  const monthly = buildMonthly(streams).slice(-12);
  const monthlyMax = Math.max(1, ...monthly.map(m => m.songs));

  const activityHtml = `
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">📈 今月の活動</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">配信</span>
          <span class="a-meta">今月の歌枠数</span>
          <strong>${countStreamsThisMonth(streams, today)}回</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">歌唱</span>
          <span class="a-meta">今月の総歌唱数</span>
          <strong>${countSongsThisMonth(streams, today)}曲</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">新曲</span>
          <span class="a-meta">今月の初披露曲数</span>
          <strong>${newSongs}曲</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">最終</span>
          <span class="a-meta">最新歌枠から</span>
          <strong>${streams[0] ? `${daysSince(streams[0].date)}日前` : '—'}</strong>
        </div>
      </div>
    </div>
  `;

  const top5Html = `
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">🏆 TOP5 楽曲</div>
      <div class="bar-list">
        ${top5.length ? top5.map((s, i) => topBarRow(s, i, top5Max)).join('') : '<div class="empty-state">曲データなし</div>'}
      </div>
    </div>
  `;

  panel.innerHTML = `
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-main-stack">
        <div class="dashboard-lead">
          ${activityHtml}
          ${top5Html}
        </div>
        <div class="card dashboard-card dashboard-monthly-card">
          <div class="card-title">🎶 月別 歌唱数 <span class="pill">直近12か月</span></div>
          ${renderMonthlyBars(monthly, monthlyMax)}
        </div>
      </div>
      <div class="card dashboard-card dashboard-side-card">
        <section class="dashboard-side-section">
          <div class="card-title">🎸 ジャンル分布 <span class="pill">楽曲数</span></div>
          ${renderGenreChart(songs)}
        </section>
        <section class="dashboard-side-section">
          <div class="card-title">📅 配信ヒートマップ <span class="pill">直近1年</span></div>
          ${renderHeatmap(heatmap)}
        </section>
      </div>
      ${deferredDashboardHtml(streams, songs, recent)}
    </div>
  `;
}

function deferredDashboardHtml(streams, songs, recent) {
  const stalePicks = songs.filter(s => s.daysSinceLast >= 180).sort((a, b) => b.count - a.count).slice(0, 5);
  const recentPicks = songs.filter(s => s.daysSinceLast != null && s.daysSinceLast <= 30).sort((a, b) => b.count - a.count).slice(0, 5);
  const monthlyHits = periodHits(streams, 'month', getToday());
  const yearlyHits = periodHits(streams, 'year', getToday());
  return `
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">🗳 今月のよく歌われた曲 <span class="pill">軽量版</span></div>
      <div class="bar-list">
        ${monthlyHits.length ? monthlyHits.slice(0, 5).map((s, i) => topBarRow(s, i, monthlyHits[0].count)).join('') : '<div class="empty-state">今月の歌唱履歴なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">🗳 今年のよく歌われた曲 <span class="pill">軽量版</span></div>
      <div class="bar-list">
        ${yearlyHits.length ? yearlyHits.slice(0, 5).map((s, i) => topBarRow(s, i, yearlyHits[0].count)).join('') : '<div class="empty-state">今年の歌唱履歴なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">💤 久しぶり候補 <span class="pill">180日以上</span></div>
      <div class="bar-list">
        ${stalePicks.length ? stalePicks.map((s, i) => topBarRow(s, i, stalePicks[0].count)).join('') : '<div class="empty-state">候補なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">✨ 最近歌った定番 <span class="pill">30日以内</span></div>
      <div class="bar-list">
        ${recentPicks.length ? recentPicks.map((s, i) => topBarRow(s, i, recentPicks[0].count)).join('') : '<div class="empty-state">候補なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">📺 直近の歌枠 <span class="pill">最新${recent.length}件</span></div>
      ${recent.map(s => `
        <div class="activity-row">
          <span class="a-date">${fmtDate(s.date)}</span>
          <span class="a-title">${s.url ? `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title || '配信')}</a>` : escapeHtml(s.title)}</span>
          <span class="a-meta">🎤 ${s.songs.length}曲</span>
        </div>
      `).join('')}
    </div>
  `;
}

function topBarRow(s, i, max) {
  const pct = Math.round((s.count / max) * 100);
  return `
    <div class="bar-row clickable" data-songkey="${escapeHtml(s.key)}" data-songtitle="${escapeHtml(s.title)}" data-songartist="${escapeHtml(s.artist)}" title="クリックで配信タイムラインに絞り込み">
      <div class="bar-rank">${i + 1}</div>
      <div class="bar-content">
        <div class="bar-label">${escapeHtml(s.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${escapeHtml(s.artist)}</span></div>
        <div class="bar-bar" style="width:${pct}%;"></div>
      </div>
      <div class="bar-value">${s.count}</div>
    </div>
  `;
}

function renderGenreChart(songs) {
  const genreCounts = new Map();
  for (const s of songs) {
    const genre = s.genre || s.genreText || '未分類';
    if (!genre || genre === '未分類') continue;
    genreCounts.set(genre, (genreCounts.get(genre) || 0) + 1);
  }
  const rows = Array.from(genreCounts.entries()).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((sum, [, count]) => sum + count, 0);
  if (!rows.length) return '<div class="empty-state">ジャンルデータなし</div>';
  return `
    <div class="genre-meter" aria-label="ジャンル分布">
      <div class="genre-meter-track">
        ${rows.map(([genre, count], index) => `
          <span class="genre-meter-segment g${index % 8}" style="width:${Math.max(3, (count / total) * 100)}%" title="${escapeHtml(genre)}: ${count}曲"></span>
        `).join('')}
      </div>
      <div class="genre-breakdown">
        ${rows.slice(0, 8).map(([genre, count], index) => `
          <div class="genre-row">
            <span class="genre-dot g${index % 8}"></span>
            <span class="genre-name">${escapeHtml(genre)}</span>
            <strong>${count}</strong>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderMonthlyBars(monthly, max) {
  if (!monthly.length) return '<div class="empty-state">月別データなし</div>';
  return `
    <div class="monthly-bars" aria-label="月別歌唱数">
      ${monthly.map((m) => {
        const pct = Math.max(5, Math.round((m.songs / max) * 100));
        return `
          <div class="month-bar" title="${fmtMonth(m.date)}: ${m.songs}曲 / ${m.streams}枠">
            <div class="month-bar-track"><span style="height:${pct}%"></span></div>
            <div class="month-label">${fmtMonth(m.date).replace(/^\d{4}\//, '')}</div>
            <strong>${m.songs}</strong>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderHeatmap(cells) {
  const dow = ['日','月','火','水','木','金','土'];
  const rowsHtml = dow.map(d => `<div>${d}</div>`).join('');
  const cellsHtml = cells.map(c => {
    if (!c.inRange) return `<div class="heatmap-cell" style="visibility:hidden"></div>`;
    const lvl = heatLevel(c.value);
    return `<div class="heatmap-cell ${lvl}" title="${c.iso}: ${c.value}曲"></div>`;
  }).join('');
  return `
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${rowsHtml}</div>
      <div class="heatmap-wrap"><div class="heatmap">${cellsHtml}</div></div>
    </div>
    <div class="heatmap-legend">
      少なめ
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      多め
    </div>
  `;
}
