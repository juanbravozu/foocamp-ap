import getPageData from '../utils/api';
import { HOME, MASTERPAGE } from '../utils/constants';
import Home from '../components/Home';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(HOME);
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

export default function HomeView({ components }) {
  return (
    <div className="home">
      <Home components={components} />
    </div>
  );
}
