
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export const ServiceMap: React.FC = () => {
  const neighborhoods = [
    "Sherman Oaks", "Studio City", "Encino", "Tarzana", 
    "Woodland Hills", "North Hollywood", "Burbank", "Glendale", 
    "Beverly Hills", "Santa Monica", "West Hollywood", "Van Nuys"
  ];

  return (
    <section className="py-24 bg-white relative z-20 border-t border-gray-100" id="service-map">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        <div className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl flex flex-col lg:flex-row relative group">
            
            {/* Left Side: Content */}
            <div className="lg:w-[40%] p-8 md:p-12 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
                 
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1866B9]/10 border border-[#1866B9]/20 text-[#1866B9] font-bold text-[10px] tracking-widest uppercase mb-8 w-fit">
                    <MapPin size={12} />
                    Coverage Area
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] leading-[0.9] mb-6 tracking-tight">
                    SERVING <br/> <span className="text-[#1866B9]">LOS ANGELES.</span>
                 </h2>
                 
                 <p className="text-gray-500 font-medium mb-10 text-lg leading-relaxed">
                    We cover 10 cities across the San Fernando Valley and LA County. Call before noon for same-day service.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-12">
                    {neighborhoods.map(city => (
                        <div key={city} className="flex items-center gap-2.5 text-sm font-bold text-gray-600 group/city cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/city:bg-[#E30613] transition-colors"></div>
                            <span className="group-hover/city:text-[#1D1D1B] transition-colors">{city}</span>
                        </div>
                    ))}
                 </div>

                 <div className="relative max-w-md">
                    <input 
                        type="text" 
                        placeholder="Enter your Zip Code" 
                        className="w-full bg-white border-2 border-gray-100 rounded-xl py-4 pl-6 pr-16 text-[#1D1D1B] font-bold focus:outline-none focus:border-[#1866B9] focus:ring-2 focus:ring-[#1866B9]/20 transition-all shadow-sm placeholder:text-gray-400 placeholder:font-medium"
                    />
                    <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#1D1D1B] rounded-xl flex items-center justify-center text-white hover:bg-[#E30613] transition-colors shadow-md hover:scale-105 active:scale-95 transform duration-200">
                        <ArrowRight size={20} />
                    </button>
                 </div>
                 <p className="text-xs font-bold text-gray-400 mt-4 ml-2">
                    * We cover 95% of LA County. Check your zip to confirm.
                 </p>
            </div>

            {/* Right Side: Map */}
            <div className="lg:w-[60%] min-h-[400px] lg:min-h-full relative bg-gray-200 border-l border-gray-200">
                {/* Map Embed - Grayscale Filter */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69192051320636!3d34.02016130998532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1709324823742!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(1.05)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                ></iframe>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-transparent to-transparent opacity-80 lg:opacity-0 pointer-events-none"></div>

                {/* Coverage Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-xl hidden sm:block">
                    <div className="flex items-center gap-3 mb-2">
                        <MapPin size={14} className="text-[#1866B9]" />
                        <span className="text-xs font-black text-[#1D1D1B] uppercase tracking-wide">Coverage Area</span>
                    </div>
                    <div className="text-sm font-bold text-gray-600 leading-tight">
                        <span className="text-[#1866B9]">10 cities</span> across<br/>San Fernando Valley
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};
