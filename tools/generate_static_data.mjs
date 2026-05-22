import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const REQUIRED_ENV = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'];

function normalize(value) {
  return String(value == null ? '' : value).trim().replace(/\s+/g, ' ').normalize('NFKC');
}

function todayIso() {
  return new Date().toISOString();
}

function monthKey(dateText) {
  return dateText ? String(dateText).slice(0, 7) : '';
}

function daysSince(dateText) {
  if (!dateText) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return Math.floor((today - date) / 86400000);
}

function inferGenre(title, artist) {
  const text = `${normalize(title)} ${normalize(artist)}`.toLowerCase();
  if (!text.trim()) return '未分類';
  if (/(夢川かなう|re:a project|react)/i.test(text)) return 'オリジナル';
  if (/(ディズニー|アナ|エルサ|ベル&ビースト|アラジン|ジャスミン|神田沙也加|松たか子|石井一孝|麻生かほ里|山寺宏一|伊東恵里|すずきまゆみ|レット・イット・ゴー|let it go|ホール・ニュー・ワールド|美女と野獣|パート・オブ・ユア・ワールド|生まれてはじめて|とびら開けて|アンダー・ザ・シー|輝く未来|リメンバー・ミー)/i.test(text)) return 'ディズニー';
  if (/(童謡|唱歌|ドリーミング|ハムちゃんず|白鳥英美子|藤岡藤巻|大橋のぞみ|合唱団|cosmos|うれしいひなまつり|たなばたさま|およげ！たいやきくん|アンパンマンのマーチ|ハム太郎|崖の上のポニョ|勇気100%|さんぽ|となりのトトロ|にじ|believe)/i.test(text)) return '童謡・唱歌';
  if (/(newjeans|iz\*one|yena|kara|少女時代|twice|ive|lesserafim|le sserafim|blackpink|bts|kep1er|aespa|illit|niziu)/i.test(text)) return 'K-POP';
  if (/(=love|fruits zipper|cutie street|神宿|戦慄かなの|松田聖子|松浦亜弥|国生さゆり|星街すいせい|b小町|femme fatale|buono|aiscream|新しい学校|超ときめき|ilife|サインはb|初恋サイダー|桃色片想い|バレンタイン・キッス|スマイルあげない|オトナブルー)/i.test(text)) return 'アイドル';
  if (/(初音ミク|鏡音|巡音|gumi|可不|flower|v flower|deco\*27|みきとp|n-buna|orangestar|かいりきベア|ナユタン星人|ピノキオピー|柊マグネタイト|kemu|じん|れるりり|wowaka|ハチ|neru|40mp|syudou|バルーン|ぬゆり|r sound design|aqu3ra|junky|電ポルp|koyori|香椎モイミ|すりぃ|kanaria|ayase|いよわ|ゆこぴ|稲葉曇|wotaku|164|sasakure|ツミキ|dateken|mitchie m|halyosy|doriko|niki|梅とら|chinozo|日向電工|iroha|samfree|とあ|一二三|mothy|蝶々p|nem|獅子志司|有機酸|傘村トータ|otetsu|黒うさp|のりp|ヤスオ|minato|柊キライ|煮ル果実|maretu|syudon|柊マグネタイト|はるまきごはん)/i.test(text)) return 'ボカロ';
  if (/(internet overdose|internet yamero|aiobahn|yunomi|picco|psyqui|tofubeats|nyankobrq|yuigot|garnidelia|極楽浄土|ready steady|g4l|ch4nge|プロセカ|アイマス|ラブライブ|シンデレラ|うまぴょい|お願い!シンデレラ)/i.test(text)) return 'ゲーム・キャラソン';
  if (/(名前のない怪物|残響散歌|優しい彗星|星間飛行|watch me|catch you catch me|祝福|スピラーレ|春擬き|おジャ魔女|青春コンプレックス|snow halation|残酷な天使|白金ディスコ|恋愛サーキュレーション|ムーンライト伝説|鏡面の波|i beg you|asphyxia|brave shine|炎|コネクト|不可思議のカルテ|少年よ我に帰れ|もうそう|ユーフォリア|love & roll|god knows|花ハ踊レヤ|sincerely|ライオン|ユメヲカケル|unravel|legend of mermaid|give it back|angelic angel|awakening harmony|sweets parade|this game|トライアングラー|stone ocean|オトメロディー|創聖のアクエリオン|花の唄|ダイアモンドクレバス|タッチ|don't say|サマータイムレコード|secret base|ninelie|bravely you|魂のルフラン|渡月橋|ぼなぺてぃーと|catch the moment|いけないボーダーライン|お願い!シンデレラ|うまぴょい|オリオンをなぞる|only my railgun|紅蓮の弓矢|プリキュア|ノーザンクロス|ミックスナッツ|光るなら|black shout|ようこそジャパリパーク|daydream café|回レ！雪月花|los! los! los!|ジョジョ|五等分の気持ち|crossing field|悪魔の子|勇者|アイドル \/ yoasobi|怪物|青のすみか)/i.test(text)) return 'アニソン';
  return 'J-POP';
}

async function d1(sql, params = []) {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_D1_DATABASE_ID}/query`;
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
  if (result?.success === false) throw new Error(`D1 SQL failed: ${JSON.stringify(result)}`);
  return result?.results || [];
}

function assignRanks(songs) {
  const sorted = [...songs].sort((a, b) => b.count - a.count);
  let previousCount = null;
  let previousRank = 0;
  sorted.forEach((song, index) => {
    if (previousCount !== null && song.count === previousCount) {
      song.rank = previousRank;
    } else {
      song.rank = index + 1;
      previousRank = song.rank;
    }
    previousCount = song.count;
  });
}

function deriveArtists(songs) {
  const byArtist = new Map();
  for (const song of songs) {
    const artist = song.artist || '(不明)';
    if (!byArtist.has(artist)) byArtist.set(artist, { artist, songs: [], totalCount: 0, songCount: 0 });
    const item = byArtist.get(artist);
    item.songs.push(song);
    item.totalCount += song.count;
    item.songCount += 1;
  }
  return Array.from(byArtist.values()).sort((a, b) => b.totalCount - a.totalCount);
}

function buildDataset(channel, tables) {
  const statsBySong = new Map(
    tables.song_channel_stats
      .filter((row) => row.channel_id === channel.id)
      .map((row) => [row.song_id, row]),
  );
  const artistsById = new Map(tables.artists.map((row) => [row.id, row]));
  const songsById = new Map(tables.songs.map((row) => [row.id, row]));
  const streamSongsByStreamId = new Map();
  for (const row of tables.stream_songs) {
    if (!streamSongsByStreamId.has(row.stream_id)) streamSongsByStreamId.set(row.stream_id, []);
    streamSongsByStreamId.get(row.stream_id).push(row);
  }
  for (const rows of streamSongsByStreamId.values()) rows.sort((a, b) => a.position - b.position);

  const streams = tables.streams
    .filter((row) => row.channel_id === channel.id)
    .map((stream) => {
      const date = stream.streamed_on;
      const songs = (streamSongsByStreamId.get(stream.id) || []).map((row) => {
        const song = songsById.get(row.song_id);
        return {
          key: song?.song_key || row.song_key_snapshot,
          raw: row.raw_text || '',
        };
      });
      const jsDate = new Date(`${date}T00:00:00`);
      return {
        index: stream.source_index || 0,
        channel: channel.code,
        dateRaw: date ? date.replaceAll('-', '/') : '',
        date,
        title: normalize(stream.title),
        url: stream.url || '',
        songCount: stream.song_count || songs.length,
        songs,
        monthKey: monthKey(date),
        year: date ? Number(date.slice(0, 4)) : null,
        month: date ? Number(date.slice(5, 7)) : null,
        dayOfWeek: Number.isNaN(jsDate.getTime()) ? null : jsDate.getDay(),
      };
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  const songs = Array.from(statsBySong.values()).map((stat) => {
    const song = songsById.get(stat.song_id);
    const artist = artistsById.get(song?.artist_id);
    const displayKey = normalize(song?.display_key || '');
    const genre = normalize(song?.genre || '') || inferGenre(song?.title, artist?.name);
    return {
      sourceIndex: stat.source_index || 0,
      title: normalize(song?.title),
      artist: normalize(artist?.name),
      count: stat.sing_count || 0,
      key: song?.song_key || '',
      displayKey,
      keyText: displayKey,
      genre,
      genreText: genre,
      channels: [channel.code],
      dates: [],
      streamRefs: [],
      lastSung: null,
      firstSung: null,
      daysSinceLast: null,
      rank: 0,
    };
  });

  assignRanks(songs);
  const total = songs.reduce((sum, song) => sum + song.count, 0);
  const newestStream = streams[0]?.date || null;
  return {
    stats: {
      title: channel.name,
      updateText: newestStream ? `更新日：${newestStream.replaceAll('-', '/')}` : '',
      updateDate: newestStream,
      total,
      repertoire: songs.length,
      streams: streams.length,
      avgPerStream: streams.length ? Math.round((total / streams.length) * 10) / 10 : 0,
      channelId: channel.code,
      channelLabel: channel.name,
      keyPublished: tables.songs.some((row) => normalize(row.display_key || '')),
    },
    songs,
    streams,
    orphans: [],
    artists: deriveArtists(songs),
  };
}

function mergeChannels(datasets) {
  const songMap = new Map();
  const streams = [];
  for (const dataset of datasets) {
    for (const song of dataset.songs) {
      const existing = songMap.get(song.key);
      if (existing) {
        existing.count += song.count;
        existing.channels = Array.from(new Set([...existing.channels, ...song.channels]));
        if (!existing.displayKey && song.displayKey) {
          existing.displayKey = song.displayKey;
          existing.keyText = song.displayKey;
        }
        if (!existing.genre || existing.genre === '未分類') {
          existing.genre = song.genre || existing.genre;
          existing.genreText = existing.genre;
        }
      } else {
        songMap.set(song.key, { ...song, channels: [...song.channels], dates: [], streamRefs: [] });
      }
    }
    streams.push(...dataset.streams);
  }
  streams.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const songs = Array.from(songMap.values());
  assignRanks(songs);
  const total = datasets.reduce((sum, dataset) => sum + dataset.stats.total, 0);
  const newestStream = streams[0]?.date || null;
  return {
    stats: {
      title: '全期間',
      updateText: newestStream ? `更新日：${newestStream.replaceAll('-', '/')}` : '',
      updateDate: newestStream,
      total,
      repertoire: songs.length,
      streams: datasets.reduce((sum, dataset) => sum + dataset.stats.streams, 0),
      avgPerStream: streams.length ? Math.round((total / streams.length) * 10) / 10 : 0,
      channelId: 'all',
      channelLabel: '全期間',
      keyPublished: datasets.some((dataset) => dataset.stats.keyPublished),
    },
    songs,
    streams,
    orphans: [],
    artists: deriveArtists(songs),
  };
}

async function buildStaticSiteData() {
  const [channels, artists, songs, streams, streamSongs, songChannelStats] = await Promise.all([
    d1('SELECT * FROM channels ORDER BY sort_order ASC, id ASC'),
    d1('SELECT * FROM artists ORDER BY id ASC'),
    d1('SELECT * FROM songs ORDER BY id ASC'),
    d1('SELECT * FROM streams ORDER BY channel_id ASC, streamed_on DESC, id ASC'),
    d1('SELECT * FROM stream_songs ORDER BY stream_id ASC, position ASC, id ASC'),
    d1('SELECT * FROM song_channel_stats ORDER BY channel_id ASC, song_id ASC'),
  ]);
  const tables = { artists, songs, streams, stream_songs: streamSongs, song_channel_stats: songChannelStats };
  const channelDatasets = {};
  for (const channel of channels) channelDatasets[channel.code] = buildDataset(channel, tables);
  return {
    channels: channelDatasets,
    combined: mergeChannels(Object.values(channelDatasets)),
  };
}

async function main() {
  const data = await buildStaticSiteData();
  const generatedAt = todayIso();
  const split = {
    meta: {
      generatedAt,
      channels: Object.fromEntries(Object.entries(data.channels).map(([code, dataset]) => [code, dataset.stats])),
      combined: data.combined.stats,
    },
    songs: {
      generatedAt,
      channels: Object.fromEntries(Object.entries(data.channels).map(([code, dataset]) => [code, dataset.songs])),
    },
    streams: {
      generatedAt,
      channels: Object.fromEntries(Object.entries(data.channels).map(([code, dataset]) => [code, dataset.streams])),
    },
  };
  const outDir = path.join(ROOT, 'docs', 'data');
  fs.mkdirSync(outDir, { recursive: true });
  const files = {};
  for (const [name, value] of Object.entries(split)) {
    const outPath = path.join(outDir, `${name}.json`);
    const body = `${JSON.stringify(value)}\n`;
    fs.writeFileSync(outPath, body, 'utf8');
    files[`docs/data/${name}.json`] = Buffer.byteLength(body);
  }
  console.log(JSON.stringify({
    ok: true,
    files,
    bytes: Object.values(files).reduce((sum, size) => sum + size, 0),
    generatedAt,
    stats: split.meta.combined,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
