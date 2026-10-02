import { useEffect, useRef, useState } from 'react';
import { navigation, contactContent, socialLinks } from './data/siteContent';
import SitePages from './components/SitePages';
import FloatingSocialLinks from './components/FloatingSocialLinks';

function isCurrent(link, page) {
  const currentPage = { calendario: 'actividades', iniciativas: 'podcast' }[page] || page;
  return link.href === (currentPage === 'inicio' ? '/' : `/${currentPage}/`);
}

function NavLinks({ page, scope, openDropdown, toggleDropdown, closeAllDropdowns }) {
  return navigation.map((link) => {
    const currentChild = link.children?.some((child) => isCurrent(child, page));
    if (link.children) {
      const submenuId = `nav-submenu-${scope}-${link.label.toLowerCase().replaceAll(' ', '-')}`;
      return (
        <details className="nav-group" key={link.label} open={openDropdown === link.label}>
          <summary
            aria-current={currentChild ? 'page' : undefined}
            aria-expanded={openDropdown === link.label}
            aria-controls={submenuId}
            onClick={(event) => { event.preventDefault(); toggleDropdown(link.label); }}
          >{link.label}</summary>
          <div className="nav-submenu" id={submenuId}>
            {link.children.map((child) => <a key={child.href} href={child.href} aria-current={isCurrent(child, page) ? 'page' : undefined} onClick={closeAllDropdowns}>{child.label}</a>)}
          </div>
        </details>
      );
    }
    return <a key={link.href} href={link.href} aria-current={isCurrent(link, page) ? 'page' : undefined} onClick={closeAllDropdowns}>{link.label}</a>;
  });
}

function FooterNavGroup({ title, links, page }) {
  return <nav aria-label={title}><h2>{title}</h2>{links.map((link) => <a key={link.href} href={link.href} aria-current={isCurrent(link, page) ? 'page' : undefined}>{link.label}</a>)}</nav>;
}

export default function App({ page = 'inicio' }) {
  const header = useRef(null);
  const mobileMenu = useRef(null);
  const openDropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  openDropdownRef.current = openDropdown;
  const closeAllDropdowns = (focus = false, closeMenu = false) => {
    const activeSummary = document.activeElement?.closest('.nav-group > summary');
    setOpenDropdown(null);
    if (closeMenu && mobileMenu.current) {
      mobileMenu.current.open = false;
      setMobileMenuOpen(false);
    }
    if (focus) activeSummary?.focus();
  };
  const toggleDropdown = (label) => {
    setOpenDropdown((current) => current === label ? null : label);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        if (openDropdownRef.current) closeAllDropdowns(true);
        else closeAllDropdowns(false, true);
      }
    };
    const closeOnOutsideClick = (event) => {
      if (!header.current?.contains(event.target)) closeAllDropdowns(false, true);
    };
    setOpenDropdown(null);
    document.addEventListener('keydown', closeMenu);
    document.addEventListener('pointerdown', closeOnOutsideClick);
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
      document.removeEventListener('pointerdown', closeOnOutsideClick);
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
             <img src="/favicon-96.png" alt="" width="42" height="42" decoding="async" />
            <span>La Mirada Violeta<small>Asociación de mujeres · Fuenlabrada</small></span>
          </a>
           <nav className="desktop-nav" aria-label="Navegación principal"><NavLinks page={page} scope="desktop" openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeAllDropdowns={closeAllDropdowns} /></nav>
            <details className="mobile-menu" ref={mobileMenu} onToggle={(event) => { setMobileMenuOpen(event.currentTarget.open); if (!event.currentTarget.open) setOpenDropdown(null); }}>
             <summary aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"><span className="menu-icon" aria-hidden="true"><i /><i /><i /></span><span>Menú</span></summary>
               <nav id="mobile-navigation" aria-label="Navegación principal móvil"><NavLinks page={page} scope="mobile" openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeAllDropdowns={(focus) => closeAllDropdowns(focus, true)} /></nav>
          </details>
        </div>
      </header>
      <main id="contenido" tabIndex={-1}><SitePages page={page} /></main>
      <FloatingSocialLinks />
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
             <div><a className="footer-brand" href="/">La Mirada Violeta</a><p>Asociación feminista de Fuenlabrada comprometida con la igualdad, la participación y la acción colectiva.</p><a href={`mailto:${contactContent.email}`}>{contactContent.email}</a></div>
             <FooterNavGroup title="Enlaces" page={page} links={[{ label: 'Quiénes somos', href: '/quienes-somos/' }, { label: 'Actividades', href: '/actividades/' }, { label: 'Hazte Socia', href: '/socias/' }, { label: 'Recursos', href: '/recursos/' }, { label: 'Contacto', href: '/contacto/' }]} />
             <div className="footer-social"><h2>Síguenos</h2>{socialLinks.filter((link) => ['Instagram', 'TikTok', 'LinkedIn', 'YouTube'].includes(link.label)).map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a>)}</div>
          </div>
           <div className="partners"><p>Con la colaboración institucional de</p><a href="https://www.ayto-fuenlabrada.es/" target="_blank" rel="noopener noreferrer"><img src="/logo_aytofuenlabrada_vector.svg" alt="Ayuntamiento de Fuenlabrada" width="120" height="67" loading="lazy" decoding="async" /></a><a href={contactContent.locationUrl} target="_blank" rel="noopener noreferrer"><img src="/logo_fuenlafeminismo_vector.svg" alt="Concejalía de Feminismo y Diversidad de Fuenlabrada" width="160" height="74" loading="lazy" decoding="async" /></a></div>
           <div className="footer-bottom"><p>© 2026 La Mirada Violeta</p><div className="footer-legal"><a href="/aviso-legal/">Aviso legal</a><a href="/politica-privacidad/">Política de privacidad</a></div></div>
        </div>
      </footer>
    </>
  );
}
