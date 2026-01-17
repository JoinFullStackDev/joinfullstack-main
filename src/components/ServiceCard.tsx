import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  link: string;
  align: 'left' | 'right';
  index: number;
}

export const ServiceCard = ({
  phase,
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  link,
  align,
  index,
}: ServiceCardProps) => {
  return (
    <div
      className="service-card w-full max-w-6xl mx-auto px-6"
      data-align={align}
      data-index={index}
    >
      <Link to={link}>
        <div className="p-8 md:p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 hover:scale-[1.01] transition-all duration-300 group">
          {/* Header Section */}
          <div className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            {/* Icon Container */}
            <div className="flex-shrink-0">
              <div className="inline-flex p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)] transition-shadow duration-300">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
            </div>
            
            {/* Title Section */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-3">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {phase}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
              <p className="text-lg text-accent/90 font-medium">{subtitle}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};
