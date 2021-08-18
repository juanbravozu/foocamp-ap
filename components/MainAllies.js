export default function MainAllies({ mainAllies }) {
  const { title } = mainAllies[4].fields;
  const { allies } = mainAllies[4].fields;
  const alliesItem = [];
  allies.map((i) => alliesItem.push(
    <div key={i} className="grid__card">
      <a href={allies[i].fields.link} target="_blank" rel="noreferrer">
        <img src={allies[i].fields.allyLogo.fields.file.url} alt="" />
      </a>
    </div>,
  ));
  return (
    <section className="mainAllies">
      <div className="container">
        <div>
          <h3 className="title">
            {title}
          </h3>
        </div>
        <div className="grid">
          {alliesItem}
        </div>
        <div className="moreAllies">
          <a href="/">
            <img src="show-more.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
