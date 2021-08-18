export default function Footer({ footer }) {
  const logo = footer[6].fields.logo.fields.file.url;
  const nav = footer[6].fields.footerNavLinks;
  const navItem = [];
  const copy = footer[6].fields.closedCaption;
  const { title } = footer[6].fields;
  const description = footer[6].fields.companyDescription;
  const phone = footer[6].fields.contactNumber;
  const icons = footer[6].fields.socialNetworksSection;
  const iconsItem = [];
  icons.map((i) => iconsItem.push(
    <a key={i} href={icons[i].fields.link} target="_blank" rel="noreferrer">
      <img src={icons[i].fields.icon.fields.file.url} alt={icons[i].fields.title} />
    </a>,
  ));
  nav.map((i) => navItem.push(
    <li key={i}>
      <a href={nav[i].fields.link} className="navigation__item">{nav[i].fields.label}</a>
    </li>,
  ));
  return (
    <footer className="footer">
      <div className="container footer-nav">
        <div className="footer-nav__logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="footer-nav__list">
          <nav>
            <ul>
              {navItem}
            </ul>
          </nav>
        </div>
        <div className="footer-nav__contact">
          <p className="title">
            {title}
          </p>
          <p className="paragraph">
            {description}
          </p>
          <p className="title">
            Contactanos:
          </p>
          <div className="links">
            <a className="button-main button-footer" href={`https://api.whatsapp.com/send?phone=${phone}&amp;text=`} target="_blank" rel="noreferrer">
              <img src="whatsapp.png" alt="" />
              Whatsapp
            </a>
            <a className="button-main button-footer" href={`tel:${phone}`}>
              <img src="phone.png" alt="" />
              {phone}
            </a>
          </div>
        </div>
        <div className="footer-nav__social-media">
          <div className="media-container">{iconsItem}</div>
        </div>
        <div className="footer-nav__copy">
          <p>
            {copy}
          </p>
        </div>
      </div>
    </footer>
  );
}
