import { FaBullhorn, FaHandsHelping } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import useParallax from '../hooks/useParallax';
import { aboutContent, pillars } from '../data/siteContent';

const pillarIcons = [FaHandsHelping, FaBullhorn];

function AboutSection() {
  const imageRef = useParallax({ speed: 0.08, maxOffset: 36, scale: 1.08 });

  return (
    <section id="quienes-somos" className="scroll-mt-28 bg-brand-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            align="left"
          />

          <div className="space-y-5 text-base leading-8 text-mist sm:text-lg">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-medium text-ink">{aboutContent.closing}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <article
                  key={pillar.title}
                  className="rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-card"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-brand-100 p-3 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-mist">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="overflow-hidden rounded-[32px] shadow-soft">
            <img
              ref={imageRef}
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
