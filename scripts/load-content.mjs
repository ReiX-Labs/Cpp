import { build } from 'esbuild';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
/** Exercise the production import graph, including Vite's raw Markdown imports. */
export async function loadContent(entry, options = {}) {
  const result = await build({
    absWorkingDir: root, entryPoints: [entry], bundle: true, write: false,
    platform: 'node', format: 'esm', target: 'es2022', logLevel: 'silent',
    plugins: [{ name: 'content-test', setup(b) {
      b.onResolve({ filter: /\.md\?raw$/ }, args => ({ path: resolve(args.resolveDir, args.path.replace(/\?raw$/, '')), namespace: 'raw' }));
      b.onLoad({ filter: /.*/, namespace: 'raw' }, args => ({ contents: `export default ${JSON.stringify(readFileSync(args.path, 'utf8'))}`, loader: 'js' }));
      if (options.store) {
        b.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'stub' }));
        b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: 'export function useSyncExternalStore(subscribe, snapshot) { return snapshot(); }', loader: 'js' }));
      }
    } }],
  });
  return import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64') + (options.cacheKey ? `#${options.cacheKey}` : ''));
}
