import { useState } from 'react';
import { MEMBER_TYPE, PAGINATOR_ARROW_TYPE } from '../utils/constants';
import Paginator from './Paginator';

export default function MembersGrid({ fields }) {
  const {
    title,
  } = fields;
  const membersPerRequest = 12;
  const [members, setMembers] = useState([]);

  const handleMembersChange = (items) => {
    setMembers([...members, ...items]);
  };
  return (
    <section className="members-grid">
      <h2 className="members-grid__title">
        { title }
      </h2>
      <ul className="members-grid__container">
        { members?.map(({
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
      <Paginator
        variation={PAGINATOR_ARROW_TYPE}
        contentType={MEMBER_TYPE}
        onChange={handleMembersChange}
        itemsPerRequest={membersPerRequest}
      />
    </section>
  );
}
