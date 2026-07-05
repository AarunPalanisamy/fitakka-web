'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CardData {
  bg: string;
  accent: string;
  pill: string;
  btnLabel: string;
  pillBg: string;
  pillClr: string;
  line1: string;
  line2: string;
  heroNum: number;
  heroLabel: string;
  heroSuffix?: string;
  date: string;
}

const CARDS_DATA: Record<string, CardData> = {
  streak: { 
    bg: 'linear-gradient(180deg, #09061A 0%, #151035 50%, #20184A 100%)', 
    accent: '#958CE8', 
    pill: 'DAILY STREAK', 
    btnLabel: 'DAILY STREAK',
    pillBg: 'rgba(149, 140, 232, 0.12)', 
    pillClr: '#958CE8', 
    line1: 'Still here.', 
    line2: "Transformation isn't one day. It's this.", 
    heroNum: 7, 
    heroLabel: 'DAY STREAK',
    date: '18 JUN'
  },
  protein: { 
    bg: 'linear-gradient(180deg, #040914 0%, #0B162C 50%, #112140 100%)', 
    accent: '#ACD1FD', 
    pill: 'PROTEIN BEAST', 
    btnLabel: 'PROTEIN BEAST',
    pillBg: 'rgba(172, 209, 253, 0.14)', 
    pillClr: '#ACD1FD', 
    line1: 'Macros mastered.', 
    line2: 'Your body gets exactly what it needs.', 
    heroNum: 4, 
    heroLabel: 'DAYS STRAIGHT',
    date: '29 JUN'
  },
  warrior: { 
    bg: 'linear-gradient(180deg, #1C0A0A 0%, #301414 50%, #441C1C 100%)', 
    accent: '#FF6450', 
    pill: '7-DAY WARRIOR', 
    btnLabel: '7-DAY WARRIOR',
    pillBg: 'rgba(255,100,80,.1)', 
    pillClr: '#FF6450', 
    line1: 'No excuses.', 
    line2: 'No shortcuts.', 
    heroNum: 7, 
    heroLabel: 'DAYS STRAIGHT',
    date: '1 JUL'
  },
  habit: { 
    bg: 'linear-gradient(180deg, #10061C 0%, #200D35 50%, #2F134D 100%)', 
    accent: '#C8A8FF', 
    pill: '21-DAY HABIT', 
    btnLabel: '21-DAY HABIT',
    pillBg: 'rgba(200, 168, 255, 0.15)', 
    pillClr: '#C8A8FF', 
    line1: "It's not a habit.", 
    line2: "It's just who you are.", 
    heroNum: 21, 
    heroLabel: 'DAYS STRONG',
    date: '25 JUN'
  },
  wrap: { 
    bg: 'linear-gradient(180deg, #030F08 0%, #092013 50%, #0F331F 100%)', 
    accent: '#10B981', 
    pill: 'SUCCESS DAY', 
    btnLabel: 'WEEK WRAP',
    pillBg: 'rgba(16, 185, 129, 0.12)', 
    pillClr: '#10B981', 
    line1: 'One clean day closer.', 
    line2: 'Every success day adds up.', 
    heroNum: 1, 
    heroLabel: 'SUCCESS DAY',
    date: '3 JUL'
  },
  comeback: { 
    bg: 'linear-gradient(180deg, #190509 0%, #2D0B13 50%, #40101C 100%)', 
    accent: '#FF5078', 
    pill: 'COMEBACK', 
    btnLabel: 'COMEBACK',
    pillBg: 'rgba(255,80,120,.1)', 
    pillClr: '#FF5078', 
    line1: 'The streak broke.', 
    line2: "You didn't.", 
    heroNum: 3, 
    heroLabel: 'DAYS BACK',
    date: '27 JUN'
  }
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
    const spread = 40;
    const rot = offset * 10;
    const tx = offset * spread;
    const ty = Math.abs(offset) * 8;
    const scale = id === activeCard ? 1 : 0.88;
    const z = CARD_ORDER.length - Math.abs(offset);
    
    return {
      transform: `translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
      zIndex: z,
      boxShadow: id === activeCard ? '0 24px 60px rgba(0,0,0,.6)' : '0 8px 24px rgba(0,0,0,.3)'
    };
  };

  // Helper components for SVGs
  const CheckIcon = ({ color }: { color: string }) => (
    <div className="w-[14px] h-[14px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}25` }}>
      <svg className="w-[8px] h-[8px]" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );

  const BarbellIcon = ({ color }: { color: string }) => (
    <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" style={{ color }}>
      <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
      <rect x="7" y="7" width="2" height="10" rx="0.5" fill="currentColor" />
      <rect x="5" y="9" width="1.5" height="6" rx="0.5" fill="currentColor" />
      <rect x="15" y="7" width="2" height="10" rx="0.5" fill="currentColor" />
      <rect x="17" y="9" width="1.5" height="6" rx="0.5" fill="currentColor" />
    </svg>
  );

  const FireIcon = ({ color }: { color: string }) => (
    <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 2C7.5 6.5 6 10.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 9 14.5 4 12 2ZM12 16.5C10.3 16.5 9 15.2 9 13.5C9 12.3 9.8 10.8 11.2 9.5C11.6 9.1 12.4 9.1 12.8 9.5C14.2 10.8 15 12.3 15 13.5C15 15.2 13.7 16.5 12 16.5Z" />
    </svg>
  );

  const CalendarIcon = ({ color }: { color: string }) => (
    <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const ComebackIcon = ({ color }: { color: string }) => (
    <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color }}>
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  );

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
                {CARDS_DATA[id].btnLabel}
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

        <div className="order-1 lg:order-2 relative h-[480px] flex items-center justify-center">
          {CARD_ORDER.map(id => {
            const d = CARDS_DATA[id];
            const t = getTransform(id);
            return (
              <div 
                key={id}
                onClick={() => setActiveCard(id)}
                className={`absolute w-[240px] h-[426px] rounded-[24px] overflow-hidden cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCard === id ? 'z-[10]' : ''}`}
                style={t}
              >
                {/* Outer Phone Mockup Card */}
                <div className="w-full h-full flex flex-col relative font-sans" style={{ background: d.bg }}>
                  {/* Subtle BG Pattern */}
                  <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[length:14px_14px]"></div>
                  {/* Accent Glow */}
                  <div className="absolute bottom-[-40px] left-1/2 translate-x-[-50%] w-[180px] h-[180px] rounded-full blur-[60px] opacity-[0.25] pointer-events-none z-0" style={{ backgroundColor: d.accent }}></div>
                  
                  {/* Header Row */}
                  <div className="p-[14px_14px_0] flex justify-between items-start relative z-[3] shrink-0">
                    <div>
                      <div className="text-[12px] font-[900] text-white tracking-[-0.03em]">FitAkka</div>
                      <div className="text-[5px] text-[rgba(255,255,255,0.35)] tracking-[0.08em] mt-[3px] uppercase font-extrabold">your dearly fitness habit builder</div>
                    </div>
                    <div className="text-[7.5px] font-[800] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] px-2 py-[3px] rounded-full text-white/80 leading-none">
                      {d.date}
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="w-full flex justify-center mt-3.5 relative z-[3] shrink-0">
                    <div className="inline-flex items-center gap-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] px-2.5 py-[3.5px] rounded-full">
                      <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: d.accent }}></div>
                      <span className="text-[7.5px] font-[800] tracking-[0.1em] text-white/90 uppercase">{d.pill}</span>
                    </div>
                  </div>

                  {/* Username */}
                  <div className="w-full text-center mt-2.5 relative z-[3] shrink-0">
                    <span className="text-[19px] font-[900] text-white tracking-tight">user</span>
                  </div>

                  {/* Bear Mascot image */}
                  <div className="w-full flex justify-center mt-3 relative z-[3] shrink-0">
                    <div className="relative w-[100px] h-[100px]">
                      <Image 
                        src="/body-transformation.png" 
                        alt="Mascot Bear" 
                        fill
                        className="object-contain" 
                        priority
                      />
                    </div>
                  </div>

                  {/* Content Area - Card Specific Templates */}
                  <div className="flex-1 flex flex-col justify-start items-center relative z-[3] px-3.5 mt-2">
                    
                    {/* 1. DAILY STREAK CARD TEMPLATE */}
                    {id === 'streak' && (
                      <div className="w-full flex flex-col items-center">
                        {/* 7 dots indicator */}
                        <div className="flex items-center gap-[5px] mt-1">
                          {[...Array(7)].map((_, idx) => (
                            <div 
                              key={idx} 
                              className={`rounded-full transition-all duration-300 ${idx === 6 ? 'w-[7px] h-[7px] bg-[#958CE8]' : 'w-[5px] h-[5px] bg-[#958CE8]/30'}`}
                            />
                          ))}
                        </div>
                        {/* Streak Hero Number */}
                        <div className="text-[40px] font-[950] text-[#958CE8] leading-none tracking-tighter mt-1">
                          {counts['streak'] || 0}
                        </div>
                        <div className="text-[7px] font-[900] text-[#958CE8] tracking-[0.15em] uppercase mt-[3px]">
                          {d.heroLabel}
                        </div>
                        {/* Lines */}
                        <div className="text-[10px] font-[900] text-white mt-2 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        {/* Badges */}
                        <div className="grid grid-cols-2 gap-1.5 w-full mt-3">
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#958CE8" />
                            <span className="text-[5px] font-[900] text-[#958CE8] tracking-[0.05em] uppercase mt-1 text-center">CALORIE TARGET HIT</span>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#958CE8" />
                            <span className="text-[5px] font-[900] text-[#958CE8] tracking-[0.05em] uppercase mt-1 text-center">PROTEIN TARGET HIT</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. PROTEIN BEAST CARD TEMPLATE */}
                    {id === 'protein' && (
                      <div className="w-full flex flex-col items-center">
                        <div className="mt-1">
                          <BarbellIcon color="#ACD1FD" />
                        </div>
                        {/* Number */}
                        <div className="text-[40px] font-[950] text-[#ACD1FD] leading-none tracking-tighter mt-1">
                          {counts['protein'] || 0}
                        </div>
                        <div className="text-[7px] font-[900] text-[#ACD1FD] tracking-[0.15em] uppercase mt-[3px]">
                          {d.heroLabel}
                        </div>
                        {/* Lines */}
                        <div className="text-[10px] font-[900] text-white mt-2 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        {/* Single Target Hit Box */}
                        <div className="w-[85%] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-2 px-2 mt-3.5 flex flex-col items-center justify-center">
                          <CheckIcon color="#ACD1FD" />
                          <span className="text-[5.5px] font-[900] text-[#ACD1FD] tracking-[0.06em] uppercase mt-1">PROTEIN TARGET HIT</span>
                        </div>
                      </div>
                    )}

                    {/* 3. 7-DAY WARRIOR CARD TEMPLATE */}
                    {id === 'warrior' && (
                      <div className="w-full flex flex-col items-center">
                        <div className="mt-1">
                          <FireIcon color="#FF6450" />
                        </div>
                        <div className="text-[40px] font-[950] text-[#FF6450] leading-none tracking-tighter mt-1">
                          {counts['warrior'] || 0}
                        </div>
                        <div className="text-[7px] font-[900] text-[#FF6450] tracking-[0.15em] uppercase mt-[3px]">
                          {d.heroLabel}
                        </div>
                        <div className="text-[10px] font-[900] text-white mt-2 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 w-full mt-3">
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#FF6450" />
                            <span className="text-[5px] font-[900] text-[#FF6450] tracking-[0.05em] uppercase mt-1 text-center">WARRIOR TARGET HIT</span>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#FF6450" />
                            <span className="text-[5px] font-[900] text-[#FF6450] tracking-[0.05em] uppercase mt-1 text-center">STREAK SECURED</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. 21-DAY HABIT CARD TEMPLATE */}
                    {id === 'habit' && (
                      <div className="w-full flex flex-col items-center">
                        <div className="mt-1">
                          <CalendarIcon color="#C8A8FF" />
                        </div>
                        <div className="text-[40px] font-[950] text-[#C8A8FF] leading-none tracking-tighter mt-1">
                          {counts['habit'] || 0}
                        </div>
                        <div className="text-[7px] font-[900] text-[#C8A8FF] tracking-[0.15em] uppercase mt-[3px]">
                          {d.heroLabel}
                        </div>
                        <div className="text-[10px] font-[900] text-white mt-2 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 w-full mt-3">
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#C8A8FF" />
                            <span className="text-[5px] font-[900] text-[#C8A8FF] tracking-[0.05em] uppercase mt-1 text-center">HABIT UNLOCKED</span>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-1 flex flex-col items-center justify-center">
                            <CheckIcon color="#C8A8FF" />
                            <span className="text-[5px] font-[900] text-[#C8A8FF] tracking-[0.05em] uppercase mt-1 text-center">CONSISTENCY MASTER</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. WEEK WRAP CARD TEMPLATE (Styled as Success Day metrics) */}
                    {id === 'wrap' && (
                      <div className="w-full flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#10B981] shadow-lg shadow-emerald-950/40">
                          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {/* Lines */}
                        <div className="text-[10px] font-[900] text-white mt-2.5 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        {/* 3 Metrics Boxes */}
                        <div className="grid grid-cols-3 gap-1.5 w-full mt-3.5 px-1">
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-0.5 text-center flex flex-col justify-center items-center">
                            <span className="text-[11px] font-[950] text-[#10B981] leading-none">2,610</span>
                            <span className="text-[5px] font-[900] text-white/40 tracking-wider uppercase mt-[3px] scale-90">CONSUMED</span>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-0.5 text-center flex flex-col justify-center items-center">
                            <span className="text-[11px] font-[950] text-[#10B981] leading-none">2,255</span>
                            <span className="text-[5px] font-[900] text-white/40 tracking-wider uppercase mt-[3px] scale-90">BURNED</span>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-1.5 px-0.5 text-center flex flex-col justify-center items-center">
                            <span className="text-[11px] font-[950] text-[#10B981] leading-none">134g</span>
                            <span className="text-[5px] font-[900] text-white/40 tracking-wider uppercase mt-[3px] scale-90">PROTEIN</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 6. COMEBACK CARD TEMPLATE */}
                    {id === 'comeback' && (
                      <div className="w-full flex flex-col items-center">
                        <div className="mt-1">
                          <ComebackIcon color="#FF5078" />
                        </div>
                        <div className="text-[40px] font-[950] text-[#FF5078] leading-none tracking-tighter mt-1">
                          {counts['comeback'] || 0}
                        </div>
                        <div className="text-[7px] font-[900] text-[#FF5078] tracking-[0.15em] uppercase mt-[3px]">
                          {d.heroLabel}
                        </div>
                        <div className="text-[10px] font-[900] text-white mt-2 text-center leading-tight">
                          {d.line1}
                        </div>
                        <div className="text-[7.5px] font-[600] text-white/50 mt-[3px] text-center max-w-[180px] italic">
                          {d.line2} <span className="inline-block text-[#3b82f6] text-[8px] ml-0.5">🌀</span>
                        </div>
                        <div className="w-[85%] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[8px] py-2 px-2 mt-3.5 flex flex-col items-center justify-center">
                          <CheckIcon color="#FF5078" />
                          <span className="text-[5.5px] font-[900] text-[#FF5078] tracking-[0.06em] uppercase mt-1">BACK ON TRACK</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Footer Row */}
                  <div className="bg-[rgba(0,0,0,0.22)] p-[9px_14px] flex items-center justify-between border-t border-[rgba(255,255,255,0.04)] relative z-[3] shrink-0">
                    <div className="text-[6.5px] text-[rgba(255,255,255,0.18)] font-bold">fitakka.app</div>
                    <div className="text-[7px] font-[900] tracking-[0.05em] uppercase" style={{ color: d.accent }}>TRACK YOURS →</div>
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
