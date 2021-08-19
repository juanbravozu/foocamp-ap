import getPageData from '../utils/api';
import BigImageLayout from '../components/layouts/BigImageLayout';
import LastProjects from '../components/sections/LastProjects';
import { HOME } from '../constants/pagenames';

export const getServerSideProps = async () => {
  const pageData = await getPageData(HOME);

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

export default function Recipes({ components }) {
  const projectSection = components.find((component) => component.sys.contentType.sys.id === 'projectsSection');

  return (
    <div className="home">
      <LastProjects
        title={projectSection.fields.title}
        categories={projectSection.fields.categoriesList}
      >
        <BigImageLayout
          contentType="rich"
          content={projectSection.fields.projectTitle}
          image={{
            url: projectSection.fields.sectionImage.fields.file.url,
            title: projectSection.fields.sectionImage.fields.title,
          }}
          variation="none"
          cta={{
            url: projectSection.fields.cta.fields.link,
            label: projectSection.fields.cta.fields.label,
          }}
        />
      </LastProjects>
    </div>
  );
}
