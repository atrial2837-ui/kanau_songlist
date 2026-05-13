const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const ROOT = __dirname;

loadEnvFile(path.join(ROOT, '.env'));
loadEnvFile(path.join(process.cwd(), '.env'));

const PORT = Number(process.env.ADMIN_PORT || 8788);
const HOST = process.env.ADMIN_HOST || '127.0.0.1';

const REQUIRED_ENV = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] != null) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, '');
  }
}

function normalize(value) {
  return String(value == null ? '' : value).trim().replace(/\s+/g, ' ').normalize('NFKC');
}

function normalizedKey(value) {
  return normalize(value).toLowerCase();
}

function songKey(title, artist) {
  return `${normalizedKey(title)}__${normalizedKey(artist)}`;
}

function splitSongLine(raw) {
  const text = String(raw || '').trim();
  for (const sep of [' / ', '／', '/']) {
    const index = text.lastIndexOf(sep);
    if (index >= 0) {
      return {
        title: normalize(text.slice(0, index)),
        artist: normalize(text.slice(index + sep.length)),
        raw: text,
      };
    }
  }
  return { title: normalize(text), artist: '', raw: text };
}

function todayIso() {
  return new Date().toISOString();
}

function json(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(body);
}

function html(res, body) {
  res.writeHead(200, {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(body);
}

function assertConfigured() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

function assertAdminToken(req) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return;
  const actual = req.headers['x-admin-token'];
  if (actual !== expected) {
    const error = new Error('Invalid admin token');
    error.status = 401;
    throw error;
  }
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function d1(sql, params = []) {
  assertConfigured();
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ sql, params }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    const message = payload.errors?.map((item) => item.message).join('; ') || JSON.stringify(payload);
    throw new Error(`D1 query failed: ${message}`);
  }
  const result = Array.isArray(payload.result) ? payload.result[0] : payload.result;
  if (result?.success === false) {
    throw new Error(`D1 SQL failed: ${JSON.stringify(result)}`);
  }
  return result || {};
}

async function select(sql, params = []) {
  const result = await d1(sql, params);
  return result.results || [];
}

async function selectOne(sql, params = []) {
  return (await select(sql, params))[0] || null;
}

async function execute(sql, params = []) {
  const result = await d1(sql, params);
  return result.meta || {};
}

async function getChannels() {
  return select('SELECT id, code, name FROM channels ORDER BY sort_order ASC, id ASC');
}

async function buildSongMaps() {
  const rows = await select(`
    SELECT songs.id, songs.title, songs.normalized_title, songs.song_key, artists.name AS artist
    FROM songs
    LEFT JOIN artists ON artists.id = songs.artist_id
    ORDER BY songs.id ASC
  `);
  const byKey = new Map();
  const byTitle = new Map();
  for (const row of rows) {
    byKey.set(row.song_key, row);
    const key = row.normalized_title;
    if (!byTitle.has(key)) byTitle.set(key, []);
    byTitle.get(key).push(row);
  }
  return { byKey, byTitle };
}

function resolveExistingSong(parsed, maps) {
  const key = songKey(parsed.title, parsed.artist);
  const exact = maps.byKey.get(key);
  if (exact) return { key, song: exact, match: 'exact' };
  const titleMatches = maps.byTitle.get(normalizedKey(parsed.title)) || [];
  if (titleMatches.length === 1) return { key, song: titleMatches[0], match: 'title' };
  return { key, song: null, match: titleMatches.length > 1 ? 'ambiguous' : 'new' };
}

async function previewStream(input) {
  const maps = await buildSongMaps();
  const lines = String(input.songsText || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.map((line, index) => {
    const parsed = splitSongLine(line);
    const resolved = resolveExistingSong(parsed, maps);
    return {
      position: index + 1,
      raw: parsed.raw,
      title: parsed.title,
      artist: parsed.artist,
      key: resolved.key,
      match: resolved.match,
      songId: resolved.song?.id || null,
      existingTitle: resolved.song?.title || '',
      existingArtist: resolved.song?.artist || '',
    };
  });
}

async function upsertArtist(name) {
  const artistName = normalize(name || '(不明)') || '(不明)';
  const normalizedName = normalizedKey(artistName);
  const existing = await selectOne('SELECT id FROM artists WHERE normalized_name = ?', [normalizedName]);
  if (existing) return existing.id;
  const now = todayIso();
  const meta = await execute(
    'INSERT INTO artists (name, normalized_name, created_at) VALUES (?, ?, ?)',
    [artistName, normalizedName, now],
  );
  return meta.last_row_id;
}

async function upsertSong(title, artist) {
  const cleanTitle = normalize(title);
  const cleanArtist = normalize(artist || '(不明)') || '(不明)';
  const key = songKey(cleanTitle, cleanArtist === '(不明)' ? '' : cleanArtist);
  const existing = await selectOne('SELECT id FROM songs WHERE song_key = ?', [key]);
  if (existing) return { id: existing.id, key, created: false };
  const artistId = await upsertArtist(cleanArtist);
  const now = todayIso();
  const meta = await execute(
    'INSERT INTO songs (title, normalized_title, artist_id, song_key, created_at) VALUES (?, ?, ?, ?, ?)',
    [cleanTitle, normalizedKey(cleanTitle), artistId, key, now],
  );
  return { id: meta.last_row_id, key, created: true };
}

async function nextSourceIndex(channelId) {
  const row = await selectOne('SELECT COALESCE(MAX(source_index), 0) + 1 AS next_index FROM streams WHERE channel_id = ?', [channelId]);
  return row?.next_index || 1;
}

async function addStream(input) {
  const channel = await selectOne('SELECT id, code, name FROM channels WHERE code = ?', [input.channelCode]);
  if (!channel) throw new Error(`Unknown channel: ${input.channelCode}`);
  const streamedOn = normalize(input.streamedOn);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(streamedOn)) throw new Error('配信日は YYYY-MM-DD で入力してください');
  const lines = String(input.songsText || '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) throw new Error('曲リストが空です');

  const url = normalize(input.url);
  const title = normalize(input.title);
  const urlKey = url || `${channel.code}:${streamedOn}:${title}`;
  const sourceIndex = Number(input.sourceIndex) || await nextSourceIndex(channel.id);
  const now = todayIso();
  let stream = await selectOne(
    'SELECT id FROM streams WHERE channel_id = ? AND streamed_on = ? AND url_key = ?',
    [channel.id, streamedOn, urlKey],
  );
  if (stream) {
    const oldRows = await select('SELECT song_id FROM stream_songs WHERE stream_id = ? AND song_id IS NOT NULL', [stream.id]);
    for (const oldRow of oldRows) {
      await execute(
        `UPDATE song_channel_stats
         SET sing_count = CASE WHEN sing_count > 0 THEN sing_count - 1 ELSE 0 END,
             updated_at = ?
         WHERE song_id = ? AND channel_id = ?`,
        [now, oldRow.song_id, channel.id],
      );
    }
    await execute(
      'UPDATE streams SET source_index = ?, title = ?, url = ?, song_count = ? WHERE id = ?',
      [sourceIndex, title, url, lines.length, stream.id],
    );
    await execute('DELETE FROM stream_songs WHERE stream_id = ?', [stream.id]);
  } else {
    const meta = await execute(
      'INSERT INTO streams (channel_id, source_index, streamed_on, title, url, song_count, created_at, url_key) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [channel.id, sourceIndex, streamedOn, title, url, lines.length, now, urlKey],
    );
    stream = { id: meta.last_row_id };
  }

  const insertedSongs = [];
  for (let index = 0; index < lines.length; index += 1) {
    const parsed = splitSongLine(lines[index]);
    const song = await upsertSong(parsed.title, parsed.artist);
    await execute(
      'INSERT INTO stream_songs (stream_id, song_id, position, raw_text, title_snapshot, artist_snapshot, song_key_snapshot, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [stream.id, song.id, index + 1, parsed.raw, parsed.title, parsed.artist, song.key, now],
    );
    await execute(
      `INSERT INTO song_channel_stats (song_id, channel_id, sing_count, source_index, created_at, updated_at)
       VALUES (?, ?, 1, NULL, ?, ?)
       ON CONFLICT(song_id, channel_id) DO UPDATE SET
         sing_count = sing_count + 1,
         updated_at = excluded.updated_at`,
      [song.id, channel.id, now, now],
    );
    insertedSongs.push({ position: index + 1, title: parsed.title, artist: parsed.artist, created: song.created });
  }

  return { streamId: stream.id, channel: channel.code, streamedOn, songCount: insertedSongs.length, songs: insertedSongs };
}

function renderPage() {
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>夢川かなう 歌枠管理</title>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background: #f6fbff; color: #143045; }
    main { max-width: 980px; margin: 0 auto; padding: 28px 18px 52px; }
    h1 { margin: 0 0 18px; font-size: 26px; }
    label { display: grid; gap: 6px; font-weight: 700; }
    input, select, textarea { box-sizing: border-box; width: 100%; border: 1px solid #b7d8ea; border-radius: 6px; padding: 10px 12px; font: inherit; background: white; }
    textarea { min-height: 260px; resize: vertical; font-family: ui-monospace, "Cascadia Mono", monospace; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
    .panel { background: white; border: 1px solid #d4ebf7; border-radius: 8px; padding: 18px; box-shadow: 0 8px 24px rgba(39, 126, 171, .08); }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
    button { border: 0; border-radius: 6px; padding: 10px 14px; font-weight: 800; cursor: pointer; }
    .primary { background: #2398c7; color: white; }
    .ghost { background: #e9f6fc; color: #12506c; }
    .status { margin-top: 14px; white-space: pre-wrap; font-family: ui-monospace, "Cascadia Mono", monospace; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 14px; }
    th, td { border-bottom: 1px solid #d9edf7; padding: 8px; text-align: left; vertical-align: top; }
    .ok { color: #12683d; }
    .warn { color: #b06a00; }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <main>
    <h1>夢川かなう 歌枠管理</h1>
    <section class="panel">
      <div class="grid">
        <label>管理トークン<input id="token" type="password" autocomplete="current-password" placeholder="ADMIN_TOKENを設定した場合だけ入力"></label>
        <label>チャンネル<select id="channel"></select></label>
        <label>配信日<input id="streamedOn" type="date"></label>
        <label>枠番号<input id="sourceIndex" type="number" min="1" placeholder="空なら自動採番"></label>
        <label>配信タイトル<input id="title" type="text"></label>
        <label>URL<input id="url" type="url" placeholder="https://..."></label>
      </div>
      <label style="margin-top:14px">曲リスト<textarea id="songsText" placeholder="曲名 / アーティスト&#10;曲名 / アーティスト"></textarea></label>
      <div class="actions">
        <button class="ghost" id="preview">プレビュー</button>
        <button class="primary" id="submit">登録</button>
      </div>
      <div class="status" id="status"></div>
      <div id="previewBox"></div>
    </section>
  </main>
  <script>
    const $ = (id) => document.getElementById(id);
    const token = $('token');
    token.value = localStorage.getItem('adminToken') || '';
    token.addEventListener('input', () => localStorage.setItem('adminToken', token.value));
    $('streamedOn').valueAsDate = new Date();

    async function api(path, body) {
      const res = await fetch(path, {
        method: body ? 'POST' : 'GET',
        headers: { 'content-type': 'application/json', 'x-admin-token': token.value },
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      return data;
    }

    function formData() {
      return {
        channelCode: $('channel').value,
        streamedOn: $('streamedOn').value,
        sourceIndex: $('sourceIndex').value,
        title: $('title').value,
        url: $('url').value,
        songsText: $('songsText').value,
      };
    }

    function renderPreview(rows) {
      $('previewBox').innerHTML = '<table><thead><tr><th>#</th><th>曲</th><th>歌手</th><th>判定</th></tr></thead><tbody>' +
        rows.map(row => '<tr><td>' + row.position + '</td><td>' + escapeHtml(row.title) + '</td><td>' + escapeHtml(row.artist || '') + '</td><td class="' + (row.match === 'exact' || row.match === 'title' ? 'ok' : 'warn') + '">' + row.match + '</td></tr>').join('') +
        '</tbody></table>';
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    api('/api/channels').then(({ channels }) => {
      $('channel').innerHTML = channels.map(ch => '<option value="' + ch.code + '">' + ch.name + '</option>').join('');
    }).catch(error => $('status').textContent = error.message);

    $('preview').addEventListener('click', async () => {
      $('status').textContent = 'プレビュー中...';
      try {
        const data = await api('/api/preview-stream', formData());
        renderPreview(data.songs);
        $('status').textContent = data.songs.length + '曲を確認しました。';
      } catch (error) {
        $('status').textContent = error.message;
      }
    });

    $('submit').addEventListener('click', async () => {
      if (!confirm('この歌枠をD1に登録します。よろしいですか？')) return;
      $('status').textContent = '登録中...';
      try {
        const data = await api('/api/streams', formData());
        $('status').textContent = '登録しました: stream_id=' + data.streamId + ', ' + data.songCount + '曲';
        $('previewBox').innerHTML = '';
      } catch (error) {
        $('status').textContent = error.message;
      }
    });
  </script>
</body>
</html>`;
}

async function handle(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === 'GET' && url.pathname === '/') return html(res, renderPage());
    if (url.pathname.startsWith('/api/')) assertAdminToken(req);
    if (req.method === 'GET' && url.pathname === '/api/health') return json(res, 200, { ok: true });
    if (req.method === 'GET' && url.pathname === '/api/channels') return json(res, 200, { channels: await getChannels() });
    if (req.method === 'POST' && url.pathname === '/api/preview-stream') return json(res, 200, { songs: await previewStream(await readJson(req)) });
    if (req.method === 'POST' && url.pathname === '/api/streams') return json(res, 200, await addStream(await readJson(req)));
    json(res, 404, { error: 'Not found' });
  } catch (error) {
    json(res, error.status || 500, { error: error.message || String(error) });
  }
}

http.createServer(handle).listen(PORT, HOST, () => {
  console.log(`Admin server listening on http://${HOST}:${PORT}`);
  console.log('Expose it to your tailnet with: tailscale serve http://127.0.0.1:' + PORT);
});
