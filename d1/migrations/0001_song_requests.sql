-- 曲リクエストテーブル
CREATE TABLE IF NOT EXISTS song_requests (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  title          TEXT    NOT NULL,
  artist         TEXT    NOT NULL DEFAULT '',
  url            TEXT,
  requester_name TEXT,
  status         TEXT    NOT NULL DEFAULT 'unregistered',
  vote_count     INTEGER NOT NULL DEFAULT 1 CHECK (vote_count >= 0),
  created_at     TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_song_requests_public
  ON song_requests(vote_count DESC, created_at DESC);
