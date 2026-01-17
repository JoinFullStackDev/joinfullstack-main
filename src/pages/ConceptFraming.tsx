import { PageLayout } from '@/components/PageLayout';
import { ServiceHero } from '@/components/ServiceHero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { ProcessFlow } from '@/components/ProcessFlow';
import { PhaseDetailCard } from '@/components/PhaseDetailCard';
import { PhaseMetrics } from '@/components/PhaseMetrics';
import { DeliverablesChecklist } from '@/components/DeliverablesChecklist';
import { Contact } from '@/components/Contact';
import { Lightbulb, Users, FileText, BarChart3, Code2, Shield, Zap } from 'lucide-react';

const ConceptFraming = () => {
  const features = [
    {
      icon: Users,
      title: 'Stakeholder Workshops',
      description: 'Facilitate collaborative sessions to align vision across executives, product teams, and technical stakeholders',
    },
    {
      icon: FileText,
      title: 'Technical Feasibility Assessment',
      description: 'Evaluate architecture options, technology stacks, and identify technical risks before investment',
    },
    {
      icon: BarChart3,
      title: 'Competitive Analysis',
      description: 'Map the competitive landscape and identify opportunities for differentiation',
    },
    {
      icon: Code2,
      title: 'Architecture Sketch',
      description: 'Create initial system architecture diagrams and integration plans',
    },
    {
      icon: Shield,
      title: 'Risk Identification',
      description: 'Proactively identify technical, business, and operational risks',
    },
    {
      icon: Zap,
      title: 'Resource Estimation',
      description: 'Provide preliminary timeline, team, and budget estimates',
    },
  ];

  const processSteps = [
    'Conduct interviews with all key stakeholders to understand vision, goals, and constraints',
    'Perform competitive analysis, market research, and technical landscape evaluation',
    'Assess feasibility, identify risks, and evaluate architecture approaches',
    'Create vision document, architecture sketch, and get stakeholder sign-off',
  ];

  const metrics = [
    { label: 'Workshop Duration', value: '2-3 days' },
    { label: 'Stakeholders Engaged', value: '5-12' },
    { label: 'Concepts Explored', value: '3-5' },
    { label: 'Deliverables', value: '8+' },
  ];

  const deliverables = [
    'Vision Document - Clear product vision and objectives',
    'Stakeholder Alignment Report - Consensus documentation',
    'Technical Feasibility Assessment - Architecture options and recommendations',
    'Competitive Analysis - Market landscape and opportunities',
    'Risk Register - Identified risks with mitigation strategies',
    'Initial Architecture Sketch - High-level system design',
    'Resource Estimate - Preliminary timeline and budget',
    'Next Steps Roadmap - Path to Product Strategy phase',
  ];

  return (
    <PageLayout>
      <ServiceHero
        phase="Phase 01"
        title="Concept Framing"
        subtitle="Turning Ideas Into Reality"
        description="Transform your vision into a concrete, actionable plan through collaborative discovery workshops, technical feasibility analysis, and stakeholder alignment. We help you move from ambiguous ideas to clear product direction."
        icon={Lightbulb}
        primaryCTA={{ text: 'Schedule Discovery Call', link: '#contact' }}
        secondaryCTA={{ text: 'View Process', link: '#process' }}
      />

      {/* Overview Section */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Concept Framing Matters
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every successful product starts with clarity. But transforming a vague idea into a concrete plan that stakeholders can align around and engineers can build is challenging. Without proper framing, teams waste months building the wrong thing or chasing misaligned objectives.
            </p>
            <p>
              Our Concept Framing process brings structure to ambiguity. We facilitate discovery sessions that surface hidden assumptions, validate technical feasibility, and ensure everyone—from executives to engineers—shares the same vision of success.
            </p>
            <p>
              By investing 2-3 weeks in rigorous concept framing, you avoid costly pivots later, reduce technical debt, and set a solid foundation for the entire product lifecycle. It's the difference between guessing and knowing what to build.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGrid
        features={features}
        title="What We Deliver"
        description="Comprehensive discovery and alignment to set your project up for success"
      />

      {/* Process Flow */}
      <section id="process" className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A structured approach to transform ideas into actionable plans
          </p>
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      {/* Detail Cards */}
      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Deep Dive
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PhaseDetailCard
              icon={Users}
              title="Stakeholder Alignment"
              description="Bring everyone to the same page"
              items={[
                'Executive vision interviews',
                'Cross-functional team workshops',
                'User research synthesis',
                'Alignment documentation',
              ]}
            />
            <PhaseDetailCard
              icon={FileText}
              title="Technical Foundation"
              description="Validate the technical approach"
              items={[
                'Architecture options analysis',
                'Technology stack evaluation',
                'Scalability planning',
                'Integration requirements',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Typical Engagement
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            What to expect when working with us
          </p>
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      {/* Deliverables */}
      <DeliverablesChecklist
        title="What You Receive"
        description="Comprehensive documentation to guide your product journey"
        items={deliverables}
      />

      {/* Case Study Example */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Real-World Impact
          </h2>
          <div className="p-8 rounded-xl border border-accent/20 bg-accent/5">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "A healthcare startup came to us with a broad vision for AI-powered diagnostics. Through our Concept Framing process, we identified 3 viable MVP approaches, validated HIPAA compliance requirements, and aligned 8 stakeholders on a phased 18-month roadmap. The clarity we achieved saved them 6+ months of trial and error."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <Contact />
    </PageLayout>
  );
};

export default ConceptFraming;
