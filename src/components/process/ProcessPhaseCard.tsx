import { LucideIcon } from 'lucide-react';
import { ProcessFlow } from '@/components/ProcessFlow';
import { ProcessPhaseInsight } from './ProcessPhaseInsight';

interface ProcessPhaseCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  processSteps: string[];
  metrics: { label: string; value: string }[];
  align: 'left' | 'right';
  index: number;
  deliverables: string[];
  duration: string;
  successRate: string;
}

export const ProcessPhaseCard = ({
  number,
  title,
  description,
  icon: Icon,
  features,
  processSteps,
  metrics,
  align,
  index,
  deliverables,
  duration,
  successRate,
}: ProcessPhaseCardProps) => {
  return (
    <div className="relative mb-16 md:mb-32 last:mb-0">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
        {/* Left Side - Main Card or Insight based on alignment */}
        <div className={align === 'left' ? 'col-start-1' : 'col-start-1'}>
          {align === 'left' ? (
            <div 
              className="process-card"
              data-align="left"
              data-index={index}
            >
              <CardContent
                number={number}
                title={title}
                description={description}
                icon={Icon}
                features={features}
                processSteps={processSteps}
                metrics={metrics}
              />
            </div>
          ) : (
            <ProcessPhaseInsight
              deliverables={deliverables}
              duration={duration}
              successRate={successRate}
              index={index}
            />
          )}
        </div>

        {/* Center Badge */}
        <div className="col-start-2 flex justify-center">
          <div 
            className="process-badge relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-accent border-4 border-background shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
            data-index={index}
          >
            <Icon className="w-7 h-7 text-background" />
          </div>
        </div>

        {/* Right Side - Insight or Main Card based on alignment */}
        <div className="col-start-3">
          {align === 'left' ? (
            <ProcessPhaseInsight
              deliverables={deliverables}
              duration={duration}
              successRate={successRate}
              index={index}
            />
          ) : (
            <div 
              className="process-card"
              data-align="right"
              data-index={index}
            >
              <CardContent
                number={number}
                title={title}
                description={description}
                icon={Icon}
                features={features}
                processSteps={processSteps}
                metrics={metrics}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Header with Badge */}
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="process-badge relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent border-4 border-background shadow-[0_0_20px_hsl(var(--accent)/0.5)] flex-shrink-0"
            data-index={index}
          >
            <Icon className="w-6 h-6 text-background" />
          </div>
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest">
              {number}
            </div>
            <h3 className="text-xl font-bold">
              {title}
            </h3>
          </div>
        </div>

        {/* Main Card Content */}
        <div 
          className="process-card"
          data-align="left"
          data-index={index}
        >
          <MobileCardContent
            description={description}
            features={features}
            processSteps={processSteps}
            metrics={metrics}
          />
        </div>

        {/* Insight Section - Now visible on mobile */}
        <div className="mt-6">
          <ProcessPhaseInsight
            deliverables={deliverables}
            duration={duration}
            successRate={successRate}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};

// Extracted card content component for desktop
const CardContent = ({
  number,
  title,
  description,
  icon: Icon,
  features,
  processSteps,
  metrics,
}: Omit<ProcessPhaseCardProps, 'align' | 'index' | 'deliverables' | 'duration' | 'successRate'>) => {
  return (
    <div className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 hover:bg-card/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)] hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">
            {number}
          </div>
          <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Key Features
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <ProcessFlow steps={processSteps} />

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border/30">
            <div className="text-2xl font-bold text-accent mb-1 process-counter" data-target={metric.value}>
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mobile card content without header (header shown separately)
const MobileCardContent = ({
  description,
  features,
  processSteps,
  metrics,
}: {
  description: string;
  features: string[];
  processSteps: string[];
  metrics: { label: string; value: string }[];
}) => {
  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Key Features
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <ProcessFlow steps={processSteps} />

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border/30">
            <div className="text-xl font-bold text-accent mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};