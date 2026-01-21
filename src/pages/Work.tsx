import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/seo/schemas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Clock,
  Building2,
  Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  industry: string;
  industryIcon: typeof Building2;
  link: string;
  results: {
    icon: typeof TrendingUp;
    value: string;
    label: string;
  }[];
  services: string[];
  gradient: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-lending',
    title: 'FinTech Lending Platform',
    subtitle: '10x Applications in 90 Days',
    description: 'Transformed a struggling student loan intake form into a high-converting platform that 10x\'d monthly applications and funded over $350K in loans within 90 days.',
    industry: 'Financial Services',
    industryIcon: Building2,
    link: '/work/fintech-lending-platform',
    results: [
      { icon: TrendingUp, value: '10x', label: 'Application Increase' },
      { icon: DollarSign, value: '$350K+', label: 'Loans Funded' },
      { icon: Clock, value: '30 days', label: 'Build Time' },
    ],
    services: ['Product Strategy', 'UI/UX Design', 'Engineering'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accentColor: 'text-blue-500'
  },
  {
    id: 'pharmacy-workflow',
    title: 'Pharmacy Workflow Automation',
    subtitle: '3x Revenue Without Hiring',
    description: 'Streamlined pharmacy operations through intelligent workflow automation, enabling 3x revenue growth from $4M to $12M+ without adding headcount.',
    industry: 'Healthcare',
    industryIcon: Stethoscope,
    link: '/work/pharmacy-workflow',
    results: [
      { icon: DollarSign, value: '$12M+', label: 'Annual Revenue' },
      { icon: TrendingUp, value: '3x', label: 'Revenue Growth' },
      { icon: Clock, value: '9 months', label: 'Time to Results' },
    ],
    services: ['Product Strategy', 'UI/UX Design', 'Engineering'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    accentColor: 'text-green-500'
  },
];

const Work = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate hero section
    gsap.from('.hero-content', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Animate case study cards
    gsap.from('.case-study-card', {
      scrollTrigger: {
        trigger: '.case-studies-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.2
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.work.title}
        description={seoMetadata.work.description}
        keywords={seoMetadata.work.keywords}
        canonical="https://joinfullstack.com/work"
        structuredData={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Work', url: '/work' },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="hero-content max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real projects. See how we've helped businesses transform their ideas into successful digital products.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section relative py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={study.link}
              className="case-study-card group block"
            >
              <div className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${study.gradient} border border-border/50 hover:border-accent/30 transition-all duration-300`}>
                {/* Industry Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`p-2 rounded-lg bg-background/50 ${study.accentColor}`}>
                    <study.industryIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{study.industry}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Content */}
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors">
                      {study.title}
                    </h2>
                    <p className={`text-xl font-semibold ${study.accentColor}`}>
                      {study.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.services.map((service) => (
                        <span 
                          key={service}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border/50"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div 
                        key={idx}
                        className="text-center p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30"
                      >
                        <result.icon className={`w-6 h-6 mx-auto mb-2 ${study.accentColor}`} />
                        <div className="text-2xl md:text-3xl font-bold">{result.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your idea into a successful digital product.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
};

export default Work;
