export default function MembersGrid({ fields }) {
  const {
    title,
    corporationMembersSet,
  } = fields;

  return (
    <section className="members-grid">
      <h2 className="members-grid__title">
        { title }
      </h2>
      <ul className="members-grid__container">
        { corporationMembersSet?.map(({
          sys: { id },
          fields: {
            memberName,
            memberPosition,
            memberImage: {
              fields: {
                file: { url: imageUrl },
              },
            },
          },
        }) => (
          <li key={id}>
            <article className="member">
              <img
                alt=""
                src={`https://${imageUrl}`}
                className="member__image"
              />
              <div>
                <p className="member__name">
                  {memberName}
                </p>
                <p className="member__copy">
                  {memberPosition}
                </p>
              </div>
            </article>
          </li>
        )) }
      </ul>
    </section>
  );
}
