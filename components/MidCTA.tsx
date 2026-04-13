import React from 'react';

export const MidCTA: React.FC = () => (
  <section className="py-6 bg-[#E30613]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-white font-black text-xl tracking-tight">HVAC slots open today across San Fernando Valley.</p>
        <p className="text-white/80 text-sm font-medium mt-0.5">We confirm within the hour. No commitment required.</p>
      </div>
      <div className="flex gap-3 flex-shrink-0">
        <a
          href="tel:8187310445"
          className="flex items-center gap-2 bg-white text-[#E30613] font-black uppercase tracking-wider text-sm px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          (818) 731-0445
        </a>
        <a
          href="/contact"
          className="flex items-center gap-2 bg-black text-white font-black uppercase tracking-wider text-sm px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
        >
          Book Online
        </a>
      </div>
    </div>
  </section>
);
