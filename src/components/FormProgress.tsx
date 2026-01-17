import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (progressBarRef.current) {
      const progress = ((currentStep + 1) / totalSteps) * 100;
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [currentStep, totalSteps]);

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all"
          style={{ width: '0%' }}
        />
      </div>

      {/* Step Dots - Desktop */}
      <div className="hidden md:flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                  : 'bg-border/50'
              }`}
            />
            <span
              className={`text-xs font-medium transition-colors ${
                index <= currentStep ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              Step {index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Step Indicator - Mobile */}
      <div className="md:hidden text-center">
        <span className="text-sm text-muted-foreground">
          Step <span className="text-accent font-bold">{currentStep + 1}</span> of {totalSteps}
        </span>
      </div>
    </div>
  );
};
