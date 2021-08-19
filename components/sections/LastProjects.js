import ProjectIcon from '../ProjectIcon';

export default function LastProjects({ children, title, categories }) {
  return (
    <article className="last-projects">
      <div className="last-projects__heading">
        <h2 className="last-projects__title">{title}</h2>
        <div className="last-projects__categories">
          {categories.map((category) => (
            <ProjectIcon
              key={category.sys.id}
              url="#"
              text={category.fields.title}
              icon={category.fields.icon}
              variation="white"
            />
          ))}
        </div>
      </div>
      {children}
    </article>
  );
}
