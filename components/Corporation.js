import React from 'react';
import ComponentListRenderer from './ComponentListRenderer';

export default function Corporation({ components }) {
  return (
    <>
      <ComponentListRenderer components={components} />
    </>
  );
}
