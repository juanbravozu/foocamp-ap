import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import Projects from '../../components/Projects';
import { ALL_PROJECTS_CATEGORY_FILTER, PROJECTS, MASTERPAGE } from '../../utils/constants';
import Hero from '../../components/Hero';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(PROJECTS);
    const masterPageProps = await getPageData('', MASTERPAGE);

    return {
      props: {
        data: pageData,
        components: pageData.fields.components,
        masterPageProps: masterPageProps.fields,

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
  const [, { fields: hero }, { fields: categories },
    { fields: { project: projects } }] = components;
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);
  const heroBaseUrl = '/proyectos/';

  useEffect(() => {
    setProjectsToDisplay(getCategoryProjects(projects, categoryId));
  }, [categoryId]);

  return (
    <div className="projects-page">
      <Hero
        fields={hero}
        baseUrl={heroBaseUrl}
        linksToBlank={false}
        hideLine
      />
      <ProjectWrapper
        currCategory={categoryId}
        categories={categories}
      >
        <Projects projectsList={projectsToDisplay} />
      </ProjectWrapper>
    </div>
  );
}
