interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

interface ProcessStatsProps {
  stats: StatItem[];
}

export const ProcessStats = ({ stats }: ProcessStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="process-stat opacity-0 text-center p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-border/30 hover:border-accent/30 hover:bg-card/30 transition-all duration-300"
          data-index={index}
        >
          <div className="text-4xl md:text-5xl font-bold text-accent mb-2 process-stat-value">
            {stat.value}
            {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};