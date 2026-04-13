
import React from 'react';
import { Phone } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

/**
 * Generates an SVG data URI that acts as a styled placeholder image.
 * Used in place of real before/after photos until photography is available.
 */
function makePlaceholder(
  bgFrom: string,
  bgTo: string,
  iconPath: string,
  label: string,
  description: string,
): string {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgFrom}"/>
      <stop offset="100%" stop-color="${bgTo}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect x="344" y="224" width="112" height="112" rx="20" fill="rgba(255,255,255,0.12)"/>
  <g transform="translate(368, 248)" stroke="rgba(255,255,255,0.75)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    ${iconPath}
  </g>
  <text x="400" y="378" font-family="system-ui,sans-serif" font-size="22" font-weight="900" fill="white" text-anchor="middle" letter-spacing="2">${label}</text>
  <text x="400" y="410" font-family="system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.55)" text-anchor="middle">${description}</text>
</svg>`.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Wrench icon path (lucide-style, 64x64 viewport scaled to fit 64x64 box)
const WRENCH_PATH = `
  <path d="M44.7 6.3a16 16 0 0 0-20.4 20.4L4 47a4 4 0 0 0 0 5.6l3.4 3.4a4 4 0 0 0 5.6 0l20.3-20.3A16 16 0 0 0 53.7 15.3l-8.5 8.5-5.7-1.3-1.3-5.7 8.5-8.5z"/>
`;

// Check-circle icon path
const CHECK_PATH = `
  <circle cx="32" cy="32" r="28"/>
  <polyline points="20,32 28,40 44,24"/>
`;

const SLIDES = [
  {
    beforeSrc: makePlaceholder('#374151', '#111827', WRENCH_PATH, 'OLD AC UNIT', '15-yr Lennox, corroded coils, R-22'),
    afterSrc:  makePlaceholder('#1866B9', '#0f3d6b', CHECK_PATH,  'NEW INSTALL',  'Carrier 16-SEER, properly sized'),
    beforeLabel: 'OLD UNIT',
    afterLabel: 'NEW INSTALL',
    beforeAlt: 'Old AC unit before replacement',
    afterAlt: 'New Carrier AC unit after installation',
    caption: 'AC Unit Replacement — Tarzana, CA',
  },
  {
    beforeSrc: makePlaceholder('#374151', '#111827', WRENCH_PATH, 'LEAKING DUCTS', 'Tape failure, 30% air loss to attic'),
    afterSrc:  makePlaceholder('#1866B9', '#0f3d6b', CHECK_PATH,  'RESEALED',      'Mastic sealed, tested at <5% leakage'),
    beforeLabel: 'OLD DUCTS',
    afterLabel: 'RESEALED',
    beforeAlt: 'Old leaking ductwork before repair',
    afterAlt: 'Properly sealed ductwork after repair',
    caption: 'Ductwork Sealing — Woodland Hills, CA',
  },
];

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-5">
          Real Results
        </div>
        <h2 className="text-4xl md:text-5xl font-[900] text-[#1D1D1B] tracking-tight leading-[0.95] mb-4">
          SEE THE DIFFERENCE<br />
          <span className="text-[#E30613]">WE MAKE.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-md mx-auto">
          Real jobs, real results. Before and after our technicians finish.
        </p>
      </div>

      {/* Sliders grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SLIDES.map((slide) => (
            <div key={slide.caption}>
              <BeforeAfterSlider
                beforeSrc={slide.beforeSrc}
                afterSrc={slide.afterSrc}
                beforeLabel={slide.beforeLabel}
                afterLabel={slide.afterLabel}
                beforeAlt={slide.beforeAlt}
                afterAlt={slide.afterAlt}
              />
              <p className="mt-3 text-sm text-gray-500 text-center">{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm mb-4">Ready for results like these?</p>
        <a
          href="tel:8187310445"
          className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-[#1D1D1B] transition-colors"
        >
          <Phone size={15} />
          Get a Free Estimate
        </a>
      </div>

    </section>
  );
};
