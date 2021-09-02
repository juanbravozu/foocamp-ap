import Link from 'next/link';

export default function MainAllies({ fields }) {
  const { title, allies } = fields;
  return (
    <section className="mainAllies">
      <div className="container">
        <div>
          <h3 className="title">
            {title}
          </h3>
        </div>
        <div className="grid">
          {allies.map((ally) => (
            <div key={ally.sys.id} className="grid__card">
              <Link passHref href="/">
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    src={ally ? ally.fields.allyLogo.fields.file.url : ''}
                    alt={ally.fields.allyName}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="moreAllies">
          <Link passHref href="/">
            <a href="/">
              <img src="/icons/icon-arrowDown.svg" alt="icon-arrowDown" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
