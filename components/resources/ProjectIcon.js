import Link from 'next/link';
import { getVariation } from '../../utils/global-functions';

export default function ProjectIcon({
  icon, url, text, variation,
}) {
  return (
    <Link href={url}>
      <div className={getVariation('project-icon', variation)}>
        { icon && (
          <div className="placeholder-image">
            <img
              src={`https://${icon.fields.file.url}`}
              alt={icon.fields.title}
            />
          </div>
        ) }
        <span className="project-icon__body">
          {text}
        </span>
      </div>
    </Link>
  );
}
