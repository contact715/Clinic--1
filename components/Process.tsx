
import React from 'react';
import { CalendarCheck, Stethoscope, Wrench, ArrowRight, ClipboardCheck, Sparkles, Lightbulb } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Scheduling an appointment",
      desc: "Call us or book online. We'll assign a technician to your area immediately.",
      icon: <CalendarCheck size={32} className="text-[#1866B9] relative z-10 group-hover:rotate-12 transition-transform" />,
      bgColor: "bg-[#1866B9]/5",
      accentColor: "group-hover:text-[#1866B9]"
    },
    {
      id: "02",
      title: "Inspection",
      desc: "Our tech arrives fully equipped to inspect the issue using advanced diagnostic tools.",
      icon: <Stethoscope size={32} className="text-[#FDC506] relative z-10 group-hover:animate-pulse" />,
      bgColor: "bg-[#FDC506]/5",
      accentColor: "group-hover:text-[#FDC506]"
    },
    {
      id: "03",
      title: "Fixing",
      desc: "We complete the repair with precision using OEM parts for lasting health.",
      icon: <Wrench size={32} className="text-[#E30613] relative z-10 group-hover:rotate-90 transition-transform duration-500" />,
      bgColor: "bg-[#E30613]/5",
      accentColor: "group-hover:text-[#E30613]"
    },
    {
      id: "04",
      title: "Evaluation",
      desc: "Post-repair cycle testing ensures the system is running perfectly before we finish.",
      icon: <ClipboardCheck size={32} className="text-[#1D1D1B] relative z-10 group-hover:scale-110 transition-transform" />,
      bgColor: "bg-[#1D1D1B]/5",
      accentColor: "group-hover:text-[#1D1D1B]"
    },
    {
      id: "05",
      title: "Post-repair tidying up",
      desc: "We respect your home. Our techs clean the workspace thoroughly, leaving no mess behind.",
      icon: <Sparkles size={32} className="text-[#00B67A] relative z-10 group-hover:rotate-12 transition-transform" />,
      bgColor: "bg-[#00B67A]/5",
      accentColor: "group-hover:text-[#00B67A]"
    },
    {
      id: "06",
      title: "Maintenance advice",
      desc: "We provide expert tips on how to prevent future breakdowns and extend appliance life.",
      icon: <Lightbulb size={32} className="text-[#FDC506] relative z-10 group-hover:scale-110 transition-transform" />,
      bgColor: "bg-[#FDC506]/5",
      accentColor: "group-hover:text-[#FDC506]"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F6F8] relative z-20 overflow-hidden" id="process">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/5 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6 animate-fade-in-up">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse"></div>
            Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9] mb-6">
            OUR REPAIR PROCESS: <br className="md:hidden" /> <span className="text-[#E30613]">STEP-BY-STEP</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
            Leveraging best-in-class practices and methodologies, our meticulous process ensures that your appliance repair is handled with precision and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-default">
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
          <a href="tel:8187310445" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1D1D1B] text-white rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-[#E30613]">
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
