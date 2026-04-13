
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, Phone, Share2, ChevronRight, Check } from 'lucide-react';
import { NavigateFn } from '../../App';
import { BLOG_ARTICLES, BlogArticle } from '../../data/blogArticles';

interface BlogArticlePageProps {
  slug: string;
  navigate: NavigateFn;
}

const CATEGORY_COLORS: Record<string, string> = {
  Maintenance: 'bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20',
  'AC Repair': 'bg-[#E30613]/10 text-[#E30613] border-[#E30613]/20',
  Heating: 'bg-[#FDC506]/20 text-amber-700 border-[#FDC506]/30',
  'Buying Guide': 'bg-[#1866B9]/10 text-[#1866B9] border-[#1866B9]/20',
  Commercial: 'bg-gray-100 text-gray-600 border-gray-200',
};

interface RelatedCardProps {
  article: BlogArticle;
  navigate: NavigateFn;
}

const RelatedCard: React.FC<RelatedCardProps> = ({ article, navigate }) => (
  <button
    onClick={() => navigate(`/blog/${article.slug}`)}
    className="text-left w-full group p-4 rounded-2xl border border-gray-200 hover:border-[#1866B9]/30 hover:bg-[#1866B9]/5 transition-all duration-200"
  >
    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border mb-2 ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
      {article.category}
    </span>
    <p className="text-sm font-[700] text-[#1D1D1B] leading-snug group-hover:text-[#1866B9] transition-colors line-clamp-2">
      {article.title}
    </p>
    <p className="text-xs text-gray-400 mt-1">{article.readTime}</p>
  </button>
);

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ slug, navigate }) => {
  const [copied, setCopied] = useState(false);

  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  useEffect(() => {
    if (!article) return;

    document.title = `${article.title} | Cool Doc HVAC`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "author": {
        "@type": "Organization",
        "name": "Cool Doc HVAC Service",
        "url": "https://cooldochvac.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cool Doc HVAC Service",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cooldochvac.com/cooldoc-mascot.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://cooldochvac.com/blog/${article.slug}`
      }
    };

    const existing = document.getElementById('blog-schema');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'blog-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('blog-schema');
      if (s) s.remove();
    };
  }, [article]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!article) {
    return (
      <section className="pt-44 pb-32 bg-[#F4F6F8] min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-[900] text-[#1D1D1B] mb-4">Article Not Found</h1>
          <p className="text-gray-500 text-lg mb-8">This article doesn't exist or may have been moved.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#c0000f] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  const paragraphs = article.body.split('\n\n').filter(p => p.trim().length > 0);

  const related = BLOG_ARTICLES
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const fallbackRelated = related.length < 3
    ? [
        ...related,
        ...BLOG_ARTICLES
          .filter(a => a.slug !== slug && !related.find(r => r.slug === a.slug))
          .slice(0, 3 - related.length),
      ]
    : related;

  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-32 pb-0 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4">
          <ol className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase tracking-wider flex-wrap">
            <li>
              <button onClick={() => navigate('/')} className="hover:text-[#1D1D1B] transition-colors">
                Home
              </button>
            </li>
            <li><ChevronRight size={12} /></li>
            <li>
              <button onClick={() => navigate('/blog')} className="hover:text-[#1D1D1B] transition-colors">
                Blog
              </button>
            </li>
            <li><ChevronRight size={12} /></li>
            <li className="text-[#1D1D1B] truncate max-w-[200px] sm:max-w-none">{article.title}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white pt-10 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">

          {/* Back link */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-[#1D1D1B] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All Articles
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

            {/* Main Content */}
            <article>
              {/* Category badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-6 ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] leading-tight tracking-tight mb-6">
                {article.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-bold mb-8 pb-8 border-b border-gray-100">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span className="w-px h-4 bg-gray-200"></span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {article.readTime}
                </span>
                <span className="w-px h-4 bg-gray-200"></span>
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  Cool Doc HVAC Team
                </span>
              </div>

              {/* Share row */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Share2 size={12} />
                  Share:
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:border-[#1866B9] hover:text-[#1866B9] transition-all duration-200"
                >
                  {copied ? <Check size={12} className="text-green-500" /> : <Share2 size={12} />}
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>

              {/* Article body */}
              <div className="prose max-w-none">
                {paragraphs.map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  const sentences = trimmed.split('. ');
                  const firstSentence = sentences[0];
                  const rest = sentences.slice(1).join('. ');
                  const isSectionStarter = /^(\d+\.|First|Second|Third|The key|The |Here|A |An |On |In |For )/.test(trimmed);

                  return (
                    <p key={index} className="text-base md:text-lg text-[#1D1D1B]/80 leading-relaxed mb-6">
                      {isSectionStarter && sentences.length > 1 ? (
                        <>
                          <strong className="text-[#1D1D1B] font-[700]">{firstSentence}.</strong>
                          {rest ? ` ${rest}` : ''}
                        </>
                      ) : (
                        trimmed
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 p-8 rounded-3xl bg-[#1D1D1B] text-white">
                <p className="text-xl font-[800] leading-snug mb-2">
                  Need HVAC help? Call (818) 731-0445 for same-day service in San Fernando Valley.
                </p>
                <p className="text-white/60 text-sm mb-6">
                  We serve Tarzana, Woodland Hills, Encino, Sherman Oaks, Reseda, Northridge, and surrounding areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:8187310445"
                    className="inline-flex items-center justify-center gap-2 bg-[#E30613] text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
                  >
                    <Phone size={15} />
                    (818) 731-0445
                  </a>
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
                  >
                    Book Online
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-8">

              {/* Book a Service CTA */}
              <div className="rounded-3xl bg-[#E30613] p-7 text-white">
                <h3 className="text-xl font-[900] leading-tight mb-2">Book a Service</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Same-day service available across San Fernando Valley. Licensed, insured, and EPA-certified techs.
                </p>
                <a
                  href="tel:8187310445"
                  className="flex items-center justify-center gap-2 bg-white text-[#E30613] px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] hover:text-white transition-all duration-300 mb-3"
                >
                  <Phone size={14} />
                  (818) 731-0445
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
                >
                  Schedule Online
                </button>
              </div>

              {/* Related Articles */}
              {fallbackRelated.length > 0 && (
                <div className="rounded-3xl border border-gray-200 p-7">
                  <h3 className="text-sm font-[900] text-[#1D1D1B] uppercase tracking-widest mb-5">
                    Related Articles
                  </h3>
                  <div className="space-y-3">
                    {fallbackRelated.map(related => (
                      <RelatedCard key={related.slug} article={related} navigate={navigate} />
                    ))}
                  </div>
                </div>
              )}

              {/* Category badge */}
              <div className="rounded-3xl border border-gray-200 p-7">
                <h3 className="text-sm font-[900] text-[#1D1D1B] uppercase tracking-widest mb-4">
                  Browse by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Maintenance', 'AC Repair', 'Heating', 'Buying Guide', 'Commercial'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => navigate('/blog')}
                      className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${CATEGORY_COLORS[cat] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
