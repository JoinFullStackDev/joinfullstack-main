import { PageLayout } from '@/components/PageLayout';
import { MultiStepContactForm } from '@/components/MultiStepContactForm';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema } from '@/lib/seo/schemas';

const ContactPage = () => {
  
  return (
    <PageLayout>
      <SEO
        title={seoMetadata.contact.title}
        description={seoMetadata.contact.description}
        keywords={seoMetadata.contact.keywords}
        canonical="https://joinfullstack.com/contact"
        structuredData={getOrganizationSchema()}
      />
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-16 pt-28 md:pt-24">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let's Build Something Amazing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              This will take about 2 minutes. We'll use your answers to create a personalized proposal.
            </p>
          </div>
          
          <MultiStepContactForm />
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
