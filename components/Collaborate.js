import BigImageLayout from './BigImageLayout';

export default function Collaborate({
  fields: {
    title,
    sectionImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
    projectTitle,
  },
}) {
  return (
    <section>
      <BigImageLayout
        variation={['reverse', 'vertical-margin']}
        contentType="rich"
        data={{
          title,
          projectTitle,
          url,
          imgTitle,
        }}
      />
    </section>
  );
}
