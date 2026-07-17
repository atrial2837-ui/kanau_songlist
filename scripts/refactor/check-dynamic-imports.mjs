// 検証ゲート: docs/js 以下の「文字列リテラル動的import」が実在ファイルに解決されるか。
// esbuild は unresolved な動的importをエラーにしない場合があり、実行時404が
// .catch() に握りつぶされて silent break になるのを防ぐ。
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, resolve } from 'path';

const roots = ['docs/js'];
let bad = 0, total = 0;
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.js') ? [p] : [];
});
for (const root of roots) {
  for (const file of walk(root)) {
    const src = readFileSync(file, 'utf8');
    for (const m of src.matchAll(/import\((['"])(\.[^'"]+)\1\)/g)) {
      total++;
      const target = resolve(dirname(file), m[2]);
      if (!existsSync(target)) {
        console.error(`NG ${file}: import('${m[2]}') → ${target} が存在しない`);
        bad++;
      }
    }
  }
}
console.log(`dynamic imports: ${total} checked, ${bad} unresolved`);
process.exit(bad ? 1 : 0);
