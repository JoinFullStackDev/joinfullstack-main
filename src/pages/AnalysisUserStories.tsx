import { PageLayout } from '@/components/PageLayout';
import { ServiceHero } from '@/components/ServiceHero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { ProcessFlow } from '@/components/ProcessFlow';
import { PhaseDetailCard } from '@/components/PhaseDetailCard';
import { PhaseMetrics } from '@/components/PhaseMetrics';
import { DeliverablesChecklist } from '@/components/DeliverablesChecklist';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/seo/schemas';
import { 
  FileText,
  CheckSquare,
  Code2,
  TrendingUp,
  GitBranch,
  Calendar
} from 'lucide-react';

const AnalysisUserStories = () => {
  const features = [
    {
      icon: FileText,
      title: "Comprehensive User Stories",
      description: "Break down every feature into granular user stories with clear roles, actions, and expected outcomes"
    },
    {
      icon: CheckSquare,
      title: "Acceptance Criteria",
      description: "Define testable success conditions for each story, ensuring alignment between what's built and what's expected"
    },
    {
      icon: Code2,
      title: "Technical Specifications",
      description: "Document API requirements, data models, integrations, and technical constraints for each feature"
    },
    {
      icon: TrendingUp,
      title: "Story Point Estimation",
      description: "Collaborate with your team to estimate effort using planning poker and historical velocity data"
    },
    {
      icon: GitBranch,
      title: "Dependency Mapping",
      description: "Identify story dependencies, blockers, and optimal sequencing to prevent bottlenecks"
    },
    {
      icon: Calendar,
      title: "Sprint Planning",
      description: "Organize stories into logical sprints with capacity planning and milestone definitions"
    }
  ];

  const processSteps = [
    "Break down prototype features into granular user stories with clear roles and outcomes",
    "Collaborate with stakeholders to define testable success conditions for each story",
    "Document technical requirements, identify dependencies, and estimate effort with team",
    "Build prioritized product backlog and plan initial sprint structure"
  ];

  const metrics = [
    { label: "Analysis Duration", value: "2-3 weeks" },
    { label: "User Stories", value: "50-150+" },
    { label: "Acceptance Criteria", value: "200-500+" },
    { label: "Sprints Planned", value: "3-6 sprints" }
  ];

  const deliverables = [
    "Product Backlog - Complete, prioritized list of user stories in your project management tool",
    "User Story Documentation - Detailed stories with As/I want/So that format",
    "Acceptance Criteria - Testable conditions for every story with edge cases documented",
    "Technical Specifications - API contracts, data models, and integration requirements",
    "Story Point Estimates - Effort estimates using planning poker methodology",
    "Dependency Map - Visual diagram of story dependencies and critical path",
    "Sprint Plan - Initial 3-6 sprint structure with capacity planning",
    "Definition of Done - Clear completion criteria for stories and sprints",
    "Risk Register - Identified technical and scheduling risks with mitigation plans",
    "Next Steps Guide - Path to Build phase with handoff documentation"
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.analysisUserStories.title}
        description={seoMetadata.analysisUserStories.description}
        keywords={seoMetadata.analysisUserStories.keywords}
        canonical="https://joinfullstack.com/services/analysis-user-stories"
        structuredData={[
          getServiceSchema({
            name: 'Analysis & User Stories',
            description: seoMetadata.analysisUserStories.description,
            url: '/services/analysis-user-stories',
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Analysis & User Stories', url: '/services/analysis-user-stories' },
          ]),
        ]}
      />
      <ServiceHero
        phase="Phase 04"
        title="Analysis & User Stories"
        subtitle="From Design to Development-Ready Specs"
        description="Bridge the gap between design and development with detailed technical analysis, comprehensive user stories, and clear acceptance criteria. We transform prototypes into actionable specifications that eliminate ambiguity and accelerate development."
        icon={FileText}
        primaryCTA={{ text: "Start Analysis", link: "#contact" }}
        secondaryCTA={{ text: "View Our Process", link: "#process" }}
      />

      {/* Overview Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Analysis & User Stories Matter
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            The gap between "we know what it should look like" and "we know exactly how to build it" is where projects go off track. Vague requirements lead to misaligned expectations, scope creep, and expensive rework. Analysis & User Stories is where we eliminate that ambiguity by translating prototypes and product strategy into crystal-clear technical specifications.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We break down every feature into granular user stories using industry-standard formats (As a [user], I want [action], so that [benefit]). Each story includes detailed acceptance criteria, technical considerations, edge cases, and dependency mapping. This ensures your development team knows exactly what to build, how it should behave, and how to test it—before they write a single line of code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            This phase is the foundation of successful agile development. By the end, you'll have a complete product backlog with estimated story points, prioritized sprints, and clear definition of done criteria. Your development team can hit the ground running with confidence, and stakeholders gain complete visibility into what's being built and when.
          </p>
        </div>
      </section>

      <FeatureGrid
        title="Our Analysis Approach"
        description="Comprehensive technical analysis and specification creation"
        features={features}
      />

      {/* Process Section */}
      <section id="process" className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Strategic Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to transforming prototypes into development-ready specifications
            </p>
          </div>
          
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deep Dive: Our Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two critical pillars of successful analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhaseDetailCard
              icon={FileText}
              title="Specification Excellence"
              description="Every detail documented and agreed upon"
              items={[
                "User story templates with As/I want/So that format",
                "Detailed acceptance criteria for every story",
                "Edge case and error handling documentation",
                "API endpoint and data model specifications"
              ]}
            />
            
            <PhaseDetailCard
              icon={Calendar}
              title="Agile Development Readiness"
              description="Set up your team for sprint success"
              items={[
                "Story point estimation sessions",
                "Dependency and blocker identification",
                "Sprint capacity planning",
                "Definition of done criteria"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Typical Engagement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What to expect from our analysis process
            </p>
          </div>
          
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      <DeliverablesChecklist
        title="What You'll Receive"
        description="Complete documentation package for development success"
        items={deliverables}
      />

      {/* Case Study Section */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-World Impact
            </h2>
          </div>
          
          <div className="p-8 md:p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl text-accent/20 leading-none">"</div>
            </div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
              A healthcare platform had a beautiful prototype but vague requirements. Through our Analysis & User Stories process, we created 127 detailed user stories with acceptance criteria, identified 18 critical dependencies, and planned 5 two-week sprints. The development team completed the first sprint with zero requirement clarification meetings—everything they needed was documented. The project launched on time with 94% of stories delivered as specified.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
};

export default AnalysisUserStories;