
import React from 'react';
import { BadgeCheck, ShieldCheck } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Trane',        logo: '/brands/trane_red.png' },
  { name: 'Carrier',      logo: '/brands/carrier.png' },
  { name: 'Lennox',       logo: '/brands/lennox.svg' },
  { name: 'Rheem',        logo: '/brands/rheem.svg' },
  { name: 'York',         logo: '/brands/york.png' },
  { name: 'Mitsubishi',   logo: '/brands/mitsubishi.svg' },
  { name: 'Daikin',       logo: '/brands/daikin.png' },
  { name: 'Fujitsu',      logo: '/brands/fujitsu.svg' },
  { name: 'Goodman',      logo: '/brands/goodman.png' },
  { name: 'Amana',        logo: '/brands/amana.png' },
  { name: 'Bosch',        logo: '/brands/bosch.svg' },
  { name: 'LG',           logo: '/brands/lg.svg' },
  { name: 'Samsung',      logo: '/brands/samsung.svg' },
  { name: 'Honeywell',    logo: '/brands/honeywell.png' },
  { name: 'Nest',         logo: '/brands/nest.png' },
  { name: 'Am. Standard', logo: '/brands/americanstd.png' },
];


interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => (
  <div className="group relative bg-white w-32 h-20 flex-shrink-0 rounded-xl border border-gray-200/80 shadow-md flex flex-col items-center justify-center gap-1.5 transition-all duration-500 hover:shadow-xl hover:border-gray-300 overflow-hidden px-3">
    {/* Certified badge */}
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
      <div className="flex items-center gap-0.5 bg-blue-50 px-1.5 py-0.5 rounded-lg text-[8px] font-bold text-blue-600 border border-blue-100 shadow-sm">
        <ShieldCheck size={8} />
        <span>Certified</span>
      </div>
    </div>

    {/* Logo */}
    <div className="w-full flex items-center justify-center h-9 transition-transform duration-500 group-hover:scale-105">
      <img
        src={brand.logo}
        alt={`${brand.name} HVAC`}
        className="max-w-full max-h-8 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        loading="lazy"
      />
    </div>

    {/* Brand name */}
    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors duration-300">
      {brand.name}
    </span>

    <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

export const Brands: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden">

    {/* Background grid */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#9CA3AF_1px,transparent_1px),linear-gradient(to_bottom,#9CA3AF_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
    </div>

    {/* Header */}
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 mb-16 text-center relative z-10">
      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
        <BadgeCheck size={14} className="text-[#0ea5e9]" />
        <span className="text-[10px] font-black text-[#1D1D1B] uppercase tracking-widest">All Major HVAC Brands</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] mb-6 tracking-tight">
        CERTIFIED <span className="text-[#1866B9]">PARTNERS.</span>
      </h2>
      <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        We service all major HVAC brands. Factory-trained technicians, genuine parts, warranty-compliant repairs.
      </p>
    </div>

    {/* Static grid */}
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </div>
    </div>

  </section>
);
