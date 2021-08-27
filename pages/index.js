import getPageData from '../utils/api';
import { HOME } from '../constants/constants';
import Home from '../components/app/Home';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(HOME);

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

export default function HomeView({ components }) {
  return (
    <div className="home">
      <Home components={components} />
    </div>
  );
}
