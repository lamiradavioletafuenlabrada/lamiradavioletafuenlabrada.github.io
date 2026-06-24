import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'mx-auto items-center text-center';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-[0.98rem] font-bold text-brand-700 sm:text-base">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-[2.1rem] leading-[1.08] text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-[1.05rem] leading-7 text-mist sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
