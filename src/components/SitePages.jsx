import {
  heroContent,
  aboutContent,
  galleryItems,
  pillars,
  activities,
  upcomingActivities,
  podcastContent,
  podcastEpisodes,
  calendarContent,
  contactContent,
  socialLinks,
  imageDimensions,
} from '../data/siteContent';
import { privacySections } from '../data/privacyContent';
import { officialResources } from '../data/resourceContent';

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
        {activity.startDate && <p><time dateTime={activity.startDate}>{activity.dateLabel || activity.startDate}</time>{activity.location && <> · <span>{activity.location}</span></>}</p>}
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

function CalendarEmbed() {
  return (
    <section className="section container calendar-section" id="calendario">
      <div className="section-heading">
        <p className="eyebrow">Calendario</p>
        <h2>Calendario</h2>
        <p className="lead">Consulta aquí nuestras próximas actividades, encuentros y eventos.</p>
      </div>
      <div className="calendar-container" id="google-calendar">
        <iframe
          title="Calendario de actividades de La Mirada Violeta"
          src={`${calendarContent.embedUrl}&mode=AGENDA&hl=es`}
          width="100%"
          height="680"
        />
      </div>
      <div className="actions">
        <a className="text-link" href={calendarContent.embedUrl} target="_blank" rel="noopener noreferrer">Abrir calendario en Google</a>
      </div>
    </section>
  );
}

function ResourceLink({ href, children, className = 'button button-secondary' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function ResourcesPage() {
  const { emergency, municipal, acopet, state } = officialResources;
  return (
    <>
      <section className="section container">
        <PageIntro title="Recursos para mujeres" eyebrow="Información y ayuda" showBack={false}>
          <p>Información práctica y recursos de apoyo para mujeres de Fuenlabrada y alrededores.</p>
          <p>Esta página reúne recursos oficiales de información, orientación y atención. Si existe peligro inmediato, llama al 112.</p>
        </PageIntro>
        <div className="resource-alert">
          <div><p className="eyebrow">Emergencias</p><strong>112</strong><p>Si hay peligro inmediato, llama a emergencias.</p></div>
          <div><h2>{emergency.title}</h2><p className="muted">Recursos gratuitos y confidenciales. El 016 ofrece información general y atención psicosocial 24 horas y puede derivar emergencias al 112.</p></div>
        </div>
      </section>

      <section className="section container resource-section">
        <div className="section-heading"><p className="eyebrow">Atención inmediata</p><h2>Servicio 016</h2></div>
        <div className="resource-grid resource-contact-grid">
          <article className="resource-card resource-contact"><h3>Teléfono</h3><a className="resource-number" href="tel:016">{emergency.phone}</a><p>Información y atención psicosocial, gratuita y confidencial.</p><a className="button" href="tel:016">Llamar al 016</a></article>
          <article className="resource-card resource-contact"><h3>WhatsApp</h3><a className="resource-number" href="https://wa.me/34600000016" target="_blank" rel="noopener noreferrer">{emergency.whatsapp}</a><p>Canal de WhatsApp del servicio 016.</p><ResourceLink href="https://wa.me/34600000016" className="button">WhatsApp 016</ResourceLink></article>
          <article className="resource-card resource-contact"><h3>Correo y chat</h3><p><strong>Correo:</strong> <a href={`mailto:${emergency.email}`}>{emergency.email}</a><br /><strong>Chat online:</strong> disponible en la web oficial de la Delegación del Gobierno contra la Violencia de Género.</p><ResourceLink href={emergency.officialUrl}>Web oficial del 016</ResourceLink></article>
        </div>
      </section>

      <section className="section section-tint resource-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Atención local</p><h2>Dónde acudir en Fuenlabrada</h2></div>
          <article className="resource-card resource-wide"><h3>{municipal.title}</h3><p>Este programa incluye atención social, psicológica y jurídica, atención psicológica a hijos e hijas menores, coordinación con otros recursos y recursos de alojamiento.</p><div className="resource-details"><p><strong>Casa de la Mujer</strong><br />{municipal.address}</p><p><strong>Teléfono:</strong> <a href="tel:+34916067412">{municipal.phone}</a><br /><strong>Correo:</strong> <a href={`mailto:${municipal.email}`}>{municipal.email}</a><br /><strong>Urgencias e información:</strong> <a href={`mailto:${municipal.urgentEmail}`}>{municipal.urgentEmail}</a>, <a href="tel:010">010</a> y <a href="tel:016">016</a></p></div><ResourceLink href={municipal.officialUrl}>Información oficial del Ayuntamiento</ResourceLink></article>
        </div>
      </section>

      <section className="section container resource-section">
        <div className="resource-grid">
          <article className="resource-card"><p className="eyebrow">Atención interdisciplinar</p><h2>Punto Municipal del Observatorio Regional</h2><p>Ofrece atención social, psicológica y jurídica, seguimiento y acompañamiento, y atención a menores cuando corresponde. Forma parte de la red de atención integral y se accede a través del programa municipal.</p><ResourceLink href={state.madridNetwork}>Consultar la red oficial</ResourceLink></article>
          <article className="resource-card"><p className="eyebrow">Protección</p><h2>Alojamiento y protección</h2><p>Existen recursos de alojamiento para mujeres víctimas de violencia de género destinados a proporcionar refugio, seguridad y protección. No publicamos direcciones de recursos protegidos.</p><ResourceLink href={municipal.officialUrl}>Consultar el servicio municipal</ResourceLink></article>
        </div>
      </section>

      <section className="section container resource-section">
        <div className="resource-grid">
          <article className="resource-card"><p className="eyebrow">Si tienes animales</p><h2>¿Y si tienes animales?</h2><p>ACOPET es un recurso de atención y acogida de animales de compañía para mujeres víctimas de violencia de género que acceden a recursos habitacionales. Las condiciones pueden cambiar.</p><div className="actions"><ResourceLink href={acopet.officialUrl}>Información municipal</ResourceLink><ResourceLink href={acopet.programUrl} className="text-link">Conocer ACOPET</ResourceLink></div></article>
          <article className="resource-card"><p className="eyebrow">Información actualizada</p><h2>Ayudas económicas</h2><p>Puede haber convocatorias de ayudas para mujeres víctimas de violencia de género. Las condiciones y cuantías dependen de cada convocatoria.</p><ResourceLink href={state.madridAid}>Consultar ayudas vigentes</ResourceLink></article>
        </div>
      </section>

      <section className="section section-tint resource-section">
        <div className="container"><div className="section-heading"><p className="eyebrow">Más información</p><h2>Otros recursos</h2></div><div className="resource-grid"><article className="resource-card"><h3>016</h3><p>Información y atención psicosocial para mujeres y su entorno.</p><ResourceLink href={state.official016}>Información oficial</ResourceLink></article><article className="resource-card"><h3>ATENPRO</h3><p>Servicio telefónico de atención y protección para mujeres víctimas de violencia de género.</p><ResourceLink href={state.atenpro}>Conocer ATENPRO</ResourceLink></article><article className="resource-card"><h3>Buscador oficial de recursos</h3><p>Localiza recursos de apoyo y prevención próximos a través de la Delegación del Gobierno contra la Violencia de Género.</p><ResourceLink href={state.finder}>Buscar recursos</ResourceLink></article></div></div>
      </section>

      <section className="section container resource-section">
        <div className="prose"><h2>¿Quieres ayudar a una amiga, familiar o conocida?</h2><p>Escuchar sin juzgar y buscar orientación profesional puede ser útil. El 016 también ofrece información al entorno de las mujeres que sufren violencia. Prioriza siempre los recursos profesionales y llama al 112 ante una emergencia.</p><div className="privacy-note"><strong>Seguridad y privacidad:</strong> si crees que alguien controla tu dispositivo, utiliza uno seguro para buscar ayuda cuando sea posible.</div></div>
        <div className="sources"><h2>Fuentes oficiales</h2><p><ResourceLink href="https://www.ayto-fuenlabrada.es/" className="text-link">Ayuntamiento de Fuenlabrada</ResourceLink><ResourceLink href="https://violenciagenero.igualdad.gob.es/" className="text-link">Delegación del Gobierno contra la Violencia de Género</ResourceLink><ResourceLink href="https://www.comunidad.madrid/" className="text-link">Comunidad de Madrid</ResourceLink><ResourceLink href={acopet.programUrl} className="text-link">ACOPET</ResourceLink></p><p className="muted">Última revisión de la información: [FECHA]</p><a className="text-link" href="/contacto/">Contacta con La Mirada Violeta</a></div>
      </section>
    </>
  );
}

function CalendarPage() {
  return (
    <section className="section container" id="calendario">
      <PageIntro title="Actividades" eyebrow="Programación" showBack={false}>
        <p>El calendario se ha integrado en la página de Actividades para reunir toda la programación en un mismo lugar.</p>
      </PageIntro>
      <div className="feature-panel">
        <h2>Calendario</h2>
        <p>Consulta el calendario completo de actividades, encuentros y eventos.</p>
        <a className="button" href="/actividades/#calendario">Ver el calendario en Actividades</a>
      </div>
    </section>
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
             <a id="calendario" className="text-link" href="/actividades/#calendario">Consultar el calendario de actividades</a>
             <a id="contacto" className="text-link" href="/contacto/">Contactar con la asociación</a>
             <a className="text-link" href="/socias/">Hazte socia</a>
             <a className="text-link" href="/recursos/">Recursos para mujeres</a>
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
            <div className="feature-panel"><p className="eyebrow">Nuestra identidad</p><h2>Misión, valores y objetivos</h2><p>Conoce las líneas de trabajo, los valores y la forma de trabajar de La Mirada Violeta.</p><a className="text-link" href="/mision-valores/">Conoce nuestra identidad</a></div>
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
            <PageIntro title="Actividades" eyebrow="Programación" showBack={false}>
              <p>En Fuenlabrada, creamos espacios para comprender el feminismo, visibilizar el conocimiento de las mujeres y tejer redes de apoyo mutuo.</p>
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
                    <h3>{activity.title}</h3><p className="muted">{activity.startDate ? <time dateTime={activity.startDate}>{activity.dateLabel || activity.startDate}</time> : activity.details}{activity.location && <> · <span>{activity.location}</span></>}</p>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <a className="button" href="/actividades/#calendario">Consultar el calendario</a>
                <a className="text-link" href="/contacto/">Consultar los detalles</a>
              </div>
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><p className="eyebrow">Programación reciente</p><h2>Actividades destacadas</h2></div>
            <div className="grid-three">
              {activities.slice(0, 2).map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
            </div>
          </section>
          <section className="section container">
            <div className="section-heading"><p className="eyebrow">Archivo</p><h2>Actividades anteriores</h2></div>
            <div className="grid-three">
              {activities.slice(2).map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
            </div>
          </section>
          <CalendarEmbed />
          <SharedCTA />
        </>
      );
    case 'iniciativas':
      return (
        <section className="section container">
          <PageIntro title="Podcast" eyebrow="Voces y conversaciones" showBack={false}>
            <p>Esta página se ha reorganizado dentro de la nueva sección del podcast.</p>
          </PageIntro>
          <div className="feature-panel"><a className="button" href="/podcast/">Ir al podcast</a></div>
        </section>
      );
    case 'mision-valores':
      return (
        <>
          <section className="section container">
            <PageIntro title="Misión, valores y objetivos" eyebrow="Nuestra identidad" showBack={false}>
              <p>La Mirada Violeta es una asociación feminista de Fuenlabrada comprometida con la igualdad, la justicia social y la transformación desde lo local y lo colectivo.</p>
            </PageIntro>
            <div className="prose">
              <h2>Nuestra misión</h2>
              <p>{aboutContent.paragraphs[0]}</p>
              <h2>Nuestra visión</h2>
              <p>Queremos seguir construyendo una comunidad feminista donde las mujeres puedan encontrarse, participar, aprender y apoyarse desde la diversidad de sus experiencias.</p>
              <h2>Nuestros valores</h2>
              <div className="grid-two identity-grid">
                {pillars.map((pillar) => <article className="feature-panel values-panel" key={pillar.title}><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}
              </div>
              <h2>Nuestros objetivos</h2>
              <ul>{aboutContent.actions.map((action) => <li key={action.title}><strong>{action.title}:</strong> {action.description}</li>)}</ul>
              <h2>Cómo trabajamos</h2>
              <p>{aboutContent.paragraphs[1]} Colaboramos con el territorio y con colectivos que comparten nuestros valores porque la transformación social empieza en la comunidad.</p>
              <h2>Nuestro ámbito</h2>
              <p>Trabajamos desde Fuenlabrada y sus barrios, tejiendo redes de apoyo mutuo, participación y acción comunitaria.</p>
            </div>
          </section>
          <SharedCTA />
        </>
      );
    case 'podcast':
      return (
        <section className="section container">
          <PageIntro title="Podcast" eyebrow="Voces y conversaciones" showBack={false}>
            <p>Estamos preparando un espacio para hablar de mujeres, feminismo, cultura, igualdad y experiencias que merecen ser escuchadas.</p>
          </PageIntro>
          <div className="feature-panel podcast-coming-soon">
            <p className="tag">Próximamente</p>
            <h2>{podcastContent.title}</h2>
            <p>{podcastContent.text}</p>
            <div className="podcast-platforms" aria-label="Plataformas previstas para el podcast">
              <span>Spotify</span><span>YouTube</span>
            </div>
            <div className="actions"><a className="button button-secondary" href={podcastContent.cta.href} target="_blank" rel="noopener noreferrer">{podcastContent.cta.label}</a></div>
          </div>
          <div className="section-heading episode-heading"><h2>Próximos episodios</h2><p className="muted">Cuando publiquemos episodios aparecerán aquí con su portada, fecha, descripción y enlaces para escucharlos.</p></div>
          <div className="podcast-episodes">{podcastEpisodes.map((episode) => <article className="card podcast-episode" key={episode.title}><img src={episode.image} alt={episode.imageAlt || episode.title} width={episode.width} height={episode.height} loading="lazy" /><div className="card-body"><p className="eyebrow">{episode.date}</p><h3>{episode.title}</h3><p>{episode.description}</p><div className="actions"><a className="button button-secondary" href={episode.spotify}>Spotify</a><a className="button button-secondary" href={episode.youtube}>YouTube</a></div></div></article>)}</div>
        </section>
      );
    case 'socias':
      return (
        <>
          <section className="section container">
            <PageIntro title="Hazte socia" eyebrow="Forma parte" showBack={false}>
              <p>La asociación crece con la participación, las ideas y los conocimientos de las mujeres que la forman.</p>
            </PageIntro>
            <div className="prose">
              <h2>¿Por qué hacerte socia?</h2>
              <p>Ser socia te permite participar en la asociación, proponer ideas, participar en actividades y colaborar en proyectos. También es una forma de compartir tu experiencia y conocimientos y apoyar la continuidad de La Mirada Violeta.</p>
              <h2>¿Qué puedes aportar?</h2>
              <p>Cada mujer puede implicarse según su disponibilidad. Puedes aportar tiempo, ideas, conocimientos, experiencia o participación en los encuentros y actividades.</p>
              <div className="grid-two membership-grid">
                <article className="feature-panel"><h3>Una participación flexible</h3><p>No todas tenemos la misma disponibilidad, y cada aportación cuenta.</p></article>
                <article className="feature-panel"><h3>Una asociación compartida</h3><p>Las propuestas, aprendizajes y cuidados se construyen entre todas.</p></article>
              </div>
              <h2>Cuota</h2>
              <p><strong>Cuota:</strong> [CUOTA]<br /><strong>Periodicidad:</strong> [PERIODICIDAD]<br /><strong>Forma de pago:</strong> [FORMA DE PAGO]</p>
              <h2>Compromiso</h2>
              <p>Hacerse socia no significa tener la obligación de participar continuamente ni asistir a todas las actividades. La implicación puede cambiar con el tiempo y adaptarse a cada momento personal.</p>
              <h2>Normas básicas</h2>
              <ul><li>Respeto y trato digno.</li><li>No discriminación.</li><li>Escucha y confidencialidad de las experiencias personales.</li><li>Respeto por las demás participantes.</li><li>Convivencia respetuosa presencial y digital.</li><li>Coherencia con los fines y valores de la asociación.</li></ul>
            </div>
          </section>
          <section className="section container"><div className="cta-panel"><h2>¿Quieres formar parte?</h2><p className="lead">Déjanos tus datos cuando preparemos el formulario de incorporación.</p><a className="button" href="#contacto-socias">Quiero hacerme socia</a><p id="contacto-socias" className="muted cta-note">Próximamente habilitaremos el formulario o correo de contacto.</p></div></section>
        </>
      );
    case 'recursos':
      return <ResourcesPage />;
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
    case '404':
      return (
        <section className="section container">
          <PageIntro title="Página no encontrada" eyebrow="Error 404" showBack={false}>
            <p>La página que buscas no está disponible o ha cambiado de dirección.</p>
          </PageIntro>
          <div className="actions">
            <a className="button" href="/">Ir al inicio</a>
            <a className="button button-secondary" href="/actividades/">Ver actividades</a>
            <a className="text-link" href="/recursos/">Consultar recursos para mujeres</a>
          </div>
        </section>
      );
    default:
      return null;
  }
}
