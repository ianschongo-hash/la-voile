import { useState, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { MapPin, Mail, Phone, Instagram, Linkedin, CheckCircle } from 'lucide-react';
import { SwissCross } from './Logo';
import { supabase } from '../lib/supabase';

const languages = ['Deutsch', 'Français', 'Italiano', 'English'];
const serviceOptions = [
  'Company Formation',
  'Visa & Residency',
  'Banking Setup',
  'Real Estate Investment',
  'Concierge Services',
  'Full Relocation Package',
];

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  useFadeIn(formRef);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    language: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    setError('');
    setSubmitting(true);
    const { error: dbError } = await supabase.from('contact_submissions').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      preferred_language: form.language,
      service_interest: form.service,
      message: form.message,
    });
    setSubmitting(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#141414] px-16 py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg,rgba(255,255,255,0.012) 0,rgba(255,255,255,0.012) 1px,transparent 0,transparent 50%)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 grid gap-24 items-start" style={{ gridTemplateColumns: '1fr 1.2fr' }}>
        {/* Info column */}
        <div>
          <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-white/50 mb-5">
            <span className="w-7 h-0.5 bg-white/30" />
            Contact Us
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] mb-6">
            Let's talk<br />about your <em className="italic font-semibold text-white/70">move</em>
          </h2>
          <p className="text-[0.95rem] text-white/65 max-w-xl leading-[1.95] mb-12">
            Whether you're still planning or ready to start — reach out. A conversation costs nothing and clarity is priceless.
          </p>

          {[
            {
              icon: <MapPin size={20} strokeWidth={1.75} />,
              label: 'Location',
              value: 'Dubai, United Arab Emirates',
              sub: 'Available for in-person meetings',
            },
            {
              icon: <Mail size={20} strokeWidth={1.75} />,
              label: 'Email',
              value: 'hello@lavoilecapital.com',
              sub: 'Response within 24 hours',
            },
            {
              icon: <Phone size={20} strokeWidth={1.75} />,
              label: 'WhatsApp & Phone',
              value: '+971 XX XXX XXXX',
              sub: 'Available in DE · FR · IT · EN',
            },
          ].map(item => (
            <div key={item.label} className="flex gap-6 items-start py-7 border-b border-white/10 last:border-b-0">
              <div className="w-[46px] h-[46px] border border-white/15 flex items-center justify-center text-white flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-1.5">{item.label}</div>
                <div className="text-[0.95rem] font-medium text-white">{item.value}</div>
                <div className="text-[0.8rem] text-white/65 mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-10 flex-wrap">
            {[
              { icon: <Instagram size={15} strokeWidth={1.75} />, label: 'Instagram' },
              { icon: <Linkedin size={15} strokeWidth={1.75} />, label: 'LinkedIn' },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                className="flex items-center gap-2.5 px-5 py-3 border border-white/20 text-white/65 text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:border-white/50 hover:text-white transition-all no-underline"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 p-6 border border-white/12 bg-white/[0.04]">
            <SwissCross size={40} />
            <div>
              <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-0.5">
                Swiss Founded Company
              </div>
              <div className="text-[0.85rem] font-medium text-white/65">
                German · French · Italian · English
              </div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div
          ref={formRef}
          className="bg-[#0A0A0A] border border-white/12 p-12 opacity-0 transition-all duration-700"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="font-serif text-[2rem] font-bold mb-2">Send us a message</h3>
              <p className="text-[0.85rem] text-white/65 mb-10 leading-[1.75]">
                Fill in the form and we'll get back to you within one business day — in your preferred language.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">First Name</label>
                  <input
                    type="text"
                    placeholder="Jean"
                    value={form.firstName}
                    onChange={e => update('firstName', e.target.value)}
                    className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">Last Name</label>
                  <input
                    type="text"
                    placeholder="Müller"
                    value={form.lastName}
                    onChange={e => update('lastName', e.target.value)}
                    className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">Email Address</label>
                <input
                  type="email"
                  placeholder="jean.muller@email.com"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">Preferred Language</label>
                <select
                  value={form.language}
                  onChange={e => update('language', e.target.value)}
                  className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans appearance-none"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <option value="" style={{ background: '#141414' }}>Select language...</option>
                  {languages.map(l => <option key={l} style={{ background: '#141414' }}>{l}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">I am interested in</label>
                <select
                  value={form.service}
                  onChange={e => update('service', e.target.value)}
                  className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans appearance-none"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <option value="" style={{ background: '#141414' }}>Select a service...</option>
                  {serviceOptions.map(o => <option key={o} style={{ background: '#141414' }}>{o}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/30">Your Message</label>
                <textarea
                  placeholder="Tell us about your situation and goals..."
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  rows={4}
                  className="bg-white/[0.04] border border-white/12 text-white px-4 py-3.5 text-[0.9rem] outline-none focus:border-white/50 transition-colors w-full font-sans resize-y"
                />
              </div>

              {error && <p className="text-red-400 text-[0.8rem] mb-3">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-white text-black font-sans text-xs font-bold tracking-[0.18em] uppercase border-none cursor-pointer hover:bg-white/85 hover:-translate-y-0.5 transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <CheckCircle size={52} strokeWidth={1.5} className="text-white mb-6" />
              <h3 className="font-serif text-[1.8rem] font-bold mb-2">Message received</h3>
              <p className="text-[0.9rem] text-white/65">
                Thank you for reaching out. We'll be in touch within one business day in your preferred language.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
