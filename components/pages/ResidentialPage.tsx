
import React, { useState } from 'react';
import {
  Wind, Flame, Thermometer, Wrench, ShieldCheck, Home,
  Phone, ArrowRight, Check, ChevronDown, Star, Clock,
  Zap, DollarSign, Users, AlertTriangle
} from 'lucide-react';
import { NavigateFn } from '../../App';
import { BeforeAfterSection } from '../BeforeAfterSection';

interface ResidentialPageProps {
  navigate: NavigateFn;
}

const SERVICES = [
  {
    icon: Wind,
    title: 'AC Repair',
    desc: 'Fast diagnosis on all central air and split systems. Most repairs completed same day with parts on the truck.',
    slug: '/ac-repair',
    color: '#1866B9',
  },
  {
    icon: Flame,
    title: 'Heating & Furnace',
    desc: 'Gas furnace repair, heat pump service, and electric heat strips. We work on all makes and models.',
    slug: '/heating',
    color: '#E30613',
  },
  {
    icon: Thermometer,
    title: 'Ductless Mini-Splits',
    desc: 'Single and multi-zone installations and repairs. Mitsubishi, Daikin, Fujitsu, LG, and more.',
    slug: '/ductless',
    color: '#1866B9',
  },
  {
    icon: Wrench,
    title: 'HVAC Installation',
    desc: 'Full system replacements with load calculations and proper sizing. We do it right the first time.',
    slug: '/hvac-installation',
    color: '#E30613',
  },
  {
    icon: ShieldCheck,
    title: 'Heat Pump Service',
    desc: 'Repair and installation of heat pumps for year-round efficiency. Great for Valley homes without gas.',
    slug: '/heat-pump',
    color: '#1866B9',
  },
  {
    icon: Home,
    title: 'Indoor Air Quality',
    desc: 'Air purifiers, UV systems, and duct cleaning to remove allergens, dust, and pollutants from your home.',
    slug: '/air-quality',
    color: '#E30613',
  },
];

const STATS = [
  { value: '2,300+', label: 'Homes Served' },
  { value: '15+', label: 'Years in the Valley' },
  { value: '90-Day', label: 'Parts & Labor Warranty' },
  { value: 'Same-Day', label: 'Available' },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Transparent pricing',
    desc: 'You get the full price before any work begins. No surprise charges, no hourly billing games.',
    color: '#1866B9',
  },
  {
    icon: ShieldCheck,
    title: 'No fix, no fee',
    desc: "If we can't solve the problem, you don't pay for the labor. Simple.",
    color: '#E30613',
  },
  {
    icon: Clock,
    title: 'Same-day service',
    desc: 'We keep trucks stocked. When you call in the morning, we aim to be there that afternoon.',
    color: '#FDC506',
  },
  {
    icon: Star,
    title: '90-day warranty',
    desc: 'Parts and labor, covered. If the same issue returns within 90 days, we fix it at no cost.',
    color: '#1866B9',
  },
];

const PROBLEMS = [
  {
    icon: Thermometer,
    title: "AC Won't Cool Below 80°",
    cause: 'Usually low refrigerant, a dirty coil, or a failing compressor.',
    slug: '/ac-repair',
  },
  {
    icon: Zap,
    title: 'High Electric Bills',
    cause: 'A system running inefficiently pulls more power. Often fixed with a tune-up or refrigerant charge.',
    slug: '/hvac-maintenance',
  },
  {
    icon: Wind,
    title: 'Uneven Temps Room to Room',
    cause: 'Duct leaks or improper airflow balance. Mini-splits solve this permanently.',
    slug: '/ductless',
  },
  {
    icon: AlertTriangle,
    title: 'System Short-Cycling',
    cause: 'The unit turns on and off every few minutes. Usually an oversized unit or refrigerant issue.',
    slug: '/ac-repair',
  },
  {
    icon: Flame,
    title: 'No Heat in Winter',
    cause: 'Faulty igniter, failed heat exchanger, or a thermostat that lost communication with the furnace.',
    slug: '/heating',
  },
  {
    icon: Home,
    title: 'Poor Air Quality',
    cause: 'Old filters and dirty ducts circulate dust, pet dander, and mold spores through the home.',
    slug: '/air-quality',
  },
];

const FAQS = [
  {
    q: 'How quickly can you come out?',
    a: 'Same-day for most calls. If you reach us before noon, we can usually get there that afternoon. For after-hours emergencies, call directly and we will do our best to dispatch.',
  },
  {
    q: 'Do you work on older HVAC systems?',
    a: 'Yes. We service systems from the 1990s through current models. Many Valley homes have aging equipment and we carry a wide range of parts. If a system is beyond repair, we tell you honestly.',
  },
  {
    q: "What's included in a tune-up?",
    a: 'We inspect the heat exchanger, clean the coils, check refrigerant levels, test electrical connections, lubricate moving parts, and test system performance start to finish. You get a written summary.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. We have financing options for new system installations. Ask our office when you call and we will go over the available terms.',
  },
  {
    q: 'Are your technicians background checked?',
    a: 'Every tech is background checked before they step foot in your home. We are licensed under CSLB #1019837, bonded, and insured. You can verify that directly on the CSLB website.',
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

export const ResidentialPage: React.FC<ResidentialPageProps> = ({ navigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleNav = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1866B910,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Users size={10} />
            Homeowners Trust Us
          </div>

          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            RESIDENTIAL HVAC<br />
            <span className="text-[#1866B9]">SAN FERNANDO VALLEY</span>
          </h1>

          <p className="text-white/60 text-xl max-w-2xl mb-4 leading-relaxed">
            Family-owned since 2010. We cover all of the Valley, same-day in most cases, and we tell you the price before we touch anything.
          </p>
          <p className="text-white/40 text-base max-w-xl mb-10">
            Licensed CSLB #1019837. Bonded and insured. Background-checked technicians.
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
              Free Estimate <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Licensed & Insured', '90-Day Warranty', '2,300+ Reviews'].map((pill) => (
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

      {/* Services Grid */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Residential services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Every HVAC need under one roof. No need to call multiple companies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
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

      <BeforeAfterSection />

      {/* Why Homeowners Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Narrative */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse" />
                Why Homeowners Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95] mb-8">
                THE VALLEY<br />
                <span className="text-[#E30613]">IS NOT FORGIVING</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Tarzana in July hits 105 degrees. Chatsworth gets that same dry heat. When your AC goes down, you have maybe a few hours before the house becomes unbearable. That window is why we keep trucks stocked and dispatchers answering the phone all day.
                </p>
                <p>
                  A lot of homes in the Valley were built in the 60s and 70s with ductwork that was never updated. We see this constantly. The system runs, but it fights itself because the ducts are too small or leak at every joint. We do not just patch and leave. We tell you what is actually wrong.
                </p>
                <p>
                  Honest pricing matters here because HVAC is expensive enough without being surprised. We quote the full job before we start. If the diagnosis reveals something simpler, you pay less. We have been doing this since 2010 and the repeat business speaks for itself.
                </p>
              </div>
            </div>

            {/* Right: Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="bg-[#F4F6F8] rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
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

      {/* Common Problems */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Common residential problems
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              If your system is doing any of these, you already know what to do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1D1D1B]/5 text-[#1D1D1B] flex items-center justify-center">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-[800] text-[#1D1D1B] text-base mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.cause}</p>
                </div>
                <a
                  href={p.slug}
                  onClick={handleNav(p.slug)}
                  className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-[#E30613] hover:text-[#1866B9] transition-colors uppercase tracking-wider"
                >
                  We fix this <ArrowRight size={12} />
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
                  <span className="text-[#1866B9]">QUESTIONS</span>
                </h2>
                <p className="text-gray-500 text-base mb-8">
                  Still not sure? Call us. We pick up.
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
              Your AC is not getting fixed by waiting.
            </p>
            <p className="text-white/70 text-base mt-1">
              Same-day slots fill up fast. Call now or book online.
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
