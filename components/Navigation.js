import { useState } from 'react';
import Link from 'next/link';

export default function Navigation({ fields }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }
  const { logo: { fields: logo }, navItems: navHeadre } = fields;
  const navigationType = (link) => (link === 'apoyanos' ? 'button-main button-header' : 'navigation__item');
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
            {navHeadre.map((link) => (
              <li key={link.sys.id}>
                <Link passHref href={`/${link.fields.link}`}>
                  <a href="/" className={navigationType(link.fields.link)}>
                    {link.fields.label}
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
