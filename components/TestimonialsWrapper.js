import Testimony from './Testimony';

export default function TestimonialsWrapper({
  fields: {
    title,
    supportersGrid,
  },
}) {
  const col1 = [];
  const col2 = [];

  supportersGrid.forEach(({
    fields,
    sys: {
      id,
    },
  }, index) => {
    const component = <Testimony fields={fields} key={id} />;
    if (index % 2 !== 0) return col1.push(component);
    return col2.push(component);
  });
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">{title}</h2>
      <div className="testimonials__wrapper">
        <div className="testimonials__column">
          {col1}
        </div>
        <div className="testimonials__column">
          {col2}
        </div>
      </div>
    </section>
  );
}
