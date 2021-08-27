import React from 'react';
import homeComponents from '../../utils/homeComponents';

export default function Home({ components }) {
  return (
    <>
      {components.map(({ fields, sys: { id, contentType: { sys: { id: sectionType } } } }) => {
        const Component = homeComponents[sectionType];
        if (!Component) return null;
        return <Component key={id} fields={fields} />;
      })}
    </>
  );
}
