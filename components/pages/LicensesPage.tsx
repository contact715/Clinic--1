
import React, { useState } from 'react';
import { ShieldCheck, Award, FileText, Phone, ChevronDown, ChevronUp, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import { NavigateFn } from '../../App';

interface LicensesPageProps {
  navigate: NavigateFn;
}

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'What is CSLB?',
    a: 'CSLB stands for the California Contractors State License Board. It is the state agency that licenses and regulates construction contractors in California. Any contractor doing work valued over $500 (parts and labor combined) must hold a valid CSLB license. You can verify any contractor\'s license for free at cslb.ca.gov.',
  },
  {
    q: 'What is EPA 608 Certification?',
    a: 'EPA 608 is a federal certification required by the Environmental Protection Agency for any technician who purchases, handles, or recovers refrigerants. HVAC systems use refrigerants (like R-410A or R-22) that are regulated chemicals. A technician without EPA 608 certification cannot legally handle refrigerant. This matters because improper refrigerant handling is both illegal and can damage your system.',
  },
  {
    q: 'Why does it matter if a contractor is licensed?',
    a: 'A licensed contractor has passed trade exams, demonstrated financial responsibility, and is subject to oversight by the state. If an unlicensed contractor damages your home or does faulty work, you have very limited legal recourse. Your homeowner\'s insurance may also deny claims arising from work done by unlicensed contractors. Licensed contractors must carry insurance and bond, which protects you financially if something goes wrong.',
  },
  {
    q: 'What does "bonded" mean?',
    a: 'Being bonded means we carry a contractor\'s bond, which is a type of insurance that protects you if we fail to complete a job or cause financial harm. The CSLB requires all licensed contractors to maintain an active bond. It is separate from general liability insurance and adds another layer of protection for homeowners.',
  },
  {
    q: 'What is NATE certification?',
    a: 'NATE (North American Technician Excellence) is the largest non-profit certification organization for HVAC/R technicians in the US. NATE-certified technicians have passed standardized exams covering installation, service, and system efficiency. It is an independent credential that is not required by law, but signals a higher level of technical knowledge.',
  },
];

export const LicensesPage: React.FC<LicensesPageProps> = ({ navigate }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(prev => (prev === i ? null : i));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1866B910,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1866B9]/10 border border-[#1866B9]/20 text-[#1866B9] font-bold text-[10px] tracking-widest uppercase mb-6">
            <ShieldCheck size={11} />
            Verified Credentials
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            LICENSED,<br />
            BONDED &amp;<br />
            <span className="text-[#0ea5e9]">INSURED</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            We don't just say we're qualified. Here's exactly what we're certified for and who backs us up. Everything on this page is verifiable.
          </p>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">State &amp; Federal Licenses</div>
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight">Our Licenses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CSLB */}
            <div className="bg-[#F4F6F8] rounded-3xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#1866B9]/10 flex items-center justify-center mb-6">
                <FileText size={24} className="text-[#1866B9]" />
              </div>
              <div className="text-[10px] font-bold text-[#1866B9] uppercase tracking-widest mb-2">State License</div>
              <h3 className="text-xl font-[900] text-[#1D1D1B] mb-2 leading-tight">CSLB License</h3>
              <div className="text-2xl font-[900] text-[#1D1D1B] mb-1">#1089805</div>
              <div className="text-xs font-bold text-gray-500 mb-4">Class C-20</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                California Contractors State License Board — Warm-Air Heating, Ventilating and Air-Conditioning. This is the required state license for all HVAC work in California.
              </p>
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicense/CheckLicense.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1866B9] hover:underline"
              >
                Verify on CSLB.ca.gov
                <ExternalLink size={12} />
              </a>
            </div>

            {/* EPA 608 */}
            <div className="bg-[#F4F6F8] rounded-3xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/10 flex items-center justify-center mb-6">
                <Award size={24} className="text-[#0ea5e9]" />
              </div>
              <div className="text-[10px] font-bold text-[#0ea5e9] uppercase tracking-widest mb-2">Federal Certification</div>
              <h3 className="text-xl font-[900] text-[#1D1D1B] mb-2 leading-tight">EPA 608 Certification</h3>
              <div className="text-2xl font-[900] text-[#1D1D1B] mb-1">Universal</div>
              <div className="text-xs font-bold text-gray-500 mb-4">All refrigerant types</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Required by federal law for any technician who handles refrigerants. Our technicians hold EPA 608 Universal certification, covering all refrigerant types including R-22 and R-410A.
              </p>
            </div>

            {/* NATE */}
            <div className="bg-[#F4F6F8] rounded-3xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-[#E30613]/10 flex items-center justify-center mb-6">
                <ShieldCheck size={24} className="text-[#E30613]" />
              </div>
              <div className="text-[10px] font-bold text-[#E30613] uppercase tracking-widest mb-2">Industry Certification</div>
              <h3 className="text-xl font-[900] text-[#1D1D1B] mb-2 leading-tight">NATE Certified Technicians</h3>
              <div className="text-2xl font-[900] text-[#1D1D1B] mb-1">Certified</div>
              <div className="text-xs font-bold text-gray-500 mb-4">North American Technician Excellence</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                NATE is the largest independent certification organization for HVAC/R technicians in the country. Our technicians have passed NATE exams covering installation, service, and energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Financial Protection</div>
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight">Insurance Coverage</h2>
            <p className="text-gray-500 mt-4 max-w-xl">
              All three policies are active and can be verified. Ask for certificates of insurance before any major job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'General Liability Insurance',
                amount: '$2,000,000 aggregate',
                desc: 'Covers property damage and bodily injury arising from our work at your home or business. If we accidentally damage something, you are covered.',
                color: '#16a34a',
              },
              {
                title: "Workers' Compensation Insurance",
                amount: 'All field technicians',
                desc: "If one of our technicians is injured on your property, workers' comp covers their medical costs and lost wages. You won't be held liable.",
                color: '#1866B9',
              },
              {
                title: 'Commercial Auto Insurance',
                amount: 'All service vehicles',
                desc: 'All of our service vans and trucks carry commercial auto insurance. This matters when our vehicles are parked at or traveling to your property.',
                color: '#0ea5e9',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <ShieldCheck size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-[900] text-[#1D1D1B] mb-2">{item.title}</h3>
                <div className="text-sm font-bold mb-4" style={{ color: item.color }}>{item.amount}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Factory Trained</div>
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight">Manufacturer Certifications</h2>
            <p className="text-gray-500 mt-4 max-w-xl">
              These certifications mean we have completed factory training for these brands and meet their standards for installation and service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                brand: 'Mitsubishi',
                cert: 'Diamond Contractor',
                desc: 'Factory-trained and certified for Mitsubishi Electric ductless mini-split installation and service.',
                color: '#E30613',
              },
              {
                brand: 'Daikin',
                cert: 'Elite Dealer',
                desc: 'Authorized Daikin Elite Dealer with factory training on Daikin residential and commercial systems.',
                color: '#0ea5e9',
              },
              {
                brand: 'Carrier',
                cert: 'Factory Authorized Dealer',
                desc: 'Carrier Factory Authorized Dealer status — trained on the full Carrier residential product line.',
                color: '#1866B9',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl p-8 border border-gray-200 bg-[#F4F6F8] text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Award size={28} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>
                  {item.brand}
                </div>
                <h3 className="text-lg font-[900] text-[#1D1D1B] mb-3">{item.cert}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Homeowner Protection</div>
              <h2 className="text-4xl md:text-5xl font-[900] text-white tracking-tight leading-tight mb-6">
                Why this<br />actually matters
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  California has tens of thousands of unlicensed contractors. They are cheaper upfront, but the risk is real: no bonding means no recourse if the job goes wrong. No workers' comp means you could be liable if a worker gets hurt on your property.
                </p>
                <p>
                  Hiring a licensed, insured HVAC company isn't just about paperwork. It protects your home warranty, your homeowner's insurance policy, and your investment in new equipment.
                </p>
                <p>
                  Many equipment manufacturers require installation by a licensed contractor to honor the product warranty. If you hire an unlicensed tech, you may void your warranty on day one.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                'Homeowner\'s insurance claims are valid',
                'Equipment warranty stays intact',
                'No personal liability for worker injuries',
                'Permits can be pulled when required',
                'Work is inspectable and up to code',
                'Legal recourse exists if something goes wrong',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
                  <CheckCircle size={16} className="text-[#0ea5e9] shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">Questions</div>
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight text-center mb-12">Licensing FAQ</h2>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    onClick={() => toggleFAQ(i)}
                    aria-expanded={openFAQ === i}
                  >
                    <span className="text-sm font-[800] text-[#1D1D1B]">{faq.q}</span>
                    {openFAQ === i ? (
                      <ChevronUp size={18} className="text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFAQ === i && (
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verify Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Do Your Homework</div>
            <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight mb-6">Verify Our License Yourself</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              You don't have to take our word for it. The California CSLB maintains a free public database of all licensed contractors. Here's how to check:
            </p>
            <ol className="text-left text-sm text-gray-600 space-y-4 mb-10 bg-[#F4F6F8] rounded-2xl p-8 border border-gray-200">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1866B9] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Go to <strong>cslb.ca.gov</strong> and click "Check a License" in the top navigation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1866B9] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Enter our license number <strong>#1089805</strong> or search by business name "Cool Doc HVAC Service".</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1866B9] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>You will see the license status (active), classification (C-20), bond status, and insurance information.</span>
              </li>
            </ol>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicense/CheckLicense.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1866B9] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
              >
                <ExternalLink size={16} />
                Go to CSLB.ca.gov
              </a>
              <a
                href="tel:8187310445"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-gray-300 text-[#1D1D1B] hover:bg-[#F4F6F8] transition-all duration-200"
              >
                <Phone size={16} />
                (818) 731-0445
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F4F6F8] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-lg mb-6">Ready to work with a contractor you can actually verify?</p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#1D1D1B] transition-all duration-300"
          >
            Book a Technician
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
};
