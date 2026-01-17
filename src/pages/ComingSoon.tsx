import { PageLayout } from '@/components/PageLayout';
import { usePageTitle } from '@/hooks/usePageTitle';

interface ComingSoonProps {
  title: string;
}

export const ComingSoon = ({ title }: ComingSoonProps) => {
  usePageTitle(title);
  
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ComingSoon;
