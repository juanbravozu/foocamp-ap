import Link from 'next/link';
import { useState } from 'react';
import { ALLIES_TYPE, PAGINATOR_ARROW_TYPE } from '../utils/constants';
import Paginator from './Paginator';

export default function MainAllies({ fields }) {
  const { title } = fields;
  const [allies, setAllies] = useState([]);
  const alliesPerRequest = 18;

  const handlePageChange = (items) => {
    setAllies([...allies, ...items]);
  };
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
        <Paginator
          variation={PAGINATOR_ARROW_TYPE}
          contentType={ALLIES_TYPE}
          itemsPerRequest={alliesPerRequest}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
}
