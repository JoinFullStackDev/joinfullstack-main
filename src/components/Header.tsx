import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuButton } from '@/components/MenuButton';
import { Link } from 'react-router-dom';
import logoSvg from '@/assets/fullstack_logo_white.svg';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const Header = ({ isMenuOpen, onMenuToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/35">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logoSvg} 
            alt="Fullstack Logo" 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 glow-accent shadow-2xl hidden lg:flex"
            asChild
          >
            <Link to="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Call
            </Link>
          </Button>
          
          <MenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
        </div>
      </div>
    </header>
  );
};
