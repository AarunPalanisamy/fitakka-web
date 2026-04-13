'use client';

import React, { useState } from 'react';

export default function InteractivePhoneDemo() {
  const [intake, setIntake] = useState(0);
  const [burned, setBurned] = useState(1485);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fiber: 0, fat: 0 });
  const [tab, setTab] = useState<'Food' | 'Activity'>('Food');
  const [meal, setMeal] = useState<'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks'>('Snacks');
  const [input, setInput] = useState('');
  const [portion, setPortion] = useState(1);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    
    setTimeout(() => {
      const isActivity = tab === 'Activity' || input.toLowerCase().includes('run') || input.toLowerCase().includes('walk') || input.toLowerCase().includes('workout') || input.toLowerCase().includes('jog');
      
      if (isActivity) {
         setBurned(prev => prev + Math.floor((Math.random() * 200 + 100) * portion));
      } else {
         const k = Math.floor((Math.random() * 400 + 200) * portion);
         const p = Math.floor((Math.random() * 20 + 10) * portion);
         const c = Math.floor((Math.random() * 40 + 20) * portion);
         const f = Math.floor((Math.random() * 15 + 5) * portion);
         const fb = Math.floor((Math.random() * 8 + 2) * portion);
         
         setIntake(prev => prev + k);
         setMacros(prev => ({
           protein: prev.protein + p,
           carbs: prev.carbs + c,
           fat: prev.fat + f,
           fiber: prev.fiber + fb
         }));
      }
      setInput('');
      setLoading(false);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-[400px]">
      {/* Animated Magical Spark Backgrounds */}
      <div className="absolute top-1/4 -left-16 w-[200px] h-[200px] bg-[#8B80F9] mix-blend-multiply filter blur-[70px] opacity-40 animate-pulse transition-opacity duration-1000 z-0 rounded-full"></div>
      <div className="absolute top-3/4 -right-16 w-[200px] h-[200px] bg-[#E2A6FF] mix-blend-multiply filter blur-[70px] opacity-40 animate-pulse transition-opacity duration-1000 [animation-delay:1s] z-0 rounded-full"></div>
      <div className="absolute inset-[-4px] bg-gradient-to-b from-[#8B80F9] via-[#D3ACEF] to-[#8B80F9] opacity-30 blur-[20px] rounded-[52px] animate-[pulse_3s_ease-in-out_infinite] z-0"></div>

      {/* The Phone Frame */}
      <div className="relative z-10 bg-[#FAFAFE] rounded-[48px] border-[12px] border-[#18181B] shadow-[0_30px_80px_-15px_rgba(139,128,249,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset] h-[820px] overflow-hidden flex flex-col scale-[0.95] sm:scale-100 transform origin-top">
        
        {/* Standard Mobile Notch */}
        <div className="absolute top-0 inset-x-0 h-[28px] flex justify-center z-50">
          <div className="w-[110px] h-full bg-[#18181B] rounded-b-[18px] relative">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1A1A1E] border border-white/5 shadow-inner"></div>
          </div>
        </div>

        {/* Simulated Status Bar */}
        <div className="absolute top-0 inset-x-0 h-[44px] px-6 flex justify-between items-center z-40 pointer-events-none">
          <span className="text-[12px] font-[600] text-ink tracking-tight mt-1">9:41</span>
          <div className="flex items-center gap-1.5 mt-1">
            <svg className="w-4 h-4 text-ink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
            <div className="w-5 h-2.5 outline outline-1 outline-ink rounded-sm relative"><div className="absolute left-[1px] top-[1px] bottom-[1px] right-[2px] bg-ink rounded-[1px]"></div></div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-5 pt-[60px] pb-8 flex flex-col gap-[14px]">
          
          {/* Top Row: Intake & Burned */}
          <div className="grid grid-cols-2 gap-[12px]">
            {/* Intake */}
            <div className="bg-[#F3F4F7] rounded-[24px] p-4 relative overflow-hidden h-[130px] flex flex-col justify-end">
              <div className="absolute top-4 left-4 z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                  <polyline points="16 17 22 17 22 11"></polyline>
                </svg>
              </div>
              <div className="relative z-10 mt-auto">
                <div className="text-[12px] font-[800] text-ink mb-[2px] tracking-tight">Intake</div>
                <div className="text-[32px] font-[900] text-black leading-[1] tracking-[-1.5px] mb-[2px]">{intake.toLocaleString()}</div>
                <div className="text-[11px] font-[700] text-ink-50">of 3,081 kcal</div>
              </div>
            </div>

            {/* Burned */}
            <div className="bg-[#F3F4F7] rounded-[24px] p-4 relative overflow-hidden h-[130px] flex flex-col justify-end">
              <div 
                className="absolute left-0 right-0 bottom-0 bg-[#A6A2F8] transition-all duration-1000 ease-out" 
                style={{ height: `${Math.max(15, Math.min((burned / 2680) * 100, 100))}%` }}
              ></div>
              <div className="absolute top-4 left-4 z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="relative z-10 mt-auto mix-blend-multiply">
                <div className="text-[12px] font-[800] text-ink mb-[2px] tracking-tight">Burned</div>
                <div className="text-[32px] font-[900] text-black leading-[1] tracking-[-1.5px] mb-[2px]">{burned.toLocaleString()}</div>
                <div className="text-[11px] font-[700] text-[#4F4F55]">of 2,680 kcal</div>
              </div>
            </div>
          </div>

          {/* Logger Card */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#EBECEF]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-[#8B80F9]">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <h3 className="text-[15px] font-[800] text-ink tracking-tight">Log Your Food</h3>
              </div>
              
              <div className="flex items-center bg-[#F3F4F7] p-[3px] rounded-full border border-[#EBECEF]">
                <button 
                  onClick={() => setTab('Food')}
                  className={`flex items-center gap-[4px] px-[12px] py-[6px] rounded-full text-[10.5px] font-[800] transition-colors shadow-sm ${tab === 'Food' ? 'bg-[#988DFB] text-white' : 'bg-transparent text-ink-50 shadow-none'}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                  Food
                </button>
                <button 
                  onClick={() => setTab('Activity')}
                  className={`flex items-center gap-[4px] px-[12px] py-[6px] rounded-full text-[10.5px] font-[800] transition-colors shadow-sm ${tab === 'Activity' ? 'bg-[#988DFB] text-white' : 'bg-transparent text-ink-50 shadow-none'}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Activity
                </button>
              </div>
            </div>

            {tab === 'Food' && (
              <div className="grid grid-cols-4 gap-[8px] mb-4">
                {[
                  { 
                    id: 'Breakfast', 
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] mb-[4px] text-current"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                  },
                  { 
                    id: 'Lunch', 
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] mb-[4px] text-current"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                  },
                  { 
                    id: 'Dinner', 
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] mb-[4px] text-current"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  },
                  { 
                    id: 'Snacks', 
                    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] mb-[4px] text-current"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                  }
                ].map(m => (
                  <button 
                    key={m.id}
                    onClick={() => setMeal(m.id as any)}
                    className={`flex flex-col items-center justify-center py-[10px] rounded-[16px] border transition-colors outline-none focus:outline-none ${meal === m.id ? 'bg-[#988DFB] border-[#988DFB] text-white shadow-[0_4px_12px_rgba(152,141,251,0.25)]' : 'bg-white border-[#EBECEF] text-ink-50 hover:bg-[#F9FAFB]'}`}
                  >
                    {m.icon}
                    <span className="text-[9px] font-[800] tracking-tight">{m.id}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-[8px] mb-5">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if(e.key === 'Enter') submit(); }}
                placeholder={tab === 'Food' ? "I had 3 dosa and white chutney" : "e.g. 30 min morning walk"} 
                className="flex-1 bg-white border border-[#EBECEF] rounded-[16px] px-[16px] text-[13px] font-[600] text-ink placeholder:text-[#A1A1A5] outline-none focus:border-[#8B80F9] transition-colors"
              />
              <button className="w-[42px] h-[42px] shrink-0 rounded-[14px] border border-[#EBECEF] flex items-center justify-center text-ink-50 bg-[#F9FAFB] hover:text-[#8B80F9] transition-colors outline-none focus:outline-none">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button 
                onClick={submit}
                disabled={loading || !input.trim()}
                className="w-[42px] h-[42px] shrink-0 rounded-[14px] bg-[#988DFB] text-white flex items-center justify-center hover:bg-[#8B80F9] transition-colors shadow-[0_4px_12px_rgba(152,141,251,0.25)] disabled:opacity-50 disabled:shadow-none outline-none focus:outline-none"
              >
                {loading ? (
                  <div className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.608 2.05a.5.5 0 0 1 .784 0l2.454 3.493a3 3 0 0 0 1.66 1.156l4.136.936a.5.5 0 0 1 .288.825l-2.932 2.92a3 3 0 0 0-.853 1.884l-.38 4.225a.5.5 0 0 1-.876.242l-2.846-3.195a3 3 0 0 0-2.022-.988l-4.225-.262a.5.5 0 0 1-.303-.84l3.16-2.88a3 3 0 0 0 .942-1.84z"/>
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] font-[800] text-ink pr-3">Portion size</div>
              <div className="flex gap-[4px] bg-transparent">
                {[
                  { val: 0.5, label: '½ serve', sub: 'Half' },
                  { val: 1, label: '1 serve', sub: 'Regular' },
                  { val: 1.5, label: '1½ serve', sub: 'Large' },
                  { val: 2, label: '2 serves', sub: 'Double' },
                ].map(p => (
                  <button 
                    key={p.val}
                    onClick={() => setPortion(p.val)}
                    className={`px-[10px] py-[6px] rounded-[10px] flex flex-col items-center justify-center transition-colors min-w-[55px] outline-none focus:outline-none ${portion === p.val ? 'bg-[#EEEEF1] text-ink' : 'bg-transparent text-[#B4B4B8] hover:bg-[#F9FAFB] hover:text-[#888]'}`}
                  >
                    <span className="text-[9.5px] font-[800] leading-none mb-[3px]">{p.label}</span>
                    <span className="text-[7px] font-[700] uppercase tracking-[0.05em] opacity-40">{p.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[9.5px] font-[600] text-[#A1A1A5] text-center mt-4 italic">
              As you know, clear and detailed inputs generate more accurate results!
            </div>
          </div>

          {/* Bottom Macros */}
          <div className="pb-10">
            <h3 className="text-[16px] font-[800] text-ink mb-3 tracking-tight">Today's Macros</h3>
            <style>{`
              @keyframes slide-wave {
                0% { background-position-x: 0; }
                100% { background-position-x: -200%; }
              }
            `}</style>
            <div className="grid grid-cols-2 gap-[10px]">
              {[
                { label: 'Protein', value: macros.protein, target: 152, unit: 'g', color: '#988DFB' },
                { label: 'Carbs', value: macros.carbs, target: 425, unit: 'g', color: '#60A5FA' },
                { label: 'Fiber', value: macros.fiber, target: 40, unit: 'g', color: '#A78BFA' },
                { label: 'Fat', value: macros.fat, target: 80, unit: 'g', color: '#FCD34D' }
              ].map((m, i) => {
                const percentage = Math.max(12, Math.min((m.value / m.target) * 100, 100));
                
                return (
                  <div key={m.label} className={`bg-white rounded-[20px] p-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.015)] border border-[#EBECEF] relative overflow-hidden`} style={{ animationDelay: `${i * 0.1}s` }}>
                    {/* Wavy Water Fill Background */}
                    <div 
                      className="absolute left-0 right-0 bottom-0 w-full z-0 transition-all duration-1000 ease-in-out"
                      style={{ height: `${percentage}%` }}
                    >
                      {/* Back Wave */}
                      <div 
                        className="absolute top-[-14px] left-0 w-full h-[15px] opacity-40 animate-[slide-wave_3s_linear_infinite]"
                        style={{ 
                          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${m.color.replace('#', '%23')}' /%3E%3C/svg%3E") repeat-x`, 
                          backgroundSize: '200% 100%' 
                        }}
                      ></div>
                      {/* Front Wave */}
                      <div 
                        className="absolute top-[-10px] left-0 w-full h-[12px] opacity-60 animate-[slide-wave_2s_linear_infinite]"
                        style={{ 
                          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='${m.color.replace('#', '%23')}' /%3E%3C/svg%3E") repeat-x`, 
                          backgroundSize: '200% 100%',
                          backgroundPosition: '50% 0'
                        }}
                      ></div>
                      {/* Body Fill */}
                      <div className="w-full h-full opacity-30" style={{ backgroundColor: m.color }}></div>
                    </div>

                    <div className="relative z-10 transition-colors duration-500">
                      <div className="text-[12px] font-[800] text-ink mb-[2px]">{m.label}</div>
                      <div className="text-[20px] font-[900] text-black leading-none tracking-[-0.5px] mb-[4px]">{m.value}{m.unit}</div>
                      <div className="text-[10.5px] font-[700] text-[#A1A1A5] transition-colors duration-500">of {m.target}{m.unit}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
