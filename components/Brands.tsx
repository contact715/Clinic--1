
import React from 'react';
import { BadgeCheck, ShieldCheck } from 'lucide-react';

const BrandLogo: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'SAMSUNG':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <g transform="translate(100, 40) rotate(-10)">
              <ellipse cx="0" cy="0" rx="90" ry="32" fill="none" stroke="currentColor" strokeWidth="7" />
              <text x="0" y="10" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-0.5">SAMSUNG</text>
           </g>
        </svg>
      );
    case 'LG':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
          <circle cx="50" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="5" />
          <path d="M55,25 L55,55 L35,55" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <circle cx="38" cy="32" r="3.5" fill="currentColor" />
          <text x="88" y="55" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" letterSpacing="-2">LG</text>
        </svg>
      );
    case 'WHIRLPOOL':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
          <path d="M20,30 Q30,10 45,35 T70,35 T95,35" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5" />
          <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fontStyle="italic">Whirlpool</text>
        </svg>
      );
    case 'KITCHENAID':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="900" fontSize="32" letterSpacing="-1">KitchenAid</text>
        </svg>
      );
    case 'MAYTAG':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <path d="M35,55 L35,25 L50,40 L65,25 L65,55" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
           <text x="75" y="55" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="36">MAYTAG</text>
        </svg>
      );
    case 'FRIGIDAIRE':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="bold" fontSize="28" fontStyle="italic" letterSpacing="0.5">Frigidaire</text>
        </svg>
      );
    case 'GE APPLIANCES':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <circle cx="45" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
           <text x="45" y="50" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="34" fontStyle="italic">GE</text>
           <text x="80" y="48" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16">APPLIANCES</text>
        </svg>
      );
    case 'BOSCH':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <circle cx="35" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="25 100" transform="rotate(45 35 40)" />
           <text x="65" y="52" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="34" letterSpacing="1">BOSCH</text>
        </svg>
      );
    case 'SUB-ZERO':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" letterSpacing="1">SUB•ZERO</text>
        </svg>
      );
    case 'WOLF':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="38" letterSpacing="3">WOLF</text>
        </svg>
      );
    case 'VIKING':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="900" fontSize="36">VIKING</text>
           <path d="M20,60 L180,60" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'THERMADOR':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" letterSpacing="0">Thermador</text>
            <path d="M170,28 L180,28 L180,52 L170,52" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case 'MIELE':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="40" letterSpacing="-1">Miele</text>
        </svg>
      );
    case 'JENN-AIR':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" letterSpacing="1">JENN-AIR</text>
        </svg>
      );
    case 'DACOR':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="34" letterSpacing="1">dacor</text>
        </svg>
      );
    case 'GAGGENAU':
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" letterSpacing="3">GAGGENAU</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 80" className={className} fill="currentColor">
           <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24">{name}</text>
        </svg>
      );
  }
};

export const Brands: React.FC = () => {
  const brands = [
    'SUB-ZERO', 'WOLF', 'VIKING', 'THERMADOR', 
    'SAMSUNG', 'LG', 'WHIRLPOOL', 'KITCHENAID', 
    'MAYTAG', 'FRIGIDAIRE', 'GE APPLIANCES', 'BOSCH',
    'MIELE', 'JENN-AIR', 'DACOR', 'GAGGENAU'
  ];

  return (
    <section className="py-24 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* TECHNICAL BACKGROUND GRID - High Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Darker gray lines for visibility on light background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1D5DB_1px,transparent_1px),linear-gradient(to_bottom,#D1D5DB_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center relative z-10">
         <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm mb-6">
            <BadgeCheck size={14} className="text-[#E30613]" />
            <span className="text-[10px] font-black text-[#1D1D1B] uppercase tracking-widest">Factory Authorized Service</span>
         </div>
         <h2 className="text-3xl md:text-5xl font-[900] text-[#1D1D1B] mb-6 tracking-tight">
            CERTIFIED <span className="text-[#1866B9]">PARTNERS.</span>
         </h2>
         <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We are certified to repair all major residential and luxury appliance brands, ensuring warranty compliance and original parts use.
         </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          {/* STATIC GRID - Square Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {brands.map((brand, i) => (
                  <div 
                    key={i} 
                    className="group relative bg-white h-32 rounded-xl border border-gray-200/80 shadow-md flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 overflow-hidden z-10"
                  >
                      {/* Hover Reveal: Authorized Badge */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-[9px] font-bold text-green-600 border border-green-100 shadow-sm">
                              <ShieldCheck size={10} />
                              <span>Verified</span>
                          </div>
                      </div>

                      {/* Brand Logo */}
                      <div className="w-3/4 h-12 flex items-center justify-center transition-all duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 group-hover:scale-110">
                          <BrandLogo 
                            name={brand} 
                            className={`w-full h-full ${
                                ['SAMSUNG', 'LG', 'GE APPLIANCES', 'WHIRLPOOL', 'KITCHENAID', 'MAYTAG'].includes(brand) 
                                ? 'text-[#1866B9]' 
                                : 'text-[#E30613]'
                            }`} 
                          />
                      </div>
                      
                      {/* Subtle background flash on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};
