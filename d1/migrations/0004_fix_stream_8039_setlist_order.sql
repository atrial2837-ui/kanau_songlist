-- #103 2025-10-24 の歌枠（stream_id=8039）のセトリ順を実際の歌唱順に合わせる。
--
-- 配信の固定コメントでは Pale Blue / 米津玄師 は 1:09:20（あなた 1:01:09 と ビビデバ 1:13:31 の間）
-- で歌われており、8曲目が正しい。しかし登録時に最後（18曲目）に入っていた。
-- 曲ごとの開始時刻を紐付ける作業でこのズレが判明したため、実際の歌唱順に直す。
--
-- 手順: 8〜17番目を1つ後ろへずらし、空いた8番目に Pale Blue を移す。
-- stream_songs には (stream_id, position) の UNIQUE 制約が無いため、
-- 途中で position が一時的に重複しても問題ない。

UPDATE stream_songs
   SET position = position + 1
 WHERE stream_id = 8039
   AND position BETWEEN 8 AND 17;

UPDATE stream_songs
   SET position = 8
 WHERE id = 112796;
