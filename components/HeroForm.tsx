
import React from 'react';
import { ArrowRight, MapPin, User, Phone, Mail, ShieldCheck, Flame, BadgeCheck } from 'lucide-react';

export const HeroForm: React.FC = () => {
  return (
    <div className="relative z-30 animate-fade-in-up delay-300 w-full max-w-md mx-auto lg:mr-0">

      <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60 ring-1 ring-white/50 relative overflow-hidden">

        {/* Decorative top accent - SOLID COLORS */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="w-1/3 bg-[#1866B9]"></div>
          <div className="w-1/3 bg-[#E30613]"></div>
          <div className="w-1/3 bg-[#FDC506]"></div>
        </div>

        {/* URGENCY TICKER BANNER - HIGH VISIBILITY */}
        <div className="bg-white border-2 border-[#E30613] rounded-xl p-4 mb-6 flex items-start gap-3 shadow-[0_4px_20px_-5px_rgba(227,6,19,0.3)] relative z-20">
          <div className="p-1.5 bg-[#E30613] rounded-full text-white mt-0.5 shrink-0 animate-pulse">
            <Flame size={14} fill="white" />
          </div>
          <div>
            <div className="text-xs font-[900] text-[#E30613] uppercase tracking-wide mb-0.5">High Demand</div>
            <p className="text-xs font-bold text-[#1D1D1B] leading-tight">
              Technicians are busy. Only <span className="text-[#E30613] font-black underline decoration-2 underline-offset-2">2 slots left</span> for today.
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#E30613]/10 text-[#E30613] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-[#E30613]/20">
            <div className="w-1.5 h-1.5 bg-[#E30613] rounded-full animate-pulse"></div>
            Priority Dispatch
          </div>
          <h3 className="text-3xl font-[900] text-[#1D1D1B] leading-none mb-2">Check Availability</h3>
          <p className="text-sm text-gray-500 font-medium">Find a technician in your area now.</p>
        </div>

        <form className="space-y-4">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E30613] transition-colors">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[#1D1D1B] font-bold placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E30613]/20 focus:border-[#E30613] focus:bg-white transition-all shadow-sm"
            />
          </div>

          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1866B9] transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[#1D1D1B] font-bold placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1866B9]/20 focus:border-[#1866B9] focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FDC506] transition-colors">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[#1D1D1B] font-bold placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDC506]/20 focus:border-[#FDC506] focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1D1D1B] transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-[#1D1D1B] font-bold placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1D1B]/20 focus:border-[#1D1D1B] focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          <button type="button" className="w-full bg-[#1D1D1B] text-white font-[900] py-4 rounded-xl shadow-xl shadow-black/10 hover:bg-[#E30613] hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1 mt-2">
            <span>Get Schedule & Price</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* TRUST BADGES */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
            <ShieldCheck size={12} className="text-[#00B67A]" />
            <span>SSL Secure</span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-1 bg-[#FDC506]/10 rounded border border-[#FDC506]/30">
            <BadgeCheck size={12} className="text-[#FDC506] fill-[#FDC506]/20" />
            <span className="text-[9px] font-black text-[#1D1D1B] uppercase tracking-tight">No Fix, No Fee Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};
