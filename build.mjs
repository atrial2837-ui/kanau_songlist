import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, 'docs', 'dist');

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const common = {
  bundle: true,
  platform: 'browser',
  format: 'esm',
  target: ['es2020'],
  minify: true,
  sourcemap: false,
  treeShaking: true,
  external: ['chart.js'],
};

async function buildMain() {
  await esbuild.build({
    ...common,
    entryPoints: [{ in: join(__dirname, 'docs', 'js', 'main.js'), out: 'main' }],
    outdir: OUT_DIR,
    splitting: true,          // 動的importをチャンクに分離してunused JSを削減
    chunkNames: 'chunk-[hash]',
    metafile: true,
  });
  console.log('built docs/dist/main.js');
}

async function buildAdmin() {
  await esbuild.build({
    ...common,
    entryPoints: [join(__dirname, 'docs', 'js', 'admin.js')],
    outfile: join(OUT_DIR, 'admin.js'),
    metafile: true,
  });
  console.log('built docs/dist/admin.js');
}

async function main() {
  const mode = process.argv[2];
  if (mode === 'admin') {
    await buildAdmin();
  } else if (mode === 'main') {
    await buildMain();
  } else {
    await Promise.all([buildMain(), buildAdmin()]);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
