import { PageLayout } from '@/components/PageLayout';
import { Contact } from '@/components/Contact';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo/schemas';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Code2,
  Palette,
  Workflow,
  Scale
} from 'lucide-react';

const PharmacyWorkflow = () => {
  const services = [
    { icon: Target, label: 'Product Strategy' },
    { icon: Palette, label: 'UI/UX Design' },
    { icon: Code2, label: 'Engineering' },
  ];

  const results = [
    {
      icon: DollarSign,
      value: '$12M+',
      label: 'Annual Revenue',
      description: 'Up from $4M before implementation'
    },
    {
      icon: TrendingUp,
      value: '3x',
      label: 'Revenue Growth',
      description: 'Within 9 months of deployment'
    },
    {
      icon: Users,
      value: '0',
      label: 'Headcount Added',
      description: 'Scaled operations without hiring'
    },
    {
      icon: Clock,
      value: '9',
      suffix: 'months',
      label: 'Time to Results',
      description: 'From implementation to full impact'
    },
  ];

  const challenges = [
    'Manual prescription processing workflows creating bottlenecks during peak periods',
    'Paper-based inventory tracking leading to stockouts and overstocking',
    'Compliance documentation scattered across multiple systems',
    'Revenue capped at $4M due to operational limitations',
    'Scaling required proportional headcount increases, limiting profitability'
  ];

  const solutions = [
    'Mapped and analyzed all existing workflows to identify automation opportunities',
    'Designed a unified platform connecting prescription intake, compounding, and fulfillment',
    'Implemented automated inventory management with predictive reordering',
    'Built compliance tracking and documentation generation into core workflows',
    'Created real-time dashboards for operational visibility and decision-making'
  ];

  const workflowsAutomated = [
    {
      title: 'Prescription Intake',
      description: 'Digital intake with automatic validation, drug interaction checks, and insurance verification'
    },
    {
      title: 'Compounding Queue',
      description: 'Intelligent prioritization based on urgency, ingredients availability, and staff workload'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time tracking with automated reorder points and supplier integration'
    },
    {
      title: 'Quality Control',
      description: 'Digital checklists, photo documentation, and automated compliance logging'
    },
    {
      title: 'Fulfillment',
      description: 'Optimized packaging workflows with shipping integration and delivery tracking'
    },
    {
      title: 'Reporting',
      description: 'Automated compliance reports, financial summaries, and operational analytics'
    },
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.pharmacyWorkflow.title}
        description={seoMetadata.pharmacyWorkflow.description}
        keywords={seoMetadata.pharmacyWorkflow.keywords}
        canonical="https://joinfullstack.com/work/pharmacy-workflow"
        ogType="article"
        structuredData={[
          getArticleSchema({
            headline: 'Pharmacy Workflow Automation — 3x Revenue Growth',
            description: seoMetadata.pharmacyWorkflow.description,
            url: '/work/pharmacy-workflow',
            keywords: ['pharmacy automation', 'workflow automation', 'healthcare technology', 'operations optimization'],
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Work', url: '/work' },
            { name: 'Pharmacy Workflow Automation', url: '/work/pharmacy-workflow' },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono mb-6">
            <span>Case Study</span>
            <span className="text-accent/50">•</span>
            <span>Healthcare</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pharmacy Workflow Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Building a custom workflow platform that enabled a compounding pharmacy to 
            triple revenue without adding headcount.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <div 
                key={service.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/30"
              >
                <service.icon className="w-4 h-4 text-accent" />
                <span className="text-sm">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 px-6 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The Results
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Transformational growth through operational efficiency
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result) => (
              <div 
                key={result.label}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 text-center group hover:border-accent/30 transition-colors"
              >
                <result.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-accent mb-1">
                  {result.value}
                  {result.suffix && <span className="text-2xl ml-1">{result.suffix}</span>}
                </div>
                <div className="font-semibold mb-2">{result.label}</div>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our client, a custom compounding pharmacy, had built a successful business but 
            hit a ceiling. Their manual workflows meant that every increase in orders required 
            a proportional increase in staff. At $4M in annual revenue, they faced a choice: 
            accept limited growth or find a way to scale operations without linear headcount increases.
          </p>
          
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/20"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground/90">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We embedded with the pharmacy team to deeply understand their operations. Rather 
            than forcing off-the-shelf software into their workflows, we built a custom 
            platform designed around how they actually work—just automated.
          </p>
          
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-accent/20 bg-accent/5"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows Automated */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Workflow className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Workflows Automated</h2>
          </div>
          
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            End-to-end automation from prescription intake to delivery
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowsAutomated.map((workflow) => (
              <div 
                key={workflow.title}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{workflow.title}</h3>
                <p className="text-muted-foreground">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Breakdown */}
      <section className="py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <Scale className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">The Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border/50 bg-card/30">
              <h3 className="text-xl font-bold mb-4 text-red-400">Before</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-muted-foreground">$4M annual revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-muted-foreground">Manual prescription processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-muted-foreground">Paper-based inventory tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-muted-foreground">Growth required hiring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="text-muted-foreground">Compliance documentation scattered</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl border border-accent/30 bg-accent/5">
              <h3 className="text-xl font-bold mb-4 text-accent">After</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">$12M+ annual revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Automated prescription workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Real-time inventory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Same team, 3x output</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Unified compliance dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="text-6xl text-accent/30 leading-none mb-4">"</div>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              The pharmacy's story proves that custom software isn't just a cost—it's an 
              investment with measurable ROI. By automating their core workflows, they 
              <span className="text-accent font-semibold"> tripled revenue in 9 months </span> 
              while keeping the same team. That's the power of technology built around 
              your specific business needs.
            </p>
            <div className="text-muted-foreground">
              — FullStack Team
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">Next Case Study</p>
          <Link 
            to="/work/fintech-lending-platform"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-accent transition-colors"
          >
            FinTech Lending Platform
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <Contact />
    </PageLayout>
  );
};

export default PharmacyWorkflow;
