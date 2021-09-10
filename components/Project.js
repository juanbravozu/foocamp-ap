import BigImageLayout from './BigImageLayout';

export default function Project({
  fields: {
    projectBrief,
    projectTitle,
    slug,
    projectImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
  },
  variation,
}) {
  return (
    <article className="project">
      <BigImageLayout
        contentType="simple"
        data={{
          title: projectTitle,
          content: projectBrief,
          link: slug,
          label: 'Más información',
          url,
          imgTitle,
        }}
        variation={variation}
      />
    </article>
  );
}
