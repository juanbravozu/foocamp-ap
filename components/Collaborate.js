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
    <section className="collaborate">
      <BigImageLayout
        variation={['reverse', 'on-context']}
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
