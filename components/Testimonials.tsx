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
            { name: "Sarah Jenkins", date: "2 days ago", text: "My Refrigerator died on the hottest day of the year. Cool Doc was the only company that could come out same-day. Saved my groceries!", service: "Refrigerator Repair", stars: 5 },
            { name: "Michael Ross", date: "1 week ago", text: "Very professional. The technician explained exactly what was wrong with my washing machine drain pump. Price was fair.", service: "Washer Repair", stars: 5 },
            { name: "David Chen", date: "2 weeks ago", text: "Honest service. Another company told me I needed a whole new oven. These guys fixed a simple igniter and saved me thousands.", service: "Oven Repair", stars: 5 },
            { name: "Emily Watson", date: "3 weeks ago", text: "Dispatch was super friendly. Alex arrived right in the 2-hour window and tracked the leak in my dishwasher immediately.", service: "Dishwasher Repair", stars: 5 },
            { name: "James Rodriguez", date: "1 month ago", text: "I manage 4 properties in LA and exclusively use Cool Doc for appliance issues. Their 90-day warranty is legit.", service: "Commercial Appliances", stars: 5 },
            { name: "Linda K.", date: "1 month ago", text: "My Sub-Zero fridge stopped cooling. They had the OEM part on the truck! Amazing efficiency.", service: "Sub-Zero Repair", stars: 5 },
        ],
        yelp: [
            { name: "Jessica M.", date: "3 days ago", text: "Finally a contractor that shows up on time! My dryer was making a horrible noise and they fixed the belt in 30 mins.", service: "Dryer Repair", stars: 5 },
            { name: "Robert P.", date: "2 weeks ago", text: "Fair pricing. I called 3 other places for my Viking Range and Cool Doc was the most transparent about labor rates.", service: "Range Repair", stars: 5 },
            { name: "Amanda B.", date: "1 month ago", text: "Saved my Thanksgiving! Oven broke on Wednesday, fixed by Thursday morning. Highly recommend.", service: "Emergency Oven Repair", stars: 5 },
            { name: "Tom H.", date: "1 month ago", text: "Technician wore booties and cleaned up the workspace perfectly. Fixed my ice maker quickly.", service: "Ice Maker Repair", stars: 5 },
            { name: "Karen S.", date: "2 months ago", text: "Had a tricky issue with my dryer vent. They diagnosed the airflow problem that others missed.", service: "Dryer Repair", stars: 5 },
            { name: "Brian L.", date: "2 months ago", text: "Super polite dispatcher. The tech, Alex, was a wizard with my old washing machine. Got it spinning again.", service: "Washer Maintenance", stars: 5 },
        ],
        facebook: [
            { name: "Patricia Lewis", date: "Yesterday", text: "Thank you Cool Doc for fixing my freezer before everything melted! You guys are lifesavers.", service: "Freezer Fix", stars: 5 },
            { name: "Mark Stevens", date: "1 week ago", text: "Highly recommend. Fast, local, and they actually pick up the phone when you call.", service: "Appliance Repair", stars: 5 },
            { name: "Lisa Ray", date: "3 weeks ago", text: "Love that they are a local LA business. Support local! Great service on my washing machine.", service: "Washer Fix", stars: 5 },
            { name: "Kevin Hart", date: "1 month ago", text: "Used the $55 off coupon for my first repair. Great deal and solid work on my stove.", service: "Stove Repair", stars: 5 },
            { name: "Nancy Drew", date: "2 months ago", text: "Fast response time. I posted about my broken fridge and they messaged me within minutes to schedule.", service: "Fridge Repair", stars: 5 },
            { name: "Greg O.", date: "2 months ago", text: "The technician was very knowledgeable about high-end brands like Viking and Wolf.", service: "Viking Range", stars: 5 },
        ],
        angi: [
            { name: "Project #9281", date: "Verified Hire", text: "Hired for a washer/dryer installation check. Passed inspection with flying colors.", service: "Appliance Install", stars: 5 },
            { name: "Project #8821", date: "Verified Hire", text: "Technician was punctual and adhered to all safety guidelines. Very professional interaction.", service: "Safety Check", stars: 5 },
            { name: "Project #7732", date: "Verified Hire", text: "Fixed a leaking freezer. The upfront quote was exactly what I paid. No bait and switch.", service: "Freezer Repair", stars: 5 },
            { name: "Project #6641", date: "Verified Hire", text: "Excellent communication from the dispatch team. Appreciated the photo of the tech before arrival.", service: "General Service", stars: 5 },
            { name: "Project #5512", date: "Verified Hire", text: "Quality work. They had the specialty tools needed for my imported range.", service: "Specialty Appliance", stars: 5 },
            { name: "Project #4491", date: "Verified Hire", text: "A+ rating is well deserved. Clean, fast, and reliable.", service: "General Maintenance", stars: 5 },
        ]
    };

    const platforms = [
        {
            id: 'google',
            label: 'Google Reviews',
            color: '#4285F4',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'yelp',
            label: 'Yelp',
            color: '#D32323',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M11.08 12.85l-.53 2.5c-.22 1.04.53 1.67 1.17 1.47l2.22-.69c.49-.15.67-.67.49-1.17l-2.4-6.77c-.21-.58-1.01-.48-1.09.12l-.25 2.04c-.06.48.12.96.39 1.32l.25 1.18zm3.68-2.26l2.09 1.44c.87.6.96 1.6.22 1.99l-2.06 1.08c-.47.24-.98-.07-1.04-.56l-.52-4.12c-.08-.6.54-1.03 1.04-.71l.27 1.88zm-2.17 6.2l.52 2.5c.22 1.04-.8 1.56-1.38 1.01l-1.67-1.58c-.38-.36-.28-.95.19-1.18l6.13-3.01c.53-.26.92.54.42.84l-1.82 1.11-2.39.31zm-4.04-3.62l-2.09-1.44c-.87-.6-.47-1.8.53-1.77l2.31.07c.53.02.87.51.7 1.01l-2.26 6.54c-.2.57-1.04.45-1.05-.16l.07-1.9.2-2.35zm-1.02-6.91l1.67 1.58c.38.36.97.13 1.04-.38l.47-2.29c.11-.5-.36-.93-.85-.79L3.78 6.76c-.56.16-.63 1.01-.09 1.37l2.23 1.53 1.65-1.2z" />
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'facebook',
            label: 'Facebook',
            color: '#1877F2',
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M15.84 12H13v7.84h-3.07V12H8.24v-2.82h1.69V7.66c0-1.96 1.07-3.16 3.46-3.16.87 0 1.93.08 1.93.08v2.33h-1.39c-.87 0-1.24.61-1.24 1.36v.91h2.45l-.3 2.82z" />
                </svg>
            ),
            rating: '4.9'
        },
        {
            id: 'angi',
            label: 'Angi',
            color: '#00B67A',
            icon: (
                <div className="w-5 h-5 rounded-full bg-current flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">a</span>
                </div>
            ),
            rating: '4.8'
        }
    ];

    return (
        <section className="py-24 bg-white relative z-20" id="reviews">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="text-center mb-12 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/30 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-6">
                        <MessageCircle size={12} className="text-[#FDC506]" />
                        Community Feedback
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] mb-6">
                        LOCAL <span className="text-[#FDC506]">FAVORITES</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        Don't just take our word for it. We aggregate verified reviews from the most trusted platforms.
                    </p>

                </div>

                {/* TABS NAVIGATION */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {platforms.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActiveTab(p.id as Platform)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all duration-300 ${activeTab === p.id
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

                {/* REVIEWS GRID (2 ROWS) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviewsData[activeTab].map((review, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="bg-[#F8FAFC] p-8 rounded-[2rem] border border-gray-100 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Verified Badge */}
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
                                    className="text-[9px] font-black uppercase px-2 py-1 rounded"
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

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <button className="text-sm font-bold text-gray-400 hover:text-[#1D1D1B] transition-colors flex items-center gap-2 group">
                        View all 2,500+ reviews on {platforms.find(p => p.id === activeTab)?.label}
                        <span className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-[#1D1D1B] group-hover:text-white transition-colors">→</span>
                    </button>
                </div>

            </div>
        </section >
    );
};