export const pages = [
  { id: 'inicio', path: '/', title: 'Asociación La Mirada Violeta | Fuenlabrada', description: 'Asociación feminista de Fuenlabrada. Encuentros, actividades y acción colectiva por la igualdad, desde nuestros barrios.' },
  { id: 'quienes-somos', path: '/quienes-somos/', title: 'Quiénes somos | La Mirada Violeta', description: 'Conoce nuestra asociación feminista de Fuenlabrada, nuestros valores y nuestra forma de tejer comunidad y redes de apoyo mutuo.' },
  { id: 'mision-valores', path: '/mision-valores/', title: 'Misión, valores y objetivos | La Mirada Violeta', description: 'Conoce la misión, los valores, los objetivos y la forma de trabajar de La Mirada Violeta.' },
  { id: 'actividades', path: '/actividades/', title: 'Actividades | La Mirada Violeta', description: 'Consulta la programación, las actividades destacadas y el calendario de La Mirada Violeta en Fuenlabrada.' },
  { id: 'podcast', path: '/podcast/', title: 'Podcast | La Mirada Violeta', description: 'Voces y conversaciones sobre mujeres, feminismo, cultura, igualdad y experiencias que merecen ser escuchadas.' },
  { id: 'socias', path: '/socias/', title: 'Hazte socia | La Mirada Violeta', description: 'Conoce cómo formar parte de La Mirada Violeta, aportar tus ideas y participar en la asociación.' },
  { id: 'recursos', path: '/recursos/', title: 'Recursos para mujeres | La Mirada Violeta', description: 'Recursos de ayuda para mujeres en Fuenlabrada: violencia de género, atención psicológica, jurídica, social y teléfonos de emergencia.' },
  { id: 'contacto', path: '/contacto/', title: 'Contacto | La Mirada Violeta', description: 'Contacta con La Mirada Violeta para participar, proponer actividades o colaborar. Correo y redes oficiales de la asociación.' },
  { id: 'iniciativas', path: '/iniciativas/', title: 'Contenido reorganizado | La Mirada Violeta', description: 'Consulta la nueva página del podcast de La Mirada Violeta.', canonical: '/podcast/' },
  { id: 'calendario', path: '/calendario/', title: 'Calendario integrado | La Mirada Violeta', description: 'Consulta el calendario integrado en la página de actividades de La Mirada Violeta.', canonical: '/actividades/#calendario' },
  { id: 'aviso-legal', path: '/aviso-legal/', title: 'Aviso legal | La Mirada Violeta', description: 'Aviso legal de la Asociación de Mujeres La Mirada Violeta, entidad sin ánimo de lucro de Fuenlabrada.' },
  { id: 'politica-privacidad', path: '/politica-privacidad/', title: 'Política de privacidad | La Mirada Violeta', description: 'Información sobre el tratamiento y la protección de datos personales de La Mirada Violeta.' },
  { id: 'actualizacion-correo', path: '/actualizacion-correo/', title: 'Actualización de correo | La Mirada Violeta', description: 'Comunicado oficial sobre el correo de contacto de La Mirada Violeta: contacto@lamiradavioleta.org.' },
];

export function pageFromPath(path) {
  const normalized = `${path.replace(/\/index\.html$/, '').replace(/\/$/, '')}/`;
  return pages.find((page) => page.path === normalized);
}
