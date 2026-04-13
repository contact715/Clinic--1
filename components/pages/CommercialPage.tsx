
import React, { useState } from 'react';
import {
  Wind, Flame, Thermometer, Wrench, Building2, ShieldCheck,
  Check, Phone, Clock, ChevronDown, Users, Zap,
  Briefcase, UtensilsCrossed, HeartPulse, Warehouse, ArrowRight, Star
} from 'lucide-react';
import { NavigateFn } from '../../App';

interface CommercialPageProps {
  navigate: NavigateFn;
}

const STATS = [
  { value: '500+', label: 'Commercial Accounts' },
  { value: '24/7', label: 'Emergency Service' },
  { value: 'All Brands', label: 'Commercial Equipment' },
  { value: '15+', label: 'Years Commercial Experience' },
];

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Kitchens',
    need: 'Kitchen exhaust, makeup air, and walk-in cooler temperature control.',
    color: '#E30613',
  },
  {
    icon: Briefcase,
    title: 'Retail & Boutiques',
    need: 'Consistent cooling for customer comfort and merchandise protection.',
    color: '#1866B9',
  },
  {
    icon: HeartPulse,
    title: 'Medical & Dental Offices',
    need: 'Precise temperature and ventilation standards for patient safety.',
    color: '#E30613',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Industrial',
    need: 'High-capacity rooftop units and evaporative cooling for large spaces.',
    color: '#1866B9',
  },
  {
    icon: Building2,
    title: 'Office Buildings',
    need: 'Multi-zone comfort for mixed occupancy and conference room control.',
    color: '#E30613',
  },
  {
    icon: Users,
    title: 'Property Management',
    need: 'Maintenance contracts and priority dispatch across multiple units.',
    color: '#1866B9',
  },
];

const SERVICES = [
  {
    icon: Wind,
    title: 'Commercial AC',
    desc: 'Repair and installation for commercial split systems and packaged units in offices and retail.',
    slug: '/ac-repair',
    color: '#1866B9',
  },
  {
    icon: Flame,
    title: 'Commercial Heating',
    desc: 'Gas heating, heat pump systems, and rooftop gas heat for year-round building comfort.',
    slug: '/heating',
    color: '#E30613',
  },
  {
    icon: Thermometer,
    title: 'Ductless for Business',
    desc: 'Multi-zone VRF and mini-split systems for independent temperature control across spaces.',
    slug: '/ductless',
    color: '#1866B9',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance Contracts',
    desc: 'Scheduled service agreements that prevent breakdowns and keep your equipment under warranty.',
    slug: '/hvac-maintenance',
    color: '#E30613',
  },
  {
    icon: Building2,
    title: 'Rooftop Units',
    desc: 'Service and replacement for all major RTU brands. Single-zone to multi-zone rooftop installs.',
    slug: '/hvac-installation',
    color: '#1866B9',
  },
  {
    icon: Wrench,
    title: 'Air Quality & Ventilation',
    desc: 'Commercial air purification, ERV systems, and exhaust solutions for code-compliant buildings.',
    slug: '/air-quality',
    color: '#E30613',
  },
];

const BENEFITS = [
  {
    icon: Clock,
    title: 'Priority dispatch',
    desc: 'Commercial clients on maintenance contracts go to the front of the queue. Downtime costs money.',
    color: '#E30613',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance contracts',
    desc: 'Monthly, quarterly, or annual plans. We catch problems before they become emergencies.',
    color: '#1866B9',
  },
  {
    icon: Zap,
    title: 'After-hours emergency',
    desc: '24/7 emergency line for commercial clients. Your restaurant does not close because the AC failed.',
    color: '#FDC506',
  },
  {
    icon: Star,
    title: 'Licensed & insured',
    desc: 'CSLB #1019837. Bonded and fully insured for commercial work. Certificate of insurance on request.',
    color: '#1866B9',
  },
];

const CONTRACT_TIERS = [
  {
    name: 'Basic Monthly',
    price: 'From $149/mo',
    features: [
      'Monthly filter and belt inspection',
      'Priority scheduling',
      '10% discount on repairs',
    ],
    highlight: false,
  },
  {
    name: 'Standard Quarterly',
    price: 'From $299/quarter',
    features: [
      'Full system tune-up each visit',
      'Coil cleaning and refrigerant check',
      'Priority same-day dispatch',
      '15% discount on parts',
    ],
    highlight: true,
  },
  {
    name: 'Premium Annual',
    price: 'From $799/year',
    features: [
      'Two full-system inspections per year',
      'All filters and belts included',
      'Emergency after-hours coverage',
      '20% discount on parts and labor',
      'Dedicated account manager',
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: 'Do you offer 24/7 emergency service for businesses?',
    a: 'Yes. Commercial clients can reach our emergency line after hours. For restaurants, medical offices, and properties where HVAC failure creates an immediate business problem, we prioritize getting someone out that night.',
  },
  {
    q: 'Can you service rooftop units?',
    a: 'Yes. We service all major RTU brands including Carrier, Trane, Lennox, York, and Rheem. We carry common RTU parts on the trucks and can usually complete repairs in one visit.',
  },
  {
    q: 'Do you provide maintenance contracts?',
    a: 'We do. Monthly, quarterly, and annual contracts are available. Contracts include priority scheduling, discounts on parts and labor, and detailed service reports after each visit. Good for property managers with multiple units.',
  },
  {
    q: 'How fast is your response time for commercial calls?',
    a: 'For clients on a maintenance contract, we target a 4-hour response during business hours. For emergency calls, we aim to dispatch within 2 hours. We will give you an honest ETA when you call.',
  },
];

interface AccordionItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ q, a, isOpen, toggle }) => (
  <div
    onClick={toggle}
    className={`bg-white rounded-2xl border cursor-pointer transition-all duration-300 ${
      isOpen ? 'border-gray-200 shadow-md' : 'border-gray-100 hover:border-gray-200'
    }`}
  >
    <div className="flex items-center justify-between gap-4 p-6">
      <h3 className={`font-bold text-base transition-colors ${isOpen ? 'text-[#1D1D1B]' : 'text-gray-600'}`}>
        {q}
      </h3>
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
          isOpen ? 'bg-[#1D1D1B] text-white border-[#1D1D1B]' : 'bg-white text-gray-400 border-gray-200'
        }`}
      >
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </div>
    <div
      className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-500 text-sm leading-relaxed px-6 pb-6">{a}</p>
      </div>
    </div>
  </div>
);

export const CommercialPage: React.FC<CommercialPageProps> = ({ navigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleNav = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#E3061310,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Briefcase size={10} />
            Trusted by Local Businesses
          </div>

          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            COMMERCIAL HVAC<br />
            <span className="text-[#FDC506]">LOS ANGELES</span>
          </h1>

          <p className="text-white/60 text-xl max-w-2xl mb-4 leading-relaxed">
            Minimize downtime. Protect your inventory. Keep your staff and customers comfortable. We handle commercial HVAC across LA with fast response and real experience.
          </p>
          <p className="text-white/40 text-base max-w-xl mb-10">
            Licensed CSLB #1019837. Serving restaurants, offices, retail, medical, and property management since 2010.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2.5 bg-[#E30613] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={handleNav('/contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Get a Quote <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Licensed & Insured', '24/7 Emergency', 'All Commercial Brands'].map((pill) => (
              <div
                key={pill}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-semibold"
              >
                <Check size={11} className="text-[#FDC506]" />
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-14 bg-[#1D1D1B] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-[900] text-white mb-1">{s.value}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Industries we serve
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Different businesses have different HVAC demands. We know the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 transition-transform duration-300 flex gap-5 items-start"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${ind.color}12`, color: ind.color }}
                >
                  <ind.icon size={22} />
                </div>
                <div>
                  <h3 className="font-[800] text-[#1D1D1B] text-base mb-1.5">{ind.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ind.need}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Commercial services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              We keep your building running. Fast diagnostics, real parts, experienced techs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#F4F6F8] rounded-3xl p-8 border border-gray-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                >
                  <svc.icon size={24} />
                </div>
                <h3 className="text-xl font-[800] text-[#1D1D1B] mb-3">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">{svc.desc}</p>
                <a
                  href={svc.slug}
                  onClick={handleNav(svc.slug)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#1866B9] hover:text-[#E30613] transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Narrative */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1866B9]/10 border border-[#1866B9]/20 text-[#1866B9] font-bold text-[10px] tracking-widest uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1866B9] animate-pulse" />
                Why Businesses Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95] mb-8">
                DOWNTIME IS<br />
                <span className="text-[#1866B9]">NOT AN OPTION</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  A restaurant that loses its walk-in cooler at noon on a Saturday does not have time to wait for a callback on Monday. Neither does a dental office that needs to see patients at 9 AM. We know this, and our dispatch reflects it.
                </p>
                <p>
                  Commercial systems are different from residential. Rooftop units, VRF systems, and kitchen exhaust require specific training and tools. Our technicians are factory-trained on the major commercial brands and we stock parts for the equipment we see most often in LA buildings.
                </p>
                <p>
                  Property managers get the most value from a maintenance contract. You get predictable costs, a documented service history for each unit, and priority dispatch when something goes wrong. One emergency call usually costs more than a full year of preventive service.
                </p>
              </div>
            </div>

            {/* Right: Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${b.color}15`, color: b.color }}
                  >
                    <b.icon size={20} />
                  </div>
                  <h3 className="font-[800] text-[#1D1D1B] text-base mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Contracts Callout */}
      <section className="py-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FDC506] to-transparent opacity-40" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
              <ShieldCheck size={10} />
              Service Contracts
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-[0.95] mb-4">
              PROTECT YOUR EQUIPMENT.<br />
              <span className="text-[#FDC506]">AVOID EMERGENCY COSTS.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A tune-up twice a year costs a fraction of one emergency repair. Pick a plan and stop worrying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTRACT_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#FDC506] border-[#FDC506] text-[#1D1D1B]'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="mb-6">
                  <h3
                    className={`text-xl font-[900] mb-1 ${
                      tier.highlight ? 'text-[#1D1D1B]' : 'text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`text-2xl font-[900] ${
                      tier.highlight ? 'text-[#1D1D1B]' : 'text-[#FDC506]'
                    }`}
                  >
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-3 flex-grow mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          tier.highlight ? 'text-[#1D1D1B]' : 'text-[#FDC506]'
                        }`}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          tier.highlight ? 'text-[#1D1D1B]/80' : 'text-white/60'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  onClick={handleNav('/contact')}
                  className={`w-full text-center py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    tier.highlight
                      ? 'bg-[#1D1D1B] text-white hover:bg-black'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9] mb-6">
                  COMMON<br />
                  <span className="text-[#FDC506]">QUESTIONS</span>
                </h2>
                <p className="text-gray-500 text-base mb-8">
                  For anything not covered here, call us directly.
                </p>
                <a
                  href="tel:8187310445"
                  className="inline-flex items-center gap-2 bg-[#1D1D1B] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#E30613] transition-colors"
                >
                  <Phone size={15} />
                  (818) 731-0445
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-3">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openFaq === i}
                  toggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#E30613]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-2xl md:text-3xl tracking-tight">
              Your business cannot afford HVAC downtime.
            </p>
            <p className="text-white/70 text-base mt-1">
              Call now for same-day commercial service or ask about maintenance contracts.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-white text-[#E30613] font-black uppercase tracking-wider text-sm px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Phone size={15} />
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={handleNav('/contact')}
              className="flex items-center gap-2 bg-[#1D1D1B] text-white font-black uppercase tracking-wider text-sm px-7 py-3.5 rounded-xl hover:bg-black transition-colors"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
