'use client';

import React, { useState, useEffect } from 'react';

interface CardData {
  bg: string;
  accent: string;
  pill: string;
  pillBg: string;
  pillClr: string;
  line1: string;
  line2: string;
  heroNum: number;
  heroLabel: string;
  heroSuffix?: string;
}

const CARDS_DATA: Record<string, CardData> = {
  streak: { bg: 'linear-gradient(170deg,#060412 0%,#181040 52%,#221660 100%)', accent: '#FFB400', pill: 'DAILY STREAK', pillBg: 'rgba(255,180,0,.12)', pillClr: '#FFB400', line1: 'Still here.', line2: "That's already more than most.", heroNum: 7, heroLabel: 'DAY STREAK' },
  protein: { bg: 'linear-gradient(170deg,#010803 0%,#081508 52%,#0c1f0e 100%)', accent: '#00C878', pill: 'PROTEIN BEAST', pillBg: 'rgba(0,200,120,.1)', pillClr: '#00C878', line1: 'Protein locked in.', line2: '3 days straight.', heroNum: 138, heroLabel: "TODAY'S PROTEIN", heroSuffix: 'g' },
  warrior: { bg: 'linear-gradient(170deg,#120000 0%,#200800 52%,#2a0f00 100%)', accent: '#FF6450', pill: '7-DAY WARRIOR', pillBg: 'rgba(255,100,80,.1)', pillClr: '#FF6450', line1: 'No excuses.', line2: 'No shortcuts.', heroNum: 7, heroLabel: 'DAYS STRAIGHT' },
  habit: { bg: 'linear-gradient(170deg,#060412 0%,#120d2a 52%,#1a1240 100%)', accent: '#C8A8FF', pill: '21-DAY HABIT', pillBg: 'rgba(160,120,255,.15)', pillClr: '#C8A8FF', line1: "It's not a habit.", line2: "It's just who you are.", heroNum: 21, heroLabel: 'DAYS STRONG' },
  wrap: { bg: 'linear-gradient(170deg,#000c12 0%,#001828 52%,#002038 100%)', accent: '#50B4FF', pill: 'WEEK WRAP', pillBg: 'rgba(80,180,255,.1)', pillClr: '#50B4FF', line1: 'Real life happened.', line2: 'You handled it.', heroNum: 5, heroLabel: 'DAYS THIS WEEK', heroSuffix: '/7' },
  comeback: { bg: 'linear-gradient(170deg,#120006 0%,#220010 52%,#2e0018 100%)', accent: '#FF5078', pill: 'COMEBACK', pillBg: 'rgba(255,80,120,.1)', pillClr: '#FF5078', line1: 'The streak broke.', line2: "You didn't.", heroNum: 3, heroLabel: 'DAYS BACK' }
};

const CARD_ORDER = ['streak', 'protein', 'warrior', 'habit', 'wrap', 'comeback'];

export default function CardsShowcaseSection() {
  const [activeCard, setActiveCard] = useState('streak');
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    CARD_ORDER.forEach(id => initial[id] = 0);
    return initial;
  });

  const animateCard = (id: string) => {
    const target = CARDS_DATA[id].heroNum;
    let current = 0;
    const step = target / 35;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCounts((prev) => ({ ...prev, [id]: target }));
        clearInterval(interval);
      } else {
        setCounts((prev) => ({ ...prev, [id]: Math.round(current) }));
      }
    }, 20);
  };

  useEffect(() => {
    // Animate active card
    animateCard(activeCard);
  }, [activeCard]);

  const getTransform = (id: string) => {
    const index = CARD_ORDER.indexOf(id);
    const activeIdx = CARD_ORDER.indexOf(activeCard);
    const offset = index - activeIdx;
    const spread = 36;
    const rot = offset * 12;
    const tx = offset * spread;
    const ty = Math.abs(offset) * 8;
    const scale = id === activeCard ? 1 : 0.88;
    const z = CARD_ORDER.length - Math.abs(offset);
    
    return {
      transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
      zIndex: z,
      boxShadow: id === activeCard ? '0 24px 60px rgba(0,0,0,.5)' : '0 8px 24px rgba(0,0,0,.3)'
    };
  };

  return (
    <section className="bg-ink py-[100px] px-10 relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-blue mb-3.5 block">Building the habit</span>
          <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-white leading-[1.06] tracking-[-1.5px]">Streaks that mean something.</h2>
          <p className="text-[16px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.75] mt-3.5 max-w-[400px]">
            Fitakka only shows your streak after three consecutive days — because that&apos;s when a habit starts forming. Six different cards unlock as you hit milestones. Share them when you earn them.
          </p>
          <div className="flex flex-wrap gap-2 mb-7 mt-7">
            {CARD_ORDER.map(id => (
              <button 
                key={id}
                onClick={() => setActiveCard(id)}
                className={`px-3.5 py-[7px] rounded-[50px] text-[12px] font-[700] border transition-all whitespace-nowrap font-nunito ${activeCard === id ? 'bg-purple text-white border-purple' : 'bg-[rgba(255,255,255,0.06)] border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.5)] hover:text-white hover:border-[rgba(255,255,255,0.2)]'}`}
              >
                {CARDS_DATA[id].pill}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-[10px] mt-7">
            <div className="flex items-start gap-[9px] text-[14px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.55] before:content-['→'] before:text-purple before:font-[800] before:shrink-0 before:mt-[1px]">
              A day counts when you&apos;re within 10% of your calorie target and hit 90% of protein. Close enough always counts.
            </div>
            <div className="flex items-start gap-[9px] text-[14px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.55] before:content-['→'] before:text-purple before:font-[800] before:shrink-0 before:mt-[1px]">
              When a streak breaks, the card disappears quietly. No &quot;0 days&quot; shown. No shame. Just start again.
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[460px] flex items-center justify-center">
          {CARD_ORDER.map(id => {
            const d = CARDS_DATA[id];
            const suffix = d.heroSuffix || '';
            const t = getTransform(id);
            return (
              <div 
                key={id}
                onClick={() => setActiveCard(id)}
                className={`absolute w-[200px] aspect-[9/16] rounded-[18px] overflow-hidden cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCard === id ? 'z-[10]' : ''}`}
                style={t}
              >
                <div className="w-full h-full flex flex-col relative" style={{ background: d.bg }}>
                  <div className="absolute inset-0 opacity-[0.045] pointer-events-none z-0 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[length:14px_14px]"></div>
                  <div className="absolute bottom-[-30px] left-1/2 translate-x-[-50%] w-[160px] h-[160px] rounded-full blur-[50px] opacity-[0.22] pointer-events-none z-0" style={{ backgroundColor: d.accent }}></div>
                  
                  <div className="p-[14px_14px_0] relative z-[3] shrink-0">
                    <div className="text-[14px] font-[900] text-white tracking-[-0.03em] font-sans">Fitakka</div>
                    <div className="text-[6px] text-[rgba(255,255,255,0.25)] tracking-[0.08em] mt-0.5 uppercase">your dearly fitness habit builder</div>
                    <div className="inline-block text-[6px] font-[800] px-2 py-[2px] rounded-[20px] tracking-[0.1em] uppercase mt-2 border-[0.5px]" style={{ backgroundColor: d.pillBg, color: d.pillClr, borderColor: `${d.pillClr}44` }}>
                      {d.pill}
                    </div>
                  </div>

                  <div className="p-[10px_14px_0] relative z-[3] shrink-0 text-center">
                    <div className="text-[11px] font-[800] text-white leading-[1.2] tracking-[-0.01em] font-sans">{d.line1}</div>
                    <div className="text-[8.5px] font-[700] italic text-[rgba(255,255,255,0.5)] mt-[3px]">{d.line2}</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative z-[3] p-[4px_8px_0]">
                    <div>
                      <span className="text-[72px] font-[900] leading-[0.85] tracking-[-0.05em] font-sans block text-center" style={{ color: d.accent }}>
                        {counts[id] || 0}{suffix}
                      </span>
                      <div className="text-[6.5px] font-[700] tracking-[0.18em] uppercase mt-[5px] opacity-[0.5] text-center" style={{ color: d.accent }}>{d.heroLabel}</div>
                    </div>
                  </div>

                  <div className="bg-[rgba(0,0,0,0.28)] p-[7px_14px] flex items-center justify-between relative z-[3] shrink-0">
                    <div className="text-[6px] text-[rgba(255,255,255,0.18)]">fitakka.app</div>
                    <div className="text-[7px] font-[700] tracking-[0.05em] uppercase" style={{ color: d.accent }}>TRACK YOURS →</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
