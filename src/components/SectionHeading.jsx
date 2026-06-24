import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'mx-auto items-center text-center';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-base font-bold text-brand-700 sm:text-[1.05rem]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-8 text-mist sm:text-[1.35rem] sm:leading-9">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
