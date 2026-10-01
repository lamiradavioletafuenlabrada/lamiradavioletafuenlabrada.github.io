export const pages = [
  { id: 'inicio', path: '/', title: 'Asociación La Mirada Violeta | Fuenlabrada', description: 'Asociación feminista de Fuenlabrada. Encuentros, actividades y acción colectiva por la igualdad, desde nuestros barrios.' },
  { id: 'quienes-somos', path: '/quienes-somos/', title: 'Quiénes somos | La Mirada Violeta', description: 'Conoce nuestra asociación feminista de Fuenlabrada, nuestros valores y nuestra forma de tejer comunidad y redes de apoyo mutuo.' },
  { id: 'actividades', path: '/actividades/', title: 'Actividades | La Mirada Violeta', description: 'Exposiciones, microteatro, charlas y encuentros de La Mirada Violeta. Consulta la programación publicada y las actividades compartidas.' },
  { id: 'iniciativas', path: '/iniciativas/', title: 'Iniciativas | La Mirada Violeta', description: 'Ayúdanos a construir nuestro podcast feminista. Comparte temas, voces y debates para un espacio hecho entre todas.' },
  { id: 'calendario', path: '/calendario/', title: 'Calendario | La Mirada Violeta', description: 'Consulta el calendario de actividades, talleres y encuentros de La Mirada Violeta en Fuenlabrada.' },
  { id: 'contacto', path: '/contacto/', title: 'Contacto | La Mirada Violeta', description: 'Contacta con La Mirada Violeta para participar, proponer actividades o colaborar. Correo y redes oficiales de la asociación.' },
  { id: 'aviso-legal', path: '/aviso-legal/', title: 'Aviso legal y privacidad | La Mirada Violeta', description: 'Política de privacidad y protección de datos de la Asociación de Mujeres La Mirada Violeta.' },
  { id: 'actualizacion-correo', path: '/actualizacion-correo/', title: 'Actualización de correo | La Mirada Violeta', description: 'Comunicado oficial sobre el correo de contacto de La Mirada Violeta: contacto@lamiradavioleta.org.' },
];

export function pageFromPath(path) {
  const normalized = `${path.replace(/\/index\.html$/, '').replace(/\/$/, '')}/`;
  return pages.find((page) => page.path === normalized);
}
