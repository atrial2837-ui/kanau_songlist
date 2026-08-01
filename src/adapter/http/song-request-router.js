/**
 * @module adapter/http/song-request-router
 * @description 楽曲リクエスト公開 API のルート定義。
 *
 * エンドポイント:
 *   GET  /api/song-requests             → リクエスト一覧
 *   POST /api/song-requests             → リクエスト投稿
 *   POST /api/song-requests/:id/vote    → 「聴きたい」投票
 *   POST /api/song-requests/:id/unvote  → 投票の取り消し
 *   POST /api/song-requests/:id/delete  → 投稿者本人による取り消し(ownerToken 照合)
 */

import { Router } from './router.js';
import { jsonResponse } from './json-presenter.js';
import { readJsonBody } from './read-json-body.js';
import { listSongRequests } from '../../usecase/song-request/list-song-requests.js';
import { submitSongRequest } from '../../usecase/song-request/submit-song-request.js';
import { voteSongRequest } from '../../usecase/song-request/vote-song-request.js';
import { unvoteSongRequest } from '../../usecase/song-request/unvote-song-request.js';
import { deleteOwnSongRequest } from '../../usecase/song-request/delete-own-song-request.js';

const ROOT_RE   = /^\/api\/song-requests\/?$/;
const VOTE_RE   = /^\/api\/song-requests\/(\d+)\/vote\/?$/;
const UNVOTE_RE = /^\/api\/song-requests\/(\d+)\/unvote\/?$/;
const DELETE_RE = /^\/api\/song-requests\/(\d+)\/delete\/?$/;

/**
 * @param {object} options
 * @param {(ctx: import('./router.js').RouteContext) => object} options.getDeps
 * @returns {Router}
 */
export function buildSongRequestRouter({ getDeps }) {
  const router = new Router();

  router.get(ROOT_RE, async (ctx) => {
    const deps = getDeps(ctx);
    const items = await listSongRequests(deps, {
      limit: Number(ctx.query.get('limit')) || 80,
    });
    return jsonResponse({ items: items.map(toPublic) });
  });

  router.post(ROOT_RE, async (ctx) => {
    const body = (await readJsonBody(ctx.request)) || {};
    const deps = getDeps(ctx);
    const { item, ownerToken } = await submitSongRequest(deps, {
      title: body.title,
      artist: body.artist,
      url: body.url,
      requesterName: body.requesterName,
    });
    // ownerToken は取り消し用の鍵。ここでしか返さない（一覧 API には含めない）
    return jsonResponse({ ok: true, item: toPublic(item), ownerToken }, 201);
  });

  router.post(VOTE_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = VOTE_RE.exec(url.pathname);
    const deps = getDeps(ctx);
    const item = await voteSongRequest(deps, { id: Number(m[1]) });
    return jsonResponse({ ok: true, item: toPublic(item) });
  });

  router.post(UNVOTE_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = UNVOTE_RE.exec(url.pathname);
    const deps = getDeps(ctx);
    const item = await unvoteSongRequest(deps, { id: Number(m[1]) });
    return jsonResponse({ ok: true, item: toPublic(item) });
  });

  router.post(DELETE_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = DELETE_RE.exec(url.pathname);
    const body = (await readJsonBody(ctx.request)) || {};
    const deps = getDeps(ctx);
    await deleteOwnSongRequest(deps, {
      id: Number(m[1]),
      ownerToken: body.ownerToken,
    });
    return jsonResponse({ ok: true });
  });

  return router;
}

/**
 * @param {import('../../domain/song-request/song-request.js').SongRequest} item
 */
function toPublic(item) {
  return {
    id:            item.id,
    title:         item.title,
    artist:        item.artist,
    url:           item.url,
    requesterName: item.requesterName,
    status:        item.status,
    voteCount:     item.voteCount,
    createdAt:     item.createdAt,
  };
}
