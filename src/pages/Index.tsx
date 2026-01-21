import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/PageLayout';
import { LogoRail } from '@/components/LogoRail';
import { TechStack } from '@/components/TechStack';
import { ServicesOverview } from '@/components/ServicesOverview';
import { CaseStudies } from '@/components/CaseStudies';
import { ClientVoices } from '@/components/ClientVoices';
import { Deliverables } from '@/components/Deliverables';
import { Contact } from '@/components/Contact';
import { useGsap } from '@/hooks/useGsap';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getProfessionalServiceSchema } from '@/lib/seo/schemas';

const Index = () => {
  useGsap();

  return (
    <PageLayout showMapAnimation={false}>
      <SEO
        title={seoMetadata.home.title}
        description={seoMetadata.home.description}
        keywords={seoMetadata.home.keywords}
        canonical="https://joinfullstack.com"
        structuredData={[getOrganizationSchema(), getProfessionalServiceSchema()]}
      />
      <Hero />
      <LogoRail />
      <TechStack />
      <ServicesOverview />
      <CaseStudies />
      <ClientVoices />
      <Deliverables />
      <Contact />
    </PageLayout>
  );
};

export default Index;
