import { Check, Clock, TrendingUp } from 'lucide-react';

interface ProcessPhaseInsightProps {
  deliverables: string[];
  duration: string;
  successRate: string;
  index: number;
}

export const ProcessPhaseInsight = ({
  deliverables,
  duration,
  successRate,
  index,
}: ProcessPhaseInsightProps) => {
  return (
    <div 
      className="process-insight space-y-6"
      data-index={index}
    >
      {/* Deliverables Card */}
      <div className="p-6 rounded-xl border border-border/30 bg-card/10 backdrop-blur-sm hover:border-accent/20 transition-all duration-300">
        <h4 className="text-sm font-mono text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
          <Check className="w-4 h-4" />
          Key Deliverables
        </h4>
        <div className="space-y-3">
          {deliverables.map((deliverable, idx) => (
            <div 
              key={idx}
              className="deliverable-item flex items-start gap-3 group"
              data-index={idx}
            >
              <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-accent/30 flex items-center justify-center group-hover:border-accent transition-colors">
                <Check className="w-3 h-3 text-accent opacity-0 scale-0 deliverable-check transition-all duration-300" />
              </div>
              <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                {deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Duration */}
        <div className="stat-card p-4 rounded-xl border border-border/30 bg-gradient-to-br from-card/20 to-card/5 backdrop-blur-sm hover:border-accent/20 transition-all duration-300 group">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-accent group-hover:animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</span>
          </div>
          <div className="text-2xl font-bold text-accent">{duration}</div>
        </div>

        {/* Success Rate */}
        <div className="stat-card p-4 rounded-xl border border-border/30 bg-gradient-to-br from-card/20 to-card/5 backdrop-blur-sm hover:border-accent/20 transition-all duration-300 group">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-accent group-hover:animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Success</span>
          </div>
          <div className="text-2xl font-bold text-accent">{successRate}</div>
        </div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 pointer-events-none">
        <div className="floating-icon-1 absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-accent/20 blur-xl animate-float" />
        <div className="floating-icon-2 absolute top-3/4 right-1/4 w-16 h-16 rounded-full bg-accent/30 blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="floating-icon-3 absolute top-1/2 right-1/3 w-10 h-10 rounded-full bg-accent/25 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};
