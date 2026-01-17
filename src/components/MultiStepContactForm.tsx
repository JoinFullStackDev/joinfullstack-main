import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, Layers, Package, Target, MessageSquare, User, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormProgress } from '@/components/FormProgress';
import { gsap } from 'gsap';
import { toast } from 'sonner';

// Validation schema
const formSchema = z.object({
  projectPhase: z.string().min(1, "Please select where you are in your journey"),
  deliverables: z.string().min(1, "Please select what success looks like"),
  priority: z.string().min(1, "Please select what's most important"),
  vision: z.string().min(50, "Please share at least 50 characters about your vision").max(1000, "Maximum 1000 characters"),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  timeline: z.string().min(1, "Please select when you're looking to start"),
});

type FormData = z.infer<typeof formSchema>;

const TOTAL_STEPS = 5;

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const formValues = watch();

  useEffect(() => {
    // Entrance animation for the form
    if (formRef.current) {
      gsap.fromTo(formRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    // Animate step change
    const stepContent = document.querySelector('.step-content');
    if (stepContent) {
      gsap.fromTo(stepContent,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentStep]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-detailed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      toast.success('Thank you! We\'ll be in touch soon.');
      
      // Navigate to thank you page with form data
      navigate('/thank-you', { 
        state: { 
          formData: data,
          timestamp: new Date().toISOString() 
        } 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    let isValid = false;
    
    switch (currentStep) {
      case 0:
        isValid = await trigger('projectPhase');
        break;
      case 1:
        isValid = await trigger('deliverables');
        break;
      case 2:
        isValid = await trigger('priority');
        break;
      case 3:
        isValid = await trigger('vision');
        break;
      case 4:
        isValid = await trigger(['name', 'email', 'company', 'timeline']);
        break;
      default:
        isValid = true;
    }

    if (isValid && currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(currentStep + 1);
    } else if (isValid && currentStep === TOTAL_STEPS - 1) {
      handleSubmit(onSubmit)();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="step-content space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Layers className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Where are you in your product journey?</h2>
              <p className="text-lg text-muted-foreground">We'll tailor our approach to your stage</p>
            </div>

            <RadioGroup 
              value={formValues.projectPhase} 
              onValueChange={(value) => setValue('projectPhase', value, { shouldValidate: true })}
              className="space-y-4"
            >
              {[
                { 
                  value: 'concept-framing', 
                  label: '💡 Just an idea - I need to validate and frame it',
                  desc: "We'll help you validate assumptions and create a clear product vision"
                },
                { 
                  value: 'product-strategy', 
                  label: '📋 Idea validated - I need a strategy and roadmap',
                  desc: "We'll define your MVP, user stories, and technical architecture"
                },
                { 
                  value: 'rapid-prototyping', 
                  label: '🎨 Strategy ready - I need a prototype to test',
                  desc: "We'll create interactive prototypes to validate with real users"
                },
                { 
                  value: 'build-phase', 
                  label: '🚀 Ready to build - I need a full development team',
                  desc: "We'll build your product with agile methodology and quality focus"
                },
              ].map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex flex-col p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm cursor-pointer transition-all hover:border-accent/50 hover:bg-card peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5"
                  >
                    <span className="text-lg font-medium mb-1">{option.label}</span>
                    <span className="text-sm text-muted-foreground">{option.desc}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.projectPhase && (
              <p className="text-destructive text-sm mt-2">{errors.projectPhase.message}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="step-content space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Package className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What will success look like?</h2>
              <p className="text-lg text-muted-foreground">What type of deliverables do you need?</p>
            </div>

            <RadioGroup 
              value={formValues.deliverables} 
              onValueChange={(value) => setValue('deliverables', value, { shouldValidate: true })}
              className="space-y-4"
            >
              {[
                { 
                  value: 'research-analysis', 
                  label: '✓ User research & competitive analysis',
                  desc: 'Understand your market and validate your assumptions'
                },
                { 
                  value: 'prototype', 
                  label: '✓ Interactive prototype with user flows',
                  desc: 'Test your ideas with clickable prototypes before building'
                },
                { 
                  value: 'architecture', 
                  label: '✓ Technical architecture & documentation',
                  desc: 'Scalable technical foundation and clear roadmap'
                },
                { 
                  value: 'full-mvp', 
                  label: '✓ Fully built MVP ready to launch',
                  desc: 'Production-ready application with all core features'
                },
                { 
                  value: 'ongoing-support', 
                  label: '✓ Ongoing support & iteration',
                  desc: 'Continuous improvement and feature development'
                },
              ].map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex flex-col p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm cursor-pointer transition-all hover:border-accent/50 hover:bg-card peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5"
                  >
                    <span className="text-lg font-medium mb-1">{option.label}</span>
                    <span className="text-sm text-muted-foreground">{option.desc}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.deliverables && (
              <p className="text-destructive text-sm mt-2">{errors.deliverables.message}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="step-content space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What's most important to you?</h2>
              <p className="text-lg text-muted-foreground">Help us prioritize what matters most</p>
            </div>

            <RadioGroup 
              value={formValues.priority} 
              onValueChange={(value) => setValue('priority', value, { shouldValidate: true })}
              className="space-y-4"
            >
              {[
                { 
                  value: 'speed', 
                  label: 'Speed to market - I need to launch fast',
                  desc: 'Get your MVP to users quickly with rapid iteration'
                },
                { 
                  value: 'budget', 
                  label: 'Budget efficiency - I want maximum value',
                  desc: 'Smart prioritization to maximize ROI on every dollar'
                },
                { 
                  value: 'quality', 
                  label: 'Quality & scalability - Built to last',
                  desc: 'Enterprise-grade architecture that grows with you'
                },
                { 
                  value: 'ux', 
                  label: 'User experience - Delightful design',
                  desc: 'Beautiful, intuitive interfaces that users love'
                },
                { 
                  value: 'technical', 
                  label: 'Technical excellence - Modern, maintainable code',
                  desc: 'Clean code, best practices, and comprehensive documentation'
                },
              ].map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex flex-col p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm cursor-pointer transition-all hover:border-accent/50 hover:bg-card peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/5"
                  >
                    <span className="text-lg font-medium mb-1">{option.label}</span>
                    <span className="text-sm text-muted-foreground">{option.desc}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.priority && (
              <p className="text-destructive text-sm mt-2">{errors.priority.message}</p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="step-content space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Share your vision with us</h2>
              <p className="text-lg text-muted-foreground">What problem are you solving? Who's it for? What makes it unique?</p>
            </div>

            <div className="space-y-4">
              <Textarea
                {...register('vision')}
                placeholder="I want to build a platform that helps [target users] to [solve problem] by [unique approach]..."
                className="min-h-[200px] text-lg resize-none bg-card/50 backdrop-blur-sm border-2 focus:border-accent transition-colors"
                onKeyDown={handleKeyPress}
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{errors.vision ? errors.vision.message : 'Minimum 50 characters'}</span>
                <span>{formValues.vision?.length || 0} / 1000</span>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <User className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's connect</h2>
              <p className="text-lg text-muted-foreground">We'll get back to you within 24 hours</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  {...register('name')}
                  id="name"
                  placeholder="John Doe"
                  className="text-lg h-12 bg-card/50 backdrop-blur-sm border-2 focus:border-accent transition-colors"
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
                  placeholder="john@company.com"
                  className="text-lg h-12 bg-card/50 backdrop-blur-sm border-2 focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company (Optional)
                </Label>
                <Input
                  {...register('company')}
                  id="company"
                  placeholder="Acme Inc."
                  className="text-lg h-12 bg-card/50 backdrop-blur-sm border-2 focus:border-accent transition-colors"
                />
                {errors.company && (
                  <p className="text-destructive text-sm">{errors.company.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-base">
                  When are you looking to start?
                </Label>
                <Select
                  value={formValues.timeline}
                  onValueChange={(value) => setValue('timeline', value, { shouldValidate: true })}
                >
                  <SelectTrigger className="text-lg h-12 bg-card/50 backdrop-blur-sm border-2 focus:border-accent transition-colors">
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="within-1-month">Within 1 month</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="just-exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeline && (
                  <p className="text-destructive text-sm">{errors.timeline.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={formRef} className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Form Content */}
      <div className="mt-12 mb-8">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-8 border-t border-border/50">
        <Button
          type="button"
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-accent font-medium">{currentStep + 1}</span>
          <span>/</span>
          <span>{TOTAL_STEPS}</span>
        </div>

        <Button
          type="button"
          onClick={handleNext}
          disabled={isSubmitting}
          className="gap-2 min-w-[140px]"
        >
          {isSubmitting ? (
            'Submitting...'
          ) : currentStep === TOTAL_STEPS - 1 ? (
            'Submit'
          ) : (
            <>
              Next
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>

      {/* Help Text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 text-xs bg-muted rounded">Enter</kbd> to continue
        </p>
      </div>
    </div>
  );
};
