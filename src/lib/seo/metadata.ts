/**
 * Centralized SEO metadata for all pages
 */

export const seoMetadata = {
  home: {
    title: 'FullStack — Software Architects & Product Development Agency',
    description:
      'Elite software architects, product developers, and QA specialists. From concept to compliance-grade software — mapped, engineered, and assured.',
    keywords: 'software development, product strategy, software architects, QA, custom software, enterprise software',
  },

  services: {
    title: 'Services — Custom Software Development & Product Strategy',
    description:
      'End-to-end software development services: concept framing, product strategy, validation, engineering, and QA. Build enterprise-grade products with confidence.',
    keywords: 'software development services, product strategy, custom software, agile development, QA services',
  },

  conceptFraming: {
    title: 'Concept Framing — Turn Ideas Into Actionable Plans',
    description:
      'Transform your vision into a concrete plan through discovery workshops, technical feasibility analysis, and stakeholder alignment. 2-3 week engagements.',
    keywords: 'concept framing, product discovery, technical feasibility, stakeholder alignment, product planning',
  },

  productStrategy: {
    title: 'Product Strategy — Roadmap & Technology Planning',
    description:
      'Define your product direction with user personas, feature prioritization, technology stack selection, and go-to-market strategy.',
    keywords: 'product strategy, product roadmap, technology planning, user personas, feature prioritization',
  },

  productValidation: {
    title: 'Product Validation — Prototype & User Testing',
    description:
      'Validate concepts with high-fidelity prototypes and real user feedback before committing to development. Reduce risk, build the right thing.',
    keywords: 'product validation, prototyping, user testing, MVP validation, design validation',
  },

  analysisUserStories: {
    title: 'Analysis & User Stories — Requirements Engineering',
    description:
      'Transform requirements into detailed user stories, API specifications, and data models that guide development with clarity.',
    keywords: 'user stories, requirements engineering, API specification, data modeling, technical analysis',
  },

  build: {
    title: 'Build — Agile Software Engineering',
    description:
      'Expert full-stack development using modern tech stacks, agile sprints, CI/CD pipelines, and engineering best practices.',
    keywords: 'software engineering, agile development, full-stack development, CI/CD, modern tech stack',
  },

  qa: {
    title: 'QA & Automation — Comprehensive Software Testing',
    description:
      'Automated testing, security audits, performance validation, and compliance verification. Ship with confidence.',
    keywords: 'QA, software testing, test automation, security testing, performance testing, compliance',
  },

  work: {
    title: 'Case Studies — Our Work & Client Success Stories',
    description:
      'Explore how we\'ve helped startups and enterprises build successful software products. Real results, real impact.',
    keywords: 'case studies, client success, software projects, portfolio, success stories',
  },

  fintechLending: {
    title: 'FinTech Lending Platform — 10x Applications, $350K+ Funded',
    description:
      'How we transformed a struggling student loan intake form into a high-converting platform that 10x\'d monthly applications in just 30 days.',
    keywords: 'fintech, lending platform, conversion optimization, UX design, student loans, case study',
  },

  pharmacyWorkflow: {
    title: 'Pharmacy Workflow Automation — Case Study',
    description:
      'Streamlining pharmacy operations through intelligent workflow automation, integration, and operational efficiency improvements.',
    keywords: 'pharmacy automation, workflow automation, healthcare technology, operations optimization, case study',
  },

  about: {
    title: 'About Us — Elite Software Development Agency',
    description:
      'Meet the team behind FullStack. Decades of combined experience in software engineering, design, QA, and product strategy.',
    keywords: 'about us, software agency, development team, company, our story',
  },

  process: {
    title: 'Our Process — Proven Software Development Methodology',
    description:
      'A systematic 6-phase approach: concept framing, strategy, validation, analysis, build, and QA. 98% success rate, 150+ projects delivered.',
    keywords: 'development process, methodology, agile process, software lifecycle, project delivery',
  },

  team: {
    title: 'Our Team — Meet the FullStack Experts',
    description:
      'Engineers, designers, QA specialists, and strategists united by a passion for building exceptional digital products.',
    keywords: 'team, engineers, developers, QA specialists, designers, leadership',
  },

  contact: {
    title: 'Contact Us — Start Your Project',
    description:
      'Ready to build something amazing? Tell us about your project and get a personalized proposal in minutes.',
    keywords: 'contact, get in touch, start project, consultation, proposal',
  },

  thankYou: {
    title: 'Thank You',
    description:
      'Thank you for reaching out. We\'ve received your message and will be in touch soon.',
  },

  notFound: {
    title: 'Page Not Found',
    description: 'The page you\'re looking for doesn\'t exist or has been moved.',
  },
} as const;

export type PageKey = keyof typeof seoMetadata;
