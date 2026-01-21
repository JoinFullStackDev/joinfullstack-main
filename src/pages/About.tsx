import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/seo/schemas';
import { teamMembers } from '@/data/teamMembers';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const leadershipCount = teamMembers.filter(m => m.isLeadership).length;
  const totalTeamCount = teamMembers.length;

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

    // Animate mission section
    gsap.from('.mission-content', {
      scrollTrigger: {
        trigger: '.mission-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6
    });

    // Animate values
    gsap.from('.value-card', {
      scrollTrigger: {
        trigger: '.values-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1
    });

    // Animate approach section
    gsap.from('.approach-item', {
      scrollTrigger: {
        trigger: '.approach-section',
        start: 'top 80%'
      },
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1
    });

    // Animate stats
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'Your success is our success. We align our work with your business goals and measure our performance by the value we create for you.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'We stay at the forefront of technology, continuously learning and applying modern solutions to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design decision, and every deliverable meets our rigorous standards.'
    },
    {
      icon: Zap,
      title: 'Agile & Adaptive',
      description: 'We embrace change and iterate quickly. Our agile methodology ensures we can pivot and adapt as your needs evolve.'
    }
  ];

  const approach = [
    'We listen first, then strategize. Understanding your unique challenges is the foundation of every engagement.',
    'We build partnerships, not just projects. Our team becomes an extension of yours.',
    'We communicate transparently. You\'ll always know where your project stands.',
    'We deliver incrementally. Regular releases mean faster feedback and better outcomes.',
    'We plan for scale. Our architectures are built to grow with your business.'
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.about.title}
        description={seoMetadata.about.description}
        keywords={seoMetadata.about.keywords}
        canonical="https://joinfullstack.com/about"
        structuredData={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="hero-content max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            About FullStack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Elite software architects and product developers transforming ideas into enterprise-grade solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section relative py-12 md:py-20 px-6 bg-card/20">
        <div className="mission-content max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Software That Drives Business Value
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FullStack was founded on a simple belief: great software is more than code. It's a strategic 
                asset that can transform businesses, create new opportunities, and deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine deep technical expertise with business acumen to help companies — from ambitious 
                startups to established enterprises — build software that truly matters. Our end-to-end 
                approach covers everything from initial concept framing to ongoing support, ensuring your 
                product succeeds at every stage.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
                    <div className="text-4xl font-bold text-accent mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="text-4xl font-bold text-foreground mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                    <div className="text-4xl font-bold text-foreground mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20">
                    <div className="text-4xl font-bold text-blue-500 mb-2">{totalTeamCount}</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section relative py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card p-6 rounded-2xl bg-card/30 border border-border/50 hover:border-accent/30 transition-colors space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section relative py-16 md:py-24 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                We've refined our methodology over years of successful engagements to deliver 
                consistent, exceptional results.
              </p>
              <Link to="/about/process">
                <Button className="group">
                  Learn About Our Process
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {approach.map((item, index) => (
                <div key={index} className="approach-item flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section relative py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-item text-center p-6 rounded-2xl bg-card/30 border border-border/50">
              <Users className="w-8 h-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-bold">{totalTeamCount}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="stat-item text-center p-6 rounded-2xl bg-card/30 border border-border/50">
              <Award className="w-8 h-8 mx-auto text-blue-500 mb-3" />
              <div className="text-3xl font-bold">{leadershipCount}</div>
              <div className="text-sm text-muted-foreground">Leadership</div>
            </div>
            <div className="stat-item text-center p-6 rounded-2xl bg-card/30 border border-border/50">
              <Target className="w-8 h-8 mx-auto text-green-500 mb-3" />
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="stat-item text-center p-6 rounded-2xl bg-card/30 border border-border/50">
              <Zap className="w-8 h-8 mx-auto text-orange-500 mb-3" />
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="relative py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the Team Behind FullStack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of engineers, designers, QA specialists, and strategists are united by 
            a passion for building exceptional software.
          </p>
          <Link to="/about/team">
            <Button size="lg" className="group">
              View Our Team
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
};

export default About;
