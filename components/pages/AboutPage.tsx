
import React from 'react';
import { ShieldCheck, Clock, DollarSign, Phone, Heart, ArrowRight } from 'lucide-react';
import { TeamSection } from '../TeamSection';
import { MidCTA } from '../MidCTA';
import { NavigateFn } from '../../App';

interface AboutPageProps {
  navigate: NavigateFn;
}

const VALUES = [
  {
    icon: Clock,
    title: 'Fast Response',
    desc: 'Same-day service when you call before noon. We know your comfort can\'t wait.',
    color: '#E30613',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully licensed HVAC contractors. C-20 license, bonded, and insured for your protection.',
    color: '#1866B9',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    desc: 'You get the price before we start work. No hidden fees, no surprise charges.',
    color: '#0ea5e9',
  },
  {
    icon: Heart,
    title: 'Family Owned',
    desc: 'We\'re a local family business, not a franchise. Your neighbors, not a call center.',
    color: '#FDC506',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#0ea5e910,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-6">
            Family Owned Since 2010
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            ABOUT<br />
            <span className="text-[#0ea5e9]">COOL DOC</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            We started Cool Doc HVAC Service in 2010 with one goal: give Los Angeles homeowners an HVAC company they could actually trust. No upsells, no bait-and-switch, no commission-hungry techs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] mb-6 tracking-tight leading-tight">
                The Doctor is IN.<br />
                <span className="text-[#0ea5e9]">Your Comfort is Out.</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cool Doc HVAC Service was founded in the San Fernando Valley in 2010 by a team of technicians who had spent years watching the same story repeat: homeowners with failing R-22 systems, aging ductwork full of gaps, or a furnace that just needed a $40 part getting sold a full replacement they didn't need. We decided to do it differently.
                </p>
                <p>
                  We built this company on a simple idea: diagnose it right, price it honestly, fix it fast. Today we serve the entire San Fernando Valley from Tarzana to Burbank. Our technicians are factory-trained, background-checked, and paid hourly, not on commission. That means they're here to fix your system, not upsell you.
                </p>
                <p>
                  We hold a California C-20 HVAC contractor license and carry full liability insurance and workers' compensation. Every job comes with a 90-day warranty on parts and labor.
                </p>
              </div>

              {/* Origin of the Name */}
              <div className="mt-8 p-5 bg-[#F4F6F8] rounded-2xl border border-gray-200">
                <h3 className="text-sm font-black text-[#1D1D1B] uppercase tracking-wider mb-2">Why "Cool Doc"?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cool comes from what we do: cooling, heating, air. Doc comes from how we do it: we diagnose the system first, find the real problem, then fix it. No guesswork, no parts replaced just to see if it helps. Just a proper diagnosis and a straight answer.
                </p>
              </div>

              {/* Credentials link */}
              <div className="mt-6">
                <a
                  href="/licenses"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1866B9] hover:text-[#E30613] transition-colors"
                >
                  See our credentials <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '2010', label: 'Founded' },
                { stat: '15+', label: 'Years in Business' },
                { stat: '4.9/5', label: 'Average Rating' },
                { stat: '2,300+', label: 'Five-Star Reviews' },
              ].map((item, i) => (
                <div key={i} className="bg-[#F4F6F8] rounded-3xl p-8 text-center border border-gray-200">
                  <div className="text-4xl font-[900] text-[#1D1D1B] mb-2">{item.stat}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-[900] text-[#1D1D1B] mb-4 tracking-tight text-center">How we operate</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            These aren't marketing slogans. They're the actual standards we hold ourselves to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 text-center hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${val.color}15`, color: val.color }}
                >
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-[800] text-[#1D1D1B] mb-3">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Contact CTA */}
      <section className="py-24 bg-[#1D1D1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-[900] text-white mb-4 tracking-tight">
            Ready to work together?
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-lg mx-auto">
            Call or book online. We'll have a tech at your door, usually the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:8187310445"
              className="flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
            >
              <Phone size={16} />
              (818) 731-0445
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      <MidCTA />
    </>
  );
};
