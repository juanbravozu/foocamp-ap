import React from 'react';
import ComponentListRenderer from './ComponentListRenderer';

export default function Home({ components }) {
  return (
    <ComponentListRenderer components={components} />
  );
}
