import { PageLayout } from '@/components/PageLayout';
import { ServiceHero } from '@/components/ServiceHero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { ProcessFlow } from '@/components/ProcessFlow';
import { PhaseDetailCard } from '@/components/PhaseDetailCard';
import { PhaseMetrics } from '@/components/PhaseMetrics';
import { DeliverablesChecklist } from '@/components/DeliverablesChecklist';
import { Contact } from '@/components/Contact';
import { 
  Target, 
  Users, 
  ListOrdered, 
  Layers, 
  TrendingUp, 
  Shield, 
  Code2 
} from 'lucide-react';

const ProductStrategy = () => {
  const features = [
    {
      icon: Users,
      title: "User Persona Development",
      description: "Create detailed user personas based on research, behavioral data, and market insights to guide all product decisions"
    },
    {
      icon: ListOrdered,
      title: "Feature Prioritization Framework",
      description: "Use RICE scoring, value vs. effort mapping, and stakeholder input to build a defensible feature roadmap"
    },
    {
      icon: Layers,
      title: "Technology Stack Selection",
      description: "Choose the right frameworks, databases, and infrastructure based on your scale, timeline, and team capabilities"
    },
    {
      icon: TrendingUp,
      title: "Go-to-Market Strategy",
      description: "Define launch strategy, success metrics, marketing channels, and growth loops"
    },
    {
      icon: Shield,
      title: "Risk Assessment & Mitigation",
      description: "Identify technical, market, and operational risks early with contingency plans for each"
    },
    {
      icon: Target,
      title: "Success Metrics Definition",
      description: "Establish clear KPIs, OKRs, and measurement frameworks to track progress and validate assumptions"
    }
  ];

  const processSteps = [
    "User Research & Persona Building - Conduct user interviews, analyze behavioral data, and synthesize findings into actionable personas",
    "Strategic Planning Workshops - Facilitate roadmap planning sessions with stakeholders to prioritize features and define MVPs",
    "Technical Architecture Planning - Evaluate technology options, define data models, and plan integrations",
    "Roadmap Documentation - Create comprehensive product roadmap with phased delivery plan and success metrics"
  ];

  const metrics = [
    { label: "Strategy Duration", value: "3-4 weeks" },
    { label: "Features Prioritized", value: "20-50+" },
    { label: "Personas Created", value: "3-5" },
    { label: "Deliverables", value: "10+" }
  ];

  const deliverables = [
    "User Personas - Detailed personas with goals, pain points, and behaviors",
    "Product Roadmap - Phased feature delivery plan with timelines",
    "Feature Prioritization Matrix - RICE scores and rationale for all features",
    "Technology Stack Document - Recommended frameworks, tools, and infrastructure",
    "Go-to-Market Strategy - Launch plan, channels, and growth tactics",
    "Success Metrics Framework - KPIs, OKRs, and measurement plan",
    "User Journey Maps - End-to-end experience flows for key personas",
    "Risk Register - Identified risks with mitigation strategies",
    "MVP Definition - Clearly scoped minimum viable product",
    "Next Steps Guide - Path to Product Validation phase"
  ];

  return (
    <PageLayout>
      <ServiceHero
        phase="Phase 02"
        title="Product Strategy"
        subtitle="Strategic Roadmap Development"
        description="Define your product's direction with user-centered strategy, clear feature priorities, and a technology stack optimized for your goals. We transform validated concepts into executable roadmaps that balance user needs, business objectives, and technical constraints."
        icon={Target}
        primaryCTA={{ text: "Start Your Strategy", link: "#contact" }}
        secondaryCTA={{ text: "View Our Approach", link: "#process" }}
      />

      {/* Overview Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Product Strategy Matters
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A great idea without a strategic roadmap leads to scope creep, missed deadlines, and products that miss the mark. Product strategy is where vision meets reality—where you define not just what to build, but what to build first, for whom, and why.
            </p>
            
            <p>
              Our Product Strategy phase bridges the gap between concept validation and execution. We work with your team to develop detailed user personas, prioritize features using proven frameworks like RICE and MoSCoW, select the optimal technology stack, and create a phased delivery plan that balances speed to market with long-term scalability.
            </p>
            
            <p>
              By the end of this phase, you'll have a clear, actionable product roadmap that your entire organization can rally around. No more debates about what to build next—just a data-driven, user-centered strategy that sets you up for successful execution.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGrid features={features} />

      {/* Process Flow */}
      <section id="process" className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Strategic Process
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A structured approach to transform validated concepts into executable roadmaps
          </p>
          
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      {/* Detail Cards */}
      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Deep Dive: Our Focus Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhaseDetailCard
              icon={Users}
              title="User-Centered Planning"
              description="Build strategy around real user needs"
              items={[
                "Persona development workshops",
                "User journey mapping",
                "Pain point prioritization",
                "Feature-user alignment matrix"
              ]}
            />
            
            <PhaseDetailCard
              icon={Code2}
              title="Technical Excellence"
              description="Make smart technology decisions"
              items={[
                "Stack evaluation & selection",
                "Scalability architecture planning",
                "Third-party integration strategy",
                "Technical debt mitigation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Typical Engagement
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            What to expect from a Product Strategy engagement
          </p>
          
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      {/* Deliverables */}
      <DeliverablesChecklist
        title="What You'll Receive"
        description="Comprehensive documentation to guide your product from strategy to execution"
        items={deliverables}
      />

      {/* Case Study */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Real-World Impact
          </h2>
          
          <div className="p-8 rounded-2xl border border-accent/20 bg-card/30 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl text-accent/30 leading-none">"</div>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              An enterprise SaaS company wanted to expand into a new vertical but wasn't sure which features would resonate. Through our Product Strategy process, we developed 4 detailed personas, prioritized 38 features using RICE scoring, and created a 3-phase roadmap. The result: their MVP launched 2 months ahead of schedule and achieved 127% of first-quarter user acquisition targets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <Contact />
    </PageLayout>
  );
};

export default ProductStrategy;
