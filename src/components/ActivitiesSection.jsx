import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { activities } from '../data/siteContent';

function ActivitiesSection() {
  return (
    <section id="actividades" className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24">
      <div className="animate-blob-drift pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programación reciente"
          title="Últimas iniciativas"
          description="Espacios para comprender el feminismo, visibilizar el conocimiento de las mujeres y tejer redes de apoyo mutuo."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal
              as="article"
              key={activity.title}
              delay={index * 120}
              className="group overflow-hidden rounded-[28px] border border-brand-200 bg-white shadow-card hover:-translate-y-2 hover:border-brand-300 hover:shadow-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={activity.image}
                  alt={`Imagen de apoyo para ${activity.title}`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4 p-7">
                <h3 className="text-[1.4rem] font-bold leading-tight text-ink transition group-hover:text-brand-700">
                  {activity.title}
                </h3>
                <p className="text-sm leading-7 text-mist sm:text-base sm:leading-7">{activity.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
