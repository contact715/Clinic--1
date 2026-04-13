
import React, { useState } from 'react';
import { Star, Phone, ChevronRight, ThumbsUp } from 'lucide-react';
import { NavigateFn } from '../../App';

interface ReviewsPageProps {
  navigate: NavigateFn;
}

type Platform = 'Google' | 'Yelp';
type FilterTab = 'All' | 'Google' | 'Yelp' | 'Verified';

interface Review {
  name: string;
  location: string;
  rating: 5 | 4;
  platform: Platform;
  date: string;
  text: string;
  service: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    name: 'Maria G.',
    location: 'Tarzana',
    rating: 5,
    platform: 'Google',
    date: 'August 2024',
    text: 'Our AC died on a Friday afternoon in July. Called Cool Doc and Alex showed up Saturday morning. He diagnosed a bad capacitor in about 15 minutes, had the part on his truck, and had us cooling again within the hour. Price was exactly what he quoted over the phone. No surprises.',
    service: 'AC Repair',
    verified: true,
  },
  {
    name: 'Tom H.',
    location: 'Woodland Hills',
    rating: 5,
    platform: 'Google',
    date: 'June 2024',
    text: 'Got three quotes for a new AC system. Cool Doc was the most transparent by far. Miguel walked me through every line item, explained why I didn\'t need the premium model the other guys were pushing, and saved me almost $800. Install was clean, no mess left behind. Highly recommend.',
    service: 'AC Installation',
    verified: true,
  },
  {
    name: 'Sandra K.',
    location: 'Encino',
    rating: 5,
    platform: 'Yelp',
    date: 'November 2024',
    text: 'Furnace stopped working the night before Thanksgiving. I wasn\'t expecting anyone to come out but they sent a tech within two hours. Turned out to be a faulty igniter. Fixed same day. My family didn\'t freeze and dinner happened on schedule. That\'s the kind of service you remember.',
    service: 'Furnace Repair',
    verified: true,
  },
  {
    name: 'David L.',
    location: 'Sherman Oaks',
    rating: 5,
    platform: 'Google',
    date: 'January 2025',
    text: 'I had a quote from another company for $1,400 to fix my AC. Called Cool Doc for a second opinion — their diagnostic fee was waived since I was going to repair. Alex looked at it and said the fix was a refrigerant charge and a cleaned coil. Total came to $310. The other company was pushing me to replace the whole compressor. I\'m so glad I called.',
    service: 'AC Repair',
    verified: true,
  },
  {
    name: 'Patricia M.',
    location: 'Burbank',
    rating: 5,
    platform: 'Yelp',
    date: 'September 2024',
    text: 'Had a ductless mini-split installed in my home office. Miguel measured everything carefully, explained which unit size I needed, and didn\'t try to upsell me on a larger system. Installation took about four hours, wall was patched perfectly, and the unit runs quietly. Office is finally comfortable year-round.',
    service: 'Ductless Install',
    verified: true,
  },
  {
    name: 'James T.',
    location: 'Studio City',
    rating: 5,
    platform: 'Google',
    date: 'March 2025',
    text: 'These guys are the real deal. Third time using them over the past three years, always the same experience: on time, honest diagnosis, fair price. Alex remembered my system from the last visit. That kind of continuity is rare. They have a customer for life.',
    service: 'HVAC Maintenance',
    verified: true,
  },
  {
    name: 'Rosa F.',
    location: 'Van Nuys',
    rating: 4,
    platform: 'Google',
    date: 'July 2024',
    text: 'Came out same day for an AC that wouldn\'t turn on. Problem was a tripped breaker in the disconnect box, which they found and fixed fast. I\'m giving 4 stars only because the window for arrival was a bit wide (3 hours). But the tech was professional, explained everything clearly, and didn\'t charge me an arm and a leg for a simple fix.',
    service: 'AC Repair',
    verified: true,
  },
  {
    name: 'Carlos R.',
    location: 'Northridge',
    rating: 5,
    platform: 'Yelp',
    date: 'December 2024',
    text: 'Replaced our 20-year-old furnace. Miguel helped me pick a unit that matched my budget, pulled the permit, scheduled the inspection, and handled everything. The city inspector came out, passed it first try. New furnace has cut our gas bill noticeably. Process from quote to final inspection took nine days.',
    service: 'Furnace Replacement',
    verified: true,
  },
  {
    name: 'Jennifer W.',
    location: 'Tarzana',
    rating: 5,
    platform: 'Google',
    date: 'February 2025',
    text: 'Used the $79 tune-up special and it was genuinely worth it. Tech spent 45 minutes going through the system, found a cracked capacitor before it failed, and replaced it on the spot. Without that tune-up I would have had a broken AC in the middle of summer. Money well spent.',
    service: 'AC Tune-Up',
    verified: true,
  },
  {
    name: 'Michael B.',
    location: 'Encino',
    rating: 5,
    platform: 'Google',
    date: 'May 2024',
    text: 'My thermostat was reading incorrectly and causing the system to short-cycle. Alex diagnosed it in minutes, replaced the thermostat with a compatible smart model I had bought online, and calibrated everything correctly. Under an hour, under $100 for labor. Clear communication, zero pressure.',
    service: 'Thermostat Repair',
    verified: true,
  },
  {
    name: 'Lisa N.',
    location: 'Woodland Hills',
    rating: 5,
    platform: 'Yelp',
    date: 'October 2024',
    text: 'We bought a house that had an older system. Called Cool Doc for an honest assessment — they told us exactly what was worn, what needed attention soon, and what was fine for now. They could have sold us a new system. Instead they were straight with us. When we do eventually replace it, we\'re calling them.',
    service: 'System Assessment',
    verified: true,
  },
  {
    name: 'Anthony D.',
    location: 'Burbank',
    rating: 5,
    platform: 'Google',
    date: 'January 2025',
    text: 'Emergency call at 9pm in January — heater stopped working with overnight lows in the 30s. They actually picked up. Miguel was at my house by 10:30pm. Bad heat exchanger that was potentially dangerous to run. He shut it down safely, explained the situation clearly, and scheduled a replacement for two days later. I\'m grateful they took it seriously.',
    service: 'Emergency Heating Repair',
    verified: true,
  },
];

const STATS = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '200+', label: 'Reviews' },
  { value: '15+', label: 'Years in Business' },
  { value: '98%', label: 'Would Recommend' },
];

const StarRow: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(n => (
      <Star
        key={n}
        size={size}
        fill={n <= rating ? '#FDC506' : 'none'}
        stroke={n <= rating ? '#FDC506' : '#d1d5db'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const FILTER_TABS: FilterTab[] = ['All', 'Google', 'Yelp', 'Verified'];

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');

  const filtered = REVIEWS.filter(r => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Verified') return r.verified;
    return r.platform === activeFilter;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#FDC50610,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Star size={10} fill="#FDC506" stroke="#FDC506" />
            4.9/5 Average Rating
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            WHAT HOMEOWNERS<br />
            <span className="text-[#FDC506]">SAY ABOUT US</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Real reviews from San Fernando Valley homeowners. Tarzana, Encino, Burbank, Sherman Oaks and everywhere in between.
          </p>

          {/* Rating summary */}
          <div className="flex flex-wrap gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="text-4xl font-[900] text-white">4.9</div>
              <div>
                <StarRow rating={5} size={18} />
                <div className="text-xs text-white/50 font-medium mt-1">200+ reviews</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="text-sm font-bold text-white/80">Google</div>
              <div className="text-[#FDC506] font-[900]">4.9</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="text-sm font-bold text-white/80">Yelp</div>
              <div className="text-[#FDC506] font-[900]">4.8</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="text-sm font-bold text-white/80">HomeAdvisor</div>
              <div className="text-[#FDC506] font-[900]">5.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Reviews */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* Filter tabs */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-[#1D1D1B] text-white'
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400 font-medium self-center whitespace-nowrap">
              {filtered.length} reviews
            </span>
          </div>

          {/* Review grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-[900] text-[#1D1D1B] text-base">{review.name}</div>
                    <div className="text-xs text-gray-400 font-medium">{review.location}</div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4F6F8] text-gray-500 border border-gray-200 shrink-0">
                    {review.platform}
                  </div>
                </div>

                {/* Stars + date */}
                <div className="flex items-center gap-3 mb-4">
                  <StarRow rating={review.rating} size={14} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>

                {/* Review text */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-gray-300">Service:</span>
                    <span>{review.service}</span>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-wide">
                      <ThumbsUp size={10} />
                      Verified
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-[900] text-[#1D1D1B] mb-1">{s.value}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-[900] text-[#1D1D1B] tracking-tight mb-4">Used our service? Let us know.</h2>
            <p className="text-gray-500 mb-10">
              Honest feedback helps other homeowners make good decisions. Takes two minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1D1D1B] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#E30613] transition-all duration-300"
              >
                <Star size={16} />
                Review on Google
              </a>
              <a
                href="https://www.yelp.com/biz/YOUR_YELP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1D1D1B] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#F4F6F8] transition-all duration-200"
              >
                <Star size={16} />
                Review on Yelp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight mb-4">
            Ready to experience it yourself?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-lg mx-auto">
            Book today. Same-day availability most days. No fix, no fee.
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
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
