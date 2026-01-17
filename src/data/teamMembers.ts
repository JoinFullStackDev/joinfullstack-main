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
    bio: 'Spencer founded FullStack with a vision to deliver exceptional software engineering services through a combination of technical excellence and client-centric methodology. With a background in scalable software architecture and product strategy, Spencer leads the company\'s technical direction while fostering a culture of innovation and continuous improvement. His passion lies in transforming complex business challenges into elegant software solutions that drive measurable results.',
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
    bio: 'Jake brings deep expertise in DevSecOps, merging development, security, and operations into cohesive, automated workflows. With a focus on security-first infrastructure and CI/CD excellence, Jake ensures FullStack\'s systems are both robust and secure. His leadership in DevSecOps practices helps the team deliver reliable, secure solutions at scale.',
    specialties: ['DevSecOps', 'Security Engineering', 'Infrastructure as Code', 'CI/CD Pipelines'],
    linkedInUrl: '#'
  },
  {
    id: 'omar-bravo',
    name: 'Omar Bravo',
    title: 'Director of Engineering',
    department: 'Leadership',
    isLeadership: true,
    bio: 'As Director of Engineering, Omar leads the technical vision and execution across all engineering initiatives. With a unique blend of development expertise, design thinking, and strategic planning, Omar ensures the engineering team delivers solutions that are technically excellent and user-centric. His leadership fosters innovation while maintaining high standards of code quality and team collaboration.',
    specialties: ['Engineering Leadership', 'Full-Stack Development', 'Team Management', 'Technical Strategy'],
    linkedInUrl: '#'
  },
  {
    id: 'jake-browning',
    name: 'Jake Browning',
    title: 'Director of Product',
    department: 'Leadership',
    isLeadership: true,
    bio: 'As Director of Product, Jake orchestrates the vision and execution of FullStack\'s product initiatives, bridging the gap between client needs and technical implementation. With deep expertise in product management and strategic planning, Jake ensures every project aligns with business objectives while delivering exceptional value. His collaborative approach makes him instrumental in driving successful outcomes.',
    specialties: ['Product Management', 'Product Strategy', 'Agile Methodology', 'Stakeholder Management'],
    linkedInUrl: '#'
  },
  {
    id: 'joe-obanion',
    name: 'Joe O\'Banion',
    title: 'Director of QA',
    department: 'Leadership',
    isLeadership: true,
    bio: 'Joe leads FullStack\'s quality assurance organization, establishing comprehensive testing frameworks and quality standards that ensure every deliverable exceeds expectations. With extensive experience in QA strategy and team leadership, Joe champions quality throughout the development lifecycle. His systematic approach has been instrumental in maintaining FullStack\'s reputation for reliability and excellence.',
    specialties: ['QA Leadership', 'Test Strategy', 'Quality Standards', 'Team Management'],
    linkedInUrl: '#'
  },

  // Engineering Team
  {
    id: 'meissa-dia',
    name: 'Meissa Dia',
    title: 'Principal Software Engineer',
    department: 'Engineering',
    bio: 'As Principal Software Engineer, Meissa brings deep expertise in distributed systems, microservices architecture, and cloud-native technologies. With a track record of designing and implementing large-scale applications, Meissa mentors the engineering team while driving technical standards and best practices. Their work spans full-stack development with particular strength in backend optimization and system design.',
    specialties: ['Distributed Systems', 'Microservices', 'Cloud Architecture', 'Technical Mentorship'],
    linkedInUrl: '#'
  },
  {
    id: 'noah-funtanilla',
    name: 'Noah Funtanilla',
    title: 'Full Stack Software Engineer',
    department: 'Engineering',
    bio: 'Noah is a versatile full-stack software engineer with a passion for creating elegant, scalable solutions. Combining technical proficiency across frontend and backend technologies, Noah delivers complete features that are both powerful and maintainable. His collaborative approach and problem-solving skills make him a valuable contributor to any project.',
    specialties: ['React', 'Node.js', 'TypeScript', 'Full-Stack Development'],
    linkedInUrl: '#'
  },
  {
    id: 'jose-delgado',
    name: 'Jose Delgado',
    title: 'Software & Database Architect',
    department: 'Engineering',
    bio: 'Jose specializes in designing robust software architectures and optimized database systems that form the foundation of scalable applications. With deep expertise in database design, performance tuning, and system architecture, Jose ensures FullStack\'s solutions are built on solid technical foundations. His architectural decisions enable applications to scale efficiently and maintain performance under load.',
    specialties: ['Database Architecture', 'System Design', 'Performance Optimization', 'SQL/NoSQL'],
    linkedInUrl: '#'
  },
  {
    id: 'isaiah-larsen',
    name: 'Isaiah Larsen',
    title: 'Full Stack Software Engineer',
    department: 'Engineering',
    bio: 'Isaiah excels at full-stack development, seamlessly working across all layers of modern web applications. With strong problem-solving abilities and a commitment to clean code, Isaiah delivers features that are both functional and maintainable. His versatility and technical breadth make him an asset to projects requiring comprehensive full-stack expertise.',
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
