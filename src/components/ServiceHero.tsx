import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  primaryCTA: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
}

export const ServiceHero = ({
  phase,
  title,
  subtitle,
  description,
  icon: Icon,
  primaryCTA,
  secondaryCTA,
}: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        {/* Phase Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-sm font-mono text-accent uppercase tracking-wider">
            {phase}
          </span>
        </div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-accent font-semibold mb-6 text-balance">
          {subtitle}
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          {description}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 glow-accent shadow-2xl group"
            asChild
          >
            <a href={primaryCTA.link}>
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          {secondaryCTA && (
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent/30 hover:bg-accent/10"
              asChild
            >
              <a href={secondaryCTA.link}>
                {secondaryCTA.text}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
