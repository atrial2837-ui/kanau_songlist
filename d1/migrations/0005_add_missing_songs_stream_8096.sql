-- 新CH #160 2026-04-29「ch登録8000人耐久!!縦型歌枠」(stream_id=8096) のセトリに
-- 未登録だった4曲を追加する。
--
-- 配信の固定コメントを確認したところ、アイドル(19曲目)とアイリス(最終曲)の間で
-- メランコリック / コネクト / Subtitle / 宿命 の4曲が歌われていた。
-- 既存19曲の並びは配信順と一致しているため、そこへ差し込んで最終曲を24番目へ送る。
--
-- 4曲とも songs には既存のため song_id は確定値を使う。
--   メランコリック / Junky            → 22977
--   コネクト / ClariS                 → 22876
--   Subtitle / Official髭男dism       → 23022
--   宿命 / Official髭男dism           → 23289
--
-- song_channel_stats は usecase/replace-setlist.js と同じ upsert(+1) を行う。
-- 宿命 は新ch(channel_id=1)の行がまだ無いため、この INSERT で新規作成される。

-- 1) 最終曲アイリスを 20 → 24 へ送る
UPDATE stream_songs
   SET position = 24
 WHERE stream_id = 8096
   AND song_id = 22947;

-- 2) 20〜23 に4曲を追加
INSERT INTO stream_songs
  (stream_id, song_id, position, raw_text, title_snapshot, artist_snapshot, song_key_snapshot, created_at)
VALUES
  (8096, 22977, 20, 'メランコリック / Junky',        'メランコリック', 'Junky',            'メランコリック__junky',        '2026-08-05T00:00:00.000Z'),
  (8096, 22876, 21, 'コネクト / ClariS',             'コネクト',       'ClariS',           'コネクト__claris',             '2026-08-05T00:00:00.000Z'),
  (8096, 23022, 22, 'Subtitle / Official髭男dism',   'Subtitle',       'Official髭男dism', 'subtitle__official髭男dism',   '2026-08-05T00:00:00.000Z'),
  (8096, 23289, 23, '宿命 / Official髭男dism',       '宿命',           'Official髭男dism', '宿命__official髭男dism',       '2026-08-05T00:00:00.000Z');

-- 3) 歌唱回数を +1（新chのみ。既存行があれば加算、無ければ 1 で作成）
INSERT INTO song_channel_stats (song_id, channel_id, sing_count, source_index, created_at, updated_at)
VALUES
  (22977, 1, 1, NULL, '2026-08-05T00:00:00.000Z', '2026-08-05T00:00:00.000Z'),
  (22876, 1, 1, NULL, '2026-08-05T00:00:00.000Z', '2026-08-05T00:00:00.000Z'),
  (23022, 1, 1, NULL, '2026-08-05T00:00:00.000Z', '2026-08-05T00:00:00.000Z'),
  (23289, 1, 1, NULL, '2026-08-05T00:00:00.000Z', '2026-08-05T00:00:00.000Z')
ON CONFLICT(song_id, channel_id) DO UPDATE SET
  sing_count = sing_count + 1,
  updated_at = excluded.updated_at;

-- 4) 曲数を 20 → 24 に更新
UPDATE streams
   SET song_count = 24
 WHERE id = 8096;
