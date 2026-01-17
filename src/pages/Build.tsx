import { PageLayout } from '@/components/PageLayout';
import { ServiceHero } from '@/components/ServiceHero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { ProcessFlow } from '@/components/ProcessFlow';
import { PhaseDetailCard } from '@/components/PhaseDetailCard';
import { PhaseMetrics } from '@/components/PhaseMetrics';
import { DeliverablesChecklist } from '@/components/DeliverablesChecklist';
import { Contact } from '@/components/Contact';
import { 
  Code2,
  Layers,
  RefreshCw,
  CheckCircle2,
  Network,
  Rocket,
  Server
} from 'lucide-react';

const Build = () => {
  const features = [
    {
      icon: Layers,
      title: "Modern Technology Stack",
      description: "Leverage proven frameworks and tools: React, TypeScript, Node.js, PostgreSQL, AWS/Azure, Docker, and Kubernetes"
    },
    {
      icon: RefreshCw,
      title: "Agile Sprint Development",
      description: "Two-week sprints with regular demos, retrospectives, and continuous stakeholder feedback"
    },
    {
      icon: Code2,
      title: "Clean Code & Best Practices",
      description: "SOLID principles, DRY code, comprehensive documentation, and rigorous code review standards"
    },
    {
      icon: CheckCircle2,
      title: "Comprehensive Testing",
      description: "Unit tests, integration tests, end-to-end tests with 80%+ code coverage and automated CI/CD pipelines"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Microservices, API-first design, database optimization, caching strategies, and horizontal scaling"
    },
    {
      icon: Rocket,
      title: "DevOps & Automation",
      description: "Automated deployments, infrastructure as code, monitoring, logging, and rollback capabilities"
    }
  ];

  const processSteps = [
    "Review backlog, estimate complexity, assign stories, and define sprint goals with the team",
    "Build features following TDD, conduct peer reviews, and maintain clean code standards",
    "Execute automated test suites, perform integration testing, and validate acceptance criteria",
    "Showcase completed features to stakeholders and deploy to staging/production environments"
  ];

  const metrics = [
    { label: "Sprint Duration", value: "2 weeks" },
    { label: "Code Coverage", value: "80%+" },
    { label: "Deploy Frequency", value: "Daily+" },
    { label: "Velocity", value: "30-50 pts" }
  ];

  const deliverables = [
    "Production-Ready Application - Fully functional software deployed to staging and production environments",
    "Source Code Repository - Complete codebase with Git history, branching strategy, and README documentation",
    "Automated Test Suite - Unit, integration, and E2E tests with 80%+ code coverage",
    "CI/CD Pipeline - Automated build, test, and deployment workflows",
    "Technical Documentation - Architecture diagrams, API documentation, and deployment guides",
    "Database Schema - Optimized database design with migrations and seed data",
    "API Documentation - Complete REST/GraphQL API specs with Swagger/Postman collections",
    "Environment Configuration - Development, staging, and production environment setup",
    "Monitoring & Logging - Application performance monitoring and centralized logging",
    "Handoff Documentation - Operations guide for maintenance and future development"
  ];

  return (
    <PageLayout>
      <ServiceHero
        phase="Phase 05"
        title="Build"
        subtitle="Engineering Excellence in Action"
        description="Transform specifications into production-ready software with modern engineering practices, scalable architecture, and clean code. Our experienced development team builds secure, performant, and maintainable applications using industry-leading technologies and agile methodologies."
        icon={Code2}
        primaryCTA={{ text: "Start Building", link: "#contact" }}
        secondaryCTA={{ text: "Our Process", link: "#process" }}
      />

      {/* Overview Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Engineering Excellence Matters
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building software isn't just about making features work—it's about creating systems that scale, adapt, and stand the test of time. Poor engineering decisions made early in development compound into technical debt that slows teams down and increases costs exponentially. Our Build phase prioritizes architectural soundness, code quality, and engineering best practices from day one.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We use modern, battle-tested technology stacks tailored to your specific needs—React and TypeScript for responsive frontends, Node.js or Python for scalable backends, PostgreSQL or MongoDB for data persistence, and cloud infrastructure with AWS, Azure, or GCP. Every line of code follows industry standards: comprehensive testing, continuous integration, code reviews, and automated deployment pipelines ensure quality at every step.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Agile development means you see progress every sprint. We work in two-week iterations with regular demos, allowing you to provide feedback and adjust priorities as the product takes shape. By the end of this phase, you'll have a fully functional, tested, and deployed application ready for real users—not a prototype, but production-grade software built to last.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-card/5">
        <FeatureGrid
          features={features}
          title="Core Engineering Capabilities"
          description="Modern development practices that ensure quality, scalability, and maintainability"
        />
      </section>

      {/* Process Flow */}
      <section id="process" className="service-section py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Sprint Development Process
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our agile workflow delivers working software every two weeks
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhaseDetailCard
              icon={Code2}
              title="Engineering Standards"
              description="Quality code from day one"
              items={[
                "TypeScript for type safety and maintainability",
                "ESLint and Prettier for consistent code style",
                "Git flow with feature branches and pull requests",
                "Comprehensive inline documentation and README files"
              ]}
            />
            <PhaseDetailCard
              icon={Server}
              title="Infrastructure & DevOps"
              description="Production-ready deployment pipeline"
              items={[
                "Containerized applications with Docker",
                "CI/CD pipelines with GitHub Actions or GitLab CI",
                "Cloud infrastructure (AWS, Azure, GCP)",
                "Monitoring and alerting with DataDog/New Relic"
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
            What you can expect from our development sprints
          </p>
          <PhaseMetrics metrics={metrics} />
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-card/5">
        <DeliverablesChecklist
          title="What You'll Receive"
          description="Production-ready software with complete documentation and deployment infrastructure"
          items={deliverables}
        />
      </section>

      {/* Case Study */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Real-World Impact
          </h2>
          <div className="p-8 md:p-12 rounded-xl border border-accent/20 bg-card/30 backdrop-blur-sm">
            <div className="text-6xl text-accent/20 mb-4">"</div>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic mb-6">
              An e-commerce platform needed to handle Black Friday traffic after scaling from 1,000 to 50,000 daily users. We rebuilt their monolithic architecture into microservices using Node.js, implemented Redis caching, optimized database queries, and deployed on AWS with auto-scaling. The result: 99.9% uptime during peak traffic, page load times under 2 seconds, and zero downtime deployments. The engineering foundation we built scaled them from $2M to $15M in annual revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </PageLayout>
  );
};

export default Build;
