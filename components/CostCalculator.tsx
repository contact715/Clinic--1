
import React, { useState, useRef } from 'react';
import { Calculator, ArrowRight, Check, Wrench } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [appliance, setAppliance] = useState('');
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
  
  const appliances = ['Refrigerator', 'Washer', 'Dryer', 'Oven', 'Dishwasher', 'Freezer'];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 bg-[#111110] relative z-30 border-t border-white/10 overflow-hidden group"
    >
      
      {/* Background Pattern (Base) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

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
          
          {/* The Grid Overlay - MATCHING SIZE 40px */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
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

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-white overflow-hidden flex flex-col md:flex-row relative">
            
            {/* Left: Header - BRAND RED for Max Contrast */}
            <div className="bg-[#E30613] p-10 md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#1D1D1B] rounded-xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] border-2 border-white/20">
                        <Calculator size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-[900] uppercase tracking-tighter leading-none mb-4">Repair Cost<br/>Estimator</h3>
                    <p className="text-sm text-red-100 font-bold leading-relaxed">
                        Don't guess. Get a data-backed range for your specific repair in seconds.
                    </p>
                </div>
                <div className="mt-10 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1B] rounded-full border border-white/20 shadow-lg">
                        <Check size={14} className="text-[#00B67A]" strokeWidth={4} /> 
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">No Hidden Fees</span>
                    </div>
                </div>
            </div>

            {/* Right: Interaction */}
            <div className="p-10 md:w-3/5 flex flex-col justify-center bg-[#F4F6F8]">
                {step === 1 && (
                    <div className="animate-fade-in-up">
                        <h4 className="text-xl font-[900] text-[#1D1D1B] mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse"></div>
                            Select Appliance
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {appliances.map((app) => (
                                <button 
                                    key={app}
                                    onClick={() => { setAppliance(app); setStep(2); }}
                                    className="py-3 px-4 rounded-xl bg-white border-2 border-[#1D1D1B]/10 text-sm font-bold text-[#1D1D1B] shadow-sm hover:border-[#E30613] hover:text-[#E30613] hover:shadow-[0_10px_20px_-5px_rgba(227,6,19,0.15)] hover:-translate-y-1 transition-all duration-300 text-center"
                                >
                                    {app}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fade-in-up">
                        <h4 className="text-xl font-[900] text-[#1D1D1B] mb-1">Estimated Range</h4>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">For {appliance} Repair</div>
                        
                        <div className="bg-[#1D1D1B] rounded-xl p-6 border-2 border-[#1D1D1B] mb-8 relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 p-3 opacity-10 text-white">
                                <Wrench size={80} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-5xl font-[900] text-white tracking-tighter mb-2">
                                    $145 - $325
                                </div>
                                <div className="h-1 w-full bg-gray-800 rounded-full mb-3 overflow-hidden">
                                    <div className="h-full w-2/3 bg-[#00B67A]"></div>
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                    *Includes Trip Charge, Diagnostic & Labor. Parts extra.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border-2 border-[#1D1D1B]/20 text-[#1D1D1B] font-bold text-sm hover:bg-gray-200 transition-colors">
                                Back
                            </button>
                            <a href="#quote" className="flex-1 py-4 rounded-xl bg-[#E30613] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#C20510] shadow-lg hover:shadow-red-600/30 transition-all hover:-translate-y-0.5 uppercase tracking-wide">
                                Get Exact Quote <ArrowRight size={18} strokeWidth={3} />
                            </a>
                        </div>
                    </div>
                )}
            </div>

        </div>
      </div>
    </section>
  );
};
