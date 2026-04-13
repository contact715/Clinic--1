
import React, { useState } from 'react';
import { Phone, Shield, DollarSign, Wrench, Zap, Plus, Minus, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { NavigateFn } from '../../App';

interface MembershipPageProps {
  navigate: NavigateFn;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div
    onClick={onToggle}
    className={`group cursor-pointer bg-white rounded-2xl border transition-all duration-300 ${
      isOpen
        ? 'shadow-md border-gray-200'
        : 'shadow-sm border-gray-100 hover:border-gray-300 hover:-translate-y-0.5'
    }`}
  >
    <div className="flex items-center justify-between gap-4 p-6">
      <h3 className={`font-[800] text-base leading-snug transition-colors ${isOpen ? 'text-[#1D1D1B]' : 'text-gray-700 group-hover:text-[#1D1D1B]'}`}>
        {question}
      </h3>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? 'bg-[#1D1D1B] border-[#1D1D1B] text-white' : 'border-gray-200'}`}>
        {isOpen ? <Minus size={14} /> : <Plus size={14} className="text-gray-400 group-hover:text-[#1D1D1B]" />}
      </div>
    </div>
    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">
        <p className="text-sm text-gray-500 leading-relaxed px-6 pb-6">{answer}</p>
      </div>
    </div>
  </div>
);

const BENEFITS = [
  {
    icon: Shield,
    title: 'Priority scheduling',
    desc: 'Members go to the front of the queue. During peak season, that can mean days earlier.',
    color: '#1866B9',
  },
  {
    icon: DollarSign,
    title: 'Save $340/year on average',
    desc: 'Compared to paying per visit, members consistently come out ahead, especially with two tune-ups.',
    color: '#E30613',
  },
  {
    icon: Wrench,
    title: 'Catch problems early',
    desc: 'Most system failures start small. A tune-up catches them before they become a $2,000 repair.',
    color: '#FDC506',
  },
  {
    icon: Zap,
    title: 'No emergency rate markup',
    desc: 'Your member rate applies 24/7. A Sunday night call costs the same as a Tuesday afternoon visit.',
    color: '#1866B9',
  },
];

interface PlanRow {
  label: string;
  basic: boolean | string;
  comfort: boolean | string;
  premium: boolean | string;
}

const PLAN_ROWS: PlanRow[] = [
  { label: 'Annual tune-ups',       basic: '1 per year',  comfort: '2 per year',  premium: '2 per year' },
  { label: 'Filter change',          basic: false,          comfort: true,           premium: true },
  { label: 'Priority dispatch',      basic: false,          comfort: true,           premium: true },
  { label: '15% parts discount',    basic: false,          comfort: false,          premium: true },
  { label: 'No emergency markup',   basic: false,          comfort: true,           premium: true },
  { label: 'Free diagnostic',       basic: false,          comfort: false,          premium: true },
  { label: 'Annual report',         basic: false,          comfort: true,           premium: true },
];

const TUNEUP_ITEMS = [
  'Check refrigerant levels and pressures',
  'Clean condenser and evaporator coils',
  'Inspect and lubricate all moving parts',
  'Test thermostat calibration and controls',
  'Check electrical connections and voltage',
];

const FAQS = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel before your renewal date and you owe nothing extra. No cancellation fees, no penalty.',
  },
  {
    q: 'Does this cover repairs?',
    a: 'The membership covers your scheduled tune-ups and any diagnostic visits included in your tier. Repairs are billed separately at member rates, which are lower than standard rates.',
  },
  {
    q: 'Can I transfer my membership?',
    a: 'Yes. If you move within our service area, the membership transfers with you. Just give us a call and we update the address.',
  },
];

const renderCell = (val: boolean | string) => {
  if (val === false) return <XCircle size={18} className="text-gray-300 mx-auto" />;
  if (val === true) return <CheckCircle size={18} className="text-[#E30613] mx-auto" />;
  return <span className="text-sm font-bold text-[#1D1D1B]">{val}</span>;
};

export const MembershipPage: React.FC<MembershipPageProps> = ({ navigate }) => {
  const [openTuneup, setOpenTuneup] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('membership-plans');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-28 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#E3061312,transparent_55%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1866B910,transparent_55%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Shield size={11} />
            Maintenance Membership
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6 max-w-3xl uppercase">
            COOL DOC<br />
            <span className="text-[#E30613]">SHIELD PLANS.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
            One flat annual fee. Two tune-ups. Priority scheduling. No surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#membership-plans"
              onClick={scrollToPlans}
              className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              See Plans
              <ArrowRight size={15} />
            </a>
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-[#1D1D1B] border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-[#1D1D1B] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight mb-4 uppercase">
              Why join?
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Most HVAC breakdowns don't happen randomly. They happen because nobody caught the warning signs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ backgroundColor: `${b.color}20`, color: b.color }}
                >
                  <b.icon size={20} />
                </div>
                <h3 className="font-[900] text-white text-base mb-2 uppercase tracking-tight">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership-plans" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4 uppercase">
              Choose your plan
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              All plans renew annually. Cancel before renewal with no penalty.
            </p>
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Basic Shield */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Basic Shield</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-[900] text-[#1D1D1B] leading-none">$149</span>
                  <span className="text-gray-400 font-bold text-base mb-1">/year</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Single system. Good starting point.</p>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gray-400 shrink-0" />
                    1 tune-up per year
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 line-through">
                    <XCircle size={15} className="text-gray-200 shrink-0" />
                    Filter change
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 line-through">
                    <XCircle size={15} className="text-gray-200 shrink-0" />
                    Priority dispatch
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 line-through">
                    <XCircle size={15} className="text-gray-200 shrink-0" />
                    15% parts discount
                  </li>
                </ul>
                <a
                  href="tel:8187310445"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider border-2 border-[#1D1D1B] text-[#1D1D1B] hover:bg-[#1D1D1B] hover:text-white transition-all duration-200"
                >
                  Join Now
                </a>
              </div>
            </div>

            {/* Comfort Shield — highlighted */}
            <div className="bg-white rounded-3xl border-2 border-[#E30613] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#E30613] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="p-8 border-b border-gray-100 pt-12">
                <div className="text-[10px] font-black text-[#E30613] uppercase tracking-widest mb-3">Comfort Shield</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-[900] text-[#1D1D1B] leading-none">$249</span>
                  <span className="text-gray-400 font-bold text-base mb-1">/year</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Dual system. Best value for most homes.</p>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#E30613] shrink-0" />
                    2 tune-ups per year
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#E30613] shrink-0" />
                    Filter change included
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#E30613] shrink-0" />
                    Priority dispatch
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#E30613] shrink-0" />
                    No emergency markup
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#E30613] shrink-0" />
                    Annual system report
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 line-through">
                    <XCircle size={15} className="text-gray-200 shrink-0" />
                    15% parts discount
                  </li>
                </ul>
                <a
                  href="tel:8187310445"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#E30613] text-white hover:bg-[#1D1D1B] transition-all duration-200"
                >
                  Join Now
                </a>
              </div>
            </div>

            {/* Premium Shield */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <div className="text-[10px] font-black text-[#1866B9] uppercase tracking-widest mb-3">Premium Shield</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-[900] text-[#1D1D1B] leading-none">$399</span>
                  <span className="text-gray-400 font-bold text-base mb-1">/year</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Whole home. Every benefit included.</p>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    2 tune-ups per year
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    Filter change included
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    Priority dispatch
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    15% parts discount
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    No emergency markup
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    Free diagnostic visit
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#1866B9] shrink-0" />
                    Annual system report
                  </li>
                </ul>
                <a
                  href="tel:8187310445"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#1866B9] text-white hover:bg-[#1D1D1B] transition-all duration-200"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-6 font-black text-[#1D1D1B] uppercase tracking-tight text-xs w-1/2">
                      Feature
                    </th>
                    <th className="p-6 text-center font-black text-gray-400 uppercase tracking-widest text-[10px]">Basic</th>
                    <th className="p-6 text-center font-black text-[#E30613] uppercase tracking-widest text-[10px] bg-[#E30613]/5">Comfort</th>
                    <th className="p-6 text-center font-black text-[#1866B9] uppercase tracking-widest text-[10px]">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAN_ROWS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="p-6 text-gray-600 font-medium">{row.label}</td>
                      <td className="p-6 text-center">{renderCell(row.basic)}</td>
                      <td className="p-6 text-center bg-[#E30613]/5">{renderCell(row.comfort)}</td>
                      <td className="p-6 text-center">{renderCell(row.premium)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-6 font-black text-[#1D1D1B] text-base">Annual price</td>
                    <td className="p-6 text-center font-[900] text-[#1D1D1B] text-lg">$149</td>
                    <td className="p-6 text-center font-[900] text-[#E30613] text-lg bg-[#E30613]/5">$249</td>
                    <td className="p-6 text-center font-[900] text-[#1866B9] text-lg">$399</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What's in a tune-up */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4 uppercase">
                What's included in a tune-up?
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Every tune-up follows a 25-point checklist. These five are the ones that matter most for preventing breakdowns.
              </p>
              <div className="bg-[#F4F6F8] rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 text-sm font-bold text-[#1D1D1B]">
                  <Shield size={16} className="text-[#E30613]" />
                  90-day warranty on all work performed
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {TUNEUP_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  question={item}
                  answer="Our technician walks you through what they found during this check and documents the results in your service report. If anything looks close to failing, you'll hear about it before it becomes a problem."
                  isOpen={openTuneup === i}
                  onToggle={() => setOpenTuneup(openTuneup === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight mb-4 uppercase">
              Common questions
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Straightforward answers before you sign up.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#E30613]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-[0.95] mb-4 uppercase">
                Join 500+ San Fernando Valley<br />
                homeowners on a Shield plan.
              </h2>
              <p className="text-white/70 text-lg max-w-lg">
                Call us and we'll get you set up in a few minutes. Or book online and we'll call you back to confirm.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:8187310445"
                className="flex items-center gap-2 bg-white text-[#E30613] px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] hover:text-white transition-all duration-300"
              >
                <Phone size={16} />
                (818) 731-0445
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Book Online
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
