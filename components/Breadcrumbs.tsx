
import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { NavigateFn } from '../App';

interface BreadcrumbsProps {
  route: { page: string; slug?: string };
  navigate: NavigateFn;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// Format a slug like "ac-repair" → "AC Repair", "woodland-hills" → "Woodland Hills"
const formatSlug = (slug: string): string =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const SERVICE_NAMES: Record<string, string> = {
  'ac-repair': 'AC Repair',
  heating: 'Heating & Furnace',
  maintenance: 'Maintenance Plans',
  ductless: 'Ductless Mini-Splits',
  'hvac-installation': 'HVAC Installation',
  'heat-pump': 'Heat Pump Service',
  'air-quality': 'Air Quality',
};

const PAGE_NAMES: Record<string, string> = {
  residential: 'Residential HVAC',
  commercial: 'Commercial HVAC',
  about: 'About Us',
  contact: 'Contact',
  blog: 'Blog',
  faq: 'FAQ',
  financing: 'Financing',
  specials: 'Current Specials',
  licenses: 'Licenses & Insurance',
  reviews: 'Customer Reviews',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  careers: 'Careers',
  'sitemap-page': 'Site Map',
  membership: 'Maintenance Plans',
  pricing: 'Pricing',
  accessibility: 'Accessibility',
  cookies: 'Cookie Policy',
  'do-not-sell': 'Do Not Sell My Info',
  '404': 'Page Not Found',
};

// Maps route → breadcrumb URL segments for the canonical path
const getPageUrl = (page: string, slug?: string): string => {
  switch (page) {
    case 'service':
      if (slug === 'maintenance') return '/hvac-maintenance';
      return slug ? `/${slug}` : '/';
    case 'blog-article':
      return slug ? `/blog/${slug}` : '/blog';
    case 'city':
      return slug ? `/city/${slug}` : '/';
    case 'sitemap-page':
      return '/sitemap-page';
    default:
      return `/${page}`;
  }
};

const buildBreadcrumbItems = (route: { page: string; slug?: string }): BreadcrumbItem[] => {
  const home: BreadcrumbItem = { name: 'Home', url: '/' };

  switch (route.page) {
    case 'service': {
      const label = route.slug ? (SERVICE_NAMES[route.slug] ?? formatSlug(route.slug)) : 'Service';
      return [home, { name: label, url: getPageUrl('service', route.slug) }];
    }
    case 'blog-article': {
      const articleName = route.slug ? formatSlug(route.slug) : 'Article';
      return [
        home,
        { name: 'Blog', url: '/blog' },
        { name: articleName, url: getPageUrl('blog-article', route.slug) },
      ];
    }
    case 'city': {
      const cityName = route.slug ? formatSlug(route.slug) : 'City';
      return [
        home,
        { name: 'Service Areas', url: '/#map' },
        { name: cityName, url: getPageUrl('city', route.slug) },
      ];
    }
    default: {
      const label = PAGE_NAMES[route.page] ?? formatSlug(route.page);
      return [home, { name: label, url: getPageUrl(route.page, route.slug) }];
    }
  }
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ route, navigate }) => {
  // Inject / remove BreadcrumbList JSON-LD schema
  useEffect(() => {
    if (route.page === 'home') return;

    const items = buildBreadcrumbItems(route);
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://cooldochvac.com${item.url}`,
      })),
    };

    const existing = document.getElementById('breadcrumb-schema');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'breadcrumb-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('breadcrumb-schema')?.remove();
    };
  }, [route]);

  if (route.page === 'home') return null;

  const items = buildBreadcrumbItems(route);

  const handleNav = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (url.includes('#')) {
      const [path, hash] = url.split('#');
      navigate(path || '/');
      setTimeout(() => {
        const el = document.querySelector(`#${hash}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(url);
    }
  };

  return (
    // pt accounts for fixed header: 3px accent + 32px trust rail + 80px nav = 115px
    // We use pt-[115px] so the bar appears flush below the header on desktop
    // On mobile the trust rail is hidden when scrolled but we still need the header clearance
    <div className="w-full bg-white border-b border-gray-200 pt-[115px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center h-9 gap-1"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                {isLast ? (
                  <span className="text-xs font-medium text-gray-700 truncate">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    onClick={(e) => handleNav(item.url, e)}
                    className="text-xs text-gray-500 hover:text-[#E30613] transition-colors duration-150 shrink-0"
                  >
                    {item.name}
                  </a>
                )}
                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
