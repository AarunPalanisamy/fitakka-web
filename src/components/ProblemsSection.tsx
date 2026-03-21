import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProblemsSection() {
  return (
    <section className="py-[100px] px-10 bg-[radial-gradient(ellipse_55%_50%_at_90%_10%,rgba(149,140,232,0.14)_0%,transparent_50%),radial-gradient(ellipse_45%_45%_at_5%_90%,rgba(172,209,253,0.12)_0%,transparent_50%),#fff]">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-3.5 block">Why people fail at fitness</span>
            <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-ink leading-[1.06] tracking-[-1.5px] max-w-[420px]">Three real problems.<br />No one talks about them.</h2>
          </div>
          <p className="text-[14px] font-[700] text-ink-50 max-w-[280px] lg:text-right leading-[1.6]">Fitakka was built specifically to solve each one of these.</p>
        </div>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-border rounded-[20px] overflow-hidden">
            {/* Card 1 */}
            <div className="p-10 lg:p-11 border-b lg:border-b-0 lg:border-r border-border flex flex-col transition-colors hover:bg-[#FAFAFE]">
              <div className="text-[28px] font-[900] tracking-[-0.5px] text-border mb-7 font-instrument">01</div>
              <div className="text-[20px] font-[900] text-ink leading-[1.2] tracking-[-0.4px] mb-3">Most fitness apps are a <em className="italic text-purple font-instrument">second job.</em></div>
              <div className="text-[13px] text-ink-50 leading-[1.75] font-[600] mb-6 flex-1">Searching databases. Weighing portions. Logging items one by one. It takes longer to log your meal than to eat it. Most people quit within two weeks — not from lost motivation, but because the tool got in the way.</div>
              <div className="text-[13px] font-[700] text-ink flex items-start gap-[7px] pt-5 border-t border-border">
                <span className="text-purple shrink-0">→</span> Fitakka takes one sentence. Plain language. Done in seconds.
              </div>
              <div className="text-[clamp(36px,3.8vw,52px)] font-[900] tracking-[-2px] leading-none mt-auto pt-6 border-t border-border font-instrument text-purple">
                2<span className="text-[0.5em] align-middle tracking-[-1px]"> min</span>
              </div>
              <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-2">That&apos;s all it takes to log your full day</div>
            </div>

            {/* Card 2 */}
            <div className="p-10 lg:p-11 border-b lg:border-b-0 lg:border-r border-border flex flex-col transition-colors hover:bg-[#FAFAFE]">
              <div className="text-[28px] font-[900] tracking-[-0.5px] text-border mb-7 font-instrument">02</div>
              <div className="text-[20px] font-[900] text-ink leading-[1.2] tracking-[-0.4px] mb-3">A dashboard shows you the past. <em className="italic text-purple font-instrument">Fitakka changes today.</em></div>
              <div className="text-[13px] text-ink-50 leading-[1.75] font-[600] mb-6 flex-1">Apps give you weekly reports and charts — but by the time you look, the day is gone. What actually helps is one clear message at 1pm: &quot;protein is low, fix it at lunch.&quot; Specific, in the moment, then silent.</div>
              <div className="text-[13px] font-[700] text-ink flex items-start gap-[7px] pt-5 border-t border-border">
                <span className="text-purple shrink-0">→</span> Fitakka sends one targeted nudge at the right time — four times a day at most.
              </div>
              <div className="text-[clamp(36px,3.8vw,52px)] font-[900] tracking-[-2px] leading-none mt-auto pt-6 border-t border-border font-instrument text-purple">
                1 NUDGE<br />
                <span className="text-[0.65em] opacity-[0.75]">AT THE RIGHT TIME</span><br />
                <span className="text-[0.55em] opacity-[0.6]">WITH CLEAR ACTION</span>
              </div>
              <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-2">When you can still do something about it</div>
            </div>

            {/* Card 3 */}
            <div className="p-10 lg:p-11 flex flex-col transition-colors hover:bg-[#FAFAFE]">
              <div className="text-[28px] font-[900] tracking-[-0.5px] text-border mb-7 font-instrument">03</div>
              <div className="text-[20px] font-[900] text-ink leading-[1.2] tracking-[-0.4px] mb-3">Information doesn&apos;t change behaviour. <em className="italic text-purple font-instrument">Habits do.</em></div>
              <div className="text-[13px] text-ink-50 leading-[1.75] font-[600] mb-6 flex-1">Knowing your macros doesn&apos;t make you consistent. What does is a streak you don&apos;t want to break — and a tool that resets quietly when you miss a day, so shame never becomes the reason you stop.</div>
              <div className="text-[13px] font-[700] text-ink flex items-start gap-[7px] pt-5 border-t border-border">
                <span className="text-purple shrink-0">→</span> Fitakka builds streaks that appear only when they&apos;re real, and reset without guilt.
              </div>
              <div className="text-[clamp(36px,3.8vw,52px)] font-[900] tracking-[-2px] leading-none mt-auto pt-6 border-t border-border font-instrument text-purple">
                CONSISTENCY<br />
                <span className="text-[0.65em] opacity-[0.75]">OVER PERFECTION</span>
              </div>
              <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-2">Fitakka prioritises and rewards consistency and healthy breaks</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
