
import React, { useState, useEffect } from 'react';
import {
  Check, Phone, ArrowRight, Thermometer, Flame, Wind, ShieldCheck,
  AlertTriangle, ChevronDown, ChevronUp,
} from 'lucide-react';
import { MidCTA } from '../MidCTA';
import { NavigateFn } from '../../App';

interface ServicePageProps {
  service: string;
  navigate: NavigateFn;
}

interface WarningSign {
  symptom: string;
  detail: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface RelatedService {
  label: string;
  href: string;
  iconName: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
  warningSigns: WarningSign[];
  faq: FAQ[];
  relatedServices: RelatedService[];
}

const RELATED_ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={20} />,
  Wind: <Wind size={20} />,
  Thermometer: <Thermometer size={20} />,
  Flame: <Flame size={20} />,
};

const SERVICE_DATA: Record<string, ServiceData> = {
  'ac-repair': {
    title: 'AC Repair & Installation',
    subtitle: 'Fast, reliable air conditioning repair for all brands and systems.',
    description:
      'Whether your AC is blowing warm air, making strange noises, or not turning on at all, we diagnose it right the first time. We service central AC systems, mini-splits, and package units across the San Fernando Valley.',
    icon: <Thermometer size={32} />,
    accentColor: '#E30613',
    benefits: [
      'Same-day service available for urgent calls',
      'All brands including Trane, Carrier, Lennox, Rheem, and Goodman',
      'Refrigerant recharge and leak repair',
      'Compressor, capacitor, and condenser coil replacement',
      'No fix, no fee guarantee',
      '90-day warranty on all parts and labor',
    ],
    steps: [
      {
        title: 'Diagnose',
        desc: 'Our tech arrives and runs a full diagnostic to identify the root cause, not just the symptom.',
      },
      {
        title: 'Quote',
        desc: 'You get a clear, upfront price before we touch anything. No surprises.',
      },
      {
        title: 'Repair',
        desc: 'We fix it with quality parts and test everything before we leave.',
      },
    ],
    warningSigns: [
      { symptom: 'AC blowing warm air', detail: 'Could be a refrigerant leak, failed compressor, or a reversing valve stuck in heat mode.' },
      { symptom: 'Loud rattling or banging', detail: 'Usually a loose component in the outdoor unit or a failing blower wheel inside.' },
      { symptom: 'Ice forming on the unit', detail: 'Ice on refrigerant lines or the coil points to low airflow or low refrigerant — both need attention.' },
      { symptom: 'Water pooling near the unit', detail: 'A blocked condensate drain. Left alone, it causes water damage and mold in the air handler.' },
      { symptom: 'Electric bill spiking unexpectedly', detail: 'A system losing refrigerant or running with a dirty condenser coil works longer hours for the same output.' },
      { symptom: "System won't turn on", detail: 'Could be a failed capacitor, contactor, or thermostat issue. Inexpensive to fix if caught early.' },
    ],
    faq: [
      {
        q: 'How much does AC repair cost?',
        a: 'Most repairs in the San Fernando Valley run $150 to $650 depending on the part and labor involved. Capacitor replacements are on the low end. Compressor work is on the high end. We give you the exact price before starting anything.',
      },
      {
        q: 'Can you fix my AC the same day?',
        a: "Yes, for most repairs. We carry common parts on the truck. If your system needs a less common component, we source it quickly and schedule a follow-up. Call early in the day for the best chance at same-day service.",
      },
      {
        q: 'Should I repair or replace my AC unit?',
        a: "If your system is under 10 years old and the repair is straightforward, fix it. If it's past 12 years, uses R-22 refrigerant (discontinued), or has needed multiple repairs recently, replacement usually makes more financial sense. We'll walk you through the numbers.",
      },
    ],
    relatedServices: [
      { label: 'Maintenance Plans', href: '/services/maintenance', iconName: 'ShieldCheck' },
      { label: 'Ductless Mini-Splits', href: '/services/ductless', iconName: 'Wind' },
      { label: 'Air Quality', href: '/services/air-quality', iconName: 'Wind' },
    ],
  },

  'heating': {
    title: 'Heating & Furnace Repair',
    subtitle: 'Gas furnace, heat pump, and electric heating repair for LA homes.',
    description:
      'Cold nights in LA happen. When your heater stops working, we respond fast. We repair all types of residential heating systems including gas furnaces, heat pumps, and electric air handlers.',
    icon: <Flame size={32} />,
    accentColor: '#E30613',
    benefits: [
      '24/7 emergency heating repair',
      'Gas furnace tune-up and safety inspection',
      'Heat pump diagnosis and repair',
      'Igniter, heat exchanger, and blower motor replacement',
      'Carbon monoxide and gas leak checks',
      '90-day warranty on all work',
    ],
    steps: [
      {
        title: 'Inspect',
        desc: 'Full safety inspection of your heating system, including gas connections and heat exchanger.',
      },
      {
        title: 'Diagnose',
        desc: 'We identify the exact component causing the failure and explain the options.',
      },
      {
        title: 'Repair',
        desc: 'Fast repair with quality parts. Most heating jobs done same day.',
      },
    ],
    warningSigns: [
      { symptom: 'No heat when thermostat is set', detail: 'Igniter, flame sensor, or gas valve failure. Common on furnaces over 8 years old.' },
      { symptom: 'Yellow pilot flame instead of blue', detail: 'A yellow flame means incomplete combustion. This is a gas safety issue and should be checked immediately.' },
      { symptom: 'Burning smell when heater runs', detail: 'Can be dust on startup, but a persistent burning smell points to an electrical fault or overheating component.' },
      { symptom: 'System short-cycling', detail: 'Turns on, runs briefly, shuts off, repeats. Usually a dirty flame sensor, overheating limit switch, or low airflow.' },
      { symptom: 'Cold spots in the house', detail: 'Uneven heat distribution often means a duct problem, zoning issue, or blower motor running below capacity.' },
      { symptom: 'Furnace older than 15 years', detail: 'An aging furnace becomes less efficient and more prone to cracked heat exchangers, which can allow combustion gases into living space.' },
    ],
    faq: [
      {
        q: 'How much does furnace repair cost?',
        a: 'Basic repairs like igniter or flame sensor replacement run $150 to $350. Bigger jobs like heat exchanger or blower motor work run $400 to $800. We quote everything upfront.',
      },
      {
        q: 'Is it safe to run a furnace that smells like gas?',
        a: 'No. Turn the furnace off, leave the house, and call your gas company before calling us. A gas smell is a leak until proven otherwise.',
      },
      {
        q: 'How long does a furnace last?',
        a: 'Most gas furnaces last 18 to 25 years in Southern California, where heating loads are lighter than in cold climates. A properly maintained furnace regularly hits the top of that range.',
      },
    ],
    relatedServices: [
      { label: 'Maintenance Plans', href: '/services/maintenance', iconName: 'ShieldCheck' },
      { label: 'Heat Pump Service', href: '/services/heat-pump', iconName: 'Wind' },
      { label: 'HVAC Installation', href: '/services/hvac-installation', iconName: 'Wind' },
    ],
  },

  'maintenance': {
    title: 'HVAC Maintenance Plans',
    subtitle: 'Annual tune-ups to keep your system efficient and your warranty valid.',
    description:
      'Regular maintenance prevents the breakdowns that cost the most. Our annual and bi-annual plans include a full inspection, cleaning, and tune-up of your HVAC system, plus priority scheduling if something does go wrong.',
    icon: <ShieldCheck size={32} />,
    accentColor: '#0ea5e9',
    benefits: [
      'Annual or bi-annual service included',
      'Filter replacement and coil cleaning',
      'Refrigerant level check',
      'Electrical connections tightened and tested',
      'Priority scheduling for plan members',
      'Discount on parts if a repair is needed',
    ],
    steps: [
      {
        title: 'Enroll',
        desc: 'Pick the plan that fits your home. We schedule your first visit at your convenience.',
      },
      {
        title: 'Tune-up',
        desc: 'A thorough inspection and service that keeps your system running at peak efficiency.',
      },
      {
        title: 'Report',
        desc: "You get a written summary of your system's condition and any recommendations.",
      },
    ],
    warningSigns: [
      { symptom: "System hasn't been serviced in 12+ months", detail: 'Annual service is what keeps refrigerant levels, capacitors, and coil condition in check before they cause a failure.' },
      { symptom: 'Energy bills higher than last year', detail: 'A system working harder than it should is usually dirty, low on refrigerant, or has a failing component dragging efficiency down.' },
      { symptom: 'Inconsistent temperatures room to room', detail: 'Can indicate airflow problems, duct leaks, or an oversized system short-cycling before the house reaches even temperature.' },
      { symptom: 'Dusty vents and registers', detail: 'Heavy dust buildup suggests filters are not catching what they should, or the system is pulling in unfiltered air through duct leaks.' },
      { symptom: 'System runs longer to reach set temp', detail: 'A dirty condenser coil, low refrigerant, or reduced blower capacity all cause longer run times for the same output.' },
    ],
    faq: [
      {
        q: 'How often should I service my HVAC system?',
        a: "Once a year is the minimum. Twice a year is better for homes in the Valley that run AC six months and heat a few months. Spring before cooling season and fall before heating season are the right windows.",
      },
      {
        q: "What's included in a tune-up?",
        a: 'Condenser coil cleaning, refrigerant check, capacitor and contactor inspection, electrical connection tightening, evaporator coil check, drain pan and condensate drain clearing, airflow measurement, and a full system cycle test.',
      },
      {
        q: 'Can I do HVAC maintenance myself?',
        a: 'Filter changes and keeping the area around the outdoor unit clear are the homeowner jobs. The electrical, refrigerant, and coil work requires a licensed technician with proper equipment and EPA certification.',
      },
    ],
    relatedServices: [
      { label: 'AC Repair', href: '/services/ac-repair', iconName: 'Thermometer' },
      { label: 'Heating & Furnace', href: '/services/heating', iconName: 'Flame' },
      { label: 'Air Quality', href: '/services/air-quality', iconName: 'Wind' },
    ],
  },

  'ductless': {
    title: 'Ductless Mini-Split Service',
    subtitle: 'Installation and repair for single and multi-zone ductless systems.',
    description:
      'Ductless mini-splits are perfect for older homes, additions, and rooms that need independent climate control. We install and repair all major ductless brands with clean, professional workmanship.',
    icon: <Wind size={32} />,
    accentColor: '#1866B9',
    benefits: [
      'Mitsubishi, Daikin, Fujitsu, LG, and Samsung installations',
      'Single-zone and multi-zone systems',
      'Error code diagnosis and repair',
      'Refrigerant recharge for mini-splits',
      'Indoor air handler and outdoor unit service',
      'Clean install with concealed line sets available',
    ],
    steps: [
      {
        title: 'Site Visit',
        desc: 'We assess the space, recommend the right system size, and walk you through the options.',
      },
      {
        title: 'Install',
        desc: 'Professional installation by certified technicians. Most installs completed in one day.',
      },
      {
        title: 'Commission',
        desc: 'We test every function, verify proper operation, and show you how to use the system.',
      },
    ],
    warningSigns: [
      { symptom: 'Dripping or hissing sounds from the unit', detail: 'Hissing usually means a refrigerant leak. Dripping inside points to a blocked condensate drain.' },
      { symptom: 'Ice forming on the indoor head unit', detail: 'Ice on the indoor coil means low refrigerant or restricted airflow. Running it that way damages the compressor.' },
      { symptom: 'Remote not responding', detail: 'Could be a simple battery issue or a failed control board. The system may also be in a locked mode from a previous error code.' },
      { symptom: 'Musty smell when running', detail: 'Mold growth on the indoor coil or inside the air handler. Common in units that run without regular cleaning.' },
      { symptom: 'Visible mold on the indoor unit', detail: 'Needs immediate cleaning. Mold on the coil or louvers circulates through the room air every time the unit runs.' },
    ],
    faq: [
      {
        q: 'How much does mini-split installation cost?',
        a: 'A single-zone system runs $1,500 to $3,500 installed, depending on the brand and location of the indoor unit. Multi-zone systems start around $4,000 and scale with the number of zones.',
      },
      {
        q: 'How many zones do I need?',
        a: "One zone per room you want to control independently. A two-bedroom addition with a living area typically works well as a two or three zone setup. We'll assess the layout and give you a specific recommendation.",
      },
      {
        q: 'Do mini-splits work in LA winters?',
        a: 'Yes. Most mini-splits are rated down to 5 degrees Fahrenheit for heating. LA winter lows rarely drop below 40 degrees, so a mini-split handles Valley winters without any backup heat needed.',
      },
    ],
    relatedServices: [
      { label: 'AC Repair', href: '/services/ac-repair', iconName: 'Thermometer' },
      { label: 'HVAC Installation', href: '/services/hvac-installation', iconName: 'Wind' },
      { label: 'Air Quality', href: '/services/air-quality', iconName: 'Wind' },
    ],
  },

  'hvac-installation': {
    title: 'HVAC System Installation',
    subtitle: 'New system installation by factory-trained technicians. Done right the first time.',
    description:
      'Replacing an aging HVAC system is one of the most impactful upgrades you can make to a San Fernando Valley home. We install central air systems, heat pumps, and packaged units from Trane, Carrier, Lennox, Rheem, and Goodman. We size the system correctly using load calculations, not guesswork.',
    icon: <Wind size={32} />,
    accentColor: '#1866B9',
    benefits: [
      'Free in-home assessment and accurate system sizing (Manual J calculation)',
      'All major brands: Trane, Carrier, Lennox, Rheem, Goodman, York',
      'Includes removal and disposal of your old system',
      'Proper permits pulled and inspection scheduled',
      'Manufacturer warranty protection — we install per factory specs',
      'Financing available — 0% APR options on approved credit',
    ],
    steps: [
      {
        title: 'Assessment',
        desc: 'We visit your home, measure the space, evaluate insulation and ductwork, and calculate the right system size. No upselling, just the right fit.',
      },
      {
        title: 'Install Day',
        desc: 'Our crew arrives on time with all equipment. Most residential installs take 4 to 8 hours. We protect your floors and clean up completely.',
      },
      {
        title: 'Commissioning',
        desc: "We test the system, verify airflow and refrigerant charge, register the warranty, and walk you through the controls before we leave.",
      },
    ],
    warningSigns: [
      { symptom: 'System over 15 years old', detail: 'Most Valley HVAC systems run 12 to 15 years at peak efficiency. Past that, efficiency drops and repair frequency climbs.' },
      { symptom: 'Frequent breakdowns', detail: 'Two or more repairs in a season is a pattern, not bad luck. The system is aging out.' },
      { symptom: 'R-22 refrigerant (discontinued)', detail: 'R-22 production ended in 2020. Recharging a leaking R-22 system now costs $80 to $150 per pound. Replacement is usually the better call.' },
      { symptom: 'Energy bills 30% higher than neighbors', detail: 'An aging system at degraded efficiency can cost significantly more to run than a new system sized correctly for your home.' },
      { symptom: "System can't maintain temperature on hot days", detail: 'A system that never catches up when it hits 100 outside is either undersized, low on refrigerant, or past its useful life.' },
    ],
    faq: [
      {
        q: 'How long does HVAC installation take?',
        a: 'Most residential replacements take 4 to 8 hours. A straightforward swap of existing equipment is on the shorter end. Installs that also involve ductwork modifications or electrical upgrades take longer.',
      },
      {
        q: 'What size system do I need?',
        a: "We calculate this using Manual J load analysis. Square footage is one input. We also factor in your ceiling height, insulation, window area, and orientation. Don't let a contractor size your system by square footage alone.",
      },
      {
        q: 'What brands do you install?',
        a: 'Trane, Carrier, Lennox, Rheem, Goodman, and York. We recommend based on your budget, efficiency goals, and the specific equipment that fits your home correctly.',
      },
    ],
    relatedServices: [
      { label: 'Maintenance Plans', href: '/services/maintenance', iconName: 'ShieldCheck' },
      { label: 'Heat Pump Service', href: '/services/heat-pump', iconName: 'Wind' },
      { label: 'Ductless Mini-Splits', href: '/services/ductless', iconName: 'Wind' },
    ],
  },

  'heat-pump': {
    title: 'Heat Pump Repair & Installation',
    subtitle: "Year-round comfort from a single system. Heat pumps work well in Southern California's mild climate.",
    description:
      'Heat pumps are efficient for both heating and cooling, which makes them a great fit for San Fernando Valley homes. They pull heat from outside air rather than generating it, using far less energy than gas furnaces. We repair all major heat pump brands and install new systems sized for your home.',
    icon: <Wind size={32} />,
    accentColor: '#0ea5e9',
    benefits: [
      'Heat pump repair for all brands: Carrier, Trane, Lennox, Bosch, Mitsubishi',
      'New heat pump installation with proper load calculation',
      'Defrost cycle diagnosis, a common heat pump problem',
      'Refrigerant recharge and leak detection',
      'Dual-fuel hybrid system installation (heat pump + gas backup)',
      'Energy efficiency review, qualify for utility rebates in LA',
    ],
    steps: [
      {
        title: 'Diagnosis',
        desc: 'Heat pumps have unique failure modes: reversing valve issues, defrost problems, compressor failures. Our techs are trained specifically on heat pump systems.',
      },
      {
        title: 'Repair or Quote',
        desc: 'We give you a clear repair cost or a replacement quote with options. No pressure, just the facts.',
      },
      {
        title: 'Service',
        desc: "Repair or install, we test in both heating and cooling mode before we're done. No callbacks.",
      },
    ],
    warningSigns: [
      { symptom: 'Stuck in heating or cooling mode only', detail: 'The reversing valve controls which direction the system runs. A failed reversing valve locks you into one mode.' },
      { symptom: 'Ice buildup in non-freezing weather', detail: "Some frost in cold weather is normal and the defrost cycle handles it. Heavy ice buildup when it's above 40 degrees points to a problem." },
      { symptom: 'Unusual grinding or squealing noise', detail: 'Bearing failure in the outdoor fan motor or compressor. Catching this early is far cheaper than a compressor replacement.' },
      { symptom: 'System not switching modes with seasons', detail: "If you changed to heat mode on the thermostat and the system is still blowing cool air, the reversing valve or control board needs to be checked." },
    ],
    faq: [
      {
        q: 'Are heat pumps worth it in Los Angeles?',
        a: "Yes, more than most climates. LA winters stay mild enough that a heat pump runs at full efficiency without auxiliary heat strip backup. You get both heating and cooling from one system, and utility rebates from LADWP and SCE can offset the installation cost.",
      },
      {
        q: "What's the difference between a heat pump and an AC?",
        a: 'An air conditioner only moves heat one direction, out of the house. A heat pump has a reversing valve that lets it run in either direction, cooling in summer and heating in winter. The hardware is similar. The reversing valve is what makes it a heat pump.',
      },
      {
        q: 'Does a heat pump work when it gets cold?',
        a: "Standard heat pumps lose efficiency below 40 degrees. Cold-climate models work down to 5 degrees with full efficiency. In the Valley where overnight lows rarely drop below 38 to 40 degrees, either type works fine, though we recommend cold-climate models for the margin.",
      },
    ],
    relatedServices: [
      { label: 'HVAC Installation', href: '/services/hvac-installation', iconName: 'Wind' },
      { label: 'Maintenance Plans', href: '/services/maintenance', iconName: 'ShieldCheck' },
      { label: 'Heating & Furnace', href: '/services/heating', iconName: 'Flame' },
    ],
  },

  'air-quality': {
    title: 'Indoor Air Quality Solutions',
    subtitle: 'Filters, UV systems, and ventilation upgrades for healthier air in your home.',
    description:
      "San Fernando Valley air quality is challenging: dust, allergens, wildfire smoke. Your HVAC system is your home's lungs. We install high-MERV filtration, UV germicidal lights, whole-home dehumidifiers, and fresh air ventilation systems that make a real difference for allergy and asthma sufferers.",
    icon: <Wind size={32} />,
    accentColor: '#1866B9',
    benefits: [
      'HEPA and high-MERV filtration upgrades for existing systems',
      'UV-C germicidal lights to reduce mold, bacteria, and viruses in ductwork',
      'Whole-home humidifier and dehumidifier installation',
      'ERV/HRV fresh air ventilation systems',
      'Duct sealing to prevent unfiltered air infiltration',
      'Air quality testing before and after to verify improvement',
    ],
    steps: [
      {
        title: 'Assessment',
        desc: 'We inspect your current filtration, measure air flow, and identify the biggest sources of indoor air quality problems in your specific home.',
      },
      {
        title: 'Recommendation',
        desc: "We suggest the solution that solves your actual problem, not the most expensive upgrade. Sometimes it's just a better filter.",
      },
      {
        title: 'Install & Verify',
        desc: 'Installation is usually done in a few hours. We verify the system is working correctly and explain how to maintain it.',
      },
    ],
    warningSigns: [
      { symptom: 'Frequent allergy symptoms indoors', detail: 'If symptoms are worse at home than outside, your filtration is not capturing the particles that trigger your reactions.' },
      { symptom: 'Visible dust on vents and registers', detail: 'Dust buildup on supply registers means the filter is not catching particles before they circulate through the system.' },
      { symptom: 'Musty or chemical smells when the AC runs', detail: 'Musty points to mold on the evaporator coil or in ductwork. Chemical smells can indicate VOC buildup from off-gassing materials.' },
      { symptom: 'Condensation on windows', detail: 'Persistent window condensation signals high indoor humidity, which promotes mold growth and dust mite activity.' },
      { symptom: 'Family members getting sick more frequently', detail: 'Poor air circulation and inadequate filtration allow airborne pathogens to recirculate through the home continuously.' },
    ],
    faq: [
      {
        q: "What's the best air purifier for an HVAC system?",
        a: 'For most Valley homes, a media filter at MERV 11 to 13 paired with UV-C lights at the coil handles the most common problems: dust, pollen, mold, and bacteria. Whole-home units connected to the air handler outperform portable room units significantly.',
      },
      {
        q: 'Does a whole-home air purifier really work?',
        a: 'Yes, when it is matched correctly to your system. The key is that the filter rating and the airflow your system can handle have to be compatible. A filter that is too restrictive reduces airflow and hurts system performance even while it is improving air quality.',
      },
      {
        q: 'How do I know if my indoor air quality is bad?',
        a: 'Allergy symptoms that are worse at home than outside, persistent dust on surfaces, visible mold anywhere near vents, and musty smells are the main signals. We can also do a baseline air quality measurement before recommending solutions.',
      },
    ],
    relatedServices: [
      { label: 'Maintenance Plans', href: '/services/maintenance', iconName: 'ShieldCheck' },
      { label: 'Ductless Mini-Splits', href: '/services/ductless', iconName: 'Wind' },
      { label: 'AC Repair', href: '/services/ac-repair', iconName: 'Thermometer' },
    ],
  },
};

interface FAQItemProps {
  item: FAQ;
  accentColor: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, accentColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-white text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-[800] text-[#1D1D1B] leading-snug">{item.q}</span>
        <span className="shrink-0" style={{ color: accentColor }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{item.a}</p>
        </div>
      )}
    </div>
  );
};

export const ServicePage: React.FC<ServicePageProps> = ({ service, navigate }) => {
  const data = SERVICE_DATA[service] ?? SERVICE_DATA['ac-repair'];

  useEffect(() => {
    const serviceData = SERVICE_DATA[service];
    if (!serviceData) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceData.title,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Cool Doc HVAC Service",
        "telephone": "+18187310445",
        "areaServed": "San Fernando Valley, CA"
      },
      "description": serviceData.subtitle,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "areaServed": "San Fernando Valley, CA"
      }
    };

    const existing = document.getElementById('service-schema');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'service-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('service-schema');
      if (s) s.remove();
    };
  }, [service]);

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${data.accentColor}10, transparent 60%)` }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border font-bold text-[10px] tracking-widest uppercase mb-6"
            style={{ backgroundColor: `${data.accentColor}10`, borderColor: `${data.accentColor}30`, color: data.accentColor }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: data.accentColor }}></div>
            Cool Doc HVAC Service
          </div>
          <div className="mb-4" style={{ color: data.accentColor }}>
            {data.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            {data.title}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mb-10 leading-relaxed">{data.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2.5 bg-[#E30613] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Free Estimate <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] mb-6 tracking-tight leading-tight">
                What's included
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{data.description}</p>
              <a
                href="tel:8187310445"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: data.accentColor }}
              >
                Call us now <ArrowRight size={16} />
              </a>
            </div>
            <div className="space-y-3">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F4F6F8] border border-gray-100">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${data.accentColor}15` }}
                  >
                    <Check size={13} style={{ color: data.accentColor }} />
                  </div>
                  <span className="text-sm font-medium text-[#1D1D1B]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] mb-16 tracking-tight text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.steps.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-[900] text-xl mx-auto mb-6"
                  style={{ backgroundColor: data.accentColor }}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-[800] text-[#1D1D1B] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border font-bold text-[10px] tracking-widest uppercase mb-4"
              style={{ backgroundColor: '#FDC50610', borderColor: '#FDC50640', color: '#b45309' }}
            >
              <AlertTriangle size={11} />
              Don't ignore these
            </div>
            <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-tight">
              Signs you need {data.title.split('&')[0].trim().toLowerCase()}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.warningSigns.map((sign, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#F4F6F8] border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-[#FDC506]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle size={16} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-[800] text-[#1D1D1B] mb-1">{sign.symptom}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{sign.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] mb-12 tracking-tight text-center">
              Common questions
            </h2>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
                <FAQItem key={i} item={item} accentColor={data.accentColor} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">Have a question not covered here?</p>
              <a
                href="tel:8187310445"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white px-6 py-3 rounded-xl"
                style={{ backgroundColor: data.accentColor }}
              >
                <Phone size={14} />
                Call (818) 731-0445
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-[900] text-[#1D1D1B] mb-8 tracking-tight">You might also need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.relatedServices.map((rel, i) => (
              <button
                key={i}
                onClick={() => navigate(rel.href)}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-[#F4F6F8] hover:border-gray-400 hover:bg-white transition-all duration-200 text-left group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${data.accentColor}12`, color: data.accentColor }}
                >
                  {RELATED_ICON_MAP[rel.iconName] ?? <Wind size={20} />}
                </div>
                <span className="text-sm font-[800] text-[#1D1D1B] group-hover:text-[#1866B9] transition-colors">
                  {rel.label}
                </span>
                <ArrowRight size={14} className="ml-auto text-gray-400 group-hover:text-[#1866B9] transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <MidCTA />
    </>
  );
};
