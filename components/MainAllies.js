export default function MainAllies({ mainAllies }) {
  const { title } = mainAllies.fields;
  const { allies } = mainAllies.fields;
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
              <a href="link" target="_blank" rel="noreferrer">
                <img
                  src={ally ? ally.fields.allyLogo.fields.file.url : null}
                  alt={ally.fields.allyName}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="moreAllies">
          <a href="link">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white" />
              <path d="M28.75 18L31 20.2418L22 29L13 20.2418L15.25 18L22 24.6L28.75 18Z" fill="#00A5DF" />
              <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#9DD7EC" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
