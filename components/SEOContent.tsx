
import React from 'react';

export const SEOContent: React.FC = () => (
  <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-[900] text-[#1D1D1B] tracking-tight mb-3">
          HVAC Service Across San Fernando Valley
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          Cool Doc HVAC has been working in this valley since 2010. Below is a quick overview of what we do and where we go.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">AC Repair in San Fernando Valley</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Most AC calls we get are refrigerant leaks, frozen coils, failed compressors, or a clogged condenser that just needs a good cleaning. We carry parts on the truck so the job usually gets done in one visit. If we can't fix it, you don't pay.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">Heating and Furnace Repair — Los Angeles</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We work on gas furnaces, electric systems, heat pumps, and boilers. When fall hits and the furnace won't kick on, call before noon and we'll usually get someone out same day. Licensed C-20 contractor, fully insured.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">Ductless Mini-Split Installation</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Mini-splits are the right call for garages, additions, older homes without ductwork, and rooms that never seem to cool down. We install and service Mitsubishi, Daikin, Fujitsu, LG, and most other brands.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">HVAC Maintenance Plans</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              A yearly tune-up costs a fraction of what a single repair call does. We offer one-time appointments and annual plans. We check refrigerant levels, clean coils, inspect the heat exchanger, and test everything before summer or winter hits.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">Cities We Serve</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              We cover the San Fernando Valley and surrounding areas. Our techs work out of the valley, so response times are fast.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700 font-medium">
              {[
                'Tarzana',
                'Woodland Hills',
                'Encino',
                'Sherman Oaks',
                'Studio City',
                'Burbank',
                'North Hollywood',
                'Van Nuys',
                'Northridge',
                'Glendale',
              ].map(city => (
                <li key={city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] shrink-0"></span>
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2">Our Guarantee</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Every repair carries a 90-day warranty on parts and labor. If we come out and can't fix the problem, you don't owe us anything. Pricing is given upfront before we start, so there are no surprises on the bill.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              Cool Doc HVAC Service — Licensed HVAC Contractor, San Fernando Valley, CA. CSLB License #1089805.
              Call <a href="tel:8187310445" className="text-[#1D1D1B] font-bold hover:text-[#E30613] transition-colors">(818) 731-0445</a> for service or a free estimate.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);
