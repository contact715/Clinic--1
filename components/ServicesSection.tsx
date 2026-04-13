
import React, { useRef } from 'react';
import { Thermometer, Flame, Wind, ShieldCheck, Building2, ArrowUpRight, LucideIcon } from 'lucide-react';

const BentoCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  bgClass?: string;
  accentColor?: string;
  BgIcon?: LucideIcon;
  image?: string;
}> = ({ title, subtitle, icon, className, bgClass, accentColor = '#E30613', BgIcon, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--x', `${x}px`);
      cardRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${className} ${bgClass || 'bg-white border border-gray-200'}`}
    >

      {/* PHOTO BACKGROUND */}
      {image && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={image} alt="" className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 scale-105 group-hover:scale-100" loading="lazy" width={600} height={400} />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/30" />
        </div>
      )}

      {/* SPOTLIGHT */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          maskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent)',
          WebkitMaskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent)',
        }}
      >
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#0ea5e9_120deg,#E30613_240deg,#1866B9_360deg)] opacity-30 animate-spin-slower blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div
          className="absolute w-[200px] h-[200px] bg-white/40 blur-[60px] rounded-full pointer-events-none mix-blend-overlay"
          style={{ left: 'var(--x)', top: 'var(--y)', transform: 'translate(-50%, -50%)' }}
        ></div>
      </div>

      {/* BG ICON */}
      {BgIcon && (
        <div
          className="absolute right-[-20px] bottom-[-20px] opacity-[0.07] group-hover:rotate-12 transition-transform duration-700 pointer-events-none z-0"
          style={{ color: accentColor }}
        >
          <BgIcon size={180} strokeWidth={1.5} />
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="p-3 rounded-xl shadow-sm text-[#1D1D1B] bg-white border border-gray-100 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight size={18} color={accentColor} />
          </div>
        </div>

        <div className="mt-10 pointer-events-auto">
          <h3 className="text-2xl font-[800] text-[#1D1D1B] mb-3 leading-tight">{title}</h3>
          <p className="text-sm font-medium text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-32 px-4 sm:px-6 relative z-20 bg-[#F4F6F8]" id="services">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></div>
              Core Capabilities
            </div>
            <h2 className="text-5xl md:text-6xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9]">
              EVERY SYSTEM.<br />
              <span className="text-[#0ea5e9]">ONE CALL.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end relative">
            <p className="text-gray-500 text-right max-w-xs text-sm mb-4 relative z-10">
              Full-service HVAC for homes and businesses. We fix, install, and maintain every system.
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">

          {/* 1. AC REPAIR (Large) */}
          <BentoCard
            title="AC Repair & Install"
            subtitle="AC not cooling? We diagnose on arrival and fix same day — all brands, all systems."
            icon={<Thermometer size={32} className="text-[#E30613]" />}
            BgIcon={Thermometer}
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            bgClass="bg-white border border-gray-200"
            accentColor="#E30613"
            image="/generated/service-ac.jpg"
          />

          {/* 2. HEATING */}
          <BentoCard
            title="Heating & Furnace"
            subtitle="Furnace won't start? Heat pump acting up? We get your heat back on — same day."
            icon={<Flame size={28} className="text-[#E30613]" />}
            BgIcon={Flame}
            className="md:col-span-1 md:row-span-1"
            bgClass="bg-white border border-gray-200"
            accentColor="#E30613"
            image="/generated/service-heating.jpg"
          />

          {/* 3. DUCTLESS */}
          <BentoCard
            title="Ductless Mini-Splits"
            subtitle="No ductwork? No problem. We install and service Mitsubishi, Daikin, Fujitsu — single and multi-zone."
            icon={<Wind size={28} className="text-[#1866B9]" />}
            BgIcon={Wind}
            className="md:col-span-1 md:row-span-1"
            bgClass="bg-white border border-gray-200"
            accentColor="#1866B9"
            image="/generated/service-ductless.jpg"
          />

          {/* 4. MAINTENANCE */}
          <BentoCard
            title="Maintenance Plans"
            subtitle="A yearly tune-up catches the small issues before they become expensive ones. Book before summer."
            icon={<ShieldCheck size={28} className="text-[#0ea5e9]" />}
            BgIcon={ShieldCheck}
            className="md:col-span-2 md:row-span-1"
            bgClass="bg-white border border-gray-200"
            accentColor="#0ea5e9"
            image="/generated/service-maintenance.jpg"
          />

          {/* 5. COMMERCIAL (Dark) */}
          <div className="md:col-span-2 md:row-span-1 bg-[#1D1D1B] rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-500">
            <div className="relative z-10 max-w-xs">
              <div className="flex items-center gap-2 mb-4 text-[#FDC506]">
                <Building2 size={16} className="fill-[#FDC506]" />
                <span className="font-bold text-xs uppercase tracking-widest">Commercial</span>
              </div>
              <h3 className="text-3xl font-[900] text-white mb-2">COMMERCIAL HVAC</h3>
              <p className="text-gray-400 text-sm font-medium">
                Rooftop units, VRF systems, and full HVAC service for LA offices, retail, and multi-unit buildings.
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] text-[#333] opacity-50 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Building2 size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-[#FDC506] group-hover:text-black transition-colors shrink-0">
              <ArrowUpRight size={20} className="text-white group-hover:text-black" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
