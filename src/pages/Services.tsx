import { Lightbulb, Target, Boxes, BarChart3, Code, ShieldCheck } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { ServicesHero } from '@/components/ServicesHero';
import { ServiceCard } from '@/components/ServiceCard';
import { Contact } from '@/components/Contact';
import { useGsap } from '@/hooks/useGsap';
import { usePageTitle } from '@/hooks/usePageTitle';

const Services = () => {
  useGsap();
  usePageTitle('Services');

  const services = [
    {
      id: 'concept-framing',
      phase: 'Phase 01',
      title: 'Concept Framing',
      subtitle: 'Turning Ideas Into Reality',
      description: 'We transform your vision into a concrete, actionable plan through collaborative discovery workshops and technical feasibility analysis.',
      icon: Lightbulb,
      link: '/services/concept-framing',
      align: 'left' as const,
      features: [
        'Stakeholder alignment workshops',
        'Technical feasibility assessment',
        'Competitive landscape analysis',
        'Initial architecture sketch',
        'Risk identification',
        'Resource estimation',
      ],
    },
    {
      id: 'product-strategy',
      phase: 'Phase 02',
      title: 'Product Strategy',
      subtitle: 'Strategic Roadmap Development',
      description: 'Define your product\'s direction with user-centered strategy, clear priorities, and a technology stack optimized for your goals.',
      icon: Target,
      link: '/services/product-strategy',
      align: 'right' as const,
      features: [
        'User persona development',
        'Feature prioritization framework',
        'Technology stack selection',
        'Go-to-market strategy',
        'Risk assessment & mitigation',
        'Success metrics definition',
      ],
    },
    {
      id: 'product-validation',
      phase: 'Phase 03',
      title: 'Product Validation',
      subtitle: 'Validate Before You Build',
      description: 'Validate your product concept with real users before committing to full-scale development, reducing risk and ensuring you build the right thing.',
      icon: Boxes,
      link: '/services/product-validation',
      align: 'left' as const,
      features: [
        'High-fidelity wireframes',
        'Interactive clickable prototypes',
        'User testing sessions',
        'Design system foundation',
        'Usability refinement',
        'Stakeholder demos',
      ],
    },
    {
      id: 'analysis-user-stories',
      phase: 'Phase 04',
      title: 'Analysis & User Stories',
      subtitle: 'Blueprint For Development',
      description: 'Transform requirements into detailed user stories, API specifications, and data models that guide your development team.',
      icon: BarChart3,
      link: '/services/analysis-user-stories',
      align: 'right' as const,
      features: [
        'User story mapping',
        'Acceptance criteria definition',
        'API specification documentation',
        'Data model design',
        'Integration planning',
        'Technical documentation',
      ],
    },
    {
      id: 'build',
      phase: 'Phase 05',
      title: 'Build',
      subtitle: 'Engineering Excellence',
      description: 'Expert development using agile methodologies, modern tech stacks, and best practices to bring your product to life.',
      icon: Code,
      link: '/services/build',
      align: 'left' as const,
      features: [
        'Agile sprint methodology',
        'Clean, maintainable code',
        'Modern tech stack implementation',
        'CI/CD pipeline setup',
        'Code review process',
        'Regular demo sessions',
      ],
    },
    {
      id: 'qa',
      phase: 'Phase 06',
      title: 'QA',
      subtitle: 'Quality Assurance & Testing',
      description: 'Comprehensive testing strategy ensuring your product is secure, performant, and bug-free before launch.',
      icon: ShieldCheck,
      link: '/services/qa',
      align: 'right' as const,
      features: [
        'Automated testing suite',
        'Manual QA testing',
        'Security audits & penetration testing',
        'Performance optimization',
        'Cross-browser/device testing',
        'Bug tracking & resolution',
      ],
    },
  ];

  return (
    <PageLayout>
      <ServicesHero />
      
      <section className="relative py-16 px-6">
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </section>
      
      <Contact />
    </PageLayout>
  );
};

export default Services;
