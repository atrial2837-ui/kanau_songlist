/**
 * @module domain/analytics/tagging
 * @description 曲タグ推論・トレンドラベルの純粋関数群。
 *
 * 既存: docs/js/data.js:124-169
 * @副作用 なし
 */

/**
 * @param {{ title?: string, artist?: string }} song
 * @returns {string[]}
 */
export function inferSeasonTags(song) {
  const text = `${song.title || ''} ${song.artist || ''}`.toLowerCase();
  const tags = [];
  const push = (name, re) => { if (re.test(text)) tags.push(name); };
  push('春', /春|桜|さくら|卒業|花に亡霊|春泥棒|桜ノ雨|桜流し|チェリー/);
  push('夏', /夏|サマー|花火|海|青と夏|夏色|君と夏フェス|夏祭り|金魚花火|打上花火/);
  push('秋', /秋|紅葉|月|十五夜|金木犀|晩餐歌/);
  push('冬', /冬|雪|クリスマス|白い|粉雪|スノー|snow|ジングル|メリクリ|雪の華/);
  push('雨', /雨|レイン|rain|傘|カプチーノ|rain stops/);
  push('夜', /夜|月|星|スター|midnight|ナイト|夜明け|夜に|夜もすがら|ベテルギウス/);
  push('恋愛', /恋|愛|好き|ラブ|love|告白|プロポーズ|ダーリン|貴方|あなた|恋人/);
  push('イベント', /バレンタイン|クリスマス|ハロウィン|誕生日|birthday|ジングル|チョコ/);
  return Array.from(new Set(tags));
}

/**
 * @param {{ title?: string, artist?: string, genre?: string }} song
 * @returns {string[]}
 */
export function inferMoodTags(song) {
  const text = `${song.title || ''} ${song.artist || ''} ${song.genre || ''}`.toLowerCase();
  const tags = [];
  const push = (name, re) => { if (re.test(text)) tags.push(name); };
  push('盛り上がる', /ロキ|ヒバナ|チュルリラ|天使|お願い|革命|メルト|アイドル|うまぴょい|サンバ|夏色|おジャ魔女|only my railgun|internet|ガチャ|フィーバー|パーティ|cheer/);
  push('しっとり', /雨|夜|月|花に亡霊|少女レイ|たばこ|猫|lemon|裸の心|水平線|勿忘|ベテルギウス|糸|奏|炎|雪の華|夕暮れ|黄昏|after the rain/);
  push('かわいい', /可愛|かわいい|kawaii|恋愛サーキュレーション|白金ディスコ|だだだだ|だいしきゅう|きゅうくらりん|おじゃま虫|バレンタイン|sweets parade|ぽっぴっぽ|ふわふわ|ぷにぷに|marionette/);
  push('かっこいい', /残響散歌|brave shine|i beg you|名前のない怪物|unravel|asphyxia|踊|怪物|インフェルノ|革命|ch4nge|g4l|overdose|紅蓮華|ギラギラ|ビッチ|最強/);
  push('懐かしい', /secret base|butter-fly|タッチ|ムーンライト伝説|god knows|創聖|アクエリオン|ラムのラブソング|チェリー|そばかす|残酷な天使|未来への咆哮|17才|夏休み|あの日|思い出/);
  push('chill', /chill|チル|のんびり|リラックス|ほっこり|まったり|まったり|宵の|夕凪|お昼寝|ひなたぼっこ|カフェ|lounge|ambient|downtempo|ballad|眠|ねむ|おやすみ|ゆらゆら|ふわ|そよ風|星屑|夜空|満月|ミッドナイト|midnight/);
  push('激しい', /激しい|アグレッシブ|aggressive|パンク|punk|メタル|metal|スクリーム|scream|叫|怒|暴|war|battle|戦|fight|beat|ドラムンバー|drum.?n.?bass|dubstep|hardcore|テクノ|techno/);
  push('ミステリアス', /ミステリ|mystery|怪談|幽|呪|魔女|wizard|magic|魔法|幻想|ファンタジー|fantasy|異世界|ダーク|dark|闇|shadow|phantom|ゴシック|gothic|ヴィクトリアン/);
  push('ノスタルジック', /ノスタルジ|nostalg|レトロ|retro|昭和|平成|青春|少年|少女|初恋|あの頃|昔|memory|メモリー|タイムカプセル|年季|classical|クラシック|ジャズ|jazz/);
  push('エモい', /エモ|emo|せつない|切ない|胸が痛|泣|涙|涙雨|カラス|夕焼け|卒業|別れ|さよなら|goodbye|farwell|悲|哀|愁|lonely|ロンリー/);
  push('ダーク', /ダーク|dark|黒|夜|闇|デス|death|死|墓|墓場|ドクロ|骸骨|血|ブラッド|blood|hell|地獄|悪魔|demon|devil|サタン|カオス|chaos/);
  push('ファンキー', /ファンキー|funk|ファンク|groove|グルーヴ|disco|ディスコ|ソウル|soul|rb|r&b|ラテン|latin|bossa|ボサノバ|ska|スカ|reggae|レゲエ/);
  push('甘い', /甘|あま|ハニー|honey|シュガ|sugar|キャンディ|candy|チョコ|choco|バニラ|vanilla|クリーム|cream|デザート|dessert|お菓子|ケーキ|cake|恋|ラブ|love|ダーリン|darling|ハグ|hug/);
  push('セクシー', /セクシー|sexy|セクシ|エロ|ero|色|色艶|艶|誘惑|くびれ|ヒップ|ラブシーン|ナイト|night|ムーンライト|midnight|after dark|アダルト|adult/);
  push('和風', /和風|日本|大和|桜|富士|侍|忍者|花見|茶道|お正月|七夕|盆踊り|祭|和太鼓|琴|尺八|三味線|演歌|enka|大和魂|wa/);
  push('エレクトロ', /エレクトロ|electro|エレクトロニカ|electronic|シンセ|synth|テクノ|techno|edm|house|トランス|trance|ビート|beat|bass|ベース|dubstep|dnb|ドラムンバー/);
  push('アコースティック', /アコースティック|acoustic|アコギ|アコースティックギター|ピアノ|piano|ヴァイオリン|violin|チェロ|cello|フルート|flute|クラリネット|オーケストラ|orchestra|ストリング|string|生楽器|弾き語り/);
  if (!tags.length && /ボカロ|アニソン|アイドル/.test(text)) tags.push(song.genre || '');
  return Array.from(new Set(tags.filter(Boolean)));
}
/**
 * @param {{ displayKey?: string, count?: number, daysSinceLast?: number|null }} song
 * @returns {string[]}
 */
export function singerTags(song) {
  const tags = [];
  if (song.displayKey) tags.push('キー確認済み');
  if ((song.count ?? 0) >= 10) tags.push('定番');
  if (song.daysSinceLast != null && song.daysSinceLast >= 180) tags.push('久しぶり候補');
  if ((song.count ?? 0) <= 1) tags.push('レア');
  return tags;
}

/**
 * @param {{ lastSung?: unknown, daysSinceLast?: number|null, count?: number }} song
 * @returns {string}
 */
export function trendLabel(song) {
  if (!song.lastSung) return '履歴未確認';
  if (song.daysSinceLast != null && song.daysSinceLast <= 30) return '最近';
  if (song.daysSinceLast != null && song.daysSinceLast >= 365) return '超久しぶり';
  if (song.daysSinceLast != null && song.daysSinceLast >= 180) return '久しぶり';
  if ((song.count ?? 0) <= 1) return 'レア';
  if ((song.count ?? 0) >= 10) return '定番';
  return '通常';
}
