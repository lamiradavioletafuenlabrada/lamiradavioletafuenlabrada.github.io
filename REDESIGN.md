# Rediseño de La Mirada Violeta

## Análisis previo

El sitio original utilizaba React 18, Vite 5, Tailwind CSS 3 y react-icons.
La portada contenía presentación, galería, asociación, actividades, podcast,
calendario y contacto, enlazados mediante fragmentos. Existían dos documentos
HTML independientes: aviso legal y comunicado de actualización del correo.
No había noticias editoriales, biblioteca de recursos, episodios de podcast,
fichas de actividades, documentos descargables ni backend.

Se revisaron los datos, todos los componentes, ambas páginas independientes,
los estilos, las configuraciones de compilación y despliegue, y los recursos públicos.

## Contenido y recursos conservados

- Presentación de la asociación, diversidad de sus socias, acciones y valores.
- Tres fotografías de galería y fotografía de socias.
- Miradas Alternativas, Microteatro y Conferencias y Debate, con sus imágenes y colaboraciones.
- Las cuatro actividades anunciadas, sin añadir años, horarios ni inscripciones.
- Propuesta de podcast y formulario externo de ideas.
- Calendario de Google existente y zona horaria Europe/Madrid.
- Correo actual, redes oficiales y enlace al mapa.
- Siete apartados legales completos: responsable, NIF, domicilio, datos, finalidades,
  legitimación, conservación, destinatarios y derechos, incluido el buzón de gestión.
- Comunicado completo de cambio de correo, incluida la dirección anterior como referencia histórica.
- Logotipos institucionales, favicon, dominio, imagen social y configuración de GitHub Pages.

Las fotografías originales `Paca_montse_concejala.png`, `ayala.png`, `miradastodas.png`,
`socias.png`, `susy.png`, `teatro.png` y `patronato.png` permanecen en sus URLs.
Se añadieron catorce derivados WebP de 640 y hasta 1200 píxeles.

Los banners `banner-sinletras.png`, `banner-final.png`, `banner-limpio.png` y
`banner-izq-vacio.png`, el logo `logo_transparente_LMV.png`, los carteles `cartel.png`
y `loranca.png`, `ayala.jpeg` y todas las variantes de logos institucionales
siguen en `public/`, aunque algunas no se muestran en las páginas.
Los SVG institucionales se reutilizan en el pie. El banner con el nombre se conserva
como imagen Open Graph; la portada utiliza una fotografía real de la asociación.

## Arquitectura y diseño

Navegación: Inicio, Quiénes somos, Actividades, Iniciativas, Calendario y Contacto.
El pie también enlaza Aviso legal y privacidad y el comunicado de correo.
No se crearon páginas vacías de Noticias o Recursos.

Cada página tiene un `index.html` completo generado durante la compilación.
Node.js solo interviene en desarrollo y build; la publicación contiene archivos estáticos.
No se utiliza router de servidor, backend ni nuevas dependencias de la aplicación.
El menú móvil nativo funciona sin JavaScript. El calendario se muestra directamente
mediante un iframe responsive y mantiene un enlace alternativo a Google.

El diseño comparte variables CSS, componentes de fotografías, tarjetas y títulos,
con fondos crema, texto carbón y violeta en acentos. Georgia aporta personalidad
a los títulos y la tipografía de sistema facilita la lectura sin peticiones de fuentes externas.
Se eliminaron parallax, animaciones de aparición y redes flotantes para evitar
movimiento innecesario, contenido invisible y controles superpuestos en móvil.

Los documentos antes ubicados en `public/aviso-legal/index.html` y
`public/actualizacion-correo/index.html` se integraron en `SitePages.jsx` para compartir
diseño y navegación. Sus URLs y contenidos se conservan en la salida generada.
Se retiraron los componentes de la antigua landing y el hook de parallax, ya sin uso.

## Decisiones editoriales

No se presenta como vigente el antiguo texto «este mes»: las fechas publicadas
carecen de año y varias actividades tienen detalles pendientes. Se conserva la
programación con un aviso y enlaces para consultar el calendario o confirmar los datos.
Los carteles de Loranca no se incorporaron a la agenda: no indican año y uno anuncia
una inscripción que no existe en el sitio. Sus recursos permanecen disponibles.
Se quitaron únicamente los emojis decorativos del título del podcast.
No se añadieron testimonios, estadísticas, integrantes, fechas ni inscripciones.

El Centro 8 de Marzo se presenta como referencia del mapa, no como sede confirmada.
Se corrigió el texto alternativo del SVG de Feminismo y Diversidad, que antes se
identificaba como el logo del Centro 8 de Marzo.

## Verificación realizada

- Build de producción y comprobación de ocho páginas y 271 referencias locales.
- Apertura directa y recarga en un servidor estático sin fallback de rutas.
- Navegación, fotografías y ausencia de desbordamientos a 320, 390, 768, 1024 y 1440 píxeles.
- axe en las cuarenta combinaciones de página y tamaño, sin infracciones detectadas
  en los criterios WCAG A/AA automatizados revisados; no equivale a auditoría completa.
- Menú móvil con teclado, Enter, Tab, Escape y recuperación del foco.
- Todas las páginas y menú móvil con JavaScript desactivado.
- Compatibilidad con los fragmentos antiguos al entrar y al cambiar el hash.
- En la primera fase se verificó la carga voluntaria del calendario; la segunda fase
  sustituye ese comportamiento por un iframe presente desde el HTML inicial.
- Comparación de todos los párrafos, apartados y elementos de lista legales con el original.
- Sin errores de JavaScript, hidratación o respuestas HTTP locales fallidas.
- Preferencia de movimiento reducido y revisión visual de capturas de inicio y actividades.
- Ocho destinos externos comprobados por HTTP, sin 404. LinkedIn restringe algunos clientes
  automatizados; Instagram no permite confirmar el perfil mediante el contenido obtenido.

No se enviaron correos ni formularios. Los eventos reales de Calendar y el resultado
geográfico de Maps no quedaron verificados. Las pruebas se realizaron localmente,
no en una nueva publicación de GitHub Pages. El despliegue incorpora la comprobación estática.

## Segunda fase

Confirmar fechas y vigencia de la programación, y publicar fichas de actividades
cuando existan datos suficientes. Añadir episodios al podcast cuando estén disponibles.
Revisar con la asociación la política de privacidad: describe un formulario de
inscripción diferente del formulario de ideas enlazado y necesita contrastarse con
los servicios externos y el tratamiento de fotografías. No se reescribió contenido
legal sin validación. Confirmar también el buzón `gestion@lamiradavioleta.org`.
Completar pruebas con lector de pantalla y comprobar el sitio tras su publicación.

## Segunda pasada visual

Se mantienen las ocho páginas, sus rutas, contenido y recursos. La paleta, espaciado,
radios y duración de transiciones se centralizan en variables CSS. El hero reduce
el título y conserva las personas como foco de la fotografía, con una forma lavanda
abstracta detrás. Las actividades destacadas usan una franja lavanda clara y tarjetas
fotográficas; las llamadas a participar y el pie utilizan lavanda con detalles curvos.
El header sticky reduce discretamente su altura al desplazarse.

El calendario se carga sin consentimiento intermedio, por petición expresa.
La vista de agenda evita la cuadrícula estrecha en móvil; el iframe ocupa todo el
ancho del contenedor y el enlace directo sigue disponible. Se elimina el botón y
el texto que describían la carga voluntaria. El contenido legal no se modifica.

La segunda pasada se comprobó en las ocho páginas a 375, 430, 768, 1024 y 1440 píxeles,
con apertura directa, recarga, teclado, foco, imágenes y axe sobre el contenido local.
Se verificó además el calendario real de Google: respuesta HTTP 200, eventos visibles
y ausencia de desbordamiento horizontal tanto en la página como dentro del iframe
en los cinco tamaños. La interfaz del calendario se solicita en español.
