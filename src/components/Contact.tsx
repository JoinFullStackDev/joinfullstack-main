import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(10, "Please share at least 10 characters about your project").max(1000, "Maximum 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const processSteps = [
  {
    icon: Calendar,
    title: 'Discovery Call',
    description: '30-minute consultation to understand your needs',
  },
  {
    icon: MessageSquare,
    title: 'Detailed Assessment',
    description: 'We analyze your requirements and propose solutions',
  },
  {
    icon: Mail,
    title: 'Custom Proposal',
    description: 'Detailed timeline, deliverables, and pricing',
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

      // Content animation
      if (contentRef.current) {
        const steps = contentRef.current.querySelectorAll('.process-step');
        gsap.fromTo(
          steps,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        const form = contentRef.current.querySelector('form');
        if (form) {
          gsap.fromTo(
            form,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: form,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      toast.success("Thank you! We'll be in touch within 24 hours.");
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's map out your path from concept to deployment
          </p>
        </div>
        
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="process-step flex items-start gap-4 p-4 rounded-xl 
                           hover:bg-card/30 transition-colors duration-300"
              >
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20
                                group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input 
                {...register('name')}
                placeholder="Your Name" 
                className="bg-card/50 border-border/50 focus:border-accent/50 transition-colors"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input 
                {...register('email')}
                type="email" 
                placeholder="Email Address" 
                className="bg-card/50 border-border/50 focus:border-accent/50 transition-colors"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input 
                {...register('company')}
                placeholder="Company (Optional)" 
                className="bg-card/50 border-border/50 focus:border-accent/50 transition-colors"
              />
              {errors.company && (
                <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
              )}
            </div>
            <div>
              <Textarea 
                {...register('message')}
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-card/50 border-border/50 focus:border-accent/50 transition-colors"
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 glow-accent"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Schedule Discovery Call'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
