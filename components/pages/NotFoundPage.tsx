
import React from 'react';
import { Home, Wrench, Phone, Star } from 'lucide-react';
import { NavigateFn } from '../../App';

interface NotFoundPageProps {
  navigate: NavigateFn;
}

interface QuickLink {
  label: string;
  path: string;
  icon: React.ReactNode;
  description: string;
}

const QUICK_LINKS: QuickLink[] = [
  {
    label: 'Home',
    path: '/',
    icon: <Home size={20} />,
    description: 'Back to the main page',
  },
  {
    label: 'AC Repair',
    path: '/ac-repair',
    icon: <Wrench size={20} />,
    description: 'Same-day AC repair service',
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <Phone size={20} />,
    description: 'Book a service appointment',
  },
  {
    label: 'Reviews',
    path: '/reviews',
    icon: <Star size={20} />,
    description: '4.9 stars, 2,300+ customers',
  },
];

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <section className="min-h-screen bg-[#1D1D1B] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl mx-auto text-center">

        {/* Mascot + 404 */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <img
            src="/cooldoc-mascot.png"
            alt="Cool Doc HVAC mascot"
            width={120}
            height={120}
            className="object-contain"
            loading="eager"
          />
          <div
            className="text-[96px] font-black leading-none"
            style={{ color: '#E30613' }}
          >
            404
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-black text-white mb-3">
          This page doesn't exist.
        </h1>
        <p className="text-white/60 text-base mb-10">
          It may have moved or the link is wrong.
        </p>

        {/* Quick link cards */}
        <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-5 transition-all duration-200 text-left"
            >
              <span className="text-[#FDC506]">{link.icon}</span>
              <span className="text-white font-bold text-sm">{link.label}</span>
              <span className="text-white/50 text-xs leading-tight">{link.description}</span>
            </button>
          ))}
        </div>

        {/* Phone CTA */}
        <a
          href="tel:8187310445"
          className="inline-flex items-center gap-3 bg-[#E30613] hover:bg-[#c8040f] text-white font-black text-lg px-8 py-4 rounded-2xl transition-colors duration-200"
        >
          <Phone size={20} />
          (818) 731-0445
        </a>
        <p className="text-white/40 text-sm mt-3">
          Call or text — we answer 7 days a week.
        </p>

      </div>
    </section>
  );
};
