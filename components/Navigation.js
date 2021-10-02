import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation({ fields }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }
  function handleCloseMenu() {
    setOpenMenu(false);
  }
  const { pathname } = useRouter();
  const currentPage = pathname.split('/')[1];
  const { logo: { fields: logo }, navItems: navHeader } = fields;
  const navigationType = (link) => (link === 'apoyanos' ? 'button-main button-header' : 'navigation__item');
  const activeClass = (link) => (link.trim() === currentPage ? 'active' : '');
  return (
    <header className="header">
      <nav className={`navigation container ${openMenu && 'active'}`}>
        <Link passHref href="/">
          <a className="logo" href="/">
            <img src={logo.file.url} alt={logo.title} />
          </a>
        </Link>
        <button type="button" className={`navigation__icon ${openMenu && 'open'}`} onClick={handleToggleMenu}>
          <span role="presentation" aria-hidden="true" />
          <span role="presentation" aria-hidden="true" />
          <span role="presentation" aria-hidden="true" />
          <span role="presentation" aria-hidden="true" />
          <span role="presentation" aria-hidden="true" />
          <span role="presentation" aria-hidden="true" />
        </button>
        <div className="navigation__list">
          <ul>
            {navHeader.map(({
              fields: {
                link,
                label,
              },
              sys: { id },
            }) => (
              <li key={id} className={activeClass(link)}>
                <Link passHref href={`/${link}`}>
                  <a
                    href="/"
                    className={navigationType(link)}
                    onClick={handleCloseMenu}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
