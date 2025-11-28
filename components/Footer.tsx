
import React, { useRef, useState } from 'react';
import { Phone, ArrowUpRight, MapPin, Mail, Clock, ShieldCheck, Smartphone, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const ctaRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ctaRef.current) {
            const rect = ctaRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ctaRef.current.style.setProperty('--x', `${x}px`);
            ctaRef.current.style.setProperty('--y', `${y}px`);
        }
    };

    return (
        <footer className="relative z-20">
            {/* 1. Top Marquee - Infinite Scroll */}
            <div className="w-full bg-[#E30613] overflow-hidden py-3 relative z-30">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span className="text-sm font-black text-white tracking-widest uppercase">EMERGENCY SERVICE AVAILABLE</span>
                            <span className="mx-4 text-[#FDC506]">•</span>
                            <span className="text-sm font-black text-white tracking-widest uppercase">SAME DAY REPAIR</span>
                            <span className="mx-4 text-[#FDC506]">•</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Main Call to Action Area - HERO STYLE (Light Mode) WITH GENERATIVE ART */}
            <div
                ref={ctaRef}
                onMouseMove={handleMouseMove}
                className="relative bg-[#F4F6F8] text-[#1D1D1B] overflow-hidden py-24 md:py-32 group"
            >

                {/* Background Grid & Noise (Hero Style) - Base Layer */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                {/* GENERATIVE ART LAYER (Local) */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        maskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
                        WebkitMaskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
                    }}
                >
                    {/* The Aurora Gradient */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#E30613_120deg,#FDC506_240deg,#1866B9_360deg)] opacity-20 animate-spin-slower blur-3xl"></div>

                    {/* The Grid Overlay that "catches" the light */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay"></div>

                    {/* Core Hotspot */}
                    <div
                        className="absolute w-[200px] h-[200px] bg-white/60 blur-[60px] rounded-full pointer-events-none mix-blend-overlay"
                        style={{
                            left: 'var(--x)',
                            top: 'var(--y)',
                            transform: 'translate(-50%, -50%)'
                        }}
                    ></div>
                </div>

                <div className="px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="max-w-[1600px] mx-auto">

                        {/* Technical Ticker (Hero Element) */}
                        <div className="flex items-center gap-4 mb-8 opacity-60">
                            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1D1D1B] border border-gray-300 rounded px-2 py-1 bg-white/50 backdrop-blur">
                                <div className="w-1.5 h-1.5 bg-[#00B67A] rounded-full animate-pulse"></div>
                                <span>SYSTEM: READY</span>
                            </div>
                            <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase hidden sm:block">
                                Dispatch: Online // Techs: Active
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">

                            <div className="max-w-4xl relative">
                                <h2 className="text-[12vw] lg:text-[9rem] leading-[0.8] font-[900] tracking-tighter mb-8 text-[#1D1D1B]">
                                    READY TO <br />
                                    <span className="text-[#E30613]">FIX IT?</span>
                                </h2>

                                {/* Subtext with Badge */}
                                <div className="flex items-center gap-4 text-gray-600 text-lg md:text-xl max-w-xl">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-[#00B67A]/10 rounded-full border border-[#00B67A]/20">
                                        <div className="w-2 h-2 bg-[#00B67A] rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-bold text-[#00B67A] uppercase tracking-wide">Live</span>
                                    </div>
                                    <p className="font-medium">Technicians are currently active in your area. Get a diagnostic today.</p>
                                </div>
                            </div>

                            {/* Giant Interactive Button - Squaricle */}
                            <a href="tel:8187310445" className="group relative w-40 h-40 md:w-64 md:h-64 bg-[#1D1D1B] rounded-[2.5rem] flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-105 shrink-0 overflow-hidden z-20 shadow-2xl shadow-black/20 hover:bg-[#E30613]">
                                {/* Sonar Pulse Effect - Solid Rings */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/30 scale-100 opacity-0 group-hover:animate-ping-slow"></div>

                                {/* Icon with shake animation */}
                                <Phone size={32} className="text-white fill-white mb-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:animate-shake" />

                                {/* Sliding Text Effect */}
                                <div className="relative h-8 w-full overflow-hidden flex justify-center">
                                    <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-8">
                                        <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-white h-8 flex items-center">Call Now</span>
                                        <span className="font-black text-xl md:text-2xl uppercase tracking-tighter text-white h-8 flex items-center absolute top-8 whitespace-nowrap">Let's Go</span>
                                    </div>
                                </div>
                                <span className="text-xs md:text-sm font-mono text-white/60 group-hover:text-white transition-colors">(818) 731-0445</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>

            {/* 3. MEGA FOOTER - DARK MODE - SOLID */}
            <div className="bg-[#111110] text-white border-t border-white/10 relative overflow-hidden">

                <div className="max-w-[1600px] mx-auto relative z-10">

                    {/* Top Row: Logo & Trust Statement */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 py-16 border-b border-white/10 relative">

                        {/* Footer Robot - Centered */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[19.4rem] pointer-events-none hidden lg:block z-10">
                            <img src="/robots/footer-robot.png" alt="Footer Robot" className="w-full h-auto object-contain drop-shadow-2xl" />
                        </div>
                        <div>
                            <img src="/robots/appliance-logo.png" alt="Cool Doc Appliance Repair" className="h-12 mb-6 object-contain" />
                            <h3 className="text-2xl font-bold text-white max-w-md leading-tight">
                                Your #1 Appliance Repair Experts in Los Angeles.
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { title: "23+", sub: "Years Experience" },
                                { title: "24/7", sub: "Fast Response" },
                                { title: "Local", sub: "Family Owned" },
                                { title: "4.9/5", sub: "Top Rated" }
                            ].map((item, i) => (
                                <div key={i} className="border-l border-white/10 pl-6">
                                    <div className="text-3xl font-black text-[#FDC506]">{item.title}</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Grid: 5 Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

                        {/* Col 1: Contact Info */}
                        <div className="p-8 lg:p-10 space-y-8">
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">Contact Us</h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-[#E30613] mt-1 shrink-0" size={18} />
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase mb-1">Main Office</div>
                                        <div className="text-sm font-medium leading-relaxed text-gray-300">
                                            San Fernando Valley,<br />
                                            Los Angeles, CA
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="text-[#E30613] mt-1 shrink-0" size={18} />
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase mb-1">Available 24/7</div>
                                        <a href="tel:8187310445" className="block text-lg font-bold text-white hover:text-[#FDC506] transition-colors">(818) 731-0445</a>
                                        <a href="tel:8187310445" className="block text-sm text-gray-400 hover:text-white transition-colors mt-1">Alt: (818) 555-0192</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="text-[#E30613] mt-1 shrink-0" size={18} />
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase mb-1">Email Support</div>
                                        <a href="mailto:service@appliancerepairclinic.net" className="text-sm text-gray-300 hover:text-white break-all transition-colors">
                                            service@appliancerepairclinic.net
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Col 2: Kitchen Services */}
                        <div className="p-8 lg:p-10">
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Kitchen Repair</h4>
                            <ul className="space-y-4">
                                {['Refrigerator Repair', 'Oven & Range Repair', 'Dishwasher Repair', 'Ice Maker Repair', 'Freezer Maintenance', 'Sub-Zero Specialists', 'Garbage Disposals'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#FDC506] transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FDC506] transition-colors"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Laundry & More */}
                        <div className="p-8 lg:p-10">
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Laundry Services</h4>
                            <ul className="space-y-4">
                                {['Washing Machine Repair', 'Dryer Repair', 'Dryer Vent Cleaning', 'Stackable Units', 'Coin-Op Laundry', 'Maintenance Plans', 'Commercial Appliances'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#E30613] transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#E30613] transition-colors"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Service Areas */}
                        <div className="p-8 lg:p-10">
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Areas Served</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {['Sherman Oaks', 'Studio City', 'Encino', 'Tarzana', 'Woodland Hills', 'North Hollywood', 'Burbank', 'Glendale', 'Beverly Hills', 'Santa Monica'].map((city) => (
                                    <a href="#" key={city} className="text-sm text-gray-400 hover:text-white transition-colors block py-1">
                                        {city}, CA
                                    </a>
                                ))}
                            </div>
                            <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#E30613] mt-6 hover:underline">
                                View Full Service Map <ArrowUpRight size={12} />
                            </a>
                        </div>

                        {/* Col 5: Quick Links & Quote */}
                        <div className="p-8 lg:p-10 bg-[#161615]">
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Quick Links</h4>
                            <ul className="space-y-3 mb-10">
                                <li><a href="#" className="text-sm text-white font-bold hover:text-[#FDC506]">Home</a></li>
                                <li><a href="#about" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#services" className="text-sm text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#reviews" className="text-sm text-gray-400 hover:text-white">Reviews</a></li>
                                <li><a href="#contact" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
                            </ul>

                            <a href="#quote" className="block w-full py-4 bg-[#E30613] text-white text-center font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-white hover:text-[#1D1D1B] transition-all duration-300 shadow-lg">
                                Free Online Quote
                            </a>
                        </div>

                    </div>

                    {/* Trust Badges Strip */}
                    <div className="border-t border-white/10 bg-[#0A0A0A] px-6 md:px-12 py-6">
                        <div className="flex flex-wrap justify-center md:justify-between gap-6 text-xs font-bold text-gray-400 uppercase tracking-wide text-center">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-[#00B67A]" />
                                <span>Built on Trust & Quality</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-[#FDC506]" />
                                <span>No payments, no deposit, no interest</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe size={16} className="text-[#1866B9]" />
                                <span>Free Estimates, Competitive Pricing</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-600 font-medium">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <span>© {currentYear} Appliance Repair Clinic. All Rights Reserved.</span>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="opacity-50">Web Design & Marketing by</span>
                            <a href="#" className="text-white font-bold hover:text-[#E30613] transition-colors">Castells Media</a>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        @keyframes ping-slow {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        .group-hover\\:animate-ping-slow {
            animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
        }
        .group-hover\\:animate-shake {
            animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
        </footer >
    );
};
