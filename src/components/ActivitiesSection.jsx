import SectionHeading from './SectionHeading';
import { activities } from '../data/siteContent';

function ActivitiesSection() {
  return (
    <section id="actividades" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programación reciente"
          title="Últimas iniciativas"
          description="Actividades pensadas para compartir herramientas, abrir conversaciones y fortalecer redes de apoyo en la comunidad."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="overflow-hidden rounded-[28px] border border-brand-200 bg-white shadow-card transition hover:-translate-y-1"
            >
              <img
                src={activity.image}
                alt={`Imagen de apoyo para ${activity.title}`}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="space-y-4 p-7">
                <h3 className="text-xl font-semibold text-ink">{activity.title}</h3>
                <p className="text-sm leading-7 text-mist">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
