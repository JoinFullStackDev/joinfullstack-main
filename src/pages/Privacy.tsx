import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

const Privacy = () => {
  return (
    <PageLayout>
      <SEO
        title={seoMetadata.privacy.title}
        description={seoMetadata.privacy.description}
        keywords={seoMetadata.privacy.keywords}
        canonical="https://joinfullstack.com/privacy"
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' },
          ]),
        ]}
      />

      <section className="relative py-16 md:py-24 px-6 pt-28 md:pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                FullStack ("we," "our," or "us") respects your privacy and is committed to protecting 
                your personal data. This privacy policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Personal Data:</strong> Name, email address, 
                  phone number, company name, and other contact information you provide when filling 
                  out forms or contacting us.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Information about how you 
                  access and use our website, including your IP address, browser type, pages visited, 
                  and time spent on pages.
                </li>
                <li>
                  <strong className="text-foreground">Cookies:</strong> We use cookies and similar 
                  tracking technologies to enhance your experience on our website.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who assist us in operating our website and services</li>
                <li>Professional advisors such as lawyers and accountants</li>
                <li>Law enforcement or regulatory bodies when required by law</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal data, 
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookie 
                settings through your browser preferences. Please note that disabling cookies may 
                affect the functionality of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please 
                contact us at:
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

export default Privacy;
