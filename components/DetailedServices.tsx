
import React from 'react';
import { CheckCircle2, Building2, Home, ArrowRight } from 'lucide-react';

export const DetailedServices: React.FC = () => {
  const homeServices = [
    "Refrigerator Repair",
    "Freezer Repair",
    "Oven Repair",
    "Wall Oven Repair",
    "Stove Repair",
    "Dishwasher Repair",
    "Washer Repair",
    "Dryer Repair",
    "Wine Cooler Repair",
    "Cooktop Repair"
  ];

  const commercialServices = [
    "Walk-in Coolers & Freezers",
    "Commercial Ranges",
    "Coin-Operated Laundry",
    "Commercial Ice Machines",
    "Prep Tables"
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative z-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1D1D1B]/5 text-[#1D1D1B] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-[#1D1D1B]/10">
                <div className="w-1.5 h-1.5 bg-[#1D1D1B] rounded-full"></div>
                Service Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-none">
                OUR RELIABLE <span className="text-[#1866B9]">SERVICES</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            
            {/* Home Services Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:border-gray-200 transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#1866B9]/5 rounded-bl-3xl -mr-6 -mt-6 md:-mr-8 md:-mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1866B9] shadow-sm border border-gray-100 shrink-0">
                        <Home size={24} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-2xl font-[900] text-[#1D1D1B]">Home Appliance Repair</h3>
                        <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">Complete residential diagnostic & repair.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8 relative z-10">
                    {homeServices.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                            <CheckCircle2 size={16} className="text-[#1866B9] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm font-bold text-gray-600 group-hover/item:text-[#1D1D1B] transition-colors leading-tight">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:mt-10 relative z-10">
                    <a href="tel:8187310445" className="inline-flex items-center gap-2 text-[#1866B9] font-bold text-sm hover:underline p-2 -ml-2 rounded-lg hover:bg-blue-50 transition-colors">
                        Schedule Home Service <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Commercial Services Card */}
            <div className="bg-[#1D1D1B] rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-800 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#E30613]/10 rounded-bl-3xl -mr-6 -mt-6 md:-mr-8 md:-mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 md:mb-8 relative z-10">
                    <div className="w-12 h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center text-[#E30613] shadow-lg border border-gray-700 shrink-0">
                        <Building2 size={24} strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-2xl font-[900] text-white">Commercial Services</h3>
                        <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">For businesses, restaurants, and property managers.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8 relative z-10">
                    {commercialServices.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                            <CheckCircle2 size={16} className="text-[#E30613] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm font-bold text-gray-300 group-hover/item:text-white transition-colors leading-tight">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:mt-10 relative z-10">
                    <a href="tel:8187310445" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-[#E30613] transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5">
                        Request Commercial Quote <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
