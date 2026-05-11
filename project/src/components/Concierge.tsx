import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Car, Hotel, Compass, Users, Package, Shield, Smartphone, Phone } from 'lucide-react';

const items = [
  {
    icon: <Car size={22} strokeWidth={1.75} />,
    label: 'Car Rental & Leasing',
    sub: 'Curated fleet options, from practical daily drivers to premium vehicles.',
  },
  {
    icon: <Hotel size={22} strokeWidth={1.75} />,
    label: 'Hotel & Accommodation',
    sub: 'Pre-arrival stays, serviced apartments and exclusive hotel rates across Dubai.',
  },
  {
    icon: <Compass size={22} strokeWidth={1.75} />,
    label: 'Activity & Experiences',
    sub: 'Desert safaris, yacht charters, dining reservations — curated for you.',
  },
  {
    icon: <Users size={22} strokeWidth={1.75} />,
    label: 'Schools & Healthcare',
    sub: 'International school guidance and private healthcare registration for families.',
  },
  {
    icon: <Package size={22} strokeWidth={1.75} />,
    label: 'Home Setup & Moving',
    sub: 'Furniture, internet, utilities — everything you need from day one.',
  },
  {
    icon: <Shield size={22} strokeWidth={1.75} />,
    label: 'Insurance Advisory',
    sub: 'Health, vehicle and property insurance tailored for expat profiles in the UAE.',
  },
  {
    icon: <Smartphone size={22} strokeWidth={1.75} />,
    label: 'SIM & Digital Setup',
    sub: 'UAE mobile plans, banking apps and digital essentials sorted before you arrive.',
  },
  {
    icon: <Phone size={22} strokeWidth={1.75} />,
    label: 'Airport Transfers',
    sub: 'Private transfers and meet & greet so your journey starts stress-free.',
  },
];

export default function Concierge() {
  const gridRef = useRef<HTMLDivElement>(null);
  useFadeIn(gridRef);

  return (
    <section id="concierge" className="bg-[#0A0A0A] px-16 py-28">
      <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-white/50 mb-5">
        <span className="w-7 h-0.5 bg-white/30" />
        Lifestyle Services
      </div>
      <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] mb-6">
        Private concierge for<br />
        <em className="italic font-semibold text-white/70">discerning residents</em>
      </h2>
      <p className="text-[0.95rem] text-white/65 max-w-xl leading-[1.95]">
        Your arrival in Dubai should feel effortless. From the moment you land, we take care of the details that make daily life exceptional.
      </p>

      <div
        ref={gridRef}
        className="grid grid-cols-4 mt-18 opacity-0 transition-all duration-700"
        style={{ gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', marginTop: '4.5rem' }}
      >
        {items.map(item => (
          <div
            key={item.label}
            className="bg-[#0A0A0A] px-7 py-9 hover:bg-[#1E1E1E] transition-colors duration-300 cursor-default"
          >
            <div className="w-11 h-11 border border-white/15 flex items-center justify-center text-white mb-5">
              {item.icon}
            </div>
            <div className="font-serif text-[1.1rem] font-bold mb-2 text-white">{item.label}</div>
            <p className="text-[0.78rem] text-white/65 leading-[1.65]">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
