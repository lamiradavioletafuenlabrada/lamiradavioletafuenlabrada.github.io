import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { contactContent } from '../data/siteContent';

function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-brand-200 bg-brand-100/70 p-8 text-center shadow-card sm:p-12">
          <SectionHeading title={contactContent.title} />
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-8 text-mist sm:text-lg">
            <h3 className="font-display text-2xl text-ink">{contactContent.heading}</h3>
            {contactContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${contactContent.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <FaEnvelope className="h-4 w-4" />
              Escríbenos por correo
            </a>

            <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-card">
              <FaMapMarkerAlt className="h-4 w-4 text-brand-700" />
              {contactContent.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
