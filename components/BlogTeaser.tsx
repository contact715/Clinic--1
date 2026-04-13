
import React from 'react';
import { Clock, ArrowRight, BookOpen, Phone } from 'lucide-react';
import { NavigateFn } from '../App';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogArticles';

interface BlogTeaserProps {
  navigate: NavigateFn;
}

const CATEGORY_COLORS: Record<string, string> = {
  Maintenance: 'bg-[#0ea5e9]/10 text-[#0ea5e9]',
  'AC Repair': 'bg-[#E30613]/10 text-[#E30613]',
  Heating: 'bg-[#FDC506]/20 text-amber-700',
  'Buying Guide': 'bg-[#1866B9]/10 text-[#1866B9]',
  Commercial: 'bg-gray-100 text-gray-600',
};

interface TeaserCardProps {
  article: BlogArticle;
  navigate: NavigateFn;
}

const TeaserCard: React.FC<TeaserCardProps> = ({ article, navigate }) => {
  const excerpt = article.excerpt.length > 100
    ? article.excerpt.slice(0, 100).trimEnd() + '...'
    : article.excerpt;

  return (
    <article
      className="group bg-white rounded-3xl border border-gray-200 p-7 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/blog/${article.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${article.slug}`); }}
      aria-label={`Read: ${article.title}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
          <Clock size={10} />
          {article.readTime}
        </span>
      </div>

      <h3 className="text-lg font-[800] text-[#1D1D1B] leading-snug mb-3 group-hover:text-[#1866B9] transition-colors flex-1">
        {article.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <span className="text-xs font-bold text-gray-400">{article.date}</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E30613] uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200">
          Read
          <ArrowRight size={12} />
        </span>
      </div>
    </article>
  );
};

export const BlogTeaser: React.FC<BlogTeaserProps> = ({ navigate }) => {
  const latestThree = BLOG_ARTICLES.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-amber-700 font-bold text-[10px] tracking-widest uppercase mb-4">
              <BookOpen size={11} />
              From the Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95]">
              HVAC TIPS<br />
              <span className="text-[#0ea5e9]">&amp; GUIDES</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-lg">
              Straight answers for San Fernando Valley homeowners. Know your system, spot problems early, and make better decisions when it's time to repair or replace.
            </p>
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1D1D1B] text-[#1D1D1B] text-xs font-bold uppercase tracking-wider hover:bg-[#1D1D1B] hover:text-white transition-all duration-200"
          >
            See all articles
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestThree.map(article => (
            <TeaserCard key={article.slug} article={article} navigate={navigate} />
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 rounded-3xl bg-[#F4F6F8] border border-gray-200 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#1D1D1B] font-[700] text-base">
            Have a question not covered here? Call us directly.
          </p>
          <a
            href="tel:8187310445"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#c0000f] transition-colors shrink-0"
          >
            <Phone size={14} />
            (818) 731-0445
          </a>
        </div>
      </div>
    </section>
  );
};
