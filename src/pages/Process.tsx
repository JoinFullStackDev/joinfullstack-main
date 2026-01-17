import { useEffect } from 'react';
import { Lightbulb, Target, Boxes, BarChart3, Hammer, Shield, Zap } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { ProcessTimeline } from '@/components/process/ProcessTimeline';
import { ProcessPhaseCard } from '@/components/process/ProcessPhaseCard';
import { ProcessStats } from '@/components/process/ProcessStats';
import { ProcessProgress } from '@/components/process/ProcessProgress';
import { Contact } from '@/components/Contact';
import { usePageTitle } from '@/hooks/usePageTitle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
const Process = () => {
  usePageTitle('Our Process');
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const initAnimations = () => {
      console.log('Initializing animations...');

      // Kill all existing ScrollTriggers
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Hero title animation
      gsap.fromTo('.hero-title', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });
      gsap.fromTo('.hero-subtitle', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      // Stats animation with stagger
      gsap.fromTo('.process-stat', {
        opacity: 0,
        scale: 0.8,
        y: 20
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.process-stat',
          start: 'top 85%'
        }
      });

      // Phase badges pulse animation
      const badges = document.querySelectorAll('.process-badge');
      badges.forEach((badge, index) => {
        gsap.fromTo(badge, {
          scale: 0,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: badge,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });

        // Continuous pulse
        gsap.to(badge, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2
        });
      });

      // Phase cards slide in from sides
      const cards = document.querySelectorAll('.process-card');
      cards.forEach(card => {
        const align = card.getAttribute('data-align');
        const xOffset = align === 'right' ? 100 : -100;
        gsap.fromTo(card, {
          opacity: 0,
          x: xOffset
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Animate insight cards (opposite direction)
      gsap.utils.toArray<HTMLElement>('.process-insight').forEach(insight => {
        const index = parseInt(insight.dataset.index || '0');
        const align = index % 2 === 0 ? 'right' : 'left'; // Opposite of main card
        gsap.fromTo(insight, {
          opacity: 0,
          x: align === 'left' ? -30 : 30
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: insight,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Animate deliverable items with stagger
      gsap.utils.toArray<HTMLElement>('.deliverable-item').forEach(item => {
        const parent = item.closest('.process-insight');
        gsap.fromTo(item, {
          opacity: 0,
          x: -20
        }, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 70%',
            onEnter: () => {
              const idx = parseInt(item.dataset.index || '0');
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
                // Animate checkmark
                const check = item.querySelector('.deliverable-check');
                if (check) {
                  check.classList.remove('opacity-0', 'scale-0');
                  check.classList.add('opacity-100', 'scale-100');
                }
              }, idx * 100);
            }
          }
        });
      });

      // Animate stat cards
      gsap.utils.toArray<HTMLElement>('.stat-card').forEach(card => {
        gsap.fromTo(card, {
          opacity: 0,
          scale: 0.9
        }, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Floating background elements
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: '20px',
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        });
      });

      // Debug logging
      console.log('Process cards:', document.querySelectorAll('.process-card').length);
      console.log('Process insights:', document.querySelectorAll('.process-insight').length);
      console.log('Deliverable items:', document.querySelectorAll('.deliverable-item').length);
      console.log('Stat cards:', document.querySelectorAll('.stat-card').length);
      console.log('Process badges:', document.querySelectorAll('.process-badge').length);

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    };
    const timeoutId = setTimeout(initAnimations, 100);
    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const processStats = [{
    label: 'Success Rate',
    value: '98',
    suffix: '%'
  }, {
    label: 'Projects Delivered',
    value: '150',
    suffix: '+'
  }, {
    label: 'Years Experience',
    value: '10',
    suffix: '+'
  }, {
    label: 'Team Members',
    value: '25',
    suffix: '+'
  }];
  const phases = [{
    number: 'Phase 01',
    title: 'Concept Framing',
    description: 'We transform ambiguous ideas into clear product vision with stakeholder alignment and technical feasibility assessment.',
    icon: Lightbulb,
    align: 'left' as const,
    features: ['Stakeholder workshops', 'Technical feasibility analysis', 'Competitive landscape mapping', 'Initial architecture sketch'],
    processSteps: ['Discovery sessions', 'Market research', 'Technical assessment', 'Vision document'],
    metrics: [{
      label: 'Workshop Duration',
      value: '2-3d'
    }, {
      label: 'Stakeholders',
      value: '5-12'
    }, {
      label: 'Concepts',
      value: '3-5'
    }, {
      label: 'Deliverables',
      value: '8+'
    }],
    deliverables: ['Vision & Mission Statement', 'User Persona Profiles', 'Competitive Analysis Report', 'Strategic Roadmap Document'],
    duration: '1-2 wks',
    successRate: '98%'
  }, {
    number: 'Phase 02',
    title: 'Product Strategy',
    description: 'Strategic roadmap development with prioritized features, user personas, and go-to-market considerations.',
    icon: Target,
    align: 'right' as const,
    features: ['User persona development', 'Feature prioritization matrix', 'Technology stack recommendations', 'Risk assessment & mitigation'],
    processSteps: ['User research', 'Feature prioritization', 'Roadmap creation', 'Risk analysis'],
    metrics: [{
      label: 'Personas',
      value: '3-5'
    }, {
      label: 'Features',
      value: '50+'
    }, {
      label: 'Sprints',
      value: '6-12'
    }, {
      label: 'Risks',
      value: '15+'
    }],
    deliverables: ['Product Requirements Document', 'Technical Architecture Diagram', 'Feature Roadmap & Prioritization', 'Resource Allocation Plan'],
    duration: '2-3 wks',
    successRate: '96%'
  }, {
    number: 'Phase 03',
    title: 'Product Validation',
    description: 'Interactive prototypes that validate assumptions and gather real user feedback before full-scale development.',
    icon: Boxes,
    align: 'left' as const,
    features: ['High-fidelity wireframes', 'Clickable prototypes', 'User testing sessions', 'Design system foundation'],
    processSteps: ['Wireframe creation', 'High-fidelity design', 'Interactive prototype', 'User testing'],
    metrics: [{
      label: 'Screens',
      value: '40+'
    }, {
      label: 'Tests',
      value: '15+'
    }, {
      label: 'Iterations',
      value: '3-4'
    }, {
      label: 'Components',
      value: '30+'
    }],
    deliverables: ['Clickable Prototype', 'Complete Design System', 'UI Component Library', 'User Testing Report'],
    duration: '2-4 wks',
    successRate: '99%'
  }, {
    number: 'Phase 04',
    title: 'Analysis & User Stories',
    description: 'Detailed requirements engineering with comprehensive user stories, acceptance criteria, and edge case analysis.',
    icon: BarChart3,
    align: 'right' as const,
    features: ['User story mapping', 'API specification', 'Data model design', 'Integration planning'],
    processSteps: ['User story creation', 'Data modeling', 'API specification', 'Security planning'],
    metrics: [{
      label: 'Stories',
      value: '100+'
    }, {
      label: 'APIs',
      value: '30+'
    }, {
      label: 'Models',
      value: '20+'
    }, {
      label: 'Tests',
      value: '200+'
    }],
    deliverables: ['User Story Backlog', 'API Documentation', 'Database Schema', 'Sprint Plan & Estimates'],
    duration: '1-2 wks',
    successRate: '97%'
  }, {
    number: 'Phase 05',
    title: 'Build',
    description: 'Production-grade development with agile sprints, continuous integration, and deployment pipeline setup.',
    icon: Hammer,
    align: 'left' as const,
    features: ['Agile development sprints', 'Code review & pair programming', 'CI/CD pipeline implementation', 'Version control & branching strategy'],
    processSteps: ['Sprint planning', 'Feature development', 'Code review', 'Continuous integration'],
    metrics: [{
      label: 'Velocity',
      value: '40+ pts/sprint'
    }, {
      label: 'Build Time',
      value: '<5m'
    }, {
      label: 'Deploys/Week',
      value: '10+'
    }, {
      label: 'Code Quality',
      value: 'A+'
    }],
    deliverables: ['Production-Ready Code', 'CI/CD Pipeline Setup', 'Version Control Repository', 'Release Documentation'],
    duration: '4-8 wks',
    successRate: '96%'
  }, {
    number: 'Phase 06',
    title: 'QA & Automation',
    description: 'Comprehensive testing with automated test suites, security audits, performance optimization, and compliance verification.',
    icon: Shield,
    align: 'right' as const,
    features: ['Automated testing suite', 'Security & compliance audits', 'Performance optimization', 'Load & stress testing'],
    processSteps: ['Test automation', 'Security scanning', 'Performance tuning', 'Compliance verification'],
    metrics: [{
      label: 'Coverage',
      value: '90%+'
    }, {
      label: 'Tests',
      value: '500+'
    }, {
      label: 'Security',
      value: 'A+'
    }, {
      label: 'Performance',
      value: '95+'
    }],
    deliverables: ['Automated Test Suite', 'Security Audit Report', 'Performance Benchmarks', 'Deployment Package'],
    duration: '2-4 wks',
    successRate: '98%'
  }];
  return <PageLayout>
      <ProcessProgress />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />
          <div className="floating-element absolute top-40 right-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="floating-element absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-accent uppercase tracking-wider">
              Battle-Tested Methodology
            </span>
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Our Proven Process
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A systematic approach to transform your vision into a successful product,
            backed by years of experience and hundreds of successful launches.
          </p>

          <ProcessStats stats={processStats} />
        </div>
      </section>

      {/* Timeline Section */}
      <ProcessTimeline>
        {phases.map((phase, index) => <ProcessPhaseCard key={index} number={phase.number} title={phase.title} description={phase.description} icon={phase.icon} features={phase.features} processSteps={phase.processSteps} metrics={phase.metrics} deliverables={phase.deliverables} duration={phase.duration} successRate={phase.successRate} align={phase.align} index={index} />)}
      </ProcessTimeline>

      {/* CTA Section */}
      

      <Contact />
    </PageLayout>;
};
export default Process;