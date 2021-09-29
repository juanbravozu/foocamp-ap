import BigImageLayout from './BigImageLayout';
import ProjectIcon from './ProjectIcon';

export default function LastProjects({ fields }) {
  const {
    title,
    categoriesList: categories,
    projectTitle,
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
    <article className="last-projects">
      <div className="last-projects__heading">
        <h2 className="last-projects__title">
          { title }
        </h2>
        <div className="last-projects__categories">
          { categories?.map(({
            sys: { id },
            fields: { title: categoryTitle, icon },
          }) => (
            <ProjectIcon
              key={id}
              url="#"
              text={categoryTitle}
              icon={icon}
              variation={['none']}
            />
          )) }
        </div>
      </div>
      <BigImageLayout
        variation={['no-title']}
        data={{
          title,
          projectTitle,
          link,
          label,
          url,
          imgTitle,
        }}
      />
    </article>
  );
}
