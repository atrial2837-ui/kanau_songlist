export function normalize(value) {
  return String(value == null ? '' : value).trim().replace(/\s+/g, ' ').normalize('NFKC');
}

export function normalizedKey(value) {
  return normalize(value).toLowerCase();
}

export function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function escapeRegExp(value) {
  return String(value == null ? '' : value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function parseDateIso(text) {
  if (!text) return null;
  if (text instanceof Date) {
    if (Number.isNaN(text.getTime())) return null;
    const copy = new Date(text.getTime());
    copy.setHours(0, 0, 0, 0);
    return copy;
  }
  const m = String(text).trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  d.setHours(0, 0, 0, 0);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function monthKey(date) {
  if (!date) return '';
  if (date instanceof Date) {
    if (Number.isNaN(date.getTime())) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  }
  return String(date).trim().slice(0, 7);
}

export function daysSince(date, today) {
  if (!date) return null;
  const toMidnight = (value) => {
    if (value instanceof Date) {
      const copy = new Date(value.getTime());
      copy.setHours(0, 0, 0, 0);
      return copy;
    }
    const parsed = new Date(`${String(value).trim()}T00:00:00`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  };
  const d = toMidnight(date);
  const t = toMidnight(today);
  if (!d || !t) return null;
  return Math.floor((t - d) / 86400000);
}

export function formatDateRaw(date) {
  const d = parseDateIso(date);
  if (!d) return '—';
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}

export function formatMonth(date) {
  const d = parseDateIso(date);
  if (!d) return '—';
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export function daysClass(daysSinceValue) {
  if (daysSinceValue == null) return 'never';
  if (daysSinceValue <= 30) return 'fresh';
  if (daysSinceValue >= 180) return 'stale';
  return '';
}

export function buildSongKey(title, artist) {
  const normalizedTitle = normalizedKey(title);
  const rawArtist = normalizedKey(artist);
  const normalizedArtist = rawArtist === normalizedKey('(不明)') ? '' : rawArtist;
  return `${normalizedTitle}__${normalizedArtist}`;
}

export function withDenseRank(songs) {
  const sorted = songs
    .map((song, originalIndex) => ({ ...song, _originalIndex: originalIndex }))
    .sort((a, b) => b.count - a.count);
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
  return sorted.map(({ _originalIndex, ...rest }) => rest);
}

export function deriveArtists(songs) {
  const byArtist = new Map();
  for (const song of songs) {
    const artist = song.artist || '(不明)';
    if (!byArtist.has(artist)) {
      byArtist.set(artist, { artist, songs: [], totalCount: 0, songCount: 0 });
    }
    const item = byArtist.get(artist);
    item.songs.push(song);
    item.totalCount += song.count;
    item.songCount += 1;
  }
  return Array.from(byArtist.values()).sort((a, b) => b.totalCount - a.totalCount);
}

export function inferStatsTags(song) {
  const tags = [];
  if (song.displayKey) tags.push('キー確認済み');
  if ((song.count ?? 0) >= 15) tags.push('殿堂入り');
  if ((song.count ?? 0) >= 10) tags.push('定番');
  if ((song.count ?? 0) >= 5) tags.push('よく歌う');
  if ((song.count ?? 0) <= 1) tags.push('レア');
  if ((song.count ?? 0) > 1 && (song.count ?? 0) <= 3) tags.push('準レア');
  if (song.daysSinceLast != null) {
    if (song.daysSinceLast >= 365) tags.push('超久しぶり');
    if (song.daysSinceLast >= 180) tags.push('久しぶり');
    if (song.daysSinceLast >= 90) tags.push('やや久しぶり');
    if (song.daysSinceLast <= 7) tags.push('超最近');
    if (song.daysSinceLast <= 30) tags.push('最近');
  }
  if (!song.lastSung) tags.push('歌ったことない');
  return tags;
}

export function inferGenreMoodTags(genre) {
  const g = (genre || '').trim();
  switch (g) {
    case 'ボカロ': return ['ボカロ', 'エレクトロ'];
    case 'アニソン': return ['アニソン', '盛り上がる'];
    case 'J-POP': return ['J-POP'];
    case 'K-POP': return ['K-POP', 'かわいい', 'ファンキー'];
    case 'アイドル': return ['アイドル', 'かわいい', '明るい', '盛り上がる'];
    case 'ディズニー': return ['ディズニー', 'かわいい', '明るい', 'ファミリー'];
    case '童謡・唱歌': return ['童謡', '懐かしい', 'ノスタルジック', '和風'];
    case 'ゲーム・キャラソン': return ['ゲーム', 'かっこいい', '盛り上がる'];
    case 'オリジナル': return ['オリジナル', 'chill'];
    default: return [];
  }
}

export function inferGenreTags(songOrGenre) {
  const genre = typeof songOrGenre === 'string' ? songOrGenre : songOrGenre?.genre;
  return inferGenreMoodTags(genre || '');
}

export function inferSeasonTags(song) {
  const text = `${song.title || ''} ${song.artist || ''}`.toLowerCase();
  const tags = [];
  const push = (name, re) => { if (re.test(text)) tags.push(name); };
  push('春', /春|桜|さくら|卒業|花に亡霊|春泥棒|桜ノ雨|桜流し|チェリー|花見|入学|新学期/);
  push('夏', /夏|サマー|花火|海|青と夏|夏色|君と夏フェス|夏祭り|金魚花火|打上花火|向日葵|ひまわり|水着|夕立/);
  push('秋', /秋|紅葉|月|十五夜|金木犀|晩餐歌|食欲|読書|運動会|ハロウィン/);
  push('冬', /冬|雪|クリスマス|白い|粉雪|スノー|snow|ジングル|メリクリ|雪の華|冬至|除夜|お正月|年末/);
  push('雨', /雨|レイン|rain|傘|カプチーノ|rain stops|梅雨|秋雨|しぐれ/);
  push('夜', /夜|月|星|スター|midnight|ナイト|夜明け|夜に|夜もすがら|ベテルギウス|深夜|宵|黄昏|夕暮れ|月明かり/);
  push('朝', /朝|モーニング|morning|日の出|朝日|目覚め|おはよう|早朝|夜明け|暁/);
  push('恋愛', /恋|愛|好き|ラブ|love|告白|プロポーズ|ダーリン|貴方|あなた|恋人|こい|あい/);
  push('別れ', /別れ|さよなら|goodbye|farewell|離|わかれ|袂/);
  push('イベント', /バレンタイン|クリスマス|ハロウィン|誕生日|birthday|ジングル|チョコ|記念日|お祝い|パーティ/);
  return Array.from(new Set(tags));
}

export function inferMoodTags(song) {
  const text = `${song.title || ''} ${song.artist || ''} ${song.genre || ''}`.toLowerCase();
  const tags = [];
  const push = (name, re) => { if (re.test(text)) tags.push(name); };
  push('盛り上がる', /ロキ|ヒバナ|チュルリラ|天使|お願い|革命|メルト|アイドル|うまぴょい|サンバ|夏色|おジャ魔女|only my railgun|internet|ガチャ|フィーバー|パーティ|cheer|sing|dance|jump|yeah|wow/);
  push('しっとり', /雨|夜|月|花に亡霊|少女レイ|たばこ|猫|lemon|裸の心|水平線|勿忘|ベテルギウス|糸|奏|炎|雪の華|夕暮れ|黄昏|after the rain|静|しず|落ち着/);
  push('かわいい', /可愛|かわいい|kawaii|恋愛サーキュレーション|白金ディスコ|だだだだ|だいしきゅう|きゅうくらりん|おじゃま虫|バレンタイン|sweets parade|ぽっぴっぽ|ふわふわ|ぷにぷに|marionette|ぴょん|にゃん|わん|きゅん/);
  push('かっこいい', /残響散歌|brave shine|i beg you|名前のない怪物|unravel|asphyxia|踊|怪物|インフェルノ|革命|ch4nge|g4l|overdose|紅蓮華|ギラギラ|ビッチ|最強|かっこ|cool|かっけ/);
  push('懐かしい', /secret base|butter-fly|タッチ|ムーンライト伝説|god knows|創聖|アクエリオン|ラムのラブソング|チェリー|そばかす|残酷な天使|未来への咆哮|17才|夏休み|あの日|思い出|なつか|懐|昔|子供|幼い|あの頃|青春|卒業|同窓|同級生/);
  push('chill', /chill|チル|のんびり|リラックス|ほっこり|まったり|宵|夕凪|お昼寝|ひなたぼっこ|カフェ|lounge|ambient|downtempo|ballad|眠|ねむ|おやすみ|ゆらゆら|ふわ|そよ風|星屑|夜空|満月|ミッドナイト|midnight|lofi|lo-fi|癒|いやし|安ら|穏や|のどか|落着|peace|calm|serene|そよ|ぼんやり|珈琲|紅茶|ティー|窓辺|本読み|読書|散歩|公園|猫|子猫|ぬいぐるみ|ブランケット|毛布|キャンドル|香り|アロマ|ハーブ|森林|林檎|林/);
  push('激しい', /激しい|アグレッシブ|aggressive|パンク|punk|メタル|metal|スクリーム|scream|叫|怒|暴|war|battle|戦|fight|beat|ドラムンバー|drum.?n.?bass|dubstep|hardcore|テクノ|techno|ヘドバン|headbang|shred|速|疾|猛|烈/);
  push('ミステリアス', /ミステリ|mystery|怪談|幽|呪|魔女|wizard|magic|魔法|幻想|ファンタジー|fantasy|異世界|ダーク|dark|闇|shadow|phantom|ゴシック|gothic|ヴィクトリアン|謎|なぞ|秘密|隠|迷路|迷宮|labyrinth|ピラミッド|古代|魔術|ウィザード|ドラゴン|竜|fairy|精霊|ゴースト|ghost/);
  push('ノスタルジック', /ノスタルジ|nostalg|レトロ|retro|昭和|平成|青春|少年|少女|初恋|あの頃|昔|memory|メモリー|タイムカプセル|年季|classical|クラシック|ジャズ|jazz|往年|昔日|追憶|reminisce|セピア|sepia|analog|レコード|蓄音器/);
  push('エモい', /エモ|emo|せつない|切ない|胸が痛|泣|涙|涙雨|カラス|夕焼け|卒業|別れ|さよなら|goodbye|farwell|悲|哀|愁|lonely|ロンリー|さびしい|孤独|一人|独り|雨空|曇り|灰色|グレイ/);
  push('ダーク', /ダーク|dark|黒|夜|闇|デス|death|死|墓|墓場|ドクロ|骸骨|血|ブラッド|blood|hell|地獄|悪魔|demon|devil|サタン|カオス|chaos|abyss|奈落|深淵|終末|apocalypse|破滅|滅|腐|毒|venom|蛇|サーペント/);
  push('ファンキー', /ファンキー|funk|ファンク|groove|グルーヴ|disco|ディスコ|ソウル|soul|rb|r&b|ラテン|latin|bossa|ボサノバ|ska|スカ|reggae|レゲエ|swing|スウィング|ジャム|jam|ラグタイム|ragtime/);
  push('甘い', /甘|あま|ハニー|honey|シュガ|sugar|キャンディ|candy|チョコ|choco|バニラ|vanilla|クリーム|cream|デザート|dessert|お菓子|ケーキ|cake|恋|ラブ|love|ダーリン|darling|ハグ|hug|kiss|キス|チュー|微笑|ほほえ|にっこり|デート|ロマンス|romance|プロポーズ|結婚|指輪/);
  push('セクシー', /セクシー|sexy|セクシ|エロ|ero|色|色艶|艶|誘惑|くびれ|ヒップ|ラブシーン|ナイト|night|ムーンライト|midnight|after dark|アダルト|adult|hot|ホット|spicy|スパイス|毒|venom|棘|トゲ|痛|いた/);
  push('和風', /和風|日本|大和|桜|富士|侍|忍者|花見|茶道|お正月|七夕|盆踊り|祭|和太鼓|琴|尺八|三味線|演歌|enka|大和魂|wa|着物|浴衣|花火|提灯|神社|鳥居|風鈴|線香花火|金魚|鯉のぼり|お月見|紅葉|雪見|炉端|畳|障子|浮世絵|武士|刀|扇子|折り紙|千代紙/);
  push('エレクトロ', /エレクトロ|electro|エレクトロニカ|electronic|シンセ|synth|テクノ|techno|edm|house|トランス|trance|ビート|beat|bass|ベース|dubstep|dnb|ドラムンバー|remix|リミックス|dj|ディジェー|クラブ|club|rave|レイヴ|サイバー|cyber|デジタル|digital|glitch|グリッチ/);
  push('アコースティック', /アコースティック|acoustic|アコギ|アコースティックギター|ピアノ|piano|ヴァイオリン|violin|チェロ|cello|フルート|flute|クラリネット|オーケストラ|orchestra|ストリング|string|生楽器|弾き語り|camp|キャンプ|焚き火|キャンプファイヤー|星空|広野|草原|牧場|country|カントリー|folk|フォーク/);
  if (!tags.length && /ボカロ|アニソン|アイドル/.test(text)) tags.push(song.genre || '');
  return Array.from(new Set(tags.filter(Boolean)));
}

export function inferCompositeTags(existingTags) {
  const tagSet = new Set(existingTags.map(t => t.toLowerCase()));
  const composite = [];
  if (tagSet.has('chill') && tagSet.has('夜')) composite.push('夜chill');
  if (tagSet.has('chill') && tagSet.has('雨')) composite.push('雨chill');
  if (tagSet.has('chill') && tagSet.has('朝')) composite.push('朝chill');
  if (tagSet.has('しっとり') && tagSet.has('恋愛')) composite.push('ラブソング');
  if (tagSet.has('しっとり') && tagSet.has('別れ')) composite.push('失恋ソング');
  if (tagSet.has('エモい') && tagSet.has('恋愛')) composite.push('エモラブ');
  if (tagSet.has('エモい') && tagSet.has('別れ')) composite.push('エモ別れ');
  if (tagSet.has('盛り上がる') && tagSet.has('夏')) composite.push('夏フェス');
  if (tagSet.has('盛り上がる') && tagSet.has('イベント')) composite.push('パーティソング');
  if (tagSet.has('かわいい') && tagSet.has('春')) composite.push('春のかわいい曲');
  if (tagSet.has('かわいい') && tagSet.has('恋愛')) composite.push('キュンソング');
  if (tagSet.has('懐かしい') && tagSet.has('春')) composite.push('春の思い出');
  if (tagSet.has('懐かしい') && tagSet.has('夏')) composite.push('夏の思い出');
  if (tagSet.has('和風') && tagSet.has('冬')) composite.push('日本の冬');
  if (tagSet.has('和風') && tagSet.has('春')) composite.push('日本の春');
  if (tagSet.has('ディズニー') && tagSet.has('恋愛')) composite.push('ディズニーラブ');
  if (tagSet.has('k-pop') && tagSet.has('かわいい')) composite.push('K-POPかわいい');
  if (tagSet.has('k-pop') && tagSet.has('ファンキー')) composite.push('K-POPダンス');
  if (tagSet.has('定番') && tagSet.has('盛り上がる')) composite.push('定番アンセム');
  if (tagSet.has('定番') && tagSet.has('しっとり')) composite.push('定番バラード');
  if ((tagSet.has('久しぶり') || tagSet.has('超久しぶり')) && tagSet.has('懐かしい')) composite.push('久しぶりの名曲');
  if (tagSet.has('アコースティック') && tagSet.has('恋愛')) composite.push('アコースティックラブ');
  if (tagSet.has('アコースティック') && tagSet.has('朝')) composite.push('モーニングアコースティック');
  if (tagSet.has('エレクトロ') && tagSet.has('盛り上がる')) composite.push('エレクトロダンス');
  if (tagSet.has('ダーク') && tagSet.has('ミステリアス')) composite.push('ダークミステリー');
  if (tagSet.has('ファンキー') && tagSet.has('夏')) composite.push('サマーファンク');
  if (tagSet.has('セクシー') && tagSet.has('夜')) composite.push('ナイトグルーヴ');
  if (tagSet.has('甘い') && tagSet.has('かわいい')) composite.push('甘かわ');
  if (tagSet.has('ノスタルジック') && tagSet.has('秋')) composite.push('秋の追憶');
  return composite;
}

export function inferCompoundTags(songOrTags) {
  if (Array.isArray(songOrTags)) return inferCompositeTags(songOrTags);
  return inferCompositeTags([
    ...(songOrTags?.moodTags || []),
    ...(songOrTags?.seasonTags || []),
    ...(songOrTags?.statsTags || []),
    ...(songOrTags?.genreTags || []),
  ]);
}

export function singerTags(song) {
  const tags = [];
  if (song.displayKey) tags.push('キー確認済み');
  if ((song.count ?? 0) >= 10) tags.push('定番');
  if (song.daysSinceLast != null && song.daysSinceLast >= 180) tags.push('久しぶり候補');
  if ((song.count ?? 0) <= 1) tags.push('レア');
  return tags;
}

export function trendLabel(song) {
  if (!song.lastSung) return '履歴未確認';
  if (song.daysSinceLast != null && song.daysSinceLast <= 30) return '最近';
  if (song.daysSinceLast != null && song.daysSinceLast >= 365) return '超久しぶり';
  if (song.daysSinceLast != null && song.daysSinceLast >= 180) return '久しぶり';
  if ((song.count ?? 0) <= 1) return 'レア';
  if ((song.count ?? 0) >= 10) return '定番';
  return '通常';
}

export function inferAllTags(song) {
  const allTags = [];
  const statsTags = inferStatsTags(song);
  const genreTags = inferGenreTags(song);
  const seasonTags = inferSeasonTags(song);
  const moodTags = inferMoodTags(song);
  allTags.push(...statsTags);
  allTags.push(...genreTags);
  allTags.push(...seasonTags);
  allTags.push(...moodTags);
  const compoundTags = inferCompositeTags(allTags);
  allTags.push(...compoundTags);
  const tags = Array.from(new Set(allTags.filter(Boolean)));
  tags.statsTags = statsTags;
  tags.genreTags = genreTags;
  tags.seasonTags = seasonTags;
  tags.moodTags = moodTags;
  tags.compoundTags = compoundTags;
  return tags;
}

export const GENRE_LIST = Object.freeze([
  'オリジナル',
  'ディズニー',
  '童謡・唱歌',
  'K-POP',
  'アイドル',
  'ボカロ',
  'ゲーム・キャラソン',
  'アニソン',
  'J-POP',
  '未分類',
]);

const FIELD_FILTER_RE = /(?<key>title|artist|genre|tag|mood|season|key|count|last|days)\s*(?<op>:|<=|>=|=|<|>)\s*(?<val>"[^"]*"|\S+)/gi;

export function parseQuery(raw) {
  const filters = [];
  let rest = raw || '';
  rest = rest.replace(FIELD_FILTER_RE, (_m, key, op, val) => {
    let v = val;
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    filters.push({ key: key.toLowerCase(), op: op || ':', val: v });
    return ' ';
  });
  rest = applyNaturalLanguageFilters(rest, filters).trim().replace(/\s+/g, ' ');
  return { tokens: rest ? rest.split(' ') : [], filters };
}

function applyNaturalLanguageFilters(raw, filters) {
  let rest = raw || '';
  const before = filters.length;
  for (const { label, patterns } of NATURAL_GENRES) {
    for (const pattern of patterns) {
      if (!pattern.test(rest)) continue;
      addFilter(filters, 'genre', ':', label);
      rest = rest.replace(pattern, ' ');
      break;
    }
  }
  for (const rule of NATURAL_PRIORITY_RULES) {
    if (!rule.pattern.test(rest)) continue;
    addFilter(filters, rule.key, rule.op, rule.val);
    rest = rest.replace(rule.pattern, ' ');
  }
  for (const { key, label, patterns } of NATURAL_FACETS) {
    for (const pattern of patterns) {
      if (!pattern.test(rest)) continue;
      addFilter(filters, key, ':', label);
      rest = rest.replace(pattern, ' ');
      break;
    }
  }
  for (const rule of NATURAL_RULES) {
    if (!rule.pattern.test(rest)) continue;
    addFilter(filters, rule.key, rule.op, rule.val);
    rest = rest.replace(rule.pattern, ' ');
  }
  if (filters.length > before) {
    rest = rest
      .replace(/[、。]/g, ' ')
      .replace(/\b(の|な|で|を|が|に|は|だけ|から|曲|楽曲)\b/g, ' ')
      .replace(/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+/g, ' ')
      .replace(/(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/g, ' ');
    if (/^(の|な|で|を|が|に|は|だけ|から|曲|楽曲)+$/.test(rest.replace(/\s+/g, ''))) rest = ' ';
  }
  return rest;
}

function addFilter(filters, key, op, val) {
  if (filters.some((filter) => filter.key === key && filter.op === op && filter.val === val)) return;
  filters.push({ key, op, val });
}

const NATURAL_GENRES = [
  ...GENRE_LIST.map((genre) => ({
    label: genre,
    patterns: [new RegExp(escapeRegExp(normalize(genre)), 'i')],
  })),
  { label: 'ボカロ', patterns: [/ボーカロイド/i, /vocaloid/i] },
  { label: 'アニソン', patterns: [/アニメソング/i, /アニメ曲/i] },
  { label: 'J-POP', patterns: [/jpop/i, /邦楽/i] },
];

const NATURAL_PRIORITY_RULES = [
  { pattern: /(1週間以内|7日以内|超最近)/i, key: 'last', op: ':', val: 'fresh' },
  { pattern: /(15回以上|殿堂入り)/i, key: 'count', op: '>=', val: '15' },
  { pattern: /(3回以下|準レア)/i, key: 'count', op: '<=', val: '3' },
];

const NATURAL_FACETS = [
  { key: 'mood', label: 'しっとり', patterns: [/しっとり/i, /バラード/i, /落ち着(い|く)/i, /静か/i, /泣ける/i] },
  { key: 'mood', label: '明るい', patterns: [/明るい/i, /元気/i, /楽しい/i, /盛り上が(る|り)/i, /アップテンポ/i] },
  { key: 'mood', label: 'かわいい', patterns: [/かわいい/i, /可愛い/i, /キュート/i] },
  { key: 'mood', label: 'かっこいい', patterns: [/かっこいい/i, /格好いい/i, /クール/i, /ロック/i] },
  { key: 'mood', label: '切ない', patterns: [/切ない/i, /せつない/i, /エモい/i, /エモ/i] },
  { key: 'mood', label: 'chill', patterns: [/chill/i, /チル/i, /のんびり/i, /リラックス/i, /ほっこり/i, /まったり/i] },
  { key: 'mood', label: '激しい', patterns: [/激しい/i, /アグレッシブ/i, /パンク/i, /メタル/i, /スクリーム/i, /叫ぶ/i] },
  { key: 'mood', label: 'ミステリアス', patterns: [/ミステリ/i, /怪談/i, /幽霊/i, /魔女/i, /魔法/i, /幻想/i] },
  { key: 'mood', label: 'ノスタルジック', patterns: [/ノスタルジ/i, /レトロ/i, /昭和/i, /平成/i, /青春/i, /初恋/i, /あの頃/i] },
  { key: 'mood', label: 'エモい', patterns: [/エモい/i, /エモ/i, /胸が痛/i, /涙/i, /夕焼け/i, /卒業/i, /別れ/i, /さよなら/i] },
  { key: 'mood', label: 'ダーク', patterns: [/ダーク/i, /闇/i, /地獄/i, /悪魔/i, /カオス/i] },
  { key: 'mood', label: 'ファンキー', patterns: [/ファンキー/i, /ファンク/i, /グルーヴ/i, /ディスコ/i, /ソウル/i] },
  { key: 'mood', label: '甘い', patterns: [/甘い/i, /ハニー/i, /シュガー/i, /キャンディ/i, /チョコ/i, /バニラ/i] },
  { key: 'mood', label: 'セクシー', patterns: [/セクシー/i, /セクシ/i, /エロ/i, /色っぽい/i, /誘惑/i] },
  { key: 'mood', label: '和風', patterns: [/和風/i, /日本風/i, /大和/i, /桜/i, /侍/i, /忍者/i, /演歌/i] },
  { key: 'mood', label: 'エレクトロ', patterns: [/エレクトロ/i, /エレクトロニカ/i, /シンセ/i, /テクノ/i, /edm/i] },
  { key: 'mood', label: 'アコースティック', patterns: [/アコースティック/i, /アコギ/i, /ピアノ/i, /ヴァイオリン/i, /弾き語り/i] },
  { key: 'season', label: '春', patterns: [/春/i, /桜/i, /卒業/i] },
  { key: 'season', label: '夏', patterns: [/夏/i, /海/i, /花火/i] },
  { key: 'season', label: '秋', patterns: [/秋/i] },
  { key: 'season', label: '冬', patterns: [/冬/i, /雪/i, /クリスマス/i] },
  { key: 'tag', label: 'キー確認済み', patterns: [/キー\s*(確認済み|あり|有り|公開|わかる|分かる)/i] },
  { key: 'tag', label: '定番', patterns: [/定番/i] },
  { key: 'tag', label: '久しぶり候補', patterns: [/久しぶり候補/i] },
  { key: 'tag', label: 'レア', patterns: [/レア/i] },
  { key: 'tag', label: '殿堂入り', patterns: [/殿堂入り/i] },
  { key: 'tag', label: 'よく歌う', patterns: [/よく歌う/i, /よく歌っている/i] },
  { key: 'tag', label: '準レア', patterns: [/準レア/i] },
  { key: 'tag', label: '超久しぶり', patterns: [/超久しぶり/i, /1年以上/i, /365日以上/i] },
  { key: 'tag', label: 'やや久しぶり', patterns: [/やや久しぶり/i, /90日以上/i, /3ヶ月以上/i] },
  { key: 'tag', label: '超最近', patterns: [/超最近/i, /1週間以内/i, /7日以内/i] },
  { key: 'tag', label: '歌ったことない', patterns: [/歌ったことない/i, /未歌唱/i, /初めて/i] },
  { key: 'tag', label: 'ラブソング', patterns: [/ラブソング/i, /恋愛ソング/i, /愛の歌/i] },
  { key: 'tag', label: '失恋ソング', patterns: [/失恋ソング/i, /別れソング/i] },
  { key: 'tag', label: '夏フェス', patterns: [/夏フェス/i, /夏祭りソング/i] },
  { key: 'tag', label: 'パーティソング', patterns: [/パーティソング/i, /パーティー/i] },
  { key: 'tag', label: 'キュンソング', patterns: [/キュンソング/i, /キュン/i, /ときめき/i] },
  { key: 'tag', label: '定番アンセム', patterns: [/定番アンセム/i, /全員で歌/i, /大合唱/i] },
  { key: 'tag', label: '定番バラード', patterns: [/定番バラード/i] },
  { key: 'tag', label: '久しぶりの名曲', patterns: [/久しぶりの名曲/i] },
  { key: 'tag', label: '夜chill', patterns: [/夜chill/i, /ナイトチル/i] },
  { key: 'tag', label: '朝chill', patterns: [/朝chill/i, /モーニングチル/i] },
  { key: 'tag', label: 'エモラブ', patterns: [/エモラブ/i] },
  { key: 'tag', label: 'エレクトロダンス', patterns: [/エレクトロダンス/i] },
  { key: 'key', label: '+1', patterns: [/\+1/i, /プラス1/i] },
  { key: 'key', label: '+2', patterns: [/\+2/i, /プラス2/i] },
  { key: 'key', label: '+3', patterns: [/\+3/i, /プラス3/i] },
  { key: 'key', label: '-1', patterns: [/-1/i, /マイナス1/i] },
  { key: 'key', label: '-2', patterns: [/-2/i, /マイナス2/i] },
  { key: 'key', label: '-3', patterns: [/-3/i, /マイナス3/i] },
];

const NATURAL_RULES = [
  { pattern: /最近\s*(歌っ?て)?\s*(いない|ない|なさそう|なさげ)/i, key: 'days', op: '>', val: '30' },
  { pattern: /しばらく\s*(歌っ?て)?\s*(いない|ない)/i, key: 'days', op: '>', val: '30' },
  { pattern: /(久しぶり|久々|半年以上|180日以上|長く\s*歌っ?て\s*(いない|ない))/i, key: 'last', op: ':', val: 'stale' },
  { pattern: /(最近\s*(歌った|歌ってる|歌われた)|30日以内)/i, key: 'last', op: ':', val: 'fresh' },
  { pattern: /(履歴未確認|未歌唱|歌ったこと\s*(が)?\s*ない)/i, key: 'last', op: ':', val: 'never' },
  { pattern: /(定番|よく歌う|よく歌っている)/i, key: 'count', op: '>=', val: '8' },
  { pattern: /(レア|あまり歌っていない|あまり歌わない)/i, key: 'count', op: '<=', val: '2' },
  { pattern: /(10回以上|10回超え|たくさん歌)/i, key: 'count', op: '>=', val: '10' },
  { pattern: /(5回以下|5回以内|少なめ)/i, key: 'count', op: '<=', val: '5' },
  { pattern: /(100日以上|3ヶ月以上|半年以上)\s*(歌っ?て)?\s*(いない|ない)/i, key: 'days', op: '>', val: '100' },
  { pattern: /(1週間以内|7日以内|超最近)/i, key: 'last', op: ':', val: 'fresh' },
  { pattern: /(15回以上|殿堂入り)/i, key: 'count', op: '>=', val: '15' },
  { pattern: /(3回以下|準レア)/i, key: 'count', op: '<=', val: '3' },
  { pattern: /(2回以下|2回以内)/i, key: 'count', op: '<=', val: '2' },
];

export function compareNumeric(a, op, b) {
  switch (op) {
    case '>': return a > b;
    case '<': return a < b;
    case '>=': return a >= b;
    case '<=': return a <= b;
    case '=':
    case ':': return a == b;
    default: return true;
  }
}

export function applyFieldFilters(songs, filters) {
  return songs.filter((song) => {
    for (const f of filters) {
      const v = f.val;
      switch (f.key) {
        case 'title':
          if (!normalizedKey(song.title).includes(normalizedKey(v))) return false;
          break;
        case 'artist':
          if (!normalizedKey(song.artist).includes(normalizedKey(v))) return false;
          break;
        case 'genre':
          if (!normalizedKey(song.genreText || song.genre).includes(normalizedKey(v))) return false;
          break;
        case 'key':
          if (!normalizedKey(song.keyText).split(/\s+/).includes(normalizedKey(v))) return false;
          break;
        case 'tag':
          if (!normalizedKey(song.tagText).includes(normalizedKey(v))) return false;
          break;
        case 'mood':
          if (!normalizedKey(song.moodText).includes(normalizedKey(v))) return false;
          break;
        case 'season':
          if (!normalizedKey(song.seasonText).includes(normalizedKey(v))) return false;
          break;
        case 'count': {
          const n = parseFloat(v);
          if (Number.isNaN(n) || !compareNumeric(song.count, f.op, n)) return false;
          break;
        }
        case 'days': {
          const n = parseFloat(v);
          const d = song.daysSinceLast == null ? Infinity : song.daysSinceLast;
          if (Number.isNaN(n) || !compareNumeric(d, f.op, n)) return false;
          break;
        }
        case 'last':
          if (v === 'never' || v === 'untouched') {
            if (song.lastSung) return false;
          } else if (v === 'fresh') {
            if (song.daysSinceLast == null || song.daysSinceLast > 30) return false;
          } else if (v === 'stale') {
            if (song.daysSinceLast == null || song.daysSinceLast < 180) return false;
          } else {
            const days = parseInt(String(v).replace(/d$/i, ''), 10);
            const d = song.daysSinceLast == null ? Infinity : song.daysSinceLast;
            if (!Number.isNaN(days) && !compareNumeric(d, f.op === ':' ? '<=' : f.op, days)) return false;
          }
          break;
      }
    }
    return true;
  });
}

export function applyGenreFilter(songs, genre, genreLabelFn = (s) => s.genreText || s.genre || '未分類') {
  if (!genre || genre === 'all') return [...songs];
  return songs.filter((s) => genreLabelFn(s) === genre);
}

export function applyTagFilter(songs, filter) {
  switch (filter) {
    case 'fresh': return songs.filter((s) => s.daysSinceLast != null && s.daysSinceLast <= 30);
    case 'stale': return songs.filter((s) => s.daysSinceLast != null && s.daysSinceLast >= 180);
    case 'never': return songs.filter((s) => !s.lastSung);
    default: return [...songs];
  }
}

export function applySingerMode(songs, options) {
  if (!options.singerMode) return [...songs];
  const base = songs.filter((s) => s.lastSung);
  switch (options.preset) {
    case 'keyed': return base.filter((s) => s.displayKey);
    case 'classic': return base.filter((s) => s.count >= 8);
    case 'stale': return base.filter((s) => s.daysSinceLast >= 180);
    case 'rare': return base.filter((s) => s.count <= 2);
    case 'chill':
      return base.filter((s) => /chill|チル|のんびり|リラックス|ほっこり|まったり|しっとり/.test(`${s.moodText || ''} ${s.tagText || ''}`.toLowerCase()));
    case 'energetic':
      return base.filter((s) => /激しい|アグレッシブ|パンク|メタル|盛り上がる|アップテンポ/.test(`${s.moodText || ''} ${s.tagText || ''}`.toLowerCase()));
    case 'nostalgic':
      return base.filter((s) => /ノスタルジ|レトロ|昭和|平成|青春|初恋|懐かしい/.test(`${s.moodText || ''} ${s.tagText || ''}`.toLowerCase()));
    default:
      return base.filter((s) => s.displayKey || !options.keyPublished || s.count >= 5 || s.daysSinceLast >= 120);
  }
}

export function filterByTextIncludes(songs, phrase) {
  const needle = normalizedKey(phrase);
  return songs.filter((song) => [
    song.title,
    song.artist,
    song.genreText || song.genre,
    song.tagText,
    song.moodText,
    song.seasonText,
    song.keyText,
  ].some((value) => normalizedKey(value).includes(needle)));
}

export function toTimestamp(value) {
  if (!value) return NaN;
  if (value instanceof Date) return value.getTime();
  const d = parseDateIso(value);
  return d ? d.getTime() : NaN;
}

export function sortSongs(songs, sort, isFuzzy = false) {
  const cmpDate = (a, b, dir) => {
    const av = a.lastSung ? toTimestamp(a.lastSung) : (dir === 'desc' ? -Infinity : Infinity);
    const bv = b.lastSung ? toTimestamp(b.lastSung) : (dir === 'desc' ? -Infinity : Infinity);
    return dir === 'desc' ? bv - av : av - bv;
  };
  const list = [...songs];
  switch (sort) {
    case 'count-asc':
      list.sort((a, b) => a.count - b.count || a.title.localeCompare(b.title, 'ja'));
      break;
    case 'recent':
      list.sort((a, b) => cmpDate(a, b, 'desc'));
      break;
    case 'oldest':
      list.sort((a, b) => cmpDate(a, b, 'asc'));
      break;
    case 'title':
      list.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
      break;
    case 'artist':
      list.sort((a, b) => a.artist.localeCompare(b.artist, 'ja') || b.count - a.count);
      break;
    case 'count-desc':
    default:
      if (!isFuzzy) list.sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, 'ja'));
      break;
  }
  return list;
}

export function matchReasons(song, query) {
  const q = normalizedKey(query);
  if (!q) return [];
  const { tokens, filters } = parseQuery(q);
  const reasons = [];
  for (const f of filters) {
    if (!reasons.includes(f.key)) reasons.push(f.key);
  }
  const phrase = tokens.join(' ');
  if (phrase) {
    const contains = (value) => normalizedKey(value).includes(phrase);
    if (contains(song.title)) reasons.push('曲名');
    if (contains(song.artist)) reasons.push('アーティスト');
    if (contains(song.genreText || song.genre)) reasons.push('ジャンル');
    if (contains(song.tagText)) reasons.push('タグ');
    if (contains(song.moodText)) reasons.push('雰囲気');
    if (contains(song.seasonText)) reasons.push('季節');
    if (contains(song.keyText)) reasons.push('キー');
  }
  return Array.from(new Set(reasons)).slice(0, 4);
}

function asDate(today) {
  if (today instanceof Date) {
    const copy = new Date(today.getTime());
    copy.setHours(0, 0, 0, 0);
    return copy;
  }
  const d = parseDateIso(today);
  if (!d) throw new Error('Invalid today date');
  return d;
}

function asStreamDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  return parseDateIso(value);
}

export function periodHits(streams, period, today) {
  const now = asDate(today);
  const month = monthKey(now);
  const year = now.getFullYear();
  const counts = new Map();
  for (const stream of streams) {
    const streamDate = asStreamDate(stream.date);
    const inPeriod = period === 'month'
      ? stream.monthKey === month
      : streamDate && streamDate.getFullYear() === year;
    if (!inPeriod) continue;
    for (const song of stream.songs || []) {
      if (!counts.has(song.key)) counts.set(song.key, { ...song, count: 0 });
      counts.get(song.key).count += 1;
    }
  }
  return Array.from(counts.values()).sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, 'ja'));
}

export function countStreamsThisMonth(streams, today) {
  const ym = monthKey(asDate(today));
  return streams.filter((s) => s.monthKey === ym).length;
}

export function countSongsThisMonth(streams, today) {
  const ym = monthKey(asDate(today));
  return streams.filter((s) => s.monthKey === ym).reduce((n, s) => n + (s.songs?.length || 0), 0);
}

export function countNewSongsThisMonth(songs, today) {
  const ym = monthKey(asDate(today));
  return songs.filter((s) => s.firstSung && monthKey(s.firstSung) === ym).length;
}

export function buildMonthly(streams) {
  const months = new Map();
  for (const s of streams) {
    const streamDate = asStreamDate(s.date);
    if (!streamDate) continue;
    if (!months.has(s.monthKey)) {
      months.set(s.monthKey, {
        key: s.monthKey,
        date: new Date(streamDate.getFullYear(), streamDate.getMonth(), 1),
        streams: 0,
        songs: 0,
      });
    }
    const m = months.get(s.monthKey);
    m.streams += 1;
    m.songs += s.songs?.length || 0;
  }
  const all = Array.from(months.values()).sort((a, b) => a.date - b.date);
  if (!all.length) return [];
  const out = [];
  let cur = new Date(all[0].date);
  const end = new Date(all[all.length - 1].date);
  while (cur <= end) {
    const k = monthKey(cur);
    out.push(months.get(k) || { key: k, date: new Date(cur), streams: 0, songs: 0 });
    cur.setMonth(cur.getMonth() + 1);
  }
  return out;
}

export function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function heatLevel(v) {
  if (v <= 0) return '';
  if (v < 8) return 'l1';
  if (v < 16) return 'l2';
  if (v < 25) return 'l3';
  return 'l4';
}

export function buildHeatmap(streams, today) {
  const todayDate = asDate(today);
  const start = new Date(todayDate);
  start.setDate(start.getDate() - 364);
  const cellByISO = new Map();
  for (const s of streams) {
    const streamDate = asStreamDate(s.date);
    if (!streamDate || streamDate < start || streamDate > todayDate) continue;
    const k = isoDate(streamDate);
    cellByISO.set(k, (cellByISO.get(k) || 0) + (s.songs?.length || 0));
  }
  const cells = [];
  const startDow = start.getDay();
  const cur = new Date(start);
  cur.setDate(cur.getDate() - startDow);
  for (let i = 0; i < 53 * 7; i++) {
    const inRange = cur >= start && cur <= todayDate;
    cells.push({
      date: new Date(cur),
      value: inRange ? (cellByISO.get(isoDate(cur)) || 0) : -1,
      inRange,
      iso: isoDate(cur),
    });
    cur.setDate(cur.getDate() + 1);
  }
  return cells;
}

export function computeComebacks(songs, limit = 10) {
  const candidates = [];
  for (const song of songs) {
    const dates = song.dates || [];
    if (dates.length < 2) continue;
    const sorted = [...dates].sort((a, b) => toTimestamp(a) - toTimestamp(b));
    let maxGap = 0;
    let gapStart = null;
    let gapEnd = null;
    for (let i = 1; i < sorted.length; i++) {
      const gap = Math.floor((toTimestamp(sorted[i]) - toTimestamp(sorted[i - 1])) / 86400000);
      if (gap > maxGap) {
        maxGap = gap;
        gapStart = sorted[i - 1];
        gapEnd = sorted[i];
      }
    }
    candidates.push({ song, maxGap, gapStart, gapEnd });
  }
  candidates.sort((a, b) => b.maxGap - a.maxGap);
  return candidates.slice(0, limit);
}
