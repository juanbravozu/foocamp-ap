import React from 'react';
import BigImageLayout from './BigImageLayout';

export default function ContentSection({ fields }) {
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
    <section>
      <BigImageLayout
        variation={['on-context']}
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
