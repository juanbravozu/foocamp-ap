import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import Projects from '../../components/Projects';
import JoinUs from '../../components/JoinUs';

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

export default function ProjectsPage({ components }) {
  const { query } = useRouter();
  const { categoryId } = query;
  const [, , { fields: categories }, { fields: projects }, { fields: joinUs }] = components;

  useEffect(() => {
    // Fetch projects based on category filter
  }, [categoryId]);

  return (
    <div className="home">
      {/* must take the Hero component and render it */}
      <div><h1>HERO</h1></div>
      <ProjectWrapper
        currCategory={categoryId}
        categories={categories}
      >
        <Projects projectsList={projects} />
      </ProjectWrapper>
      <JoinUs fields={joinUs} />
    </div>
  );
}
