import { useEffect, useRef } from 'react';
import { Quote, Code2, MessageSquare, Handshake } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface ValuePillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProofQuote {
  text: string;
  context: string;
}

const valuePillars: ValuePillar[] = [
  {
    icon: Code2,
    title: 'Senior Engineers',
    description: 'Battle-tested talent that ships',
  },
  {
    icon: MessageSquare,
    title: 'Proactive Communicators',
    description: 'You\'ll never wonder what\'s happening',
  },
  {
    icon: Handshake,
    title: 'Partners, Not Vendors',
    description: 'Invested in your success',
  },
];

const proofQuotes: ProofQuote[] = [
  {
    text: 'The varsity team is finally here.',
    context: 'On joining a project',
  },
  {
    text: 'I\'d hire every one of them on the spot.',
    context: 'After reviewing our team',
  },
  {
    text: 'It\'s that good!',
    context: 'On our work quality',
  },
  {
    text: 'Finally, engineers who get it.',
    context: 'On understanding requirements',
  },
  {
    text: 'They actually over-delivered.',
    context: 'On project completion',
  },
  {
    text: 'Best decision we made.',
    context: 'On choosing FullStack',
  },
  {
    text: 'Communication was flawless.',
    context: 'On working together',
  },
  {
    text: 'Shipped ahead of schedule.',
    context: 'On delivery',
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Spencer significantly improved my website's SEO in just six months, elevating it from obscurity to top rankings on Google and other search engines. His practical approach and commitment to understanding and meeting my needs have been truly impressive.",
    author: "Scott Carr",
    role: "CEO",
    company: "Tngnt Ski Bikes",
  },
  {
    quote: "Spencer is super professional and knowledgeable about website building. He knew exactly what our website needed and gave us the tools to make our website successful. His rates are fair and is willing to work with you to get your website done. We would 100% use Spencer again.",
    author: "Brittain Bowring",
    role: "Co-founder",
    company: "ToyBox",
  },
  {
    quote: "FullStack completely transformed our online presence with a fast, user-friendly website and improved lead management tools. Their expertise and dedication were outstanding. Highly recommend!",
    author: "Brett Cheal",
    role: "CEO",
    company: "Custom Fence Co",
  },
];

export const ClientVoices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Grid cards staggered animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.voice-card');
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
              trigger: gridRef.current,
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
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Clients Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The kind of team you wish you had in-house
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          ref={gridRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Hero Card - Value Proposition with Proof */}
          <div className="voice-card md:col-span-2 md:row-span-2 relative p-8 md:p-10 rounded-2xl overflow-hidden
                        bg-gradient-to-br from-accent/20 via-accent/10 to-transparent
                        border border-accent/30 transition-all duration-500">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            {/* Main Headline */}
            <div className="relative mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                A team you'd <span className="text-accent">hire on the spot.</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Senior engineers who ship. Clients who stay.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {valuePillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-background/30 border border-border/30
                           hover:border-accent/30 hover:bg-background/50
                           transition-all duration-300 group/pillar"
                >
                  <pillar.icon className="w-8 h-8 text-accent mb-3 group-hover/pillar:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <p className="font-semibold text-sm mb-1">{pillar.title}</p>
                  <p className="text-xs text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Proof Quotes Strip */}
            <div className="relative pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-mono">
                What clients say
              </p>
              <div className="flex flex-wrap gap-3">
                {proofQuotes.map((proof, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-background/40 border border-border/40
                             hover:border-accent/40 hover:bg-background/60
                             transition-all duration-300 group/proof"
                  >
                    <Quote className="w-3 h-3 text-accent/60" strokeWidth={2} />
                    <span className="text-sm font-medium">{proof.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="voice-card relative p-6 rounded-2xl overflow-hidden
                        bg-card/30 border border-border/50 hover:border-accent/30
                        hover:bg-card/50 hover:-translate-y-1
                        transition-all duration-300 group"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full flex flex-col">
                <Quote className="w-6 h-6 text-accent/30 mb-3" strokeWidth={1.5} />
                
                <blockquote className="text-sm md:text-base leading-relaxed mb-4 text-muted-foreground flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 
                                flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-accent">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} @ <span className="text-accent">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Element */}
          <div className="voice-card hidden md:flex relative p-6 rounded-2xl overflow-hidden
                        bg-gradient-to-br from-card/30 to-card/10 border border-border/30
                        items-center justify-center">
            <div className="relative text-center">
              {/* Stacked quote marks decoration */}
              <div className="relative inline-block mb-4">
                <Quote className="w-12 h-12 text-accent/20 absolute -top-1 -left-1" strokeWidth={1} />
                <Quote className="w-12 h-12 text-accent/30 absolute top-1 left-1" strokeWidth={1} />
                <Quote className="w-12 h-12 text-accent/50" strokeWidth={1} />
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                Real feedback.<br />Real results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
