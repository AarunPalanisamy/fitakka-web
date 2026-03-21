import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function NudgesSection() {
  const nudges = [
    { time: '8:30 am', title: 'Start the day right ☀️', msg: "Today's target: 2,000 calories and 120g of protein. Ready when you are.", color: '#F4A836' },
    { time: '1:30 pm', title: 'Protein is lagging 🥚', msg: "Only 38g of your 120g protein target so far. Make protein the priority at lunch.", color: '#F87171' },
    { time: '7:00 pm', title: 'Almost there 💪', msg: "Just 22g of protein left to hit today's target. One good dinner closes it.", color: 'var(--purple)' },
    { time: '9:30 pm', title: 'Success day. Streak lives. 🔥', msg: "Calories ✓ · Protein ✓ · 7 days in a row. Same again tomorrow.", color: '#22C55E' }
  ];

  return (
    <section className="bg-[#FAFAFE] py-[100px] px-10">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
        <div>
          <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-3.5 block">Smart nudges</span>
          <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-ink leading-[1.06] tracking-[-1.5px]">Fitakka checks in.<br />At the right moment.</h2>
          <p className="text-[16px] text-ink-50 font-[600] leading-[1.75] mt-3.5">Not every hour. Not with a generic reminder. Fitakka picks the one thing that matters most and says it once.</p>
          <div className="mt-7 bg-white border border-border border-l-3 border-l-purple rounded-r-[12px] p-[15px_18px] text-[13px] font-[700] text-ink-50 leading-[1.65]">
            Fitakka checks four times a day — <strong className="text-ink">morning, midday, evening and before bed.</strong> If you&apos;ve already opened the app, it stays quiet. Every message is one clear action, nothing more.
          </div>
        </div>
        <ScrollReveal>
          <div className="flex flex-col gap-[11px]">
            {nudges.map((n, i) => (
              <div key={i} className="bg-white border border-border rounded-[16px] p-[15px_17px] flex items-start gap-[11px] transition-all hover:translate-x-[5px] hover:shadow-[-3px_0_0_var(--purple)] hover:border-l-purple">
                <div className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ backgroundColor: n.color }}></div>
                <div className="text-[10px] font-[800] text-[rgba(33,34,45,0.3)] uppercase tracking-[0.07em] min-w-[44px] whitespace-nowrap pt-[1px]">
                  {n.time}
                </div>
                <div className="flex-1">
                  <div className="text-[13px] font-[800] text-ink mb-1">{n.title}</div>
                  <div className="text-[12px] text-ink-50 font-[600] leading-[1.5]">{n.msg}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
