import { Hero } from '@/components/Hero';
import { PageLayout } from '@/components/PageLayout';
import { LogoRail } from '@/components/LogoRail';
import { TechStack } from '@/components/TechStack';
import { ServicesOverview } from '@/components/ServicesOverview';
import { CaseStudies } from '@/components/CaseStudies';
import { FeaturedTestimonial } from '@/components/FeaturedTestimonial';
import { Deliverables } from '@/components/Deliverables';
import { Contact } from '@/components/Contact';
import { useGsap } from '@/hooks/useGsap';
import { usePageTitle } from '@/hooks/usePageTitle';

const Index = () => {
  useGsap();
  usePageTitle('Architects of Intelligent Systems');

  return (
    <PageLayout showMapAnimation={false}>
      <Hero />
      <LogoRail />
      <TechStack />
      <ServicesOverview />
      <CaseStudies />
      <FeaturedTestimonial />
      <Deliverables />
      <Contact />
    </PageLayout>
  );
};

export default Index;
