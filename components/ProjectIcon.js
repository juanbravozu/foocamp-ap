import Link from 'next/link';

export default function ProjectIcon({
  icon, url, text, variation,
}) {
  return (
    <Link href={url}>
      <div className={
          (variation !== 'none')
            ? `project-icon project-icon--${variation}`
            : 'project-icon'
        }
      >
        { icon
          ? (
            <div className="placeholder-image">
              <img src={`https://${icon.fields.file.url}`} alt={icon.fields.title} />
            </div>
          ) : null }
        <span className="project-icon__body">
          {text}
        </span>
      </div>
    </Link>
  );
}
