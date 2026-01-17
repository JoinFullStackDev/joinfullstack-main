import { useEffect, useRef } from 'react';
import { Lightbulb, Target, Boxes, BarChart3, Code, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Lightbulb,
    title: 'Concept Framing',
    description: 'Transform ideas into actionable vision',
    link: '/services/concept-framing',
    step: '01',
  },
  {
    icon: Target,
    title: 'Product Strategy',
    description: 'Strategic roadmap development',
    link: '/services/product-strategy',
    step: '02',
  },
  {
    icon: Boxes,
    title: 'Product Validation',
    description: 'Validate before you build',
    link: '/services/product-validation',
    step: '03',
  },
  {
    icon: BarChart3,
    title: 'Analysis & User Stories',
    description: 'Blueprint for development',
    link: '/services/analysis-user-stories',
    step: '04',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'Engineering excellence',
    link: '/services/build',
    step: '05',
  },
  {
    icon: ShieldCheck,
    title: 'QA',
    description: 'Quality assurance & testing',
    link: '/services/qa',
    step: '06',
  },
];

export const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Cards staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end product development, from concept to compliance-grade software
          </p>
        </div>

        {/* Flow Progress Indicator - aligned with grid */}
        <div className="hidden lg:grid grid-cols-6 gap-4 md:gap-6 mb-4">
          {services.map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex items-center w-full">
                {/* Line before (except first) */}
                <div className={`flex-1 h-px ${index === 0 ? 'bg-transparent' : 'bg-gradient-to-r from-accent/10 to-accent/30'}`} />
                
                {/* Number circle */}
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-mono text-accent">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Line after (except last) */}
                <div className={`flex-1 h-px ${index === services.length - 1 ? 'bg-transparent' : 'bg-gradient-to-r from-accent/30 to-accent/10'}`} />
              </div>
            </div>
          ))}
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="service-card group relative p-6 rounded-2xl border border-border/50 bg-card/30 
                         hover:border-accent/50 hover:bg-card/50 hover:shadow-xl hover:shadow-accent/5
                         transition-all duration-300 text-center overflow-hidden"
            >
              {/* Step Number Badge - Mobile/Tablet */}
              <div className="lg:hidden absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/50">
                {service.step}
              </div>

              {/* Icon with animation */}
              <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 mb-4
                              group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent group-hover:rotate-6 transition-transform duration-300" />
              </div>
              
              <h3 className="font-bold mb-2 text-sm md:text-base">{service.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">{service.description}</p>
              
              <span className="inline-flex items-center text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Connector line to next card (visible on lg+) */}
              {index < services.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/50 
                                group-hover:bg-accent/30 transition-colors" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
