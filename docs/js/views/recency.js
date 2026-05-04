export function renderRecency() {
  const root = $('#panel-recency');
  if (!state.data) return;

  const songs = state.data.songs;

  const rows = songs.map(song => {
    const last = song.lastSung;
    const days = song.daysSinceLast;

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
          <span class="a-date">
            ${last ? fmtDate(last) : '—'}
          </span>

          <span class="a-meta">
            ${days != null ? days + '日前' : '—'}
          </span>

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
