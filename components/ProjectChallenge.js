import Link from 'next/link';
import BigImageLayout from './BigImageLayout';
import CategoryLink from './CategoryLink';

export default function ProjectChallenge({
  fields: {
    categories,
    currCategory,
    title,
    sectionImage: {
      fields: {
        title: imgTitle,
        file: {
          url,
        },
      },
    },
    projectTitle,
  },
}) {
  const backBtn = {
    href: '/proyectos',
    label: 'Volver',
  };

  return (
    <section className="project-challenge">
      {categories
        && (
        <>
          <Link passHref href={backBtn.href}>
            <a href="/" className="categories__back">
              {backBtn.label}
            </a>
          </Link>
          <div className="categories__wrapper">
            <ul className="categories categories--vertical-space">
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
        </>
        )}

      <BigImageLayout
        contentType="rich"
        data={{
          title,
          url,
          imgTitle,
          projectTitle,
        }}
      />
    </section>
  );
}
