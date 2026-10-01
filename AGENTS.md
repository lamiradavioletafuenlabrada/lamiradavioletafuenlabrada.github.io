# AGENTS.md

## Repo Shape
- Multi-page static site built with `React + Vite + Tailwind CSS`, pre-rendered at build time.
- Main app entry is `src/main.jsx`; page composition lives in `src/App.jsx`.
- Most editable site copy and section data live in `src/data/siteContent.js`. Update content there before changing component markup.
- Routes and SEO metadata live in `src/data/pages.js`; page content lives in `src/components/SitePages.jsx`.

## Commands
- Install deps: `npm install`
- Local dev server: `npm run dev`
- Production build: `npm run build`
- `npm run build` generates all pages. `node scripts/check-static.mjs` checks their static links, assets and metadata. No lint or typecheck is configured.

## GitHub Pages
- This repo deploys via `.github/workflows/deploy.yml`, not by committing `dist/`.
- GitHub Pages must use `GitHub Actions` as the source.
- Keep `public/CNAME` in place. It is copied into `dist/` during Vite builds; do not move it back to repo root.
- `vite.config.js` does not set a custom `base`. That is intentional for this `*.github.io` repo.

## Styling And Assets
- Tailwind is the primary styling system. Theme extensions for brand colors, fonts, shadows, and the hero gradient are in `tailwind.config.js`.
- Global base styles and Google Fonts import live in `src/styles/globals.css`.
- Local static assets that must ship as-is belong in `public/`.
- Content photos are local, with responsive WebP derivatives; preserve original images and their public URLs.

## Editing Notes
- Navigation uses real static page URLs. Preserve existing section IDs and client redirects for previously shared anchor links, including scroll offsets under the sticky header.
- Accessibility polish is already wired into interactive elements with `focus-visible` styles and menu `aria-*` attributes. Preserve those when refactoring components.
