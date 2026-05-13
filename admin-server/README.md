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

同じ `channel + date + url` の歌枠を登録した場合は、その歌枠の `stream_songs` を作り直します。
