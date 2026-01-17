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
  Boxes,
  Layout,
  MousePointerClick,
  Users,
  Palette,
  RefreshCw,
  Presentation
} from 'lucide-react';

const ProductValidation = () => {
  const features = [
    {
      icon: Layout,
      title: "High-Fidelity Wireframes",
      description: "Detailed screen designs with real content, typography, and visual hierarchy that represent the final product"
    },
    {
      icon: MousePointerClick,
      title: "Interactive Prototypes",
      description: "Fully clickable prototypes with realistic transitions, animations, and user flows for authentic testing"
    },
    {
      icon: Users,
      title: "User Testing Sessions",
      description: "Moderated usability testing with real users to identify friction points and validate design decisions"
    },
    {
      icon: Palette,
      title: "Design System Foundation",
      description: "Establish reusable components, color palettes, typography scales, and spacing systems for consistency"
    },
    {
      icon: RefreshCw,
      title: "Iterative Refinement",
      description: "Rapid iteration cycles based on feedback, testing insights, and stakeholder input"
    },
    {
      icon: Presentation,
      title: "Stakeholder Demonstrations",
      description: "Scheduled demo sessions to showcase progress, gather feedback, and maintain alignment"
    }
  ];

  const processSteps = [
    "Transform product requirements and user flows into detailed, high-fidelity wireframes with real content",
    "Build clickable prototypes with realistic interactions, transitions, and user flows",
    "Conduct moderated testing sessions with target users and synthesize insights",
    "Iterate based on feedback and prepare developer-ready specifications with design system"
  ];

  const metrics = [
    { label: "Validation Duration", value: "2-4 weeks" },
    { label: "Screens Designed", value: "20-50+" },
    { label: "User Tests", value: "8-15 users" },
    { label: "Iterations", value: "2-3 cycles" }
  ];

  const deliverables = [
    "High-Fidelity Wireframes - Complete screen designs for all core user flows",
    "Interactive Prototype - Clickable prototype with realistic interactions (Figma/Framer)",
    "Design System - Reusable component library with styles, spacing, and tokens",
    "User Testing Report - Synthesis of testing sessions with key insights and recommendations",
    "Usability Findings - Documented friction points, confusion areas, and improvement opportunities",
    "Stakeholder Demo Recording - Video walkthrough of the final prototype",
    "Responsive Design Specs - Mobile, tablet, and desktop breakpoint designs",
    "Accessibility Audit - WCAG compliance checklist and recommendations",
    "Developer Handoff Package - Specs, assets, and implementation notes",
    "Next Steps Guide - Path to Analysis & User Stories phase"
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.productValidation.title}
        description={seoMetadata.productValidation.description}
        keywords={seoMetadata.productValidation.keywords}
        canonical="https://joinfullstack.com/services/product-validation"
        structuredData={[
          getServiceSchema({
            name: 'Product Validation',
            description: seoMetadata.productValidation.description,
            url: '/services/product-validation',
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'Product Validation', url: '/services/product-validation' },
          ]),
        ]}
      />
      <ServiceHero
        phase="Phase 03"
        title="Product Validation"
        subtitle="Validate Before You Build"
        description="Validate your product concept with real users before committing to full-scale development. We help you reduce risk, gather stakeholder buy-in, and ensure you're building the right thing before writing a single line of production code."
        icon={Boxes}
        primaryCTA={{ text: "Start Validation", link: "#contact" }}
        secondaryCTA={{ text: "See Our Process", link: "#process" }}
      />

      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Product Validation Matters
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building the wrong product is expensive. Traditional development approaches commit months of engineering effort before users ever interact with the product. Product validation flips this model—giving you a realistic, clickable version of your product in weeks, not months, allowing you to validate assumptions and gather feedback when changes are still cheap and easy.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our high-fidelity prototypes aren't just wireframes—they're interactive experiences that simulate real user flows, animations, and interactions. Stakeholders can click through the product, users can test workflows, and your team can identify UX issues before they become expensive code rewrites. We use industry-standard tools like Figma and Framer to create prototypes that feel production-ready.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            This phase bridges strategy and development. By the end, you'll have validated designs, documented user feedback, refined interactions, and a clear path forward. Your development team will receive pixel-perfect specifications and a design system foundation, dramatically reducing ambiguity and accelerating the build phase.
          </p>
        </div>
      </section>

      <FeatureGrid
        features={features}
        title="Our Validation Approach"
        description="From wireframes to interactive prototypes, we validate your product before development begins"
      />

      <section id="process" className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Strategic Process
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            A proven 4-step methodology that transforms requirements into validated, production-ready designs
          </p>
          
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Deep Dive: What Makes Our Validation Effective
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Two critical pillars that ensure your prototype delivers real validation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PhaseDetailCard
              icon={Users}
              title="User Validation"
              description="Test with real users before development"
              items={[
                "Moderated usability testing sessions",
                "A/B testing of key interactions",
                "Heatmap and analytics simulation",
                "User feedback synthesis reports"
              ]}
            />
            
            <PhaseDetailCard
              icon={Palette}
              title="Design Excellence"
              description="Create pixel-perfect specifications"
              items={[
                "Component library creation",
                "Responsive design for all breakpoints",
                "Accessibility compliance (WCAG 2.1)",
                "Developer handoff documentation"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Typical Engagement Metrics
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            What to expect from a Product Validation engagement
          </p>
          
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      <DeliverablesChecklist
        title="What You'll Receive"
        description="Comprehensive deliverables that set your team up for successful development"
        items={deliverables}
      />

      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Real-World Impact
          </h2>
          
          <div className="p-8 md:p-12 rounded-2xl border border-accent/20 bg-card/30 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl text-accent/30 leading-none">"</div>
              <div className="flex-1 pt-2">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
                  A fintech startup needed to validate a complex multi-step onboarding flow before investing in development. We created an interactive prototype in 3 weeks and tested it with 12 users. The testing revealed 3 critical UX issues that would have required extensive rework post-launch. By catching these early, we saved an estimated 6 weeks of development time and prevented a potentially poor user experience at launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </PageLayout>
  );
};

export default ProductValidation;
