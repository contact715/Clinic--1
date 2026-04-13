
import React from 'react';
import { Phone, Mail, Accessibility } from 'lucide-react';
import { NavigateFn } from '../../App';

interface AccessibilityPageProps {
  navigate: NavigateFn;
}

export const AccessibilityPage: React.FC<AccessibilityPageProps> = ({ navigate: _navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Legal</div>
          <h1 className="text-4xl md:text-6xl font-[900] text-white tracking-tight leading-tight mb-4">
            ACCESSIBILITY STATEMENT
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Cool Doc HVAC Service is committed to making our website accessible to everyone.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-10">

              {/* Our Commitment */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1866B9]/20 bg-[#1866B9]/10 text-[#1866B9] text-xs font-bold uppercase tracking-wider mb-5">
                  <Accessibility size={12} />
                  Our Commitment
                </div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Our Commitment
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We strive to ensure our website conforms to WCAG 2.1 Level AA guidelines. This means we work to make our content perceivable, operable, understandable, and robust for all users, including those who rely on assistive technologies. We regularly review our pages and improve accessibility as part of our ongoing development process.
                </p>
              </div>

              {/* Known Issues */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Known Issues
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We are actively working to improve keyboard navigation and screen reader compatibility across all pages. Some interactive components, including our chat assistant and booking forms, may present challenges for certain assistive technologies. If you encounter any barriers while using our site, please contact us directly — we want to know.
                </p>
              </div>

              {/* Alternative Access */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Alternative Access
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  If you have difficulty accessing any part of our website, you can reach our team directly by phone. We can provide all information by phone, including quotes, scheduling, service details, and answers to any questions.
                </p>
                <div className="bg-[#F4F6F8] rounded-2xl p-6">
                  <p className="text-sm font-bold text-[#1D1D1B] mb-1">Call us directly</p>
                  <a href="tel:8187310445" className="text-[#1866B9] font-bold hover:underline text-sm">
                    (818) 731-0445
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Available 7 days a week, 7am – 8pm</p>
                </div>
              </div>

              {/* Feedback */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Feedback
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Your feedback helps us improve. If you experience an accessibility barrier on our site, contact us and we will do our best to fix it. We respond to all accessibility feedback within 2 business days.
                </p>
                <div className="bg-[#F4F6F8] rounded-2xl p-6 space-y-2">
                  <p className="text-sm font-bold text-[#1D1D1B]">Contact us</p>
                  <p className="text-sm text-gray-600">
                    Email:{' '}
                    <a href="mailto:info@cooldochvac.com" className="text-[#1866B9] hover:underline">
                      info@cooldochvac.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone:{' '}
                    <a href="tel:8187310445" className="text-[#1866B9] hover:underline">
                      (818) 731-0445
                    </a>
                  </p>
                </div>
              </div>

              {/* Standards Reference */}
              <div>
                <h2 className="text-xl font-[900] text-[#1D1D1B] mb-3 pb-3 border-b border-gray-100">
                  Standards Reference
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Our accessibility work is guided by the following standards:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>WCAG 2.1 (Web Content Accessibility Guidelines), Level AA</li>
                  <li>Section 508 of the Rehabilitation Act</li>
                  <li>ADA Title III digital accessibility guidelines</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-6">Need help accessing our website? We are here.</p>
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
              Email info@cooldochvac.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
