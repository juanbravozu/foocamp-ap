import BigImageLayout from '../components/BigImageLayout';
import Hero from '../components/Hero';
import getPageData from '../utils/api';
import { MASTERPAGE, VOLUNTEERS } from '../utils/constants';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(VOLUNTEERS);
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
    { fields: help },
  ] = components;
  return (
    <>
      <Hero
        fields={hero}
      />
      <section className="vertical-space">
        <BigImageLayout
          contentType="rich"
          variation="image-first"
          data={{
            url: benefist.sectionImage.fields.file.url,
            imgTitle: benefist.sectionImage.fields.title,
            ...benefist,
          }}
        />
      </section>
      <section className="vertical-space">
        <BigImageLayout
          contentType="rich"
          variation={['reverse', 'image-first']}
          data={{
            url: help.sectionImage.fields.file.url,
            imgTitle: help.sectionImage.fields.title,
            ...help,
          }}
        />
      </section>
    </>
  );
}
