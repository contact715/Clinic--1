
import React, { useRef, useState } from 'react';
import { Wrench, PenTool, ArrowUpRight, Zap, Refrigerator, Utensils, Flame, WashingMachine, LucideIcon } from 'lucide-react';

const BentoCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  bgClass?: string;
  accentColor?: string;
  BgIcon?: LucideIcon;
}> = ({ title, subtitle, icon, className, bgClass, accentColor = '#E30613', BgIcon }) => {
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
      className={`group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 ${className} ${bgClass || 'bg-white border border-gray-200'}`}
    >

      {/* GENERATIVE ART LAYER (Local Spotlight) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          maskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent)',
          WebkitMaskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent)',
        }}
      >
        {/* Aurora Gradient - Increased Opacity & Removed Blend Mode for Visibility */}
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#E30613_120deg,#FDC506_240deg,#1866B9_360deg)] opacity-30 animate-spin-slower blur-3xl"></div>

        {/* Grid Highlight - Darker lines for visibility on light cards */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Core Hotspot Glow */}
        <div
          className="absolute w-[200px] h-[200px] bg-white/40 blur-[60px] rounded-full pointer-events-none mix-blend-overlay"
          style={{
            left: 'var(--x)',
            top: 'var(--y)',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Animated Background Icon */}
      {BgIcon && (
        <div
          className="absolute right-[-20px] bottom-[-20px] opacity-[0.07] group-hover:rotate-12 transition-transform duration-700 pointer-events-none z-0"
          style={{ color: accentColor }}
        >
          <BgIcon size={180} strokeWidth={1.5} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className={`p-4 rounded-2xl shadow-sm text-[#1D1D1B] bg-white border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight size={18} color={accentColor} />
          </div>
        </div>

        <div className="mt-10 pointer-events-auto">
          <h3 className="text-2xl font-[800] text-[#1D1D1B] mb-3 leading-tight">
            {title}
          </h3>
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
    <section className="py-32 px-6 md:px-12 relative z-20 bg-[#F4F6F8]" id="services">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/5 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse"></div>
              Core Capabilities
            </div>
            <h2 className="text-5xl md:text-7xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9]">
              KITCHEN<br />
              <span className="text-[#1866B9]">& LAUNDRY.</span>
            </h2>

          </div>
          <div className="flex flex-col items-end relative">
            <p className="text-gray-500 text-right max-w-xs text-sm mb-4 relative z-10">
              Advanced diagnostics for all major household machines. We fix what others replace.
            </p>

          </div>
        </div>

        {/* BENTO GRID - SOLID COLORS */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">

          {/* 1. REFRIGERATION (Large) */}
          <BentoCard
            title="Refrigeration"
            subtitle="Surgical repair for Sub-Zero, Fridges, Freezers, and Ice Makers. Sealed system experts."
            icon={<Refrigerator size={32} className="text-[#1866B9]" />}
            BgIcon={Refrigerator}
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            bgClass="bg-[#F0F7FF] border border-[#1866B9]/20"
            accentColor="#1866B9"
          />

          {/* 2. COOKING */}
          <BentoCard
            title="Cooking"
            subtitle="Ovens, Ranges, Stoves & Cooktops. Gas and Electric ignition experts."
            icon={<Flame size={28} className="text-[#E30613]" />}
            BgIcon={Flame}
            className="md:col-span-1 md:row-span-1"
            bgClass="bg-white border border-gray-200"
            accentColor="#E30613"
          />

          {/* 3. CLEANING */}
          <BentoCard
            title="Dishwashers"
            subtitle="Leak detection, drain pumps, and control board repairs."
            icon={<Utensils size={28} className="text-[#1D1D1B]" />}
            BgIcon={Utensils}
            className="md:col-span-1 md:row-span-1"
            bgClass="bg-white border border-gray-200"
            accentColor="#1D1D1B"
          />

          {/* 4. LAUNDRY (Large) */}
          <BentoCard
            title="Laundry Room"
            subtitle="Washing Machines & Dryers. Fixing leaks, spins, drums, and heating elements."
            icon={<WashingMachine size={28} className="text-[#FDC506]" />}
            BgIcon={WashingMachine}
            className="md:col-span-2 md:row-span-1"
            bgClass="bg-[#FFFBE6] border border-[#FDC506]/20"
            accentColor="#FDC506"
          />

          {/* 5. MEMBERSHIP */}
          <div className="md:col-span-2 md:row-span-1 bg-[#1D1D1B] rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-500">
            <div className="relative z-10 max-w-xs">
              <div className="flex items-center gap-2 mb-4 text-[#FDC506]">
                <Zap size={16} className="fill-[#FDC506]" />
                <span className="font-bold text-xs uppercase tracking-widest">Membership</span>
              </div>
              <h3 className="text-3xl font-[900] text-white mb-2">PREVENTATIVE CARE</h3>
              <p className="text-gray-400 text-sm font-medium">Annual check-ups for your appliances to prevent breakdowns.</p>
            </div>

            {/* Animated Icon Background */}
            <div className="absolute right-[-20px] bottom-[-20px] text-[#333] opacity-50 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
              <Wrench size={180} strokeWidth={1} />
            </div>



            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-[#FDC506] group-hover:text-black transition-colors">
              <ArrowUpRight size={20} className="text-white group-hover:text-black" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
