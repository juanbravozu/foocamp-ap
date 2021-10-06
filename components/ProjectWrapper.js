import Link from 'next/link';
import { useState } from 'react';
import { ALL_PROJECTS_CATEGORY_FILTER, PAGINATOR_NUMBERS_TYPE, PROJECT_TYPE } from '../utils/constants';
import CategoryLink from './CategoryLink';
import Paginator from './Paginator';
import Projects from './Projects';

export default function ProjectWrapper({
  currCategory,
  categories: { category: categories = [] } = {},
}) {
  const [projects, setProjects] = useState([]);
  const projectsPerRequest = 5;

  const handlePageChange = (items) => {
    setProjects(items);
  };
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
      <Projects projectsList={projects} />
      <Paginator
        variation={PAGINATOR_NUMBERS_TYPE}
        itemsPerRequest={projectsPerRequest}
        contentType={PROJECT_TYPE}
        query={
          (currCategory && currCategory !== ALL_PROJECTS_CATEGORY_FILTER)
          && { 'fields.projectCategory': currCategory }
        }
        onChange={handlePageChange}
      />
    </>
  );
}
