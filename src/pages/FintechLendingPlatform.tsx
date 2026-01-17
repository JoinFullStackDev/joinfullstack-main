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
  Palette
} from 'lucide-react';

const FintechLendingPlatform = () => {
  const services = [
    { icon: Target, label: 'Product Strategy' },
    { icon: Palette, label: 'UI/UX Design' },
    { icon: Code2, label: 'Engineering' },
  ];

  const results = [
    {
      icon: TrendingUp,
      value: '10x',
      label: 'Increase in Applications',
      description: 'Monthly applications grew from 5 to 50+'
    },
    {
      icon: DollarSign,
      value: '$350K+',
      label: 'Loans Funded',
      description: 'Within 90 days of launch'
    },
    {
      icon: Clock,
      value: '30',
      suffix: 'days',
      label: 'Build Time',
      description: 'From kickoff to deployment'
    },
    {
      icon: Users,
      value: '45',
      suffix: 'days',
      label: 'Time to Results',
      description: 'From launch to measurable impact'
    },
  ];

  const challenges = [
    'Basic intake form with outdated UI that failed to inspire borrower confidence',
    'Only 5 loan applications per month with conversion rates well below industry average',
    'Approximately $5,000 in loans funded monthly',
    'Poor mobile experience limiting reach to younger borrowers',
    'Manual data validation causing processing delays'
  ];

  const solutions = [
    'Conducted UX research to understand borrower pain points and trust factors',
    'Designed a modern, mobile-first application flow with progress indicators',
    'Implemented real-time form validation and intelligent field suggestions',
    'Added trust signals and social proof throughout the application journey',
    'Created a streamlined review process reducing time-to-decision'
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.fintechLending.title}
        description={seoMetadata.fintechLending.description}
        keywords={seoMetadata.fintechLending.keywords}
        canonical="https://joinfullstack.com/work/fintech-lending-platform"
        ogType="article"
        structuredData={[
          getArticleSchema({
            headline: 'FinTech Lending Platform — 10x Applications in 90 Days',
            description: seoMetadata.fintechLending.description,
            url: '/work/fintech-lending-platform',
            keywords: ['fintech', 'lending platform', 'conversion optimization', 'UX design', 'student loans'],
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Work', url: '/work' },
            { name: 'FinTech Lending Platform', url: '/work/fintech-lending-platform' },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono mb-6">
            <span>Case Study</span>
            <span className="text-accent/50">•</span>
            <span>Financial Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            FinTech Lending Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming a struggling student loan intake form into a high-converting, 
            trust-building application experience that 10x'd monthly submissions.
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
            Measurable impact within 90 days of launch
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
            Our client, an income-based student loan provider, was struggling to acquire borrowers 
            through their online platform. Their existing intake form was a basic, uninspiring 
            experience that failed to build the trust necessary for users to share sensitive 
            financial information.
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
            We took a holistic approach, combining product strategy, user research, and 
            modern engineering practices to completely reimagine the lending experience. 
            Our 30-day sprint focused on building trust at every touchpoint.
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

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Project Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                { 
                  week: 'Week 1-2', 
                  title: 'Discovery & Strategy', 
                  description: 'User research, competitive analysis, and product strategy development' 
                },
                { 
                  week: 'Week 2-3', 
                  title: 'UI/UX Design', 
                  description: 'Wireframing, prototyping, and user testing of the new application flow' 
                },
                { 
                  week: 'Week 3-4', 
                  title: 'Development', 
                  description: 'Frontend and backend implementation with continuous integration' 
                },
                { 
                  week: 'Week 4', 
                  title: 'Launch', 
                  description: 'Deployment, monitoring setup, and performance optimization' 
                },
              ].map((phase, index) => (
                <div key={phase.week} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent transform md:-translate-x-1/2 mt-2" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="text-sm font-mono text-accent mb-2">{phase.week}</div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-20 px-6 bg-card/5">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <div className="text-6xl text-accent/30 leading-none mb-4">"</div>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              By focusing on trust-building UI elements and a frictionless mobile experience, 
              we helped transform a struggling intake form into a conversion machine. The 
              <span className="text-accent font-semibold"> 70x increase in monthly loan funding </span> 
              demonstrates how strategic design can directly impact business outcomes.
            </p>
            <div className="text-muted-foreground">
              — FullStack Team
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">Next Case Study</p>
          <Link 
            to="/work/pharmacy-workflow"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-accent transition-colors"
          >
            Pharmacy Workflow Automation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <Contact />
    </PageLayout>
  );
};

export default FintechLendingPlatform;
