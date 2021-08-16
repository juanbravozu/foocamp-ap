import getPageData from '../utils/api';
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
  return (
    <div className="home">
      <h1>
        Index page
      </h1>
      {components.map((component) => (
        <p key={component.sys.id}>Test</p>
      ))}
    </div>
  );
}
