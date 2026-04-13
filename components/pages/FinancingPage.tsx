
import React, { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, CreditCard, Clock, ShieldCheck, Zap, Plus, Minus, BadgeCheck, Calculator, DollarSign, Tag } from 'lucide-react';
import { NavigateFn } from '../../App';

interface FinancingPageProps {
  navigate: NavigateFn;
}

interface PlanCard {
  title: string;
  subtitle: string;
  highlight: string;
  details: string[];
  tag: string;
  color: string;
  bgColor: string;
}

const PLANS: PlanCard[] = [
  {
    title: '0% APR',
    subtitle: 'for 12 Months',
    highlight: 'Best for repairs under $3,000',
    details: [
      'No interest if paid in full within 12 months',
      'Same-day approval in most cases',
      'Available on AC repairs, tune-ups, and parts',
      'Minimum purchase of $500 applies',
    ],
    tag: 'Most Popular',
    color: '#0ea5e9',
    bgColor: '#0ea5e9',
  },
  {
    title: 'Low Monthly',
    subtitle: 'Payments',
    highlight: 'Best for full system replacement',
    details: [
      '24, 36, 48, or 60-month terms available',
      'Rates as low as 6.99% APR for qualified buyers',
      'Covers new AC installs, heat pumps, full HVAC systems',
      'No prepayment penalty',
    ],
    tag: 'Most Flexible',
    color: '#1866B9',
    bgColor: '#1866B9',
  },
  {
    title: 'Deferred',
    subtitle: '90 Days Same as Cash',
    highlight: 'Best for planned upgrades',
    details: [
      'No payments for 90 days from date of service',
      'Pay in full before the period ends and pay no interest',
      'Available on purchases over $1,000',
      'Quick online application',
    ],
    tag: 'No Rush',
    color: '#E30613',
    bgColor: '#E30613',
  },
];

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepProps[] = [
  {
    number: '01',
    title: 'Apply Online or Over the Phone',
    description: 'Takes about 2 minutes. We send you a link or walk you through it on the call. Basic information only, no paperwork.',
  },
  {
    number: '02',
    title: 'Get an Instant Decision',
    description: 'Most applications through Synchrony Financial and GreenSky return a decision in seconds. You\'ll know your approved amount and available terms right away.',
  },
  {
    number: '03',
    title: 'Schedule Your Service',
    description: 'Once approved, we book your installation or repair. We don\'t hold your appointment pending financing approval.',
  },
];

const FINANCING_FAQS = [
  {
    q: 'Does applying for financing affect my credit score?',
    a: 'The initial soft pull during pre-qualification does not affect your score. A hard inquiry happens only when you formally accept a financing offer. Both Synchrony Financial and GreenSky use this two-step process so you can check your options without committing.',
  },
  {
    q: 'What credit score do I need to qualify?',
    a: 'GreenSky and Synchrony offer programs for a range of credit profiles. There is no minimum score we can guarantee, but customers with scores above 620 typically qualify for at least one option. We can run a soft pull to show you what\'s available before you decide anything.',
  },
  {
    q: 'Can I use financing on an emergency repair?',
    a: 'Yes. The application is fast enough that we can often get you approved before or during the service visit. If your system goes out and cost is a concern, tell us when you call and we\'ll walk you through the financing process while we dispatch a technician.',
  },
  {
    q: 'What happens if I want to pay it off early?',
    a: 'There is no prepayment penalty on any of our financing programs. If you want to pay off the balance early, you can do so at any time and only pay what you owe. With the deferred payment option, paying in full before 90 days means you pay zero interest.',
  },
];

interface FinancingFAQItemProps {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}

const FinancingFAQItem: React.FC<FinancingFAQItemProps> = ({ item, isOpen, onToggle }) => {
  return (
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
          {item.q}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? 'bg-[#1D1D1B] border-[#1D1D1B] text-white' : 'border-gray-200'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} className="text-gray-400 group-hover:text-[#1D1D1B]" />}
        </div>
      </div>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-gray-500 leading-relaxed px-6 pb-6">{item.a}</p>
        </div>
      </div>
    </div>
  );
};

const LOAN_TERMS = [12, 24, 36, 48, 60] as const;
type LoanTerm = typeof LOAN_TERMS[number];

const APR_OPTIONS: { label: string; value: number; termsAllowed: LoanTerm[] }[] = [
  { label: '0%', value: 0, termsAllowed: [12] },
  { label: '6.99%', value: 6.99, termsAllowed: [12, 24, 36, 48, 60] },
  { label: '9.99%', value: 9.99, termsAllowed: [12, 24, 36, 48, 60] },
  { label: '14.99%', value: 14.99, termsAllowed: [12, 24, 36, 48, 60] },
];

function calcMonthlyPayment(principal: number, termMonths: number, aprPercent: number): number {
  if (aprPercent === 0) return principal / termMonths;
  const r = aprPercent / 12 / 100;
  return (principal * r * Math.pow(1 + r, termMonths)) / (Math.pow(1 + r, termMonths) - 1);
}

const REBATE_CARDS = [
  {
    icon: DollarSign,
    title: 'Federal Tax Credit (IRA)',
    description: 'Up to 30% off qualifying heat pumps and high-efficiency systems. Energy-efficient home improvement credit. Ask us which systems qualify.',
  },
  {
    icon: Tag,
    title: 'SoCal Gas Rebates',
    description: 'Up to $400 for high-efficiency furnace replacement. Must use a participating contractor. We handle the paperwork.',
  },
  {
    icon: DollarSign,
    title: 'LADWP / DWP Rebates',
    description: 'Up to $350 for ENERGY STAR central AC units. Available to LADWP residential customers.',
  },
  {
    icon: Tag,
    title: 'Utility Financing Programs',
    description: "Some utilities offer 0% financing through their own programs. We'll check your eligibility when we quote your project.",
  },
];

export const FinancingPage: React.FC<FinancingPageProps> = ({ navigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [systemCost, setSystemCost] = useState(5000);
  const [loanTerm, setLoanTerm] = useState<LoanTerm>(36);
  const [selectedAPR, setSelectedAPR] = useState(6.99);

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-28 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1866B912,transparent_55%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0ea5e910,transparent_55%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <CreditCard size={11} />
            Financing Available
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6 max-w-3xl">
            GET COMFORTABLE NOW,<br />
            <span className="text-[#0ea5e9]">PAY OVER TIME.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-10">
            A new AC system can run $4,000 to $12,000. That shouldn't mean sitting in the heat while you save up. We offer real financing options through Synchrony Financial and GreenSky so you can move forward today.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              Call to Apply
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book a Visit
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Financing */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-tight mb-6">
                Don't let budget stop you<br />
                <span className="text-[#0ea5e9]">from being comfortable.</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A broken AC in August isn't a problem you can put off. Neither is a failing furnace in January. But the upfront cost of HVAC equipment can make it feel like you don't have options.
                </p>
                <p>
                  Our financing programs through Synchrony Financial and GreenSky are built for exactly this situation. Fast approvals, flexible terms, and no prepayment penalties. You get the system you need, installed the same week.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: Zap, label: 'Same-day approval', color: '#FDC506' },
                  { icon: ShieldCheck, label: 'No hidden fees', color: '#0ea5e9' },
                  { icon: CreditCard, label: 'Flexible terms', color: '#1866B9' },
                  { icon: BadgeCheck, label: 'No prepay penalty', color: '#E30613' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F4F6F8] rounded-2xl border border-gray-100">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}18`, color: item.color }}
                    >
                      <item.icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-[#1D1D1B]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner logos / trust block */}
            <div className="bg-[#F4F6F8] rounded-3xl p-10 border border-gray-200">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Financing Partners</div>
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex items-center justify-between">
                  <div>
                    <div className="font-[900] text-lg text-[#1D1D1B]">Synchrony Financial</div>
                    <div className="text-sm text-gray-500">Home improvement financing leader</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1866B9]/10 flex items-center justify-center">
                    <CreditCard size={20} className="text-[#1866B9]" />
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 flex items-center justify-between">
                  <div>
                    <div className="font-[900] text-lg text-[#1D1D1B]">GreenSky</div>
                    <div className="text-sm text-gray-500">Home services financing specialist</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
                    <CreditCard size={20} className="text-[#0ea5e9]" />
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 leading-relaxed">
                Financing is subject to credit approval. Terms and rates vary by applicant and program. We'll show you your options before you commit to anything.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Three ways to finance
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every situation is different. We'll help you pick the plan that fits your timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="p-2">
                  <div
                    className="rounded-2xl p-8 text-white relative overflow-hidden"
                    style={{ backgroundColor: plan.bgColor }}
                  >
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/20 text-white text-[9px] font-bold uppercase tracking-wider">
                      {plan.tag}
                    </div>
                    <div className="text-5xl font-[900] leading-none mb-1">{plan.title}</div>
                    <div className="text-white/80 font-bold text-lg">{plan.subtitle}</div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div
                    className="text-sm font-bold mb-6 px-4 py-2 rounded-xl inline-block"
                    style={{ backgroundColor: `${plan.color}12`, color: plan.color }}
                  >
                    {plan.highlight}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: plan.color }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:8187310445"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: plan.color }}
                  >
                    <Phone size={14} />
                    Apply by Phone
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Calculator */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
              <Calculator size={11} />
              Payment Estimator
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight">
              ESTIMATE YOUR PAYMENT
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
            {/* System Cost Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-white font-[800] text-sm uppercase tracking-wider">System Cost</label>
                <span className="text-[#E30613] font-[900] text-xl">${systemCost.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={15000}
                step={100}
                value={systemCost}
                onChange={(e) => setSystemCost(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#E30613] bg-white/10"
              />
              <div className="flex justify-between text-white/30 text-xs mt-2">
                <span>$500</span>
                <span>$15,000</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-white font-[800] text-sm uppercase tracking-wider mb-4">Loan Term</label>
              <div className="flex flex-wrap gap-3">
                {LOAN_TERMS.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setLoanTerm(term);
                      const currentAPROption = APR_OPTIONS.find((a) => a.value === selectedAPR);
                      if (currentAPROption && !currentAPROption.termsAllowed.includes(term)) {
                        setSelectedAPR(6.99);
                      }
                    }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider border transition-all duration-200 ${
                      loanTerm === term
                        ? 'bg-[#E30613] border-[#E30613] text-white'
                        : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {term} mo
                  </button>
                ))}
              </div>
            </div>

            {/* APR */}
            <div>
              <label className="block text-white font-[800] text-sm uppercase tracking-wider mb-4">APR</label>
              <div className="flex flex-wrap gap-3">
                {APR_OPTIONS.map((option) => {
                  const isDisabled = !option.termsAllowed.includes(loanTerm);
                  const isSelected = selectedAPR === option.value && !isDisabled;
                  return (
                    <button
                      key={option.value}
                      disabled={isDisabled}
                      onClick={() => !isDisabled && setSelectedAPR(option.value)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider border transition-all duration-200 ${
                        isDisabled
                          ? 'border-white/10 text-white/20 cursor-not-allowed'
                          : isSelected
                          ? 'bg-[#E30613] border-[#E30613] text-white'
                          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {option.label}
                      {option.value === 0 && <span className="ml-1 text-[9px] opacity-60">(12 mo)</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Result */}
            {(() => {
              const effectiveAPR = APR_OPTIONS.find((a) => a.value === selectedAPR && a.termsAllowed.includes(loanTerm))
                ? selectedAPR
                : 6.99;
              const monthly = calcMonthlyPayment(systemCost, loanTerm, effectiveAPR);
              const totalAmount = monthly * loanTerm;
              const totalInterest = totalAmount - systemCost;
              return (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Estimated Monthly Payment</div>
                    <div className="text-6xl font-[900] text-[#E30613]">
                      ${Math.ceil(monthly).toLocaleString()}
                    </div>
                    <div className="text-white/40 text-sm mt-1">per month for {loanTerm} months</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Total Interest</div>
                      <div className="text-white font-[900] text-xl">${Math.ceil(totalInterest).toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Total Amount</div>
                      <div className="text-white font-[900] text-xl">${Math.ceil(totalAmount).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Disclaimer + CTA */}
            <div className="space-y-4">
              <p className="text-white/30 text-xs leading-relaxed text-center">
                Estimated payment only. Actual rates depend on credit approval through Synchrony Financial or GreenSky. Subject to change without notice.
              </p>
              <div className="flex justify-center">
                <a
                  href="tel:8187310445"
                  className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
                >
                  <Phone size={15} />
                  Apply Now — (818) 731-0445
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
                How it works
              </h2>
              <p className="text-gray-500 text-lg mb-12">
                From application to installation, the process is straightforward. Most people are approved and scheduled within the same day.
              </p>
              <div className="space-y-8">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[#1D1D1B] text-white flex items-center justify-center shrink-0 font-[900] text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-[800] text-[#1D1D1B] text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What financing covers */}
            <div className="bg-[#1D1D1B] rounded-3xl p-10 text-white">
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Financing covers</div>
              <div className="space-y-3">
                {[
                  { label: 'New AC installation', detail: 'Central split systems, package units' },
                  { label: 'Furnace replacement', detail: 'Gas and electric, all major brands' },
                  { label: 'Ductless mini-split install', detail: 'Single and multi-zone systems' },
                  { label: 'Full HVAC system replacement', detail: 'Air handler, condenser, coil, thermostat' },
                  { label: 'Heat pump installation', detail: 'Including cold-climate heat pumps' },
                  { label: 'Ductwork repair or replacement', detail: 'Sealing, insulation, full duct replacement' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
                    <CheckCircle size={16} className="text-[#0ea5e9] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">{item.label}</div>
                      <div className="text-white/50 text-xs mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebates & Utility Programs */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              SAVE MORE WITH REBATES
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Federal tax credits and utility rebates can reduce your out-of-pocket cost by $1,000–$3,000 or more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {REBATE_CARDS.map((card, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-[#E30613]/10 flex items-center justify-center shrink-0">
                  <card.icon size={20} className="text-[#E30613]" />
                </div>
                <div>
                  <h3 className="font-[800] text-[#1D1D1B] text-base mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{card.description}</p>
                  <span className="text-[#E30613] text-xs font-bold uppercase tracking-wider">Ask Us About This</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Rebate amounts and eligibility change. We'll confirm current programs when we quote your project. Call{' '}
            <a href="tel:8187310445" className="text-[#E30613] font-bold hover:underline">(818) 731-0445</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
              Financing questions
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              The questions we get asked most before customers apply.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FINANCING_FAQS.map((item, idx) => (
              <FinancingFAQItem
                key={idx}
                item={item}
                isOpen={openFAQ === idx}
                onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-[0.95] mb-4">
                Application takes<br />
                <span className="text-[#FDC506]">2 minutes.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg">
                Call us and we'll walk you through the options while booking your appointment. Or fill out the contact form and we'll call you back.
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm text-white/50 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#0ea5e9]" />
                  Instant decision
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#0ea5e9]" />
                  Soft pull to check options
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:8187310445"
                className="flex items-center gap-2 bg-[#E30613] text-white px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
              >
                <Phone size={16} />
                (818) 731-0445
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Fill Out Form
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
