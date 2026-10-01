import { useEffect, useRef } from 'react';
import { navigation, contactContent, socialLinks } from './data/siteContent';
import SitePages from './components/SitePages';
import FloatingSocialLinks from './components/FloatingSocialLinks';

function isCurrent(link, page) {
  const currentPage = { calendario: 'actividades', iniciativas: 'podcast' }[page] || page;
  return link.href === (currentPage === 'inicio' ? '/' : `/${currentPage}/`);
}

function NavLinks({ page }) {
  return navigation.map((link) => {
    const currentChild = link.children?.some((child) => isCurrent(child, page));
    if (link.children) {
      return (
        <details className="nav-group" key={link.label}>
          <summary aria-current={currentChild ? 'page' : undefined}>{link.label}</summary>
          <div className="nav-submenu">
            {link.children.map((child) => <a key={child.href} href={child.href} aria-current={isCurrent(child, page) ? 'page' : undefined}>{child.label}</a>)}
          </div>
        </details>
      );
    }
    return <a key={link.href} href={link.href} aria-current={isCurrent(link, page) ? 'page' : undefined}>{link.label}</a>;
  });
}

function FooterNavGroup({ title, links, page }) {
  return <nav aria-label={title}><h2>{title}</h2>{links.map((link) => <a key={link.href} href={link.href} aria-current={isCurrent(link, page) ? 'page' : undefined}>{link.label}</a>)}</nav>;
}

export default function App({ page = 'inicio' }) {
  const header = useRef(null);
  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        const openGroups = document.querySelectorAll('details[open]');
        const openGroup = openGroups[openGroups.length - 1];
        if (openGroup) {
          openGroup.open = false;
          openGroup.querySelector('summary').focus();
        }
      }
    };
    document.addEventListener('keydown', closeMenu);
    const updateHeader = () => header.current?.classList.toggle('is-scrolled', window.scrollY > 32);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    // Preserve links shared before the move from anchor sections to pages.
    const followOldLink = () => {
      const oldSection = window.location.hash.slice(1);
      if (page === 'inicio' && navigation.some((link) => link.href === `/${oldSection}/`)) {
        window.location.replace(`/${oldSection}/`);
      }
    };
    followOldLink();
    window.addEventListener('hashchange', followOldLink);
    return () => {
      document.removeEventListener('keydown', closeMenu);
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('hashchange', followOldLink);
    };
  }, [page]);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="La Mirada Violeta, inicio">
            <img src="/favicon.png" alt="" width="42" height="42" />
            <span>La Mirada Violeta<small>Asociación de mujeres · Fuenlabrada</small></span>
          </a>
           <nav className="desktop-nav" aria-label="Navegación principal"><NavLinks page={page} /></nav>
           <details className="mobile-menu">
            <summary><span className="menu-icon" aria-hidden="true"><i /><i /><i /></span><span>Menú</span></summary>
             <nav aria-label="Navegación principal móvil"><NavLinks page={page} /></nav>
          </details>
        </div>
      </header>
      <main id="contenido" tabIndex={-1}><SitePages page={page} /></main>
      <FloatingSocialLinks />
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div><a className="footer-brand" href="/">La Mirada Violeta</a><p>Asociación feminista de Fuenlabrada comprometida con la igualdad, la participación y la acción colectiva.</p><a href={`mailto:${contactContent.email}`}>{contactContent.email}</a></div>
             <FooterNavGroup title="La asociación" page={page} links={[{ label: 'Quiénes somos', href: '/quienes-somos/' }, { label: 'Misión, valores y objetivos', href: '/mision-valores/' }]} />
             <FooterNavGroup title="Qué hacemos" page={page} links={[{ label: 'Actividades', href: '/actividades/' }, { label: 'Podcast', href: '/podcast/' }]} />
             <FooterNavGroup title="Participa" page={page} links={[{ label: 'Socias', href: '/socias/' }]} />
             <FooterNavGroup title="Información" page={page} links={[{ label: 'Recursos', href: '/recursos/' }, { label: 'Contacto', href: '/contacto/' }]} />
             <div className="footer-social"><h2>Sigamos en contacto</h2>{socialLinks.filter((link) => !link.href.startsWith('mailto:')).map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>
          </div>
          <div className="partners"><p>Con la colaboración institucional de</p><a href="https://www.ayto-fuenlabrada.es/" target="_blank" rel="noopener noreferrer"><img src="/logo_aytofuenlabrada_vector.svg" alt="Ayuntamiento de Fuenlabrada" width="120" height="67" loading="lazy" /></a><a href={contactContent.locationUrl} target="_blank" rel="noopener noreferrer"><img src="/logo_fuenlafeminismo_vector.svg" alt="Concejalía de Feminismo y Diversidad de Fuenlabrada" width="160" height="74" loading="lazy" /></a></div>
          <div className="footer-bottom"><p>© 2026 Asociación La Mirada Violeta. Diseñado para la igualdad.</p><a href="/aviso-legal/">Aviso legal</a><a href="/politica-privacidad/">Política de privacidad</a><a href="/actualizacion-correo/">Comunicado de contacto</a></div>
        </div>
      </footer>
    </>
  );
}
