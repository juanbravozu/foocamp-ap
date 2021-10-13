import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { getPaginatedContent } from '../utils/api';
import { PAGINATOR_ARROW_TYPE, PAGINATOR_NUMBERS_TYPE } from '../utils/constants';
import { getVariation as getStyleModifier } from '../utils/global-functions';

/* eslint-disable react/no-array-index-key */
export default function Paginator({
  itemsPerRequest,
  contentType,
  onChange,
  variation,
  query = {},
}) {
  const labels = {
    next: 'Más Proyectos',
  };
  const [page, setPage] = useState(0);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const { query: routerQuery } = useRouter();
  const arrowImageSrc = '/icons/icon-arrowDown.svg';

  useEffect(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const items = await getPaginatedContent(
        contentType,
        page * itemsPerRequest,
        itemsPerRequest,
        query,
      );
      setLoading(false);
      if (!items) return;
      if (
        variation === PAGINATOR_ARROW_TYPE
        && items.total <= (page * itemsPerRequest) + items.items.length
      ) setShowMoreBtn(false);
      setTotalPages(Math.ceil(items.total / itemsPerRequest));
      onChange(items.items);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [page, routerQuery]);

  function handlePageChange(newPage) {
    return () => setPage(newPage);
  }
  function handleNextPage() {
    if ((page + 1) < totalPages) setPage(page + 1);
  }
  return (
    <>
      {variation === PAGINATOR_NUMBERS_TYPE
        && (
        <article className="paginator">
          <div
            type="button"
            className="paginator__page-container"
          >
            {Array.from({ length: totalPages })
              .map((_, index) => (
                <button
                  className={
                    getStyleModifier('paginator__page', index === page ? 'active' : '')
                  }
                  type="button"
                  key={index}
                  onClick={handlePageChange(index)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
          <button
            type="button"
            className={`paginator__button ${(page + 1) < totalPages ? '' : 'disabled'}`}
            disabled={!((page + 1) < totalPages)}
            onClick={handleNextPage}
          >
            {labels.next}
          </button>
        </article>
        )}

      {(variation === PAGINATOR_ARROW_TYPE && showMoreBtn)
        && (
        <div className="paginator--arrow">
          <button onClick={handleNextPage} type="button">
            <img src={arrowImageSrc} alt="icon-arrowDown" />
          </button>
        </div>
        )}
    </>
  );
}

/* eslint-enable react/no-array-index-key */
