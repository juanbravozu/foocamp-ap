import Project from './Project';

export default function Projects({ projectsList }) {
  const NO_PROJECTS_MESSAGE = 'Aún no hay proyectos en esta categoría';
  return (
    <div className="project__wrapper">
      {!!projectsList && (
      <>
        {projectsList.map(({
          fields,
          sys: { id },
        }, index) => (
          <Project
            key={id}
            fields={fields}
            variation={index % 2 !== 0
              ? ['reverse', 'project']
              : 'project'}
          />
        ))}

        {projectsList.length === 0
          && (
          <div className="project project--empty">
            {NO_PROJECTS_MESSAGE}
          </div>
          )}
      </>
      )}
    </div>
  );
}
