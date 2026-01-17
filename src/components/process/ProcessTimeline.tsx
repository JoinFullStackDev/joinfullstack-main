import { ReactNode } from 'react';

interface ProcessTimelineProps {
  children: ReactNode;
}

export const ProcessTimeline = ({ children }: ProcessTimelineProps) => {
  return (
    <div className="relative py-20">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 hidden md:block">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse opacity-50" />
      </div>

      {/* Mobile Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse opacity-50" />
      </div>

      {/* Phase Cards Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
};