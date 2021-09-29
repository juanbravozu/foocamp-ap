import React from 'react';
import BigImageLayout from './BigImageLayout';

export default function ContentSection({ fields }) {
  const layoutData = {
    title: fields.title,
    projectTitle: fields.projectTitle,
    url: fields.sectionImage?.fields.file.url || '',
    imgTitle: fields.sectionImage?.fields.title,
    link: fields.link,
    label: fields.label,
  };

  return (
    <section>
      <BigImageLayout
        variation={['on-context']}
        data={{
          title: layoutData.title,
          projectTitle: layoutData.projectTitle,
          url: layoutData.url,
          imgTitle: layoutData.imgTitle,
          link: layoutData.link,
          label: layoutData.label,
        }}
      />
    </section>
  );
}
