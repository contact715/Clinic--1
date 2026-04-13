
import React, { useState } from 'react';
import {
  MapPin, Phone, Star, CheckCircle, Clock, ChevronDown,
  Wrench, Wind, Flame, ThumbsUp, Home, ArrowRight,
} from 'lucide-react';
import { MidCTA } from '../MidCTA';
import { NavigateFn } from '../../App';

interface CityPageProps {
  slug: string;
  navigate: NavigateFn;
}

interface CityStats {
  homes: string;
  years: string;
  rating: string;
}

interface CityData {
  name: string;
  county: string;
  metaTitle: string;
  h1: string;
  tagline: string;
  intro: string;
  neighborhoods: string[];
  hvacChallenge: string;
  serviceHighlight: string;
  localFact: string;
  stats: CityStats;
  faqNearby: string;
}

const CITY_DATA: Record<string, CityData> = {
  'tarzana': {
    name: 'Tarzana',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Tarzana CA | Cool Doc HVAC',
    h1: 'HVAC Service Tarzana, CA',
    tagline: 'The Valley heats up fast. Old AC units heat up even faster.',
    intro: 'Tarzana is mostly single-story ranch homes built in the 1960s and 70s, and a lot of those original AC systems are still running. Some are hanging on. Most are overdue. We service this neighborhood constantly during summer, and we know exactly what to expect when we pull up to a Tarzana address. If your unit is over 15 years old and struggling through July, we can tell you honestly whether a repair makes sense or whether you are throwing money at a system that is done.',
    neighborhoods: ['Tarzana Hills', 'Braemar', 'Corbin Palms', 'Yolanda Avenue corridor', 'Reseda Boulevard strip', 'Tarzana Village'],
    hvacChallenge: 'Aging central AC units in older single-story homes. Many original systems from the 1970s and early 80s are still in place. Ductwork in these homes is often degraded or disconnected in the attic, which kills efficiency and strains whatever system is left.',
    serviceHighlight: 'AC repair and full system replacement. A large share of our Tarzana calls are units that have simply hit the end of their lifespan. We handle the repair-or-replace conversation straight, no upsell pressure.',
    localFact: 'The Tarzana area regularly hits 100-plus degrees in late July and August. A system that barely kept up in May will fail by mid-summer. We see a spike in emergency calls from this zip code every year between July 15 and August 10.',
    stats: { homes: '600+', years: '14', rating: '4.9' },
    faqNearby: 'Yes, we cover Reseda and Canoga Park, both of which border Tarzana. One call covers all of it.',
  },
  'woodland-hills': {
    name: 'Woodland Hills',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Woodland Hills CA | Cool Doc HVAC',
    h1: 'HVAC Service Woodland Hills, CA',
    tagline: 'Larger homes, bigger systems, and July temperatures that catch people off guard.',
    intro: 'Woodland Hills gets brutal in July. The proximity to the Santa Monica Mountains creates extreme heat swings, and homes here tend to be large, which means the HVAC system works harder than in most Valley neighborhoods. A lot of homeowners here have already upgraded to two-zone systems or ductless mini-splits to handle the split between sun-facing rooms and shaded sides. We install and service all of it. If you have a premium system, we work on it properly, not with generic parts and guesswork.',
    neighborhoods: ['El Camino Village', 'Woodland Hills Country Club', 'The Village', 'Walnut Acres', 'Shadow Ranch', 'Woodlake'],
    hvacChallenge: 'Extreme temperature swings between the canyon-adjacent north side of the neighborhood and the flatter south. Large homes with high ceilings demand more from any system. Many houses here have aging ductwork that does not match the upgraded equipment installed in recent years.',
    serviceHighlight: 'Ductless mini-split installation and two-zone system upgrades. Larger homes in this area frequently benefit from zoning, and we design and install multi-zone setups that handle the layout properly.',
    localFact: 'Woodland Hills consistently records some of the highest temperatures in Los Angeles County during heat waves. The September 2020 heat event pushed parts of the 91364 zip code past 115 degrees. Systems without recent service fail in those conditions.',
    stats: { homes: '450+', years: '14', rating: '4.9' },
    faqNearby: 'We cover West Hills and Calabasas regularly. Both are just a short drive from our Woodland Hills service area.',
  },
  'encino': {
    name: 'Encino',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Encino CA | Cool Doc HVAC',
    h1: 'HVAC Service Encino, CA',
    tagline: 'Upscale homes, HOA communities, and HVAC work that has to be done right the first time.',
    intro: 'Encino has a mix of high-end residential and a commercial strip along Ventura Boulevard that keeps us busy year-round. In the residential areas, a lot of homes sit inside HOA communities where equipment placement, noise levels, and exterior appearances are regulated. We know how to work within those requirements without making the job harder than it needs to be. For the commercial side, we handle restaurants, offices, and retail along Ventura with the same urgency we bring to residential calls.',
    neighborhoods: ['Encino Hills', 'Royal Oaks', 'Encino Park', 'Amestoy Estates', 'Lake Encino', 'Ventura Boulevard corridor'],
    hvacChallenge: 'HOA restrictions on equipment placement and exterior modifications in many communities. High-end homes with specific manufacturer preferences and multi-zone systems that require precise calibration rather than general repairs.',
    serviceHighlight: 'Premium system installs and replacements. Encino homeowners frequently request Lennox, Trane, or carrier systems with multi-stage compressors. We carry and install all of them and do proper load calculations before any new equipment goes in.',
    localFact: 'Several Encino HOA communities require permits and board approval for exterior HVAC equipment changes. We handle the permit process and document everything correctly so homeowners do not run into problems later.',
    stats: { homes: '380+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Tarzana and Sherman Oaks, both neighboring Encino. Same-day availability applies to all three.',
  },
  'sherman-oaks': {
    name: 'Sherman Oaks',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Sherman Oaks CA | Cool Doc HVAC',
    h1: 'HVAC Service Sherman Oaks, CA',
    tagline: 'High-density residential means ductless is everywhere. We install and fix all of it.',
    intro: 'Sherman Oaks has more apartments and condos per block than most Valley neighborhoods, and that means ductless mini-split systems are everywhere. Landlords install them to avoid duct retrofits. Condo owners put them in when the central system is shared and unresponsive. We are in Sherman Oaks constantly, servicing both residential units and the commercial stretch along Van Nuys Boulevard and Ventura. Fast turnaround matters here because a tenant without AC or heat is a problem that landlords cannot ignore.',
    neighborhoods: ['Chandler Estates', 'Sherman Oaks Hills', 'Hazeltine Avenue corridor', 'Sepulveda Basin adjacent', 'Riverside Drive strip', 'Ventura-Fulton area'],
    hvacChallenge: 'Multi-unit buildings where only part of the building has a problem, shared systems in older apartment complexes, and condo associations where individual unit access requires coordination. Work has to happen quickly and cleanly.',
    serviceHighlight: 'Ductless mini-split repair and installation. Sherman Oaks has one of the highest concentrations of ductless systems in the Valley. We service Mitsubishi, Daikin, Fujitsu, LG, and Samsung units on a daily basis in this area.',
    localFact: 'California law requires landlords to provide working heating in rental units. Sherman Oaks landlords call us in February when furnaces go down, and in July when AC units fail. We prioritize rental property calls because the legal clock starts ticking immediately.',
    stats: { homes: '520+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Van Nuys and Studio City, both adjacent to Sherman Oaks. One service area, one number to call.',
  },
  'studio-city': {
    name: 'Studio City',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Studio City CA | Cool Doc HVAC',
    h1: 'HVAC Service Studio City, CA',
    tagline: 'Older Craftsman homes, home studios, and the people who absolutely cannot have the AC go down.',
    intro: 'Studio City attracts entertainment industry homeowners, and a lot of them have converted rooms into home offices, recording spaces, or edit suites that generate a lot of heat and require consistent temperature control. The housing stock here is older, with a lot of Craftsman and mid-century homes that were never designed with central air in mind. Retrofitting ductwork into these layouts is something we do regularly, and we know where the problems usually show up. We also get a lot of calls from Ventura Boulevard commercial tenants, restaurants especially, when walk-in coolers or commercial HVAC units act up.',
    neighborhoods: ['Colfax Meadows', 'Fryman Estates', 'Studio Village', 'Laurelwood', 'Woodbridge Park', 'Cahuenga Pass area'],
    hvacChallenge: 'Older home layouts that were not designed for central air. Attics in Craftsman homes are tight and often difficult to run ductwork through. Home office and studio spaces generate significant heat loads that a standard residential system calculation does not account for.',
    serviceHighlight: 'Ductless mini-split installation in older homes and home office cooling solutions. When adding ducts is not practical, a ductless system lets us cool specific rooms without tearing up the house.',
    localFact: 'Studio City sits on the south slope of the Santa Monica Mountains, which creates a microclimate that stays hotter in late afternoon than the flatter Valley. Homes that face west or southwest get direct afternoon sun during the hottest part of the day.',
    stats: { homes: '340+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Sherman Oaks and Toluca Lake, both close neighbors. Toluca Lake in particular has a lot of similar mid-century homes and we work there regularly.',
  },
  'burbank': {
    name: 'Burbank',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Burbank CA | Cool Doc HVAC',
    h1: 'HVAC Service Burbank, CA',
    tagline: 'Commercial and residential, film industry and family homes. We handle both.',
    intro: 'Burbank is one of the more interesting service areas in the Valley because it mixes large commercial operations, media companies, and ordinary residential neighborhoods within a few blocks of each other. The Disney and Warner Bros studio lots and their surrounding support businesses need commercial HVAC that does not fail on a production day. The residential streets south of Magnolia and around Glenoaks Canyon need fast, honest service the same as anywhere else. We are licensed for both and respond to both with the same urgency.',
    neighborhoods: ['Magnolia Park', 'Rancho District', 'Burbank Hills', 'Glenoaks Canyon', 'Downtown Burbank', 'Verdugo Woodlands'],
    hvacChallenge: 'Commercial properties in the media district require systems with very high reliability standards. Residential areas have a range of home ages, from 1940s bungalows to 1980s tract homes, each with different system types and duct configurations.',
    serviceHighlight: 'Commercial HVAC service and preventive maintenance contracts. Burbank businesses, especially in the media industry, need maintenance schedules that prevent emergency failures rather than just respond to them. We offer quarterly and bi-annual service agreements.',
    localFact: 'Burbank sits in a pocket near the Verdugo Mountains that traps heat during inversions. The airport area in particular can be 5 to 8 degrees hotter than downtown Los Angeles during summer afternoons.',
    stats: { homes: '490+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Glendale and North Hollywood, both adjacent to Burbank. All three cities are part of our regular service rotation.',
  },
  'north-hollywood': {
    name: 'North Hollywood',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service North Hollywood CA | Cool Doc HVAC',
    h1: 'HVAC Service North Hollywood, CA',
    tagline: 'The NoHo Arts District keeps growing. The housing stock is all over the map.',
    intro: 'North Hollywood has gone through a lot of change in the past decade and the housing stock reflects it. You have pre-war bungalows next to new mixed-use construction, and landlords managing older rental properties alongside homeowners who just bought and renovated. We see all of it. The variety means we work on older systems from the 70s and 80s alongside brand-new equipment that was installed incorrectly during a renovation. Both need attention, just for different reasons.',
    neighborhoods: ['NoHo Arts District', 'Valley Village', 'Lankershim corridor', 'Toluca Woods', 'Magnolia Woods', 'North Hollywood Park area'],
    hvacChallenge: 'Highly varied housing stock where one block can have a 1940s bungalow and a brand-new apartment building. Rental property landlords often deferred maintenance on older systems, creating systems that need significant work. New construction sometimes has equipment installed by general contractors rather than licensed HVAC specialists.',
    serviceHighlight: 'HVAC system inspection and repair for rental properties and recently renovated homes. We frequently find that newly installed systems in renovated NoHo homes were not sized correctly or commissioned properly after installation.',
    localFact: 'North Hollywood has one of the highest renter populations in the San Fernando Valley. That means a large share of our calls here come from property managers and landlords who need fast response times to stay compliant with tenant habitability requirements.',
    stats: { homes: '410+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Valley Village and Toluca Lake, which are right on the NoHo border. Same-day service applies to all three.',
  },
  'van-nuys': {
    name: 'Van Nuys',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Van Nuys CA | Cool Doc HVAC',
    h1: 'HVAC Service Van Nuys, CA',
    tagline: 'Honest pricing matters here. No upsell, no runaround. Just the repair.',
    intro: 'Van Nuys is a working neighborhood and people here know the difference between a fair price and a padded invoice. We are straight with Van Nuys customers: here is what is wrong, here is what it costs to fix, here is whether the fix makes sense given the age of the system. If a repair is a waste of money, we say so. If it will add years to the unit, we say that too. We have been doing business this way in Van Nuys for years and we keep getting referrals from the same streets because of it.',
    neighborhoods: ['Van Nuys Airport adjacent', 'Sepulveda Boulevard corridor', 'Delano Street area', 'Kester Avenue', 'Balboa Boulevard strip', 'Oxnard Street corridor'],
    hvacChallenge: 'Industrial areas near the airport and auto dealerships along Van Nuys Boulevard have different commercial HVAC needs than the surrounding residential streets. Residential homes are often smaller and older, with window units still common in apartments and some houses.',
    serviceHighlight: 'Affordable AC repair and honest system assessments. Van Nuys customers often call us after getting quotes that seemed too high from other companies. We are frequently able to do the same repair for less, or explain why the more expensive option is actually necessary.',
    localFact: 'Van Nuys Boulevard has one of the highest concentrations of auto dealerships in California. Service bays and showrooms have commercial cooling needs that are very different from standard office HVAC. We work with several dealerships in the area on maintenance contracts.',
    stats: { homes: '550+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Panorama City and Reseda, both close to Van Nuys. One call handles any of these neighborhoods.',
  },
  'northridge': {
    name: 'Northridge',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Northridge CA | Cool Doc HVAC',
    h1: 'HVAC Service Northridge, CA',
    tagline: '1990s rebuilds, suburban sprawl, and systems that are now hitting 30 years old.',
    intro: 'A significant portion of Northridge was rebuilt after the 1994 earthquake, which means there is a large cohort of homes from the mid-1990s. Those HVAC systems are now 28 to 30 years old and entering the phase where major components fail. Compressors, heat exchangers, blower motors. We see a lot of this in Northridge. The conversation is often whether to repair the current system one more time or replace it before it leaves someone without cooling in August. We walk through that decision honestly, without pushing either direction.',
    neighborhoods: ['Northridge Hills', 'Reseda Park adjacent', 'Devonshire corridor', 'Nordhoff Street area', 'Lindley Avenue', 'Northridge Fashion Center vicinity'],
    hvacChallenge: 'Large suburban homes from the 1990s rebuild period are now seeing first-generation system failures. Many homeowners have never replaced the original equipment and are not prepared for the cost. Proper load calculations are critical in this era of home because square footage is large and insulation varies.',
    serviceHighlight: 'Full system replacement and honest repair-or-replace assessments. A lot of Northridge calls become replacement projects when we get there. We carry residential system inventory and can often do same-week installations after a proper assessment.',
    localFact: 'CSUN is in Northridge, and the area around the campus has a mix of student rentals and family homes. We service both and understand the different priorities: speed for rentals, long-term efficiency for owner-occupied homes.',
    stats: { homes: '480+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Granada Hills and Porter Ranch to the north. Both neighborhoods have similar housing stock and similar HVAC needs.',
  },
  'glendale': {
    name: 'Glendale',
    county: 'Los Angeles County',
    metaTitle: 'AC Repair & HVAC Service Glendale CA | Cool Doc HVAC',
    h1: 'HVAC Service Glendale, CA',
    tagline: 'Old bungalows, new construction, and a community that passes referrals through the neighborhood.',
    intro: 'Glendale has a strong Armenian community and word of mouth means everything here. We have built a real presence in Glendale because customers who trust us tell their neighbors. The housing mix ranges from 1920s and 30s bungalows in the Glenoaks and Maple Park areas to newer construction in Adams Hill and the hillside streets above Chevy Chase. Older homes often have gravity furnaces or outdated wall heaters that we convert to modern central systems. Newer homes sometimes have multi-zone setups that were installed during construction and need calibration rather than replacement.',
    neighborhoods: ['Chevy Chase Canyon', 'Adams Hill', 'Maple Park', 'Sparr Heights', 'Rossmoyne', 'Americana on Brand vicinity'],
    hvacChallenge: 'Older homes in the Glenoaks and Maple Park areas often have original gravity furnaces or no central air at all. Adding modern HVAC to a 1930s bungalow requires careful planning to route ductwork without destroying the interior. Hillside homes above Chevy Chase have cooling loads that differ significantly from the flat street grid below.',
    serviceHighlight: 'Ductless mini-split installation in older homes where duct installation is not practical. Many Glendale bungalows get their first real air conditioning through a multi-zone ductless system that we design and install in one or two days.',
    localFact: 'Glendale summers are hot but the hillside areas above Foothill Boulevard catch afternoon breezes that the flat commercial areas do not. Homeowners in the canyon streets sometimes need less cooling capacity than their neighbors just a few blocks downhill.',
    stats: { homes: '420+', years: '14', rating: '4.9' },
    faqNearby: 'We cover Burbank and La Crescenta, both within a short drive. La Crescenta in particular has older hillside homes that are a good match for ductless systems.',
  },
};

const CITY_SERVICES = [
  { icon: Wrench, label: 'AC Repair', desc: 'Fast diagnosis, same-day repair on most calls.', href: '/ac-repair', color: '#E30613' },
  { icon: Flame, label: 'Heating & Furnace', desc: 'Gas furnace, heat pump, and electric heat service.', href: '/heating', color: '#E30613' },
  { icon: Wind, label: 'Ductless Mini-Splits', desc: 'Install or repair any ductless brand or zone configuration.', href: '/ductless', color: '#1866B9' },
  { icon: Home, label: 'Maintenance', desc: 'Annual tune-ups and multi-visit service agreements.', href: '/hvac-maintenance', color: '#0ea5e9' },
];

const FAQ: React.FC<{ city: CityData; slug: string }> = ({ city, slug }) => {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      q: `How fast can you get to ${city.name}?`,
      a: `We dispatch from the San Fernando Valley and ${city.name} is part of our regular service area. Same-day appointments are available most days. For emergencies, we aim for a 2 to 4 hour window. Call (818) 731-0445 and we will give you a real ETA, not a vague window.`,
    },
    {
      q: `What is the most common HVAC problem in ${city.name} homes?`,
      a: city.hvacChallenge,
    },
    {
      q: `Do you service ${city.faqNearby.split('.')[0].replace('Yes, we cover ', '').replace(' and ', ' or ')}?`,
      a: city.faqNearby,
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="font-[700] text-[#1D1D1B] text-sm pr-4">{item.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const CityPage: React.FC<CityPageProps> = ({ slug, navigate }) => {
  const city = CITY_DATA[slug];

  if (!city) {
    const displayName = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return (
      <>
        <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-[#0ea5e9]" />
              <span className="text-[#0ea5e9] font-bold text-xs uppercase tracking-widest">Service Area</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
              HVAC SERVICE<br />
              <span className="text-[#0ea5e9]">{displayName.toUpperCase()}</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mb-10">
              We are working on a dedicated page for {displayName}. In the meantime, call us directly to confirm availability in your area.
            </p>
            <a
              href="tel:8187310445"
              className="inline-flex items-center gap-2.5 bg-[#E30613] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
          </div>
        </section>
        <MidCTA />
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#0ea5e910,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
            <MapPin size={12} className="text-[#0ea5e9]" />
            <span className="text-[#0ea5e9] font-bold text-[10px] uppercase tracking-widest">
              {city.county} — Service Area
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-5">
            HVAC SERVICE<br />
            <span className="text-[#0ea5e9]">{city.name.toUpperCase()}, CA</span>
          </h1>

          <p className="text-white/60 text-xl max-w-2xl mb-10 leading-relaxed">
            {city.tagline}
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
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book Online <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: CheckCircle, label: 'Licensed C-20 Contractor' },
              { icon: Clock, label: 'Same-Day Available' },
              { icon: ThumbsUp, label: 'No Fix, No Fee' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <pill.icon size={13} className="text-[#0ea5e9]" />
                <span className="text-white/70 text-xs font-semibold">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-[900] text-[#1D1D1B] mb-6 tracking-tight leading-tight">
                Your local HVAC team in {city.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                {city.intro}
              </p>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Neighborhoods we cover
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#F4F6F8] rounded-full text-xs font-semibold text-[#1D1D1B]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — call card */}
            <div className="bg-[#1D1D1B] rounded-3xl p-10 text-white">
              <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">
                Call us in {city.name}
              </div>
              <a
                href="tel:8187310445"
                className="text-4xl font-[900] text-white hover:text-[#0ea5e9] transition-colors block mb-3"
              >
                (818) 731-0445
              </a>
              <p className="text-white/50 text-sm mb-2">Mon to Sat: 7am to 8pm</p>
              <p className="text-white/50 text-sm mb-8">Emergency service available 24/7</p>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                className="block w-full text-center bg-[#E30613] text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
              >
                Book a Technician
              </a>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-bold">{city.stats.rating} Google Rating</span>
                <span className="text-white/40 text-sm">— {city.stats.homes} homes served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City HVAC challenges */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-[900] text-[#1D1D1B] mb-3 tracking-tight">
            Why {city.name} homes need expert HVAC
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl">
            Every neighborhood has its own HVAC story. Here is what we see most in {city.name}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="w-11 h-11 rounded-2xl bg-[#E30613]/10 flex items-center justify-center mb-6">
                <Wrench size={20} className="text-[#E30613]" />
              </div>
              <h3 className="text-lg font-[800] text-[#1D1D1B] mb-3">
                The main challenge here
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{city.hvacChallenge}</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="w-11 h-11 rounded-2xl bg-[#1866B9]/10 flex items-center justify-center mb-6">
                <Star size={20} className="text-[#1866B9]" />
              </div>
              <h3 className="text-lg font-[800] text-[#1D1D1B] mb-3">
                Most in-demand service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{city.serviceHighlight}</p>
            </div>
          </div>
          <div className="mt-6 bg-[#1D1D1B] rounded-3xl p-6 flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#0ea5e9]/20 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={16} className="text-[#0ea5e9]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Local knowledge</p>
              <p className="text-white/80 text-sm leading-relaxed">{city.localFact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-[900] text-[#1D1D1B] mb-3 tracking-tight">
            Services in {city.name}
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl">
            Same-day appointments available. All brands, all system types.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITY_SERVICES.map((svc, i) => (
              <a
                key={i}
                href={svc.href}
                onClick={(e) => { e.preventDefault(); navigate(svc.href); }}
                className="bg-[#F4F6F8] rounded-3xl p-8 border border-gray-200 hover:-translate-y-1 hover:bg-white transition-all duration-300 group cursor-pointer block"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                >
                  <svc.icon size={22} />
                </div>
                <h3 className="text-lg font-[800] text-[#1D1D1B] mb-2">{svc.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                <div
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide"
                  style={{ color: svc.color }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: city.stats.homes, label: `Homes served in ${city.name}` },
              { value: city.stats.years + ' yrs', label: 'In the San Fernando Valley' },
              { value: city.stats.rating, label: 'Google rating' },
              { value: '2-4 hrs', label: 'Average response time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-[900] text-white mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-[900] text-[#1D1D1B] mb-3 tracking-tight">
              Questions about {city.name} service
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Straight answers to what people in {city.name} ask us most.
            </p>
            <FAQ city={city} slug={slug} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#E30613]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight mb-4">
            Need HVAC service in {city.name}?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            We are in {city.name} regularly. Same-day dispatch, upfront pricing, and no fix means no charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2.5 bg-white text-[#E30613] px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] hover:text-white transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-[#E30613] transition-all duration-200"
            >
              Book Online <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <MidCTA />
    </>
  );
};
