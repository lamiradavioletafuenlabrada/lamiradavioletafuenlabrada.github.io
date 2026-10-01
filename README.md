# lamiradavioletafuenlabrada.github.io

Web estatica multipagina de la Asociacion La Mirada Violeta, con `React + Vite + Tailwind CSS`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El archivo `CNAME` debe permanecer en `public/` para GitHub Pages.

El build genera ocho paginas con HTML completo en `dist/`: inicio, quienes-somos,
actividades, iniciativas, calendario, contacto, aviso-legal y actualizacion-correo.
Cada ruta interior tiene su propio `index.html`, metadatos y canonical. No necesita
backend, reglas de reescritura ni Node.js en produccion. Las paginas son legibles y
el menu movil funciona sin JavaScript. El calendario de Google se carga directamente
mediante un iframe responsive en su pagina, con enlace alternativo al servicio.

`scripts/build.mjs` compila el cliente, renderiza React durante la compilacion y elimina
el bundle de renderizado antes de publicar. Tambien genera `sitemap.xml` y `robots.txt`.
No editar ni versionar `dist/`.

## Edicion

- Contenido y enlaces: `src/data/siteContent.js`.
- Rutas y metadatos: `src/data/pages.js`.
- Paginas y contenido legal conservado: `src/components/SitePages.jsx`.
- Cabecera, navegacion y pie compartidos: `src/App.jsx`.
- Estilos, colores y tipografias: variables de `src/styles/globals.css`.
- Fotografias: originales conservados en `public/`, con variantes WebP de 640 y 1200 px.

Para crear una pagina, anadir su ruta en `pages.js` y su contenido en `SitePages.jsx`.
Para enlazar una actividad a una futura ficha, anadir `href` a sus datos y crear la pagina
correspondiente. No publicar fechas ni inscripciones sin confirmacion.

Los enlaces empiezan por `/` y se resuelven desde el dominio personalizado, tambien
desde paginas interiores. Se conservan `/aviso-legal/`, `/actualizacion-correo/` y los
enlaces antiguos de secciones mediante redirecciones de fragmentos en el cliente.

## Verificacion

```bash
npm run build
node scripts/check-static.mjs
npm run preview
```

La comprobacion estatica revisa todas las rutas generadas, enlaces y recursos locales,
metadatos, encabezados y dominio. Las pruebas visuales, de teclado y del calendario
requieren ademas un navegador. Revisar `dist/` servido por HTTP, no mediante `file://`.

## Despliegue

El repositorio incluye `.github/workflows/deploy.yml` para publicar `dist/` en GitHub Pages con GitHub Actions.

En la configuracion del repositorio, la fuente de Pages debe estar en `GitHub Actions`.
