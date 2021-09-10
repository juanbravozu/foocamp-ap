import Project from './Project';

export default function Projects({ projectsList: { project: list } }) {
  return (
    <div className="project__wrapper">
      {!!list && list.map(({
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
    </div>
  );
}
