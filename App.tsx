
import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { CookieConsent } from './components/CookieConsent';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { DiscoveryQuiz } from './components/DiscoveryQuiz';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ScrollProgress } from './components/ScrollProgress';

const HomePage = lazy(() => import('./components/pages/HomePage').then(m => ({ default: m.HomePage })));
const ResidentialPage = lazy(() => import('./components/pages/ResidentialPage').then(m => ({ default: m.ResidentialPage })));
const CommercialPage = lazy(() => import('./components/pages/CommercialPage').then(m => ({ default: m.CommercialPage })));
const ServicePage = lazy(() => import('./components/pages/ServicePage').then(m => ({ default: m.ServicePage })));
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CityPage = lazy(() => import('./components/pages/CityPage').then(m => ({ default: m.CityPage })));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const BlogPage = lazy(() => import('./components/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const FAQPage = lazy(() => import('./components/pages/FAQPage').then(m => ({ default: m.FAQPage })));
const FinancingPage = lazy(() => import('./components/pages/FinancingPage').then(m => ({ default: m.FinancingPage })));
const SpecialsPage = lazy(() => import('./components/pages/SpecialsPage').then(m => ({ default: m.SpecialsPage })));
const LicensesPage = lazy(() => import('./components/pages/LicensesPage').then(m => ({ default: m.LicensesPage })));
const ReviewsPage = lazy(() => import('./components/pages/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const PrivacyPage = lazy(() => import('./components/pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./components/pages/TermsPage').then(m => ({ default: m.TermsPage })));
const BlogArticlePage = lazy(() => import('./components/pages/BlogArticlePage').then(m => ({ default: m.BlogArticlePage })));
const CareersPage = lazy(() => import('./components/pages/CareersPage').then(m => ({ default: m.CareersPage })));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const MembershipPage = lazy(() => import('./components/pages/MembershipPage').then(m => ({ default: m.MembershipPage })));
const PricingPage = lazy(() => import('./components/pages/PricingPage').then(m => ({ default: m.PricingPage })));
const AccessibilityPage = lazy(() => import('./components/pages/AccessibilityPage').then(m => ({ default: m.AccessibilityPage })));
const CookiePolicyPage = lazy(() => import('./components/pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const DoNotSellPage = lazy(() => import('./components/pages/DoNotSellPage').then(m => ({ default: m.DoNotSellPage })));


export type NavigateFn = (path: string) => void;

const PAGE_META: Record<string, string> = {
  home: 'Cool Doc HVAC Service — same-day AC repair, heating, and ductless mini-split service across San Fernando Valley. Licensed, insured. No fix, no fee. Call (818) 731-0445.',
  residential: 'Residential HVAC service in San Fernando Valley. AC repair, furnace repair, ductless installation. Family-owned since 2010. 90-day warranty. (818) 731-0445.',
  commercial: 'Commercial HVAC service in Los Angeles. Rooftop units, maintenance contracts, 24/7 emergency. All brands. Fast response. Cool Doc HVAC (818) 731-0445.',
  'ac-repair': 'AC repair in San Fernando Valley — same-day service, all brands. Refrigerant leaks, compressor failure, frozen coils. No fix, no fee. Call (818) 731-0445.',
  heating: 'Furnace and heating repair in Los Angeles. Gas furnaces, heat pumps, electric systems. Fast diagnosis, honest pricing. Cool Doc HVAC (818) 731-0445.',
  maintenance: 'HVAC maintenance plans in San Fernando Valley. Annual tune-ups, filter changes, system checks. Prevent breakdowns. Cool Doc HVAC (818) 731-0445.',
  ductless: 'Ductless mini-split installation and repair in Los Angeles. Mitsubishi, Daikin, Fujitsu, LG. Expert installation. Cool Doc HVAC (818) 731-0445.',
  'hvac-installation': 'HVAC system installation in San Fernando Valley. All major brands, proper sizing, warranty. Cool Doc HVAC — licensed CSLB contractor. (818) 731-0445.',
  'heat-pump': 'Heat pump repair and installation in Los Angeles. Energy-efficient heating and cooling. All brands serviced. Cool Doc HVAC (818) 731-0445.',
  'air-quality': 'Indoor air quality solutions in San Fernando Valley. HEPA filters, UV-C purifiers, duct sealing. Breathe cleaner air. Cool Doc HVAC (818) 731-0445.',
  about: 'About Cool Doc HVAC — family-owned HVAC company serving San Fernando Valley since 2010. Licensed, insured, 2,300+ five-star reviews.',
  contact: 'Contact Cool Doc HVAC. Book same-day service online or call (818) 731-0445. Serving San Fernando Valley and Los Angeles County.',
  blog: 'HVAC tips, guides, and maintenance advice from Cool Doc HVAC. San Fernando Valley homeowners and business owners.',
  faq: 'Frequently asked questions about HVAC repair, maintenance, and installation in San Fernando Valley. Cool Doc HVAC answers.',
  financing: 'HVAC financing options in San Fernando Valley. 0% APR plans, low monthly payments. Synchrony and GreenSky. Cool Doc HVAC (818) 731-0445.',
  specials: 'Current HVAC deals and discounts in San Fernando Valley. $79 tune-ups, diagnostic specials, new customer offers. Cool Doc HVAC.',
  licenses: 'Cool Doc HVAC is licensed (CSLB), EPA 608 certified, NATE certified, and fully insured. Verify our credentials.',
  reviews: '4.9-star rated HVAC company in San Fernando Valley. 2,300+ verified reviews on Google, Yelp, and Facebook. Cool Doc HVAC.',
  privacy: 'Privacy policy for Cool Doc HVAC Service website.',
  terms: 'Terms of service for Cool Doc HVAC Service.',
  careers: 'HVAC technician jobs in San Fernando Valley. Join Cool Doc HVAC — competitive pay, benefits, family culture.',
  membership: 'Cool Doc Shield maintenance plans — annual HVAC tune-ups, priority scheduling, and member rates for San Fernando Valley homeowners. (818) 731-0445.',
  pricing: 'HVAC service pricing in San Fernando Valley. AC repair, furnace repair, ductless installation. Transparent starting rates. Cool Doc HVAC (818) 731-0445.',
  accessibility: 'Accessibility statement for Cool Doc HVAC Service website. We are committed to WCAG 2.1 AA compliance. Contact (818) 731-0445 for assistance.',
  cookies: 'Cookie policy for Cool Doc HVAC Service. We use essential cookies only. No advertising tracking. California and federal privacy law compliant.',
  'do-not-sell': 'Opt out of the sale or sharing of your personal information under CCPA. Cool Doc HVAC Service does not sell customer data.',
  '404': 'Page not found — Cool Doc HVAC Service.',
};

const PAGE_TITLES: Record<string, string> = {
  home:        'Cool Doc HVAC Service | AC Repair & HVAC San Fernando Valley',
  residential: 'Residential HVAC Service San Fernando Valley | Cool Doc',
  commercial:  'Commercial HVAC Service Los Angeles | Cool Doc',
  'ac-repair': 'AC Repair San Fernando Valley — Same Day | Cool Doc HVAC',
  heating:     'Heating & Furnace Repair Los Angeles | Cool Doc HVAC',
  maintenance: 'HVAC Maintenance Plans San Fernando Valley | Cool Doc',
  ductless:            'Ductless Mini-Split Installation & Repair LA | Cool Doc HVAC',
  'hvac-installation': 'HVAC System Installation San Fernando Valley | Cool Doc',
  'heat-pump':         'Heat Pump Repair & Installation Los Angeles | Cool Doc',
  'air-quality':       'Indoor Air Quality Solutions San Fernando Valley | Cool Doc',
  about:               'About Us — Cool Doc HVAC Service',
  contact:     'Book HVAC Service | Contact Cool Doc HVAC',
  blog:        'HVAC Tips & Guides | Cool Doc HVAC',
  faq:         'FAQ — HVAC Questions Answered | Cool Doc HVAC',
  financing:   'HVAC Financing — Pay Over Time | Cool Doc HVAC',
  specials:    'Current Deals & Specials | Cool Doc HVAC',
  licenses:    'Licensed, Bonded & Insured | Cool Doc HVAC',
  reviews:       'Customer Reviews | Cool Doc HVAC San Fernando Valley',
  privacy:       'Privacy Policy | Cool Doc HVAC Service',
  terms:         'Terms of Service | Cool Doc HVAC Service',
  careers:       'Careers — Join the Cool Doc Team | Cool Doc HVAC',
  membership:    'Cool Doc Shield Maintenance Plans | Cool Doc HVAC',
  pricing:       'HVAC Pricing & Rates San Fernando Valley | Cool Doc HVAC',
  'sitemap-page': 'Site Map | Cool Doc HVAC Service',
  'blog-article': 'HVAC Article | Cool Doc HVAC',
  accessibility: 'Accessibility Statement | Cool Doc HVAC Service',
  cookies: 'Cookie Policy | Cool Doc HVAC Service',
  'do-not-sell': 'Do Not Sell My Info (CCPA) | Cool Doc HVAC Service',
  '404':         'Page Not Found | Cool Doc HVAC',
};

const applyMeta = (titleKey: string, path: string = '/') => {
  const title = PAGE_TITLES[titleKey] ?? PAGE_TITLES.home;
  const desc = PAGE_META[titleKey] ?? PAGE_META.home;
  const canonicalUrl = `https://cooldochvac.com${path || '/'}`;
  const ogImage = 'https://cooldochvac.com/generated/hero-hvac-bg.jpg';

  document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const ogImageTag = document.querySelector('meta[property="og:image"]');
  if (ogImageTag) ogImageTag.setAttribute('content', ogImage);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', desc);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', canonicalUrl);
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
  }
};

const parsePath = (pathname: string): { page: string; slug?: string } => {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (clean === '/' || clean === '/home') return { page: 'home' };
  if (clean === '/residential') return { page: 'residential' };
  if (clean === '/commercial') return { page: 'commercial' };
  if (clean === '/ac-repair') return { page: 'service', slug: 'ac-repair' };
  if (clean === '/heating') return { page: 'service', slug: 'heating' };
  if (clean === '/hvac-maintenance') return { page: 'service', slug: 'maintenance' };
  if (clean === '/ductless') return { page: 'service', slug: 'ductless' };
  if (clean === '/hvac-installation') return { page: 'service', slug: 'hvac-installation' };
  if (clean === '/heat-pump') return { page: 'service', slug: 'heat-pump' };
  if (clean === '/air-quality') return { page: 'service', slug: 'air-quality' };
  if (clean === '/about') return { page: 'about' };
  if (clean === '/contact') return { page: 'contact' };
  if (clean === '/faq') return { page: 'faq' };
  if (clean === '/financing') return { page: 'financing' };
  if (clean === '/specials') return { page: 'specials' };
  if (clean === '/licenses') return { page: 'licenses' };
  if (clean === '/reviews') return { page: 'reviews' };
  if (clean === '/privacy') return { page: 'privacy' };
  if (clean === '/terms') return { page: 'terms' };
  if (clean === '/careers') return { page: 'careers' };
  if (clean === '/membership') return { page: 'membership' };
  if (clean === '/pricing') return { page: 'pricing' };
  if (clean === '/sitemap-page') return { page: 'sitemap-page' };
  if (clean === '/accessibility') return { page: 'accessibility' };
  if (clean === '/cookies') return { page: 'cookies' };
  if (clean === '/do-not-sell') return { page: 'do-not-sell' };
  const blogArticleMatch = clean.match(/^\/blog\/(.+)$/);
  if (blogArticleMatch) return { page: 'blog-article', slug: blogArticleMatch[1] };
  if (clean === '/blog') return { page: 'blog' };
  const cityMatch = clean.match(/^\/city\/(.+)$/);
  if (cityMatch) return { page: 'city', slug: cityMatch[1] };
  return { page: '404' };
};

const App: React.FC = () => {
  const [route, setRoute] = useState(() => parsePath(window.location.pathname));

  const navigate: NavigateFn = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    const parsed = parsePath(path);
    setRoute(parsed);
    const titleKey = parsed.slug === 'ac-repair' ? 'ac-repair'
      : parsed.slug === 'heating' ? 'heating'
      : parsed.slug === 'maintenance' ? 'maintenance'
      : parsed.slug === 'ductless' ? 'ductless'
      : parsed.slug === 'hvac-installation' ? 'hvac-installation'
      : parsed.slug === 'heat-pump' ? 'heat-pump'
      : parsed.slug === 'air-quality' ? 'air-quality'
      : parsed.page;
    applyMeta(titleKey, path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    // Apply meta for the initial route on first mount
    const initial = parsePath(window.location.pathname);
    const initialKey = initial.slug === 'ac-repair' ? 'ac-repair'
      : initial.slug === 'heating' ? 'heating'
      : initial.slug === 'maintenance' ? 'maintenance'
      : initial.slug === 'ductless' ? 'ductless'
      : initial.slug === 'hvac-installation' ? 'hvac-installation'
      : initial.slug === 'heat-pump' ? 'heat-pump'
      : initial.slug === 'air-quality' ? 'air-quality'
      : initial.page;
    applyMeta(initialKey, window.location.pathname);

    const onPop = () => {
      const parsed = parsePath(window.location.pathname);
      setRoute(parsed);
      const titleKey = parsed.slug === 'ac-repair' ? 'ac-repair'
        : parsed.slug === 'heating' ? 'heating'
        : parsed.slug === 'maintenance' ? 'maintenance'
        : parsed.slug === 'ductless' ? 'ductless'
        : parsed.slug === 'hvac-installation' ? 'hvac-installation'
        : parsed.slug === 'heat-pump' ? 'heat-pump'
        : parsed.slug === 'air-quality' ? 'air-quality'
        : parsed.page;
      applyMeta(titleKey, window.location.pathname);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderPage = () => {
    switch (route.page) {
      case 'home':       return <HomePage navigate={navigate} />;
      case 'residential': return <ResidentialPage navigate={navigate} />;
      case 'commercial': return <CommercialPage navigate={navigate} />;
      case 'service':    return <ServicePage service={route.slug ?? 'ac-repair'} navigate={navigate} />;
      case 'about':      return <AboutPage navigate={navigate} />;
      case 'contact':    return <ContactPage navigate={navigate} />;
      case 'city':       return <CityPage slug={route.slug ?? ''} navigate={navigate} />;
      case 'blog':       return <BlogPage navigate={navigate} />;
      case 'faq':        return <FAQPage navigate={navigate} />;
      case 'financing':  return <FinancingPage navigate={navigate} />;
      case 'specials':   return <SpecialsPage navigate={navigate} />;
      case 'licenses':   return <LicensesPage navigate={navigate} />;
      case 'reviews':    return <ReviewsPage navigate={navigate} />;
      case 'privacy':       return <PrivacyPage navigate={navigate} />;
      case 'terms':         return <TermsPage navigate={navigate} />;
      case 'careers':       return <CareersPage navigate={navigate} />;
      case 'membership':    return <MembershipPage navigate={navigate} />;
      case 'pricing':       return <PricingPage navigate={navigate} />;
      case 'sitemap-page':  return <SitemapPage navigate={navigate} />;
      case 'blog-article':  return <BlogArticlePage slug={route.slug ?? ''} navigate={navigate} />;
      case 'accessibility': return <AccessibilityPage navigate={navigate} />;
      case 'cookies':       return <CookiePolicyPage navigate={navigate} />;
      case 'do-not-sell':   return <DoNotSellPage navigate={navigate} />;
      default:              return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#1D1D1B] font-sans selection:bg-[#E30613] selection:text-white">
      <ScrollProgress />
      <CookieConsent />
      <ChatBot />
      <Header navigate={navigate} />
      <Breadcrumbs route={route} navigate={navigate} />
      <Suspense fallback={
        <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#E30613] border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading...</span>
          </div>
        </div>
      }>
        {renderPage()}
      </Suspense>
      <Footer navigate={navigate} />
      <StickyMobileCTA navigate={navigate} />
      <WhatsAppButton />
      <DiscoveryQuiz />
      <style>{`
        @keyframes sway-hero {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-sway-hero {
          animation: sway-hero 6s ease-in-out infinite;
          transform-origin: bottom center;
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
