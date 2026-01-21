import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Handshake, 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  MessageSquareWarning,
  CheckCircle,
  Building2,
  TrendingUp,
  Award,
  Loader2,
  Mail,
  User,
  Briefcase
} from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/seo/schemas';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

// Form validation schema
const partnerFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(2, "Company name is required").max(100, "Company name must be less than 100 characters"),
  partnerType: z.string().min(1, "Please select a partnership type"),
  companySize: z.string().min(1, "Please select your company size"),
  currentServices: z.string().trim().max(500, "Maximum 500 characters").optional(),
  message: z.string().trim().min(20, "Please share at least 20 characters about your interest").max(2000, "Maximum 2000 characters"),
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

// Pain points data
const painPoints = [
  {
    icon: Clock,
    title: "Timezone Nightmares",
    description: "12-hour delays on simple questions. Async communication that kills momentum and extends timelines by weeks.",
  },
  {
    icon: AlertTriangle,
    title: "Quality Roulette",
    description: "Code that needs constant rework. Junior developers masquerading as seniors. Technical debt from day one.",
  },
  {
    icon: DollarSign,
    title: "Hidden Costs",
    description: "What starts cheap becomes expensive. Project management overhead, rework cycles, and missed deadlines add up fast.",
  },
  {
    icon: Shield,
    title: "Security Concerns",
    description: "Unclear data handling practices. Compliance gaps. Your client's sensitive data in unknown hands.",
  },
  {
    icon: Users,
    title: "Management Overhead",
    description: "You're spending more time babysitting than scaling. Every project becomes a full-time supervision job.",
  },
  {
    icon: MessageSquareWarning,
    title: "Reputation Risk",
    description: "Your name is on the deliverable. When offshore teams fail, your client relationships suffer.",
  },
];

// Solution benefits
const solutionBenefits = [
  {
    icon: Users,
    title: "US-Based Senior Engineers",
    description: "Same timezone, native communication, enterprise-grade quality. No more translation layers or 12-hour delays.",
  },
  {
    icon: Handshake,
    title: "White-Label Capability",
    description: "Seamless extension of your team. Your brand, our execution. Clients never know the difference.",
  },
  {
    icon: Shield,
    title: "Compliance-Ready",
    description: "SOC 2, HIPAA, ISO 27001. Built for healthcare, fintech, and other regulated industries from day one.",
  },
  {
    icon: TrendingUp,
    title: "Predictable Revenue",
    description: "Competitive referral fees and revenue-sharing models. Grow your bottom line without growing your headcount.",
  },
];

// Partner types
const partnerTypes = [
  {
    icon: Building2,
    title: "Agency Partners",
    description: "Expand your service offerings without the hiring headaches.",
    benefits: [
      "White-label development under your brand",
      "Overflow capacity for peak demand",
      "Specialized expertise on demand",
      "Dedicated account management",
    ],
  },
  {
    icon: Handshake,
    title: "Referral Partners",
    description: "Earn revenue by connecting us with opportunities.",
    benefits: [
      "Generous commission structure",
      "No commitment or minimums required",
      "Ongoing relationship revenue",
      "Co-marketing opportunities",
    ],
  },
  {
    icon: Award,
    title: "Strategic Partners",
    description: "Deep collaboration on joint ventures and shared clients.",
    benefits: [
      "Joint proposals and pitches",
      "Shared success on large projects",
      "Combined capabilities marketing",
      "Executive-level relationship",
    ],
  },
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Fill out the form below. Tell us about your agency and what you're looking for in a partnership.",
  },
  {
    step: "02",
    title: "Connect",
    description: "We'll schedule a call to discuss fit, expectations, and how we can best support your clients.",
  },
  {
    step: "03",
    title: "Grow",
    description: "Start referring projects or embedding our team. Watch your capabilities—and revenue—expand.",
  },
];

const Partners = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  // Refs for animations
  const heroRef = useRef<HTMLElement>(null);
  const painPointsRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);
  const partnerTypesRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
  });

  const formValues = watch();

  // GSAP Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        const heroElements = heroRef.current.querySelectorAll('.hero-animate');
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          }
        );
      }

      // Pain points animation
      if (painPointsRef.current) {
        const header = painPointsRef.current.querySelector('.section-header');
        const cards = painPointsRef.current.querySelectorAll('.pain-card');
        
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

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
              trigger: painPointsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Solution animation
      if (solutionRef.current) {
        const header = solutionRef.current.querySelector('.section-header');
        const cards = solutionRef.current.querySelectorAll('.solution-card');
        
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        gsap.fromTo(
          cards,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: solutionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Partner types animation
      if (partnerTypesRef.current) {
        const header = partnerTypesRef.current.querySelector('.section-header');
        const cards = partnerTypesRef.current.querySelectorAll('.partner-type-card');
        
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: partnerTypesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Process animation
      if (processRef.current) {
        const header = processRef.current.querySelector('.section-header');
        const steps = processRef.current.querySelectorAll('.process-step');
        
        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        gsap.fromTo(
          steps,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      toast.success("Thank you! We'll review your application and be in touch within 48 hours.");
      
      navigate('/thank-you', { 
        state: { 
          formData: {
            name: data.name,
            email: data.email,
            company: data.company,
            vision: data.message,
          },
          timestamp: new Date().toISOString(),
          isPartnership: true,
        } 
      });
    } catch (error) {
      console.error('Partner form error:', error);
      toast.error('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.partners?.title || 'Partner With Us - Agency & Referral Partnerships | FullStack'}
        description={seoMetadata.partners?.description || 'Expand your agency capabilities with a reliable US-based development partner.'}
        keywords={seoMetadata.partners?.keywords}
        canonical="https://joinfullstack.com/partners"
        structuredData={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Partners', url: '/partners' },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-6 pt-28 md:pt-20 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Tired of offshore dev horror stories?</span>
          </div>
          
          <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            Stop Gambling on{' '}
            <span className="text-destructive line-through decoration-destructive/50">Offshore</span>{' '}
            <span className="text-accent">Dev Teams</span>
          </h1>
          
          <p className="hero-animate text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance">
            Your clients deserve better than missed deadlines, communication nightmares, and code that needs to be rewritten. Partner with US-based senior engineers instead.
          </p>
          
          <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground group glow-accent"
              onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section ref={painPointsRef} className="relative py-24 md:py-32 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Offshore Dev <span className="text-destructive">Trap</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sound familiar? These are the stories we hear every week from agencies who've learned the hard way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="pain-card p-6 rounded-2xl bg-card/30 border border-border/50 
                           hover:border-destructive/30 hover:bg-card/50 
                           transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 w-fit mb-4
                                group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              There's a <span className="text-accent">Better Way</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with a team that actually delivers. Same timezone, senior talent, enterprise quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionBenefits.map((benefit, index) => (
              <div
                key={index}
                className="solution-card p-8 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent
                           border border-accent/20 hover:border-accent/40
                           transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-4
                                group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section ref={partnerTypesRef} className="relative py-24 md:py-32 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-accent">Partnership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need overflow capacity, want to earn referral fees, or seek a strategic alliance—we've got a model for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="partner-type-card p-8 rounded-2xl bg-card/30 border border-border/50 
                           hover:border-accent/30 hover:bg-card/50 hover:-translate-y-1
                           transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-4
                                group-hover:bg-accent/20 transition-colors">
                  <type.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-accent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. No lengthy contracts or complicated onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step relative">
                <div className="text-7xl font-bold text-accent/10 absolute -top-4 -left-2">
                  {step.step}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-accent/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} id="partner-form" className="relative py-24 md:py-32 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-accent">Partner Up</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your agency and what you're looking for. We'll be in touch within 48 hours.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6 p-8 rounded-2xl bg-card/30 border border-border/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Your Name
                </Label>
                <Input
                  {...register('name')}
                  id="name"
                  placeholder="John Doe"
                  className="h-12 bg-card/50 border-2 focus:border-accent transition-colors"
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="john@agency.com"
                  className="h-12 bg-card/50 border-2 focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-base flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Name
                </Label>
                <Input
                  {...register('company')}
                  id="company"
                  placeholder="Your Agency"
                  className="h-12 bg-card/50 border-2 focus:border-accent transition-colors"
                />
                {errors.company && (
                  <p className="text-destructive text-sm">{errors.company.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize" className="text-base flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Company Size
                </Label>
                <Select
                  value={formValues.companySize}
                  onValueChange={(value) => setValue('companySize', value, { shouldValidate: true })}
                >
                  <SelectTrigger className="h-12 bg-card/50 border-2 focus:border-accent transition-colors">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 employees</SelectItem>
                    <SelectItem value="6-20">6-20 employees</SelectItem>
                    <SelectItem value="21-50">21-50 employees</SelectItem>
                    <SelectItem value="51-100">51-100 employees</SelectItem>
                    <SelectItem value="100+">100+ employees</SelectItem>
                  </SelectContent>
                </Select>
                {errors.companySize && (
                  <p className="text-destructive text-sm">{errors.companySize.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="partnerType" className="text-base flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Partnership Type
              </Label>
              <Select
                value={formValues.partnerType}
                onValueChange={(value) => setValue('partnerType', value, { shouldValidate: true })}
              >
                <SelectTrigger className="h-12 bg-card/50 border-2 focus:border-accent transition-colors">
                  <SelectValue placeholder="Select partnership type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agency">Agency Partner - White-label development</SelectItem>
                  <SelectItem value="referral">Referral Partner - Earn commissions</SelectItem>
                  <SelectItem value="strategic">Strategic Partner - Joint ventures</SelectItem>
                </SelectContent>
              </Select>
              {errors.partnerType && (
                <p className="text-destructive text-sm">{errors.partnerType.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentServices" className="text-base">
                What services do you currently offer? (Optional)
              </Label>
              <Input
                {...register('currentServices')}
                id="currentServices"
                placeholder="e.g., Web design, marketing, branding..."
                className="h-12 bg-card/50 border-2 focus:border-accent transition-colors"
              />
              {errors.currentServices && (
                <p className="text-destructive text-sm">{errors.currentServices.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                Tell us about your partnership goals
              </Label>
              <Textarea
                {...register('message')}
                id="message"
                placeholder="What are you looking to achieve? What types of projects do you typically work on? What challenges are you facing with current dev partners?"
                rows={5}
                className="bg-card/50 border-2 focus:border-accent transition-colors resize-none"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{errors.message ? errors.message.message : 'Minimum 20 characters'}</span>
                <span>{formValues.message?.length || 0} / 2000</span>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg bg-accent hover:bg-accent/90 glow-accent"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Handshake className="mr-2 h-5 w-5" />
                  Submit Partnership Application
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;
