
import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  X,
  CheckCircle,
  Wind,
  Flame,
  Wrench,
  Home,
  Building2,
  Clock,
  Calendar,
  AlertTriangle,
  ChevronRight,
  Phone,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QuizAnswers {
  service?: string;
  urgency?: string;
  property?: string;
  age?: string;
}

// ---------------------------------------------------------------------------
// Step data
// ---------------------------------------------------------------------------

const SERVICES = [
  { id: 'ac-repair', label: 'AC Repair / Cooling', icon: Wind },
  { id: 'heating', label: 'Heating / Furnace', icon: Flame },
  { id: 'ductless', label: 'Ductless Mini-Split', icon: Zap },
  { id: 'maintenance', label: 'Maintenance / Tune-Up', icon: Wrench },
] as const;

const URGENCY = [
  { id: 'emergency', label: 'Emergency — ASAP', sublabel: 'System is down', icon: AlertTriangle, color: 'text-[#E30613]' },
  { id: 'this-week', label: 'This week', sublabel: '', icon: Clock, color: 'text-[#1866B9]' },
  { id: 'planning', label: "I'm planning ahead", sublabel: '', icon: Calendar, color: 'text-[#1D1D1B]' },
] as const;

const PROPERTIES = [
  { id: 'single-family', label: 'Single-family home', icon: Home },
  { id: 'condo', label: 'Condo / Apartment', icon: Building2 },
  { id: 'commercial', label: 'Commercial / Business', icon: Building2 },
] as const;

const AGES = [
  { id: 'under-5', label: 'Under 5 years' },
  { id: '5-10', label: '5 to 10 years' },
  { id: '10-15', label: '10 to 15 years' },
  { id: 'over-15', label: 'Over 15 years (or unknown)' },
] as const;

const TOTAL_STEPS = 5;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#E30613] rounded-full transition-all duration-400 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

interface OptionCardProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ onClick, children, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 bg-white
      hover:border-[#E30613] hover:shadow-md active:scale-[0.98]
      transition-all duration-150 text-left cursor-pointer ${className}`}
  >
    {children}
  </button>
);

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const DiscoveryQuiz: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [buttonVisible, setButtonVisible] = useState(false);

  // Animate button in after 2 s
  useEffect(() => {
    const timer = setTimeout(() => setButtonVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track path changes
  useEffect(() => {
    const onPop = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
    setName('');
    setPhone('');
    setZip('');
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(resetQuiz, 300);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const answer = (key: keyof QuizAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call — replace with real fetch if needed
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Hide on /contact
  if (currentPath === '/contact') return null;

  // Derive display label for selected service (used in success screen)
  const selectedServiceLabel =
    SERVICES.find(s => s.id === answers.service)?.label ?? 'HVAC';

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <>
      {/* Floating trigger button */}
      <div
        className="fixed z-[35] right-6 bottom-24 sm:right-6 sm:bottom-28 transition-transform duration-500 ease-out"
        style={{ transform: buttonVisible ? 'translateX(0)' : 'translateX(120px)' }}
      >
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open service quote quiz"
          className="relative flex items-center gap-2 bg-[#E30613] text-white font-black uppercase tracking-tight
            text-sm pl-4 pr-5 py-3 rounded-full shadow-xl
            hover:scale-105 hover:bg-[#C8040F] transition-all duration-200"
        >
          <Zap size={15} className="shrink-0" />
          GET A QUOTE
          {/* Pulsing dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDC506] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FDC506]" />
          </span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Service quote quiz"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Card */}
          <div className="relative z-10 w-full sm:max-w-lg mx-0 sm:mx-4 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Header bar */}
            <div className="px-5 pt-5 pb-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Step {Math.min(step, TOTAL_STEPS)} of {TOTAL_STEPS}
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close quiz"
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-[#1D1D1B] hover:bg-gray-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <ProgressBar step={Math.min(step, TOTAL_STEPS)} />
            </div>

            {/* Body */}
            <div className="px-5 py-5 max-h-[70vh] overflow-y-auto">

              {/* SUCCESS SCREEN */}
              {isSuccess && (
                <div className="flex flex-col items-center text-center py-4 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-[#1D1D1B] leading-tight">
                      You're all set!
                    </h2>
                    <p className="mt-1 text-base font-bold text-gray-500">
                      We'll call you within the hour.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 max-w-xs">
                    A Cool Doc technician will reach out at your number to discuss your {selectedServiceLabel} needs.
                  </p>
                  <a
                    href="tel:8187310445"
                    className="flex items-center gap-2 bg-[#E30613] text-white font-black uppercase tracking-tight
                      text-sm px-6 py-3 rounded-xl hover:bg-[#C8040F] transition-colors"
                    aria-label="Call (818) 731-0445"
                  >
                    <Phone size={15} />
                    (818) 731-0445
                  </a>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-sm font-bold text-gray-400 hover:text-[#1D1D1B] transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* STEP 1 — Service type */}
              {!isSuccess && step === 1 && (
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1D1D1B] mb-4 leading-tight">
                    What type of service do you need?
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICES.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => answer('service', id)}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-100 bg-white
                          hover:border-[#E30613] hover:shadow-md active:scale-[0.98]
                          transition-all duration-150 cursor-pointer text-center"
                      >
                        <Icon size={26} className="text-[#E30613]" />
                        <span className="text-sm font-bold text-[#1D1D1B] leading-snug">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 — Urgency */}
              {!isSuccess && step === 2 && (
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1D1D1B] mb-4 leading-tight">
                    How soon do you need service?
                  </h2>
                  <div className="flex flex-col gap-3">
                    {URGENCY.map(({ id, label, sublabel, icon: Icon, color }) => (
                      <OptionCard key={id} onClick={() => answer('urgency', id)}>
                        <Icon size={20} className={`shrink-0 ${color}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[#1D1D1B]">{label}</p>
                          {sublabel && <p className="text-xs text-gray-400">{sublabel}</p>}
                        </div>
                        <ChevronRight size={16} className="text-gray-300 shrink-0" />
                      </OptionCard>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 — Property */}
              {!isSuccess && step === 3 && (
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1D1D1B] mb-4 leading-tight">
                    Tell us about your property
                  </h2>
                  <div className="flex flex-col gap-3">
                    {PROPERTIES.map(({ id, label, icon: Icon }) => (
                      <OptionCard key={id} onClick={() => answer('property', id)}>
                        <Icon size={20} className="text-[#1866B9] shrink-0" />
                        <span className="flex-1 text-sm font-bold text-[#1D1D1B]">{label}</span>
                        <ChevronRight size={16} className="text-gray-300 shrink-0" />
                      </OptionCard>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 — System age */}
              {!isSuccess && step === 4 && (
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1D1D1B] mb-4 leading-tight">
                    Roughly how old is your HVAC system?
                  </h2>
                  <div className="flex flex-col gap-3">
                    {AGES.map(({ id, label }) => (
                      <OptionCard key={id} onClick={() => answer('age', id)}>
                        <span className="flex-1 text-sm font-bold text-[#1D1D1B]">{label}</span>
                        <ChevronRight size={16} className="text-gray-300 shrink-0" />
                      </OptionCard>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5 — Contact form */}
              {!isSuccess && step === 5 && (
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1D1D1B] mb-1 leading-tight">
                    Last step — where should we send your estimate?
                  </h2>
                  <p className="text-sm text-gray-400 mb-5">
                    No spam. A real technician calls you — usually within the hour.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div>
                      <label htmlFor="quiz-name" className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                        Your name
                      </label>
                      <input
                        id="quiz-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-sm font-bold text-[#1D1D1B]
                          placeholder:font-normal placeholder:text-gray-300
                          focus:outline-none focus:border-[#E30613] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="quiz-phone" className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                        Phone number
                      </label>
                      <input
                        id="quiz-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="(818) 555-0100"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-sm font-bold text-[#1D1D1B]
                          placeholder:font-normal placeholder:text-gray-300
                          focus:outline-none focus:border-[#E30613] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="quiz-zip" className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                        ZIP code
                      </label>
                      <input
                        id="quiz-zip"
                        type="text"
                        required
                        inputMode="numeric"
                        pattern="\d{5}"
                        maxLength={5}
                        value={zip}
                        onChange={e => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                        placeholder="91601"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 text-sm font-bold text-[#1D1D1B]
                          placeholder:font-normal placeholder:text-gray-300
                          focus:outline-none focus:border-[#E30613] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-1 w-full flex items-center justify-center gap-2 bg-[#E30613] text-white
                        font-black uppercase tracking-tight text-sm py-4 rounded-xl
                        hover:bg-[#C8040F] disabled:opacity-60 disabled:cursor-not-allowed
                        transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get My Free Estimate
                          <ChevronRight size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-gray-400 leading-relaxed text-center">
                      By submitting, you consent to receive calls and texts from Cool Doc HVAC at the number provided, including automated messages. Consent is not a condition of purchase. Msg and data rates may apply. Reply STOP to opt out.{' '}
                      <a href="/privacy" className="underline hover:text-[#1D1D1B] transition-colors">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};
