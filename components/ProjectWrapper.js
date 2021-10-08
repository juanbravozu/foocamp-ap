import Link from 'next/link';
import { ALL_PROJECTS_CATEGORY_FILTER } from '../utils/constants';
import CategoryLink from './CategoryLink';
import Paginator from './Paginator';

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
                highlight={
                  link === currCategory
                  || (!currCategory
                  && link === ALL_PROJECTS_CATEGORY_FILTER)
                }
              >
                {label}
              </CategoryLink>
            </Link>
          ))}
        </ul>
      </div>
      {children}
      <Paginator />
    </>
  );
}
