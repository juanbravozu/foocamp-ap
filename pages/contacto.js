import BigImageLayout from '../components/BigImageLayout';
import Hero from '../components/Hero';
import getPageData from '../utils/api';
import { MASTERPAGE, CONTACT } from '../utils/constants';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(CONTACT);
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

export default function SupportUsPage({ components }) {
  const [
    { fields: hero },
    { fields: benefist },
  ] = components;
  return (
    <div className="contact">
      <Hero
        fields={hero}
      />
      <section className="vertical-space">
        <BigImageLayout
          contentType="rich"
          data={{
            ...benefist,
          }}
        />
      </section>
    </div>
  );
}
