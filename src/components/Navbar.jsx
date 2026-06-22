import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigation } from '../data/siteContent';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-2xl text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
        >
          La Mirada Violeta
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-brand-200 p-3 text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
        </button>

        <nav
          id="primary-navigation"
          className={`${
            isOpen
              ? 'pointer-events-auto visible translate-y-0 opacity-100'
              : 'pointer-events-none invisible -translate-y-2 opacity-0'
          } absolute left-4 right-4 top-full rounded-3xl border border-brand-200 bg-white p-5 shadow-soft transition md:pointer-events-auto md:visible md:static md:flex md:translate-y-0 md:items-center md:gap-2 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-ink transition hover:bg-brand-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
