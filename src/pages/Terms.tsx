import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

const Terms = () => {
  return (
    <PageLayout>
      <SEO
        title={seoMetadata.terms.title}
        description={seoMetadata.terms.description}
        keywords={seoMetadata.terms.keywords}
        canonical="https://joinfullstack.com/terms"
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Terms of Service', url: '/terms' },
          ]),
        ]}
      />

      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the FullStack website and services, you agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our 
                services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                FullStack provides software development, product strategy, and related consulting 
                services. The specific scope of services will be defined in individual project 
                agreements or statements of work.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information as required for our services</li>
                <li>Respond to requests for information or feedback in a timely manner</li>
                <li>Ensure you have the necessary rights to any content or materials you provide</li>
                <li>Pay for services according to agreed-upon terms</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise specified in a project agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  FullStack retains ownership of all pre-existing intellectual property, tools, 
                  methodologies, and frameworks used in providing services.
                </li>
                <li>
                  Upon full payment, clients receive ownership of custom deliverables specifically 
                  created for their project.
                </li>
                <li>
                  FullStack may use general knowledge and skills gained during engagements for 
                  other projects.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared 
                during the engagement. This obligation survives the termination of any agreement and 
                does not apply to information that is publicly available or independently developed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, FullStack shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, or any loss of 
                profits or revenues, whether incurred directly or indirectly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability for any claims arising from our services shall not exceed the 
                amount paid by you for the specific services giving rise to the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Warranty Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express or 
                implied, including but not limited to implied warranties of merchantability, fitness 
                for a particular purpose, or non-infringement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate an engagement according to the terms specified in the 
                applicable project agreement. Upon termination, you remain responsible for payment 
                of services rendered up to the termination date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the 
                State of Utah, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of 
                any material changes by updating the "Last updated" date. Your continued use of our 
                services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;
