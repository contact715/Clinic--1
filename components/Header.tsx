
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, MapPin, ChevronDown,
  Wind, Flame, ShieldCheck, Wrench, CalendarDays,
  HeartHandshake, Building2, Thermometer, Users, HelpCircle,
  BookOpen, DollarSign, Tag, Award, Star, FileText
} from 'lucide-react';
import { NavigateFn } from '../App';

interface HeaderProps {
  navigate: NavigateFn;
}

const TRUST_BADGES = [
  { icon: HeartHandshake, text: 'Family Owned' },
  { icon: CalendarDays,   text: 'Since 2010' },
  { icon: MapPin,         text: 'San Fernando Valley' },
  { icon: ShieldCheck,    text: 'Licensed & Insured' },
  { icon: Phone,          text: '(818) 731-0445' },
];

// ── Services mega-menu (two columns) ─────────────────────────────────────────
const SERVICES_COOLING = [
  { label: 'AC Repair',        href: '/ac-repair',          icon: Thermometer, color: '#0ea5e9' },
  { label: 'Ductless Mini-Splits', href: '/ductless',       icon: Wind,        color: '#0ea5e9' },
  { label: 'Residential HVAC', href: '/residential',        icon: Wind,        color: '#1866B9' },
  { label: 'Commercial HVAC',  href: '/commercial',         icon: Building2,   color: '#1866B9' },
  { label: 'HVAC Installation', href: '/hvac-installation', icon: Wind,        color: '#1866B9' },
  { label: 'Heat Pump Service', href: '/heat-pump',         icon: Wind,        color: '#0ea5e9' },
  { label: 'Air Quality',      href: '/air-quality',        icon: Wind,        color: '#1866B9' },
];

const SERVICES_HEATING = [
  { label: 'Heating & Furnace', href: '/heating',         icon: Flame,       color: '#E30613' },
  { label: 'Maintenance Plans', href: '/membership',       icon: Wrench,     color: '#1866B9' },
];

// ── Company dropdown ──────────────────────────────────────────────────────────
const COMPANY_LINKS = [
  { label: 'About Us',              href: '/about',     icon: Users,      color: '#1866B9' },
  { label: 'Customer Reviews',      href: '/reviews',   icon: Star,       color: '#FDC506' },
  { label: 'Licenses & Insurance',  href: '/licenses',  icon: Award,      color: '#0ea5e9' },
  { label: 'Contact Us',            href: '/contact',   icon: Phone,      color: '#E30613' },
];

// ── Resources dropdown ────────────────────────────────────────────────────────
const RESOURCES_LINKS = [
  { label: 'Blog & HVAC Tips',    href: '/blog',       icon: BookOpen,   color: '#1866B9' },
  { label: 'FAQ',                 href: '/faq',        icon: HelpCircle, color: '#0ea5e9' },
  { label: 'Financing Options',   href: '/financing',  icon: DollarSign, color: '#1866B9' },
  { label: 'Current Specials',    href: '/specials',   icon: Tag,        color: '#E30613' },
  { label: 'Pricing & Rates',     href: '/pricing',    icon: DollarSign, color: '#1866B9' },
];

type MenuKey = 'services' | 'company' | 'resources';

export const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setActiveMenu(null); setIsMobileOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveMenu(null);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const handleNav = (href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveMenu(null);
    setIsMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (href.includes('/#')) {
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

  const navBtnBase = `relative flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-[0.12em] rounded-xl transition-all duration-200 px-4 py-2 bg-[#1D1D1B] text-white`;
  const navBtnIdle = `hover:bg-[#E30613] hover:-rotate-2`;
  const navBtnActive = `bg-[#E30613] -rotate-2`;

  // ── Simple dropdown (Company / Resources) ────────────────────────────────
  const SimpleDropdown: React.FC<{
    menuKey: MenuKey;
    links: typeof COMPANY_LINKS;
    tagline: string;
    desc: string;
    accent: string;
  }> = ({ menuKey, links, tagline, desc, accent }) => (
    <div
      className={`absolute top-[calc(100%+1.25rem)] left-1/2 -translate-x-1/2 w-[480px] transition-all duration-200 origin-top z-50 ${
        activeMenu === menuKey ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'
      }`}
      onMouseEnter={() => openMenu(menuKey)}
      onMouseLeave={scheduleClose}
    >
      <div className="bg-white rounded-[1.75rem] shadow-2xl ring-1 ring-black/8 overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-5 p-6 flex flex-col justify-between relative overflow-hidden" style={{ background: '#f8fafc' }}>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10" style={{ background: accent }}></div>
            <div className="relative z-10">
              <h4 className="text-lg font-black text-[#1D1D1B] mb-1 leading-tight uppercase tracking-tight">{tagline}</h4>
              <div className="w-6 h-1 rounded-full mb-3" style={{ background: accent }}></div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a
                href="tel:8187310445"
                className="w-full flex items-center justify-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: accent }}
              >
                Call (818) 731-0445
              </a>
            </div>
          </div>

          <div className="col-span-7 p-6 bg-white">
            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3 pb-2 border-b border-gray-100">
              {menuKey === 'company' ? 'Company' : 'Resources'}
            </div>
            <ul className="space-y-0.5">
              {links.map((link, li) => (
                <li key={li}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(link.href, e)}
                    className="flex items-center gap-2.5 px-2 py-2 rounded-xl group transition-all duration-150"
                    onMouseEnter={e => (e.currentTarget.style.background = `${link.color}12`)}
                    onMouseLeave={e => (e.currentTarget.style.background = '')}
                  >
                    <link.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: link.color }} />
                    <span className="text-xs font-bold text-gray-700 group-hover:text-[#1D1D1B] transition-colors">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // ── Services mega-menu ────────────────────────────────────────────────────
  const ServicesMegaMenu: React.FC = () => (
    <div
      className={`absolute top-[calc(100%+1.25rem)] left-1/2 -translate-x-1/2 w-[620px] transition-all duration-200 origin-top z-50 ${
        activeMenu === 'services' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'
      }`}
      onMouseEnter={() => openMenu('services')}
      onMouseLeave={scheduleClose}
    >
      <div className="bg-white rounded-[1.75rem] shadow-2xl ring-1 ring-black/8 overflow-hidden">
        <div className="grid grid-cols-12">
          {/* Left panel */}
          <div className="col-span-4 p-6 flex flex-col justify-between relative overflow-hidden" style={{ background: '#f8fafc' }}>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10" style={{ background: '#0ea5e9' }}></div>
            <div className="relative z-10">
              <h4 className="text-lg font-black text-[#1D1D1B] mb-1 leading-tight uppercase tracking-tight">All Services</h4>
              <div className="w-6 h-1 rounded-full mb-3 bg-[#0ea5e9]"></div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                AC, heating, ductless, commercial. All brands, all systems. Same-day available.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
              <a
                href="tel:8187310445"
                className="w-full flex items-center justify-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-xl bg-[#E30613] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Call (818) 731-0445
              </a>
              <a
                href="/#map"
                onClick={(e) => handleNav('/#map', e)}
                className="w-full flex items-center justify-center gap-1.5 text-[10px] font-bold text-gray-500 hover:text-[#1D1D1B] transition-colors py-1"
              >
                <MapPin className="w-3 h-3" />
                View Service Areas
              </a>
            </div>
          </div>

          {/* Right panel: two columns */}
          <div className="col-span-8 p-6 bg-white">
            <div className="grid grid-cols-2 gap-6">
              {/* Cooling column */}
              <div>
                <div className="text-[9px] font-black text-[#0ea5e9] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                  <Thermometer className="w-3 h-3" /> Cooling & Systems
                </div>
                <ul className="space-y-0.5">
                  {SERVICES_COOLING.map((link, li) => (
                    <li key={li}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(link.href, e)}
                        className="flex items-center gap-2.5 px-2 py-2 rounded-xl group transition-all duration-150"
                        onMouseEnter={e => (e.currentTarget.style.background = `${link.color}12`)}
                        onMouseLeave={e => (e.currentTarget.style.background = '')}
                      >
                        <link.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: link.color }} />
                        <span className="text-xs font-bold text-gray-700 group-hover:text-[#1D1D1B] transition-colors">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Heating column */}
              <div>
                <div className="text-[9px] font-black text-[#E30613] uppercase tracking-widest mb-3 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                  <Flame className="w-3 h-3" /> Heating & Plans
                </div>
                <ul className="space-y-0.5">
                  {SERVICES_HEATING.map((link, li) => (
                    <li key={li}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(link.href, e)}
                        className="flex items-center gap-2.5 px-2 py-2 rounded-xl group transition-all duration-150"
                        onMouseEnter={e => (e.currentTarget.style.background = `${link.color}12`)}
                        onMouseLeave={e => (e.currentTarget.style.background = '')}
                      >
                        <link.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: link.color }} />
                        <span className="text-xs font-bold text-gray-700 group-hover:text-[#1D1D1B] transition-colors">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Specials promo pill */}
                <a
                  href="/specials"
                  onClick={(e) => handleNav('/specials', e)}
                  className="mt-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#E30613]/5 border border-[#E30613]/20 group transition-all hover:bg-[#E30613]/10"
                >
                  <Tag className="w-3.5 h-3.5 text-[#E30613]" />
                  <div>
                    <div className="text-[10px] font-black text-[#E30613] uppercase tracking-wide">Current Specials</div>
                    <div className="text-[9px] text-gray-500">$79 tune-up + more deals</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div ref={navRef} className="w-full">

          {/* RED TOP ACCENT LINE */}
          <div className="w-full h-[3px] bg-[#E30613]" />

          {/* TRUST RAIL */}
          <div className={`w-full bg-[#1D1D1B] overflow-hidden transition-all duration-400 ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
              <div className="flex items-center divide-x divide-white/10">
                {TRUST_BADGES.map((b, i) => (
                  <div key={i} className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-white/60 shrink-0 ${i === 0 ? 'pr-3' : 'px-3'}`}>
                    <b.icon className="w-3 h-3 text-[#E30613]" />
                    {b.text}
                  </div>
                ))}
              </div>
              <span className="hidden sm:block text-[9px] font-bold text-white/30 uppercase tracking-widest">Same-Day Service Available</span>
            </div>
          </div>

          {/* MAIN NAV — dark transparent */}
          <div className={`w-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#1D1D1B]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
              : 'bg-gradient-to-b from-[#1D1D1B]/90 to-transparent backdrop-blur-sm'
          }`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
              <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>

                  {/* LOGO */}
                  <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    className="flex items-center cursor-pointer group flex-shrink-0"
                  >
                    <div className="flex flex-col items-start leading-none select-none">
                      <span
                        className={`font-black text-[#E30613] uppercase tracking-tight transition-all duration-500 group-hover:scale-105 ${scrolled ? 'text-[22px]' : 'text-[26px]'}`}
                        style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '-0.02em' }}
                      >COOL DOC</span>
                      <span className="bg-[#FDC506] text-[#1D1D1B] font-black text-[8px] uppercase tracking-[0.18em] px-2 py-[2px] rounded-sm mt-0.5">
                        HVAC SERVICE
                      </span>
                    </div>
                  </a>

                  {/* DESKTOP NAV */}
                  <nav className="hidden lg:flex items-center h-full absolute left-1/2 -translate-x-1/2 gap-1">

                    {/* SERVICES mega-menu */}
                    <div className="relative" onMouseEnter={() => openMenu('services')} onMouseLeave={scheduleClose}>
                      <button
                        className={`${navBtnBase} ${activeMenu === 'services' ? navBtnActive : navBtnIdle}`}
                        onClick={() => activeMenu === 'services' ? setActiveMenu(null) : openMenu('services')}
                      >
                        Services
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                      <ServicesMegaMenu />
                    </div>

                    {/* COMPANY dropdown */}
                    <div className="relative" onMouseEnter={() => openMenu('company')} onMouseLeave={scheduleClose}>
                      <button
                        className={`${navBtnBase} ${activeMenu === 'company' ? navBtnActive : navBtnIdle}`}
                        onClick={() => activeMenu === 'company' ? setActiveMenu(null) : openMenu('company')}
                      >
                        Company
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
                      </button>
                      <SimpleDropdown
                        menuKey="company"
                        links={COMPANY_LINKS}
                        tagline="Cool Doc HVAC"
                        desc="Family-owned. Licensed, insured, and honest about pricing since 2010."
                        accent="#1866B9"
                      />
                    </div>

                    {/* RESOURCES dropdown */}
                    <div className="relative" onMouseEnter={() => openMenu('resources')} onMouseLeave={scheduleClose}>
                      <button
                        className={`${navBtnBase} ${activeMenu === 'resources' ? navBtnActive : navBtnIdle}`}
                        onClick={() => activeMenu === 'resources' ? setActiveMenu(null) : openMenu('resources')}
                      >
                        Resources
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                      </button>
                      <SimpleDropdown
                        menuKey="resources"
                        links={RESOURCES_LINKS}
                        tagline="Helpful Tools"
                        desc="HVAC tips, financing, FAQ, and current deals — everything you need before calling us."
                        accent="#0ea5e9"
                      />
                    </div>

                    {/* CONTACT direct */}
                    <a
                      href="/contact"
                      onClick={(e) => handleNav('/contact', e)}
                      className={`${navBtnBase} ${navBtnIdle}`}
                    >
                      Contact
                    </a>

                  </nav>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:8187310445"
                      className={`hidden sm:flex items-center gap-2 bg-[#1D1D1B] text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#E30613] ${scrolled ? 'px-4 py-2 text-[10px]' : 'px-5 py-2.5 text-[10px]'}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      (818) 731-0445
                    </a>
                    <a
                      href="/contact"
                      onClick={(e) => handleNav('/contact', e)}
                      className={`hidden lg:flex items-center gap-2 bg-[#E30613] text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#1D1D1B] ${scrolled ? 'px-4 py-2 text-[10px]' : 'px-5 py-2.5 text-[10px]'}`}
                    >
                      Book Now
                    </a>
                    <button
                      className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#1D1D1B] text-white rounded-xl transition-all hover:bg-[#E30613]"
                      onClick={() => setIsMobileOpen(true)}
                      aria-label="Open menu"
                    >
                      <Menu className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div className={`fixed inset-0 z-[9999] bg-[#1D1D1B] text-white transition-all duration-500 ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1D1D1B] transition-all"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="h-full flex flex-col px-8 pt-24 pb-10 overflow-y-auto">
          <div className="text-[10px] font-mono text-[#0ea5e9] uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
            Navigation
          </div>

          <nav className="flex-grow space-y-1">
            <div className="border-b border-white/10 pb-4 mb-2">
              <div className="w-full py-3 text-xs tracking-widest text-white/40 font-black uppercase">Services</div>
              <div className="grid grid-cols-2 gap-x-4">
                {[...SERVICES_COOLING, ...SERVICES_HEATING].map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    onClick={(e) => handleNav(link.href, e)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white font-medium py-1.5"
                  >
                    <link.icon className="w-3.5 h-3.5 shrink-0" style={{ color: link.color }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-b border-white/10 pb-4 mb-2">
              <div className="w-full py-3 text-xs tracking-widest text-white/40 font-black uppercase">Company</div>
              <div className="grid grid-cols-2 gap-x-4">
                {COMPANY_LINKS.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    onClick={(e) => handleNav(link.href, e)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white font-medium py-1.5"
                  >
                    <link.icon className="w-3.5 h-3.5 shrink-0" style={{ color: link.color }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-b border-white/10 pb-4 mb-2">
              <div className="w-full py-3 text-xs tracking-widest text-white/40 font-black uppercase">Resources</div>
              <div className="grid grid-cols-2 gap-x-4">
                {RESOURCES_LINKS.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    onClick={(e) => handleNav(link.href, e)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white font-medium py-1.5"
                  >
                    <link.icon className="w-3.5 h-3.5 shrink-0" style={{ color: link.color }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-8">
            <a
              href="tel:8187310445"
              className="flex items-center gap-4 text-xl font-bold hover:text-[#0ea5e9] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNav('/contact', e)}
              className="flex items-center gap-4 text-sm text-white/60 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <CalendarDays className="w-5 h-5" />
              </div>
              Book a Technician
            </a>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              San Fernando Valley, Los Angeles
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
