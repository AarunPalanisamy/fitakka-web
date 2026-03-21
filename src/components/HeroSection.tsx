'use client';

import React from 'react';

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
            Tell Fitakka what you ate and what you did. In plain language. Fitakka calculates every macro, tracks every calorie, and nudges you at exactly the right moment.
          </p>
          <div className="flex items-center gap-3.5 flex-wrap">
            <a href="#demo" className="inline-flex items-center gap-2 bg-ink text-white px-[28px] py-[15px] rounded-[50px] font-nunito font-[800] text-[15px] hover:opacity-[0.82] transition-opacity tracking-[-0.2px]">
              ✦ Try it live
            </a>
            <a href="#how" className="inline-flex items-center gap-2 bg-transparent text-ink px-[24px] py-[14px] rounded-[50px] border-[1.5px] border-border font-nunito font-[800] text-[15px] hover:border-ink transition-colors">
              How it works →
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
              <strong className="text-ink">400+ people</strong> already on the waitlist
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-[340px] bg-ink rounded-[52px] p-[13px] shadow-[0_60px_120px_rgba(33,34,45,0.25),0_20px_40px_rgba(33,34,45,0.1)] shrink-0">
            <div className="bg-white rounded-[40px] overflow-hidden flex flex-col font-[-apple-system,'SF_Pro_Display',sans-serif]">
              <div className="flex justify-between items-center px-[18px] pt-3 text-[11px] font-[600] text-ink">
                <span>12:34</span>
                <div className="flex gap-1 items-center">
                  <div className="w-1 h-1 rounded-full bg-ink opacity-50"></div>
                  <div className="w-1 h-1 rounded-full bg-ink opacity-50"></div>
                  <div className="w-1 h-1 rounded-full bg-ink opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-between items-start px-4 py-2 pb-[10px]">
                <div>
                  <div className="text-[11px] color-[#999] font-[400] mb-[1px]">Welcome back</div>
                  <div className="text-[22px] font-[800] text-ink tracking-[-0.5px]">Priya</div>
                </div>
                <div className="w-[34px] h-[34px] rounded-full bg-[#F4F5F9] border border-border flex items-center justify-center text-[14px] mt-[2px]">🔔</div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] px-3 pb-[10px]">
                <div className="bg-[#F0F0F8] rounded-[16px] p-[13px] relative overflow-hidden min-h-[88px] border border-border">
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-[16px] bg-purple" style={{ height: '60%' }}></div>
                  <div className="absolute top-[9px] right-[9px] w-[22px] h-[22px] rounded-full bg-[rgba(149,140,232,0.2)] flex items-center justify-center text-[10px] z-[2]">📉</div>
                  <div className="relative z-[2]">
                    <div className="text-[10px] font-[700] text-ink mb-1">Intake</div>
                    <div className="text-[22px] font-[900] text-ink tracking-[-1px] leading-none">1,840</div>
                    <div className="text-[10px] font-[700] text-ink mt-[3px] opacity-[0.55]">of 2,000 kcal</div>
                  </div>
                </div>
                <div className="bg-[#F0F0F8] rounded-[16px] p-[13px] relative overflow-hidden min-h-[88px] border border-border">
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-[16px] bg-blue" style={{ height: '18%' }}></div>
                  <div className="absolute top-[9px] right-[9px] w-[22px] h-[22px] rounded-full bg-[rgba(149,140,232,0.2)] flex items-center justify-center text-[10px] z-[2]">🔥</div>
                  <div className="relative z-[2]">
                    <div className="text-[10px] font-[700] text-ink mb-1">Burned</div>
                    <div className="text-[22px] font-[900] text-ink tracking-[-1px] leading-none">490</div>
                    <div className="text-[10px] font-[700] text-ink mt-[3px] opacity-[0.55]">kcal today</div>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-[10px]">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[14px] font-[800] text-ink tracking-[-0.2px]">Today&apos;s Macros</div>
                  <div className="text-[11px] font-[600] text-purple">View All</div>
                </div>
                <div className="bg-[#F9F9FC] rounded-[14px] border border-border p-3">
                  <div className="mb-[9px]">
                    <div className="flex justify-between items-center mb-[5px]">
                      <div className="text-[11px] font-[700] text-ink">Protein</div>
                      <div className="text-[10px] font-[600] text-[#AAAABC]"><b className="text-ink font-[800]">112g</b> / 152g</div>
                    </div>
                    <div className="h-1.5 rounded-[99px] bg-[#EBEBF5] overflow-hidden">
                      <div className="h-full bg-purple" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                  <div className="mb-[9px]">
                    <div className="flex justify-between items-center mb-[5px]">
                      <div className="text-[11px] font-[700] text-ink">Carbs</div>
                      <div className="text-[10px] font-[600] text-[#AAAABC]"><b className="text-ink font-[800]">246g</b> / 425g</div>
                    </div>
                    <div className="h-1.5 rounded-[99px] bg-[#EBEBF5] overflow-hidden">
                      <div className="h-full bg-blue" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="flex justify-between items-center mb-[5px]">
                      <div className="text-[11px] font-[700] text-ink">Fat</div>
                      <div className="text-[10px] font-[600] text-[#AAAABC]"><b className="text-ink font-[800]">70g</b> / 86g</div>
                    </div>
                    <div className="h-1.5 rounded-[99px] bg-[#EBEBF5] overflow-hidden">
                      <div className="h-full bg-blue" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F9F9FC] rounded-[14px] border border-border p-3 mx-3 mb-[10px]">
                <div className="flex justify-between items-center mb-[10px]">
                  <div className="flex items-center gap-[5px] text-[13px] font-[800] text-ink">
                    <span className="text-purple">✦</span> Log Your Food
                  </div>
                  <div className="flex bg-white border border-border rounded-[8px] p-0.5 gap-0.5">
                    <div className="px-[9px] py-[3px] rounded-[6px] text-[10px] font-[700] bg-purple text-white">Food</div>
                    <div className="px-[9px] py-[3px] rounded-[6px] text-[10px] font-[700] text-[#999]">Activity</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[5px] mb-[9px]">
                  <div className="rounded-[9px] py-[7px] px-0.5 text-center border-[1.5px] border-border bg-white">
                    <span className="text-[14px] block mb-[2px]">🍳</span><span className="text-[8px] font-[700] text-[#AAAABC]">Breakfast</span>
                  </div>
                  <div className="rounded-[9px] py-[7px] px-0.5 text-center border-[1.5px] border-border bg-white">
                    <span className="text-[14px] block mb-[2px]">🥗</span><span className="text-[8px] font-[700] text-[#AAAABC]">Lunch</span>
                  </div>
                  <div className="rounded-[9px] py-[7px] px-0.5 text-center border-[1.5px] border-purple bg-[#F5F3FF]">
                    <span className="text-[14px] block mb-[2px]">🍽</span><span className="text-[8px] font-[700] text-purple">Dinner</span>
                  </div>
                  <div className="rounded-[9px] py-[7px] px-0.5 text-center border-[1.5px] border-border bg-white">
                    <span className="text-[14px] block mb-[2px]">🍎</span><span className="text-[8px] font-[700] text-[#AAAABC]">Snacks</span>
                  </div>
                </div>
                <div className="flex gap-[5px] items-center">
                  <input className="flex-1 h-[33px] rounded-[8px] border-[1.5px] border-border bg-white px-[9px] text-[10px] text-ink font-[-apple-system,'SF_Pro_Display',sans-serif]" placeholder="e.g., grilled chicken with rice…" readOnly />
                  <button className="w-[33px] h-[33px] rounded-[8px] bg-[#F4F5F9] flex items-center justify-center text-[12px] shrink-0 border-none">🎤</button>
                  <button className="w-[33px] h-[33px] rounded-[8px] bg-white border-2 border-purple text-purple flex items-center justify-center text-[13px] font-[900] shrink-0">➤</button>
                </div>
              </div>
              <div className="bg-white border-t border-border flex justify-around items-center pt-[7px] pb-[14px]">
                <div className="flex flex-col items-center gap-0.5 flex-1">
                  <span className="text-[15px] leading-none">🏠</span>
                  <div className="w-[14px] h-[3px] rounded-[99px] bg-purple mt-[-1px]"></div>
                  <span className="text-[9px] font-[700] text-purple">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-1">
                  <span className="text-[15px] leading-none opacity-[0.28]">📈</span>
                  <span className="text-[9px] font-[700] text-[#BBBBCC]">AI</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-1">
                  <span className="text-[15px] leading-none opacity-[0.28]">📊</span>
                  <span className="text-[9px] font-[700] text-[#BBBBCC]">Stats</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-1">
                  <span className="text-[15px] leading-none opacity-[0.28]">👤</span>
                  <span className="text-[9px] font-[700] text-[#BBBBCC]">Profile</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-1">
                  <span className="text-[15px] leading-none opacity-[0.28]">🧭</span>
                  <span className="text-[9px] font-[700] text-[#BBBBCC]">Explore</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[10%] right-[-26px] bg-white rounded-[12px] px-3 py-2 shadow-[0_8px_20px_rgba(33,34,45,0.12)] text-[11px] font-[800] text-ink flex items-center gap-[6px] whitespace-nowrap animate-floatY hidden lg:flex">
            <div className="w-[7px] h-[7px] rounded-full bg-purple"></div>
            7-day streak
          </div>
          <div className="absolute bottom-[18%] left-[-30px] bg-white rounded-[12px] px-3 py-2 shadow-[0_8px_20px_rgba(33,34,45,0.12)] text-[11px] font-[800] text-ink flex items-center gap-[6px] whitespace-nowrap animate-floatY [animation-delay:1.6s] hidden lg:flex">
            <div className="w-[7px] h-[7px] rounded-full bg-[#22C55E"></div>
            Success day ✓
          </div>
        </div>
      </div>
    </section>
  );
}
