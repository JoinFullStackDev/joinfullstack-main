import { Sheet, SheetContent } from '@/components/ui/sheet';
import { NavigationContent } from '@/components/NavigationContent';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Navigation = ({ isOpen, onOpenChange }: NavigationProps) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent 
          side="right" 
          className="w-screen max-w-none p-12 overflow-y-auto backdrop-blur-xl bg-background/95"
        >
          {/* Prominent close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full hover:bg-accent/20 hover:scale-110 transition-all duration-200"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6" />
          </Button>

          <NavigationContent isOpen={isOpen} onNavigate={() => onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
};
