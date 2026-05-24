import { buildAdminRouter } from '../../../src/adapter/http/admin-router.js';
import { resolveAdminAuthStrict } from '../../../src/adapter/http/resolve-admin-auth-strict.js';
import { jsonResponse } from '../../../src/adapter/http/json-presenter.js';
import { mapErrorToResponse } from '../../../src/adapter/http/error-mapper.js';
import { createD1WorkerDeps } from '../../../src/infra/wire/d1-worker-deps.js';
import { FetchGitHubActionsGateway } from '../../../src/infra/github/fetch-github-actions-gateway.js';
import { SystemClock } from '../../../src/infra/clock/system-clock.js';
import { triggerStaticBuild } from '../../../src/usecase/trigger-static-build.js';

/**
 * @param {object} env
 */
function createPagesAdminRouter(env) {
  return buildAdminRouter({
    pathPrefix: '',
    getDeps: (ctx) => createD1WorkerDeps(ctx.env),
    getAdminToken: (ctx) => ctx.env.ADMIN_TOKEN,
    authStrict: resolveAdminAuthStrict(env.ADMIN_AUTH_STRICT),
    staticDataHandler: async (ctx) => {
      const e = ctx.env;
      const github = new FetchGitHubActionsGateway({ token: e.GITHUB_ACTIONS_TOKEN || '' });
      const clock = new SystemClock();
      const result = await triggerStaticBuild(
        { github, clock },
        {
          owner: e.GITHUB_OWNER || 'atrial2837-ui',
          repo: e.GITHUB_REPO || 'kanau_songlist',
          workflow: e.GITHUB_STATIC_WORKFLOW || 'update-static-data.yml',
          ref: e.GITHUB_STATIC_REF || 'main',
          environment: e.GITHUB_STATIC_ENV || 'production',
        },
      );
      return jsonResponse(result);
    },
  });
}

export async function onRequest({ request, env, params }) {
  try {
    if (!env.DB) return jsonResponse({ error: 'D1 binding DB is missing' }, 500);

    const remainder = Array.isArray(params.path)
      ? params.path.join('/')
      : String(params.path || '');

    const url = new URL(request.url);
    url.pathname = '/' + remainder;
    const fixedRequest = new Request(url.toString(), request);

    return await createPagesAdminRouter(env).dispatch(fixedRequest, env);
  } catch (error) {
    return mapErrorToResponse(error);
  }
}
