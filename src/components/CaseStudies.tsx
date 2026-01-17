import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  title: string;
  client: string;
  metricValue: number;
  metricSuffix: string;
  metricLabel: string;
  description: string;
  slug: string;
  gradient: string;
}

const cases: CaseStudy[] = [
  {
    title: 'FinTech Lending Platform',
    client: 'Financial Services',
    metricValue: 350,
    metricSuffix: 'K+',
    metricLabel: 'loans funded in 90 days',
    description: 'Transformed a basic intake form into a conversion-optimized lending experience',
    slug: 'fintech-lending-platform',
    gradient: 'from-emerald-500/10 to-green-500/5',
  },
  {
    title: 'Pharmacy Workflow Automation',
    client: 'Healthcare',
    metricValue: 12,
    metricSuffix: 'M+',
    metricLabel: 'annual revenue achieved',
    description: 'Automated compounding workflows enabling 3x revenue growth without added headcount',
    slug: 'pharmacy-workflow',
    gradient: 'from-blue-500/10 to-cyan-500/5',
  },
];

export const CaseStudies = () => {
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
        const cards = cardsRef.current.querySelectorAll('.case-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
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
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real engagements
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {cases.map((study) => (
            <Link
              key={study.slug}
              to={`/work/${study.slug}`}
              className={`case-card group relative p-8 rounded-2xl border border-border/50 bg-card/30 
                         hover:border-accent/30 hover:bg-card/50 hover:-translate-y-1
                         transition-all duration-300 hover:shadow-xl hover:shadow-accent/5
                         overflow-hidden cursor-pointer`}
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-sm font-mono text-accent mb-2">{study.client}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                {/* Animated Metric */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    <AnimatedCounter 
                      target={study.metricValue} 
                      suffix={study.metricSuffix}
                      decimals={study.metricValue % 1 !== 0 ? 2 : 0}
                      duration={2}
                    />
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">{study.metricLabel}</span>
                </div>
                
                <p className="text-muted-foreground">{study.description}</p>
              </div>
            </Link>
          ))}
          
          {/* CTA Card */}
          <Link
            to="/contact"
            className={`case-card group relative p-8 rounded-2xl border border-border/50 bg-card/30 
                       hover:border-accent/30 hover:bg-card/50 hover:-translate-y-1
                       transition-all duration-300 hover:shadow-xl hover:shadow-accent/5
                       overflow-hidden cursor-pointer flex flex-col justify-center`}
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">Let's discuss your next project</p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
