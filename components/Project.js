import Link from 'next/link';

export default function Project({ number }) {
  return (
    <>
      Project
      {' '}
      {number}
      <Link href="/projects/detail/12033"> Mas info</Link>
    </>
  );
}
