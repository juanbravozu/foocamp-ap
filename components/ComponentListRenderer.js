import React from 'react';
import dictionary from '../utils/componentsDictionary';

export default function ComponentListRenderer({ components }) {
  return (
    <>
      {components.map(({ fields, sys: { id, contentType: { sys: { id: sectionType } } } }) => {
        const Component = dictionary[sectionType];
        if (!Component) return null;
        return <Component key={id} fields={fields} />;
      })}
    </>
  );
}
