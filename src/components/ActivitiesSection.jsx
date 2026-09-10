import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { activities, featuredActivity } from '../data/siteContent';

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

        <Reveal className="overflow-hidden rounded-[28px] border border-brand-200 bg-brand-50 shadow-soft">
          <div className="grid items-stretch md:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.28fr)]">
            <div className="flex items-center justify-center bg-brand-100 p-5 sm:p-8 md:p-10">
              <img
                src={featuredActivity.image}
                alt={featuredActivity.imageAlt}
                loading="lazy"
                className="h-auto max-h-[32rem] w-full max-w-sm rounded-2xl object-contain shadow-card"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-14">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-brand-200 px-4 py-1 text-[0.98rem] font-bold text-brand-700 sm:text-base">
                  {featuredActivity.eyebrow}
                </span>
                <h3 className="max-w-xl font-display text-[2rem] leading-[1.08] text-ink sm:text-4xl">
                  {featuredActivity.title}
                </h3>
              </div>
              <div className="max-w-2xl space-y-4 text-[1.05rem] leading-7 text-mist sm:text-[1.12rem] sm:leading-8">
                {featuredActivity.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a
                href={featuredActivity.cta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-card transition hover:-translate-y-1 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              >
                {featuredActivity.cta.label}
              </a>
            </div>
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
