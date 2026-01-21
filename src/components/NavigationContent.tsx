import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ColorPicker } from '@/components/ColorPicker';

interface NavigationContentProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export const NavigationContent = ({ isOpen, onNavigate }: NavigationContentProps) => {
  const itemsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!itemsRef.current) return;

    const items = itemsRef.current.querySelectorAll('.nav-item');
    
    if (isOpen) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          delay: 0.2,
        }
      );
    }
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    navigate(path);
    onNavigate();
  };

  return (
    <div ref={itemsRef} className="flex flex-col space-y-2 mt-8">
      {/* Home */}
      <div className="nav-item">
        <button
          onClick={() => handleNavigation('/')}
          className="w-full text-left text-4xl md:text-5xl font-bold py-4 hover:text-accent transition-colors"
        >
          Home
        </button>
      </div>

      {/* Services Dropdown */}
      <div className="nav-item">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-none">
            <AccordionTrigger className="text-4xl md:text-5xl font-bold py-4 hover:text-accent hover:no-underline">
              Services
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-3 pb-4">
              <button
                onClick={() => handleNavigation('/services/concept-framing')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Concept Framing
              </button>
              <button
                onClick={() => handleNavigation('/services/product-strategy')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Product Strategy
              </button>
              <button
                onClick={() => handleNavigation('/services/product-validation')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Product Validation
              </button>
              <button
                onClick={() => handleNavigation('/services/analysis-user-stories')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Analysis & User Stories
              </button>
              <button
                onClick={() => handleNavigation('/services/build')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Build
              </button>
              <button
                onClick={() => handleNavigation('/services/qa')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                QA
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className="block w-full text-left text-xl py-2 text-accent font-semibold hover:text-accent/80 transition-colors border-l-2 border-accent pl-4 mt-2"
              >
                View All Services
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Work Dropdown */}
      <div className="nav-item">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="work" className="border-none">
            <AccordionTrigger className="text-4xl md:text-5xl font-bold py-4 hover:text-accent hover:no-underline">
              Work
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-3 pb-4">
              <button
                onClick={() => handleNavigation('/work/fintech-lending-platform')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                FinTech Lending Platform
              </button>
              <button
                onClick={() => handleNavigation('/work/pharmacy-workflow')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Pharmacy Workflow Automation
              </button>
              <button
                onClick={() => handleNavigation('/work')}
                className="block w-full text-left text-xl py-2 text-accent font-semibold hover:text-accent/80 transition-colors border-l-2 border-accent pl-4 mt-2"
              >
                All Case Studies
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* About Dropdown */}
      <div className="nav-item">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="about" className="border-none">
            <AccordionTrigger className="text-4xl md:text-5xl font-bold py-4 hover:text-accent hover:no-underline">
              About
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-3 pb-4">
              <button
                onClick={() => handleNavigation('/about/process')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Our Process
              </button>
              <button
                onClick={() => handleNavigation('/about/team')}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Team
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact */}
      <div className="nav-item">
        <button
          onClick={() => handleNavigation('/contact')}
          className="w-full text-left text-4xl md:text-5xl font-bold py-4 hover:text-accent transition-colors"
        >
          Contact
        </button>
      </div>

      {/* Color Picker */}
      <div className="nav-item">
        <ColorPicker />
      </div>
    </div>
  );
};
