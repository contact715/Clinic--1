
import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "5 Signs Your Refrigerator Needs Immediate Repair",
      excerpt: "From strange noises to frost buildup, learn the early warning signals of compressor failure before you lose your groceries.",
      date: "Oct 12, 2023",
      category: "Maintenance",
      author: "Alex R.",
      image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?auto=format&fit=crop&q=80&w=800" // Kitchen/Fridge context
    },
    {
      title: "Gas vs. Electric Ranges: Which Lasts Longer?",
      excerpt: "A technician's perspective on the durability, repair costs, and cooking performance of modern appliances.",
      date: "Sep 28, 2023",
      category: "Buying Guide",
      author: "Mike T.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" // Kitchen cooking
    },
    {
      title: "Why Your Washer Smells (And How to Fix It)",
      excerpt: "Mold in the gasket is common in front-loaders. Here is our professional step-by-step cleaning protocol.",
      date: "Sep 15, 2023",
      category: "DIY Tips",
      author: "Sarah J.",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800" // Laundry
    }
  ];

  return (
    <section className="py-24 bg-white relative z-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200 text-[#1D1D1B] font-bold text-[10px] tracking-widest uppercase mb-4">
                    <Tag size={12} />
                    Knowledge Base
                </div>
                <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-none">
                    LATEST <span className="text-[#E30613]">INSIGHTS.</span>
                </h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#1D1D1B] hover:text-[#E30613] transition-colors">
                View All Articles <ArrowRight size={16} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-gray-200 border border-gray-100 shadow-sm">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-black text-[#1D1D1B] uppercase tracking-wide shadow-sm">
                            {post.category}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-[#E30613]" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <User size={12} className="text-[#1866B9]" />
                            {post.author}
                        </div>
                    </div>

                    <h3 className="text-xl font-[800] text-[#1D1D1B] mb-3 group-hover:text-[#1866B9] transition-colors leading-tight">
                        {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D1D1B] uppercase tracking-wider group-hover:underline decoration-2 decoration-[#FDC506] underline-offset-4">
                        Read Article
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 md:hidden text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#1D1D1B]">
                View All Articles <ArrowRight size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};
    