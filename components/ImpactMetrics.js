export default function ImpactMetrics({ sectionTitle, metrics }) {
  console.log(metrics);
  return (
    <section className="metrics">
      <div className="metrics-wrapper">
        <h2 className="metrics-title">{sectionTitle}</h2>
        <div className="metrics-container">
          {metrics.map(({ fields: { title, metric, description } }) => (
            <div className="metrics-item">
              <h3 className="metrics-subtitle">{title}</h3>
              <p className="metrics-value">{metric}</p>
              <p className="metrics-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
