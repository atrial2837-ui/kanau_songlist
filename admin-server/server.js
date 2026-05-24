const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, '..', 'docs', 'data');

loadEnvFile(path.join(ROOT, '.env'));
loadEnvFile(path.join(process.cwd(), '.env'));

const PORT = Number(process.env.ADMIN_PORT || 8788);
const HOST = process.env.ADMIN_HOST || '127.0.0.1';
const REQUIRED_ENV = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] != null) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, '');
  }
}

function assertConfigured() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

async function readNodeBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function bootstrap() {
  const { buildAdminRouter } = await import('../src/adapter/http/admin-router.js');
  const { renderAdminPage } = await import('../src/adapter/http/admin-page.js');
  const { resolveAdminAuthStrict } = await import('../src/adapter/http/resolve-admin-auth-strict.js');
  const { jsonResponse } = await import('../src/adapter/http/json-presenter.js');
  const { createD1RestDepsFromEnv } = await import('../src/infra/wire/d1-rest-deps.js');
  const { LocalFileWriter } = await import('../src/infra/fs-local/local-file-writer.js');
  const { generateStaticData } = await import('../src/usecase/generate-static-data.js');
  const { formatStaticDataFiles } = await import('../src/adapter/presenter/static-data-presenter.js');

  const authStrict = resolveAdminAuthStrict(process.env.ADMIN_AUTH_STRICT);

  const router = buildAdminRouter({
    pathPrefix: '/api',
    getDeps: () => createD1RestDepsFromEnv(),
    getAdminToken: () => process.env.ADMIN_TOKEN,
    authStrict,
    includeIndexPage: true,
    renderIndexPage: renderAdminPage,
    staticDataHandler: async () => {
      const dataset = await generateStaticData(createD1RestDepsFromEnv());
      const files = formatStaticDataFiles(dataset);
      const writer = new LocalFileWriter(DATA_DIR);
      const { files: writtenFiles, totalBytes } = writer.writeJsonFiles(files);
      return jsonResponse({
        ok: true,
        files: writtenFiles,
        bytes: totalBytes,
        generatedAt: dataset.meta.generatedAt,
        stats: dataset.meta.combined,
      });
    },
  });

  const server = http.createServer(async (req, res) => {
    try {
      assertConfigured();

      const url = `http://${req.headers.host || 'localhost'}${req.url}`;
      const headers = new Headers();
      for (const [k, v] of Object.entries(req.headers)) {
        if (Array.isArray(v)) headers.set(k, v.join(', '));
        else if (typeof v === 'string') headers.set(k, v);
      }
      const bodyText =
        req.method === 'GET' || req.method === 'HEAD'
          ? undefined
          : await readNodeBody(req);
      const request = new Request(url, { method: req.method, headers, body: bodyText });

      const response = await router.dispatch(request, {});

      res.statusCode = response.status;
      response.headers.forEach((v, k) => res.setHeader(k, v));
      res.end(await response.text());
    } catch (error) {
      res.statusCode = error.status || 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: error.message || String(error) }));
    }
  });

  server.listen(PORT, HOST, () => {
    console.log(`Admin server listening on http://${HOST}:${PORT}`);
    console.log('Expose it to your tailnet with: tailscale serve http://127.0.0.1:' + PORT);
  });
}

bootstrap().catch((err) => {
  console.error('admin-server bootstrap failed:', err);
  process.exit(1);
});
