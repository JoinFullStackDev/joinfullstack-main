import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { TeamMemberModal } from '@/components/TeamMemberModal';
import { teamMembers, TeamMember } from '@/data/teamMembers';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getBreadcrumbSchema, getPersonSchema } from '@/lib/seo/schemas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, Target, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Separate members by department
  const leadership = teamMembers.filter(m => m.isLeadership);
  const engineering = teamMembers.filter(m => m.department === 'Engineering');
  const qa = teamMembers.filter(m => m.department === 'QA');
  const operations = teamMembers.filter(m => m.department === 'Operations');

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate hero section
    gsap.from('.hero-content', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Animate stats
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1
    });

    // Animate leadership cards
    gsap.from('.leadership-card', {
      scrollTrigger: {
        trigger: '.leadership-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1
    });

    // Animate engineering cards
    gsap.from('.engineering-card', {
      scrollTrigger: {
        trigger: '.engineering-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.08
    });

    // Animate QA cards
    gsap.from('.qa-card', {
      scrollTrigger: {
        trigger: '.qa-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1
    });

    // Animate operations cards
    gsap.from('.operations-card', {
      scrollTrigger: {
        trigger: '.operations-section',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Generate Person schemas for leadership members
  const leadershipSchemas = leadership.map((member) =>
    getPersonSchema({
      name: member.name,
      jobTitle: member.title,
      sameAs: member.linkedInUrl ? [member.linkedInUrl] : [],
    })
  );

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.team.title}
        description={seoMetadata.team.description}
        keywords={seoMetadata.team.keywords}
        canonical="https://joinfullstack.com/about/team"
        structuredData={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
            { name: 'Our Team', url: '/about/team' },
          ]),
          ...leadershipSchemas,
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="hero-content max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals behind FullStack's success
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of combined experience in software engineering, 
            design, quality assurance, and product strategy. We're united by a passion for building exceptional 
            digital products that drive real business value.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section relative py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card text-center space-y-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Users className="w-8 h-8 mx-auto text-accent" />
              <div className="text-3xl font-bold text-foreground">{teamMembers.length}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="stat-card text-center space-y-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Award className="w-8 h-8 mx-auto text-blue-500" />
              <div className="text-3xl font-bold text-foreground">{leadership.length}</div>
              <div className="text-sm text-muted-foreground">Leadership</div>
            </div>
            <div className="stat-card text-center space-y-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Target className="w-8 h-8 mx-auto text-green-500" />
              <div className="text-3xl font-bold text-foreground">{engineering.length}</div>
              <div className="text-sm text-muted-foreground">Engineers</div>
            </div>
            <div className="stat-card text-center space-y-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Zap className="w-8 h-8 mx-auto text-orange-500" />
              <div className="text-3xl font-bold text-foreground">{qa.length}</div>
              <div className="text-sm text-muted-foreground">QA Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section relative py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic thinkers and technical experts guiding FullStack's vision and execution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <div key={member.id} className="leadership-card">
                <TeamMemberCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                  variant="leadership"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="engineering-section relative py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Engineering Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Skilled developers building robust, scalable solutions across the full technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineering.map((member) => (
              <div key={member.id} className="engineering-card">
                <TeamMemberCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                  variant="standard"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Section */}
      <section className="qa-section relative py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality advocates ensuring every release meets our rigorous standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qa.map((member) => (
              <div key={member.id} className="qa-card">
                <TeamMemberCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                  variant="standard"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="operations-section relative py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Operations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Orchestrating seamless project delivery and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {operations.map((member) => (
              <div key={member.id} className="operations-card">
                <TeamMemberCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                  variant="standard"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="relative py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-muted-foreground">
            We're always looking for talented individuals who are passionate about building 
            exceptional software and creating value for clients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </PageLayout>
  );
};

export default Team;
