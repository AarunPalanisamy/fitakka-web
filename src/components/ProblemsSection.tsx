'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProblemsSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const problems = [
    {
      id: 1,
      number: "01",
      title: (<span>Most fitness apps are a <em className="italic text-purple">second job.</em></span>),
      description: "Searching databases. Weighing portions. Logging items one by one. It takes longer to log your meal than to eat it. Most people quit within two weeks — not from lost motivation, but because the tool got in the way.",
      solutionText: "Fitakka takes one sentence. Plain language. Done in seconds.",
      graphic: (
        <div className="flex flex-col items-center justify-center text-center pt-6 border-t border-[rgba(0,0,0,0.08)] lg:border-border lg:min-h-[200px]">
          <div className="text-[clamp(36px,3.8vw,52px)] font-[900] tracking-[-2px] leading-none font-instrument text-purple">
            2<span className="text-[0.5em] align-middle tracking-[-1px]"> min</span>
          </div>
          <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-3">That&apos;s all it takes to log your full day</div>
        </div>
      )
    },
    {
      id: 2,
      number: "02",
      title: (<span>A dashboard shows you the past. <em className="italic text-purple">Fitakka changes today.</em></span>),
      description: "Apps give you weekly reports and charts — but by the time you look, the day is gone. What actually helps is one clear message at 1pm: \"protein is low, fix it at lunch.\" Specific, in the moment, then silent.",
      solutionText: "Fitakka sends one targeted nudge at the right time — four times a day at most.",
      graphic: (
        <div className="flex flex-col items-center justify-center text-center pt-6 border-t border-[rgba(0,0,0,0.08)] lg:border-border lg:min-h-[200px]">
          <div className="flex flex-col items-center gap-1">
            <div className="text-[clamp(32px,3.5vw,46px)] font-[900] tracking-[-1px] leading-[1.1] font-instrument text-purple">
              1 NUDGE
            </div>
            <div className="text-[clamp(18px,2vw,26px)] font-[800] tracking-[-0.5px] leading-[1.1] text-purple opacity-[0.75]">
              AT THE RIGHT TIME
            </div>
            <div className="text-[clamp(14px,1.5vw,20px)] font-[700] tracking-[0px] leading-[1.1] text-purple opacity-[0.6]">
              WITH CLEAR ACTION
            </div>
          </div>
          <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-3">When you can still do something about it</div>
        </div>
      )
    },
    {
      id: 3,
      number: "03",
      title: (<span>Information doesn&apos;t change behaviour. <em className="italic text-purple">Habits do.</em></span>),
      description: "Knowing your macros doesn&apos;t make you consistent. What does is a streak you don&apos;t want to break — and a tool that resets quietly when you miss a day, so shame never becomes the reason you stop.",
      solutionText: "Fitakka builds streaks that appear only when they&apos;re real, and reset without guilt.",
      graphic: (
        <div className="flex flex-col items-center justify-center text-center pt-6 border-t border-[rgba(0,0,0,0.08)] lg:border-border lg:min-h-[200px]">
          <div className="flex flex-col items-center gap-1">
            <div className="text-[clamp(32px,3.5vw,46px)] font-[900] tracking-[-1px] leading-[1.1] font-instrument text-purple">
              CONSISTENCY
            </div>
            <div className="text-[clamp(18px,2vw,26px)] font-[800] tracking-[-0.5px] leading-[1.1] text-purple opacity-[0.75]">
              OVER PERFECTION
            </div>
          </div>
          <div className="text-[11px] font-[800] text-ink-50 uppercase tracking-[0.08em] mt-3">Fitakka prioritises and rewards consistency and healthy breaks</div>
        </div>
      )
    }
  ];

  return (
    <section className="py-[100px] px-6 lg:px-10 bg-[radial-gradient(ellipse_55%_50%_at_90%_10%,rgba(149,140,232,0.14)_0%,transparent_50%),radial-gradient(ellipse_45%_45%_at_5%_90%,rgba(172,209,253,0.12)_0%,transparent_50%),#fff]">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div>
            <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-3.5 block">Why people fail at fitness</span>
            <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-ink leading-[1.06] tracking-[-1.5px] max-w-[420px]">Three real problems.<br />No one talks about them.</h2>
          </div>
          <p className="text-[14px] font-[700] text-ink-50 max-w-[280px] lg:text-right leading-[1.6]">Fitakka was built specifically to solve each one of these.</p>
        </div>
        
        <ScrollReveal>
          {/* Mobile Accordion View */}
          <div className="flex flex-col gap-3 lg:hidden">
            {problems.map((problem) => (
              <div key={problem.id} className="bg-white border border-border rounded-[20px] transition-all overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveStep(activeStep === problem.id ? 0 : problem.id)} 
                  className="w-full text-left p-[22px] flex justify-between items-start outline-none"
                >
                  <div className="pr-4">
                    <div className="text-[14px] font-[900] tracking-[-0.5px] text-border mb-2 font-instrument leading-none">{problem.number}</div>
                    <h3 className="text-[18px] font-[900] text-ink leading-tight tracking-[-0.4px]">{problem.title}</h3>
                  </div>
                  <div className="w-[28px] h-[28px] rounded-full bg-[#FAFAFE] border border-border flex items-center justify-center shrink-0 mt-1 transition-transform duration-300">
                    <span className="text-ink text-[18px] font-light leading-none">{activeStep === problem.id ? '−' : '+'}</span>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out px-[22px] bg-[#FAFAFE] ${activeStep === problem.id ? 'max-h-[800px] opacity-100 pb-[22px]' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  <div className="pt-4 border-t border-[rgba(0,0,0,0.04)]">
                    <div className="text-[13px] text-ink-50 leading-[1.75] font-[600] mb-6">{problem.description}</div>
                    <div className="mt-auto flex flex-col">
                      <div className="text-[13px] font-[700] text-ink flex items-start gap-[7px] pb-5">
                        <span className="text-purple shrink-0">→</span> {problem.solutionText}
                      </div>
                      {problem.graphic}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 border border-border rounded-[20px] overflow-hidden bg-white">
            {problems.map((problem, idx) => (
              <div key={problem.id} className={`p-10 lg:p-11 border-b lg:border-b-0 ${idx < 2 ? 'lg:border-r' : ''} border-border flex flex-col transition-colors hover:bg-[#FAFAFE]`}>
                <div className="text-[28px] font-[900] tracking-[-0.5px] text-border mb-7 font-instrument">{problem.number}</div>
                <div className="text-[20px] font-[900] text-ink leading-[1.2] tracking-[-0.4px] mb-3">{problem.title}</div>
                <div className="text-[13px] text-ink-50 leading-[1.75] font-[600] mb-6 flex-1">{problem.description}</div>
                
                <div className="mt-auto flex flex-col">
                  <div className="text-[13px] font-[700] text-ink flex items-start gap-[7px] pt-5 border-t border-border lg:min-h-[110px]">
                    <span className="text-purple shrink-0">→</span> {problem.solutionText}
                  </div>
                  {problem.graphic}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
