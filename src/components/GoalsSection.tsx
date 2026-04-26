'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function GoalsSection() {
  return (
    <section className="px-6 py-[60px]">
      <div className="max-w-[1080px] mx-auto bg-[radial-gradient(ellipse_55%_50%_at_90%_10%,rgba(149,140,232,.12)_0%,transparent_50%),radial-gradient(ellipse_45%_45%_at_5%_90%,rgba(172,209,253,.1)_0%,transparent_50%),#fff] rounded-[28px] px-[32px] md:px-[64px] py-[48px] md:py-[72px]">
        <ScrollReveal>
          <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-[14px] block">Who Fitakka is built for</span>
          <h2 className="text-[clamp(32px,4vw,48px)] font-[900] tracking-[-1.5px] leading-[1.06] mb-[14px] text-ink">
            Three goals.<br />
            <em className="serif-i text-purple">One daily habit.</em>
          </h2>
          <p className="text-[16px] text-ink-50 font-[600] leading-[1.75] mb-[52px] max-w-[540px]">
            Fitakka works for any fitness goal. Pick yours — the daily habit looks the same for all three. Show up, log it, get your verdict.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-[28px]">
          <ScrollReveal delay={100} className="border border-border rounded-[18px] p-[30px_26px] flex flex-col gap-[14px] bg-white transition-all duration-200 hover:border-purple hover:-translate-y-[3px]">
            <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[22px] shrink-0 bg-[#F0EEFF]">⚖️</div>
            <div className="text-[19px] font-[900] tracking-[-0.4px] text-ink">Lose weight</div>
            <p className="text-[13px] text-ink-50 font-[600] leading-[1.75] flex-1">
              Most people trying to lose weight are guessing their calories. Fitakka calculates your precise daily deficit, tracks every meal and every workout, and tells you each evening whether today moved you in the right direction. No extreme plans. No starvation. Just one honest daily answer.
            </p>
            <div className="flex items-center gap-[6px] text-[12px] font-[800] text-purple pt-[12px] border-t border-border mt-auto">
              <span>→</span> Fitakka tracks your deficit every day
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="border border-border rounded-[18px] p-[30px_26px] flex flex-col gap-[14px] bg-white transition-all duration-200 hover:border-purple hover:-translate-y-[3px]">
            <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[22px] shrink-0 bg-[#EDFBF0]">💪</div>
            <div className="text-[19px] font-[900] tracking-[-0.4px] text-ink">Gain muscle</div>
            <p className="text-[13px] text-ink-50 font-[600] leading-[1.75] flex-1">
              Protein is the single variable that matters most when you're building muscle — and the one most people consistently under-eat. Fitakka watches your protein target every day, nudges you when you're falling short, and turns hitting your number into a habit rather than a daily calculation.
            </p>
            <div className="flex items-center gap-[6px] text-[12px] font-[800] text-purple pt-[12px] border-t border-border mt-auto">
              <span>→</span> Fitakka watches protein relentlessly
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="border border-border rounded-[18px] p-[30px_26px] flex flex-col gap-[14px] bg-white transition-all duration-200 hover:border-purple hover:-translate-y-[3px]">
            <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[22px] shrink-0 bg-[#FFF3E0]">🔥</div>
            <div className="text-[19px] font-[900] tracking-[-0.4px] text-ink">Body transformation</div>
            <p className="text-[13px] text-ink-50 font-[600] leading-[1.75] flex-1">
              Transformation isn't a phase — it's a habit built over weeks and months. Fitakka tracks your calorie balance and protein daily, builds streaks that reward consistency, and resets without shame when life gets in the way. The goal isn't perfection. It's showing up enough days in a row that the habit forms.
            </p>
            <div className="flex items-center gap-[6px] text-[12px] font-[800] text-purple pt-[12px] border-t border-border mt-auto">
              <span>→</span> Fitakka builds the streak that sticks
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400} className="bg-ink rounded-[20px] p-[32px] md:p-[48px] grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[52px] items-start mt-[18px]">
          <div>
            <div className="text-[10px] font-[800] tracking-[0.14em] uppercase text-purple mb-[14px]">Who Fitakka is built for</div>
            <h3 className="text-[26px] font-[900] tracking-[-0.6px] leading-[1.12] text-purple mb-[14px]">
              If you've ever started<br />and stopped —<br />
              <em className="serif-i text-ink">this was built for you.</em>
            </h3>
            <p className="text-[14px] text-white font-[600] leading-[1.75] mb-[20px]">
              Fitakka is for anyone who wants to get fit but finds traditional tracking too complicated, too time-consuming, or too easy to abandon after the first week.
            </p>
          </div>
          
          <div className="flex flex-col gap-[14px]">
            {[
              "You want to get fit but don't know how much to eat or how active you actually need to be for your goal",
              "You've tried calorie apps before and found them too slow, too rigid, or too easy to abandon after the first week",
              "You struggle to build and maintain the tracking habit — not just for a week, but consistently over months",
              "You want one clear daily signal — success or miss — not a dashboard full of charts you'll never interpret"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-[12px] text-[14px] font-[600] text-white leading-[1.6]">
                <div className="w-[22px] h-[22px] rounded-full bg-purple shrink-0 flex items-center justify-center mt-[1px]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.2 2.2L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {text}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
