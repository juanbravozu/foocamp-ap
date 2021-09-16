import getPageData from '../../../utils/api';

export const getServerSideProps = async (context) => {
  try {
    const { projectDetail } = context.query;
    const pageData = await getPageData(projectDetail, 'project');

    return {
      props: {
        data: pageData,
        components: pageData.fields.projectDetail.fields,
      },
    };
  } catch (e) {
    return console.error(e);
  }
};

/* eslint-disable no-unused-vars */
export default function ProjectDetail({ components }) {
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <h1>Detail 1</h1>
    </div>
  );
}
