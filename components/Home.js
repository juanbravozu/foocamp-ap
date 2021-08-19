import { Fragment } from 'react';
import Hero from './Hero';
import { HERO_SECTION } from '../constants/constants';

export default function Home({ components }) {
  return (
    <>
      {components.map(({ fields, sys: { id, contentType } }) => (
        (!!(contentType.sys.id === HERO_SECTION) && <Hero key={id} fields={fields} />)
      ))}
    </>
  );
}
