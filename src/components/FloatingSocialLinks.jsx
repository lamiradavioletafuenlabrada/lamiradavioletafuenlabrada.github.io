import { useState } from 'react';
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
} from 'react-icons/fa';
import { FaTiktok, FaXmark } from 'react-icons/fa6';
import { socialLinks } from '../data/siteContent';

const iconByLabel = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
  'Correo electrónico': FaEnvelope,
};

function SocialButton({ link, compact = false }) {
  const Icon = iconByLabel[link.label];
  const external = !link.href.startsWith('mailto:');

  return (
    <a
      href={link.href}
      className={`group inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white/95 text-brand-700 shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
        compact ? 'h-12 w-12 justify-center' : 'px-4 py-3'
      }`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={link.label}
      title={link.label}
    >
      <Icon className="h-4 w-4" />
      {compact ? null : <span className="text-sm font-semibold">{link.label}</span>}
    </a>
  );
}

function FloatingSocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3">
        {socialLinks.map((link) => (
          <SocialButton key={link.label} link={link} compact />
        ))}
      </div>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 lg:hidden">
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-300 ${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-2 opacity-0'
          }`}
        >
          {socialLinks.map((link) => (
            <SocialButton key={link.label} link={link} />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar redes sociales' : 'Abrir redes sociales'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaXmark className="h-5 w-5" /> : <FaShareAlt className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
}

export default FloatingSocialLinks;
