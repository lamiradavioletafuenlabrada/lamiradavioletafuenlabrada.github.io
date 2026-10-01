import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaShareAlt, FaYoutube } from 'react-icons/fa';
import { FaTiktok, FaXmark } from 'react-icons/fa6';
import { socialLinks } from '../data/siteContent';

const iconByLabel = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
  'Correo electrónico': FaEnvelope,
};

function SocialButton({ link, compact = false }) {
  const Icon = iconByLabel[link.label];
  const external = !link.href.startsWith('mailto:');

  return (
    <a
      href={link.href}
      className={`social-link${compact ? ' social-link-compact' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={link.label}
      title={link.label}
    >
      <Icon aria-hidden="true" />
      {!compact && <span>{link.label}</span>}
    </a>
  );
}

export default function FloatingSocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="floating-social" aria-label="Redes sociales">
      <div className="floating-social-desktop">
        {socialLinks.map((link) => <SocialButton key={link.label} link={link} compact />)}
      </div>

      <div className="floating-social-mobile">
        <div id="floating-social-links" className={`floating-social-list${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen} hidden={!isOpen}>
          {socialLinks.map((link) => <SocialButton key={link.label} link={link} />)}
        </div>
        <button
          type="button"
          className="floating-social-toggle"
          aria-expanded={isOpen}
          aria-controls="floating-social-links"
          aria-label={isOpen ? 'Cerrar redes sociales' : 'Abrir redes sociales'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaXmark aria-hidden="true" /> : <FaShareAlt aria-hidden="true" />}
        </button>
      </div>
    </aside>
  );
}
