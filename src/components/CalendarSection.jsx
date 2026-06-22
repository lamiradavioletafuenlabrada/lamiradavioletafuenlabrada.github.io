import { FaCalendarAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { calendarContent } from '../data/siteContent';

function CalendarSection() {
  return (
    <section id="calendario" className="scroll-mt-28 bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Agenda comunitaria"
            title={calendarContent.title}
            description={calendarContent.subtitle}
            align="left"
          />
          <Reveal delay={120} className="inline-flex items-center gap-3 self-start rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-700 shadow-card">
            <FaCalendarAlt className="h-4 w-4" />
            Zona horaria: Europa/Madrid
          </Reveal>
        </div>

        <Reveal delay={180} className="overflow-hidden rounded-[32px] border border-brand-200 bg-white p-3 shadow-soft sm:p-4">
          <iframe
            src={calendarContent.embedUrl}
            title="Calendario de actividades"
            className="h-[420px] w-full rounded-[24px] sm:h-[600px]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default CalendarSection;
