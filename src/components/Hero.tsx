import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { gsap } from 'gsap';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 99.9, suffix: '%', label: 'Uptime Achieved', decimals: 1 },
  { value: 15, suffix: '+', label: 'Years Experience' },
];

const complianceBadges = [
  'SOC 2 Compliant',
  'HIPAA Ready',
  'ISO 27001',
];

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline animation - split into words
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        gsap.set(words, { opacity: 0, y: 30 });
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        }, 0.2);
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
        tl.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, 0.6);
      }

      // Buttons scale in
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll('a');
        gsap.set(buttons, { opacity: 0, scale: 0.9 });
        tl.to(buttons, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
        }, 0.8);
      }

      // Stats fade in
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        gsap.set(statItems, { opacity: 0, y: 20 });
        tl.to(statItems, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        }, 1);
      }

      // Badges fade in
      if (badgesRef.current) {
        const badges = badgesRef.current.querySelectorAll('.badge-item');
        gsap.set(badges, { opacity: 0 });
        tl.to(badges, {
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
        }, 1.3);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-6 pt-28 md:pt-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight"
        >
          <span className="hero-word inline-block">Software</span>{' '}
          <span className="hero-word inline-block">That</span>{' '}
          <span className="hero-word inline-block text-accent">
            Actually
          </span>{' '}
          <span className="hero-word inline-block text-accent">
            Ships
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance"
        >
          End-to-end product development for healthcare, fintech, and regulated industries.
        </p>

        {/* Stats Row */}
        <div 
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                  duration={2}
                />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground group glow-accent"
            asChild
          >
            <Link to="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Discovery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-border hover:bg-secondary/50"
            asChild
          >
            <Link to="/work">
              See Our Work
            </Link>
          </Button>
        </div>
        
        <div 
          ref={badgesRef}
          className="mt-12 flex items-center justify-center gap-6 md:gap-8"
        >
          {complianceBadges.map((badge) => (
            <span 
              key={badge}
              className="badge-item text-xs md:text-sm font-mono text-muted-foreground 
                         px-3 py-1.5 rounded-full border border-border/50 bg-card/30"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
