export const navigation = [
  { label: 'Inicio', href: '/' },
  {
    label: 'La Asociación',
    children: [
      { label: 'Quiénes somos', href: '/quienes-somos/' },
      { label: 'Misión, valores y objetivos', href: '/mision-valores/' },
    ],
  },
  {
    label: 'Qué hacemos',
    children: [
      { label: 'Actividades', href: '/actividades/' },
      { label: 'Podcast', href: '/podcast/' },
    ],
  },
  { label: 'Hazte Socia', href: '/socias/' },
  { label: 'Recursos', href: '/recursos/' },
  { label: 'Contacto', href: '/contacto/' },
];

// Original dimensions; responsive WebP derivatives sit beside the source files.
export const imageDimensions = {
  '/miradastodas.png': [1600, 1200],
  '/socias.png': [1448, 1086],
  '/Paca_montse_concejala.png': [1600, 1200],
  '/ayala.png': [1124, 1406],
  '/susy.png': [1200, 1600],
  '/teatro.png': [1200, 1600],
  '/patronato.png': [2000, 1126],
};

export const heroContent = {
  title: 'Asociación\nLa Mirada Violeta',
  description:
    'Dando voz a las mujeres del pasado, del presente y del futuro en Fuenlabrada.',
  cta: { label: 'Ver actividades', href: '/actividades/' },
  image: '/banner-sinletras.png',
};

export const galleryItems = [
  {
    title: 'Colaboraciones destacadas',
    image: '/Paca_montse_concejala.png',
    alt: 'Participantes de la asociación junto a una representante institucional',
  },
  {
    title: 'Participación en ferias',
    image: '/ayala.png',
    alt: 'Miembros de la asociación participando en una feria local',
  },
  {
    title: 'Teatro y expresión',
    image: '/miradastodas.png',
    alt: 'Foto grupal de las mujeres de la asociación',
  },
];

export const aboutContent = {
  eyebrow: 'Comunidad feminista en Fuenlabrada',
  title: 'Quiénes somos',
  paragraphs: [
    'La Mirada Violeta somos una asociación feminista de Fuenlabrada profundamente vinculada a nuestros barrios. Nos mueve el compromiso con la igualdad, la justicia social y la transformación desde lo local y lo colectivo.',
    'Lo que nos hace fuertes es nuestra diversidad: somos mujeres de entre 24 y 70 años, con diferentes trayectorias y experiencias, unidas para aprender las unas de las otras y tejer redes de apoyo mutuo.',
  ],
  actionsHeading: '¿Qué hacemos?',
  actions: [
    {
      title: 'Espacios seguros',
      description:
        'Creamos encuentros inclusivos donde compartir, debatir y fortalecernos juntas desde una perspectiva interseccional.',
    },
    {
      title: 'Acción comunitaria',
      description:
        'Desarrollamos talleres, actividades y campañas de sensibilización para impulsar el empoderamiento y la igualdad de oportunidades.',
    },
    {
      title: 'Tejido local',
      description:
        'Colaboramos con el territorio y con colectivos que comparten nuestros valores porque la transformación social empieza en la comunidad.',
    },
  ],
  closing:
    '¿Sintonizas con nuestra mirada? Te invitamos a conocernos, participar y seguir construyendo juntas una sociedad más justa.',
  image: '/quienes2.png',
  imageAlt: 'Mujeres de la asociación reunidas en un encuentro compartido',
};

export const aboutPageContent = {
  intro: [
    'La Mirada Violeta somos una asociación feminista, antirracista y transincluyente de Fuenlabrada, vinculada a nuestros barrios y comprometida con la igualdad, la justicia social y la transformación desde lo local.',
    'Nacemos de la convicción de que crear espacios para encontrarnos, compartir experiencias y apoyarnos mutuamente también es una forma de hacer feminismo.',
    'Somos mujeres de distintas edades, trayectorias e intereses que compartimos una mirada feminista y las ganas de aprender, crear y construir comunidad juntas.',
  ],
  presence: [
    { title: 'Cercanas', description: 'trabajamos desde Fuenlabrada y nuestros barrios.' },
    { title: 'Participativas', description: 'las ideas y propuestas se construyen entre todas.' },
    { title: 'Diversas', description: 'compartimos experiencias, edades e intereses distintos.' },
    { title: 'Comunitarias', description: 'tejemos redes de apoyo, aprendizaje y colaboración.' },
  ],
  board: [
    { role: 'Presidenta', name: 'Susana' },
    { role: 'Vicepresidenta', name: 'Angéles' },
    { role: 'Secretaria', name: 'Lidia' },
    { role: 'Tesorera', name: 'Cynthia' },
    { role: 'Vocal', name: 'Lía' },
  ],
  whatWeDo: [
    'Organizamos talleres, charlas, encuentros y actividades gratuitas con perspectiva feminista. Queremos crear propuestas accesibles y cercanas donde aprender, compartir, reflexionar y disfrutar.',
    'También generamos espacios de participación entre socias, compartimos contenidos en redes y buscamos que nuevas ideas puedan convertirse en actividades y proyectos.',
  ],
  activityTypes: [
    { title: 'Talleres y actividades', description: 'Propuestas gratuitas y abiertas con perspectiva feminista.' },
    { title: 'Encuentros y debate', description: 'Espacios para aprender, compartir experiencias y reflexionar juntas.' },
    { title: 'Comunidad y participación', description: 'Una asociación donde las socias pueden proponer, colaborar y crear.' },
  ],
  sections: [
    {
      title: 'Cómo nos organizamos',
      description: 'Nos reunimos periódicamente para organizar actividades, repartir tareas, preparar contenidos y coordinar los proyectos de la asociación.',
    },
    {
      title: 'Una asociación abierta a nuevas ideas',
      description: 'Muchas de nuestras propuestas nacen de las propias socias. Cada mujer puede aportar ideas, experiencia, conocimientos o tiempo según su disponibilidad.',
    },
    {
      title: 'Redes para llegar a más mujeres',
      description: 'Utilizamos las redes sociales para compartir actividades y contenidos y acercarnos a mujeres de distintas edades, dentro y fuera de Fuenlabrada.',
    },
    {
      title: 'Aprender y crecer juntas',
      description: 'Organizamos encuentros de formación, debate e intercambio entre socias para compartir conocimientos y aprender unas de otras.',
    },
  ],
};

export const pillars = [
  {
    title: 'Sororidad',
    description: 'Espacios seguros para sanar, compartir y transformarnos juntas.',
  },
  {
    title: 'Visibilización',
    description: 'Abrimos caminos, rompemos silencios y sumamos nuestras voces.',
  },
];

export const activities = [
  {
    title: 'Miradas Alternativas',
    description:
      'Exposición fotográfica en colaboración con la Asociación Xanas. Visibilizando la diversidad de cuerpos no normativos.',
    image: '/susy.png',
  },
  {
    title: 'Microteatro',
    description:
      'Charla y teatro exponiendo las diferentes violencias en colaboración con Más Madrid Fuenlabrada',
    image: '/teatro.png',
  },
  {
    title: 'Conferencias y Debate',
    description:
      'Charlas tematizadas para el conocimiento de la población. En este caso, sobre el Patronato de Protección a la mujer',
    image: '/patronato.png',
  },
];

export const upcomingActivities = [
  {
    title: 'Huelga en minifalda',
    details: '7 de octubre · Plaza de la Constitución, Fuenlabrada',
  },
  {
    title: 'Charla: El cáncer no es rosa',
    details: 'Fecha, hora y localización por confirmar',
  },
  {
    title: 'Palestina desde los ojos de sus mujeres',
    details: 'Fecha, hora y localización por confirmar',
  },
  {
    title: 'Charla: Sexualidad en la madurez',
    details: 'Fecha, hora y localización por confirmar',
  },
];

export const podcastContent = {
  title: 'Se vienen cositas... y tu voz cuenta.',
  text: 'Estamos preparando un nuevo podcast feminista y este espacio también es tuyo. ¿De qué temas te gustaría que hablemos? ¿Qué voces o debates echas en falta? Entra en el formulario, déjanos tus ideas y ayúdanos a construir los próximos episodios.',
  cta: {
    label: 'Déjanos tus ideas aquí',
    href: 'https://forms.gle/jvptTa7dFfjkjGQc6',
  },
};

// Add future episodes here without changing the podcast page structure.
export const podcastEpisodes = [];

export const calendarContent = {
  title: 'Próximos eventos',
  subtitle:
    'Conoce las últimas actividades, talleres y eventos en Fuenlabrada.',
  embedUrl:
    'https://calendar.google.com/calendar/embed?src=3ddb1df1f0ac98cf62bd6430bf0eae8dba260e37b07b8a8f72f7aaf3043495b9%40group.calendar.google.com&ctz=Europe%2FMadrid',
};

export const contactContent = {
  title: 'Conecta con Nosotras',
  heading: '¿Quieres participar o colaborar?',
  paragraphs: [
    'Si vives en Fuenlabrada o alrededores y deseas sumarte a nuestras asambleas presenciales, proponer una actividad o hacernos una consulta, no dudes en escribirnos.',
    'Puedes escribirnos por correo electrónico o encontrarnos en nuestras redes sociales oficiales para seguir de cerca actividades, encuentros y novedades de la asociación.',
  ],
  location: 'Fuenlabrada, Madrid',
  locationUrl:
    'https://www.google.com/maps/search/?api=1&query=Centro+8+de+Marzo+Fuenlabrada',
  email: 'contacto@lamiradavioleta.org',
};

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/lamiradavioletafuenla',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@lamiradavioletafuenla',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/asociacion-la-mirada-violeta',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@lamiradavioletafuenla',
  },
  {
    label: 'Correo electrónico',
    href: 'mailto:contacto@lamiradavioleta.org',
  },
];
