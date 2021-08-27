import MetricsDataLayout from '../resources/MetricsDataLayout';

export default function ImpactMetrics({ fields: { impactMetricsSet: metrics, title } }) {
  return (
    <section className="metrics">
      <div className="metrics-wrapper">
        <h2 className="metrics-title">{title}</h2>
        <div className="metrics-container">
          {metrics.map(({ fields: { title: metricsTitle, metric, description }, sys: { id } }) => (
            <MetricsDataLayout
              key={id}
              title={metricsTitle}
              metric={metric}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
