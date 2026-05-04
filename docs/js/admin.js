import { initTheme } from './theme.js';
import { $, fmtDate, formatNumber } from './utils.js';

initTheme();

function parseDate(value) {
  if (!value) return null;
  const text = String(value).replaceAll('/', '-');
  const m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!m) return null;
  const date = new Date(+m[1], +m[2] - 1, +m[3]);
  date.setHours(0, 0, 0, 0);
  return date;
}

function setBadge(ok, text) {
  const badge = $('#api-badge');
  badge.textContent = text;
  badge.classList.toggle('accent', ok);
}

function stat(label, value, unit = '') {
  return `
    <div class="stat-card">
      <div class="stat-label">${label}</div>
      <div class="stat-value">${value}<span class="stat-unit">${unit}</span></div>
    </div>
  `;
}

async function loadStatus() {
  setBadge(false, '確認中');
  $('#api-detail').textContent = '/api/data を読み込んでいます。';
  $('#channel-rows').innerHTML = '<tr><td colspan="5">読み込み中</td></tr>';

  const started = performance.now();
  try {
    const res = await fetch('/api/data', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const elapsed = Math.round(performance.now() - started);
    const combined = data.combined || {};
    const stats = combined.stats || {};

    setBadge(true, '正常');
    $('#api-stats').innerHTML = [
      stat('曲数', formatNumber(stats.repertoire), '曲'),
      stat('歌枠', formatNumber(stats.streams), '枠'),
      stat('応答', formatNumber(elapsed), 'ms'),
    ].join('');
    $('#api-detail').textContent = `最新データ: ${fmtDate(parseDate(stats.updateDate))} / APIキャッシュは最大約1分です。`;

    const channels = Object.values(data.channels || {});
    $('#channel-rows').innerHTML = channels.map((channel) => {
      const s = channel.stats || {};
      return `
        <tr>
          <td>${s.channelLabel || s.channelId || '-'}</td>
          <td>${formatNumber(s.repertoire)}</td>
          <td>${formatNumber(s.streams)}</td>
          <td>${formatNumber(s.total)}</td>
          <td>${fmtDate(parseDate(s.updateDate))}</td>
        </tr>
      `;
    }).join('') || '<tr><td colspan="5">チャンネルデータがありません</td></tr>';
  } catch (error) {
    setBadge(false, 'エラー');
    $('#api-stats').innerHTML = [
      stat('曲数', '-'),
      stat('歌枠', '-'),
      stat('応答', '-'),
    ].join('');
    $('#api-detail').textContent = `API確認に失敗しました: ${error.message || String(error)}`;
    $('#channel-rows').innerHTML = '<tr><td colspan="5">取得できませんでした</td></tr>';
  }
}

$('#refresh-status').addEventListener('click', loadStatus);
loadStatus();
