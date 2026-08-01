/**
 * @module functions/api/song-requests/[[path]]
 * @description 楽曲リクエスト API エントリポイント。
 */

import { buildSongRequestRouter } from '../../../src/adapter/http/song-request-router.js';
import { D1WorkerClient } from '../../../src/infra/d1-worker/d1-worker-client.js';
import { D1SongRequestRepository } from '../../../src/infra/d1-worker/d1-song-request-repository.js';
import { mapErrorToResponse } from '../../../src/adapter/http/error-mapper.js';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age':       '86400',
};

const router = buildSongRequestRouter({
  getDeps: (ctx) => ({
    songRequests: new D1SongRequestRepository(new D1WorkerClient(ctx.env.DB)),
  }),
});

/**
 * @param {{ request: Request, env: object }} context
 */
export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'D1 binding DB is missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
    });
  }

  try {
    const response = await router.dispatch(request, env);
    const headers = new Headers(response.headers);
    for (const [k, v] of Object.entries(CORS_HEADERS)) headers.set(k, v);
    // 投稿・投票・取り消しが即座に反映される必要があるためキャッシュしない。
    // 以前は max-age=30/s-maxage=120 を付けており、削除した項目が最大数分間
    // 一覧に残り続ける（CDN/ブラウザが古い応答を返す）不具合になっていた。
    if (request.method === 'GET' && !headers.has('Cache-Control')) {
      headers.set('Cache-Control', 'no-store');
    }
    return new Response(response.body, { status: response.status, headers });
  } catch (error) {
    const res = mapErrorToResponse(error);
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(CORS_HEADERS)) headers.set(k, v);
    return new Response(res.body, { status: res.status, headers });
  }
}
