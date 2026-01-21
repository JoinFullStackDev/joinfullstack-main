import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Handshake, ArrowRight } from 'lucide-react';

interface PartnerCTAProps {
  variant?: 'banner' | 'card' | 'inline';
  headline?: string;
  subtext?: string;
  className?: string;
}

export const PartnerCTA = ({ 
  variant = 'banner',
  headline,
  subtext,
  className = '',
}: PartnerCTAProps) => {
  // Inline variant - simple text link
  if (variant === 'inline') {
    return (
      <p className={`text-muted-foreground ${className}`}>
        {headline || 'Are you an agency?'}{' '}
        <Link 
          to="/partners" 
          className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
        >
          {subtext || 'Learn about partnership opportunities'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </p>
    );
  }

  // Card variant - compact format
  if (variant === 'card') {
    return (
      <div className={`p-6 rounded-2xl bg-card/30 border border-border/50 
                       hover:border-accent/30 hover:bg-card/50 
                       transition-all duration-300 ${className}`}>
        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-4">
          <Handshake className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {headline || "Partner With Us"}
        </h3>
        <p className="text-muted-foreground mb-4">
          {subtext || "Expand your agency's capabilities with a reliable US-based development partner."}
        </p>
        <Button asChild variant="outline" size="sm" className="group">
          <Link to="/partners">
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    );
  }

  // Default: Banner variant - full-width section
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl 
                      bg-gradient-to-r from-accent/10 via-accent/5 to-transparent 
                      border border-accent/20 hover:border-accent/30 transition-colors">
        <div className="inline-flex items-center justify-center p-3 rounded-xl 
                        bg-accent/10 border border-accent/20 mb-6">
          <Handshake className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {headline || "Agency Looking for a Development Partner?"}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {subtext || "Stop gambling on offshore teams. Partner with US-based senior engineers who deliver on time, every time."}
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 group">
          <Link to="/partners">
            Explore Partnership
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
