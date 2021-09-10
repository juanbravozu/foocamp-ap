import Link from 'next/link';
import Chip from './Chip';

export default function ProjectWrapper({
  children,
  currCategory,
  categories: { category: categories },
}) {
  return (
    <>
      <div className="categories__wrapper">
        <ul className="categories">
          {categories.map(({
            fields: {
              label,
              link,
            },
          }) => (
            <Link
              key={link}
              href={`/proyectos/${link}`}
              passHref
              shallow
            >
              <Chip
                Component="a"
                highlight={link === currCategory}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Chip>
            </Link>
          ))}
        </ul>
      </div>
      {children}
    </>
  );
}
