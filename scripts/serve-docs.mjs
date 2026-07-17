// docs/ を配信する開発・E2E用の静的サーバー。
// Pages Functions (/api/*) は提供しない — フロントは API 失敗時も動作する前提。
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, normalize, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const PORT = Number(process.env.PORT || 4173);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const file = normalize(join(ROOT, pathname));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end('forbidden');
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'content-type': MIME[extname(file)] || 'application/octet-stream',
      'cache-control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' }).end('not found');
  }
});

server.listen(PORT, () => {
  console.log(`serving docs/ at http://localhost:${PORT}`);
});
