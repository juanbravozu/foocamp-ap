import Link from 'next/link';

export default function Hero({ fields }) {
  const {
    title: { fields: { title: sectionTitle } },
    description,
    heroBackground: { fields: { file: { url: img } } },
    cta: { fields: { link: ctaLink, label: ctaLabel } },
    socialNetworksSection,
  } = fields;

  return (
    <section className="hero">
      <img src={img} alt="" className="hero-background" />

      <div className="hero-shape" />

      <div className="hero-content">
        <h1 className="hero-title">{sectionTitle}</h1>
        <p className="hero-description">{description}</p>
        <Link href={`/${ctaLink}`}>
          <p className="button-main hero-button">{ctaLabel}</p>
        </Link>

        <div className="hero-media-wrapper">
          <div className="hero-line" />
          {socialNetworksSection.map(({
            fields: { title, icon, link },
            sys: { id },
          }) => (
            <a href={link} target="_blank" rel="noreferrer" key={id}>
              <img
                key={title}
                src={icon.fields.file.url}
                alt={title}
                className="hero-media"
              />
            </a>
          ))}
        </div>
      </div>

      <img src="/icons/arrow-down.svg" className="hero-arrow" alt="" />
    </section>
  );
}
