import { state } from '../state.js';
import { daysSince, fmtDate } from '../utils.js';
import { $ } from '../utils.js';

export function renderRecency() {
  const root = $('#panel-recency');
  if (!state.data) return;

  const songs = state.data.songs;

  const rows = songs.map(song => {
    const last = song.lastDate || song.lastPlayed;
    const days = daysSince(last);

    let badge = '';
    if (song.count === 1) {
      badge = '<span class="badge accent">1回のみ</span>';
    } else if (days >= 180) {
      badge = '<span class="badge gold">久しぶり</span>';
    } else if (days >= 90) {
      badge = '<span class="badge">しばらく歌ってない</span>';
    }

    return `
      <div class="song-row">
        <div class="song-title">${song.title}</div>
        <div class="song-meta">
          最終歌唱：${fmtDate(last) || '—'}
          ${days != null ? `（${days}日前）` : ''}
          ${badge}
        </div>
      </div>
    `;
  });

  root.innerHTML = `
    <div class="list">
      ${rows.join('')}
    </div>
  `;
}