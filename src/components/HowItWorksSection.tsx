'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "Describe what you ate and what you did",
      description: "Any meal, any workout, any walk — in plain language. One sentence covers your food and your physical activity. No databases, no logging apps, no weighing.",
      content: (
        <div className="bg-[rgba(249,249,252,0.06)] rounded-[13px] border border-[rgba(255,255,255,0.07)] p-[11px]">
          <div className="flex justify-between items-center mb-[9px]">
            <div className="flex items-center gap-[5px] text-[11px] font-[800] text-white">
              <span className="text-purple">✦</span> Log Food &amp; Activity
            </div>
            <div className="flex bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-[7px] p-0.5 gap-0.5">
              <div className="px-2 py-[3px] rounded-[5px] text-[10px] font-[700] bg-purple text-white">Food</div>
              <div className="px-2 py-[3px] rounded-[5px] text-[10px] font-[700] text-[rgba(255,255,255,0.3)]">Activity</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 mb-[9px]">
            <div className="rounded-[8px] py-1.5 px-0.5 text-center border-[1.5px] border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)]">
              <span className="text-[13px] block mb-[2px]">🍳</span><span className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">Breakfast</span>
            </div>
            <div className="rounded-[8px] py-1.5 px-0.5 text-center border-[1.5px] border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)]">
              <span className="text-[13px] block mb-[2px]">🥗</span><span className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">Lunch</span>
            </div>
            <div className="rounded-[8px] py-1.5 px-0.5 text-center border-[1.5px] border-purple bg-[rgba(149,140,232,0.14)]">
              <span className="text-[13px] block mb-[2px]">🍽</span><span className="text-[8px] font-[700] text-purple">Dinner</span>
            </div>
            <div className="rounded-[8px] py-1.5 px-0.5 text-center border-[1.5px] border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)]">
              <span className="text-[13px] block mb-[2px]">🏃</span><span className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">Activity</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="flex-1 h-[30px] rounded-[7px] border-[1.5px] border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-2 flex items-center text-[9px] text-[rgba(255,255,255,0.28)]">
              Walked 5km + grilled chicken for dinner…
            </div>
            <div className="w-[30px] h-[30px] rounded-[7px] border-[1.5px] border-purple text-purple flex items-center justify-center text-[11px]">➤</div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Fitakka calculates everything",
      description: "Calories, protein, carbs, fat, fibre — from both your meals and your physical activities. Updated instantly, no maths needed.",
      content: (
        <div className="bg-[rgba(249,249,252,0.06)] rounded-[13px] border border-[rgba(255,255,255,0.07)] p-[11px]">
          <div className="grid grid-cols-2 gap-1.5 mb-[9px]">
            <div className="bg-[rgba(240,240,248,0.08)] rounded-[10px] p-[9px] relative overflow-hidden min-h-[58px] border border-[rgba(255,255,255,0.06)]">
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[10px] bg-purple" style={{ height: '60%' }}></div>
              <div className="relative z-[2]">
                <div className="text-[9px] font-[700] text-[rgba(255,255,255,0.6)] mb-[3px]">Intake</div>
                <div className="text-[16px] font-[900] text-white tracking-[-0.5px] leading-none">1,840</div>
                <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.35)] mt-0.5">of 2,000 kcal</div>
              </div>
            </div>
            <div className="bg-[rgba(240,240,248,0.08)] rounded-[10px] p-[9px] relative overflow-hidden min-h-[58px] border border-[rgba(255,255,255,0.06)]">
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[10px] bg-blue" style={{ height: '20%' }}></div>
              <div className="relative z-[2]">
                <div className="text-[9px] font-[700] text-[rgba(255,255,255,0.6)] mb-[3px]">Burned</div>
                <div className="text-[16px] font-[900] text-white tracking-[-0.5px] leading-none">490</div>
                <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.35)] mt-0.5">kcal today</div>
              </div>
            </div>
          </div>
          <div className="mb-[7px]">
            <div className="flex justify-between items-center mb-[3px]">
              <div className="text-[9px] font-[700] text-[rgba(255,255,255,0.65)]">Protein</div>
              <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">112 / 152g</div>
            </div>
            <div className="h-1 rounded-[99px] bg-[rgba(255,255,255,0.07)] overflow-hidden">
              <div className="h-full bg-purple" style={{ width: '74%' }}></div>
            </div>
          </div>
          <div className="mb-[7px]">
            <div className="flex justify-between items-center mb-[3px]">
              <div className="text-[9px] font-[700] text-[rgba(255,255,255,0.65)]">Carbs</div>
              <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">246 / 425g</div>
            </div>
            <div className="h-1 rounded-[99px] bg-[rgba(255,255,255,0.07)] overflow-hidden">
              <div className="h-full bg-blue" style={{ width: '58%' }}></div>
            </div>
          </div>
          <div className="mb-0">
            <div className="flex justify-between items-center mb-[3px]">
              <div className="text-[9px] font-[700] text-[rgba(255,255,255,0.65)]">Fat</div>
              <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.3)]">70 / 86g</div>
            </div>
            <div className="h-1 rounded-[99px] bg-[rgba(255,255,255,0.07)] overflow-hidden">
              <div className="h-full bg-blue" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "One clear verdict at the end",
      description: "Fitakka tells you straight — success or missed. No analysis needed.",
      content: (
        <div>
          <div className="bg-[rgba(149,140,232,0.1)] border border-[rgba(149,140,232,0.22)] rounded-[11px] p-[10px_12px] mb-2">
            <div className="flex items-center gap-[5px] mb-[3px]">
              <span className="text-[13px]">✅</span>
              <span className="text-[11px] font-[800] text-white">Success day · Streak: 7</span>
            </div>
            <div className="text-[10px] text-[rgba(255,255,255,0.5)] font-[600] leading-[1.5]">
              Calories <span className="text-blue font-[800]">92%</span> · Protein <span className="text-blue font-[800]">118 / 120g</span> · Fibre ✓
            </div>
          </div>
          <div className="text-[8px] font-[700] text-[rgba(255,255,255,0.28)] uppercase tracking-[0.06em] mb-[5px]">Recent</div>
          <div className="bg-[rgba(249,249,252,0.05)] rounded-[9px] border border-[rgba(255,255,255,0.06)] p-2 flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-[7px] bg-[rgba(149,140,232,0.18)] flex items-center justify-center text-[13px] shrink-0">🍽</div>
            <div className="flex-1">
              <div className="text-[10px] font-[700] text-[rgba(255,255,255,0.75)]">Grilled chicken, rice</div>
              <div className="text-[9px] text-[rgba(255,255,255,0.28)] mt-[1px]">7:30 pm</div>
            </div>
            <div className="flex items-center gap-[3px] text-[10px] font-[700] text-[rgba(255,255,255,0.4)]">
              <div className="w-[5px] h-[5px] rounded-full bg-purple"></div>520 kcal
            </div>
          </div>
          <div className="bg-[rgba(249,249,252,0.05)] rounded-[9px] border border-[rgba(255,255,255,0.06)] p-2 flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-[7px] bg-[rgba(34,197,94,0.12)] flex items-center justify-center text-[13px] shrink-0">🏃</div>
            <div className="flex-1">
              <div className="text-[10px] font-[700] text-[rgba(255,255,255,0.75)]">Evening run · 30 min</div>
              <div className="text-[9px] text-[rgba(255,255,255,0.28)] mt-[1px]">6:15 pm</div>
            </div>
            <div className="flex items-center gap-[3px] text-[10px] font-[700] text-[rgba(255,255,255,0.4)]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#22C55E]"></div>290 kcal
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-3.5">
            <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] rounded-[10px] p-[10px_12px]">
              <div className="flex items-center gap-[7px] mb-[5px]">
                <div className="w-5 h-5 rounded-full bg-[#22C55E] shrink-0 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.2 2.2L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[11px] font-[800] text-[#22C55E]">Success</span>
              </div>
              <div className="text-[9px] font-[600] text-[rgba(255,255,255,0.45)] leading-[1.5]">Streak lives · protein locked in · same tomorrow</div>
            </div>
            <div className="bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.22)] rounded-[10px] p-[10px_12px]">
              <div className="flex items-center gap-[7px] mb-[5px]">
                <div className="w-5 h-5 rounded-full bg-[#EF4444] shrink-0 flex items-center justify-center">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 2l5 5M7 2L2 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <span className="text-[11px] font-[800] text-[#EF4444]">Missed</span>
              </div>
              <div className="text-[9px] font-[600] text-[rgba(255,255,255,0.45)] leading-[1.5]">Resets quietly · no shame · one focus tomorrow</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-ink py-[80px] lg:py-[100px] px-6 lg:px-10 relative overflow-hidden" id="how">
      <div className="max-w-[1120px] mx-auto">
        <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-blue mb-3.5 block">How Fitakka works</span>
        <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-white leading-[1.06] tracking-[-1.5px]">Two inputs.<br />One clear answer.</h2>
        <p className="text-[16px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.75] mt-3.5 max-w-[520px]">
          Log your meals and physical activities in plain language. Fitakka calculates every macro, every calorie burned, and gives you one clear daily verdict.
        </p>

        <ScrollReveal>
          {/* Mobile Accordion View */}
          <div className="flex flex-col gap-3 lg:hidden mt-[40px]">
            {steps.map((step) => (
              <div key={step.id} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[20px] transition-all overflow-hidden">
                <button 
                  onClick={() => setActiveStep(activeStep === step.id ? 0 : step.id)} 
                  className="w-full text-left p-[22px] flex justify-between items-start outline-none"
                >
                  <div className="pr-4">
                    <div className="text-[11px] font-[800] tracking-[0.12em] uppercase text-purple mb-2">Step 0{step.id}</div>
                    <h3 className="text-[16px] font-[900] text-white leading-tight">{step.title}</h3>
                  </div>
                  <div className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center shrink-0 mt-1 transition-transform duration-300">
                    <span className="text-white text-[18px] font-light leading-none">{activeStep === step.id ? '−' : '+'}</span>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out px-[22px] ${activeStep === step.id ? 'max-h-[800px] opacity-100 pb-[22px]' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  <div className="pt-2 border-t border-[rgba(255,255,255,0.05)] mt-2">
                    {step.content}
                    <p className="text-[13px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.65] mt-4">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-[56px] items-stretch">
            {steps.map((step) => (
              <div key={step.id} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-[22px] transition-all hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)] flex flex-col">
                <div className="text-[11px] font-[800] tracking-[0.12em] uppercase text-[rgba(255,255,255,0.25)] mb-3.5">Step 0{step.id}</div>
                {step.content}
                <div className="mt-auto">
                  <h3 className="text-[17px] font-[900] text-white mt-4 mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.65]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

