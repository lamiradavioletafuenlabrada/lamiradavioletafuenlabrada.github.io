import { FaBullhorn, FaHandsHelping } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import useParallax from '../hooks/useParallax';
import { aboutContent, pillars } from '../data/siteContent';

const pillarIcons = [FaHandsHelping, FaBullhorn];

function AboutSection() {
  const imageRef = useParallax({ speed: 0.18, maxOffset: 80, scale: 1.18 });

  return (
    <section id="quienes-somos" className="relative isolate scroll-mt-28 overflow-hidden bg-brand-100 py-20 sm:py-24">
      <div className="animate-blob-drift pointer-events-none absolute -left-24 bottom-12 h-80 w-80 rounded-full bg-white/70 blur-3xl [animation-delay:-3s]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            align="left"
          />

          <Reveal delay={120} className="space-y-5 text-base leading-7 text-mist sm:text-lg sm:leading-8">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="space-y-4">
              <h3 className="font-display text-[1.75rem] leading-tight text-ink sm:text-[2rem]">{aboutContent.actionsHeading}</h3>
              <ul className="space-y-3">
                {aboutContent.actions.map((action) => (
                  <li key={action.title} className="flex gap-3">
                    <span className="mt-3 h-px w-3 flex-none bg-brand-500" aria-hidden="true" />
                    <p>
                      <span className="font-bold text-ink">{action.title}:</span>{' '}
                      {action.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-bold text-ink">{aboutContent.closing}</p>
          </Reveal>

        </div>

        <div className="space-y-6 lg:pl-8">
          <Reveal delay={180}>
            <div className="aspect-[4/3] overflow-hidden rounded-[32px] shadow-soft">
              <img
                ref={imageRef}
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover will-change-transform"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <Reveal
                  as="article"
                  key={pillar.title}
                  delay={index * 120}
                  className="group rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-card hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700 transition group-hover:scale-110 group-hover:bg-brand-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[1.25rem] font-bold leading-tight text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist sm:text-base sm:leading-7">{pillar.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
