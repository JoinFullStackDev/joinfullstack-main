interface PhaseMetricsProps {
  metrics: {
    label: string;
    value: string;
  }[];
}

export const PhaseMetrics = ({ metrics }: PhaseMetricsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
        >
          <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
            {metric.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};
