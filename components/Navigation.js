import { useState } from 'react';

export default function Navigation({ header }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }
  const logo = header[0].fields.logo.fields.file.url;
  const nav = header[0].fields.navItems;
  const support = header[0].fields.navItems[5].fields;
  const navItem = [];
  for (let i = 0; i < nav.length - 1; i += 1) {
    navItem.push(<li key={i}><a href={nav[i].fields.link} className="navigation__item">{nav[i].fields.label}</a></li>);
  }
  return (
    <header className="header">
      <nav className={`navigation container ${openMenu && 'active'}`}>
        <a href="/" className="logo">
          <img src={logo} alt="" />
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
            {navItem}
          </ul>
          <a href={support.link} className="button-main button-header">{support.label}</a>
        </div>
      </nav>
    </header>
  );
}
