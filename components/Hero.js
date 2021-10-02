import Link from 'next/link';

export default function Hero({
  fields,
  baseUrl = '',
  linksToBlank = true,
  hideLine = false,
}) {
  const {
    title: {
      fields: {
        title: sectionTitle,
        icon: {
          fields: {
            file: { url: iconUrl = null } = {},
          } = {},
        } = {},
      },
    },
    description,
    heroBackground: { fields: { file: { url: img } } },
    cta: {
      fields: {
        link: ctaLink = null, label: ctaLabel = null,
      } = {},
    } = {},
    socialNetworksSection = [],
  } = fields;

  return (
    <section className="hero">
      <img src={img} alt="" className="hero-background" />

      <div className="hero-shape" />

      <div className="hero-content">
        <div className="hero-title-wrapper">
          {iconUrl
            && <img src={iconUrl} alt="" className="hero-icon" />}
          <h1 className="hero-title">{sectionTitle}</h1>
        </div>
        <p className="hero-description">{description}</p>
        {!!ctaLink && (
        <Link href={`/${ctaLink}`}>
          <p className="button-main hero-button">{ctaLabel}</p>
        </Link>
        )}

        {socialNetworksSection.length > 0
          && (
          <div className="hero-media-wrapper">
            {!hideLine && <div className="hero-line" />}
            {socialNetworksSection.map(({
              fields: { title, icon, link },
              sys: { id },
            }) => (
              linksToBlank
                ? (
                  <a href={`${baseUrl}${link}`} target="_blank" rel="noreferrer" key={id}>
                    <img
                      key={title}
                      src={icon.fields.file.url}
                      alt={title}
                      className="hero-media"
                    />
                  </a>
                )
                : (
                  <Link
                    href={`${baseUrl}${link}`}
                    passHref
                    key={id}
                    shallow
                  >
                    <a href="/">
                      <img
                        key={title}
                        src={icon.fields.file.url}
                        alt={title}
                        className="hero-media"
                      />
                    </a>
                  </Link>
                )
            ))}
          </div>
          )}
      </div>

      <img src="/icons/arrow-down.svg" className="hero-arrow" alt="" />
    </section>
  );
}
