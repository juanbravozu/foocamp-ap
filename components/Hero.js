import Link from 'next/link';

export default function Hero({
  title, description, bgImg, ctaText, ctaLink, socialMedia,
}) {
  return (
    <section className="hero">
      <img src={bgImg} alt="" className="hero-background" />

      <div className="hero-shape" />

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <Link href={`/${ctaLink}`}>
          <p className="button-main hero-button">{ctaText}</p>
        </Link>

        <div className="hero-media-wrapper">
          <div className="hero-line" />
          {socialMedia.map((item) => (
            <a href={item.fields.link} target="_blank" rel="noreferrer">
              <img
                key={item.fields.title}
                src={item.fields.icon.fields.file.url}
                alt={item.fields.title}
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
