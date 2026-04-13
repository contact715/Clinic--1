
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import { NavigateFn } from '../../App';
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WARRANTY_DAYS,
} from '@/constants';

interface ContactPageProps {
  navigate: NavigateFn;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  zip: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  service?: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  zip: '',
  service: '',
  message: '',
};

const SERVICE_OPTIONS = [
  'AC Repair',
  'AC Installation',
  'Heating / Furnace',
  'Ductless Mini-Split',
  'HVAC Maintenance',
  'Commercial HVAC',
  'Other',
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const phoneDigits = form.phone.replace(/\D/g, '');
  if (phoneDigits.length !== 10) {
    errors.phone = 'Enter a valid 10-digit phone number.';
  }

  if (form.email.trim() && !/.+@.+\..+/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!/^\d{5}$/.test(form.zip.trim())) {
    errors.zip = 'Enter a valid 5-digit zip code.';
  }

  if (!form.service) {
    errors.service = 'Please select a service type.';
  }

  return errors;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (honeypot) return; // bot detected

    const next = validate(form);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setIsLoading(true);
    setSubmittedPhone(form.phone);

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setIsSuccess(false);
    setIsError(false);
    setSubmittedPhone('');
  };

  const inputBase = 'w-full border rounded-xl px-4 py-3.5 text-sm font-medium text-[#1D1D1B] placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all';
  const inputNormal = 'border-gray-200 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9]';
  const inputError = 'border-red-400 focus:ring-red-400/30 focus:border-red-400';

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-24 bg-[#1D1D1B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#E3061308,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E30613]/10 border border-[#E30613]/20 text-[#E30613] font-bold text-[10px] tracking-widest uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse"></div>
            Techs Available Now
          </div>
          <h1 className="text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.9] mb-6">
            BOOK A<br />
            <span className="text-[#E30613]">TECHNICIAN</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed">
            Fill out the form below or just call us. We confirm appointments within the hour and usually dispatch same day.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Form column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">

                {isSuccess ? (
                  <div className="py-8 text-center">
                    <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" />
                    <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-3">Booking request received!</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-sm mx-auto">
                      We'll call you at{' '}
                      <span className="font-bold text-[#1D1D1B]">{submittedPhone}</span>{' '}
                      within the hour to confirm. If it's urgent, call us directly.
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 bg-[#E30613] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#1D1D1B] transition-all duration-300 mt-5 mb-4"
                    >
                      <Phone size={15} />
                      {PHONE_DISPLAY}
                    </a>
                    <div>
                      <button
                        onClick={handleReset}
                        className="text-xs text-gray-400 underline hover:text-gray-600 transition-colors mt-2"
                      >
                        Book another appointment
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-[900] text-[#1D1D1B] mb-1">Schedule Your Visit</h2>
                    <p className="text-gray-500 text-sm mb-1">All fields marked are required. We'll call you back within the hour.</p>

                    {/* Urgency line */}
                    <p className="text-[#0ea5e9] text-xs font-bold uppercase tracking-wide mb-6">
                      Typical response time: under 1 hour. Same-day slots available.
                    </p>

                    {isError && (
                      <div className="mb-5 flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-600 text-sm font-medium">
                          Something went wrong. Please call us directly at{' '}
                          <a href={PHONE_HREF} className="underline font-bold">{PHONE_DISPLAY}</a>.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Full Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Phone Number</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(818) 555-0100"
                            className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Email <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@email.com"
                            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Zip Code</label>
                          <input
                            id="zip"
                            name="zip"
                            type="text"
                            value={form.zip}
                            onChange={handleChange}
                            placeholder="91356"
                            className={`${inputBase} ${errors.zip ? inputError : inputNormal}`}
                          />
                          {errors.zip && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.zip}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Service Type</label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputBase} bg-white appearance-none ${errors.service ? inputError : inputNormal}`}
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Message <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the issue you're experiencing..."
                          className={`${inputBase} resize-none ${inputNormal}`}
                        />
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
                        className="w-full bg-[#E30613] text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl hover:bg-[#1D1D1B] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#E30613]"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Request a Technician
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-gray-400 leading-relaxed mt-3">
                        By submitting this form, you consent to be contacted by Cool Doc HVAC Service at the phone
                        number and email provided, including via automated calls or text messages. Message rates may apply.
                        Reply STOP to opt out of texts. View our <a href="/privacy" className="underline text-gray-500">Privacy Policy</a>.
                      </p>

                      <div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck size={13} className="text-green-500" />
                          No fix, no fee
                        </div>
                        <div className="w-px h-3 bg-gray-200"></div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#0ea5e9]" />
                          Same-day available
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#1D1D1B] rounded-3xl p-8 text-white">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Prefer to call?</div>
                <a href={PHONE_HREF} className="text-4xl font-[900] text-white hover:text-[#0ea5e9] transition-colors block mb-2">
                  {PHONE_DISPLAY}
                </a>
                <p className="text-white/60 text-sm mb-8">Available 7 days a week. Emergency service 24/7.</p>

                <div className="space-y-4 border-t border-white/10 pt-8">
                  {[
                    { icon: MapPin, label: 'Address', value: BUSINESS_ADDRESS },
                    { icon: Mail, label: 'Email', value: BUSINESS_EMAIL },
                    { icon: Clock, label: 'Hours', value: 'Mon-Sat: 7am-8pm\nSun: 9am-5pm\n24/7 Emergency' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon size={14} className="text-[#0ea5e9]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-wide mb-0.5">{item.label}</div>
                        <div className="text-sm text-white/80 font-medium whitespace-pre-line">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Why Cool Doc?</div>
                {[
                  'Licensed C-20 HVAC Contractor',
                  `${WARRANTY_DAYS}-day warranty on all work`,
                  'No fix, no fee guarantee',
                  'Background-checked technicians',
                  'Upfront pricing, no surprises',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                    <ShieldCheck size={14} className="text-green-500 shrink-0" />
                    <span className="text-sm font-medium text-[#1D1D1B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
