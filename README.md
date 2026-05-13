# 夢川かなう 歌唱データベース

Cloudflare Pagesで公開している歌唱データベースです。フロントエンドは `docs/`、APIはCloudflare Pages Functions、データベースはSupabase PostgreSQLを使います。

## 構成

```text
Google Sheets
  データ編集元

tools/import_supabase.py
  Google SheetsからSupabaseへ取り込み

Supabase
  songs / streams / stream_songs などを保存

Cloudflare Pages Functions
  /api/data でSupabaseのデータをJSON化

docs/
  公開フロントエンド
```

## 通常のデータ更新

Google Sheetsで追加・修正した内容をSupabaseへ反映するときは、ローカルのPowerShellで実行します。

```powershell
$env:SUPABASE_URL="https://ptlbobhebwjaebrdgvpl.supabase.co"
$env:SUPABASE_SECRET_KEY="sb_secret_..."
python tools\import_supabase.py
```

通常インポートは、既存の曲・配信を上書き更新します。追加や表記修正だけならこの手順で十分です。

## 完全再インポート

Google Sheets側で曲や配信を削除した場合は、Supabase側に古いデータが残らないよう完全再インポートを使います。

```powershell
$env:SUPABASE_URL="https://ptlbobhebwjaebrdgvpl.supabase.co"
$env:SUPABASE_SECRET_KEY="sb_secret_..."
python tools\import_supabase.py --reset
```

`--reset` は `channels` を残し、以下の取り込み対象データを削除してから再投入します。

```text
artists
songs
streams
stream_songs
song_channel_stats
```

## Cloudflare設定

Cloudflare Pagesの対象プロジェクトで、以下を設定します。

```text
SUPABASE_URL
https://ptlbobhebwjaebrdgvpl.supabase.co

SUPABASE_SECRET_KEY
sb_secret_...
```

`SUPABASE_SECRET_KEY` は必ずSecretとして保存します。GitHub、README、フロントエンドのJavaScriptには保存しません。

## Secret keyの運用

Secret keyをチャット、ログ、GitHubなどに出してしまった場合は、SupabaseのDashboardで該当キーを削除し、新しいSecret keyを作成します。その後、Cloudflare Pagesの `SUPABASE_SECRET_KEY` とローカル実行時の環境変数を新しい値に差し替えます。

現在使用しているSecret keyはローテート済みです。

## デプロイ

フロントエンド、API、SQL、ツールを変更したときはGitHubへpushします。

```powershell
git add docs functions supabase tools README.md
git commit -m "Update Supabase operations"
git push
```

Cloudflare PagesはGitHubから自動デプロイします。

データだけを更新した場合は、Supabaseへのインポートだけで反映されます。GitHubへのpushは不要です。

## 確認方法

APIが動いているか確認します。

```text
https://サイトURL/api/data
```

管理ページでも状態を確認できます。

```text
https://サイトURL/admin.html
```

確認する項目:

```text
新ch / 旧ch / 全期間が表示される
ランキングが表示される
全曲リスト検索が動く
タイムラインが表示される
アナリティクスのグラフが表示される
管理ページの曲数・歌枠数・最新日付が期待通り
```

## APIキャッシュ

`/api/data` はCloudflare側で最大約1分キャッシュします。Supabaseへ再インポートした直後は、サイト表示に少し遅れが出ることがあります。

キャッシュ時間は [functions/api/data.js](functions/api/data.js) の `CACHE_SECONDS` で調整できます。

## Tailscale管理画面

Tailscale内だけで歌枠を追加するローカル管理画面は [admin-server](admin-server) にあります。

```powershell
node admin-server\server.js
tailscale serve http://127.0.0.1:8788
```

設定値は [admin-server/env.example](admin-server/env.example) をコピーして `.env` に保存します。Cloudflare API tokenはGitHubへcommitしません。

キーとジャンルはD1の `songs.display_key` / `songs.genre` に保存します。初回だけ [d1/add_song_metadata.sql](d1/add_song_metadata.sql) をD1 Consoleで実行してください。

## SQL管理

Supabaseの初期テーブル定義は [supabase/schema.sql](supabase/schema.sql) に保存しています。

件数確認には [supabase/check_counts.sql](supabase/check_counts.sql) をSupabase SQL Editorで実行します。
