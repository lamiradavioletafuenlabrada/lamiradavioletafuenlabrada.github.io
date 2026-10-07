import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { activities, contactContent, socialLinks, upcomingActivities } from '../src/data/siteContent.js';

// Pre-render every route: Pages serves real HTML, with no server-side router.
await build();
await build({ build: { ssr: 'src/render.jsx', outDir: 'dist/.render', emptyOutDir: true } });
const { pages, render } = await import(pathToFileURL(resolve('dist/.render/render.js')));
const template = await readFile('dist/index.html', 'utf8');
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const domain = 'https://www.lamiradavioleta.org';
const socialProfiles = socialLinks.filter((link) => !link.href.startsWith('mailto:')).map((link) => link.href);
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'La Mirada Violeta',
  url: domain,
  logo: `${domain}/favicon.png`,
  email: contactContent.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Fuenlabrada', addressRegion: 'Madrid', addressCountry: 'ES' },
  sameAs: socialProfiles,
};
const eventSchema = [...activities, ...upcomingActivities]
  .filter((activity) => activity.title && activity.startDate && activity.location && activity.url)
  .map((activity) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: activity.title,
    startDate: activity.startDate,
    location: { '@type': 'Place', name: activity.location },
    url: activity.url.startsWith('http') ? activity.url : `${domain}${activity.url}`,
    description: activity.description || activity.details,
    organizer: { '@type': 'Organization', name: 'La Mirada Violeta', url: domain },
  }));
const jsonLd = (page) => JSON.stringify([organizationSchema, ...(page.id === 'actividades' ? eventSchema : [])]).replaceAll('<', '\\u003c');
const sitemapPaths = new Set(['/', '/quienes-somos/', '/mision-valores/', '/transparencia/', '/actividades/', '/podcast/', '/socias/', '/recursos/', '/contacto/']);

function renderPageHtml(page, pageContent, { notFound = false } = {}) {
  const canonical = page.canonical || page.path;
  const robots = notFound || page.indexable === false ? 'noindex, follow' : 'index, follow';
  const canonicalTag = notFound ? '' : `<link rel="canonical" href="${domain}${canonical}" />`;
  const heroPreload = page.id === 'inicio' ? '<link rel="preload" as="image" href="/miradastodas-1200.webp" imagesrcset="/miradastodas-640.webp 640w, /miradastodas-1200.webp 1200w" imagesizes="(min-width: 850px) 540px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)" />' : '';
  return template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace(/<meta\s+(?:name="description"|property="og:[^"]+")[\s\S]*?\/>/g, '')
    .replace('</head>', `${heroPreload}
     <meta name="description" content="${escape(page.description)}" />
     ${canonicalTag}
     <meta name="robots" content="${robots}" />
     <meta property="og:site_name" content="La Mirada Violeta" />
     <meta property="og:title" content="${escape(page.title)}" />
     <meta property="og:description" content="${escape(page.description)}" />
     <meta property="og:type" content="website" />
     <meta property="og:locale" content="es_ES" />
     <meta property="og:url" content="${domain}${canonical}" />
     <meta property="og:image" content="${domain}/banner-izq-vacio.png" />
     <meta property="og:image:width" content="1600" />
     <meta property="og:image:height" content="800" />
     <meta property="og:image:alt" content="La Mirada Violeta" />
     <meta name="twitter:card" content="summary_large_image" />
     <meta name="twitter:title" content="${escape(page.title)}" />
     <meta name="twitter:description" content="${escape(page.description)}" />
     <meta name="twitter:image" content="${domain}/banner-izq-vacio.png" />
     <script type="application/ld+json">${jsonLd(page)}</script>
     </head>`)
    .replace('<div id="root"></div>', `<div id="root">${pageContent}</div>`);
}

for (const page of pages) {
  const html = renderPageHtml(page, render(page.id));
  const directory = `dist${page.path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}index.html`, html);
}
const sitemapPages = pages.filter((page) => sitemapPaths.has(page.path));
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapPages.map((page) => `<url><loc>${domain}${page.path}</loc></url>`).join('')}</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);
await writeFile('dist/404.html', renderPageHtml({ id: '404', path: '/404.html', title: 'Página no encontrada | La Mirada Violeta', description: 'La página que buscas no está disponible. Visita el inicio, las actividades o los recursos para mujeres.', indexable: false }, render('404'), { notFound: true }));
await rm('dist/.render', { recursive: true });
await rm('dist/.DS_Store', { force: true });
console.log(`Pre-rendered ${pages.length} static pages.`);
