function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'mx-auto items-center text-center';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-mist sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
