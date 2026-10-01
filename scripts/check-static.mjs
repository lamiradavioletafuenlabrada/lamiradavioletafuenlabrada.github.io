import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pages } from '../src/data/pages.js';

const domain = 'https://www.lamiradavioleta.org';
const root = resolve('dist');
const exists = async (pathname) => {
  let file = resolve(root, `.${pathname}`);
  assert.ok(file === root || file.startsWith(`${root}/`), `Path outside dist: ${pathname}`);
  if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
  assert.ok((await stat(file)).isFile(), `Missing file: ${pathname}`);
  return file;
};
assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'www.lamiradavioleta.org');
const titles = new Set();
let checked = 0;
for (const page of pages) {
  const html = await readFile(`dist${page.path}index.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${page.path}`);
  titles.add(title);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `Expected one h1: ${page.path}`);
  assert.ok(html.includes('<html lang="es">'));
  assert.ok(html.includes(`rel="canonical" href="${domain}${page.path}"`));
  assert.ok(html.includes(`property="og:url" content="${domain}${page.path}"`));
  assert.ok(html.includes('name="description" content="'));
  assert.ok(html.includes('property="og:image" content="https://'));
  assert.ok(!html.includes('<iframe'), 'Calendar must not load until requested');
  assert.ok(!html.includes('.render/'), 'Build-only rendering bundle must not ship');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|mailto:)/.test(value)) continue;
    const url = new URL(value, `http://static.test${page.path}`);
    const target = await exists(decodeURIComponent(url.pathname));
    if (url.hash) {
      const content = await readFile(target, 'utf8');
      assert.ok(content.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing fragment: ${value}`);
    }
    checked++;
  }
  for (const match of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const item of match[1].split(',')) {
      await exists(item.trim().split(/\s+/)[0]);
      checked++;
    }
  }
  console.log(`OK ${page.path}: HTML, SEO, local links and resources`);
}
await exists('/sitemap.xml');
await exists('/robots.txt');
console.log(`Verified ${pages.length} pages and ${checked} local references. CNAME preserved.`);
