import BigImageLayout from '../layouts/BigImageLayout';
import LastProjectsContent from '../layouts/LastProjectsContent';

export default function LastProjects({ fields }) {
  return (
    <LastProjectsContent
      data={fields}
    >
      <BigImageLayout
        contentType="rich"
        variation="no-title"
        data={fields}
      />
    </LastProjectsContent>
  );
}
