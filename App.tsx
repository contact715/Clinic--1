
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroText } from './components/HeroText';
import { HeroForm } from './components/HeroForm';
import { Neighborhood } from './components/Neighborhood';
import { ReviewBar } from './components/ReviewBar';
import { ServicesSection } from './components/ServicesSection';
import { Brands } from './components/Brands';
import { DetailedServices } from './components/DetailedServices';
import { WarrantySection } from './components/WarrantySection';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { FAQ } from './components/FAQ';
import { ServiceMap } from './components/ServiceMap';
import { Footer } from './components/Footer';
import { LiveBookings } from './components/LiveBookings';
import { ExitModal } from './components/ExitModal';
import { Preloader } from './components/Preloader';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ChatBot } from './components/ChatBot';
import { BlogSection } from './components/BlogSection';
import { SEOContent } from './components/SEOContent';
import { CostCalculator } from './components/CostCalculator';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative w-full min-h-screen overflow-x-hidden bg-[#F4F6F8] text-[#1D1D1B] font-sans selection:bg-[#E30613] selection:text-white scroll-smooth ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      
        {/* 1. Global Noise Overlay - Texture */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
        </div>

        {/* 2. Base Technical Grid (Static Grey) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* 3. GENERATIVE ART LAYER: "The Living Grid" */}
        <div 
            className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-500"
            style={{
                maskImage: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
                WebkitMaskImage: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
            }}
        >
            {/* The Aurora Gradient (Blue/Red/Yellow) - Parallax Movement - DIMMED */}
            <div 
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,#1866B9_0deg,#E30613_120deg,#FDC506_240deg,#1866B9_360deg)] opacity-15 animate-spin-slower blur-3xl will-change-transform"
                style={{ 
                    transform: 'translate(calc(var(--mouse-x, 0) * -0.03px), calc(var(--mouse-y, 0) * -0.03px))' 
                }}
            ></div>
            
            {/* GRID LINE HIGHLIGHT - Explicitly highlights borders */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to_right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
                WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
              }}
            ></div>
            
            {/* Core Hotspot - Brighter white glow exactly at cursor */}
            <div 
                className="absolute w-[300px] h-[300px] bg-white/30 blur-[80px] rounded-full pointer-events-none mix-blend-overlay"
                style={{ 
                    left: 'var(--mouse-x)', 
                    top: 'var(--mouse-y)', 
                    transform: 'translate(-50%, -50%)' 
                }}
            ></div>
        </div>

        <LiveBookings />
        <ExitModal />
        <ChatBot />

        <Header />

        <section className="relative w-full min-h-[100vh] flex flex-col pt-32 md:pt-40 pb-20 overflow-hidden">
          
          <Neighborhood videoUrl={null} />

          <div className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 relative z-20">
            <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7 order-1 relative">
                 {/* Decorative vertical line */}
                 <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden xl:block"></div>
                 <HeroText />
              </div>

              <div id="quote" className="lg:col-span-5 order-2 relative h-auto flex items-center justify-center lg:justify-end perspective-1000">
                  <HeroForm />
              </div>

            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
              <div className="w-5 h-8 border-2 border-[#1D1D1B] rounded-full flex justify-center p-1">
                  <div className="w-1 h-2 bg-[#E30613] rounded-full animate-scroll-dot"></div>
              </div>
          </div>
        </section>

        <ReviewBar />
        <ServicesSection />
        <Brands />
        <Process />
        <CostCalculator />
        <Testimonials />
        <TeamSection />
        <FAQ />
        <DetailedServices />
        <WhyChooseUs />
        <WarrantySection />
        <ServiceMap />
        <BlogSection />
        <SEOContent />
        <Footer />
        
        <style>{`
          @keyframes scroll-dot {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(10px); opacity: 0; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          @keyframes spin-slower {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slower {
            animation: spin-slower 20s linear infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .perspective-1000 {
              perspective: 1000px;
          }
        `}</style>

      </div>
    </>
  );
};

export default App;
