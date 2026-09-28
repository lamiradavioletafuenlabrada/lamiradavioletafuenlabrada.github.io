import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { activities, upcomingActivities, podcastContent } from '../data/siteContent';

function ActivitiesSection() {
  return (
    <section id="actividades" className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24">
      <div className="animate-blob-drift pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programación reciente"
          title="Actividades"
          description="Espacios para comprender el feminismo, visibilizar el conocimiento de las mujeres y tejer redes de apoyo mutuo."
        />

        <Reveal className="rounded-[28px] border border-brand-200 bg-brand-50 p-7 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-brand-200 px-4 py-1 text-[0.98rem] font-bold text-brand-700 sm:text-base">
                Próximamente
              </span>
              <h3 className="font-display text-[2rem] leading-[1.08] text-ink sm:text-4xl">Próximas actividades</h3>
              <p className="max-w-xl text-[1.05rem] leading-7 text-mist sm:text-[1.12rem] sm:leading-8">
                Estas son las actividades que tenemos planificadas para este mes. A medida que nos confirmen los espacios que podamos destinar, actualizaremos la fecha, la hora y la localización exactas.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {upcomingActivities.map((activity) => (
                <article key={activity.title} className="rounded-2xl border border-brand-200 bg-white p-5 shadow-card">
                  <h4 className="text-[1.15rem] font-bold leading-tight text-ink">{activity.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-mist">{activity.details}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="rounded-[28px] border border-brand-200 bg-brand-700 p-7 text-white shadow-soft sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-3">
              <h3 className="font-display text-[1.8rem] leading-tight sm:text-3xl">{podcastContent.title}</h3>
              <p className="text-[1.05rem] leading-7 text-brand-50 sm:text-[1.1rem] sm:leading-8">{podcastContent.text}</p>
            </div>
            <a
              href={podcastContent.cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-brand-700 shadow-card transition hover:-translate-y-1 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
            >
              {podcastContent.cta.label}
            </a>
          </div>
        </Reveal>

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
                <p className="text-[1.03rem] leading-7 text-mist sm:text-[1.06rem] sm:leading-7">{activity.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
