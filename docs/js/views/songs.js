import { state } from '../state.js';
import { $, escapeHtml, fmtDate, daysClass, debounce, highlightText } from '../utils.js';
import { search } from '../search.js';

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

function refresh() {
  const { songs } = state.data;
  const genreFiltered = applyGenreFilter(songs);
  const tagFiltered = applyTagFilter(genreFiltered);
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
  return `
    <div class="song-row" data-songkey="${escapeHtml(song.key)}" data-songtitle="${escapeHtml(song.title)}" data-songartist="${escapeHtml(song.artist)}" title="クリックで配信タイムラインに絞り込み">
      <div class="rank ${rankClass}">${song.rank}</div>
      <div class="info">
        <div class="title">${titleHtml}</div>
        <div class="artist">${artistHtml}</div>
        <div class="song-meta-line"><span class="genre-badge">${escapeHtml(genreLabel(song))}</span></div>
        ${keyHtml(song)}
      </div>
      <div class="count">${song.count}<small>回</small></div>
      <div class="last">${lastHtml}</div>
    </div>
  `;
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
