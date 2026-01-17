import { useEffect, useRef, useState, useCallback } from 'react';
import { Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "FullStack transformed our concept into a SOC 2 compliant platform in record time. Their methodical approach and deep technical expertise gave us confidence at every stage of development.",
    author: "Sarah Chen",
    role: "CTO",
    company: "HealthSync",
  },
  {
    quote: "The team's ability to translate complex business requirements into elegant technical solutions is unmatched. They delivered a trading platform that handles millions of transactions daily without breaking a sweat.",
    author: "Michael Torres",
    role: "VP of Engineering",
    company: "FinanceAI",
  },
  {
    quote: "Working with FullStack felt like having an extension of our own team. Their proactive communication and commitment to quality helped us launch three months ahead of schedule.",
    author: "Emily Rodriguez",
    role: "Product Director",
    company: "DataFlow",
  },
];

export const FeaturedTestimonial = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-rotation
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Scroll trigger animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="inline-flex p-4 rounded-full bg-accent/10 border border-accent/20 mb-8">
          <Quote className="w-8 h-8 text-accent" />
        </div>
        
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="px-4">
                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10 text-balance">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex flex-col items-center gap-2">
                    {/* Avatar Placeholder */}
                    <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-2">
                      <span className="text-lg font-bold text-accent">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role}, <span className="text-accent">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index 
                  ? 'bg-accent w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
