import SectionHeading from './SectionHeading';
import { galleryItems } from '../data/siteContent';

function GallerySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nuestra comunidad en acción"
          description="Una asociacion viva, tejida desde el encuentro, la escucha y la accion compartida."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] shadow-card"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
