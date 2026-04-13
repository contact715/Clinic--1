
import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { NavigateFn } from '../../App';

interface DoNotSellPageProps {
  navigate: NavigateFn;
}

export const DoNotSellPage: React.FC<DoNotSellPageProps> = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Legal / CCPA</div>
          <h1 className="text-4xl md:text-6xl font-[900] text-white tracking-tight leading-tight mb-4">
            DO NOT SELL OR SHARE<br className="hidden md:block" /> MY PERSONAL INFORMATION
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Your rights under the California Consumer Privacy Act (CCPA).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-10">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#00B67A]/20 bg-[#00B67A]/10 text-[#00B67A] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={12} />
                CCPA Privacy Rights
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Your Rights
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  California residents have the right to opt out of the sale or sharing of their personal information with third parties. You also have the right to know what personal information we collect, the right to delete your information, and the right to non-discrimination for exercising these rights. This page explains how to submit a request.
                </p>
              </div>

              {/* What We Collect */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  What We Collect
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  When you contact us or book a service, we collect:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>Name, phone number, and email address submitted via our forms or calls</li>
                  <li>Service address for scheduling purposes</li>
                  <li>IP address and browser data collected by Google Analytics for aggregate traffic analysis</li>
                </ul>
                <p className="text-gray-600 leading-relaxed text-sm mt-4">
                  We do not collect sensitive personal data such as Social Security numbers, financial account numbers, or health information.
                </p>
              </div>

              {/* What We Don't Do */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  What We Don&apos;t Do
                </h2>
                <div className="bg-[#F4F6F8] rounded-2xl p-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00B67A] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>We do not sell your personal information to third parties.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00B67A] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>We do not share your information for cross-context behavioral advertising.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00B67A] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p>We do not use retargeting pixels or third-party advertising cookies.</p>
                  </div>
                </div>
              </div>

              {/* How to Submit a Request */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  How to Submit a Request
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  To submit a CCPA opt-out request, or to request access to or deletion of your personal information, contact us using any of the methods below. We respond to all requests within 15 business days.
                </p>
                <div className="bg-[#F4F6F8] rounded-2xl p-6 space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-[#1D1D1B]">By email</p>
                    <p className="text-gray-600">
                      Send to{' '}
                      <a href="mailto:info@cooldochvac.com?subject=CCPA Opt-Out Request" className="text-[#1866B9] hover:underline">
                        info@cooldochvac.com
                      </a>
                      {' '}with subject line: <span className="font-mono text-xs bg-gray-200 px-1.5 py-0.5 rounded">CCPA Opt-Out Request</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[#1D1D1B]">By phone</p>
                    <p className="text-gray-600">
                      Call us at{' '}
                      <a href="tel:8187310445" className="text-[#1866B9] hover:underline">
                        (818) 731-0445
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* More Information */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  More Information
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  For a full description of what information we collect, how we use it, and your complete privacy rights, see our full{' '}
                  <button
                    onClick={() => navigate('/privacy')}
                    className="text-[#1866B9] hover:underline font-medium"
                  >
                    Privacy Policy
                  </button>
                  . For questions about your data, contact us at any time — we are happy to help.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-6">Ready to submit a request? Reach out and we will handle it promptly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@cooldochvac.com?subject=CCPA Opt-Out Request"
              className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
            >
              <Mail size={16} />
              Email Us
            </a>
            <a
              href="tel:8187310445"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-[#1D1D1B] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#F4F6F8] transition-all duration-300"
            >
              <Phone size={16} />
              Call (818) 731-0445
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
