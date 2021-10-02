import React from 'react';
import BigImageLayout from './BigImageLayout';

export default function ContentSection({
  fields,
  className = '',
  variation = ['on-context'],
}) {
  const {
    title,
    projectTitle,
    sectionImage: {
      fields: {
        file: {
          url,
        },
        title: imgTitle,
      },
    },
    link,
    label,
  } = fields;

  return (
    <section className={className}>
      <BigImageLayout
        variation={variation}
        data={{
          title,
          projectTitle,
          url,
          imgTitle,
          link,
          label,
        }}
      />
    </section>
  );
}
