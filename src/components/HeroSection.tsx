'use client';

import React from 'react';
import InteractivePhoneDemo from './InteractivePhoneDemo';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-10 pt-[90px] pb-[60px] relative overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_80%_20%,rgba(149,140,232,0.18)_0%,transparent_55%),radial-gradient(ellipse_50%_60%_at_10%_80%,rgba(172,209,253,0.16)_0%,transparent_50%),radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(149,140,232,0.06)_0%,transparent_60%),#fff]">
      <div className="max-w-[1120px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[72px] items-center relative z-[1]">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-[800] tracking-[0.1em] uppercase text-purple mb-7 px-3.5 py-[7px] border border-purple-24 rounded-[50px] bg-purple-12">
            <div className="w-1.5 h-1.5 rounded-full bg-purple animate-blink"></div>
            Beta is live
          </div>
          <h1 className="text-[clamp(44px,5.5vw,72px)] font-[900] leading-[1.02] tracking-[-2.5px] mb-6">
            Your dearly<br />
            <span className="serif-i tracking-[-1px]">fitness habit</span><br />
            builder.
          </h1>
          <p className="text-[18px] text-ink-50 leading-[1.75] font-[600] mb-10 max-w-[500px]">
            Describe what you ate and what you did today - in plain language. Fitakka calculates your calories, protein, carbs, fat and fibre, tracks your physical activity, and tells you every evening whether you're moving closer to your goal or not. Habit science says you need a cue, a routine, and a reward. Fitakka is all three, every single day.
          </p>
          <div className="flex items-center gap-3.5 flex-wrap">
            <a href="#" className="inline-flex items-center gap-[10px] bg-ink text-white px-[20px] py-[12px] rounded-[14px] hover:opacity-[0.82] transition-opacity hover:-translate-y-0.5 transform duration-200">
              <svg viewBox="0 0 384 512" width="22" height="22" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-93.1 22.7-18.9 0-46.2-21-76-21-46.2 0-89.8 29.5-115 72.8-51.4 86.8-11.4 213.7 38.3 286.3 23.3 34.3 52.8 72 89.2 70.8 35.1-1.2 48.7-22.7 91.2-22.7 42.4 0 54.8 22.7 92.1 21.5 38.6-1.2 63.8-35.5 86.2-68.5 26.6-39.2 37.6-77.2 38.8-79.3-1.1-.3-72.3-27.7-72.6-113.2zM228.6 83.6c20.3-24.8 34-59.5 30.2-93.6-28.7 1.3-64.6 20-85.7 45.4-18.1 21.8-34.1 57.3-29.3 90.6 32.1 2.6 65.5-18.2 84.8-42.4z"/></svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-semibold text-white/70 mb-0.5">Download on the</span>
                <span className="text-[15px] font-[800] tracking-tight">App Store</span>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-[10px] bg-ink text-white px-[20px] py-[12px] rounded-[14px] hover:opacity-[0.82] transition-opacity hover:-translate-y-0.5 transform duration-200">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-semibold text-white/70 mb-0.5">GET IT ON</span>
                <span className="text-[15px] font-[800] tracking-tight">Google Play</span>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-[10px] mt-7">
            <div className="flex">
              <div className="w-[26px] h-[26px] rounded-full bg-purple border-2 border-white flex items-center justify-center text-[10px] font-[800] text-white">A</div>
              <div className="w-[26px] h-[26px] rounded-full bg-blue border-2 border-white flex items-center justify-center text-[10px] font-[800] text-ink ml-[-5px]">R</div>
              <div className="w-[26px] h-[26px] rounded-full bg-border border-2 border-white flex items-center justify-center text-[10px] font-[800] text-ink ml-[-5px]">P</div>
              <div className="w-[26px] h-[26px] rounded-full bg-purple border-2 border-white flex items-center justify-center text-[10px] font-[800] text-white ml-[-5px]">S</div>
            </div>
            <p className="text-[12px] font-[700] text-ink-50">
              <strong className="text-ink">200+ people</strong> already on the waitlist
            </p>
          </div>
        </div>

        <div className="relative flex justify-center w-full">
          <InteractivePhoneDemo />
          {/* <div className="absolute top-[10%] right-[-26px] bg-white rounded-[12px] px-3 py-2 shadow-[0_8px_20px_rgba(33,34,45,0.12)] text-[11px] font-[800] text-ink flex items-center gap-[6px] whitespace-nowrap animate-floatY hidden xl:flex z-50">
            <div className="w-[7px] h-[7px] rounded-full bg-purple"></div>
            7-day streak
          </div>
          <div className="absolute bottom-[18%] left-[-30px] bg-white rounded-[12px] px-3 py-2 shadow-[0_8px_20px_rgba(33,34,45,0.12)] text-[11px] font-[800] text-ink flex items-center gap-[6px] whitespace-nowrap animate-floatY [animation-delay:1.6s] hidden xl:flex z-50">
            <div className="w-[7px] h-[7px] rounded-full bg-[#22C55E]"></div>
            Success day ✓
          </div> */}
        </div>
      </div>
    </section>
  );
}
