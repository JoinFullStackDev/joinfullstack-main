import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (isOpen) {
      // Transform to X
      tl.to(line1Ref.current, {
        rotation: 45,
        y: 8,
        duration: 0.3,
        ease: 'power2.inOut',
      })
      .to(line2Ref.current, {
        opacity: 0,
        duration: 0.15,
      }, 0)
      .to(line3Ref.current, {
        rotation: -45,
        y: -8,
        duration: 0.3,
        ease: 'power2.inOut',
      }, 0);
    } else {
      // Transform back to hamburger
      tl.to([line1Ref.current, line3Ref.current], {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      })
      .to(line2Ref.current, {
        opacity: 1,
        duration: 0.15,
      }, 0);
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn("h-11 w-11 hover:bg-accent/50", className)}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="flex flex-col items-center justify-center w-6 h-6 space-y-1.5">
        <div ref={line1Ref} className="w-6 h-0.5 bg-foreground origin-center" />
        <div ref={line2Ref} className="w-6 h-0.5 bg-foreground" />
        <div ref={line3Ref} className="w-6 h-0.5 bg-foreground origin-center" />
      </div>
    </Button>
  );
};
