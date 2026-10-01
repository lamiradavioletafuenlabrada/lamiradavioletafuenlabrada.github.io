import {
  heroContent,
  aboutContent,
  galleryItems,
  pillars,
  activities,
  upcomingActivities,
  podcastContent,
  calendarContent,
  contactContent,
  socialLinks,
  imageDimensions,
} from '../data/siteContent';
import { privacySections } from '../data/privacyContent';

const activityAlts = {
  '/susy.png': 'Una participante junto a una fotografía de cuerpos no normativos en la exposición Miradas Alternativas',
  '/teatro.png': 'Mujeres posando con pequeñas macetas ante un cartel sobre violencia vicaria en el encuentro de microteatro',
  '/patronato.png': 'Público asistiendo a una charla con el logotipo de La Mirada Violeta proyectado en el escenario',
};

function LocalPhoto({ image, alt, className = 'photo', priority = false, sizes = '(min-width: 850px) 540px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)' }) {
  const dimensions = imageDimensions[image];
  const base = image.replace(/\.png$/, '');
  return (
    <img className={className} src={dimensions ? `${base}-1200.webp` : image}
      srcSet={dimensions ? `${base}-640.webp 640w, ${base}-1200.webp ${Math.min(1200, dimensions[0])}w` : undefined}
      sizes={dimensions ? sizes : undefined} width={dimensions?.[0]} height={dimensions?.[1]}
      alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
  );
}

export function ActivityCard({ activity, href = activity.href }) {
  return (
    <article className="card activity-card">
      <LocalPhoto
        className="activity-image"
        image={activity.image}
        alt={activity.alt || activityAlts[activity.image] || activity.title}
        sizes="(min-width: 850px) 540px, (min-width: 640px) 50vw, calc(100vw - 40px)"
      />
      <div className="card-body">
        <h3>{href ? <a className="text-link" href={href}>{activity.title}</a> : activity.title}</h3>
        <p>{activity.description}</p>
      </div>
    </article>
  );
}

function ActionIcon({ type }) {
  const paths = {
    safe: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v9M7.5 12h9" /></>,
    community: <><circle cx="9" cy="9" r="2.5" /><circle cx="16.5" cy="10" r="2" /><path d="M4.5 18c.4-2.7 2-4 4.5-4s4.1 1.3 4.5 4M14 15c2.5-.7 4.3.3 5 2.7" /></>,
    local: <><path d="M4.5 18.5h15M6.5 18.5V9l5.5-4 5.5 4v9.5M9 18.5v-5h6v5" /><path d="M12 8.5v2" /></>,
  };
  return <svg className="action-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

function PageIntro({ title, eyebrow, children, showBack = true }) {
  return (
    <div className="page-intro">
      {showBack && <a className="text-link" href="/">Inicio</a>}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <div className="lead">{children}</div>}
    </div>
  );
}

function SharedCTA() {
  return (
    <section className="section container">
      <div className="cta-panel">
        <h2>Sigamos construyendo juntas</h2>
        <p className="lead">{aboutContent.closing}</p>
        <div className="actions">
          <a className="button" href="/contacto/">Contacta con nosotras</a>
          <a className="button button-secondary" href="/actividades/">Conoce nuestras actividades</a>
        </div>
      </div>
    </section>
  );
}

function CalendarPage() {
  return (
    <>
      <section id="calendario" className="section container scroll-mt-28">
        <PageIntro title="Calendario" eyebrow={calendarContent.title} showBack={false}>
          <p>{calendarContent.subtitle}</p>
        </PageIntro>
        <div className="calendar-container" id="google-calendar">
          <iframe
            title="Calendario de actividades de La Mirada Violeta"
            src={`${calendarContent.embedUrl}&mode=AGENDA&hl=es`}
            width="100%"
            height="680"
          />
        </div>
        <div className="actions">
          <a className="text-link" href={calendarContent.embedUrl} target="_blank" rel="noopener noreferrer">
            Abrir calendario en Google
          </a>
        </div>
      </section>
      <SharedCTA />
    </>
  );
}

export default function SitePages({ page }) {
  switch (page) {
    case 'inicio':
      return (
        <>
          <section id="inicio" className="home-hero container scroll-mt-28">
            <div className="split">
              <div>
                <p className="eyebrow">{aboutContent.eyebrow}</p>
                <h1>La Mirada Violeta</h1>
                <p className="lead">{heroContent.description}</p>
                <div className="actions">
                  <a className="button" href="/actividades/">{heroContent.cta.label}</a>
                  <a className="button button-secondary" href="/quienes-somos/">Conócenos</a>
                </div>
              </div>
              <div className="hero-portrait"><LocalPhoto image="/miradastodas.png" alt={galleryItems[2].alt} priority /></div>
            </div>
          </section>
          <section id="quienes-somos" className="section container scroll-mt-28">
            <div className="section-heading">
              <p className="eyebrow">{aboutContent.title}</p>
              <h2>Una mirada local y colectiva</h2>
              <p className="lead">{aboutContent.paragraphs[0]}</p>
            </div>
            <a className="text-link" href="/quienes-somos/">Conoce la asociación</a>
          </section>
          <section id="actividades" className="section section-tint scroll-mt-28">
            <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Programación reciente</p>
              <h2>Actividades destacadas</h2>
            </div>
            <div className="grid-two">
              {activities.slice(0, 2).map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
            </div>
            <div className="actions"><a className="text-link" href="/actividades/">Ver todas las actividades</a></div>
            </div>
          </section>
          <section className="section container">
            <div className="section-heading">
              <p className="eyebrow">Igualdad y transformación social</p>
              <h2>{aboutContent.actionsHeading}</h2>
            </div>
            <div className="grid-three">
              {aboutContent.actions.map((action, index) => (
                <article className="card" key={action.title}>
                  <div className="card-body"><ActionIcon type={['safe', 'community', 'local'][index]} /><h3>{action.title}</h3><p>{action.description}</p></div>
                </article>
              ))}
            </div>
          </section>
          <SharedCTA />
          <div className="container legacy-links">
            <a id="calendario" className="text-link" href="/calendario/">Consultar el calendario</a>
            <a id="contacto" className="text-link" href="/contacto/">Contactar con la asociación</a>
          </div>
        </>
      );
    case 'quienes-somos':
      return (
        <>
          <section id="quienes-somos" className="section container scroll-mt-28">
            <PageIntro title={aboutContent.title} eyebrow={aboutContent.eyebrow} showBack={false} />
            <div className="split">
              <div className="prose">
                {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <LocalPhoto image={aboutContent.image} alt={aboutContent.imageAlt} />
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><h2>{aboutContent.actionsHeading}</h2></div>
            <div className="grid-three">
              {aboutContent.actions.map((action, index) => (
                <article className="card" key={action.title}>
                  <div className="card-body"><ActionIcon type={['safe', 'community', 'local'][index]} /><h3>{action.title}</h3><p>{action.description}</p></div>
                </article>
              ))}
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><h2>Nuestros valores</h2></div>
            <div className="grid-two">
              {pillars.map((pillar) => (
                <article className="feature-panel values-panel" key={pillar.title}>
                  <h3>{pillar.title}</h3><p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><h2>Nuestras mujeres en acción</h2><p className="lead">Una asociación viva, tejida desde el encuentro, la escucha y la acción compartida.</p></div>
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure key={item.image}>
                  <LocalPhoto image={item.image} alt={item.alt} sizes="(min-width: 640px) 33vw, calc(100vw - 40px)" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          <SharedCTA />
        </>
      );
    case 'actividades':
      return (
        <>
          <section id="actividades" className="section container scroll-mt-28">
            <PageIntro title="Actividades" eyebrow="Encuentros y acción comunitaria" showBack={false}>
              <p>Espacios para comprender el feminismo, visibilizar el conocimiento de las mujeres y tejer redes de apoyo mutuo.</p>
            </PageIntro>
            <div className="feature-panel">
              <p className="tag">Nuevas actividades</p>
              <h2>Próximas actividades</h2>
              <p>
                Actualizaremos aquí las actividades a medida que confirmemos espacios. Las actividades que no tengan más información es porque tanto la fecha, hora y localización está por confirmar. Consulta el calendario o escríbenos para confirmar los detalles antes de acudir. Apúntate, todas son siempre gratuitas.
              </p>
              <ul className="upcoming-list">
                {upcomingActivities.map((activity) => (
                  <li className="upcoming-item" key={activity.title}>
                    <h3>{activity.title}</h3><p className="muted">{activity.details}</p>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <a className="button" href="/calendario/">Consultar el calendario</a>
                <a className="text-link" href="/contacto/">Consultar los detalles</a>
              </div>
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><p className="eyebrow">Programación reciente</p><h2>Lo que hemos compartido</h2></div>
            <div className="grid-three">
              {activities.map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
            </div>
            <div className="actions"><a className="text-link" href="/iniciativas/">Conoce nuestras iniciativas</a></div>
          </section>
          <SharedCTA />
        </>
      );
    case 'iniciativas':
      return (
        <>
          <section id="iniciativas" className="section container scroll-mt-28">
            <PageIntro title="Iniciativas" eyebrow="Tu voz cuenta" showBack={false} />
            <div className="feature-panel">
              <p className="tag">Podcast en preparación</p>
              <h2>{podcastContent.title}</h2>
              <p className="lead">{podcastContent.text}</p>
              <div className="actions">
                <a className="button" href={podcastContent.cta.href} target="_blank" rel="noopener noreferrer">
                  {podcastContent.cta.label}
                </a>
              </div>
            </div>
          </section>
          <SharedCTA />
        </>
      );
    case 'calendario':
      return <CalendarPage />;
    case 'contacto':
      return (
        <section id="contacto" className="section container scroll-mt-28">
          <PageIntro title={contactContent.title} eyebrow={contactContent.location} showBack={false} />
          <div className="split">
            <div className="prose">
              <h2>{contactContent.heading}</h2>
              {contactContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a className="text-link" href="/actualizacion-correo/">Comunicado oficial sobre la actualización del correo de contacto</a>
            </div>
            <div className="contact-panel">
              <h2>Correo y redes oficiales</h2>
              <p><a className="text-link" href={`mailto:${contactContent.email}`}>{contactContent.email}</a></p>
              <div className="actions">
                {socialLinks.filter((link) => !link.href.startsWith('mailto:')).map((link) => (
                  <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
              </div>
               <h3>Sede oficial de la Asociación</h3>
               <p>Actualmente no disponemos de espacio propio, esperamos contar con ello próximamente. En el mapa, verás que nos ubicamos en el Centro 8 de Marzo de Fuenlabrada como referencia. Confirma con nosotras el lugar de cada encuentro.</p>
              <a className="text-link" href={contactContent.locationUrl} target="_blank" rel="noopener noreferrer">Ver el Centro 8 de Marzo en Google Maps</a>
            </div>
          </div>
        </section>
      );
    case 'aviso-legal':
      return (
        <section id="aviso-legal" className="section container scroll-mt-28">
          <PageIntro title="Aviso Legal" eyebrow="La Mirada Violeta" />
          <div className="prose">
            <h2>1. Información general</h2>
            <p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos identificativos de la entidad responsable de este sitio web:</p>
            <p><strong>Titular:</strong> Asociación de Mujeres La Mirada Violeta<br /><strong>NIF:</strong> G56468705<br /><strong>Domicilio:</strong> C/ de Tesillo, 28944 Fuenlabrada, Madrid<br /><strong>Correo electrónico:</strong> contacto@lamiradavioleta.org<br /><strong>Sitio web:</strong> www.lamiradavioleta.org<br /><strong>Registro:</strong> Registro de Asociaciones de la Comunidad de Madrid<br /><strong>Número de inscripción:</strong> 40614</p>
            <p>La Asociación de Mujeres La Mirada Violeta es una entidad sin ánimo de lucro.</p>
            <h2>2. Objeto del sitio web</h2>
            <p>El sitio web de La Mirada Violeta tiene como finalidad informar sobre la Asociación, sus fines, actividades, talleres, encuentros, campañas, proyectos y otras iniciativas relacionadas con su actividad asociativa.</p>
            <p>Asimismo, podrá facilitar información sobre próximas actividades y proporcionar medios para contactar con la Asociación o inscribirse en determinadas actividades.</p>
            <h2>3. Condiciones de uso</h2>
            <p>El acceso y utilización de este sitio web atribuye la condición de persona usuaria e implica la aceptación de las presentes condiciones de uso.</p>
            <p>Las personas usuarias se comprometen a hacer un uso adecuado de los contenidos y servicios disponibles y a no utilizarlos para realizar actividades contrarias a la legislación vigente, los derechos de terceros o el orden público.</p>
            <p>La Mirada Violeta podrá modificar, actualizar o retirar contenidos de la página web cuando resulte necesario.</p>
            <h2>4. Propiedad intelectual e industrial</h2>
            <p>Los textos, diseños, logotipos, fotografías, vídeos y demás contenidos publicados en este sitio web podrán estar protegidos por derechos de propiedad intelectual e industrial.</p>
            <p>Salvo que se indique expresamente lo contrario, dichos contenidos pertenecen a La Mirada Violeta o se utilizan con la correspondiente autorización.</p>
            <p>No está permitida su reproducción, distribución, modificación o utilización con fines comerciales sin autorización previa de sus titulares, salvo en los casos permitidos por la legislación vigente.</p>
            <p>La utilización de contenidos de este sitio web con fines informativos o de difusión deberá respetar, en todo caso, la autoría y procedencia de los mismos.</p>
            <h2>5. Enlaces a páginas de terceros</h2>
            <p>Este sitio web puede contener enlaces a páginas web, redes sociales u otros servicios de terceros.</p>
            <p>La Mirada Violeta no controla necesariamente dichos sitios externos y no se responsabiliza de sus contenidos, disponibilidad, políticas de privacidad o funcionamiento.</p>
            <p>La inclusión de un enlace no implica necesariamente que exista una relación, colaboración o aprobación de los contenidos del sitio enlazado.</p>
            <h2>6. Responsabilidad</h2>
            <p>La Mirada Violeta procura que la información publicada en su página web sea correcta y esté actualizada.</p>
            <p>No obstante, no puede garantizar la inexistencia de errores puntuales, interrupciones del servicio o problemas técnicos ajenos a su control.</p>
            <p>La información relativa a actividades, fechas, horarios, espacios o condiciones de participación podrá sufrir modificaciones. Cuando sea posible, dichas modificaciones serán comunicadas a través de los canales habituales de la Asociación.</p>
            <h2>7. Protección de datos personales</h2>
            <p>El tratamiento de los datos personales realizado a través de este sitio web se regula en la <strong>Política de Privacidad y Protección de Datos</strong> de La Mirada Violeta.</p>
            <p>Las personas usuarias pueden consultar dicha política para conocer qué datos se recogen, con qué finalidad se utilizan, durante cuánto tiempo se conservan y cómo ejercer sus derechos.</p>
            <div className="actions"><a className="button button-secondary" href="/politica-privacidad/">Consultar la Política de Privacidad</a></div>
            <h2>8. Uso de imágenes</h2>
            <p>Las fotografías y vídeos publicados en este sitio web se utilizarán respetando la normativa aplicable y los derechos de las personas que aparezcan en ellos.</p>
            <p>Cuando resulte necesario, La Mirada Violeta solicitará la correspondiente autorización para la utilización y difusión de imágenes.</p>
            <h2>9. Legislación aplicable</h2>
            <p>El presente Aviso Legal se rige por la legislación española.</p>
            <p>Cualquier controversia derivada del acceso o utilización de este sitio web se resolverá de acuerdo con la normativa y los órganos jurisdiccionales que resulten legalmente competentes.</p>
            <h2>10. Modificación del Aviso Legal</h2>
            <p>La Mirada Violeta podrá modificar este Aviso Legal cuando resulte necesario para adaptarlo a cambios legislativos, técnicos o relacionados con el funcionamiento del sitio web.</p>
            <p>La versión vigente será la publicada en esta página.</p>
            <div className="actions"><a className="button" href="/">Volver a la página principal</a></div>
          </div>
        </section>
      );
    case 'politica-privacidad':
      return (
        <section id="politica-privacidad" className="section container scroll-mt-28">
          <PageIntro title="Política de Privacidad y Protección de Datos" eyebrow="La Mirada Violeta">
            <p>La Asociación de Mujeres La Mirada Violeta se compromete a proteger la privacidad y los datos personales de las personas que participan en sus actividades, contactan con la Asociación o utilizan los formularios disponibles en su página web.</p>
            <p>El tratamiento de los datos personales se realizará de conformidad con el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>
          </PageIntro>
          <div className="prose privacy-prose">
            {privacySections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.content}</section>)}
            <div className="actions"><a className="button" href="/">Volver a la página principal</a></div>
          </div>
        </section>
      );
    case 'actualizacion-correo':
      return (
        <section id="actualizacion-correo" className="section container scroll-mt-28">
          <PageIntro title="Actualización del correo de contacto" eyebrow="Comunicado oficial">
            <p>La Asociación La Mirada Violeta informa de forma expresa que ha actualizado su dirección de correo electrónico para comunicaciones institucionales, administrativas y de contacto general.</p>
          </PageIntro>
          <div className="prose">
            <p>A efectos informativos y para evitar confusiones en futuras comunicaciones, el correo anteriormente utilizado por la asociación era <strong className="muted">lamiradavioletafuenlabrada@gmail.com</strong>.</p>
            <div className="contact-panel">
              <h2>Correo de contacto actual</h2>
              <a className="text-link" href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            </div>
            <p>Desde este momento, la dirección <strong>contacto@lamiradavioleta.org</strong> es la vía recomendada para el envío y recepción de mensajes relacionados con la actividad de La Mirada Violeta, incluyendo consultas, colaboraciones, trámites y notificaciones de interés para la entidad.</p>
            <p>Esta página se publica como referencia oficial para entidades colaboradoras, plataformas de verificación, servicios externos y personas usuarias que necesiten confirmar la actualización del correo de la asociación.</p>
            <div className="actions">
              <a className="button" href={`mailto:${contactContent.email}`}>Escribir al nuevo correo</a>
              <a className="button button-secondary" href="/">Volver a la web principal</a>
            </div>
            <p className="muted">La Mirada Violeta · Fuenlabrada, Madrid · Página informativa sobre la actualización del correo de contacto.</p>
          </div>
        </section>
      );
    default:
      return null;
  }
}
