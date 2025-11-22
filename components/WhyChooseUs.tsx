
import React, { useRef } from 'react';
import { ShieldCheck, Zap, UserCheck, Search, ArrowRight, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionRef.current.style.setProperty('--x', `${x}px`);
      sectionRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-32 bg-[#111110] relative z-20 overflow-hidden group"
    >
      
      {/* Background Pattern (Base) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E30613] to-transparent opacity-50"></div>

      {/* GENERATIVE ART LAYER (Interactive Spotlight) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
            maskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
            WebkitMaskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
        }}
      >
          {/* The Aurora Gradient */}
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#E30613_120deg,#FDC506_240deg,#1866B9_360deg)] opacity-30 animate-spin-slower blur-3xl"></div>
          
          {/* The Grid Overlay that "catches" the light */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Core Hotspot */}
          <div 
            className="absolute w-[300px] h-[300px] bg-white/10 blur-[80px] rounded-full pointer-events-none mix-blend-overlay"
            style={{ 
                left: 'var(--x)', 
                top: 'var(--y)', 
                transform: 'translate(-50%, -50%)' 
            }}
          ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse"></div>
                    System Advantages
                </div>
                <h2 className="text-5xl md:text-7xl font-[900] text-white tracking-tighter leading-[0.9]">
                    THE <span className="text-[#E30613]">CLINIC</span><br/>
                    STANDARD.
                </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-md text-right">
                We don't just repair appliances; we restore order to your home through precision, speed, and absolute transparency.
            </p>
        </div>

        {/* MODULAR GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* MODULE 01: EXPERTISE (Blue) */}
            <div className="group relative bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-white/10 overflow-hidden hover:border-[#1866B9]/50 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1866B9]/10 rounded-bl-[3rem] transition-all duration-500 group-hover:scale-150 origin-top-right"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 bg-[#1866B9] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#1866B9]/20 group-hover:scale-110 transition-transform duration-300">
                            <UserCheck size={28} />
                        </div>
                        <span className="text-6xl font-[900] text-white/5 group-hover:text-[#1866B9]/20 transition-colors">01</span>
                    </div>
                    
                    <h3 className="text-3xl font-[900] text-white mb-4 uppercase italic tracking-tight">Elite Techs</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-8">
                        Factory-trained, background-checked, and licensed. We only hire the top 1% of applicants.
                    </p>

                    {/* Interactive Element: ID Badge */}
                    <div className="bg-black/30 border border-white/10 rounded-xl p-3 flex items-center gap-4 max-w-xs group-hover:bg-[#1866B9]/10 group-hover:border-[#1866B9]/30 transition-colors">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                            <UserCheck size={16} className="text-white" />
                        </div>
                        <div className="flex-grow">
                            <div className="h-1.5 w-16 bg-gray-600 rounded-full mb-1.5"></div>
                            <div className="h-1.5 w-24 bg-gray-700 rounded-full"></div>
                        </div>
                        <Check size={16} className="text-[#1866B9] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>

            {/* MODULE 02: SPEED (Yellow) */}
            <div className="group relative bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-white/10 overflow-hidden hover:border-[#FDC506]/50 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDC506]/10 rounded-bl-[3rem] transition-all duration-500 group-hover:scale-150 origin-top-right"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 bg-[#FDC506] rounded-2xl flex items-center justify-center text-[#1D1D1B] shadow-lg shadow-[#FDC506]/20 group-hover:scale-110 transition-transform duration-300">
                            <Zap size={28} className="fill-[#1D1D1B]" />
                        </div>
                        <span className="text-6xl font-[900] text-white/5 group-hover:text-[#FDC506]/20 transition-colors">02</span>
                    </div>
                    
                    <h3 className="text-3xl font-[900] text-white mb-4 uppercase italic tracking-tight">Rapid Response</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-8">
                        Trucks stocked with OEM parts for Same-Day fixes. We value your time as much as you do.
                    </p>

                    {/* Interactive Element: Progress Bar */}
                    <div className="w-full bg-black/30 h-3 rounded-full overflow-hidden border border-white/10">
                        <div className="h-full bg-[#FDC506] w-1/4 group-hover:w-full transition-all duration-1000 ease-out relative">
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-2 uppercase tracking-widest">
                        <span>Dispatch</span>
                        <span className="text-[#FDC506] opacity-0 group-hover:opacity-100 transition-opacity delay-300">Arrived</span>
                    </div>
                </div>
            </div>

            {/* MODULE 03: WARRANTY (Red) */}
            <div className="group relative bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-white/10 overflow-hidden hover:border-[#E30613]/50 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/10 rounded-bl-[3rem] transition-all duration-500 group-hover:scale-150 origin-top-right"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 bg-[#E30613] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#E30613]/20 group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck size={28} />
                        </div>
                        <span className="text-6xl font-[900] text-white/5 group-hover:text-[#E30613]/20 transition-colors">03</span>
                    </div>
                    
                    <h3 className="text-3xl font-[900] text-white mb-4 uppercase italic tracking-tight">Ironclad Warranty</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-8">
                        90-Day coverage on parts and labor. If it fails again, we fix it for free. Zero risk.
                    </p>

                    {/* Interactive Element: Shield Status */}
                    <div className="flex items-center gap-3">
                        <div className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-xs font-bold text-gray-400 group-hover:text-white group-hover:border-[#E30613] transition-colors">
                            Parts Covered
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-xs font-bold text-gray-400 group-hover:text-white group-hover:border-[#E30613] transition-colors delay-75">
                            Labor Covered
                        </div>
                    </div>
                </div>
            </div>

            {/* MODULE 04: TRANSPARENCY (White) */}
            <div className="group relative bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-white/10 overflow-hidden hover:border-white/50 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[3rem] transition-all duration-500 group-hover:scale-150 origin-top-right"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1D1D1B] shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Search size={28} />
                        </div>
                        <span className="text-6xl font-[900] text-white/5 group-hover:text-white/20 transition-colors">04</span>
                    </div>
                    
                    <h3 className="text-3xl font-[900] text-white mb-4 uppercase italic tracking-tight">Flat-Rate Pricing</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-8">
                        No hourly billing games. You get a solid quote for the job before we lift a wrench.
                    </p>

                    {/* Interactive Element: Receipt Scan */}
                    <div className="relative bg-white p-3 rounded shadow-lg rotate-1 group-hover:rotate-0 transition-transform duration-300 max-w-[180px]">
                        <div className="h-2 w-1/2 bg-gray-200 mb-2 rounded"></div>
                        <div className="h-2 w-3/4 bg-gray-200 mb-2 rounded"></div>
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-scan-line"></div>
                    </div>
                </div>
            </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-16 flex justify-center">
            <a href="#quote" className="group flex items-center gap-4 px-8 py-4 rounded-xl bg-[#E30613] text-white font-[900] uppercase tracking-widest hover:bg-white hover:text-[#1D1D1B] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(227,6,19,0.5)] hover:shadow-white/20">
                <span>Experience The Difference</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
      
      <style>{`
        @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .group-hover\\:animate-scan-line {
            animation: scan-line 1.5s linear infinite;
        }
      `}</style>
    </section>
  );
};
