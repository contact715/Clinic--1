
import React from 'react';
import { ArrowRight, Shield, Check, Star } from 'lucide-react';
import { DispatcherStatus } from './DispatcherStatus';
import { TechnicianRadar } from './TechnicianRadar';
import { RippleButton } from './ui/RippleButton';

export const HeroText: React.FC = () => {
  const handleScheduleClick = () => {
    window.location.href = 'tel:8187310445';
  };

  return (
    <div className="z-20 relative">

      {/* Technical Data Ticker */}
      <div className="flex items-center gap-4 mb-8 opacity-60 animate-fade-in-up">
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#1D1D1B] border border-gray-300 rounded px-2 py-1">
          <div className="w-1.5 h-1.5 bg-[#E30613] rounded-full animate-pulse"></div>
          <span>SYSTEM: ONLINE</span>
        </div>
        <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
          Loc: Los Angeles, CA // Lat: 34.05 // Lon: -118.24
        </div>
      </div>

      {/* Greeting Robot - Application Robot */}
      <div className="absolute top-0 -right-10 md:-right-24 w-48 md:w-[30rem] pointer-events-none z-[-1] animate-fade-in-up hidden md:block animate-sway" style={{ animationDelay: '0.5s' }}>
        <img src="/robots/application-robot.png" alt="Greeting Robot" className="w-full h-auto object-contain drop-shadow-2xl" />
      </div>

      <style>{`
          @keyframes fade-in-up-dramatic {
            0% { opacity: 0; transform: translateY(50px) scale(0.95); filter: blur(10px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes grow-width {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-fade-in-up-dramatic {
            animation: fade-in-up-dramatic 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-grow-width {
            animation: grow-width 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @keyframes sway {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          .animate-sway {
            animation: sway 6s ease-in-out infinite;
            transform-origin: top center;
          }
      `}</style>

      {/* Main Headline - Flex Column for Symmetrical Spacing */}
      <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-[900] tracking-[-0.04em] text-[#1D1D1B] mb-8 animate-fade-in-up-dramatic flex flex-col gap-0 md:gap-2" style={{ animationDelay: '0.2s' }}>
        <div className="leading-none">THE <span className="text-[#1866B9]">CLINIC</span></div>
        <div className="leading-none">FOR YOUR</div>
        <div className="leading-none flex items-baseline">
          <span className="relative inline-block">
            <span className="relative z-10 text-[#1D1D1B]">APPLIANCES</span>
            <div className="absolute bottom-2 left-0 h-1/3 bg-[#FDC506] -z-0 opacity-60 animate-grow-width" style={{ animationDelay: '0.8s' }}></div>
          </span>
          <span className="text-[#E30613] leading-none inline-block animate-pulse-slow">.</span>
        </div>
      </h1>

      {/* Subheadline with vertical divider layout */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10 animate-fade-in-up-dramatic" style={{ animationDelay: '0.4s' }}>
        <div className="w-12 h-1 bg-[#E30613] md:w-1 md:h-16"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg font-medium leading-relaxed">
          We diagnose & cure Refrigerators, Ovens, Washers & Dryers. <br />
          <span className="text-[#1D1D1B] font-bold">Licensed. Expert. Same-Day.</span>
        </p>
      </div>

      {/* LIVE DISPATCHER STATUS & RADAR WIDGETS */}
      <div className="flex flex-wrap items-end gap-0 mb-4 animate-fade-in-up-dramatic" style={{ animationDelay: '0.6s' }}>
        <DispatcherStatus />
        <TechnicianRadar />
      </div>

      {/* CTA Buttons - High Tech Style - SOLID */}
      <div className="flex flex-col sm:flex-row gap-5 mb-16 mt-4 animate-fade-in-up-dramatic" style={{ animationDelay: '0.8s' }}>

        <RippleButton
          onClick={handleScheduleClick}
          className="group bg-[#E30613] text-white px-10 py-6 rounded-xl text-xl font-[900] shadow-[0_10px_40px_-10px_rgba(227,6,19,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(227,6,19,0.8)] hover:bg-[#FF1F2D] hover:scale-105 transition-all duration-300 overflow-hidden ring-4 ring-[#E30613]/20"
          rippleColor="#ffffff"
        >
          <span className="flex items-center gap-3 tracking-wide">
            SCHEDULE EXAM <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
          </span>
        </RippleButton>

        <div className="flex items-center gap-4 px-6 py-4 bg-white/40 backdrop-blur-lg rounded-xl border border-white/60 shadow-sm hover:bg-white/60 transition-colors cursor-default">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1866B9] blur-md opacity-30 rounded-full"></div>
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 text-[#1866B9]">
              <Shield size={18} strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Warranty</span>
            <span className="text-sm font-black text-[#1D1D1B]">90 Days Included</span>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="inline-flex flex-wrap gap-2 md:gap-8 p-1 animate-fade-in-up-dramatic" style={{ animationDelay: '1s' }}>
        {[
          { icon: <Star size={14} className="fill-[#FDC506] text-[#FDC506]" />, text: "5.0 Rating" },
          { icon: <Check size={14} className="text-[#1866B9]" />, text: "Licensed & Bonded" },
          { icon: <div className="w-2 h-2 bg-[#E30613] rounded-full animate-pulse"></div>, text: "Techs Nearby" }
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-white/50 text-xs font-bold text-[#1D1D1B]">
            {stat.icon}
            <span>{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
