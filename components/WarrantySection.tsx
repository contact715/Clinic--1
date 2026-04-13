
import React from 'react';
import { ShieldCheck, CalendarCheck, Wrench, CheckCircle2, AlertCircle } from 'lucide-react';

export const WarrantySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4F6F8] relative z-20 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Header & Primary Guarantee */}
            <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 bg-[#1866B9]/10 text-[#1866B9] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#1866B9]/20">
                    <ShieldCheck size={12} />
                    Peace of Mind
                </div>
                <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95] mb-8">
                    IRONCLAD <br/>
                    <span className="text-[#1866B9]">WARRANTY.</span>
                </h2>
                <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                    We stand behind every repair with a comprehensive guarantee. You shouldn't have to pay twice for the same problem.
                </p>

                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B67A]/10 rounded-bl-full -mr-8 -mt-8"></div>
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#00B67A] rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-green-500/20">
                            <CalendarCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-[900] text-[#1D1D1B] mb-2">90-Day Guarantee</h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                            If the same part fails or the same issue returns within 90 days of our service, we will return and fix it for free. No questions asked.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <CheckCircle2 size={16} className="text-[#00B67A]" />
                                <span>Covers All Parts & Labor</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <CheckCircle2 size={16} className="text-[#00B67A]" />
                                <span>Zero Deductible</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA under left panel */}
            <div className="lg:col-span-5 -mt-4 lg:hidden">
              <a href="tel:8187310445" className="block w-full py-4 bg-[#E30613] text-white text-center font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-[#1D1D1B] transition-all duration-300 shadow-lg">
                Schedule a Repair — (818) 731-0445
              </a>
            </div>

            {/* Right: Additional Coverage Details */}
            <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-[#1D1D1B]/5 rounded-xl flex items-center justify-center text-[#1D1D1B] mb-4">
                            <Wrench size={20} />
                        </div>
                        <h4 className="text-lg font-[900] text-[#1D1D1B] mb-2">OEM Parts Only</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            We use original equipment manufacturer (OEM) parts to ensure your system runs exactly as the factory intended.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-[#E30613]/5 rounded-xl flex items-center justify-center text-[#E30613] mb-4">
                            <AlertCircle size={20} />
                        </div>
                        <h4 className="text-lg font-[900] text-[#1D1D1B] mb-2">No Fix, No Fee</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            If we can't identify the problem or fix your system, you don't pay for the service call. Simple as that.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            *Applies to standard diagnostic and repair services. Service call fee may apply for specialized assessments.
                            Ask your technician for details before work begins.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 bg-[#FDC506]/10 rounded-xl flex items-center justify-center text-[#FDC506] mb-4">
                            <ShieldCheck size={20} />
                        </div>
                        <h4 className="text-lg font-[900] text-[#1D1D1B] mb-2">Licensed & Bonded</h4>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Our technicians are fully vetted, background-checked, and insured for your safety and peace of mind.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#1D1D1B] p-8 rounded-3xl border border-gray-800 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-lg font-[900] text-white mb-2">Membership Plan</h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed mb-4">
                                Extend your coverage to 1 year with our preventative maintenance plan.
                            </p>
                            <a href="tel:8187310445" className="inline-flex items-center gap-2 text-[#FDC506] font-bold text-xs uppercase tracking-widest hover:underline">
                                Call to Enroll <ShieldCheck size={12} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Desktop CTA */}
                <div className="mt-6 hidden lg:block">
                  <a href="tel:8187310445" className="block w-full py-4 bg-[#E30613] text-white text-center font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-[#1D1D1B] transition-all duration-300 shadow-lg">
                    Schedule a Repair — (818) 731-0445
                  </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
