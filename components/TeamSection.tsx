
import React from 'react';
import { ShieldCheck, Hash, Star } from 'lucide-react';

export const TeamSection: React.FC = () => {
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
    <section className="py-24 bg-[#F4F6F8] relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
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
                    Factory trained. Background checked.
                </p>
            </div>
        </div>

        {/* STATIC TECHNICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                    
                    {/* Image Area */}
                    <div className="relative h-80 overflow-hidden">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-black text-[#1D1D1B] uppercase tracking-widest shadow-sm border border-white/50">
                                {member.id}
                            </div>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Floating Name on Image */}
                        <div className="absolute bottom-4 left-4 text-white">
                            <div className="bg-[#E30613] px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide w-fit mb-1 shadow-sm">
                                {member.role}
                            </div>
                            <h3 className="text-2xl font-[900] uppercase leading-none tracking-tight">{member.name}</h3>
                        </div>
                    </div>

                    {/* Stats Panel */}
                    <div className="p-5 bg-white relative z-10">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Specialty</span>
                                <span className="text-xs font-black text-[#1D1D1B] text-right">{member.specialty}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Experience</span>
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={8} className="fill-[#FDC506] text-[#FDC506]" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-black text-[#1D1D1B]">{member.exp}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                             <div className="flex items-center gap-1.5">
                                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                 <span className="text-[9px] font-bold text-gray-400 uppercase">On Duty</span>
                             </div>
                             <ShieldCheck size={14} className="text-gray-300 group-hover:text-[#00B67A] transition-colors" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
