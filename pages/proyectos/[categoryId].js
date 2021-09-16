import getPageData from '../../utils/api';
import { MASTERPAGE, PROJECTS } from '../../utils/constants';

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

export { default } from './index';
