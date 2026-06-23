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

        <div className="space-y-5 lg:max-w-lg lg:text-right">
          <p className="font-display text-2xl text-white">
            Conecta con nuestra comunidad
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
           {socialLinks.filter((link) => link.label !== 'Correo electrónico').map((link) => {
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
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-[11px]">
            Con la colaboración institucional de
          </p>
          <div className="flex flex-wrap items-end justify-center gap-6 lg:justify-end">
            <a
              href="https://www.ayto-fuenlabrada.es/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-white/10 px-2 pb-2 pt-1 transition hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              <img
                src="/logofuenla.png"
                alt="Logo institucional del Ayuntamiento de Fuenlabrada y del área de igualdad"
                className="h-11 w-auto max-w-full object-contain"
              />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Centro+8+de+Marzo+Fuenlabrada"
              target="_blank"
              rel="noreferrer"
              className="border-b border-white/10 px-2 pb-2 pt-1 transition hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              <img
                src="/logofeminismo.png"
                alt="Logo del Centro 8 de Marzo de Fuenlabrada"
                className="h-10 w-auto max-w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
