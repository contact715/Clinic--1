
import React, { useState } from 'react';
import { Plus, Minus, CalendarCheck, ShieldCheck, Clock, BadgeCheck, Phone, MessageCircle, User, Wind, DollarSign } from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
  icon: React.ReactNode;
  color: string;
  isOpen: boolean;
  toggle: () => void;
  idx: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a, icon, color, isOpen, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`group relative bg-white rounded-3xl p-6 md:p-8 cursor-pointer border transition-all duration-500 ${
        isOpen
          ? 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-gray-200 ring-1 ring-black/5'
          : 'shadow-sm border-gray-100 hover:border-gray-200 hover:translate-y-[-2px]'
      }`}
    >
      <div className="flex items-start justify-between gap-6">

        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300"
          style={{ backgroundColor: isOpen ? color : '#F8FAFC', color: isOpen ? 'white' : color }}
        >
          {icon}
        </div>

        <div className="flex-grow pt-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#1D1D1B]' : 'text-gray-600 group-hover:text-[#1D1D1B]'}`}>
              {q}
            </h3>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isOpen ? 'bg-[#1D1D1B] text-white border-[#1D1D1B] rotate-180' : 'bg-white text-gray-400 border-gray-200 group-hover:border-[#1D1D1B]'
            }`}>
              <Minus size={16} className={`absolute transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              <Plus size={16} className={`absolute transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </div>

          <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="pt-4 pb-2">
                <p className="text-gray-500 leading-relaxed mb-4">{a}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-700 uppercase tracking-wide">
                  <BadgeCheck size={12} className="fill-blue-500 text-white" />
                  Verified by Tech Team
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How often should I service my AC?",
      a: "Once a year, ideally in spring before the heat hits. Regular tune-ups catch small issues before they become expensive ones, and they keep your system running at full efficiency.",
      icon: <CalendarCheck size={24} />,
      color: "#0ea5e9"
    },
    {
      q: "What is a ductless mini-split?",
      a: "A ductless mini-split is a two-part system: an outdoor compressor and one or more indoor air handlers mounted on walls. They're ideal for homes without ductwork, additions, or rooms that need independent temperature control.",
      icon: <Wind size={24} />,
      color: "#1866B9"
    },
    {
      q: "Do you offer emergency HVAC service?",
      a: "Yes. We offer same-day service for urgent calls. If your AC goes out in the middle of a Los Angeles summer, call us directly at (818) 731-0445 and we'll do our best to get someone out that day.",
      icon: <Clock size={24} />,
      color: "#E30613"
    },
    {
      q: "How long does AC installation take?",
      a: "A standard split-system installation typically takes 4-8 hours. Ductless mini-split installs are usually 2-4 hours per zone. We'll give you a time estimate before we start.",
      icon: <ShieldCheck size={24} />,
      color: "#FDC506"
    },
    {
      q: "What brands do you work on?",
      a: "We service all major brands including Trane, Carrier, Lennox, Rheem, York, Mitsubishi, Daikin, Fujitsu, Goodman, Amana, and more. No brand is off-limits.",
      icon: <BadgeCheck size={24} />,
      color: "#1866B9"
    },
    {
      q: "Is your pricing upfront?",
      a: "Always. We diagnose first, give you the price, and only proceed with your approval. No surprise charges. If we can't fix it, you don't pay the labor.",
      icon: <DollarSign size={24} />,
      color: "#00B67A"
    },
    {
      q: "How much does HVAC repair cost?",
      a: "Diagnostic visits are free with any completed repair. Typical AC repairs run $150–$600 depending on the part. Furnace repairs are similar. We give you the full price upfront before any work begins — no surprises, ever.",
      icon: <BadgeCheck size={24} />,
      color: "#0ea5e9"
    },
  ];

  return (
    <section className="py-32 bg-[#F8FAFC] relative z-20 overflow-hidden" id="faq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 relative">

              {/* FAQ Robot */}
              <div className="absolute -top-28 right-0 w-48 md:w-64 pointer-events-none z-[-1] opacity-90 hidden lg:block">
                <img src="/robots/faq-robot.png" alt="FAQ Robot" className="w-full h-auto object-contain" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1B]/5 border border-[#1D1D1B]/10 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-6">
                <MessageCircle size={12} />
                Knowledge Base
              </div>
              <h2 className="text-4xl md:text-6xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9] mb-6">
                GOT<br />
                <span className="text-[#FDC506]">QUESTIONS?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10 font-medium">
                Everything you need to know about HVAC service, repair, and maintenance.
              </p>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                      <User size={20} className="text-gray-400" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Online Now</div>
                    <div className="font-bold text-[#1D1D1B]">Dispatch Team</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 font-medium">
                  Can't find your answer? We're ready to take your call.
                </p>

                <a
                  href="tel:8187310445"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1D1D1B] text-white rounded-xl text-sm font-bold shadow-lg hover:bg-[#E30613] transition-colors"
                >
                  <Phone size={16} />
                  Call (818) 731-0445
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                idx={idx}
                {...item}
                isOpen={openIndex === idx}
                toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
