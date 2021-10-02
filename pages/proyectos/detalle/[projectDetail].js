import Hero from '../../../components/Hero';
import ProjectChallenge from '../../../components/ProjectChallenge';
import ImpactMetrics from '../../../components/ImpactMetrics';
import getPageData from '../../../utils/api';
import { MASTERPAGE } from '../../../utils/constants';
import ContentSection from '../../../components/ContentSection';

export const getServerSideProps = async (context) => {
  try {
    const { projectDetail } = context.query;
    const pageData = await getPageData(projectDetail, 'project');
    const masterPageProps = await getPageData('', MASTERPAGE);

    return {
      props: {
        data: pageData,
        components: pageData.fields.projectDetail.fields,
        masterPageProps: masterPageProps.fields,
      },
    };
  } catch (e) {
    return console.error(e);
  }
};

export default function ProjectDetail({ components }) {
  const [{ fields: hero }, { fields: { category: categories } }, { fields: currCategory },
    { fields: challenge }, { fields: metrics }, { fields: strategy }] = components.detailComponents;
  return (
    <div>
      <Hero fields={hero} />
      <ProjectChallenge
        fields={{
          categories,
          currCategory: currCategory.link,
          ...challenge,
        }}
      />
      <ImpactMetrics fields={metrics} />
      <ContentSection
        fields={{
          link: strategy.cta.fields.link,
          label: strategy.cta.fields.label,
          ...strategy,
        }}
        className="strategy-actions"
        variation={['reverse', 'image-first']}
      />
    </div>
  );
}
