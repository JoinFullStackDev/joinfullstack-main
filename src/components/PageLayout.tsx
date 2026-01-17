import { ReactNode, useState } from 'react';
import { TopoMapCanvas } from '@/components/TopoMapCanvas';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  showMapAnimation?: boolean;
}

export const PageLayout = ({ children, showMapAnimation = false }: PageLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-background text-foreground min-h-screen overflow-x-hidden">
      <TopoMapCanvas showAnimation={showMapAnimation} />
      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
      
      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
