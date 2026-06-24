import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { contactContent } from '../data/siteContent';

function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Reveal className="rounded-[32px] border border-brand-200 bg-brand-100/70 p-8 text-center shadow-card sm:p-12">
          <SectionHeading title={contactContent.title} />
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-[1.1rem] leading-7 text-mist sm:text-[1.16rem] sm:leading-8">
            <h3 className="font-display text-[1.75rem] leading-tight text-ink sm:text-[2rem]">{contactContent.heading}</h3>
            {contactContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contactContent.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <FaEnvelope className="h-4 w-4 transition group-hover:scale-110" />
              Escríbenos por correo
            </a>

            <a
              href={contactContent.locationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-bold text-ink shadow-card transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <FaMapMarkerAlt className="h-4 w-4 text-brand-700" />
              {contactContent.location}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
