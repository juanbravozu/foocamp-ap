import Link from 'next/link';

export default function ProjectWrapper({ children }) {
  // Must draw the list of links selecting the current by the prop category id
  return (
    <>
      <ul className="categories">
        <li><Link key="1" href="/proyectos">Todos los proyectos</Link></li>
        <li><Link key="2" href="/proyectos/deporte">Deportes</Link></li>
        <li><Link key="3" href="/proyectos/arte-y-cultura">Arte y cultura</Link></li>
      </ul>
      {children}
      <div>1,2,,4, </div>
    </>
  );
}
