
import React from 'react';
import { Phone, Star, Check, ShieldCheck } from 'lucide-react';
import { HeroForm } from './HeroForm';

const PHOTO = '/generated/hero-hvac-bg.jpg';

export const HeroCarousel: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col overflow-hidden">

      {/* PHOTO BACKGROUND */}
      <div className="absolute inset-0">
        <img src={PHOTO} alt="" className="w-full h-full object-cover object-center" loading="eager" fetchPriority="high" width={3840} height={2160} />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex items-center pt-32 pb-52">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT */}
            <div className="lg:col-span-7">
              <h1
                className="font-[900] tracking-tight leading-[0.9] text-white mb-7 hero-a hero-a2"
                style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
              >
                SAME-DAY HVAC<br />
                REPAIR IN THE<br />
                <span className="text-[#E30613]">VALLEY.</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10 hero-a hero-a3">
                AC repair, heating, ductless mini-splits — 15+ years serving San Fernando Valley.{' '}
                <span className="text-white font-semibold">No fix, no fee.</span>
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 mb-10 hero-a hero-a4">
                <button
                  onClick={() => { window.location.href = 'tel:8187310445'; }}
                  className="group flex items-center gap-2.5 bg-[#E30613] hover:bg-white text-white hover:text-[#1D1D1B] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_40px_-8px_rgba(227,6,19,0.6)]"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  (818) 731-0445
                </button>
                <a
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                >
                  <ShieldCheck size={16} />
                  Free Estimate
                </a>
              </div>

            </div>

            {/* RIGHT: form */}
            <div id="quote" className="lg:col-span-5 flex justify-center lg:justify-end hero-a hero-a3">
              <HeroForm />
            </div>

          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pt-24">
        <div className="w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent py-7 sm:py-9">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            <div className="flex items-center gap-5 lg:pr-10 lg:border-r border-white/10 w-full lg:w-auto justify-center lg:justify-start shrink-0">
              <span className="text-6xl lg:text-8xl font-[900] text-[#E30613] tracking-tighter leading-none">5.0</span>
              <p className="font-bold text-white text-sm leading-snug max-w-[150px] uppercase tracking-wide">
                Average Trust Rating Among Our Customers
              </p>
            </div>

            <div className="flex flex-row items-center justify-center lg:justify-between w-full lg:pl-10 gap-4 lg:gap-8 xl:gap-10">
              {[
                { name: 'Google', rating: '4.9', reviews: '1,908', icon: (
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
                    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.96-2.91l-3.86-3c-1.08.72-2.43 1.16-4.1 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
                    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
                    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
                  </svg>
                )},
                { name: 'Facebook', rating: '4.9', reviews: '274', icon: (
                  <svg className="w-7 h-7 text-[#1877F2] fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
                { name: 'Yelp', rating: '4.9', reviews: '137', icon: (
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 16 16" fill="#FF1A1A">
                    <path d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27"/>
                  </svg>
                )},
                { name: 'Angi', rating: '4.8', reviews: '500', icon: (
                  <svg viewBox="0 0 56 56" className="w-7 h-7 shrink-0">
                    <rect width="56" height="56" rx="10" fill="#F05537"/>
                    <path fill="white" d="M36.8 40h-5l-1.4-4H25.6l-1.4 4h-4.8l7.8-22h1.8l7.8 22zm-7.6-8l-2.2-6.8L24.8 32h4.4z"/>
                  </svg>
                )},
              ].map((p, i, arr) => (
                <div key={i} className={`flex flex-col items-center gap-1.5 flex-1 min-w-0 ${i < arr.length - 1 ? 'sm:border-r sm:border-white/10' : ''}`}>
                  <div className="flex items-center gap-2.5">
                    {p.icon}
                    <span className="font-bold text-base lg:text-lg text-white whitespace-nowrap">{p.name}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(j => <Star key={j} size={15} className="fill-[#FDC506] text-[#FDC506]" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-400 mt-0.5 text-center whitespace-nowrap">
                    {p.rating} · {p.reviews} reviews
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .hero-a { opacity:0; animation: hIn .7s cubic-bezier(.16,1,.3,1) forwards }
        .hero-a1 { animation-delay:.05s } .hero-a2 { animation-delay:.15s }
        .hero-a3 { animation-delay:.3s } .hero-a4 { animation-delay:.45s }
        .hero-a5 { animation-delay:.6s }
        @keyframes hIn { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
};
