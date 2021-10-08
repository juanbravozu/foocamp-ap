import React from 'react';

export default function Paginator() {
  const labels = {
    next: 'Más Proyectos',
  };

  return (
    <article className="paginator">
      <div
        type="button"
        className="paginator__page-container"
      >
        <button
          className="paginator__page"
          type="button"
        >
          1
        </button>
      </div>
      <button
        type="button"
        className="paginator__button"
      >
        {labels.next}
      </button>
    </article>
  );
}
