import Link from 'next/link';
import { CONTACT_LABEL } from '../utils/constants';

export default function Footer({ fields }) {
  const {
    logo: { fields: logo },
    footerNavLinks: navFooter,
    closedCaption: copy,
    title,
    companyDescription: description,
    contactNumber: phone,
    contact: contactInfo,
    socialNetworksSection: iconsFooter,
  } = fields;
  return (
    <footer className="footer">
      <div className="container footer-nav">
        <div className="footer-nav__logo">
          <Link passHref href="/">
            <a href="/">
              <img src={logo.file.url} alt={logo.title} />
            </a>
          </Link>
        </div>
        <div className="footer-nav__list">
          <nav>
            <ul>
              {navFooter.map((link) => (
                <li key={link.sys.id}>
                  <Link passHref href={`/${link.fields.link}`}>
                    <a href="/" className="navigation__item">
                      {link.fields.label}
                    </a>
                  </Link>
                </li>
              ))}
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
            {CONTACT_LABEL}
          </p>
          <div className="links">
            {contactInfo.map(({
              fields: {
                link,
                title: textLink,
                icon: {
                  fields: {
                    file: {
                      url,
                    },
                  },
                },
              },
              sys: { id },
            }) => (
              link
                && (
                <Link passHref key={id} href={link}>
                  <a href="/" className="button-main button-footer" target="_blank" rel="noreferrer">
                    {url
                      && (
                        <img
                          role="presentation"
                          aria-hidden="true"
                          src={url}
                          alt=""
                        />
                      )}
                    {textLink}
                  </a>
                </Link>
                )
            ))}
            <Link passHref href={`tel:${phone}`}>
              <a href="/" className="button-main button-footer">
                <img src="/icons/icon-phone.svg" alt="icon-phone" />
                {phone}
              </a>
            </Link>
          </div>
        </div>
        <div className="footer-nav__social-media">
          <div className="media-container">
            {iconsFooter.map((icon) => (
              <Link passHref key={icon.sys.id} href={icon.fields.link}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    src={icon.fields.icon.fields.file.url}
                    alt={icon.fields.title}
                  />
                </a>
              </Link>
            ))}
          </div>
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
