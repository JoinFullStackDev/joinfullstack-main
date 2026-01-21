import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';
import { Shield, Lock, Server, Eye, RefreshCw, AlertTriangle } from 'lucide-react';

const Security = () => {
  const securityPractices = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We ensure your sensitive information is protected at every stage.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Our infrastructure is hosted on industry-leading cloud providers with SOC 2 Type II certification. We employ defense-in-depth security strategies.'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'We implement strict access controls and the principle of least privilege. All access is logged and regularly audited.'
    },
    {
      icon: RefreshCw,
      title: 'Regular Audits',
      description: 'We conduct regular security assessments, penetration testing, and vulnerability scanning to identify and address potential risks.'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'We maintain compliance with industry standards and regulations, including GDPR, CCPA, and SOC 2 requirements as applicable.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'We have a comprehensive incident response plan to quickly detect, contain, and remediate any security incidents.'
    }
  ];

  return (
    <PageLayout>
      <SEO
        title={seoMetadata.security.title}
        description={seoMetadata.security.description}
        keywords={seoMetadata.security.keywords}
        canonical="https://joinfullstack.com/security"
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Security', url: '/security' },
          ]),
        ]}
      />

      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security at FullStack</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We take security seriously. Protecting your data and maintaining trust is fundamental 
              to everything we do.
            </p>
          </div>

          {/* Security Practices Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {securityPractices.map((practice, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card/30 border border-border/50 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <practice.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{practice.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our Security Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Security is not an afterthought at FullStack—it's built into everything we do. From 
                the initial architecture of a project to ongoing maintenance, we apply security best 
                practices at every stage of the software development lifecycle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Employee Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                All FullStack team members undergo security awareness training and follow strict 
                security protocols. We implement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Background checks for all employees with access to client data</li>
                <li>Mandatory multi-factor authentication for all systems</li>
                <li>Regular security training and phishing awareness programs</li>
                <li>Secure workstation policies and endpoint protection</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Development Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We integrate security into our development process through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Secure coding practices and code reviews</li>
                <li>Static and dynamic application security testing (SAST/DAST)</li>
                <li>Dependency scanning for known vulnerabilities</li>
                <li>Secure CI/CD pipelines with integrity checks</li>
                <li>Regular third-party security assessments</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Reporting Security Issues</h2>
              <p className="text-muted-foreground leading-relaxed">
                We appreciate the security research community's efforts in helping keep our systems 
                secure. If you believe you've found a security vulnerability, please report it 
                responsibly to:
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:security@joinfullstack.com" className="text-accent hover:underline">
                  security@joinfullstack.com
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We will acknowledge your report within 48 hours and work with you to understand and 
                address the issue promptly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our security practices or would like more information, 
                please contact us at:
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:info@joinfullstack.com" className="text-accent hover:underline">
                  info@joinfullstack.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Security;
