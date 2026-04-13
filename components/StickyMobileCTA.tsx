
import React, { useState, useEffect } from 'react';
import { Phone, CalendarDays } from 'lucide-react';
import { NavigateFn } from '../App';

interface StickyMobileCTAProps {
  navigate: NavigateFn;
}

const CONSENT_KEY = 'cooldoc_cookie_consent';

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ navigate }) => {
  const [visible, setVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [cookieConsentShowing, setCookieConsentShowing] = useState(false);

  // Animate in after 800ms delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Track path changes via popstate
  useEffect(() => {
    const onPopstate = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopstate);
    return () => window.removeEventListener('popstate', onPopstate);
  }, []);

  // Keep track of whether cookie consent banner is visible
  // Cookie consent shows when localStorage key is absent
  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem(CONSENT_KEY);
      setCookieConsentShowing(!stored);
    };
    checkConsent();

    // Poll lightly so we pick up when user accepts/declines
    const interval = setInterval(checkConsent, 500);
    return () => clearInterval(interval);
  }, []);

  // Hide on /contact page
  const isContactPage = currentPath === '/contact';
  if (isContactPage) return null;

  const handleCall = () => {
    window.location.href = 'tel:8187310445';
  };

  const handleBook = () => {
    navigate('/contact');
  };

  // Estimate cookie consent bar height (approx 72px on mobile)
  const bottomOffset = cookieConsentShowing ? 'bottom-[72px]' : 'bottom-0';

  return (
    <div
      className={`lg:hidden fixed left-0 right-0 z-30 border-t-2 border-[#E30613] transition-transform duration-[400ms] ease-out ${bottomOffset}`}
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div className="flex w-full h-14">
        {/* Call button — 55% width */}
        <button
          onClick={handleCall}
          className="flex items-center justify-center gap-2 bg-[#E30613] text-white font-bold text-sm uppercase tracking-wide rounded-none"
          style={{ width: '55%' }}
          aria-label="Call (818) 731-0445"
        >
          <Phone className="w-4 h-4 shrink-0" />
          (818) 731-0445
        </button>

        {/* Book button — 45% width */}
        <button
          onClick={handleBook}
          className="flex items-center justify-center gap-2 bg-[#1D1D1B] text-white font-bold text-sm uppercase tracking-wide rounded-none"
          style={{ width: '45%' }}
          aria-label="Book online"
        >
          <CalendarDays className="w-4 h-4 shrink-0" />
          Book Online
        </button>
      </div>
    </div>
  );
};
