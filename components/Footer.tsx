
import React, { useRef } from 'react';
import { Phone, ArrowUpRight, MapPin, Mail, Clock, ShieldCheck, Globe } from 'lucide-react';
import { NavigateFn } from '../App';

interface FooterProps {
  navigate: NavigateFn;
}

const HVAC_SERVICES = [
  { label: 'AC Repair & Install', href: '/ac-repair' },
  { label: 'Heating & Furnace',   href: '/heating' },
  { label: 'Ductless Mini-Splits', href: '/ductless' },
  { label: 'Maintenance Plans',   href: '/membership' },
  { label: 'Commercial HVAC',     href: '/commercial' },
  { label: 'Residential HVAC',    href: '/residential' },
  { label: 'HVAC Installation',   href: '/hvac-installation' },
  { label: 'Heat Pump Service',   href: '/heat-pump' },
];

const ABOUT_LINKS = [
  { label: 'About Us',            href: '/about' },
  { label: 'Customer Reviews',    href: '/reviews' },
  { label: 'Licenses & Insurance', href: '/licenses' },
  { label: 'Our Process',         href: '/#process' },
  { label: 'Contact',             href: '/contact' },
];

const RESOURCES_LINKS = [
  { label: 'Blog & HVAC Tips',  href: '/blog' },
  { label: 'FAQ',               href: '/faq' },
  { label: 'Financing',         href: '/financing' },
  { label: 'Pricing & Rates',   href: '/pricing' },
  { label: 'Current Specials',  href: '/specials' },
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms of Service',  href: '/terms' },
  { label: 'Cookie Policy',     href: '/cookies' },
  { label: 'Accessibility',     href: '/accessibility' },
];

const SERVICE_AREAS = [
  'Tarzana', 'Woodland Hills', 'Encino',
  'Sherman Oaks', 'Burbank', 'Northridge',
  'Studio City', 'Van Nuys', 'North Hollywood', 'Glendale'
];

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ctaRef.current) {
      const rect = ctaRef.current.getBoundingClientRect();
      ctaRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
      ctaRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  const handleNav = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href.includes('/#')) {
      const [path, hash] = href.split('#');
      navigate(path || '/');
      setTimeout(() => {
        const el = document.querySelector(`#${hash}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="relative z-20">

      {/* Marquee */}
      <div className="w-full bg-[#E30613] overflow-hidden py-3 relative z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-sm font-black text-white tracking-widest uppercase">EMERGENCY HVAC SERVICE AVAILABLE</span>
              <span className="mx-4 text-[#FDC506]">•</span>
              <span className="text-sm font-black text-white tracking-widest uppercase">SAME DAY RESPONSE</span>
              <span className="mx-4 text-[#FDC506]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Area */}
      <div
        ref={ctaRef}
        onMouseMove={handleMouseMove}
        className="relative bg-[#F4F6F8] text-[#1D1D1B] overflow-hidden py-24 md:py-32 group"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
          style={{
            maskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
            WebkitMaskImage: 'radial-gradient(600px circle at var(--x) var(--y), black, transparent)',
          }}
        >
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#0ea5e9_120deg,#E30613_240deg,#1866B9_360deg)] opacity-20 animate-spin-slower blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay"></div>
          <div
            className="absolute w-[200px] h-[200px] bg-white/60 blur-[60px] rounded-full pointer-events-none mix-blend-overlay"
            style={{ left: 'var(--x)', top: 'var(--y)', transform: 'translate(-50%, -50%)' }}
          ></div>
        </div>

        <div className="px-4 sm:px-6 relative z-10">
          <div className="max-w-[1440px] mx-auto">

            <div className="flex items-center gap-4 mb-8 opacity-60">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#1D1D1B] border border-gray-300 rounded px-2 py-1 bg-white/50 backdrop-blur">
                <div className="w-1.5 h-1.5 bg-[#00B67A] rounded-full animate-pulse"></div>
                <span>TECHS: DISPATCHING</span>
              </div>
              <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase hidden sm:block">
                Response Time: Same Day // Coverage: San Fernando Valley
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl relative">
                <h2 className="text-[12vw] lg:text-[9rem] leading-[0.8] font-[900] tracking-tighter mb-8 text-[#1D1D1B]">
                  READY TO<br />
                  <span className="text-[#E30613]">FIX IT?</span>
                </h2>
                <div className="flex items-center gap-4 text-gray-600 text-lg md:text-xl max-w-xl">
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#00B67A]/10 rounded-full border border-[#00B67A]/20">
                    <div className="w-2 h-2 bg-[#00B67A] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-[#00B67A] uppercase tracking-wide">Live</span>
                  </div>
                  <p className="font-medium">Technicians active in your area. Book a diagnostic today.</p>
                </div>
              </div>

              <a
                href="tel:8187310445"
                className="group relative w-40 h-40 md:w-64 md:h-64 bg-[#1D1D1B] rounded-3xl flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-105 shrink-0 overflow-hidden z-20 shadow-2xl shadow-black/20 hover:bg-[#E30613]"
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 scale-100 opacity-0 group-hover:animate-ping-slow"></div>
                <Phone size={32} className="text-white fill-white mb-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
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

      {/* Mega Footer */}
      <div className="bg-[#111110] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">

          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 py-16 border-b border-white/10 relative">

            {/* Footer Robot - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[19.4rem] pointer-events-none hidden lg:block z-10">
              <img src="/robots/footer-robot.png" alt="Footer Robot" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            <div>
              <div className="flex flex-col items-start leading-none mb-6 select-none">
                <span
                  className="font-black text-[#E30613] uppercase text-[32px] tracking-tight"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '-0.02em' }}
                >COOL DOC</span>
                <span className="bg-[#FDC506] text-[#1D1D1B] font-black text-[9px] uppercase tracking-[0.18em] px-2.5 py-[3px] rounded-sm mt-1">
                  HVAC SERVICE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white max-w-md leading-tight">
                Your HVAC experts in Los Angeles and the San Fernando Valley.
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { title: '15+', sub: 'Years Experience' },
                { title: '24/7', sub: 'Fast Response' },
                { title: 'Local', sub: 'Family Owned' },
                { title: '4.9/5', sub: 'Top Rated' }
              ].map((item, i) => (
                <div key={i} className="border-l border-white/10 pl-6">
                  <div className="text-3xl font-black text-[#FDC506]">{item.title}</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* Col 1: HVAC Services */}
            <div className="p-8 lg:p-10">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">HVAC Services</h4>
              <ul className="space-y-4">
                {HVAC_SERVICES.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(item.href, e)}
                      className="text-sm font-medium text-gray-400 hover:text-[#FDC506] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#FDC506] transition-colors"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: About */}
            <div className="p-8 lg:p-10">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">About</h4>
              <ul className="space-y-4">
                {ABOUT_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(item.href, e)}
                      className="text-sm font-medium text-gray-400 hover:text-[#E30613] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#E30613] transition-colors"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div className="p-8 lg:p-10">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Resources</h4>
              <ul className="space-y-4">
                {RESOURCES_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(item.href, e)}
                      className="text-sm font-medium text-gray-400 hover:text-[#0ea5e9] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#0ea5e9] transition-colors"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Service Areas */}
            <div className="p-8 lg:p-10">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Service Areas</h4>
              <div className="grid grid-cols-1 gap-2">
                {SERVICE_AREAS.map((city) => (
                  <a
                    key={city}
                    href={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/city/${city.toLowerCase().replace(/\s+/g, '-')}`); }}
                    className="text-sm text-gray-400 hover:text-white transition-colors block py-1"
                  >
                    {city}, CA
                  </a>
                ))}
              </div>
              <a href="/#map" onClick={(e) => handleNav('/#map', e)} className="inline-flex items-center gap-1 text-xs font-bold text-[#0ea5e9] mt-6 hover:underline">
                View Full Service Map <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Col 5: Contact */}
            <div className="p-8 lg:p-10 bg-[#161615]">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-8">Contact</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#E30613] mt-0.5 shrink-0" size={16} />
                  <div className="text-sm text-gray-300">Tarzana, CA 91356<br />San Fernando Valley</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#E30613] mt-0.5 shrink-0" size={16} />
                  <div>
                    <a href="tel:8187310445" className="block text-lg font-bold text-white hover:text-[#FDC506] transition-colors">(818) 731-0445</a>
                    <span className="text-xs text-gray-500">Available 24/7 for emergencies</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-[#E30613] mt-0.5 shrink-0" size={16} />
                  <a href="mailto:info@cooldochvac.com" className="text-sm text-gray-300 hover:text-white break-all transition-colors">
                    info@cooldochvac.com
                  </a>
                </div>
              </div>

              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                className="block w-full mt-8 py-4 bg-[#E30613] text-white text-center font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white hover:text-[#1D1D1B] transition-all duration-300 shadow-lg"
              >
                Book a Technician
              </a>
            </div>

          </div>

          {/* Trust Strip */}
          <div className="border-t border-white/10 bg-[#0A0A0A] px-4 sm:px-6 py-6">
            <div className="flex flex-wrap justify-center md:justify-between gap-6 text-xs font-bold text-gray-400 uppercase tracking-wide text-center">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#00B67A]" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#FDC506]" />
                <span>No fix, no fee guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[#1866B9]" />
                <span>90-day warranty on all work</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-600 font-medium">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span>© {currentYear} Cool Doc HVAC Service. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/licenses" onClick={(e) => { e.preventDefault(); navigate('/licenses'); }} className="hover:text-white transition-colors">Licenses</a>
                <a href="/do-not-sell" onClick={(e) => { e.preventDefault(); navigate('/do-not-sell'); }} className="hover:text-white transition-colors">Do Not Sell My Info</a>
                <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-50">Web Design by</span>
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
        .animate-marquee { animation: marquee 20s linear infinite; }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .group-hover\\:animate-ping-slow { animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </footer>
  );
};
