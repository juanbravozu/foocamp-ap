import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import Projects from '../../components/Projects';
import JoinUs from '../../components/JoinUs';
import { ALL_PROJECTS_CATEGORY_FILTER } from '../../utils/constants';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData('proyectos');

    return {
      props: {
        data: pageData,
        components: pageData.fields.components,
      },
    };
  } catch (e) {
    return console.error(e);
  }
};

function getCategoryProjects(projects, category) {
  if (!category || category === ALL_PROJECTS_CATEGORY_FILTER) return projects;
  return projects.filter(({
    fields: {
      projectCategory: {
        fields: {
          link,
        },
      },
    },
  }) => link === category);
}

export default function ProjectsPage({ components }) {
  const { query } = useRouter();
  const { categoryId } = query;
  const [, , { fields: categories },
    { fields: { project: projects } }, { fields: joinUs }] = components;
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  useEffect(() => {
    setProjectsToDisplay(getCategoryProjects(projects, categoryId));
  }, [categoryId]);

  return (
    <div className="projects-page">
      <div><h1>HERO</h1></div>
      <ProjectWrapper
        currCategory={categoryId}
        categories={categories}
      >
        <Projects projectsList={projectsToDisplay} />
      </ProjectWrapper>
      <JoinUs fields={joinUs} />
    </div>
  );
}
