export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: 'Leadership' | 'Engineering' | 'QA' | 'Operations' | 'Open';
  bio: string;
  specialties: string[];
  startDate?: string;
  linkedInUrl?: string;
  isLeadership?: boolean;
}

export const teamMembers: TeamMember[] = [
  // Leadership - Top Level
  {
    id: 'spencer-green',
    name: 'Spencer Green',
    title: 'Founder/CEO',
    department: 'Leadership',
    isLeadership: true,
    bio: 'Spencer leads the technology team with a hands-on, builder-first approach. He focuses on rapid prototyping, system architecture, and translating early-stage or loosely defined ideas into working software that can mature into production-grade platforms. He is particularly effective at work that sits at the intersection of architecture, implementation, and real-world constraints—projects that require moving quickly while still making sound technical decisions that hold up over time.',
    specialties: ['Product Strategy', 'Software Architecture', 'Business Development', 'Team Leadership'],
    linkedInUrl: '#'
  },

  // Operations - Direct Reports to CEO
  {
    id: 'tiffany-eckholdt',
    name: 'Tiffany Eckholdt',
    title: 'Executive Assistant / Ops',
    department: 'Operations',
    isLeadership: false,
    bio: 'Tiffany serves as the operational backbone of FullStack, managing executive operations and ensuring seamless day-to-day functionality. With exceptional organizational skills and attention to detail, Tiffany coordinates across all departments to keep the company running smoothly. Her proactive approach and strong communication skills make her an invaluable asset to the leadership team.',
    specialties: ['Executive Support', 'Operations Management', 'Team Coordination', 'Process Optimization'],
    linkedInUrl: '#'
  },
  {
    id: 'drake-eckholdt',
    name: 'Drake Eckholdt',
    title: 'Business Development',
    department: 'Operations',
    isLeadership: false,
    startDate: 'October 15, 2025',
    bio: 'Drake joins FullStack to drive business development initiatives and expand the company\'s market presence. With a strategic mindset and strong relationship-building skills, Drake will identify new opportunities, forge partnerships, and help FullStack grow its client base. His enthusiasm and business acumen will be instrumental in taking FullStack to the next level.',
    specialties: ['Business Development', 'Strategic Partnerships', 'Market Analysis', 'Client Acquisition'],
    linkedInUrl: '#'
  },

  // Engineering Leadership
  {
    id: 'jake-johnson-sj',
    name: 'Jake Johnson (SJ)',
    title: 'Senior DevSecOps Engineer',
    department: 'Engineering',
    isLeadership: false,
    bio: 'Jake focuses on security architecture, infrastructure, and deployment automation. His background includes building secure systems for large organizations and designing infrastructure with compliance and reliability in mind. He gravitates toward risk-sensitive and compliance-heavy problem spaces, including authentication, authorization, data protection, and secure deployment pipelines.',
    specialties: ['DevSecOps', 'Security Engineering', 'Infrastructure as Code', 'CI/CD Pipelines'],
    linkedInUrl: '#'
  },
  {
    id: 'omar-bravo',
    name: 'Omar Bravo',
    title: 'Director of Engineering',
    department: 'Leadership',
    isLeadership: true,
    bio: 'Omar brings decades of experience designing and scaling enterprise-grade systems across commercial and government environments. His focus is on foundational architecture, long-term system health, and building platforms that balance performance, security, maintainability, and scalability. He excels at early architectural decision-making for complex systems, particularly where technical choices have long-term operational consequences.',
    specialties: ['Engineering Leadership', 'Full-Stack Development', 'Team Management', 'Technical Strategy'],
    linkedInUrl: '#'
  },
  {
    id: 'jake-browning',
    name: 'Jake Browning',
    title: 'Director of Product',
    department: 'Leadership',
    isLeadership: true,
    bio: 'Jake brings over a decade of experience leading complex product initiatives across consumer, enterprise, and operational platforms. His work centers on deep discovery, solving the right problems, and creating real business and user value rather than simply delivering features. He focuses on clarifying ambiguous problem spaces, identifying the highest-leverage opportunities, and aligning stakeholders around what actually matters. Jake is especially effective in cross-functional environments where requirements are incomplete, tradeoffs must be made explicit, and teams need a clear, shared understanding of success before execution begins.',
    specialties: ['Product Management', 'Product Strategy', 'Agile Methodology', 'Stakeholder Management'],
    linkedInUrl: '#'
  },
  {
    id: 'joe-obanion',
    name: 'Joe O\'Banion',
    title: 'Director of QA',
    department: 'Leadership',
    isLeadership: true,
    bio: 'Joe leads quality assurance and deployment with a focus on automation, reliability, and compliance. He has built QA organizations and processes that emphasize system-level quality and production readiness. He focuses on validating overall system behavior, edge cases, and failure modes—ensuring software performs reliably under real-world conditions, not just ideal paths.',
    specialties: ['QA Leadership', 'Test Strategy', 'Quality Standards', 'Team Management'],
    linkedInUrl: '#'
  },

  // Engineering Team
  {
    id: 'meissa-dia',
    name: 'Meissa Dia',
    title: 'Principal Software Engineer',
    department: 'Engineering',
    bio: 'Meissa leads full-stack development and technical standards across the team. With extensive experience across front-end and back-end systems, he plays a central role in shaping how products are built and maintained. He excels at solving hard, end-to-end technical problems, especially those that span multiple layers of a system and require thoughtful coordination between architecture, implementation, and quality.',
    specialties: ['Distributed Systems', 'Microservices', 'Cloud Architecture', 'Technical Mentorship'],
    linkedInUrl: '#'
  },
  {
    id: 'noah-funtanilla',
    name: 'Noah Funtanilla',
    title: 'Full Stack Software Engineer',
    department: 'Engineering',
    bio: 'Noah is known for architecting and building full platforms with a strong product mindset. He focuses on anticipating edge cases, exploring tradeoffs, and refining systems through iteration. He enjoys open-ended architectural problems where multiple viable approaches exist and thoughtful decision-making is required to balance flexibility, simplicity, and long-term maintainability.',
    specialties: ['React', 'Node.js', 'TypeScript', 'Full-Stack Development'],
    linkedInUrl: '#'
  },
  {
    id: 'jose-delgado',
    name: 'Jose Delgado',
    title: 'Software & Database Architect',
    department: 'Engineering',
    bio: 'Jose is a seasoned back-end engineer and architect with deep experience building complex, high-reliability systems. He focuses on API design, data modeling, and service architectures that support evolving business needs. He thrives on complex system design and problem decomposition, particularly in areas where reliability, scalability, and data integrity are critical.',
    specialties: ['Database Architecture', 'System Design', 'Performance Optimization', 'SQL/NoSQL'],
    linkedInUrl: '#'
  },
  {
    id: 'isaiah-larsen',
    name: 'Isaiah Larsen',
    title: 'Full Stack Software Engineer',
    department: 'Engineering',
    bio: 'Isaiah brings experience in rapid prototyping and scalable application development across multiple languages and frameworks. He is most effective in fast-moving environments where ideas need to be tested, refined, and evolved quickly. He excels at turning concepts into working software, particularly in early-stage or evolving products that require speed without sacrificing a path to scale.',
    specialties: ['JavaScript', 'React', 'Backend Development', 'API Design'],
    linkedInUrl: '#'
  },
  {
    id: 'gretchen-thomas',
    name: 'Gretchen Thomas',
    title: 'Technical Project Management',
    department: 'Engineering',
    bio: 'Gretchen bridges technical execution and project management, ensuring engineering initiatives stay on track while maintaining quality and technical excellence. With a strong technical background and exceptional organizational skills, Gretchen coordinates complex projects, manages dependencies, and facilitates clear communication across teams. Her dual expertise in technology and project management drives successful delivery.',
    specialties: ['Technical Project Management', 'Agile Leadership', 'Cross-team Coordination', 'Delivery Management'],
    linkedInUrl: '#'
  },

  // QA Team
  {
    id: 'smile-bestybay',
    name: 'Smile Bestybay',
    title: 'Lead SDET',
    department: 'QA',
    bio: 'Smile leads the Software Development Engineer in Test (SDET) function, building sophisticated automated testing frameworks that ensure quality at scale. With deep technical expertise in test automation and software engineering, Smile creates robust testing solutions that catch issues early and accelerate release cycles. Their leadership in test automation has significantly improved FullStack\'s quality processes.',
    specialties: ['Test Automation', 'Framework Development', 'CI/CD Integration', 'Quality Engineering'],
    linkedInUrl: '#'
  },
  {
    id: 'travis-obanion',
    name: 'Travis O\'Banion',
    title: 'Lead QA Engineer',
    department: 'QA',
    bio: 'Travis leads QA engineering efforts with a focus on comprehensive test coverage and quality best practices. With expertise in both manual and automated testing, Travis ensures every release meets rigorous quality standards. His systematic approach to testing and mentorship of junior QA engineers helps maintain FullStack\'s commitment to delivering reliable, polished software.',
    specialties: ['QA Leadership', 'Test Planning', 'Manual & Automated Testing', 'Team Mentorship'],
    linkedInUrl: '#'
  },
  {
    id: 'david-smith',
    name: 'David Smith',
    title: 'SDET',
    department: 'QA',
    bio: 'David is a skilled Software Development Engineer in Test who builds and maintains automated testing solutions. With strong programming skills and attention to detail, David creates reliable test automation that provides confidence in every deployment. His work in test automation helps the team move quickly while maintaining high quality standards.',
    specialties: ['Test Automation', 'Selenium', 'API Testing', 'Test Framework Development'],
    linkedInUrl: '#'
  },
  {
    id: 'todd-bell',
    name: 'Todd Bell',
    title: 'QA Engineer 2',
    department: 'QA',
    bio: 'Todd is a dedicated QA engineer who excels at finding edge cases and ensuring comprehensive test coverage. With a keen eye for detail and systematic testing approach, Todd helps maintain FullStack\'s reputation for quality. His thorough testing and clear bug reporting are essential to delivering polished software.',
    specialties: ['Manual Testing', 'Test Case Design', 'Bug Detection', 'Regression Testing'],
    linkedInUrl: '#'
  },
  {
    id: 'jace-hansen',
    name: 'Jace Hansen',
    title: 'QA Engineer 2',
    department: 'QA',
    bio: 'Jace brings methodical testing expertise and strong analytical skills to the QA team. With experience in various testing methodologies, Jace ensures features work correctly across different scenarios and user workflows. His attention to quality and collaborative approach help catch issues before they reach production.',
    specialties: ['Functional Testing', 'Test Execution', 'Quality Analysis', 'Documentation'],
    linkedInUrl: '#'
  },
  {
    id: 'lindsay-ward',
    name: 'Lindsay Ward',
    title: 'QA Analyst',
    department: 'QA',
    bio: 'Lindsay specializes in quality analysis, developing test strategies and ensuring comprehensive quality metrics. With strong analytical skills and excellent communication, Lindsay bridges technical testing and business requirements. Her systematic approach to quality analysis helps identify potential issues early and maintain high standards throughout the development process.',
    specialties: ['Quality Analysis', 'Test Strategy', 'Metrics & Reporting', 'Process Improvement'],
    linkedInUrl: '#'
  }
];

export const getDepartmentColor = (department: TeamMember['department']) => {
  const colors = {
    Leadership: 'accent',
    Engineering: 'blue',
    QA: 'green',
    Operations: 'orange',
    Open: 'muted'
  };
  return colors[department];
};

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
