import { FaArrowRightLong } from 'react-icons/fa6';
import Reveal from './Reveal';
import useParallax from '../hooks/useParallax';
import { heroContent } from '../data/siteContent';

function Hero() {
  const imageRef = useParallax({ speed: 0.2, maxOffset: 110, scale: 1.08 });

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28"
      aria-label="Portada"
    >
      <div
        ref={imageRef}
        className="absolute inset-y-0 inset-x-0 bg-cover bg-no-repeat bg-[position:82%_center] will-change-transform lg:bg-[position:88%_center]"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      />
      <div className="absolute inset-0 bg-hero-fade sm:bg-hero-fade-desktop" />
      <div className="animate-blob-drift pointer-events-none absolute left-10 top-32 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
      <div className="animate-blob-drift pointer-events-none absolute bottom-12 right-12 h-56 w-56 rounded-full bg-accent/25 blur-3xl [animation-delay:-5s]" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 py-16 sm:min-h-[78vh] sm:px-6 lg:px-8">
        <Reveal className="max-w-xl lg:max-w-2xl">
          <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {heroContent.title.split('\n').map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-8 text-white/90 sm:text-xl sm:leading-8">
            {heroContent.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroContent.cta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
            >
              {heroContent.cta.label}
              <FaArrowRightLong className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
