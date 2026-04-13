
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { NavigateFn } from '../App';

interface VideoSectionProps {
  navigate: NavigateFn;
}

const BULLET_POINTS = [
  'Full diagnostic on all major components',
  'Refrigerant level check',
  'Before/after performance comparison',
] as const;

export const VideoSection: React.FC<VideoSectionProps> = ({ navigate }) => {
  const handleBooking = () => navigate('/contact');

  return (
    <section className="py-24 bg-[#1D1D1B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div>
            {/* Badge */}
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#FDC506] mb-4">
              See Us In Action
            </span>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-5">
              WATCH HOW WE WORK
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              15-minute AC tune-up walkthrough. What our technicians check, why it matters, and what a clean system sounds like.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-4 mb-10">
              {BULLET_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FDC506] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button
              type="button"
              onClick={handleBooking}
              className="inline-flex items-center gap-2 bg-[#E30613] text-white font-black uppercase tracking-wide text-sm px-8 py-4 rounded-xl hover:bg-[#C8040F] transition-colors duration-200"
            >
              Book a Tune-Up
            </button>
          </div>

          {/* Right — YouTube embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cool Doc HVAC - AC Tune-Up Walkthrough"
              frameBorder="0"
              allowFullScreen
              className="rounded-2xl"
              style={{ aspectRatio: '16/9' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
