
import React from 'react';
import { Phone, ArrowRight, ShieldCheck, FileText, AlertCircle, Wind, Flame, Snowflake, Wrench } from 'lucide-react';
import { NavigateFn } from '../../App';

interface PricingPageProps {
  navigate: NavigateFn;
}

interface PricingRow {
  service: string;
  from: string;
}

interface PricingSection {
  title: string;
  icon: React.ElementType;
  color: string;
  rows: PricingRow[];
}

const PRICING_SECTIONS: PricingSection[] = [
  {
    title: 'AC & Cooling',
    icon: Wind,
    color: '#0ea5e9',
    rows: [
      { service: 'AC Diagnostic',               from: '$89' },
      { service: 'Refrigerant Recharge (R-410A)', from: '$150' },
      { service: 'Capacitor Replacement',        from: '$175' },
      { service: 'Contactor Replacement',        from: '$195' },
      { service: 'Evaporator Coil Cleaning',     from: '$225' },
      { service: 'Condenser Coil Cleaning',      from: '$195' },
      { service: 'AC Repair (general)',          from: '$225' },
      { service: 'AC Unit Replacement (2-ton)',  from: '$3,200' },
      { service: 'AC Unit Replacement (3-ton)',  from: '$3,800' },
      { service: 'AC Unit Replacement (4-ton)',  from: '$4,500' },
    ],
  },
  {
    title: 'Heating & Furnace',
    icon: Flame,
    color: '#E30613',
    rows: [
      { service: 'Furnace Diagnostic',            from: '$89' },
      { service: 'Ignitor Replacement',           from: '$225' },
      { service: 'Gas Valve Replacement',         from: '$375' },
      { service: 'Heat Exchanger Inspection',     from: '$195' },
      { service: 'Furnace Tune-Up',               from: '$119' },
      { service: 'Furnace Replacement (80K BTU)', from: '$2,800' },
    ],
  },
  {
    title: 'Ductless Mini-Splits',
    icon: Snowflake,
    color: '#1866B9',
    rows: [
      { service: 'Mini-Split Diagnostic',             from: '$89' },
      { service: 'Single-Zone Installation',          from: '$2,200' },
      { service: 'Multi-Zone (2-zone) Installation',  from: '$3,800' },
      { service: 'Annual Service',                    from: '$149' },
    ],
  },
  {
    title: 'Maintenance',
    icon: Wrench,
    color: '#FDC506',
    rows: [
      { service: 'Annual Tune-Up (single system)',    from: '$119' },
      { service: 'Annual Tune-Up (dual system)',      from: '$189' },
      { service: 'Cool Doc Shield Basic',             from: '$149/yr' },
      { service: 'Cool Doc Shield Comfort',           from: '$249/yr' },
      { service: 'Cool Doc Shield Premium',           from: '$399/yr' },
    ],
  },
];

const PRICING_NOTES = [
  { icon: FileText, text: 'Written quote before any work begins — no verbal estimates.' },
  { icon: ShieldCheck, text: 'No hidden fees. The quote you approve is the price you pay.' },
  { icon: ShieldCheck, text: 'Parts come with a 90-day warranty on all repairs.' },
  { icon: AlertCircle, text: 'Financing available for qualifying repairs and installations.' },
  { icon: ShieldCheck, text: 'Cool Doc Shield members receive reduced rates on all services.' },
];

export const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-28 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1866B912,transparent_55%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#E3061310,transparent_55%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <FileText size={11} />
            Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6 max-w-3xl uppercase">
            HONEST PRICING.<br />
            <span className="text-[#FDC506]">NO SURPRISES.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-6">
            We publish our rates because we have nothing to hide. Exact quotes are given after diagnosis. These are starting points.
          </p>
          <div className="inline-flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 max-w-xl mb-10">
            <AlertCircle size={16} className="text-[#FDC506] shrink-0 mt-0.5" />
            <p className="text-white/50 text-sm leading-relaxed">
              All pricing is "starting from". Final price depends on system age, brand, and parts. We give you a written quote before any work begins.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              Get a Free Quote
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book a Diagnostic
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Diagnostic Fee Callout */}
      <section className="py-16 bg-[#1D1D1B] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-3">Starting Point</div>
              <div className="text-7xl md:text-8xl font-[900] text-white leading-none mb-3 tracking-tight">$89</div>
              <div className="text-2xl font-[900] text-[#FDC506] uppercase tracking-tight mb-4">Diagnostic Fee</div>
              <p className="text-white/60 text-lg max-w-lg leading-relaxed">
                Applied toward your repair if you proceed. If we can't find or fix the issue, you don't pay for the diagnostic.
              </p>
              <p className="text-white/30 text-xs mt-3">
                Service call fee may apply for specialized assessments outside standard diagnostic scope.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <a
                href="tel:8187310445"
                className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300 whitespace-nowrap"
              >
                <Phone size={16} />
                Schedule Diagnostic
              </a>
              <p className="text-white/30 text-xs text-center">Same-day appointments available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4 uppercase">
              Service pricing
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Starting prices for common services. Your technician gives you a firm quote on-site before any work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRICING_SECTIONS.map((section, si) => {
              const Icon = section.icon;
              return (
                <div key={si} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                  <div
                    className="px-8 py-6 flex items-center gap-3"
                    style={{ backgroundColor: `${section.color}10`, borderBottom: `1px solid ${section.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${section.color}20`, color: section.color }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3
                      className="font-[900] text-lg uppercase tracking-tight"
                      style={{ color: section.color }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {section.rows.map((row, ri) => (
                      <div key={ri} className="flex items-center justify-between px-8 py-4 hover:bg-gray-50 transition-colors">
                        <span className="text-sm font-medium text-gray-700">{row.service}</span>
                        <div className="flex items-center gap-2 shrink-0 ml-4">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">from</span>
                          <span className="font-[900] text-base text-[#1D1D1B]">{row.from}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-20 bg-[#F4F6F8] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-[900] text-[#1D1D1B] tracking-tight mb-10 uppercase text-center">
              Before you call
            </h2>
            <div className="space-y-4">
              {PRICING_NOTES.map((note, i) => {
                const NoteIcon = note.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-200 shadow-sm">
                    <NoteIcon size={16} className="text-[#1D1D1B] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {note.text}
                      {note.text.includes('Financing') && (
                        <>
                          {' '}
                          <button
                            onClick={() => navigate('/financing')}
                            className="text-[#1866B9] font-bold hover:underline"
                          >
                            See financing options.
                          </button>
                        </>
                      )}
                      {note.text.includes('Shield members') && (
                        <>
                          {' '}
                          <button
                            onClick={() => navigate('/membership')}
                            className="text-[#E30613] font-bold hover:underline"
                          >
                            See Shield plans.
                          </button>
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-[0.95] mb-4 uppercase">
                Get your exact quote.<br />
                <span className="text-[#FDC506]">Free. No obligation.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg leading-relaxed">
                Prices vary by system age, brand, and parts availability. Call us or book online and we'll give you a firm written quote before any work starts.
              </p>
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
