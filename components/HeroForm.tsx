
import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, Loader2, MapPin, Phone, ShieldCheck, Zap } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/constants';

interface FormErrors {
  zip?: string;
  phone?: string;
}

export const HeroForm: React.FC = () => {
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!/^\d{5}$/.test(zip.trim())) {
      next.zip = 'Enter a valid 5-digit zip code.';
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      next.phone = 'Enter a valid 10-digit phone number.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (honeypot) return; // bot detected

    if (!validate()) return;

    setIsLoading(true);

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[420px]">
      <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 relative overflow-hidden">

        {/* Tri-color accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex rounded-t-3xl overflow-hidden">
          <div className="w-1/3 bg-[#1866B9]"></div>
          <div className="w-1/3 bg-[#E30613]"></div>
          <div className="w-1/3 bg-[#FDC506]"></div>
        </div>

        {/* Subtle corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/8 rounded-bl-3xl pointer-events-none"></div>

        <div className="relative z-10">
          {isSuccess ? (
            <div className="py-4 text-center">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-[900] text-white tracking-tight mb-2">We got it!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                A technician will call you within the hour.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#E30613] text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-white hover:text-[#1D1D1B] transition-all duration-300"
              >
                <Phone size={15} />
                Or call us now: {PHONE_DISPLAY}
              </a>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] font-bold text-[10px] tracking-widest uppercase mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></div>
                  HVAC Techs Available Now
                </div>
                <h3 className="text-2xl font-[900] text-white tracking-tight">Get a Free HVAC Estimate</h3>
                <p className="text-gray-400 text-sm mt-1">A certified tech in your area, same day.</p>
              </div>

              {isError && (
                <div className="mb-4 flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                  <p className="text-red-400 text-xs font-medium leading-snug">
                    Something went wrong. Please call us directly at{' '}
                    <a href={PHONE_HREF} className="underline">{PHONE_DISPLAY}</a>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#E30613] transition-colors">
                      <MapPin size={16} />
                    </div>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => {
                        setZip(e.target.value);
                        if (errors.zip) setErrors(prev => ({ ...prev, zip: undefined }));
                      }}
                      placeholder="Your Zip Code (e.g. 91356)"
                      className={`w-full bg-black/40 border rounded-xl py-3.5 pl-11 pr-4 text-sm text-white font-medium placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all ${
                        errors.zip
                          ? 'border-red-500/70 focus:ring-red-500/30'
                          : 'border-white/10 focus:ring-[#E30613]/40 focus:border-[#E30613]/50'
                      }`}
                    />
                  </div>
                  {errors.zip && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.zip}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#1866B9] transition-colors">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="Phone Number"
                      className={`w-full bg-black/40 border rounded-xl py-3.5 pl-11 pr-4 text-sm text-white font-medium placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all ${
                        errors.phone
                          ? 'border-red-500/70 focus:ring-red-500/30'
                          : 'border-white/10 focus:ring-[#1866B9]/40 focus:border-[#1866B9]/50'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#E30613] text-white text-sm font-bold py-4 rounded-xl hover:bg-white hover:text-[#1D1D1B] transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_30px_-5px_rgba(227,6,19,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#E30613] disabled:hover:text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Zap size={16} className="group-hover:fill-[#1D1D1B] fill-white transition-colors" />
                      <span>Book Same-Day HVAC Tech</span>
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-white/40 text-center leading-relaxed mt-2">
                  By submitting, you agree to be contacted by Cool Doc HVAC Service at the phone number provided,
                  including via automated calls or texts. Message and data rates may apply.
                  Reply STOP to opt out. <a href="/privacy" className="underline">Privacy Policy</a>
                </p>
              </form>

              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-center gap-5 text-[11px] text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-green-500" />
                  <span className="text-gray-400">No Fix, No Fee</span>
                </div>
                <div className="w-px h-3 bg-white/10"></div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-green-500" />
                  <span className="text-gray-400">90-Day Warranty</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
