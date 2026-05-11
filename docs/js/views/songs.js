import { state } from '../state.js';
import { $, escapeHtml, fmtDate, daysClass, debounce, highlightText } from '../utils.js';
import { search, matchReasons } from '../search.js';

let searchInputEl, sortSelectEl, genreSelectEl, filterButtonsEl, genreChipsEl, listEl, countEl, moreBtnWrap;

export function renderSongs() {
  const panel = $('#panel-songs');
  panel.innerHTML = `
    <div class="section-header">
      <h2>🎵 全曲リスト</h2>
      <span class="count-pill" id="songs-count">—</span>
    </div>
    <div class="controls">
      <input id="songs-search" class="text-input" type="search" placeholder="🔍 曲名・アーティスト・field検索（あいまい一致）" value="${escapeHtml(state.songsQuery)}">
      <select id="songs-sort" class="select-input">
        <option value="count-desc">回数（多）</option>
        <option value="count-asc">回数（少）</option>
        <option value="recent">最終披露（新）</option>
        <option value="oldest">最終披露（古）</option>
        <option value="title">曲名（あ→ん）</option>
        <option value="artist">アーティスト</option>
      </select>
      <select id="songs-genre" class="select-input genre-select" title="ジャンルで絞り込み">
        ${genreOptionsHtml()}
      </select>
    </div>
    <p class="search-help">
      <strong>field検索：</strong>
      <code>artist:ヨルシカ</code>
      <code>title:深海</code>
      <code>genre:ボカロ</code>
      <code>season:夏</code>
      <code>mood:しっとり</code>
      <code>tag:定番</code>
      <code>key:-2</code>
      <code>count:&gt;5</code>
      <code>days:&lt;30</code>
      <code>last:fresh</code>（30日以内）
      <code>last:stale</code>（180日以上）
      <code>last:never</code>（履歴未確認）
      ・複数組合せ可
    </p>
    <div class="controls" id="songs-filters" style="margin-top:-8px;">
      <button class="btn ghost active" data-filter="all">すべて</button>
      <button class="btn ghost" data-filter="fresh">🟢 最近 (30日以内)</button>
      <button class="btn ghost" data-filter="stale">🟠 久しぶり (180日以上)</button>
      <button class="btn ghost" data-filter="never">⚪ 履歴未確認</button>
    </div>
    <div class="songs-tools">
      <button class="btn ghost" id="singer-mode-btn" type="button">🎙 配信者向け</button>
      <button class="btn ghost" id="compact-btn" type="button">表示: ${state.songsView === 'compact' ? 'コンパクト' : '詳細'}</button>
      <button class="btn primary" id="recommend-btn" type="button">おすすめ選曲</button>
    </div>
    <div id="recommend-box" class="recommend-box" hidden></div>
    <div class="genre-strip" id="songs-genre-chips">${genreChipsHtml()}</div>
    <div id="songs-list" class="song-list"></div>
    <div class="timeline-controls" id="songs-more-wrap"></div>
  `;

  searchInputEl = $('#songs-search');
  sortSelectEl = $('#songs-sort');
  genreSelectEl = $('#songs-genre');
  filterButtonsEl = $('#songs-filters');
  genreChipsEl = $('#songs-genre-chips');
  listEl = $('#songs-list');
  countEl = $('#songs-count');
  moreBtnWrap = $('#songs-more-wrap');

  sortSelectEl.value = state.songsSort;
  genreSelectEl.value = genreExists(state.songsGenre) ? state.songsGenre : 'all';
  state.songsGenre = genreSelectEl.value;
  refreshFilterButtons();
  refreshGenreChips();

  const debounced = debounce(() => { state.songsQuery = searchInputEl.value; state.songsLimit = 100; refresh(); }, 120);
  searchInputEl.addEventListener('input', debounced);
  sortSelectEl.addEventListener('change', () => { state.songsSort = sortSelectEl.value; refresh(); });
  genreSelectEl.addEventListener('change', () => {
    state.songsGenre = genreSelectEl.value;
    state.songsLimit = 100;
    refreshGenreChips();
    refresh();
  });
  filterButtonsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    state.songsFilter = btn.dataset.filter;
    state.songsLimit = 100;
    refreshFilterButtons();
    refresh();
  });
  genreChipsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-genre]');
    if (!btn) return;
    state.songsGenre = btn.dataset.genre;
    genreSelectEl.value = state.songsGenre;
    state.songsLimit = 100;
    refreshGenreChips();
    refresh();
  });
  $('#singer-mode-btn').addEventListener('click', () => {
    state.singerMode = !state.singerMode;
    state.songsLimit = 100;
    refresh();
  });
  $('#compact-btn').addEventListener('click', () => {
    state.songsView = state.songsView === 'compact' ? 'comfortable' : 'compact';
    refresh();
  });
  $('#recommend-btn').addEventListener('click', () => showRecommendation());

  refresh();
}

function genreLabel(song) {
  return String(song.genre || '未分類').trim() || '未分類';
}

function genreCounts() {
  const counts = new Map();
  for (const song of state.data.songs || []) {
    const genre = genreLabel(song);
    counts.set(genre, (counts.get(genre) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ja'));
}

function genreExists(genre) {
  return genre === 'all' || genreCounts().some(([name]) => name === genre);
}

function genreOptionsHtml() {
  const options = [`<option value="all">全ジャンル</option>`];
  for (const [genre, count] of genreCounts()) {
    options.push(`<option value="${escapeHtml(genre)}">${escapeHtml(genre)} (${count})</option>`);
  }
  return options.join('');
}

function genreChipsHtml() {
  const chips = [`<button class="genre-chip" type="button" data-genre="all">全ジャンル</button>`];
  for (const [genre, count] of genreCounts()) {
    chips.push(`
      <button class="genre-chip" type="button" data-genre="${escapeHtml(genre)}">
        <span>${escapeHtml(genre)}</span><small>${count}</small>
      </button>
    `);
  }
  return chips.join('');
}

function refreshGenreChips() {
  for (const btn of genreChipsEl.querySelectorAll('[data-genre]')) {
    btn.classList.toggle('active', btn.dataset.genre === state.songsGenre);
  }
}

function refreshFilterButtons() {
  for (const btn of filterButtonsEl.querySelectorAll('[data-filter]')) {
    btn.classList.toggle('primary', btn.dataset.filter === state.songsFilter);
    btn.classList.toggle('ghost', btn.dataset.filter !== state.songsFilter);
  }
}

function applyGenreFilter(songs) {
  if (!state.songsGenre || state.songsGenre === 'all') return songs;
  return songs.filter(s => genreLabel(s) === state.songsGenre);
}

function applyTagFilter(songs) {
  switch (state.songsFilter) {
    case 'fresh':
      return songs.filter(s => s.daysSinceLast != null && s.daysSinceLast <= 30);
    case 'stale':
      return songs.filter(s => s.daysSinceLast != null && s.daysSinceLast >= 180);
    case 'never':
      return songs.filter(s => !s.lastSung);
    default:
      return songs;
  }
}

function applySingerMode(songs) {
  if (!state.singerMode) return songs;
  return songs.filter(s =>
    s.lastSung &&
    (s.displayKey || !state.data.stats.keyPublished || s.count >= 5 || s.daysSinceLast >= 120)
  );
}

function refresh() {
  const { songs } = state.data;
  const genreFiltered = applyGenreFilter(songs);
  const modeFiltered = applySingerMode(genreFiltered);
  const tagFiltered = applyTagFilter(modeFiltered);
  const { results, tokens } = search(state.songsQuery, tagFiltered);
  let filtered = state.songsQuery.trim()
    ? results.filter(s => tagFiltered.includes(s))
    : tagFiltered;

  filtered = sortSongs(filtered, state.songsSort, !!state.songsQuery.trim());

  countEl.textContent = `${filtered.length} / ${songs.length}曲`;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="empty-state">該当する曲がありません 🐠</div>`;
    moreBtnWrap.innerHTML = '';
    return;
  }

  const limited = filtered.slice(0, state.songsLimit);
  listEl.classList.toggle('compact', state.songsView === 'compact');
  $('#singer-mode-btn').classList.toggle('primary', state.singerMode);
  $('#singer-mode-btn').classList.toggle('ghost', !state.singerMode);
  $('#compact-btn').textContent = `表示: ${state.songsView === 'compact' ? 'コンパクト' : '詳細'}`;
  listEl.innerHTML = limited.map(s => rowHtml(s, tokens)).join('');

  if (state.songsLimit < filtered.length) {
    moreBtnWrap.innerHTML = `<button class="load-more-btn" id="songs-more">▼ もっと表示 (残り${filtered.length - state.songsLimit}曲)</button>`;
    $('#songs-more').addEventListener('click', () => {
      state.songsLimit += 200;
      refresh();
    });
  } else {
    moreBtnWrap.innerHTML = '';
  }
}

function showRecommendation() {
  const box = $('#recommend-box');
  const pool = sortSongs(
    applySingerMode(applyTagFilter(applyGenreFilter(state.data.songs)))
      .filter(song => song.lastSung && (song.displayKey || !state.data.stats.keyPublished)),
    'oldest',
    false
  );
  if (!pool.length) {
    box.hidden = false;
    box.innerHTML = `<div class="empty-state">条件に合うおすすめ候補がありません</div>`;
    return;
  }
  const candidates = pool.slice(0, Math.min(80, pool.length));
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  box.hidden = false;
  box.innerHTML = `
    <div class="recommend-card" data-songkey="${escapeHtml(pick.key)}" data-songtitle="${escapeHtml(pick.title)}" data-songartist="${escapeHtml(pick.artist)}">
      <div>
        <div class="recommend-label">今日の候補</div>
        <strong>${escapeHtml(pick.title)}</strong>
        <span>/ ${escapeHtml(pick.artist)}</span>
      </div>
      <div class="recommend-meta">
        <span>${pick.count}回</span>
        <span>${pick.daysSinceLast ?? '—'}日前</span>
        ${pick.displayKey ? `<span>キー ${escapeHtml(pick.displayKey)}</span>` : ''}
      </div>
    </div>
  `;
}

function sortSongs(songs, sort, isFuzzy) {
  const cmpDate = (a, b, dir) => {
    const av = a.lastSung ? a.lastSung.getTime() : (dir === 'desc' ? -Infinity : Infinity);
    const bv = b.lastSung ? b.lastSung.getTime() : (dir === 'desc' ? -Infinity : Infinity);
    return dir === 'desc' ? bv - av : av - bv;
  };
  const list = [...songs];
  switch (sort) {
    case 'count-asc': list.sort((a, b) => a.count - b.count || a.title.localeCompare(b.title, 'ja')); break;
    case 'recent':    list.sort((a, b) => cmpDate(a, b, 'desc')); break;
    case 'oldest':    list.sort((a, b) => cmpDate(a, b, 'asc')); break;
    case 'title':     list.sort((a, b) => a.title.localeCompare(b.title, 'ja')); break;
    case 'artist':    list.sort((a, b) => a.artist.localeCompare(b.artist, 'ja') || b.count - a.count); break;
    case 'count-desc':
    default:          if (!isFuzzy) list.sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, 'ja')); break;
  }
  return list;
}

function rowHtml(song, tokens) {
  const rankClass = song.rank === 1 ? 'r1' : song.rank === 2 ? 'r2' : song.rank === 3 ? 'r3' : '';
  const lastHtml = song.lastSung
    ? `<div>${fmtDate(song.lastSung)}</div><span class="badge ${daysClass(song.daysSinceLast)}">${song.daysSinceLast}日前</span>`
    : `<div>履歴未確認</div><span class="badge never">要確認</span>`;
  const titleHtml = highlightText(song.title, tokens);
  const artistHtml = highlightText(song.artist, tokens);
  const reasons = matchReasons(song, state.songsQuery);
  return `
    <div class="song-row" data-songkey="${escapeHtml(song.key)}" data-songtitle="${escapeHtml(song.title)}" data-songartist="${escapeHtml(song.artist)}" title="クリックで曲詳細を表示">
      <div class="rank ${rankClass}">${song.rank}</div>
      <div class="info">
        <div class="title">${titleHtml}</div>
        <div class="artist">${artistHtml}</div>
        <div class="song-meta-line">
          <span class="genre-badge">${escapeHtml(genreLabel(song))}</span>
          ${tagBadges(song)}
          ${reasons.map(reason => `<span class="match-badge">${escapeHtml(reason)}一致</span>`).join('')}
        </div>
        ${keyHtml(song)}
      </div>
      <div class="count">${song.count}<small>回</small></div>
      <div class="last">${lastHtml}</div>
    </div>
  `;
}

function tagBadges(song) {
  const tags = [
    ...(song.seasonTags || []),
    ...(song.moodTags || []),
    ...(state.singerMode ? (song.singerTags || []) : []),
  ].slice(0, state.songsView === 'compact' ? 2 : 5);
  return tags.map(tag => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join('');
}

function keyHtml(song) {
  if (!state.data?.stats?.keyPublished) return '';
  const key = String(song.displayKey || '').trim();
  if (!key) {
    return `<div class="song-key-line"><span class="song-key-empty">キー未登録</span></div>`;
  }
  return `
    <div class="song-key-line">
      <button type="button" class="song-key-badge" title="統合集計 T/U列のキー">
        <span>キー</span><strong>${escapeHtml(key)}</strong>
      </button>
    </div>
  `;
}
