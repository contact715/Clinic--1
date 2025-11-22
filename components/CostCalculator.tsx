
import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [appliance, setAppliance] = useState('');
  
  const appliances = ['Refrigerator', 'Washer', 'Dryer', 'Oven', 'Dishwasher', 'Freezer'];

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-gray-200">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            
            {/* Left: Header */}
            <div className="bg-[#1D1D1B] p-8 md:w-1/3 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#E30613] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <Calculator size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-[900] uppercase tracking-tight mb-2">Repair Cost<br/>Estimator</h3>
                    <p className="text-sm text-gray-400 font-medium">Get a rough idea of what your repair might cost in seconds.</p>
                </div>
                <div className="mt-8 relative z-10">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FDC506]">
                        <Check size={12} /> No Hidden Fees
                    </div>
                </div>
            </div>

            {/* Right: Interaction */}
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
                {step === 1 && (
                    <div className="animate-fade-in-up">
                        <h4 className="text-lg font-bold text-[#1D1D1B] mb-6">What appliance is broken?</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {appliances.map((app) => (
                                <button 
                                    key={app}
                                    onClick={() => { setAppliance(app); setStep(2); }}
                                    className="py-3 px-4 rounded-lg border border-gray-200 text-sm font-bold text-gray-600 hover:border-[#1866B9] hover:text-[#1866B9] hover:bg-blue-50 transition-all text-center"
                                >
                                    {app}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fade-in-up text-center">
                        <h4 className="text-lg font-bold text-[#1D1D1B] mb-2">Estimated Repair Range</h4>
                        <div className="text-sm text-gray-500 font-medium mb-6">for {appliance}</div>
                        
                        <div className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-100 mb-6">
                            <div className="text-4xl font-[900] text-[#1D1D1B] tracking-tight">
                                $145 - $325
                            </div>
                            <p className="text-xs text-gray-400 mt-2 font-medium">
                                *Includes diagnostic, labor, and standard parts. Varies by brand.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-lg border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50">
                                Back
                            </button>
                            <a href="#quote" className="flex-[2] py-3 rounded-lg bg-[#E30613] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                                Get Exact Quote <ArrowRight size={16} />
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
