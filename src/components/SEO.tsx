import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = '',
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  url = window.location.href,
  type = 'website'
}) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Occasions - Event Planning Services`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('', `${title} | Occasions`, 'og:title');
    updateMetaTag('', description, 'og:description');
    updateMetaTag('', type, 'og:type');
    updateMetaTag('', url, 'og:url');
    updateMetaTag('', image, 'og:image');
    updateMetaTag('', 'Occasions - Event Planning Services', 'og:site_name');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | Occasions`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Occasions Event Planning');
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;