
import React from 'react';
import { ArrowRight, Shield, Star, Check, MapPin } from 'lucide-react';

export const HeroText: React.FC = () => {
  const handleScheduleClick = () => {
    window.location.href = 'tel:8187310445';
  };

  return (
    <div className="z-20 relative">

      <style>{`
          @keyframes fade-in-up-dramatic {
            0% { opacity: 0; transform: translateY(40px); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes grow-width {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          @keyframes sway {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
          .animate-sway {
            animation: sway 6s ease-in-out infinite;
            transform-origin: bottom center;
          }
          .hero-anim {
            opacity: 0;
            animation: fade-in-up-dramatic 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .hero-anim-1 { animation-delay: 0.1s; }
          .hero-anim-2 { animation-delay: 0.2s; }
          .hero-anim-3 { animation-delay: 0.35s; }
          .hero-anim-4 { animation-delay: 0.5s; }
          .hero-anim-5 { animation-delay: 0.65s; }
          .hero-underline {
            animation: grow-width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
            width: 0%;
          }
      `}</style>


      {/* Tagline Badge */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full mb-6 hero-anim hero-anim-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs font-semibold text-gray-600">Same-Day Service Available</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-[900] tracking-[-0.04em] text-[#1D1D1B] mb-6 hero-anim hero-anim-2 flex flex-col gap-1">
        <div className="leading-[0.95]">APPLIANCE</div>
        <div className="leading-[0.95]">
          <span className="relative inline-block">
            <span className="relative z-10">REPAIR</span>
            <div className="absolute bottom-1 md:bottom-2 left-0 h-1/3 bg-[#FDC506] -z-0 opacity-50 hero-underline"></div>
          </span>
          {' '}
          <span className="text-[#E30613]">CLINIC</span>
        </div>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-gray-500 max-w-lg font-medium leading-relaxed mb-8 hero-anim hero-anim-3">
        We diagnose & fix Refrigerators, Ovens, Washers & Dryers in Los Angeles.{' '}
        <span className="text-[#1D1D1B] font-bold">Licensed. Bonded. Guaranteed.</span>
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 hero-anim hero-anim-4">
        <button
          onClick={handleScheduleClick}
          className="group flex items-center gap-3 bg-[#E30613] hover:bg-[#C20510] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300"
        >
          Schedule Repair
          <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
          <Shield size={20} className="text-[#1866B9]" />
          <div className="leading-none">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block mb-0.5">Warranty</span>
            <span className="text-sm font-bold text-[#1D1D1B]">90 Days Included</span>
          </div>
        </div>
      </div>

      {/* Trust Row */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 hero-anim hero-anim-5">
        {[
          { icon: <Star size={14} className="fill-[#FDC506] text-[#FDC506]" />, text: "5.0 Rating" },
          { icon: <Check size={14} className="text-[#1866B9]" />, text: "Licensed & Bonded" },
          { icon: <MapPin size={14} className="text-[#E30613]" />, text: "Family Owned Since 1996" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            {stat.icon}
            <span>{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
