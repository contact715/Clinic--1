
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { NavigateFn } from '../../App';

interface PrivacyPageProps {
  navigate: NavigateFn;
}

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: 'information-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Information' },
  { id: 'sharing', title: 'Information Sharing' },
  { id: 'ai-chat', title: 'AI Chat Assistant' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'contact', title: 'Contact Us' },
];

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ navigate }) => {
  const [activeSection, setActiveSection] = useState<string>('information-collected');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Legal</div>
          <h1 className="text-4xl md:text-6xl font-[900] text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-base">Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar Nav */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28 bg-white rounded-2xl border border-gray-200 p-6">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">On This Page</div>
                <nav className="space-y-1">
                  {SECTIONS.map(section => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                        activeSection === section.id
                          ? 'bg-[#1D1D1B] text-white font-bold'
                          : 'text-gray-600 hover:bg-[#F4F6F8] hover:text-[#1D1D1B]'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9 space-y-12">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12">
                <p className="text-gray-600 leading-relaxed mb-8">
                  This Privacy Policy describes how Cool Doc HVAC Service ("Cool Doc," "we," "us," or "our") collects, uses, and shares information when you visit our website or use our services. We are based in Tarzana, CA 91356 and serve the San Fernando Valley and surrounding areas.
                </p>

                {/* Section 1 */}
                <div id="information-collected" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Information We Collect</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>We collect information you give us directly when you contact us, fill out a form, or book a service. This includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Name, phone number, and email address</li>
                      <li>Service address and zip code</li>
                      <li>Description of the service issue</li>
                      <li>Payment information (processed through a secure third-party payment processor — we do not store card numbers)</li>
                    </ul>
                    <p>We also collect certain information automatically when you visit our website, including:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>IP address and general location</li>
                      <li>Browser type and device information</li>
                      <li>Pages visited and time spent on each page</li>
                      <li>Referral source (how you found our website)</li>
                    </ul>
                    <p>This automatic data is collected via Google Analytics. See the Cookies section for more detail.</p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="how-we-use" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">How We Use Information</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Schedule and dispatch technicians to your location</li>
                      <li>Communicate with you about your appointment, including confirmations and follow-ups</li>
                      <li>Process payments</li>
                      <li>Respond to questions and requests</li>
                      <li>Send service reminders (if you have opted in)</li>
                      <li>Improve our website and understand how visitors use it (via Google Analytics)</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    <p>We do not use your information for automated decision-making or profiling beyond what is described above.</p>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="sharing" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Information Sharing</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>We do not sell your personal information. We share information only in limited circumstances:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>With service providers who help us operate our business (scheduling software, payment processors, communication tools). These providers are contractually required to protect your information and use it only for the services we request.</li>
                      <li>With Google Analytics, which receives usage data to help us understand website traffic. Google's data use is governed by Google's Privacy Policy.</li>
                      <li>If required by law, court order, or government authority.</li>
                      <li>In connection with a merger, acquisition, or sale of business assets, in which case we will notify you before your information is transferred.</li>
                    </ul>
                  </div>
                </div>

                {/* Section: AI Chat */}
                <div id="ai-chat" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">AI Chat Assistant</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      Our website uses Google Gemini AI to power the chat assistant feature.
                      When you use the chat, your messages are processed by Google's AI systems.
                      Do not share sensitive personal information (such as Social Security numbers or credit card numbers) in the chat.
                      Google's AI data use is governed by Google's Privacy Policy at{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1866B9] hover:underline">
                        policies.google.com/privacy
                      </a>.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="cookies" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Cookies</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Our website uses cookies, which are small data files stored on your device. We use the following types:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Essential cookies: necessary for the website to function. Cannot be disabled.</li>
                      <li>Analytics cookies: set by Google Analytics to track page views, session duration, and traffic sources. These help us understand which pages are useful and which aren't.</li>
                    </ul>
                    <p>You can control or disable cookies through your browser settings. Disabling analytics cookies won't affect your ability to use the site, but it will mean we can't track aggregate usage data.</p>
                    <p>We use Google Analytics with IP anonymization enabled, meaning your full IP address is not stored by Google.</p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="retention" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Data Retention</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specifically:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Service and contact records: kept for 5 years from the date of last service</li>
                      <li>Payment records: kept for 7 years as required by tax and accounting regulations</li>
                      <li>Marketing communications: deleted within 30 days of an unsubscribe request</li>
                      <li>Website analytics data (Google Analytics): retained per Google's default retention settings, which we have set to 26 months</li>
                    </ul>
                    <p>When we no longer need your information, we delete or anonymize it securely.</p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="your-rights" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Your Rights</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Under California law (CCPA), you have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Right to know what personal information we collect and how we use it</li>
                      <li>Right to delete your personal information, subject to certain exceptions</li>
                      <li>Right to opt out of the sale of personal information (we do not sell personal information)</li>
                      <li>Right to non-discrimination for exercising your privacy rights</li>
                    </ul>
                    <p>To exercise any of these rights, contact us using the information below. We will respond within 45 days of receiving a verifiable request.</p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Contact Us</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>For questions about this Privacy Policy or to make a request regarding your personal information, contact us at:</p>
                    <div className="bg-[#F4F6F8] rounded-2xl p-6 space-y-2">
                      <p className="font-bold text-[#1D1D1B]">Cool Doc HVAC Service</p>
                      <p>Tarzana, CA 91356</p>
                      <p>
                        Email:{' '}
                        <a href="mailto:info@cooldochvac.com" className="text-[#1866B9] hover:underline">
                          info@cooldochvac.com
                        </a>
                      </p>
                      <p>
                        Phone:{' '}
                        <a href="tel:8187310445" className="text-[#1866B9] hover:underline">
                          (818) 731-0445
                        </a>
                      </p>
                    </div>
                    <p>This policy may be updated from time to time. We will post the revised version with a new effective date at the top. Continued use of our website after a policy update constitutes acceptance of the changes.</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-6">Questions about your data? Call us directly.</p>
          <a
            href="tel:8187310445"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
          >
            <Phone size={16} />
            (818) 731-0445
          </a>
        </div>
      </section>
    </>
  );
};
