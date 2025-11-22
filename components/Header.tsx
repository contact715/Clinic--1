
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, ChevronDown, Refrigerator, WashingMachine, Wrench, HeartHandshake, CalendarDays, MapPin, Utensils, Droplets, Flame } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const services = {
    kitchen: [
      { name: "Refrigerators", icon: <Refrigerator size={18} />, color: "text-[#1866B9]" },
      { name: "Ovens & Ranges", icon: <Flame size={18} />, color: "text-[#E30613]" },
      { name: "Dishwashers", icon: <Utensils size={18} />, color: "text-[#1D1D1B]" },
      { name: "Ice Makers", icon: <Droplets size={18} />, color: "text-[#1866B9]" },
    ],
    laundry: [
      { name: "Washing Machines", icon: <WashingMachine size={18} />, color: "text-[#1866B9]" },
      { name: "Dryers", icon: <Wrench size={18} />, color: "text-[#FDC506]" },
      { name: "Maintenance", icon: <HeartHandshake size={18} />, color: "text-[#1D1D1B]" },
    ]
  };

  const trustFeatures = [
    { icon: <HeartHandshake size={12} />, text: "Family Owned" },
    { icon: <CalendarDays size={12} />, text: "Since 1996" },
    { icon: <MapPin size={12} />, text: "Locally Trusted" },
    { icon: <Wrench size={12} />, text: "Licensed Experts" },
  ];

  const navItemBaseClass = `
    relative z-10 flex items-center gap-1.5 font-bold text-[#1D1D1B] rounded-lg transition-all duration-300
    border border-transparent
    hover:bg-[#1D1D1B] hover:text-white hover:-translate-y-1 hover:-rotate-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]
  `;

  return (
    <>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled ? 'pt-4' : 'pt-8'
    }`}>
      
      <div className={`w-full max-w-[1440px] px-4 md:px-8 lg:px-12 transition-all duration-500`}>
          <div className={`w-full pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ${
              scrolled ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]' : ''
          }`}>

              {/* TOP RAIL */}
              <div className={`w-full bg-[#1D1D1B] overflow-hidden relative transition-all duration-500 rounded-t-xl ${
                  scrolled ? 'h-0 opacity-0' : 'h-7 opacity-100'
              }`}>
                <div className="w-full px-6 flex items-center justify-center h-full text-white/90 text-[9px] font-mono tracking-widest uppercase">
                    <div className="flex items-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide w-full md:w-auto justify-center">
                        {trustFeatures.map((feature, idx) => (
                           <div key={idx} className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 border border-white/5 shrink-0 hover:bg-white/20 transition-colors cursor-default">
                               <span className="text-[#FDC506]">{feature.icon}</span>
                               <span className="whitespace-nowrap font-bold">{feature.text}</span>
                           </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* MAIN NAV BAR */}
              <div className={`w-full bg-white/95 backdrop-blur-xl border-b border-white/20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-20 ${
                  scrolled ? 'rounded-xl' : 'rounded-b-xl'
              }`}>
                <div className="w-full px-4 md:px-8 transition-all duration-500">
                    <div className={`flex items-center justify-between transition-all duration-500 ${
                        scrolled ? 'h-16' : 'h-24'
                    }`}>
                        
                        {/* LOGO */}
                        <div className="flex items-center h-full cursor-pointer group">
                            <div className="flex flex-col justify-center leading-none transition-transform duration-300 group-hover:scale-105 origin-left">
                                 <h1 className={`font-[900] tracking-tighter italic text-[#E30613] transition-all duration-500 ${
                                     scrolled ? 'text-3xl' : 'text-5xl'
                                 }`} style={{ fontFamily: 'Impact, sans-serif' }}>
                                    COOL DOC
                                 </h1>
                                 <div className={`flex items-center gap-2 transition-all duration-500 ${scrolled ? 'mt-0' : 'mt-1'}`}>
                                    <span className="text-[8px] font-bold text-[#1D1D1B] uppercase tracking-[0.3em] bg-[#FDC506] px-1.5 py-0.5 rounded w-fit">
                                        Appliance Repair
                                    </span>
                                 </div>
                            </div>
                        </div>

                        {/* NAV LINKS */}
                        <nav className="hidden lg:flex items-center h-full absolute left-1/2 -translate-x-1/2 gap-2">
                            <div 
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className={`${navItemBaseClass} uppercase tracking-wider ${
                                    scrolled ? 'px-4 py-1.5 text-[11px]' : 'px-6 py-2 text-sm'
                                } ${isServicesOpen ? 'bg-[#1D1D1B] text-white -translate-y-1 -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]' : ''}`}>
                                    Services
                                    <ChevronDown size={scrolled ? 10 : 12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#FDC506]' : ''}`} />
                                </button>

                                <div className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-[640px] transition-all duration-300 origin-top z-50 ${
                                    isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                                }`}>
                                    <div className="bg-white rounded-xl shadow-2xl border-[4px] border-white overflow-hidden ring-1 ring-black/5">
                                        <div className="grid grid-cols-12 min-h-[320px]">
                                            <div className="col-span-5 bg-[#F8FAFC] p-6 flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613] opacity-5 rounded-bl-full -mr-8 -mt-8"></div>
                                                <div className="relative z-10">
                                                    <h4 className="text-xl font-[900] text-[#1D1D1B] mb-2 leading-none">EXPERT<br/>DIAGNOSTICS</h4>
                                                    <div className="w-8 h-1 bg-[#E30613] mb-4 rounded-full"></div>
                                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                                        From sub-zero fridges to high-end ranges, we diagnose the root cause instantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-7 p-6 bg-white">
                                                <div className="mb-6">
                                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                                                        <span className="w-1.5 h-1.5 bg-[#1866B9] rounded-full"></span>
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Kitchen</span>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-1">
                                                        {services.kitchen.map((s, i) => (
                                                            <a href="#services" key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group">
                                                                <div className="text-gray-400 group-hover:text-[#1866B9] transition-colors">{s.icon}</div>
                                                                <span className="text-xs font-bold text-[#1D1D1B] group-hover:text-[#1866B9]">{s.name}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                                                        <span className="w-1.5 h-1.5 bg-[#E30613] rounded-full"></span>
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Laundry</span>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-1">
                                                        {services.laundry.map((s, i) => (
                                                            <a href="#services" key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors group">
                                                                <div className="text-gray-400 group-hover:text-[#E30613] transition-colors">{s.icon}</div>
                                                                <span className="text-xs font-bold text-[#1D1D1B] group-hover:text-[#E30613]">{s.name}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {['Process', 'Reviews', 'FAQ'].map((item) => (
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    key={item} 
                                    className={`${navItemBaseClass} uppercase tracking-wider ${
                                        scrolled ? 'px-5 py-1.5 text-[11px]' : 'px-7 py-2 text-xs'
                                    }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* ACTION BUTTONS */}
                        <div className="flex items-center gap-4">
                            <a 
                                href="#quote" 
                                className={`hidden lg:flex items-center justify-center rounded-lg bg-[#1D1D1B] text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                                    scrolled ? 'px-5 py-2.5 text-[10px]' : 'px-7 py-3.5 text-xs'
                                }`}
                            >
                                Request Quote
                            </a>

                            <a href="tel:8187310445" className="group relative overflow-hidden rounded-lg bg-[#E30613] shadow-lg hover:bg-[#C20510] hover:scale-105 transition-all duration-300">
                                 <div className={`relative flex items-center gap-3 transition-all duration-500 ${
                                     scrolled ? 'px-5 py-2' : 'px-7 py-3'
                                 }`}>
                                     <Phone size={scrolled ? 14 : 18} className="text-white fill-white animate-tada" />
                                     <div className="flex flex-col leading-none">
                                         <span className={`font-bold text-red-100 uppercase tracking-widest mb-0.5 transition-all ${
                                             scrolled ? 'text-[8px]' : 'text-[10px]'
                                         }`}>Call Now</span>
                                         <span className={`font-black text-white tracking-wide transition-all ${
                                             scrolled ? 'text-xs' : 'text-sm'
                                         }`}>(818) 731-0445</span>
                                     </div>
                                 </div>
                            </a>

                            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-[#1D1D1B] bg-gray-100 rounded-lg">
                                <Menu size={20} />
                            </button>
                        </div>

                    </div>
                </div>
              </div>
          
          </div>
      </div>
    </header>
    </>
  );
};
