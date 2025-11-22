
import React, { useState } from 'react';
import { ShieldCheck, Star, Hash, Plus } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const team = [
    {
      id: "UNIT-01",
      name: "Alex Richardson",
      role: "Founder & Chief Tech",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
      specialty: "High-End Refrigeration",
      exp: "23 Years",
      color: "#E30613" // Red
    },
    {
      id: "HQ-LEAD",
      name: "Sarah Jenkins",
      role: "Head of Dispatch",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
      specialty: "Logistics & Support",
      exp: "12 Years",
      color: "#1866B9" // Blue
    },
    {
      id: "UNIT-04",
      name: "Mike Thompson",
      role: "Senior Technician",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
      specialty: "Gas & Electric Ranges",
      exp: "18 Years",
      color: "#FDC506" // Yellow
    },
    {
      id: "UNIT-09",
      name: "David Lee",
      role: "Field Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200",
      specialty: "Laundry Systems",
      exp: "9 Years",
      color: "#1D1D1B" // Black
    }
  ];

  return (
    <section className="py-24 bg-[#F4F6F8] relative z-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-200 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-4 shadow-sm">
                    <ShieldCheck size={12} className="text-[#E30613]" />
                    Personnel Roster
                </div>
                <h2 className="text-4xl md:text-6xl font-[900] text-[#1D1D1B] tracking-tight leading-none">
                    THE <span className="text-[#E30613]">SPECIALISTS.</span>
                </h2>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Hover to Expand Personnel File
                </p>
            </div>
        </div>

        {/* DESKTOP: CINEMATIC ACCORDION */}
        <div className="hidden lg:flex h-[600px] gap-4">
            {team.map((member, idx) => (
                <div 
                    key={idx}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group ${
                        activeIndex === idx ? 'flex-[3]' : 'flex-[1]'
                    }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gray-900">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className={`w-full h-full object-cover transition-all duration-700 ${
                                activeIndex === idx ? 'scale-100 opacity-100 grayscale-0' : 'scale-110 opacity-50 grayscale'
                            }`}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-80' : 'opacity-90'}`}></div>
                        
                        {/* Color Overlay on Inactive */}
                        <div className={`absolute inset-0 mix-blend-multiply transition-opacity duration-500 ${
                            activeIndex === idx ? 'opacity-0' : 'opacity-100'
                        }`} style={{ backgroundColor: member.color }}></div>
                    </div>

                    {/* Vertical Title (Inactive State) */}
                    <div className={`absolute bottom-8 left-8 transition-all duration-500 ${
                        activeIndex === idx ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
                    }`}>
                        <h3 className="text-2xl font-[900] text-white uppercase tracking-tighter vertical-lr transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
                            {member.name}
                        </h3>
                        <span className="mt-4 block text-[10px] font-mono text-white/60">{member.id}</span>
                    </div>

                    {/* Expanded Content (Active State) */}
                    <div className={`absolute bottom-0 left-0 w-full p-10 transition-all duration-700 delay-100 ${
                        activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}>
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase mb-4">
                                    <Hash size={10} />
                                    {member.id}
                                </div>
                                <h3 className="text-5xl font-[900] text-white uppercase tracking-tight mb-2 leading-none">
                                    {member.name}
                                </h3>
                                <p className="text-lg font-bold text-white/80 mb-6">{member.role}</p>
                                
                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Specialty</div>
                                        <div className="text-white font-bold">{member.specialty}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Experience</div>
                                        <div className="text-white font-bold">{member.exp}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center hover:bg-[#E30613] hover:text-white transition-colors shadow-lg">
                                <Plus size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* MOBILE: STACKED CARDS */}
        <div className="lg:hidden space-y-4">
            {team.map((member, idx) => (
                <div key={idx} className="relative h-[400px] rounded-2xl overflow-hidden">
                    <img src={member.image} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <span className="text-[#E30613] font-bold text-xs uppercase tracking-widest mb-1 block">{member.role}</span>
                        <h3 className="text-3xl font-[900] text-white uppercase">{member.name}</h3>
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-white/80 text-sm font-medium">
                            <span>{member.specialty}</span>
                            <span>{member.exp}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
