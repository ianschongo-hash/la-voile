import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Globe, Link, Target } from 'lucide-react';
import { SwissCross } from './Logo';

const stats = [
  { num: '4', label: 'Languages spoken' },
  { num: '100%', label: 'End-to-end service' },
  { num: '3', label: 'Service pillars' },
  { num: '0%', label: 'UAE income tax' },
];

const points = [
  {
    icon: <Globe size={20} strokeWidth={1.75} />,
    title: 'We speak your language — literally',
    text: 'German, French, Italian and English. The three official languages of Switzerland, covering every region we serve from back home.',
  },
  {
    icon: <SwissCross size={20} />,
    title: "We've done it ourselves",
    text: 'Our founders relocated from Switzerland to Dubai and built a company here. We know every step, every challenge, every shortcut.',
  },
  {
    icon: <Link size={20} strokeWidth={1.75} />,
    title: 'One point of contact, everything handled',
    text: 'From your first enquiry to your first month living in Dubai — one team, one relationship, total coverage.',
  },
  {
    icon: <Target size={20} strokeWidth={1.75} />,
    title: 'Boutique approach, no templates',
    text: "Every client's situation is unique. We tailor every recommendation to your personal and professional circumstances.",
  },
];

export default function WhyUs() {
  const pointsRef = useRef<HTMLDivElement>(null);
  useFadeIn(pointsRef);

  return (
    <section id="why" className="bg-[#0A0A0A] px-16 py-28">
      <div className="grid grid-cols-2 gap-24 items-start">
        <div>
          <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-white/50 mb-5">
            <span className="w-7 h-0.5 bg-white/30" />
            Why Choose Us
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] mb-6">
            Swiss precision,<br />
            <em className="italic font-semibold text-white/70">Dubai expertise</em>
          </h2>
          <p className="text-[0.95rem] text-white/65 max-w-xl leading-[1.95]">
            We didn't just study this process — we lived it. As Swiss expatriates who built our lives and business here, we understand exactly what you're facing, in your own language.
          </p>

          <div
            className="grid grid-cols-2 mt-14"
            style={{ gap: '1px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {stats.map(s => (
              <div key={s.label} className="bg-[#141414] px-7 py-9 text-center">
                <div className="font-serif text-[2.8rem] font-bold text-white leading-none mb-2">{s.num}</div>
                <div className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-white/30">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={pointsRef}
          className="pt-4 flex flex-col gap-9 opacity-0 transition-all duration-700"
        >
          {points.map(p => (
            <div key={p.title} className="flex gap-6 items-start">
              <div className="w-11 h-11 border border-white/15 flex items-center justify-center text-white flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <div className="font-serif text-[1.15rem] font-bold mb-1.5 text-white">{p.title}</div>
                <p className="text-[0.85rem] text-white/65 leading-[1.8]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
