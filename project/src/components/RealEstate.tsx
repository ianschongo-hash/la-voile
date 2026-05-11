import { useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { Check } from 'lucide-react';

const features = [
  'Off-plan & ready units',
  'Developer negotiations',
  'ROI & yield analysis',
  'Legal due diligence',
  'Payment plan advisory',
  'Property management',
];

export default function RealEstate() {
  const cardRef = useRef<HTMLDivElement>(null);
  useFadeIn(cardRef);

  return (
    <section id="realestate" className="bg-[#141414] px-16 py-28">
      <div className="grid grid-cols-2 gap-20 items-center" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
        <div>
          <div className="flex items-center gap-4 text-[0.68rem] font-bold tracking-[0.28em] uppercase text-white/50 mb-5">
            <span className="w-7 h-0.5 bg-white/30" />
            Real Estate
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-[1.1] mb-6">
            Invest with<br />
            <em className="italic font-semibold text-white/70">clarity &amp; confidence</em>
          </h2>
          <p className="text-[0.95rem] text-white/65 max-w-xl leading-[1.95] mb-10">
            Dubai's property market offers exceptional returns — but navigating it requires local insight. We identify, filter and present only the deals that make genuine sense for your investment profile.
          </p>

          <div className="grid grid-cols-2 gap-3.5 mb-10">
            {features.map(f => (
              <div key={f} className="flex items-center gap-2.5 text-[0.82rem] font-medium text-white/65">
                <Check size={15} strokeWidth={2.5} className="text-white flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase bg-white text-black px-11 py-4 hover:bg-white/85 hover:-translate-y-0.5 transition-all no-underline"
          >
            Explore Opportunities
          </a>
        </div>

        <div ref={cardRef} className="relative h-[480px] opacity-0 transition-all duration-700">
          <div
            className="absolute inset-0 bg-[#0A0A0A] border border-white/12 p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-white bg-white/[0.08] border border-white/20 px-3.5 py-1.5 inline-block mb-5">
                Featured Opportunity
              </span>
              <h3 className="font-serif text-[2rem] font-bold leading-[1.2] mb-2">
                Downtown Dubai<br />2BR Residence
              </h3>
              <p className="text-[0.8rem] font-medium text-white/30 tracking-[0.06em]">
                Burj Khalifa District · Ready Q3 2025
              </p>
            </div>

            <div>
              <div className="flex gap-10 pt-6 border-t border-white/[0.07]">
                {[
                  { val: '7.2%', lbl: 'Net Yield' },
                  { val: 'AED 2.4M', lbl: 'Starting from' },
                  { val: '0%', lbl: 'Capital Gains Tax' },
                ].map(m => (
                  <div key={m.lbl}>
                    <div className="font-serif text-[1.8rem] font-bold text-white leading-none mb-1">{m.val}</div>
                    <div className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-white/30">{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 w-[110px] h-[110px] bg-white flex flex-col items-center justify-center z-10">
            <div className="font-serif text-[1.8rem] font-bold text-black leading-none">No</div>
            <div className="text-[0.55rem] font-bold tracking-[0.1em] uppercase text-black text-center mt-0.5">
              Income<br />Tax
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
