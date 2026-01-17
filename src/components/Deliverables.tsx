import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    typical: 'Code handoff and goodbye',
    fullstack: 'True ownership transfer',
    detail: 'Your team fully enabled to maintain and evolve',
  },
  {
    typical: 'Vendor relationship',
    fullstack: 'Strategic partnership',
    detail: 'An extension of your team, not outsiders',
  },
  {
    typical: '"Hope it works" launches',
    fullstack: 'Measurable outcomes',
    detail: 'Proven 3x-10x improvements across engagements',
  },
  {
    typical: 'Security bolted on later',
    fullstack: 'Compliance by design',
    detail: 'SOC 2, HIPAA, ISO 27001 from day one',
  },
  {
    typical: 'Disappear after launch',
    fullstack: 'Post-launch support',
    detail: 'Ongoing guidance and strategic partnership',
  },
  {
    typical: 'Black-box process',
    fullstack: 'Transparent methodology',
    detail: 'Visibility and collaboration at every stage',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime Achieved' },
  { value: '15+', label: 'Years Experience' },
];

export const Deliverables = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

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

      // Comparison columns animation
      if (comparisonRef.current) {
        const columns = comparisonRef.current.querySelectorAll('.comparison-column');
        gsap.fromTo(
          columns,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Stagger the list items within each column
        const typicalItems = comparisonRef.current.querySelectorAll('.typical-item');
        const fullstackItems = comparisonRef.current.querySelectorAll('.fullstack-item');

        gsap.fromTo(
          typicalItems,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          fullstackItems,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Proof bar animation
      if (proofRef.current) {
        gsap.fromTo(
          proofRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: proofRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The FullStack Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than code — a partnership built for results
          </p>
        </div>

        {/* Comparison Layout */}
        <div ref={comparisonRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Typical Agencies Column */}
          <div className="comparison-column p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
              <div className="p-2 rounded-lg bg-muted/50">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground">Typical Agencies</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="typical-item flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item.typical}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FullStack Column */}
          <div className="comparison-column p-6 md:p-8 rounded-2xl border border-accent/30 bg-card/50 
                          shadow-lg shadow-accent/5">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-accent/20">
              <div className="p-2 rounded-lg bg-accent/20">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">With FullStack</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="fullstack-item flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">{item.fullstack}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Proof Bar */}
        <div ref={proofRef} className="mt-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-6 py-4 rounded-full bg-card/50 border border-border/50">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-accent">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
