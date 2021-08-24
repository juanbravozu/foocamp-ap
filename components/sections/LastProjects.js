import ProjectIcon from '../ProjectIcon';

export default function LastProjects({ children, data }) {
  const layoutData = {
    title: data?.title,
    categories: data?.categoriesList,
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
      { children }
    </article>
  );
}
