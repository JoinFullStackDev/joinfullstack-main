import { useEffect } from 'react';

const BASE_TITLE = 'FullStack';

/**
 * @deprecated This hook is deprecated. Use the SEO component instead for proper
 * title management along with meta descriptions, Open Graph tags, and structured data.
 * 
 * Example:
 * ```tsx
 * import { SEO } from '@/components/SEO';
 * import { seoMetadata } from '@/lib/seo/metadata';
 * 
 * <SEO title={seoMetadata.home.title} description={seoMetadata.home.description} />
 * ```
 */
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
