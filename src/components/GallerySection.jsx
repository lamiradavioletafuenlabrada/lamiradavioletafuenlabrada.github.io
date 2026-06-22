import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { galleryItems } from '../data/siteContent';

function GallerySection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24">
      <div className="animate-blob-drift pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="animate-blob-drift pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl [animation-delay:-6s]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nuestra comunidad en acción"
          description="Una asociacion viva, tejida desde el encuentro, la escucha y la accion compartida."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 120}
              className="group relative overflow-hidden rounded-[28px] shadow-card ring-1 ring-white/70 hover:-translate-y-2 hover:shadow-soft"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition duration-500 group-hover:from-brand-900/85 group-hover:via-brand-700/25" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="translate-y-1 text-lg font-semibold transition duration-500 group-hover:translate-y-0">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
