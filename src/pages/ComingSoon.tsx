import { PageLayout } from '@/components/PageLayout';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/lib/seo/metadata';

interface ComingSoonProps {
  title: string;
  metaKey?: 'work' | 'about';
}

export const ComingSoon = ({ title, metaKey = 'work' }: ComingSoonProps) => {
  const meta = metaKey === 'about' ? seoMetadata.about : seoMetadata.work;
  
  return (
    <PageLayout>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />
      <div className="min-h-[80vh] flex items-center justify-center px-4 pt-28 md:pt-24">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ComingSoon;
