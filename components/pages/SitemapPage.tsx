
import React from 'react';
import { Map, Wrench, Building2, BookOpen, FileText, ChevronRight } from 'lucide-react';
import { NavigateFn } from '../../App';

interface SitemapPageProps {
  navigate: NavigateFn;
}

interface SitemapLink {
  label: string;
  path: string;
}

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  color: string;
  links: SitemapLink[];
}

const SITEMAP_SECTIONS: SitemapSection[] = [
  {
    title: 'Services',
    icon: Wrench,
    color: 'bg-[#E30613]/10 text-[#E30613] border-[#E30613]/20',
    links: [
      { label: 'AC Repair', path: '/ac-repair' },
      { label: 'Heating & Furnace', path: '/heating' },
      { label: 'Ductless Mini-Splits', path: '/ductless' },
      { label: 'Maintenance Plans', path: '/hvac-maintenance' },
      { label: 'Residential HVAC', path: '/residential' },
      { label: 'Commercial HVAC', path: '/commercial' },
    ],
  },
  {
    title: 'Company',
    icon: Building2,
    color: 'bg-[#1866B9]/10 text-[#1866B9] border-[#1866B9]/20',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Customer Reviews', path: '/reviews' },
      { label: 'Licenses & Insurance', path: '/licenses' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Resources',
    icon: BookOpen,
    color: 'bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20',
    links: [
      { label: 'Blog & Tips', path: '/blog' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Financing', path: '/financing' },
      { label: 'Current Specials', path: '/specials' },
    ],
  },
  {
    title: 'Service Areas',
    icon: Map,
    color: 'bg-[#FDC506]/20 text-amber-700 border-[#FDC506]/30',
    links: [
      { label: 'Tarzana', path: '/city/tarzana' },
      { label: 'Woodland Hills', path: '/city/woodland-hills' },
      { label: 'Encino', path: '/city/encino' },
      { label: 'Sherman Oaks', path: '/city/sherman-oaks' },
      { label: 'Reseda', path: '/city/reseda' },
      { label: 'Northridge', path: '/city/northridge' },
      { label: 'Canoga Park', path: '/city/canoga-park' },
      { label: 'Van Nuys', path: '/city/van-nuys' },
      { label: 'Studio City', path: '/city/studio-city' },
      { label: 'West Hills', path: '/city/west-hills' },
    ],
  },
];

const LEGAL_LINKS: SitemapLink[] = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookies' },
  { label: 'Accessibility', path: '/accessibility' },
  { label: 'Do Not Sell My Info', path: '/do-not-sell' },
];

export const SitemapPage: React.FC<SitemapPageProps> = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1866B910,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Map size={11} />
            Navigation
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-4">
            SITE MAP
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed">
            Every page on the Cool Doc HVAC website, organized so you can find what you need.
          </p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITEMAP_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="bg-white rounded-3xl border border-gray-200 p-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold uppercase tracking-wider mb-6 ${section.color}`}>
                    <Icon size={13} />
                    {section.title}
                  </div>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <button
                          onClick={() => navigate(link.path)}
                          className="group w-full text-left flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors duration-150"
                        >
                          <span className="text-sm font-[600] text-gray-700 group-hover:text-[#1D1D1B] transition-colors">
                            {link.label}
                          </span>
                          <ChevronRight size={13} className="text-gray-300 group-hover:text-[#E30613] group-hover:translate-x-0.5 transition-all" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <FileText size={13} />
              Legal
            </div>
            <div className="flex flex-wrap gap-3">
              {LEGAL_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-sm font-[600] text-gray-500 hover:text-[#1D1D1B] underline-offset-4 hover:underline transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="sm:ml-auto text-xs text-gray-400">
              Cool Doc HVAC Service. San Fernando Valley, CA. License #1089805.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
