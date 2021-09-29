import getPageData from '../utils/api';
import { CORPORATION, MASTERPAGE } from '../utils/constants';
import Corporation from '../components/Corporation';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(CORPORATION);
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

export default function CorporationPage({ components }) {
  return (
    <div className="corporation">
      <Corporation components={components} />
    </div>
  );
}
