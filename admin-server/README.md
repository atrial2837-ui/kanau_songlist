# Tailscale Admin Server

Tailscale内だけで開く歌枠追加用のローカル管理画面です。公開Pagesには管理APIを置かず、このサーバーがCloudflare D1 REST APIへ直接書き込みます。

## Setup

1. `.env.example` を `.env` にコピーします。
2. `CLOUDFLARE_API_TOKEN` を設定します。
3. 必要なら `ADMIN_TOKEN` を設定します。

Cloudflare API tokenには、対象アカウントのD1を編集できる権限を付けてください。

## Start

```powershell
node admin-server\server.js
```

標準ではローカルだけで待ち受けます。

```text
http://127.0.0.1:8788
```

Tailscale内に出す場合は、同じ端末で次を実行します。

```powershell
tailscale serve http://127.0.0.1:8788
```

## What It Writes

歌枠追加時に以下のD1テーブルを更新します。

```text
artists
songs
streams
stream_songs
song_channel_stats
```

曲リストは1行1曲で、基本形は次です。

```text
曲名 / アーティスト
```

キーやジャンルも同時に保存する場合は、行末に `|` 区切りで追加できます。

```text
曲名 / アーティスト | +2 | アニソン
```

同じ `channel + date + url` の歌枠を登録した場合は、その歌枠の `stream_songs` を作り直します。

## Key and Genre Metadata

D1の `songs.display_key` と `songs.genre` を更新します。

- 曲検索から個別編集できます。
- 統合集計SpreadsheetのT/U/V/X列から一括同期できます。
- CSVを書き出して管理画面からアップロード同期することもできます。

初回だけD1 Consoleで次を実行してください。

```sql
ALTER TABLE songs ADD COLUMN display_key TEXT NOT NULL DEFAULT '';
ALTER TABLE songs ADD COLUMN genre TEXT NOT NULL DEFAULT '';
```

Spreadsheet URLは、統合集計タブのURLを使います。T列=曲名、U列=アーティスト、V列=キー、X列=ジャンルとして読み込みます。

```text
https://docs.google.com/spreadsheets/d/1mM9TQGYm7VAOds90XpSbSzF6xnFeq-95XZwL2mz8B4o/edit?gid=1012689826#gid=1012689826
```

毎回入力したくない場合は `.env` に保存できます。

```env
KEY_REFERENCE_CSV_URL=https://docs.google.com/spreadsheets/d/1mM9TQGYm7VAOds90XpSbSzF6xnFeq-95XZwL2mz8B4o/edit?gid=1012689826#gid=1012689826
```
