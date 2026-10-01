import { useState } from 'react';
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

function PageIntro({ title, eyebrow, children }) {
  return (
    <div className="page-intro">
      <a className="text-link" href="/">Inicio</a>
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
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section id="calendario" className="section container scroll-mt-28">
        <PageIntro title="Calendario" eyebrow={calendarContent.title}>
          <p>{calendarContent.subtitle}</p>
        </PageIntro>
        <div className="calendar-panel">
          <h2>Consulta el calendario</h2>
          <p>
            El calendario es un servicio externo de Google. No se carga automáticamente.
            Al pulsar «Mostrar calendario de Google», se establecerá una conexión con Google,
            que podrá tratar datos de navegación conforme a su política de privacidad.
          </p>
          <div className="actions">
            <button
              type="button"
              className="button"
              aria-expanded={showCalendar}
              aria-controls="google-calendar"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {showCalendar ? 'Ocultar calendario de Google' : 'Mostrar calendario de Google'}
            </button>
            <a className="text-link" href={calendarContent.embedUrl} target="_blank" rel="noopener noreferrer">
              Abrir el calendario directamente en Google
            </a>
          </div>
          <div id="google-calendar">
            {showCalendar && (
              <>
                <p className="muted" role="status">Se carga el calendario mediante el servicio externo de Google.</p>
                <iframe
                  title="Calendario de actividades de La Mirada Violeta"
                  src={calendarContent.embedUrl}
                  width="100%"
                  height="600"
                  loading="lazy"
                />
              </>
            )}
          </div>
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
              <LocalPhoto image="/miradastodas.png" alt={galleryItems[2].alt} priority />
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
          <section id="actividades" className="section container scroll-mt-28">
            <div className="section-heading">
              <p className="eyebrow">Programación reciente</p>
              <h2>Actividades destacadas</h2>
            </div>
            <div className="grid-two">
              {activities.slice(0, 2).map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
            </div>
            <div className="actions"><a className="text-link" href="/actividades/">Ver todas las actividades</a></div>
          </section>
          <section className="section container">
            <div className="section-heading">
              <p className="eyebrow">Igualdad y transformación social</p>
              <h2>{aboutContent.actionsHeading}</h2>
            </div>
            <div className="grid-three">
              {aboutContent.actions.map((action) => (
                <article className="card" key={action.title}>
                  <div className="card-body"><h3>{action.title}</h3><p>{action.description}</p></div>
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
            <PageIntro title={aboutContent.title} eyebrow={aboutContent.eyebrow} />
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
              {aboutContent.actions.map((action) => (
                <article className="card" key={action.title}>
                  <div className="card-body"><h3>{action.title}</h3><p>{action.description}</p></div>
                </article>
              ))}
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><h2>Nuestros valores</h2></div>
            <div className="grid-two">
              {pillars.map((pillar) => (
                <article className="feature-panel" key={pillar.title}>
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
            <PageIntro title="Actividades" eyebrow="Encuentros y acción comunitaria">
              <p>Espacios para comprender el feminismo, visibilizar el conocimiento de las mujeres y tejer redes de apoyo mutuo.</p>
            </PageIntro>
            <div className="feature-panel">
              <p className="tag">Información publicada</p>
              <h2>Próximas actividades</h2>
              <p>
                La fecha publicada de «Huelga en minifalda» es el 7 de octubre, sin año indicado.
                Esta información no confirma una agenda vigente. Las demás fechas, horas y localizaciones
                están por confirmar. Consulta el calendario o escríbenos para confirmar los detalles antes de acudir.
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
            <PageIntro title="Iniciativas" eyebrow="Tu voz cuenta" />
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
          <PageIntro title={contactContent.title} eyebrow={contactContent.location} />
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
              <h3>Referencia en el mapa</h3>
              <p>El enlace al mapa señala el Centro 8 de Marzo de Fuenlabrada como referencia, no como sede de la asociación. Confirma con nosotras el lugar de cada encuentro.</p>
              <a className="text-link" href={contactContent.locationUrl} target="_blank" rel="noopener noreferrer">Ver el Centro 8 de Marzo en Google Maps</a>
            </div>
          </div>
        </section>
      );
    case 'aviso-legal':
      return (
        <section id="aviso-legal" className="section container scroll-mt-28">
          <PageIntro title="Política de privacidad y protección de datos" eyebrow="La Mirada Violeta" />
          <div className="prose">
            <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los participantes sobre el tratamiento de sus datos personales:</p>
            <h2>1. Responsable del Tratamiento</h2>
            <ul>
              <li><strong>Denominación:</strong> Asociación de Mujeres La Mirada Violeta</li>
              <li><strong>NIF:</strong> G-56468705</li>
              <li><strong>Domicilio:</strong> C/ de Tesillo, 28944, Fuenlabrada, Madrid.</li>
              <li><strong>Correo electrónico de contacto:</strong> contacto@lamiradavioleta.org</li>
            </ul>
            <h2>2. Datos objeto de tratamiento</h2>
            <p>Los datos recogidos a través del formulario corresponden a las categorías de datos identificativos: nombre, apellidos, número de teléfono, DNI, email.</p>
            <h2>3. Finalidad del tratamiento</h2>
            <p>Sus datos se utilizarán exclusivamente para:</p>
            <ul>
              <li>Gestionar la lista de inscritos a la actividad solicitada.</li>
              <li>Coordinar la asistencia y enviar comunicaciones relativas al desarrollo o incidencias de dicha actividad.</li>
            </ul>
            <h2>4. Legitimación</h2>
            <p>La base legal para el tratamiento de sus datos es el <strong>consentimiento explícito</strong> otorgado al marcar la casilla de aceptación y enviar el formulario de inscripción.</p>
            <h2>5. Plazo de conservación</h2>
            <p>Los datos se conservarán únicamente durante el tiempo estrictamente necesario para la realización de la actividad y la atención de posibles responsabilidades derivadas de la misma. Finalizado este periodo, serán suprimidos de forma segura.</p>
            <h2>6. Destinatarios</h2>
            <p>No se cederán datos personales a terceros ni se realizarán transferencias internacionales de datos, salvo obligación legal o en caso de ser estrictamente necesario para la seguridad de la actividad.</p>
            <h2>7. Derechos de los usuarios</h2>
            <p>Puede ejercer en cualquier momento sus derechos de <strong>acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad</strong>. Para ello, puede enviar una solicitud por escrito adjuntando copia de su documento de identidad a la dirección de correo electrónico: <strong>gestion@lamiradavioleta.org</strong>.</p>
            <p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a className="text-link" href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer">www.aepd.es</a> si considera que sus derechos han sido vulnerados.</p>
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
