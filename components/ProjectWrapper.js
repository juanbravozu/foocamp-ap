import Link from 'next/link';
import CategoryLink from './CategoryLink';

export default function ProjectWrapper({
  children,
  currCategory,
  categories: { category: categories = [] } = {},
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
              <CategoryLink
                Component="a"
                highlight={link === currCategory}
              >
                {label}
              </CategoryLink>
            </Link>
          ))}
        </ul>
      </div>
      {children}
    </>
  );
}
