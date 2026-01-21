import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div ref={itemsRef} className="flex flex-col space-y-2 mt-8">
      {/* Home */}
      <div className="nav-item">
        <Link
          to="/"
          onClick={onNavigate}
          className="block w-full text-left text-4xl md:text-5xl font-bold py-4 hover:text-accent transition-colors"
        >
          Home
        </Link>
      </div>

      {/* Services Dropdown */}
      <div className="nav-item">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-none">
            <AccordionTrigger className="text-4xl md:text-5xl font-bold py-4 hover:text-accent hover:no-underline">
              Services
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-3 pb-4">
              <Link
                to="/services/concept-framing"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Concept Framing
              </Link>
              <Link
                to="/services/product-strategy"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Product Strategy
              </Link>
              <Link
                to="/services/product-validation"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Product Validation
              </Link>
              <Link
                to="/services/analysis-user-stories"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Analysis & User Stories
              </Link>
              <Link
                to="/services/build"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Build
              </Link>
              <Link
                to="/services/qa"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                QA
              </Link>
              <Link
                to="/services"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-accent font-semibold hover:text-accent/80 transition-colors border-l-2 border-accent pl-4 mt-2"
              >
                View All Services
              </Link>
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
              <Link
                to="/work/fintech-lending-platform"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                FinTech Lending Platform
              </Link>
              <Link
                to="/work/pharmacy-workflow"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Pharmacy Workflow Automation
              </Link>
              <Link
                to="/work"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-accent font-semibold hover:text-accent/80 transition-colors border-l-2 border-accent pl-4 mt-2"
              >
                All Case Studies
              </Link>
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
              <Link
                to="/about/process"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Our Process
              </Link>
              <Link
                to="/about/team"
                onClick={onNavigate}
                className="block w-full text-left text-xl py-2 text-muted-foreground hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent pl-4"
              >
                Team
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact */}
      <div className="nav-item">
        <Link
          to="/contact"
          onClick={onNavigate}
          className="block w-full text-left text-4xl md:text-5xl font-bold py-4 hover:text-accent transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Color Picker */}
      <div className="nav-item">
        <ColorPicker />
      </div>
    </div>
  );
};
