import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProcessFlowProps {
  steps: string[];
}

export const ProcessFlow = ({ steps }: ProcessFlowProps) => {
  return (
    <div className="my-8">
      <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
        Process Flow
      </h4>
      
      {/* Mobile Slider */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center p-6">
                  {/* Waypoint Dot */}
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent border-2 border-accent flex-shrink-0 drop-shadow-[0_0_8px_hsl(var(--accent))] z-10">
                    <span className="text-base font-bold text-background">{index + 1}</span>
                  </div>
                  
                  {/* Step Text */}
                  <p className="text-sm text-center mt-4 px-2 text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      {/* Desktop Horizontal Layout */}
      <div className="hidden md:block relative overflow-x-auto pb-4">
        <div className="relative flex items-start gap-0">
          {steps.map((step, index) => (
            <>
              {/* Step Container */}
              <div key={index} className="flex flex-col items-center flex-1 min-w-[160px]">
                {/* Waypoint Dot */}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-accent border-2 border-accent flex-shrink-0 drop-shadow-[0_0_8px_hsl(var(--accent))] z-10">
                  <span className="text-sm font-bold text-background">{index + 1}</span>
                </div>
                
                {/* Step Text */}
                <p className="text-sm text-center mt-4 px-2 text-muted-foreground leading-relaxed">
                  {step}
                </p>
              </div>
              
              {/* Connecting Line (between dots) */}
              {index < steps.length - 1 && (
                <div className="flex items-start pt-5 flex-1">
                  <div className="w-full h-0.5 bg-accent/50 drop-shadow-[0_0_4px_hsl(var(--accent)/0.3)]" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
