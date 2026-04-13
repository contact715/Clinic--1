
import React, { useState } from 'react';
import { Clock, Tag, Phone, ArrowRight, BookOpen, Mail } from 'lucide-react';
import { NavigateFn } from '../../App';
import { BLOG_ARTICLES, BlogArticle } from '../../data/blogArticles';

interface BlogPageProps {
  navigate: NavigateFn;
}

const CATEGORIES = ['All', 'Maintenance', 'AC Repair', 'Heating', 'Buying Guide', 'Commercial'];

const CATEGORY_COLORS: Record<string, string> = {
  Maintenance: 'bg-[#0ea5e9]/10 text-[#0ea5e9]',
  'AC Repair': 'bg-[#E30613]/10 text-[#E30613]',
  Heating: 'bg-[#FDC506]/20 text-amber-700',
  'Buying Guide': 'bg-[#1866B9]/10 text-[#1866B9]',
  Commercial: 'bg-gray-100 text-gray-600',
};

interface ArticleCardProps {
  article: BlogArticle;
  navigate: NavigateFn;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, navigate }) => {
  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => navigate(`/blog/${article.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${article.slug}`); }}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">{article.category}</span>
        </div>
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
          {article.category}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
          <span>{article.date}</span>
          <span className="w-px h-3 bg-gray-200"></span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {article.readTime}
          </span>
        </div>

        <h3 className="text-xl font-[800] text-[#1D1D1B] leading-tight mb-3 group-hover:text-[#1866B9] transition-colors flex-1">
          {article.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D1D1B] uppercase tracking-wider group-hover:text-[#E30613] transition-colors">
          Read More
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};

interface FeaturedArticleProps {
  article: BlogArticle;
  navigate: NavigateFn;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, navigate }) => {
  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col lg:flex-row"
      onClick={() => navigate(`/blog/${article.slug}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${article.slug}`); }}
      aria-label={`Read featured article: ${article.title}`}
    >
      {/* Image placeholder */}
      <div className="lg:w-2/5 h-64 lg:h-auto bg-gradient-to-br from-[#1866B9]/20 to-[#1D1D1B] flex items-center justify-center shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="relative text-center px-8">
          <div className="text-5xl font-[900] text-white/10 uppercase tracking-tighter leading-none mb-2">
            {article.category}
          </div>
          <BookOpen size={40} className="text-white/20 mx-auto" />
        </div>
        <div className={`absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
          {article.category}
        </div>
        <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FDC506]/90 text-[#1D1D1B]">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-12 flex flex-col justify-center flex-1">
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wide mb-5">
          <span>{article.date}</span>
          <span className="w-px h-3 bg-gray-200"></span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {article.readTime}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-[900] text-[#1D1D1B] leading-tight mb-4 group-hover:text-[#1866B9] transition-colors">
          {article.title}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
          {article.excerpt}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#1D1D1B] group-hover:bg-[#E30613] transition-colors px-6 py-3 rounded-xl self-start uppercase tracking-wider">
          Read Full Article
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const SubscribeStrip: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 px-8 py-10 my-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Mail size={16} className="text-[#1866B9]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1866B9]">HVAC Tips</span>
          </div>
          <h3 className="text-xl font-[900] text-[#1D1D1B] leading-tight mb-1">
            Get seasonal HVAC tips in your inbox.
          </h3>
          <p className="text-sm text-gray-500">
            One email per month. Maintenance reminders, energy-saving tips, and Valley-specific advice. No promotions, no spam.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-4 text-sm font-bold text-green-700 shrink-0">
            Thanks! We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1D1D1B] placeholder-gray-400 focus:outline-none focus:border-[#1866B9] transition-colors w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#1D1D1B] hover:bg-[#1866B9] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0"
            >
              Get HVAC Tips
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredArticle = BLOG_ARTICLES[0];
  const totalCount = BLOG_ARTICLES.length;

  const filtered = activeCategory === 'All'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1866B910,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#E3061308,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <BookOpen size={11} />
            HVAC Knowledge Base
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            HVAC TIPS<br />
            <span className="text-[#0ea5e9]">&amp; GUIDES</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Practical advice for San Fernando Valley homeowners. No filler, no upsells, just the information you need to keep your system running and know when to call a pro.
          </p>
          <p className="text-white/30 text-sm mt-4 font-bold uppercase tracking-wider">
            {totalCount} articles and growing
          </p>
        </div>
      </section>

      {/* Featured Article + Subscribe + Grid */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* Featured Article */}
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Featured Article</span>
          </div>
          <FeaturedArticle article={featuredArticle} navigate={navigate} />

          {/* Subscribe Strip */}
          <SubscribeStrip />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1D1D1B] text-white shadow-md'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-[#1D1D1B]'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-[9px] ${activeCategory === cat ? 'text-white/50' : 'text-gray-400'}`}>
                    {BLOG_ARTICLES.filter(a => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(article => (
              <ArticleCard key={article.slug} article={article} navigate={navigate} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-bold">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-4">
                <Tag size={11} />
                Got an HVAC question?
              </div>
              <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-[0.95]">
                Talk to a tech.<br />
                <span className="text-[#0ea5e9]">Not a chatbot.</span>
              </h2>
              <p className="text-white/60 text-lg mt-4 max-w-lg">
                Our technicians pick up the phone. If you have a question about your system or need a second opinion on a quote, call us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:8187310445"
                className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
              >
                <Phone size={16} />
                (818) 731-0445
              </a>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
