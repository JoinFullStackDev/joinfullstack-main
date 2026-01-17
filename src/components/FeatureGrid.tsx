import { LucideIcon } from 'lucide-react';

interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureCardData[];
  title?: string;
  description?: string;
}

export const FeatureGrid = ({ features, title, description }: FeatureGridProps) => {
  return (
    <section className="service-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-accent/10 border border-accent/20 mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
