import BigImageLayout from './BigImageLayout';

export default function JoinUs({ fields }) {
  const {
    title,
    description,
    cta: {
      fields: {
        label,
        link,
      },
    },
    sectionImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
  } = fields;

  return (
    <article className="join-us">
      <BigImageLayout
        variation={['blue-background']}
        data={{
          title,
          description,
          label,
          link,
          url,
          imgTitle,
        }}
      />
    </article>
  );
}
