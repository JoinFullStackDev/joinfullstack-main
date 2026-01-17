import { LucideIcon } from 'lucide-react';

interface PhaseDetailCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const PhaseDetailCard = ({ icon: Icon, title, description, items }: PhaseDetailCardProps) => {
  return (
    <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
