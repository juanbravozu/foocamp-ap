import BigImageLayout from '../resources/BigImageLayout';
import ProjectIcon from '../resources/ProjectIcon';

export default function LastProjects({ fields }) {
  const layoutData = {
    title: fields?.title,
    categories: fields?.categoriesList,
  };

  return (
    <article className="last-projects">
      <div className="last-projects__heading">
        <h2 className="last-projects__title">
          { layoutData.title }
        </h2>
        <div className="last-projects__categories">
          { layoutData.categories.map(({
            sys: { id },
            fields: { title, icon },
          }) => (
            <ProjectIcon
              key={id}
              url="#"
              text={title}
              icon={icon}
              variation="none"
            />
          )) }
        </div>
      </div>
      <BigImageLayout
        contentType="rich"
        variation="no-title"
        data={fields}
      />
    </article>
  );
}
