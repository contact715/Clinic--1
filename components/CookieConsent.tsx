
import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'cooldoc_cookie_consent';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1D1D1B] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-white/70 text-xs leading-relaxed flex-1">
          We use cookies to analyze traffic and improve your experience. California residents have the right to opt out.{' '}
          <a href="/privacy" className="underline text-white/90 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs font-bold text-white/70 px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-xs font-bold text-white px-4 py-2 rounded-lg bg-[#E30613] hover:bg-white hover:text-[#1D1D1B] transition-all duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
