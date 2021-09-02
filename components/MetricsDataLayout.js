export default function MetricsDataLayout({
  title, metric, description, ...props
}) {
  return (
    <div className="metrics-item" {...props}>
      <h3 className="metrics-subtitle">{title}</h3>
      <p className="metrics-value">{metric}</p>
      <p className="metrics-description">{description}</p>
    </div>
  );
}
