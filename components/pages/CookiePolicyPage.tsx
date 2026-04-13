
import React from 'react';
import { Phone, Mail, Cookie } from 'lucide-react';
import { NavigateFn } from '../../App';

interface CookiePolicyPageProps {
  navigate: NavigateFn;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Legal</div>
          <h1 className="text-4xl md:text-6xl font-[900] text-white tracking-tight leading-tight mb-4">
            COOKIE POLICY
          </h1>
          <p className="text-white/50 text-base">Last Updated: March 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-10">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#FDC506]/30 bg-[#FDC506]/10 text-amber-700 text-xs font-bold uppercase tracking-wider">
                <Cookie size={12} />
                Cookie Policy
              </div>

              {/* What Are Cookies */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  What Are Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Cookies are small text files that websites store in your browser when you visit them. They help websites remember your preferences and understand how you use the site. Cookies do not contain executable code and cannot be used to access files on your device.
                </p>
              </div>

              {/* Cookies We Use */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Cookies We Use
                </h2>
                <div className="space-y-6 text-sm text-gray-600">
                  <div className="bg-[#F4F6F8] rounded-2xl p-6">
                    <p className="font-bold text-[#1D1D1B] mb-2">Essential / Functional</p>
                    <p className="leading-relaxed mb-3">
                      These cookies are required for the site to work correctly. They cannot be disabled.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-mono text-xs bg-gray-200 px-1.5 py-0.5 rounded">cooldoc_cookie_consent</span>
                        {' '} — stores your cookie consent preference so we do not ask again. Required for compliance.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F4F6F8] rounded-2xl p-6">
                    <p className="font-bold text-[#1D1D1B] mb-2">Analytics</p>
                    <p className="leading-relaxed">
                      We may use Google Analytics to understand site traffic patterns — which pages are visited, how long people stay, and where visitors come from. No personally identifiable information is collected through analytics. Google Analytics is configured with IP anonymization enabled.
                    </p>
                  </div>

                  <div className="bg-[#F4F6F8] rounded-2xl p-6">
                    <p className="font-bold text-[#1D1D1B] mb-2">Advertising and Tracking</p>
                    <p className="leading-relaxed">
                      We do not use advertising cookies or tracking cookies from third parties on this website. We do not run retargeting pixels or behavioral ad networks.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Control Cookies */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  How to Control Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  You can manage or delete cookies through your browser settings at any time. Most browsers let you view, block, or clear cookies under Settings or Preferences. The specific steps vary by browser:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                  <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                  <li>Edge: Settings &gt; Cookies and site permissions</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm mt-4">
                  Note that disabling cookies may affect some site functionality, including our cookie consent banner behavior.
                </p>
              </div>

              {/* Third Parties */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Third Parties
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  The following third-party services may process data when you use our site:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>
                    Google Analytics — for aggregate site usage statistics. Governed by{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1866B9] hover:underline">
                      Google's Privacy Policy
                    </a>.
                  </li>
                  <li>
                    Gemini AI (Google) — powers our on-site chat assistant. Messages you send in the chat are processed by Google's AI systems. See our{' '}
                    <button
                      onClick={() => navigate('/privacy')}
                      className="text-[#1866B9] hover:underline font-medium"
                    >
                      Privacy Policy
                    </button>
                    {' '}for details on data handling.
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Contact
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  If you have questions about our use of cookies, contact us at:
                </p>
                <div className="bg-[#F4F6F8] rounded-2xl p-6 space-y-2 text-sm">
                  <p className="font-bold text-[#1D1D1B]">Cool Doc HVAC Service</p>
                  <p className="text-gray-600">
                    Email:{' '}
                    <a href="mailto:info@cooldochvac.com" className="text-[#1866B9] hover:underline">
                      info@cooldochvac.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Phone:{' '}
                    <a href="tel:8187310445" className="text-[#1866B9] hover:underline">
                      (818) 731-0445
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-6">Questions about cookies or your data? We are happy to help.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8187310445"
              className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              Call (818) 731-0445
            </a>
            <a
              href="mailto:info@cooldochvac.com"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-[#1D1D1B] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#F4F6F8] transition-all duration-300"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
