import getPageData from '../../utils/api';

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

export { default } from './index';
