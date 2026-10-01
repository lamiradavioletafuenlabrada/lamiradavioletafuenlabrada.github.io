export const pages = [
  { id: 'inicio', path: '/', title: 'La Mirada Violeta | Asociación feminista en Fuenlabrada', description: 'La Mirada Violeta es una asociación feminista en Fuenlabrada que impulsa actividades, encuentros y acción comunitaria por la igualdad.' },
  { id: 'quienes-somos', path: '/quienes-somos/', title: 'Quiénes somos | La Mirada Violeta Fuenlabrada', description: 'Conoce La Mirada Violeta, una asociación feminista en Fuenlabrada comprometida con la igualdad, la participación y el apoyo mutuo.' },
  { id: 'mision-valores', path: '/mision-valores/', title: 'Misión, valores y objetivos | La Mirada Violeta', description: 'Descubre la misión, los valores, los objetivos y la forma de trabajar de La Mirada Violeta en Fuenlabrada.' },
  { id: 'actividades', path: '/actividades/', title: 'Actividades feministas en Fuenlabrada | La Mirada Violeta', description: 'Consulta actividades feministas, encuentros, programación y calendario de La Mirada Violeta en Fuenlabrada.' },
  { id: 'podcast', path: '/podcast/', title: 'Podcast feminista | La Mirada Violeta', description: 'Podcast feminista de La Mirada Violeta sobre mujeres, igualdad, cultura y experiencias que merecen ser escuchadas.' },
  { id: 'socias', path: '/socias/', title: 'Hazte socia | La Mirada Violeta Fuenlabrada', description: 'Infórmate sobre cómo hacerte socia de La Mirada Violeta, participar y apoyar una asociación feminista en Fuenlabrada.' },
  { id: 'recursos', path: '/recursos/', title: 'Recursos para mujeres en Fuenlabrada | La Mirada Violeta', description: 'Recursos para mujeres en Fuenlabrada: ayuda ante la violencia de género, atención social, psicológica, jurídica y emergencias.' },
  { id: 'contacto', path: '/contacto/', title: 'Contacto | La Mirada Violeta Fuenlabrada', description: 'Contacta con La Mirada Violeta en Fuenlabrada para participar, proponer actividades o colaborar con la asociación.' },
  { id: 'iniciativas', path: '/iniciativas/', title: 'Contenido reorganizado | La Mirada Violeta', description: 'Consulta la nueva página del podcast de La Mirada Violeta.', canonical: '/podcast/', indexable: false },
  { id: 'calendario', path: '/calendario/', title: 'Calendario integrado | La Mirada Violeta', description: 'Consulta el calendario integrado en la página de actividades de La Mirada Violeta.', canonical: '/actividades/', indexable: false },
  { id: 'aviso-legal', path: '/aviso-legal/', title: 'Aviso legal | La Mirada Violeta', description: 'Aviso legal de la Asociación de Mujeres La Mirada Violeta, entidad sin ánimo de lucro de Fuenlabrada.' },
  { id: 'politica-privacidad', path: '/politica-privacidad/', title: 'Política de privacidad | La Mirada Violeta', description: 'Información sobre el tratamiento y la protección de datos personales de La Mirada Violeta.' },
  { id: 'actualizacion-correo', path: '/actualizacion-correo/', title: 'Actualización de correo | La Mirada Violeta', description: 'Comunicado oficial sobre el correo de contacto de La Mirada Violeta: contacto@lamiradavioleta.org.' },
];

export function pageFromPath(path) {
  const normalized = `${path.replace(/\/index\.html$/, '').replace(/\/$/, '')}/`;
  return pages.find((page) => page.path === normalized) || (path.endsWith('/404.html') ? { id: '404' } : undefined);
}
