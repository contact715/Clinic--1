
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { NavigateFn } from '../../App';

interface TermsPageProps {
  navigate: NavigateFn;
}

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: 'services', title: 'Services' },
  { id: 'scheduling', title: 'Scheduling & Cancellation' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'warranty', title: 'Warranty' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Us' },
];

export const TermsPage: React.FC<TermsPageProps> = ({ navigate }) => {
  const [activeSection, setActiveSection] = useState<string>('services');

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
            Terms of Service
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
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                  These Terms of Service govern the relationship between Cool Doc HVAC Service ("Cool Doc," "we," "us," or "our") and customers who request or receive HVAC services from us. By booking a service or permitting work to be performed at your property, you agree to these terms. Please read them carefully.
                </p>

                {/* Section 1 */}
                <div id="services" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Services</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Cool Doc HVAC Service provides heating, ventilation, and air conditioning (HVAC) installation, repair, maintenance, and replacement services for residential and commercial properties in the San Fernando Valley and surrounding Los Angeles communities.</p>
                    <p>All work is performed by licensed technicians under California CSLB License #1089805, Class C-20. We reserve the right to decline any job that we determine is outside our scope of work, would violate applicable codes, or presents unsafe conditions.</p>
                    <p>Estimates are based on information available at the time of quoting. If additional issues are discovered during the work, we will stop and communicate with you before proceeding. You will never be charged for unanticipated work without prior approval.</p>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="scheduling" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Scheduling &amp; Cancellation</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Appointments are confirmed by phone or email. We provide an estimated arrival window, not an exact time. Technician arrival times may vary due to traffic, prior job complexity, or other operational factors.</p>
                    <p>If you need to cancel or reschedule, please contact us at least 2 hours before your scheduled appointment. Cancellations with less than 2 hours notice may result in a $35 late cancellation fee for non-emergency appointments.</p>
                    <p>For no-shows (where a technician arrives at the scheduled location and no one is available to grant access), we reserve the right to charge a $50 trip fee.</p>
                    <p>Emergency after-hours service calls (outside regular business hours) are subject to an additional dispatch fee, which will be disclosed before a technician is dispatched.</p>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="payment" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Payment Terms</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Payment is due upon completion of service unless a different arrangement has been agreed to in writing in advance. We accept cash, check, and major credit cards. A processing fee may apply to credit card payments.</p>
                    <p>For larger jobs (typically installations or replacements over $1,000), we may require a deposit before scheduling or ordering parts. Deposit amounts and terms will be specified in your written estimate.</p>
                    <p>Invoices not paid within 30 days of the service date are subject to a late fee of 1.5% per month on the outstanding balance. Accounts referred to collections will be responsible for reasonable collection costs and attorney fees.</p>
                    <p>Financing options may be available through third-party financing partners. Financing is subject to credit approval by the financing provider, not by Cool Doc. We are not responsible for financing terms or decisions.</p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="warranty" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Warranty</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>We stand behind our work. All completed repairs and labor carry a 90-day warranty from the date of service. During this period, if the same issue recurs due to our workmanship, we will return and correct it at no charge.</p>
                    <p>Parts warranties are determined by the part manufacturer and may vary. We will communicate specific part warranties at the time of installation. Parts warranties typically range from 1 to 10 years depending on the manufacturer and part type.</p>
                    <p>New equipment installation warranty:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Labor: 1 year from installation date</li>
                      <li>Parts and equipment: per manufacturer warranty (registered at time of installation)</li>
                    </ul>
                    <p>The warranty does not cover:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Damage caused by misuse, abuse, neglect, or unauthorized modification</li>
                      <li>Issues caused by power surges, flooding, or other external events</li>
                      <li>Normal wear and consumable parts (air filters, belts)</li>
                      <li>Pre-existing conditions not related to the work we performed</li>
                    </ul>
                    <p>To make a warranty claim, contact us at (818) 731-0445 or info@cooldochvac.com with your invoice number and a description of the issue.</p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="liability" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>Cool Doc HVAC Service's total liability for any claim arising out of or related to our services is limited to the amount paid for the specific service that gave rise to the claim.</p>
                    <p>We are not liable for indirect, consequential, incidental, or punitive damages, including loss of use, lost profits, or damage to property not directly caused by our work, even if we have been advised of the possibility of such damages.</p>
                    <p>We carry general liability insurance and workers' compensation insurance as described on our Licenses page. Certificates of insurance are available upon request before any major job.</p>
                    <p>Some states do not allow the exclusion of certain damages. In those cases, our liability will be limited to the fullest extent permitted by applicable law.</p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="governing-law" className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Governing Law</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>These Terms are governed by the laws of the State of California, without regard to its conflict of law principles. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the state and federal courts located in Los Angeles County, California.</p>
                    <p>Before initiating any formal legal action, both parties agree to attempt good-faith resolution by contacting us directly. Most issues can be resolved with a direct conversation.</p>
                    <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-4 pb-3 border-b border-gray-100">Contact Us</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>For questions about these Terms or any aspect of your service agreement, contact us directly:</p>
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
                    <p>We may update these Terms from time to time. Updated Terms will be posted here with a new effective date. Continued use of our services after an update constitutes acceptance of the revised Terms.</p>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-wrap gap-4 items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Related</span>
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-sm font-bold text-[#1866B9] hover:underline"
                >
                  Privacy Policy
                </button>
                <span className="text-gray-200">|</span>
                <button
                  onClick={() => navigate('/licenses')}
                  className="text-sm font-bold text-[#1866B9] hover:underline"
                >
                  Licenses &amp; Credentials
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 mb-6">Questions about a service agreement? Call us directly.</p>
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
