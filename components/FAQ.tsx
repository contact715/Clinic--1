
import React, { useState } from 'react';
import { Plus, Minus, Wallet, ShieldCheck, Clock, BadgeCheck, Phone, MessageCircle, User } from 'lucide-react';

interface FAQItemProps {
    q: string;
    a: string;
    icon: React.ReactNode;
    color: string;
    isOpen: boolean;
    toggle: () => void;
    idx: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a, icon, color, isOpen, toggle, idx }) => {
    return (
        <div
            onClick={toggle}
            className={`group relative bg-white rounded-[2rem] p-6 md:p-8 cursor-pointer border transition-all duration-500 ${isOpen
                ? 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-gray-200 ring-1 ring-black/5'
                : 'shadow-sm border-gray-100 hover:border-gray-200 hover:translate-y-[-2px]'
                }`}
        >
            <div className="flex items-start justify-between gap-6">

                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? `bg-[${color}] text-white` : `bg-gray-50 text-[${color}]`
                    }`} style={{ backgroundColor: isOpen ? color : '#F8FAFC', color: isOpen ? 'white' : color }}>
                    {icon}
                </div>

                <div className="flex-grow pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#1D1D1B]' : 'text-gray-600 group-hover:text-[#1D1D1B]'}`}>
                            {q}
                        </h3>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#1D1D1B] text-white border-[#1D1D1B] rotate-180' : 'bg-white text-gray-400 border-gray-200 group-hover:border-[#1D1D1B]'
                            }`}>
                            <Minus size={16} className={`absolute transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                            <Plus size={16} className={`absolute transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className="pt-4 pb-2">
                                <p className="text-gray-500 leading-relaxed mb-4">
                                    {a}
                                </p>

                                {/* "Verified" Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold text-green-700 uppercase tracking-wide">
                                    <BadgeCheck size={12} className="fill-green-500 text-white" />
                                    Verified by Tech Team
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "Is it better to repair or replace my appliance?",
            a: "Our rule of thumb: if repair costs are less than 50% of a new machine's price, repair is better. Our techs give honest advice on whether your specific model is worth saving.",
            icon: <Wallet size={24} />,
            color: "#00B67A"
        },
        {
            q: "Do you warranty your parts and labor?",
            a: "Yes! We provide a 90-day warranty on all labor and parts. If the appliance fails for the same reason within 90 days, we fix it for free.",
            icon: <ShieldCheck size={24} />,
            color: "#1866B9"
        },
        {
            q: "How quickly can you fix my refrigerator?",
            a: "We prioritize refrigeration calls because we know food spoils fast. Same-Day Service is available for most calls booked before noon.",
            icon: <Clock size={24} />,
            color: "#E30613"
        },
        {
            q: "Do you service high-end brands like Sub-Zero?",
            a: "Absolutely. We specialize in luxury brands including Sub-Zero, Viking, Wolf, Thermador, Miele, and Bosch, as well as standard brands like Samsung and LG.",
            icon: <BadgeCheck size={24} />,
            color: "#FDC506"
        }
    ];

    return (
        <section className="py-32 bg-[#F8FAFC] relative z-20 overflow-hidden" id="faq">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Side: Sticky Header */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 relative">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1B]/5 border border-[#1D1D1B]/10 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-6">
                                <MessageCircle size={12} />
                                Knowledge Base
                            </div>
                            <h2 className="text-4xl md:text-6xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.9] mb-6">
                                GOT <br />
                                <span className="text-[#FDC506]">QUESTIONS?</span>
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 font-medium">
                                Everything you need to know about our diagnostic process for appliances.
                            </p>

                            {/* FAQ Robot - Decorative Element */}
                            <div className="absolute -top-28 right-0 w-48 md:w-64 pointer-events-none z-[-1] opacity-90 hidden lg:block">
                                <img src="/robots/faq-robot.png" alt="FAQ Robot" className="w-full h-auto object-contain" />
                            </div>

                            {/* Support Card */}
                            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg relative overflow-hidden group">

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                                            <User size={20} className="text-gray-400" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase">Online Now</div>
                                        <div className="font-bold text-[#1D1D1B]">Dispatch Team</div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mb-6 font-medium">
                                    Can't find the answer? We're ready to take your call.
                                </p>

                                <a href="tel:8187310445" className="flex items-center justify-center gap-2 w-full py-3 bg-[#1D1D1B] text-white rounded-xl font-bold shadow-lg hover:bg-[#E30613] transition-colors">
                                    <Phone size={16} />
                                    Call Support
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: FAQ List */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {faqs.map((item, idx) => (
                            <FAQItem
                                key={idx}
                                idx={idx}
                                {...item}
                                isOpen={openIndex === idx}
                                toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
