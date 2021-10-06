import { useState } from 'react';
import { PAGINATOR_ARROW_TYPE, SUPPORTER_TYPE } from '../utils/constants';
import Paginator from './Paginator';
import Testimony from './Testimony';

export default function TestimonialsWrapper({
  fields: {
    title,
  },
}) {
  const [supporters, setSupporters] = useState([]);
  const testimonialsPerRequest = 4;
  const col1 = [];
  const col2 = [];
  supporters.forEach(({
    fields,
    sys: {
      id,
    },
  }, index) => {
    const component = <Testimony fields={fields} key={id} />;
    if (index % 2 !== 0) return col1.push(component);
    return col2.push(component);
  });

  const handleSupportersChange = (items) => {
    setSupporters([...supporters, ...items]);
  };
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
      <Paginator
        variation={PAGINATOR_ARROW_TYPE}
        contentType={SUPPORTER_TYPE}
        itemsPerRequest={testimonialsPerRequest}
        onChange={handleSupportersChange}
      />
    </section>
  );
}
