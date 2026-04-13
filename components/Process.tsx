
import React from 'react';
import { CalendarCheck, Stethoscope, Wrench, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Book in 60 Seconds",
      desc: "Call or book online. We assign a tech to your area immediately and confirm within the hour.",
      icon: <CalendarCheck size={32} className="text-[#1866B9] relative z-10 group-hover:rotate-12 transition-transform" />,
      bgColor: "bg-[#1866B9]/5",
      accentColor: "group-hover:text-[#1866B9]"
    },
    {
      id: "02",
      title: "Tech Arrives Today",
      desc: "Our tech arrives fully equipped with OEM parts and advanced diagnostic tools. Same-day service.",
      icon: <Stethoscope size={32} className="text-[#FDC506] relative z-10 group-hover:animate-pulse" />,
      bgColor: "bg-[#FDC506]/5",
      accentColor: "group-hover:text-[#FDC506]"
    },
    {
      id: "03",
      title: "Fixed. Guaranteed.",
      desc: "We complete the repair, test the system, and leave your space clean. 90-day warranty on all work.",
      icon: <Wrench size={32} className="text-[#E30613] relative z-10 group-hover:rotate-90 transition-transform duration-500" />,
      bgColor: "bg-[#E30613]/5",
      accentColor: "group-hover:text-[#E30613]"
    },
  ];

  return (
    <section className="py-24 bg-[#F4F6F8] relative z-20 overflow-hidden" id="process">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/5 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6 animate-fade-in-up">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse"></div>
            Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9] mb-6">
            FIXED IN <span className="text-[#E30613]">3 STEPS</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            From the moment you call to the moment your system is running again, the process is fast and straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-default">
              <div className="absolute -top-6 left-8 bg-white border-4 border-[#F4F6F8] w-12 h-12 rounded-2xl flex items-center justify-center text-[#1D1D1B] font-[900] shadow-sm text-lg z-20">
                {step.id}
              </div>

              <div className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden`}>
                {step.icon}
              </div>

              <h3 className={`text-2xl font-[800] text-[#1D1D1B] mb-3 ${step.accentColor} transition-colors`}>{step.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-20 text-center">
          <a href="tel:8187310445" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1B] text-white rounded-xl font-bold text-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-[#E30613]">
            <span className="relative z-10">Start Your Repair</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative z-10 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
