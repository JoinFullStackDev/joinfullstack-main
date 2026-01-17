import { CheckCircle2 } from 'lucide-react';

interface DeliverablesChecklistProps {
  title: string;
  description: string;
  items: string[];
}

export const DeliverablesChecklist = ({ title, description, items }: DeliverablesChecklistProps) => {
  return (
    <section className="service-section py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-card/20 backdrop-blur-sm hover:border-accent/30 hover:bg-card/30 transition-all duration-200"
            >
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
