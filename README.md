# 夢川かなう 歌唱データベース

Cloudflare Pagesで公開している歌唱データベースです。フロントエンドは `docs/`、APIはCloudflare Pages Functions、データベースはCloudflare D1を使います。

## 構成

```text
D1
  songs / streams / stream_songs などを保存

Cloudflare Pages Functions
  /api/data でD1のデータをJSON化
  /api/admin/* で管理画面からD1更新

docs/
  公開フロントエンド

GitHub Actions
  D1から docs/data/*.json を生成してcommit/push
```

## スマホ単独の管理

管理画面はCloudflare Pages上で開けます。

```text
https://サイトURL/admin.html
```

このページから歌枠追加、キー・ジャンル同期、静的データ生成のGitHub Actions起動を行えます。スマホ単独で使う場合は、Cloudflare Accessで `/admin.html` と `/api/admin/*` を保護します。

## Cloudflare Pages設定

Cloudflare Pagesの対象プロジェクトで、D1 bindingと環境変数を設定します。

```text
D1 binding
DB
```

GitHub Actions起動用:

```text
GITHUB_ACTIONS_TOKEN
GitHub fine-grained token or classic token with Actions workflow dispatch permission

GITHUB_OWNER
atrial2837-ui

GITHUB_REPO
kanau_songlist

GITHUB_STATIC_WORKFLOW
update-static-data.yml

GITHUB_STATIC_REF
main

GITHUB_STATIC_ENV
production
```

任意:

```text
ADMIN_TOKEN
管理APIの追加トークン。Cloudflare Accessを使う場合も二重ロックとして使えます。

KEY_REFERENCE_CSV_URL
統合集計Spreadsheet URL
```

## GitHub Actions設定

GitHub repository secretsに以下を設定します。

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_D1_DATABASE_ID
```

`CLOUDFLARE_API_TOKEN` には対象D1を読み取れる権限を付けます。管理画面の「静的データ生成を開始」を押すと `.github/workflows/update-static-data.yml` が起動し、`tools/generate_static_data.mjs` が `docs/data/*.json` を生成してcommit/pushします。

## STG環境

`cln_dp_tx` ブランチはSTG用のブランチとして使います。Cloudflare PagesではPreview/Branch deployの対象を `cln_dp_tx` にし、Productionとは別のD1を `DB` binding に設定します。

STG側のCloudflare Pages環境変数:

```text
GITHUB_ACTIONS_TOKEN
GitHub workflow dispatch permission付きのtoken

GITHUB_OWNER
atrial2837-ui

GITHUB_REPO
kanau_songlist

GITHUB_STATIC_WORKFLOW
update-static-data.yml

GITHUB_STATIC_REF
cln_dp_tx

GITHUB_STATIC_ENV
staging

ADMIN_TOKEN
STG用の管理トークン

KEY_REFERENCE_CSV_URL
必要ならSTG確認用Spreadsheet URL
```

STG用のGitHub repository secrets:

```text
CLOUDFLARE_API_TOKEN_STG
CLOUDFLARE_ACCOUNT_ID_STG
CLOUDFLARE_D1_DATABASE_ID_STG
```

`CLOUDFLARE_ACCOUNT_ID_STG` はProductionと同じCloudflareアカウントなら省略できます。その場合、workflowは `CLOUDFLARE_ACCOUNT_ID` を使います。

管理画面からSTGの静的データ生成を起動すると、`environment=staging` で `.github/workflows/update-static-data.yml` が実行され、STG D1から `docs/data/*.json` を生成して `cln_dp_tx` へpushします。

ローカル管理サーバーからSTG D1を触る場合は、[admin-server/env.stg.example](admin-server/env.stg.example) を `admin-server/.env` にコピーし、STG用のD1 IDとAPI tokenを設定します。Production用 `.env` と同時に置きたい場合は、`.env` を切り替えてから `node admin-server\server.js` を起動してください。

## Secretの運用

Secret keyをチャット、ログ、GitHubなどに出してしまった場合は、該当キーを削除し、新しいSecret keyを作成します。その後、Cloudflare PagesとGitHub Secretsの値を差し替えます。

## デプロイ

フロントエンド、API、SQL、ツールを変更したときはGitHubへpushします。

```powershell
git add docs functions supabase tools README.md
git commit -m "Update Supabase operations"
git push
```

Cloudflare PagesはGitHubから自動デプロイします。

データだけを更新した場合は、管理画面から静的データ生成を起動するとGitHub Actionsが自動でpushします。

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

`/api/data` はCloudflare側で最大約1分キャッシュします。D1を直接参照する確認用途では少し遅れが出ることがあります。

キャッシュ時間は [functions/api/data.js](functions/api/data.js) の `CACHE_SECONDS` で調整できます。

## ローカル/Tailscale管理画面

Tailscale内だけで歌枠を追加するローカル管理画面は [admin-server](admin-server) にあります。

```powershell
node admin-server\server.js
tailscale serve http://127.0.0.1:8788
```

設定値は [admin-server/env.example](admin-server/env.example) をコピーして `.env` に保存します。Cloudflare API tokenはGitHubへcommitしません。

スマホ単独運用はCloudflare Pages上の [docs/admin.html](docs/admin.html) を使います。ローカル管理画面は接続トラブル時の予備です。

キーとジャンルはD1の `songs.display_key` / `songs.genre` に保存します。初回だけ [d1/add_song_metadata.sql](d1/add_song_metadata.sql) をD1 Consoleで実行してください。

## SQL管理

Supabaseの初期テーブル定義は [supabase/schema.sql](supabase/schema.sql) に保存しています。

件数確認には [supabase/check_counts.sql](supabase/check_counts.sql) をSupabase SQL Editorで実行します。
