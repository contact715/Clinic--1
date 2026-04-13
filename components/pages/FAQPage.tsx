
import React, { useState } from 'react';
import { Plus, Minus, Phone, Wind, Flame, Wrench, DollarSign, MessageCircle } from 'lucide-react';
import { NavigateFn } from '../../App';

interface FAQPageProps {
  navigate: NavigateFn;
}

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  items: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'ac-cooling',
    label: 'AC & Cooling',
    icon: <Wind size={18} />,
    color: '#0ea5e9',
    items: [
      {
        q: 'Why is my AC blowing warm air?',
        a: 'Warm air is usually caused by one of three things: a refrigerant leak that has dropped the charge below what the system needs to cool properly, a dirty evaporator or condenser coil blocking heat transfer, or a failed compressor. In some cases it\'s as simple as a tripped breaker on the outdoor unit while the air handler keeps running. A technician can diagnose the root cause in about 30 minutes.',
      },
      {
        q: 'How long does an AC repair typically take?',
        a: 'Most repairs are completed in one visit. A refrigerant recharge takes 1-2 hours including diagnostics. Capacitor or contactor replacements are under an hour. Coil cleaning is about 90 minutes. The longer jobs, like compressor replacement or evaporator coil swap, typically run 3-5 hours and may require a parts order if we don\'t have your unit\'s specific part on the truck.',
      },
      {
        q: 'What causes a frozen AC coil?',
        a: 'Frozen coils almost always come down to restricted airflow or low refrigerant. Airflow problems happen when filters are clogged, return vents are blocked, or the blower motor is failing. When airflow drops, the coil gets too cold and moisture in the air freezes on the fins. Low refrigerant has the same effect. If you see ice on your unit, turn it off and run just the fan to thaw it before calling us.',
      },
      {
        q: 'How do I know if my AC needs refrigerant?',
        a: 'Signs of low refrigerant include warm air from the supply vents, ice buildup on the copper lines near the indoor unit, hissing or bubbling sounds near the refrigerant lines, and higher-than-normal electric bills as the system works harder to compensate. Refrigerant doesn\'t deplete on its own, so if your system is low, there\'s a leak somewhere that needs to be found and repaired before a recharge will last.',
      },
      {
        q: 'Do you service all AC brands?',
        a: 'Yes. We work on all major brands including Trane, Carrier, Lennox, Rheem, York, Goodman, Amana, Mitsubishi, Daikin, Fujitsu, LG, Samsung, and others. Our trucks carry parts for the most common units in the Valley. Less common brands may require a parts order but that\'s rare.',
      },
      {
        q: 'What is your same-day AC repair policy?',
        a: 'If you call before noon on a weekday or Saturday, we\'ll do our best to have a technician at your home that same day. We don\'t guarantee same-day for every situation because our schedule can fill up on hot days, but it\'s our default goal. Emergency calls after hours are always accommodated, though they carry an after-hours fee that we\'ll tell you upfront before dispatching.',
      },
    ],
  },
  {
    id: 'heating',
    label: 'Heating & Furnaces',
    icon: <Flame size={18} />,
    color: '#E30613',
    items: [
      {
        q: 'Why is my furnace making a banging noise?',
        a: 'A single bang when the furnace fires up is usually delayed ignition, where gas builds up for a moment before igniting. This puts stress on the heat exchanger over time and shouldn\'t be ignored. Repeated banging or rattling during operation often points to a cracked heat exchanger, loose components, or expanding metal ducts. A cracked heat exchanger is a safety issue because it can allow carbon monoxide to enter your living space, so get that inspected immediately.',
      },
      {
        q: 'How long does a furnace last?',
        a: 'A well-maintained gas furnace typically lasts 15-20 years. Heat exchangers can fail earlier if the system has run with dirty filters, restricted airflow, or frequent overheating. After 15 years, repair-or-replace math usually favors replacement because efficiency has dropped and major components are at the end of their reliable service life. We\'ll give you an honest assessment based on what we find, not what generates the bigger ticket.',
      },
      {
        q: 'Can you repair a heat pump?',
        a: 'Yes. Heat pumps are a significant portion of our work. We diagnose and repair reversing valve failures, refrigerant leaks, defrost board issues, compressor problems, and auxiliary heat strip failures. Heat pump diagnostics require understanding the system in both heating and cooling modes, which not every tech is comfortable with, but it\'s standard for our team.',
      },
      {
        q: 'What\'s the difference between a heat pump and a furnace?',
        a: 'A furnace generates heat by burning gas. A heat pump moves heat from outside air into your home using refrigerant, similar to how an AC works in reverse. Heat pumps are more efficient in mild climates like Los Angeles because they transfer heat rather than creating it. The efficiency advantage shrinks in very cold weather, which is less of a concern here. Heat pumps also provide cooling in summer, so it\'s a single system for year-round comfort.',
      },
      {
        q: 'Why is my heater turning on and off frequently?',
        a: 'Short cycling in a furnace is usually caused by overheating triggered by restricted airflow, a dirty filter, or blocked supply or return vents. The high-limit switch shuts the burner down before damage occurs, then restarts it once things cool down. It can also point to an oversized furnace that heats the space too quickly and cycles off before completing a full run. Check your filter first, and if the problem persists, a tech visit will identify the cause quickly.',
      },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Tune-Ups',
    icon: <Wrench size={18} />,
    color: '#1866B9',
    items: [
      {
        q: 'How often should I service my HVAC system?',
        a: 'Once a year for single-use systems. If you use your system for both heating and cooling, which most people in LA do, twice a year is the right cadence. A spring tune-up before the cooling season and a fall check before heating season. This keeps both modes running at their best and lets us catch wear items before they fail at the worst time.',
      },
      {
        q: 'What does an HVAC tune-up include?',
        a: 'Our tune-up covers: inspecting and cleaning the condenser coil, checking refrigerant charge and looking for leaks, testing capacitors and contactors, measuring voltage and amperage on the compressor and motors, cleaning the blower wheel if accessible, flushing the condensate drain, checking thermostat calibration, inspecting the heat exchanger for cracks, testing the igniter and flame sensor on gas systems, and running the system through full heating and cooling cycles while monitoring temperatures.',
      },
      {
        q: 'What are the benefits of a maintenance plan?',
        a: 'The main benefit is catching problems before they become emergency calls. A failed capacitor found during a spring tune-up costs $80-150. That same capacitor failing in August, when you\'re waiting three days for service and the house is 90 degrees, is a much bigger problem. Maintenance plan members also get priority scheduling, discounted repair rates, and no after-hours fees for emergency calls.',
      },
      {
        q: 'How often should I change my air filter?',
        a: 'Every 30-45 days for Valley homes, particularly if you have pets, if anyone in the house has allergies, or if you\'re near any construction. The dust and particulate load in the San Fernando Valley is higher than what filter manufacturers account for when they print "replace every 90 days" on the packaging. A clogged filter is the single most common cause of system problems we see on service calls.',
      },
      {
        q: 'Can regular maintenance prevent breakdowns?',
        a: 'Not all of them, but most of the common ones, yes. Capacitors, contactors, belts, filters, coils, drain lines, and ignition components are all items that show wear before they fail completely. A tech who\'s checking those during a tune-up will catch a capacitor reading low before it fails, or a drain line that\'s starting to build up algae before it overflows. We can\'t prevent compressor failures that happen without warning, but those are genuinely rare in systems that have been maintained.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Scheduling',
    icon: <DollarSign size={18} />,
    color: '#1D1D1B',
    items: [
      {
        q: 'How much does AC repair cost?',
        a: 'Diagnostic visits are free when paired with any completed repair. The most common repairs run: capacitor replacement $80-150, refrigerant recharge $150-400 depending on the amount needed and refrigerant type, contactor replacement $100-180, coil cleaning $150-250, and evaporator coil replacement $800-1,500 depending on the system. We give you the exact price before touching anything, and you decide whether to proceed.',
      },
      {
        q: 'Do you offer same-day service?',
        a: 'Yes, for most calls placed before noon Monday through Saturday. We run multiple trucks and keep our schedule structured around same-day availability for urgent calls. On extreme heat days the schedule fills faster, but we always triage genuine emergencies. If you\'re calling because the AC is out and you have elderly family or young children in the home, tell us that. It affects how we prioritize.',
      },
      {
        q: 'What is your no-fix, no-fee policy?',
        a: 'If we diagnose your system and cannot repair it for any reason, you do not pay a labor charge. You pay for any parts that were installed, but if we can\'t resolve the issue, we\'re not billing you for our time. We also won\'t recommend a repair we don\'t believe will work. If your system is at end of life and a repair is a short-term patch at best, we\'ll tell you that clearly.',
      },
      {
        q: 'Do you offer financing?',
        a: 'Yes. We work with Synchrony Financial and GreenSky to offer financing on system replacements and larger repairs. Options include 0% APR for 12 months on qualifying purchases, low-monthly-payment plans over 24-60 months, and deferred payment options. Applications take about 2 minutes and decisions are typically instant. We can walk you through the options during your appointment.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We serve the entire San Fernando Valley including Tarzana, Woodland Hills, Calabasas, Encino, Sherman Oaks, Van Nuys, Reseda, Northridge, Chatsworth, Canoga Park, North Hollywood, Burbank, Glendale, and surrounding communities. For commercial accounts we also cover the greater LA area. If you\'re unsure whether we cover your zip code, just call and we\'ll tell you immediately.',
      },
    ],
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle, accentColor }) => {
  return (
    <div
      onClick={onToggle}
      className={`group cursor-pointer bg-white rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'shadow-md border-gray-200 ring-1 ring-black/5'
          : 'shadow-sm border-gray-100 hover:border-gray-300 hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-center justify-between gap-4 p-6">
        <h3 className={`font-[800] text-base leading-snug transition-colors duration-200 ${
          isOpen ? 'text-[#1D1D1B]' : 'text-gray-700 group-hover:text-[#1D1D1B]'
        }`}>
          {item.q}
        </h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300"
          style={isOpen ? { backgroundColor: accentColor, borderColor: accentColor, color: 'white' } : {}}
          aria-hidden="true"
        >
          {isOpen
            ? <Minus size={14} />
            : <Plus size={14} className="text-gray-400 group-hover:text-[#1D1D1B] transition-colors" />
          }
        </div>
      </div>

      <div className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-gray-500 leading-relaxed px-6 pb-6">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState('ac-cooling');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeTab) ?? FAQ_CATEGORIES[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenIndex(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1866B910,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-6">
            <MessageCircle size={11} />
            HVAC Knowledge Base
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            GOT<br />
            <span className="text-[#FDC506]">QUESTIONS?</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Real answers to the questions Valley homeowners ask us most. If you don't see yours here, call us directly and a technician will help.
          </p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-14">
            {FAQ_CATEGORIES.map(cat => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1D1D1B] text-white shadow-md'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-[#1D1D1B]'
                  }`}
                >
                  <span style={isActive ? {} : { color: cat.color }}>{cat.icon}</span>
                  {cat.label}
                  <span className={`text-[9px] ${isActive ? 'text-white/50' : 'text-gray-400'}`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Category info */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white"
                  style={{ backgroundColor: currentCategory.color }}
                >
                  {currentCategory.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-[900] text-[#1D1D1B] tracking-tight leading-tight mb-4">
                  {currentCategory.label}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {currentCategory.items.length} questions answered by our technicians.
                </p>

                {/* Call Card */}
                <div className="bg-[#1D1D1B] rounded-3xl p-6 text-white">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Still have a question?</div>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    Our techs pick up. No call trees, no hold music.
                  </p>
                  <a
                    href="tel:8187310445"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E30613] text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-200"
                  >
                    <Phone size={15} />
                    (818) 731-0445
                  </a>
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
                  >
                    Book Online
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              {currentCategory.items.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  item={item}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  accentColor={currentCategory.color}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight mb-4">
            Didn't find your answer?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
            Call us directly. If you reach voicemail, we call back within 30 minutes during business hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-[#E30613] text-white px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-10 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-gray-300 text-[#1D1D1B] hover:bg-[#1D1D1B] hover:text-white hover:border-[#1D1D1B] transition-all duration-200"
            >
              Book a Visit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
