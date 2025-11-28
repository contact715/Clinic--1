import React from 'react';
import { Phone, Zap } from 'lucide-react';

export const EmergencySection: React.FC = () => {
    return (
        <section className="py-20 bg-[#E30613] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="text-white max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase mb-6 animate-pulse">
                        <Zap size={12} className="fill-yellow-400 text-yellow-400" />
                        Urgent Response Team
                    </div>
                    <h2 className="text-4xl md:text-6xl font-[900] tracking-tight leading-none mb-6">
                        EMERGENCY? <br />
                        WE'RE ON THE WAY.
                    </h2>
                    <p className="text-white/80 text-lg font-medium max-w-lg mb-8">
                        Don't let a broken appliance ruin your day. Our rapid response team is ready to deploy immediately.
                    </p>
                    <a href="tel:8187310445" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E30613] rounded-2xl font-black text-xl hover:bg-[#1D1D1B] hover:text-white transition-colors shadow-xl">
                        <Phone size={24} className="fill-current" />
                        (818) 731-0445
                    </a>
                </div>

                <div className="relative w-full max-w-md md:max-w-lg">
                    <div className="absolute top-1/2 -left-20 w-full h-1 bg-white/20 blur-sm"></div>
                    <div className="absolute top-1/3 -left-32 w-3/4 h-0.5 bg-white/10 blur-sm"></div>
                    <div className="absolute bottom-1/3 -left-10 w-full h-0.5 bg-white/10 blur-sm"></div>

                    <img
                        src="/robots/emergency-robot.png"
                        alt="Emergency Robot"
                        className="w-full h-auto object-contain relative z-10 drop-shadow-2xl transform -scale-x-100"
                    />
                </div>

            </div>
        </section>
    );
};
