export default function Testimony({
  fields: {
    supporterName,
    supporterTitle,
    supporterTestimonial,
    supporterImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
  },
}) {
  return (
    <article className="testimony">
      <div className="testimony__header">
        <img src={url} alt={imgTitle} className="testimony__img" />
        <div className="testimony__info-mobile">
          <h3 className="testimony__title">{supporterName}</h3>
          <p className="testimony__subtitle">{supporterTitle}</p>
        </div>
      </div>
      <div className="testimony__content">
        <div className="testimony__info-desktop">
          <h3 className="testimony__title">{supporterName}</h3>
          <p className="testimony__subtitle">{supporterTitle}</p>
        </div>
        <p className="testimony__info">{supporterTestimonial}</p>
      </div>
    </article>
  );
}
