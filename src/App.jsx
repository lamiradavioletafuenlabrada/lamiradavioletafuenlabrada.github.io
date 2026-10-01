import { useEffect, useRef } from 'react';
import { navigation, contactContent, socialLinks } from './data/siteContent';
import SitePages from './components/SitePages';
import FloatingSocialLinks from './components/FloatingSocialLinks';

function NavLinks({ page }) {
  return navigation.map((link) => (
    <a key={link.href} href={link.href} aria-current={link.href === (page === 'inicio' ? '/' : `/${page}/`) ? 'page' : undefined}>
      {link.label}
    </a>
  ));
}

export default function App({ page = 'inicio' }) {
  const menu = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector('summary').focus();
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
          <details className="mobile-menu" ref={menu}>
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
            <nav aria-label="Navegación del pie"><h2>La asociación</h2><NavLinks page={page} /></nav>
            <div className="footer-social"><h2>Sigamos en contacto</h2>{socialLinks.filter((link) => !link.href.startsWith('mailto:')).map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>
          </div>
          <div className="partners"><p>Con la colaboración institucional de</p><a href="https://www.ayto-fuenlabrada.es/" target="_blank" rel="noopener noreferrer"><img src="/logo_aytofuenlabrada_vector.svg" alt="Ayuntamiento de Fuenlabrada" width="120" height="67" loading="lazy" /></a><a href={contactContent.locationUrl} target="_blank" rel="noopener noreferrer"><img src="/logo_fuenlafeminismo_vector.svg" alt="Concejalía de Feminismo y Diversidad de Fuenlabrada" width="160" height="74" loading="lazy" /></a></div>
          <div className="footer-bottom"><p>© 2026 Asociación La Mirada Violeta. Diseñado para la igualdad.</p><a href="/aviso-legal/">Aviso legal y privacidad</a><a href="/actualizacion-correo/">Comunicado de contacto</a></div>
        </div>
      </footer>
    </>
  );
}
