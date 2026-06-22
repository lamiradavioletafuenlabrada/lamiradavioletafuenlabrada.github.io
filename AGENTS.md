# AGENTS.md

## Repo Shape
- Single-page static site built with `React + Vite + Tailwind CSS`.
- Main app entry is `src/main.jsx`; page composition lives in `src/App.jsx`.
- Most editable site copy and section data live in `src/data/siteContent.js`. Update content there before changing component markup.

## Commands
- Install deps: `npm install`
- Local dev server: `npm run dev`
- Production build: `npm run build`
- There is no test, lint, or typecheck setup in this repo right now. `npm run build` is the main verification step.

## GitHub Pages
- This repo deploys via `.github/workflows/deploy.yml`, not by committing `dist/`.
- GitHub Pages must use `GitHub Actions` as the source.
- Keep `public/CNAME` in place. It is copied into `dist/` during Vite builds; do not move it back to repo root.
- `vite.config.js` does not set a custom `base`. That is intentional for this `*.github.io` repo.

## Styling And Assets
- Tailwind is the primary styling system. Theme extensions for brand colors, fonts, shadows, and the hero gradient are in `tailwind.config.js`.
- Global base styles and Google Fonts import live in `src/styles/globals.css`.
- Local static assets that must ship as-is belong in `public/`.
- Several content images are still remote Unsplash URLs from `siteContent.js`; do not assume all images are local.

## Editing Notes
- The page uses anchor navigation (`#inicio`, `#quienes-somos`, etc.). Preserve section `id`s and existing `scroll-mt-*` offsets when editing section wrappers, or navbar jumps will break under the fixed header.
- Accessibility polish is already wired into interactive elements with `focus-visible` styles and menu `aria-*` attributes. Preserve those when refactoring components.
