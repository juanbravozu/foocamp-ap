import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { getVariation } from '../../utils/global-functions';

export default function BigImageLayout({ contentType, data, variation }) {
  function getContent(innerContent, innerContentType) {
    if (innerContentType === 'rich') {
      return documentToReactComponents(innerContent);
    } if (innerContentType === 'simple') {
      return <p>{ innerContent }</p>;
    }
    return '';
  }

  const layoutData = {
    title: data?.title,
    content:
      data?.projectTitle
      || data?.description,
    cta: {
      url: data?.cta.fields.link,
      label: data?.cta.fields.label,
    },
    image: {
      url: data?.sectionImage.fields.file.url,
      title: data?.sectionImage.fields.title,
    },
  };

  return (
    <div className={getVariation('big-image-layout', variation)}>
      <div className="big-image-layout__content">
        { layoutData.title && <h2>{ layoutData.title }</h2> }
        { layoutData.content
          && getContent(layoutData.content, contentType) }
        { layoutData.cta
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
        { layoutData.image
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
