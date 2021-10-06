import { useRouter } from 'next/dist/client/router';
import getPageData from '../../utils/api';
import ProjectWrapper from '../../components/ProjectWrapper';
import { PROJECTS, MASTERPAGE } from '../../utils/constants';
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

export default function ProjectsPage({ components }) {
  const { query } = useRouter();
  const { categoryId } = query;
  const [, { fields: hero }, { fields: categories }] = components;
  const heroBaseUrl = '/proyectos/';

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
      />
    </div>
  );
}
