import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Briefcase, CreditCard, Building2 } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Briefcase size={24} strokeWidth={1.75} />,
    name: 'Company Formation',
    desc: 'We structure and register your UAE business — Mainland, Freezone, or Offshore — matched to your goals and optimised for tax efficiency.',
    features: [
      'Mainland & Freezone setup',
      'License application & approval',
      'PRO & government liaison',
      'Corporate structure advisory',
      'Ongoing compliance support',
    ],
  },
  {
    num: '02',
    icon: <CreditCard size={24} strokeWidth={1.75} />,
    name: 'Visa & Residency',
    desc: 'UAE residency, investor visas, family sponsorship — we manage every document and authority interaction so you don\'t have to.',
    features: [
      'Residency visa processing',
      'Investor & Golden Visa',
      'Family sponsorship',
      'Emirates ID registration',
      'Medical & insurance setup',
    ],
  },
  {
    num: '03',
    icon: <Building2 size={24} strokeWidth={1.75} />,
    name: 'Banking Setup',
    desc: 'Opening a UAE business or personal bank account can be complex. Our relationships with leading banks simplify the process significantly.',
    features: [
      'Personal & business accounts',
      'Multi-currency solutions',
      'Bank introductions',
      'Documentation preparation',
      'Credit & card setup',
    ],
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);
  useFadeIn(gridRef);

  return (
    <section id="services" className="bg-[#141414] px-16 py-28">
      <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-white/50 mb-5">
        <span className="w-7 h-0.5 bg-white/30" />
        What We Do
      </div>
      <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] mb-6">
        Complete relocation &amp;<br />
        <em className="italic font-semibold text-white/70">business advisory</em>
      </h2>
      <p className="text-[0.95rem] text-white/65 max-w-xl leading-[1.95]">
        A boutique advisory founded by Swiss expatriates who navigated every step of UAE relocation firsthand. We guide you through the entire process — with fluency in your language and precision in every detail.
      </p>

      <div
        ref={gridRef}
        className="grid grid-cols-3 mt-20 opacity-0 transition-all duration-700"
        style={{ gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        {services.map(s => (
          <div
            key={s.num}
            className="bg-[#0A0A0A] px-10 py-12 relative overflow-hidden group hover:bg-[#1E1E1E] transition-colors duration-300"
          >
            <span
              className="absolute top-8 right-10 font-serif text-[3.5rem] font-bold text-white/[0.04] leading-none select-none"
            >
              {s.num}
            </span>
            <div className="w-[52px] h-[52px] border border-white/20 flex items-center justify-center mb-8 text-white">
              {s.icon}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
            />
            <h3 className="font-serif text-[1.65rem] font-bold mb-4 text-white">{s.name}</h3>
            <p className="text-[0.88rem] text-white/65 leading-[1.85] mb-8">{s.desc}</p>
            <ul className="flex flex-col gap-2.5">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[0.8rem] font-medium text-white/45">
                  <span className="w-3.5 h-px bg-white/40 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
