import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

// Pre-render every route: Pages serves real HTML, with no server-side router.
await build();
await build({ build: { ssr: 'src/render.jsx', outDir: 'dist/.render', emptyOutDir: true } });
const { pages, render } = await import(pathToFileURL(resolve('dist/.render/render.js')));
const template = await readFile('dist/index.html', 'utf8');
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const domain = 'https://www.lamiradavioleta.org';

for (const page of pages) {
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace(/<meta\s+(?:name="description"|property="og:[^"]+")[\s\S]*?\/>/g, '')
    .replace('</head>', `<meta name="description" content="${escape(page.description)}" />
     <link rel="canonical" href="${domain}${page.canonical || page.path}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
     <meta property="og:url" content="${domain}${page.canonical || page.path}" />
    <meta property="og:image" content="${domain}/banner-izq-vacio.png" />
    <meta property="og:image:alt" content="La Mirada Violeta" />
    </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(page.id)}</div>`);
  const directory = `dist${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}index.html`, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${domain}${page.path}</loc></url>`).join('')}</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);
await rm('dist/.render', { recursive: true });
await rm('dist/.DS_Store', { force: true });
console.log(`Pre-rendered ${pages.length} static pages.`);
