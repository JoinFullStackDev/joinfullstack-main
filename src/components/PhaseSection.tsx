import { LucideIcon } from 'lucide-react';
import { PhaseMetrics } from './PhaseMetrics';
import { ProcessFlow } from './ProcessFlow';
import { PhaseDetailCard } from './PhaseDetailCard';

interface PhaseDetailCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

interface PhaseSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  align?: 'left' | 'right';
  features?: string[];
  metrics?: { label: string; value: string }[];
  processSteps?: string[];
  detailCards?: PhaseDetailCardData[];
}

export const PhaseSection = ({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  align = 'left',
  features = [],
  metrics = [],
  processSteps = [],
  detailCards = [],
}: PhaseSectionProps) => {
  return (
    <section
      id={`section-${id}`}
      className="relative min-h-screen flex items-center px-4 py-16 md:px-6 md:py-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="phase-content">
          {/* Header */}
          <div
            className={`max-w-2xl mb-12 text-left ${
              align === 'right' ? 'md:ml-auto md:text-right' : 'md:mr-auto'
            }`}
          >
            <div className={`flex items-center gap-3 mb-4 justify-start ${align === 'right' ? 'md:justify-end' : ''}`}>
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              {description}
            </p>
            
            {features.length > 0 && (
              <ul className={`space-y-3 items-start ${align === 'right' ? 'md:items-end' : ''} flex flex-col`}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground/90"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent glow-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Metrics */}
          {metrics.length > 0 && <PhaseMetrics metrics={metrics} />}

          {/* Detail Cards */}
          {detailCards.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {detailCards.map((card, index) => (
                <PhaseDetailCard key={index} {...card} />
              ))}
            </div>
          )}

          {/* Process Flow */}
          {processSteps.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <ProcessFlow steps={processSteps} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
