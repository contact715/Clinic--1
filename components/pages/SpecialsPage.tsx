
import React, { useState, useEffect } from 'react';
import { Phone, Tag, Clock, ChevronRight, Wrench, Zap, Star, Package, CheckCircle, Copy, Check } from 'lucide-react';
import { NavigateFn } from '../../App';

interface SpecialsPageProps {
  navigate: NavigateFn;
}

interface Promo {
  badge: string;
  badgeColor: string;
  title: string;
  savings: string;
  regularPrice?: string;
  includes: string[];
  expiry: string;
  expiryDate: string | null;
  claimedCount: number;
  icon: React.ElementType;
  iconColor: string;
  highlight?: boolean;
}

const PROMOS: Promo[] = [
  {
    badge: 'Summer Special',
    badgeColor: '#E30613',
    title: '$79 AC Tune-Up Special',
    savings: 'Save $70',
    regularPrice: 'Regularly $149',
    includes: [
      '21-point system inspection',
      'Air filter check & replacement',
      'Evaporator coil cleaning',
      'Refrigerant level check',
    ],
    expiry: 'Book before August 31',
    expiryDate: '2025-08-31',
    claimedCount: 142,
    icon: Wrench,
    iconColor: '#E30613',
  },
  {
    badge: 'Most Popular',
    badgeColor: '#1866B9',
    title: '$0 Diagnostic Fee with Repair',
    savings: 'Save $89',
    regularPrice: 'Normally $89',
    includes: [
      'Applies to any AC or heating repair',
      'Full system diagnosis included',
      'Written estimate before work starts',
      'No fix, no charge guarantee',
    ],
    expiry: 'No expiration — ongoing offer',
    expiryDate: null,
    claimedCount: 298,
    icon: Zap,
    iconColor: '#1866B9',
    highlight: true,
  },
  {
    badge: 'New Customer',
    badgeColor: '#0ea5e9',
    title: '10% Off First-Time Customers',
    savings: '10% off',
    includes: [
      'On any HVAC service',
      'No minimum job amount',
      'Applies to parts and labor',
      'First-time customers only',
    ],
    expiry: 'No expiration',
    expiryDate: null,
    claimedCount: 217,
    icon: Star,
    iconColor: '#0ea5e9',
  },
  {
    badge: 'Free',
    badgeColor: '#16a34a',
    title: 'Free Second Opinion',
    savings: '$0',
    includes: [
      'Got a quote from another company?',
      'We will review it at no charge',
      'No pressure, no upsells',
      'Applies to AC and heating systems',
    ],
    expiry: 'No expiration — call anytime',
    expiryDate: null,
    claimedCount: 89,
    icon: CheckCircle,
    iconColor: '#16a34a',
  },
  {
    badge: 'Hot Deal',
    badgeColor: '#FDC506',
    title: '$200 Off New System Installation',
    savings: 'Save $200',
    includes: [
      'Full AC system replacement',
      'Full heating system replacement',
      'Includes all major brands',
      'Free load calculation included',
    ],
    expiry: 'Limited time offer',
    expiryDate: '2025-09-15',
    claimedCount: 73,
    icon: Tag,
    iconColor: '#FDC506',
  },
  {
    badge: 'Bundle',
    badgeColor: '#7c3aed',
    title: 'Free 1-Year Maintenance Plan',
    savings: 'Save $199',
    includes: [
      'With any new system installation over $5,000',
      'Two tune-up visits included',
      'Priority scheduling',
      'Filter replacements included',
    ],
    expiry: 'Limited time — ask for details',
    expiryDate: '2025-10-01',
    claimedCount: 118,
    icon: Package,
    iconColor: '#7c3aed',
  },
];

function getDaysRemaining(expiryDate: string): number {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const diffMs = expiry.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

interface CountdownBadgeProps {
  expiryDate: string | null;
  isHighlight: boolean;
}

const CountdownBadge: React.FC<CountdownBadgeProps> = ({ expiryDate, isHighlight }) => {
  if (!expiryDate) return null;

  const days = getDaysRemaining(expiryDate);
  if (days <= 0) return null;

  let colorClass = 'text-gray-400';
  let dotClass = 'bg-gray-400';

  if (days < 7) {
    colorClass = isHighlight ? 'text-red-300' : 'text-red-500';
    dotClass = isHighlight ? 'bg-red-300' : 'bg-red-500';
  } else if (days < 14) {
    colorClass = isHighlight ? 'text-yellow-300' : 'text-amber-500';
    dotClass = isHighlight ? 'bg-yellow-300' : 'bg-amber-500';
  }

  return (
    <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide ${colorClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotClass}`}></span>
      {days === 1 ? '1 day left' : `${days} days left`}
    </div>
  );
};

interface PromoCardProps {
  promo: Promo;
  navigate: NavigateFn;
}

const PromoCard: React.FC<PromoCardProps> = ({ promo, navigate }) => {
  return (
    <div
      className={`rounded-3xl p-8 border flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        promo.highlight
          ? 'bg-[#1866B9] border-[#1866B9] text-white shadow-xl shadow-[#1866B9]/20'
          : 'bg-white border-gray-200 text-[#1D1D1B]'
      }`}
    >
      {/* Badge */}
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[10px] font-[900] uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            backgroundColor: promo.highlight ? 'rgba(255,255,255,0.2)' : `${promo.badgeColor}15`,
            color: promo.highlight ? '#fff' : promo.badgeColor,
          }}
        >
          {promo.badge}
        </span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: promo.highlight ? 'rgba(255,255,255,0.15)' : `${promo.iconColor}15`,
            color: promo.highlight ? '#fff' : promo.iconColor,
          }}
        >
          <promo.icon size={20} />
        </div>
      </div>

      {/* Title + Savings */}
      <h2 className={`text-2xl font-[900] leading-tight mb-1 ${promo.highlight ? 'text-white' : 'text-[#1D1D1B]'}`}>
        {promo.title}
      </h2>
      {promo.regularPrice && (
        <p className={`text-xs font-medium mb-4 ${promo.highlight ? 'text-white/60' : 'text-gray-400'}`}>
          {promo.regularPrice}
        </p>
      )}

      {/* Savings pill */}
      <div
        className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full text-sm font-[900] mb-4"
        style={{
          backgroundColor: promo.highlight ? 'rgba(255,255,255,0.15)' : `${promo.badgeColor}15`,
          color: promo.highlight ? '#fff' : promo.badgeColor,
        }}
      >
        {promo.savings}
      </div>

      {/* Social proof */}
      <p className={`text-[11px] font-bold mb-5 ${promo.highlight ? 'text-white/50' : 'text-gray-400'}`}>
        {promo.claimedCount} homeowners claimed this deal
      </p>

      {/* Includes */}
      <ul className="space-y-2 mb-6 flex-1">
        {promo.includes.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm">
            <CheckCircle
              size={14}
              className="shrink-0 mt-0.5"
              style={{ color: promo.highlight ? 'rgba(255,255,255,0.7)' : '#16a34a' }}
            />
            <span className={promo.highlight ? 'text-white/80' : 'text-gray-600'}>{item}</span>
          </li>
        ))}
      </ul>

      {/* Expiry row */}
      <div className="flex items-center justify-between mb-6">
        <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide ${promo.highlight ? 'text-white/50' : 'text-gray-400'}`}>
          <Clock size={11} />
          {promo.expiry}
        </div>
        <CountdownBadge expiryDate={promo.expiryDate} isHighlight={!!promo.highlight} />
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/contact')}
        className={`w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
          promo.highlight
            ? 'bg-white text-[#1866B9] hover:bg-[#F4F6F8]'
            : 'bg-[#1D1D1B] text-white hover:bg-[#E30613]'
        }`}
      >
        Claim This Deal
      </button>
      <p className={`text-[10px] text-center mt-3 leading-snug ${promo.highlight ? 'text-white/40' : 'text-gray-400'}`}>
        Cannot be combined with other offers. Some restrictions apply.
      </p>
    </div>
  );
};

const PromoStrip: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('VALLEY20').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-[#E30613] py-3 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-3 text-sm text-white text-center">
        <span className="font-bold">
          Use code <span className="font-[900] tracking-widest bg-white/20 px-2 py-0.5 rounded-md">VALLEY20</span> for an extra $20 off any service this month
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 bg-white text-[#E30613] font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
    </div>
  );
};

export const SpecialsPage: React.FC<SpecialsPageProps> = ({ navigate }) => {
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <>
      {/* Promo Strip */}
      <PromoStrip />

      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#FDC50610,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#E3061308,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FDC506] animate-pulse"></div>
            Limited Time Offers
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            CURRENT DEALS<br />
            <span className="text-[#FDC506]">&amp; SPECIALS</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Limited time offers for San Fernando Valley homeowners. Call to confirm availability or book online. All deals require mention at time of booking.
          </p>
          <p className="text-white/40 text-sm mt-3 font-bold uppercase tracking-wider">
            Updated for {currentMonth}. Limited slots per week.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="tel:8187310445"
              className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book Online
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMOS.map((promo, i) => (
              <PromoCard key={i} promo={promo} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Fine Print */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Fine Print</h3>
          <ul className="text-xs text-gray-500 space-y-2 leading-relaxed max-w-3xl">
            <li>All specials must be mentioned at time of booking. Cannot be combined with any other offer or discount.</li>
            <li>Promotional pricing applies to standard residential service calls within our service area (San Fernando Valley and surrounding communities).</li>
            <li>$79 AC Tune-Up offer applies to single-system visits only. Multi-system homes may require a separate quote.</li>
            <li>10% new customer discount applies to first service visit only, maximum discount $150.</li>
            <li>$200 off new system installation applies to full system replacements — does not apply to repairs or partial replacements.</li>
            <li>Free 1-Year Maintenance Plan requires a minimum invoice of $5,000 for new equipment installation. Plan includes 2 visits and standard filter replacements.</li>
            <li>VALLEY20 code provides $20 off one service call. Cannot be combined with other discounts. One use per household.</li>
            <li>Claimed count figures reflect estimates based on recent bookings. Offers may be withdrawn or modified at any time.</li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight mb-4">
            Don't see what you need?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-lg mx-auto">
            Call us. We work with you on pricing, especially for seniors, veterans, and families on a budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8187310445"
              className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book Online
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
