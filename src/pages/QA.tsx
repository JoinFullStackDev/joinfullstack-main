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
  Shield,
  Play,
  Search,
  Zap,
  Lock,
  Monitor,
  Bug,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const QA = () => {
  const features = [
    {
      icon: Play,
      title: "Automated Test Coverage",
      description: "Comprehensive unit, integration, and E2E test suites with 80%+ code coverage running in CI/CD pipelines"
    },
    {
      icon: Search,
      title: "Manual Exploratory Testing",
      description: "Experienced QA engineers explore edge cases, usability issues, and scenarios beyond automated test scripts"
    },
    {
      icon: Zap,
      title: "Performance & Load Testing",
      description: "Stress tests, load tests, and performance profiling to ensure scalability under real-world traffic"
    },
    {
      icon: Lock,
      title: "Security Testing & Audits",
      description: "Vulnerability scanning, penetration testing, and compliance validation for OWASP Top 10 and industry standards"
    },
    {
      icon: Monitor,
      title: "Cross-Browser & Device Testing",
      description: "Validate functionality and design across browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablet, mobile)"
    },
    {
      icon: Bug,
      title: "Bug Tracking & Reporting",
      description: "Detailed defect reports with reproduction steps, severity classification, and resolution tracking"
    }
  ];

  const processSteps = [
    "Review acceptance criteria, create test plans, and set up automated testing frameworks",
    "Build automated test suites, execute manual test cases, and log defects",
    "Run load tests, conduct security audits, and validate non-functional requirements",
    "Execute full regression suite, validate fixes, and provide quality certification"
  ];

  const metrics = [
    { label: "Test Coverage", value: "80-95%" },
    { label: "Tests Written", value: "500-2000+" },
    { label: "Bugs Found", value: "50-200+" },
    { label: "Testing Duration", value: "2-4 weeks" }
  ];

  const deliverables = [
    "Automated Test Suite - Comprehensive unit, integration, and E2E tests integrated into CI/CD pipeline",
    "Test Coverage Report - Detailed coverage metrics with line, branch, and statement coverage",
    "Manual Test Cases - Documented test scenarios with step-by-step execution instructions",
    "Bug Reports - Detailed defect logs with severity, priority, reproduction steps, and screenshots",
    "Performance Test Results - Load testing reports with response times, throughput, and bottleneck analysis",
    "Security Audit Report - Vulnerability assessment with risk ratings and remediation recommendations",
    "Cross-Browser Test Results - Compatibility matrix across browsers and devices",
    "Regression Test Suite - Automated tests to prevent future regressions",
    "Quality Certification - Formal sign-off with quality metrics and acceptance criteria validation",
    "Testing Documentation - Test strategy, test plans, and guidelines for ongoing QA"
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.qa.title}
        description={seoMetadata.qa.description}
        keywords={seoMetadata.qa.keywords}
        canonical="https://joinfullstack.com/services/qa"
        structuredData={[
          getServiceSchema({
            name: 'QA & Automation',
            description: seoMetadata.qa.description,
            url: '/services/qa',
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: 'QA & Automation', url: '/services/qa' },
          ]),
        ]}
      />
      <ServiceHero
        phase="Phase 06"
        title="QA & Automation"
        subtitle="Quality Assurance at Scale"
        description="Ensure your software is reliable, secure, and performant before it reaches users. Our comprehensive QA process combines automated testing, manual exploratory testing, performance validation, and security audits to catch issues early and deliver confidence in your product."
        icon={Shield}
        primaryCTA={{ text: "Start Testing", link: "#contact" }}
        secondaryCTA={{ text: "Testing Process", link: "#process" }}
      />

      {/* Overview Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Why QA & Automation Matter
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Shipping buggy software is expensive—both financially and reputationally. Every bug that reaches production costs 10-100x more to fix than if caught during development. QA & Automation isn't just about finding bugs; it's about building systematic quality into your product through automated test suites, continuous integration, and rigorous validation against acceptance criteria.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We implement comprehensive testing strategies across multiple layers: unit tests for individual components, integration tests for system interactions, end-to-end tests for user workflows, performance tests for scalability, and security tests for vulnerabilities. Automated test suites run on every code commit, catching regressions instantly. Manual exploratory testing uncovers edge cases that automated tests miss.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            By the end of this phase, you'll have a robust testing framework that protects your application as it evolves. Automated tests provide a safety net for future changes, detailed test reports give stakeholders confidence, and performance benchmarks ensure your app scales. You'll ship with certainty, knowing your software has been validated against real-world scenarios.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-card/5">
        <FeatureGrid
          features={features}
          title="Core QA Capabilities"
          description="Comprehensive quality assurance across every dimension of your application"
        />
      </section>

      {/* Process Flow */}
      <section id="process" className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Testing Process
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Systematic quality validation from test planning to production certification
          </p>
          <ProcessFlow steps={processSteps} />
        </div>
      </section>

      {/* Detail Cards */}
      <section className="service-section py-20 px-6 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PhaseDetailCard
              icon={CheckCircle}
              title="Comprehensive Testing Coverage"
              description="Every layer validated"
              items={[
                "Unit tests for business logic and components",
                "Integration tests for API and database interactions",
                "End-to-end tests for critical user workflows",
                "Visual regression tests for UI consistency"
              ]}
            />
            <PhaseDetailCard
              icon={BarChart3}
              title="Quality Metrics & Reporting"
              description="Data-driven quality assurance"
              items={[
                "Test coverage reports with line and branch coverage",
                "Defect density and severity tracking",
                "Performance benchmarks and response times",
                "Test execution trends and pass/fail rates"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Typical Engagement Metrics
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Real numbers from successful QA engagements
          </p>
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-card/5">
        <DeliverablesChecklist
          title="What You'll Receive"
          description="Comprehensive QA deliverables that ensure production readiness"
          items={deliverables}
        />
      </section>

      {/* Case Study */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Real-World Impact
          </h2>
          <div className="p-8 md:p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="text-6xl text-accent mb-6">"</div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-8">
              A fintech application needed to pass SOC 2 compliance before launch. We implemented comprehensive automated testing with 92% code coverage, conducted security penetration testing that identified 23 vulnerabilities (all resolved), and executed performance tests that validated the system could handle 10,000 concurrent users. Manual exploratory testing uncovered 47 edge-case bugs that automated tests missed. The app launched with zero critical bugs in the first 90 days and passed SOC 2 audit on the first attempt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <Contact />
    </PageLayout>
  );
};

export default QA;
