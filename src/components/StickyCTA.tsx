import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StickyCTA = () => {
  return (
    <Button 
      size="lg"
      className="bg-accent hover:bg-accent/90 glow-accent shadow-2xl"
    >
      <Calendar className="mr-2 h-5 w-5" />
      Schedule Call
    </Button>
  );
};
