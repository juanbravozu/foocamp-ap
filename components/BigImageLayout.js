import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { getVariation } from '../utils/global-functions';

/* eslint-disable react/destructuring-assignment */
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file: { url } } = node.data.target.fields;
      return (
        <img
          src={`https://${url}`}
          alt=""
        />
      );
    },
  },
};

function getContent(innerContent) {
  switch (typeof innerContent) {
    case 'string':
      return <p>{ innerContent }</p>;
    case 'object':
      return documentToReactComponents(innerContent, options);
    default:
      return '';
  }
}

export default function BigImageLayout({ data, variation }) {
  const layoutData = {
    title: data?.title,
    content:
      data?.projectTitle
      || data?.description
      || data?.content,
    cta: {
      url: data?.link,
      label: data?.label,
    },
    image: {
      url: data?.url,
      title: data?.imgTitle,
    },
  };

  return (
    <div className={getVariation('big-image-layout', variation)}>
      <div className="big-image-layout__content">
        { layoutData.title && <h2 className="big-image-layout__title">{ layoutData.title }</h2> }
        { layoutData.content
          && getContent(layoutData.content) }
        { layoutData.cta.url
          && (
            <Link href={`/${layoutData.cta.url}`}>
              <span className="big-image-layout__button">
                { layoutData.cta.label }
              </span>
            </Link>
          ) }
      </div>
      <div
        className="big-image-layout__image"
        role="presentation"
        aria-hidden="true"
      >
        { layoutData.image.url
          && (
          <img
            src={`https://${layoutData.image.url}`}
            alt={layoutData.image.title}
          />
          )}
      </div>
    </div>
  );
}
