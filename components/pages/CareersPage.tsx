
import React, { useState } from 'react';
import { DollarSign, Truck, Heart, Award, MapPin, Clock, ChevronRight, Phone, Users, Wrench, Star } from 'lucide-react';
import { NavigateFn } from '../../App';

interface CareersPageProps {
  navigate: NavigateFn;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  position: string;
  about: string;
}

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: '$28 to $52 per hour depending on experience and certifications. We pay on time, every time.',
    color: 'bg-[#FDC506]/10 text-amber-700',
  },
  {
    icon: Truck,
    title: 'Company Van + Tools',
    description: 'You show up. We provide a fully stocked service van, all hand tools, and test equipment.',
    color: 'bg-[#1866B9]/10 text-[#1866B9]',
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Medical coverage for full-time employees. We cover a meaningful portion of the premium.',
    color: 'bg-[#E30613]/10 text-[#E30613]',
  },
  {
    icon: Award,
    title: 'Paid Training',
    description: 'We pay for certifications, EPA 608 exams, manufacturer training, and continuing education.',
    color: 'bg-[#0ea5e9]/10 text-[#0ea5e9]',
  },
];

const OPENINGS = [
  {
    title: 'HVAC Service Technician',
    type: 'Full-time',
    area: 'San Fernando Valley',
    experience: '2+ years experience required',
    cert: 'EPA 608 certification required',
    description: 'Diagnose and repair residential and light commercial HVAC systems across the Valley. You\'ll handle service calls from start to finish: diagnosis, repair, parts, and customer communication. Strong troubleshooting skills are more important than a long resume.',
  },
  {
    title: 'HVAC Installation Technician',
    type: 'Full-time',
    area: 'Valley area',
    experience: '3+ years experience required',
    cert: 'EPA 608 required, NATE preferred',
    description: 'Lead and assist on new system installations for residential and commercial accounts. Experience with split systems, package units, and ductless mini-splits. You know how to read a load calc and size a system correctly.',
  },
  {
    title: 'HVAC Apprentice / Helper',
    type: 'Full-time',
    area: 'San Fernando Valley',
    experience: 'Entry level, no prior HVAC experience required',
    cert: 'Clean driving record required',
    description: 'We\'ll train the right person. If you\'re mechanically inclined, show up on time, and want to build a real trade career, we want to talk to you. You\'ll work alongside our senior techs learning every aspect of HVAC service and installation.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Apply',
    description: 'Fill out the form below. Tell us about your background and what you\'re looking for.',
  },
  {
    step: '02',
    title: 'Phone Screen',
    description: 'A 15-minute call with our service manager to talk through experience and answer your questions.',
  },
  {
    step: '03',
    title: 'Working Interview',
    description: 'Spend a half day in the field with one of our techs. No tests, no puzzles. Just real work.',
  },
  {
    step: '04',
    title: 'Offer',
    description: 'If it\'s a fit for both sides, we make an offer within 48 hours. No extended waiting.',
  },
];

export const CareersPage: React.FC<CareersPageProps> = ({ navigate: _navigate }) => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    position: '',
    about: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1866B910,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#E3061308,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC506]/10 border border-[#FDC506]/20 text-[#FDC506] font-bold text-[10px] tracking-widest uppercase mb-6">
            <Users size={11} />
            We're Hiring
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            JOIN THE<br />
            <span className="text-[#0ea5e9]">COOL DOC TEAM</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            We're growing. Looking for HVAC technicians who take pride in their work and want to stay at a company long term.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-4">
              <Star size={11} />
              Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95]">
              WHY JOIN US
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-3xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${benefit.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-[800] text-[#1D1D1B] mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-4">
              <Wrench size={11} />
              Open Positions
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95]">
              CURRENT OPENINGS
            </h2>
          </div>
          <div className="space-y-6">
            {OPENINGS.map((job) => (
              <div key={job.title} className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[900] text-[#1D1D1B] mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-xl">
                        <Clock size={12} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-xl">
                        <MapPin size={12} />
                        {job.area}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#1866B9] bg-[#1866B9]/10 px-3 py-1.5 rounded-xl">
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1.5 rounded-xl">
                        {job.cert}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="#apply"
                      className="inline-flex items-center gap-2 bg-[#1D1D1B] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#E30613] transition-colors duration-200"
                    >
                      Apply Now
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95]">
              WHAT TO EXPECT
            </h2>
            <p className="text-gray-500 mt-4 text-lg">The hiring process from application to offer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#1D1D1B] text-white flex items-center justify-center text-xl font-[900] mb-5">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-[800] text-[#1D1D1B] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-[#1866B9] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase mb-6">
              <Users size={11} />
              Our Culture
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] tracking-tight leading-[0.95] mb-6">
              We're a small team.<br />Everyone knows everyone.
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              You're not employee #847. You'll know the owner's name, and he'll know yours. When you do good work, people notice. When you have a problem, you bring it up and we actually deal with it.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We're not perfect, but we're straight with people. Pay is fair, expectations are clear, and if you show up and do the work, you have a job as long as you want it.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-[900] text-[#1D1D1B] tracking-tight mb-3">APPLY NOW</h2>
              <p className="text-gray-500 text-lg">Takes about 3 minutes. We read every submission.</p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-[900] text-[#1D1D1B] mb-3">Application Received</h3>
                <p className="text-gray-500 mb-2">We'll be in touch within 2 business days.</p>
                <p className="text-gray-400 text-sm">Questions? Call (818) 731-0445 and ask for the service manager.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#1D1D1B] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1D1D1B] placeholder-gray-400 focus:outline-none focus:border-[#1866B9] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#1D1D1B] uppercase tracking-wider mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(818) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1D1D1B] placeholder-gray-400 focus:outline-none focus:border-[#1866B9] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#1D1D1B] uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1D1D1B] placeholder-gray-400 focus:outline-none focus:border-[#1866B9] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-xs font-bold text-[#1D1D1B] uppercase tracking-wider mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={form.position}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#1866B9] transition-colors bg-white"
                  >
                    <option value="">Select a position</option>
                    <option value="service-tech">HVAC Service Technician</option>
                    <option value="install-tech">HVAC Installation Technician</option>
                    <option value="apprentice">HVAC Apprentice / Helper</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="about" className="block text-xs font-bold text-[#1D1D1B] uppercase tracking-wider mb-2">
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    required
                    value={form.about}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your HVAC experience, certifications, and what you're looking for in a job."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1D1D1B] placeholder-gray-400 focus:outline-none focus:border-[#1866B9] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E30613] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#c0000f] transition-colors duration-200"
                >
                  Submit Application
                </button>

                <p className="text-center text-xs text-gray-400">
                  Questions? Call us directly at{' '}
                  <a href="tel:8187310445" className="text-[#1866B9] font-bold hover:underline">
                    (818) 731-0445
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="py-16 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/70 text-lg mb-4">Rather talk first? We're fine with that.</p>
          <a
            href="tel:8187310445"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
          >
            <Phone size={16} />
            (818) 731-0445
          </a>
        </div>
      </section>
    </>
  );
};
