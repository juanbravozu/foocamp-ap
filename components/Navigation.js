import { useState } from 'react';

export default function Navigation({ header }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }
  const logo = header.fields.logo.fields.file.url;
  const navHeadre = header.fields.navItems;
  return (
    <header className="header">
      <nav className={`navigation container ${openMenu && 'active'}`}>
        <a className="logo" href="/">
          <img src={logo} alt={header.fields.logo.fields.title} />
        </a>
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
                <a href={link.fields.link} className={link.fields.link === 'apoyanos' ? 'button-main button-header' : 'navigation__item'}>
                  {link.fields.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
