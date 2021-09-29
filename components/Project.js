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
        data={{
          title: projectTitle,
          content: projectBrief,
          link: `proyectos/detalle/${slug}`,
          label: 'Más información',
          url,
          imgTitle,
        }}
        variation={variation}
      />
    </article>
  );
}
