import BigImageLayout from '../components/BigImageLayout';
import Collaborate from '../components/Collaborate';
import Hero from '../components/Hero';
import TestimonialsWrapper from '../components/TestimonialsWrapper';
import getPageData from '../utils/api';
import { MASTERPAGE, SUPPORT_US } from '../utils/constants';

export const getServerSideProps = async () => {
  try {
    const pageData = await getPageData(SUPPORT_US);
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
  const [{ fields: hero }, { fields: howTo }, { fields: collaborate },
    { fields: testimonials }] = components;
  return (
    <>
      <Hero
        fields={hero}
      />
      <section>
        <BigImageLayout
          contentType="rich"
          variation={['on-context']}
          data={{
            url: howTo.sectionImage.fields.file.url,
            imgTitle: howTo.sectionImage.fields.title,
            ...howTo,
          }}
        />
      </section>
      <Collaborate
        fields={collaborate}
      />
      <TestimonialsWrapper
        fields={testimonials}
      />
    </>
  );
}
