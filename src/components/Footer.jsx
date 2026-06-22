import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { socialLinks } from '../data/siteContent';

const iconByLabel = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
  'Correo electrónico': FaEnvelope,
};

function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-3">
          <p className="font-display text-2xl text-white">La Mirada Violeta</p>
          <p className="text-sm leading-7 text-white/75 sm:text-base">
            Asociación feminista de Fuenlabrada comprometida con la igualdad, la participación y la acción colectiva.
          </p>
          <p className="text-sm text-white/55">
            © 2026 Asociación La Mirada Violeta. Diseñado para la igualdad.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => {
            const Icon = iconByLabel[link.label];
            const external = !link.href.startsWith('mailto:');

            return (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
