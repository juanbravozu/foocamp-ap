import Link from 'next/link';

export default function Hero({
  title, description, bgImg, ctaText, ctaLink, socialMedia,
}) {
  return (
    <section>
      <img src={bgImg} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href={`/${ctaLink}`}>
        <p>{ctaText}</p>
      </Link>

      {socialMedia.map((item) => (
        <img
          key={item.fields.title}
          src={item.fields.section.fields.field.url}
          alt={item.fields.title}
        />
      ))}
    </section>
  );
}
