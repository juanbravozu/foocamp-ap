import { useRouter } from 'next/dist/client/router';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import Projects from '../../components/Projects';

export const getServerSideProps = async () => {
  try {
    // this must be refactorized, only one request for all pages and select one ?, no.
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
  // catchs the parameter from the url called categoryId
  const { query } = useRouter();
  const { categoryId } = query;
  console.log('****************************', categoryId, components);
  // from components extract the requiered info
  // const [, , , parentProjects] = components;
  // const { fields: { categories } } = parentProjects;

  return (
    <div className="home">
      {/* must take the Hero component and render it */}
      <div><h1>HERO</h1></div>
      <ProjectWrapper category={categoryId} navLinks="shall pass navs">
        <Projects selectedProjects="must pass list of Projects" />
      </ProjectWrapper>
    </div>
  );
}
