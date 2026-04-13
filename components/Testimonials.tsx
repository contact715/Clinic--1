import React, { useState } from 'react';
import { Star, CheckCircle2, MessageCircle, ThumbsUp } from 'lucide-react';

type Platform = 'google' | 'yelp' | 'facebook' | 'angi';

interface Review {
    name: string;
    date: string;
    text: string;
    service: string;
    stars: number;
}

export const Testimonials: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Platform>('google');

    const reviewsData: Record<Platform, Review[]> = {
        google: [
            { name: "Sarah Jenkins", date: "2 days ago", text: "My AC stopped blowing cold air on the hottest July day I can remember. Cool Doc was out same-day and had it fixed before dinner. Actual lifesavers.", service: "AC Repair", stars: 5 },
            { name: "Michael Ross", date: "1 week ago", text: "The tech explained exactly what was wrong with my furnace heat exchanger and gave me two options. No pressure at all. Price was fair and he had the part on the truck.", service: "Furnace Repair", stars: 5 },
            { name: "David Chen", date: "2 weeks ago", text: "Another company told me I needed a whole new AC unit. Cool Doc found a refrigerant leak and fixed it for a fraction of the cost. Saved me close to $4,000.", service: "AC Repair", stars: 5 },
            { name: "Emily Watson", date: "3 weeks ago", text: "Dispatch was easy to deal with. Alex showed up in the 2-hour window, installed our Mitsubishi mini-split in under 3 hours, and left the place spotless.", service: "Mini-Split Install", stars: 5 },
            { name: "James Rodriguez", date: "1 month ago", text: "I manage 4 rental properties across the Valley. Cool Doc is the only HVAC company I call. Every tech has been solid, and the 90-day warranty is actually honored.", service: "Commercial HVAC", stars: 5 },
            { name: "Linda K.", date: "1 month ago", text: "My Daikin unit stopped heating in January. They had the OEM part on the truck — one visit, problem solved. No waiting around for parts to be ordered.", service: "Heating Repair", stars: 5 },
        ],
        yelp: [
            { name: "Jessica M.", date: "3 days ago", text: "Finally a contractor that shows up on time. My AC fan was making a grinding noise — they replaced the motor in under an hour and explained what caused it.", service: "AC Repair", stars: 5 },
            { name: "Robert P.", date: "2 weeks ago", text: "Called 3 companies for furnace pricing. Cool Doc was the most transparent — they told me exactly what the part costs and what labor costs. No mystery fees.", service: "Furnace Repair", stars: 5 },
            { name: "Amanda B.", date: "1 month ago", text: "AC gave out two days before a heat wave. Fixed by the next morning. I didn't have to suffer through a single hot night. Highly recommend.", service: "Emergency AC Repair", stars: 5 },
            { name: "Tom H.", date: "1 month ago", text: "Technician wore booties, cleaned up after himself completely, and fixed my Nest thermostat wiring issue without breaking anything else. Rare.", service: "HVAC Diagnostics", stars: 5 },
            { name: "Karen S.", date: "2 months ago", text: "Had a ductwork leak that two other companies completely missed. Cool Doc found it with a pressure test and sealed it properly. My energy bill dropped noticeably.", service: "Duct Repair", stars: 5 },
            { name: "Brian L.", date: "2 months ago", text: "Super polite dispatcher. Alex diagnosed my aging heat pump honestly — told me repair was worth it this time, didn't push for a replacement I didn't need.", service: "Heat Pump Repair", stars: 5 },
        ],
        facebook: [
            { name: "Patricia Lewis", date: "Yesterday", text: "Thank you Cool Doc for getting my AC running again before the weekend heat! Booked Monday morning, fixed by noon. You guys are genuinely great.", service: "AC Repair", stars: 5 },
            { name: "Mark Stevens", date: "1 week ago", text: "Highly recommend. Fast, local, and they actually pick up the phone when you call. That alone puts them ahead of half the competition.", service: "HVAC Service", stars: 5 },
            { name: "Lisa Ray", date: "3 weeks ago", text: "Love supporting local LA businesses. They did a full AC tune-up on our Carrier system and caught a clogged condensate drain before it caused water damage.", service: "AC Maintenance", stars: 5 },
            { name: "Kevin Hart", date: "1 month ago", text: "Used the $55 off coupon on my first visit. Great deal. They fixed a refrigerant leak on my LG mini-split and it's been running perfectly since.", service: "Mini-Split Repair", stars: 5 },
            { name: "Nancy Drew", date: "2 months ago", text: "Posted about my AC issue in a local neighborhood group. Cool Doc reached out within minutes and had someone out the next morning. Fast and professional.", service: "AC Repair", stars: 5 },
            { name: "Greg O.", date: "2 months ago", text: "The tech knew Mitsubishi and Daikin systems inside-out. Fixed our multi-zone mini-split issue that two other companies couldn't figure out.", service: "Ductless Repair", stars: 5 },
        ],
        angi: [
            { name: "Project #9281", date: "Verified Hire", text: "Hired for a full HVAC system inspection before a home purchase. Detailed written report, clear findings, no upselling. Exactly what I needed.", service: "HVAC Inspection", stars: 5 },
            { name: "Project #8821", date: "Verified Hire", text: "Technician was on time and walked me through every finding on my furnace before touching anything. Appreciated the transparency.", service: "Furnace Service", stars: 5 },
            { name: "Project #7732", date: "Verified Hire", text: "Fixed a refrigerant leak in my AC. The upfront quote was exactly what I paid at the end. Not a dollar more. Honest company.", service: "AC Repair", stars: 5 },
            { name: "Project #6641", date: "Verified Hire", text: "Excellent communication from dispatch. Got a photo of the tech before arrival and a follow-up call after service. That's a professional operation.", service: "HVAC Service", stars: 5 },
            { name: "Project #5512", date: "Verified Hire", text: "They had the specialty tools for my Lennox variable-speed system. Got it running properly for the first time in years. Others couldn't diagnose it.", service: "Lennox Repair", stars: 5 },
            { name: "Project #4491", date: "Verified Hire", text: "Serviced 3 HVAC units in my office building. Efficient, on schedule, and the work passed our property manager's inspection without a single note.", service: "Commercial HVAC", stars: 5 },
        ]
    };

    const platforms = [
        {
            id: 'google',
            label: 'Google Reviews',
            color: '#4285F4',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
                    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.96-2.91l-3.86-3c-1.08.72-2.43 1.16-4.1 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
                    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
                    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'yelp',
            label: 'Yelp',
            color: '#D32323',
            icon: (
                <svg viewBox="0 0 56 56" className="w-5 h-5">
                    <rect width="56" height="56" rx="10" fill="#D32323"/>
                    <path fill="white" d="M33.6 33.2l-1.3 6.7c-.2 1.3.9 2.2 1.9 1.8l5.9-2.7c.9-.4 1.1-1.5.4-2.2l-4.6-4.5c-.7-.7-2.1-.3-2.3.9zm-9.6 4.1l5.6 3.5c1.1.8 2.5.1 2.5-1.3l.1-6.1c0-1.3-1.2-2-2.4-1.4l-5.7 2.6c-1.1.6-1.2 2-.1 2.7zm-6.1-10.4l5.9 1.2c1.2.3 2.3-.9 1.9-2.2l-1.7-5.9c-.4-1.2-1.7-1.7-2.6-.8l-4.2 4.7c-.9.9-.4 2.6.7 3zm6.6-16l-2.8 5.7c-.6 1.1.2 2.5 1.5 2.5l6.1.1c1.3 0 2-1.2 1.5-2.4l-3.3-5.8c-.6-1.1-2.1-1.2-3-.1zm13.7 4.4c-.9-.9-2.4-.7-3 .5l-2.8 5.6c-.6 1.1.3 2.5 1.5 2.4l6.1-.6c1.2-.1 1.9-1.4 1.2-2.5l-3-5.4z"/>
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'facebook',
            label: 'Facebook',
            color: '#1877F2',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'angi',
            label: 'Angi',
            color: '#F05537',
            icon: (
                <svg viewBox="0 0 56 56" className="w-5 h-5">
                    <rect width="56" height="56" rx="10" fill="#F05537"/>
                    <path fill="white" d="M36.8 40h-5l-1.4-4H25.6l-1.4 4h-4.8l7.8-22h1.8l7.8 22zm-7.6-8l-2.2-6.8L24.8 32h4.4z"/>
                </svg>
            ),
            rating: '4.8'
        }
    ];

    return (
        <section className="py-24 bg-white relative z-20" id="reviews">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/30 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-6">
                        <MessageCircle size={12} className="text-[#FDC506]" />
                        Verified Customer Reviews
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] mb-6">
                        2,300+ VERIFIED REVIEWS.<br /><span className="text-[#FDC506]">HERE'S WHAT THEY SAY.</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        Real reviews from real Valley homeowners, verified across Google, Yelp, Facebook, and Angi.
                    </p>
                </div>

                {/* TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {platforms.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActiveTab(p.id as Platform)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${activeTab === p.id
                                ? 'border-transparent shadow-lg -translate-y-1'
                                : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'
                                }`}
                            style={{
                                backgroundColor: activeTab === p.id ? p.color : 'white',
                                color: activeTab === p.id ? 'white' : undefined
                            }}
                        >
                            <div className={`p-1 rounded-full ${activeTab === p.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {p.icon}
                            </div>
                            <div className="text-left leading-none">
                                <div className="text-xs font-bold uppercase tracking-wide opacity-90">{p.label}</div>
                                <div className="text-sm font-black">{p.rating} Rating</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* REVIEWS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviewsData[activeTab].map((review, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                        >
                            <div className="absolute top-8 right-8 text-gray-300">
                                {activeTab === 'google' && <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" opacity="0.2" /></svg>}
                                {activeTab === 'yelp' && <MessageCircle className="w-6 h-6 opacity-20" />}
                                {activeTab === 'facebook' && <ThumbsUp className="w-6 h-6 opacity-20" />}
                                {activeTab === 'angi' && <CheckCircle2 className="w-6 h-6 opacity-20" />}
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-[#FDC506] text-[#FDC506]" />
                                ))}
                            </div>

                            <p className="text-[#1D1D1B] font-medium mb-6 leading-relaxed h-20 line-clamp-3">
                                "{review.text}"
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-gray-200/60">
                                <div>
                                    <div className="font-bold text-[#1D1D1B] text-sm">{review.name}</div>
                                    <div className="text-[10px] text-gray-400 font-medium uppercase mt-0.5">{review.date}</div>
                                </div>
                                <div
                                    className="text-[9px] font-black uppercase px-2 py-1 rounded-lg"
                                    style={{
                                        color: platforms.find(p => p.id === activeTab)?.color,
                                        backgroundColor: `${platforms.find(p => p.id === activeTab)?.color}15`
                                    }}
                                >
                                    {review.service}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className="flex justify-center mt-12">
                    <a
                        href={`https://g.page/r/cool-doc-hvac/review`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#1866B9] hover:text-[#1D1D1B] transition-colors flex items-center gap-2 group underline underline-offset-4"
                    >
                        View all 2,300+ reviews on {platforms.find(p => p.id === activeTab)?.label}
                        <span className="w-4 h-4 bg-[#1866B9]/10 rounded-full flex items-center justify-center group-hover:bg-[#1D1D1B] group-hover:text-white transition-colors">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
};
