const SITE_URL = 'https://joinfullstack.com';
const SITE_NAME = 'FullStack';
const LOGO_URL = `${SITE_URL}/logo_primary.svg`;

/**
 * Organization schema - site-wide base schema
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  description: 'Elite software architects, product developers, and QA specialists. From concept to compliance-grade software — mapped, engineered, and assured.',
  url: SITE_URL,
  logo: LOGO_URL,
  sameAs: [
    'https://linkedin.com/company/joinfullstack',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${SITE_URL}/contact`,
  },
});

/**
 * ProfessionalService schema - for home page
 */
export const getProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description: 'Custom software development and product strategy agency specializing in enterprise-grade solutions.',
  url: SITE_URL,
  logo: LOGO_URL,
  priceRange: '$$$$',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Concept Framing',
          description: 'Transform ideas into actionable plans through discovery workshops and technical feasibility analysis.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Product Strategy',
          description: 'Strategic roadmap development with user personas, feature prioritization, and technology planning.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Product Validation',
          description: 'Validate concepts with prototypes and real user feedback before full development.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Analysis & User Stories',
          description: 'Transform requirements into detailed user stories, API specs, and data models.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Build',
          description: 'Full-stack development using agile methodologies, modern tech stacks, and CI/CD pipelines.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'QA & Automation',
          description: 'Comprehensive testing including automated tests, security audits, and performance validation.',
        },
      },
    ],
  },
});

/**
 * Service schema - for individual service pages
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
}

export const getServiceSchema = ({ name, description, url }: ServiceSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE_URL}${url}`,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: 'Software Development',
  areaServed: 'Worldwide',
});

/**
 * Article schema - for case studies
 */
export interface ArticleSchemaInput {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}

export const getArticleSchema = ({
  headline,
  description,
  url,
  datePublished = '2024-01-01',
  dateModified,
  image,
  keywords = [],
}: ArticleSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  url: `${SITE_URL}${url}`,
  datePublished,
  dateModified: dateModified || datePublished,
  image: image || `${SITE_URL}/og-image.png`,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${url}`,
  },
  articleSection: 'Case Study',
  keywords: keywords.join(', '),
});

/**
 * BreadcrumbList schema - for navigation context
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  })),
});

/**
 * Person schema - for team members
 */
export interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  image?: string;
  sameAs?: string[];
}

export const getPersonSchema = ({ name, jobTitle, image, sameAs = [] }: PersonSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle,
  image,
  worksFor: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  sameAs,
});

/**
 * FAQPage schema - for FAQ sections (AEO optimization)
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * WebPage schema - generic page schema
 */
export interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
}

export const getWebPageSchema = ({ name, description, url }: WebPageSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: `${SITE_URL}${url}`,
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  },
});
