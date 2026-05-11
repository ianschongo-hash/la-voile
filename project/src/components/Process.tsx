import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const steps = [
  {
    num: '1',
    title: 'Discovery Call',
    text: 'We learn about your situation, goals and timeline in a free 30-minute consultation.',
  },
  {
    num: '2',
    title: 'Tailored Plan',
    text: 'We prepare a personalised roadmap covering every step relevant to your case.',
  },
  {
    num: '3',
    title: 'Execution',
    text: 'We handle all filings, authorities and appointments on your behalf.',
  },
  {
    num: '4',
    title: 'Arrival Support',
    text: 'Concierge and lifestyle services begin from the day you land in Dubai.',
  },
  {
    num: '5',
    title: 'Ongoing Care',
    text: 'We remain your trusted partner for renewals, investments and life in the UAE.',
  },
];

export default function Process() {
  const stepsRef = useRef<HTMLDivElement>(null);
  useFadeIn(stepsRef);

  return (
    <section id="process" className="bg-[#F0F0F0] px-16 py-28">
      <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-[#555] mb-5">
        <span className="w-7 h-0.5 bg-[#555]" />
        How It Works
      </div>
      <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] text-[#0A0A0A] mb-0">
        Your journey to Dubai,<br />
        <em className="italic font-semibold text-[#0A0A0A]/70">step by step</em>
      </h2>

      <div
        ref={stepsRef}
        className="grid mt-20 relative opacity-0 transition-all duration-700"
        style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
      >
        {/* Connector line */}
        <div
          className="absolute top-[27px] left-[10%] right-[10%] h-px"
          style={{ background: 'linear-gradient(to right, transparent, #999 20%, #999 80%, transparent)', opacity: 0.5 }}
        />

        {steps.map(s => (
          <div key={s.num} className="flex flex-col items-center text-center px-4">
            <div className="w-[54px] h-[54px] rounded-full border-2 border-[#999] flex items-center justify-center font-serif text-[1.3rem] font-bold text-[#333] bg-[#F0F0F0] relative z-10 mb-6">
              {s.num}
            </div>
            <div className="font-serif text-base font-bold text-[#0A0A0A] mb-2">{s.title}</div>
            <p className="text-[0.78rem] text-[#444] leading-[1.65]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
