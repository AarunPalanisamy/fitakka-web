'use client';

import React, { useState, useRef, useEffect } from 'react';

const CHIPS = [
  "Oatmeal with banana",
  "2 eggs and toast",
  "Grilled chicken salad",
  "30 min jog",
  "Walked 5km",
  "45 min gym session",
  "2 slices of pizza",
  "Bowl of pasta with chicken"
];

const TARGETS = { kcal: 2000, prot: 150, carb: 240, fat: 65, fib: 30 };

interface MessageData {
  message: string;
  type: string;
  kcal: number;
  prot: number;
  carb: number;
  fat: number;
  fib: number;
  burned: boolean;
}

interface Message {
  role: 'bot' | 'u';
  content: string;
  data?: MessageData;
}

export default function DemoSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Describe any meal or activity the way you'd say it out loud. I'll calculate the nutrition instantly. Try a chip below or type your own." }
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [stats, setStats] = useState({ kcal: 0, prot: 0, carb: 0, fat: 0, fib: 0 });
  const [lit, setLit] = useState<string | null>(null);
  
  const msgsEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    msgsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [messages, busy]);

  const updateStats = (delta: Partial<typeof stats>) => {
    setStats(prev => ({
      kcal: Math.max(0, prev.kcal + (delta.kcal || 0)),
      prot: Math.max(0, prev.prot + (delta.prot || 0)),
      carb: Math.max(0, prev.carb + (delta.carb || 0)),
      fat: Math.max(0, prev.fat + (delta.fat || 0)),
      fib: Math.max(0, prev.fib + (delta.fib || 0)),
    }));
    setLit('all');
    setTimeout(() => setLit(null), 900);
  };

  const sendMsg = async (text: string) => {
    if (!text.trim() || busy) return;
    
    const userMsg: Message = { role: 'u', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    
    setBusy(true);

    // Mock AI response logic
    setTimeout(() => {
      const isActivity = text.toLowerCase().includes('min') || text.toLowerCase().includes('km') || text.toLowerCase().includes('jog') || text.toLowerCase().includes('session');
      
      let mockData: MessageData;
      if (isActivity) {
        const kcal = Math.floor(Math.random() * 300) + 100;
        mockData = {
          message: `Got it! That activity burned about ${kcal} calories. I've updated your daily burn.`,
          type: 'Activity',
          kcal: kcal, prot: 0, carb: 0, fat: 0, fib: 0,
          burned: true
        };
      } else {
        const kcal = Math.floor(Math.random() * 500) + 200;
        const prot = Math.floor(Math.random() * 30) + 10;
        const carb = Math.floor(Math.random() * 40) + 20;
        const fat = Math.floor(Math.random() * 20) + 5;
        const fib = Math.floor(Math.random() * 10) + 2;
        mockData = {
          message: `That sounds delicious! I've logged it as approximately ${kcal} calories with ${prot}g of protein.`,
          type: 'Meal',
          kcal, prot, carb, fat, fib,
          burned: false
        };
      }

      const botMsg: Message = { 
        role: 'bot', 
        content: mockData.message,
        data: mockData
      };
      
      setMessages(prev => [...prev, botMsg]);
      updateStats({
        kcal: mockData.burned ? -mockData.kcal : mockData.kcal,
        prot: mockData.prot,
        carb: mockData.carb,
        fat: mockData.fat,
        fib: mockData.fib
      });
      setBusy(false);
    }, 1500);
  };

  return (
    <section className="bg-[radial-gradient(ellipse_55%_50%_at_5%_20%,rgba(149,140,232,0.13)_0%,transparent_50%),radial-gradient(ellipse_45%_45%_at_95%_80%,rgba(172,209,253,0.12)_0%,transparent_50%),#fff] py-[100px] px-10" id="demo">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[580px]">
          <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-3.5 block">Try it now — live demo</span>
          <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-ink leading-[1.06] tracking-[-1.5px]">See it work<br />in real time.</h2>
          <p className="text-[16px] text-ink-50 font-[600] leading-[1.75] mt-3.5">Type any meal or activity the way you&apos;d say it out loud. Fitakka calculates the nutrition instantly.</p>
        </div>

        <div className="max-w-[840px] mx-auto mt-[52px] bg-ink rounded-[28px] overflow-hidden shadow-[0_40px_90px_rgba(33,34,45,0.16),0_8px_20px_rgba(33,34,45,0.08)]">
          <div className="flex items-center justify-between p-[16px_22px] border-b border-[rgba(255,255,255,0.07)]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[34px] h-[34px] rounded-full bg-purple flex items-center justify-center text-[16px]">🐻</div>
              <div>
                <div className="text-[14px] font-[800] text-white">Fitakka</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.3)] font-[700]">Your fitness accountability partner</div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[7px] h-[7px] bg-[#22C55E] rounded-full animate-blink"></div>
              <span className="text-[11px] font-[700] text-[rgba(255,255,255,0.3)]">AI active</span>
            </div>
          </div>

          <div className="flex border-b border-[rgba(255,255,255,0.06)] overflow-x-auto lg:overflow-x-visible">
            {[
              { id: 'kcal', label: 'Calories', color: 'var(--purple)', suffix: '' },
              { id: 'prot', label: 'Protein', color: '#86EFAC', suffix: 'g' },
              { id: 'carb', label: 'Carbs', color: 'var(--blue)', suffix: 'g' },
              { id: 'fat', label: 'Fat', color: '#FCA5A5', suffix: 'g' },
              { id: 'fib', label: 'Fibre', color: 'var(--border)', suffix: 'g' },
            ].map(item => (
              <div key={item.id} className="flex-1 min-w-[80px] p-[12px_8px] text-center border-r border-[rgba(255,255,255,0.05)] last:border-r-0">
                <div className={`text-[16px] font-[900] text-white transition-colors duration-400 ${lit ? 'text-blue' : ''}`}>
                  {Math.round(stats[item.id as keyof typeof stats])}{item.suffix}
                </div>
                <div className="text-[9px] font-[800] text-[rgba(255,255,255,0.28)] uppercase tracking-[0.07em] mt-0.5">{item.label}</div>
                <div className="h-[3px] bg-[rgba(255,255,255,0.07)] rounded-[99px] mt-[6px] overflow-hidden">
                  <div 
                    className="h-full rounded-[99px] transition-[width] duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                    style={{ 
                      width: `${Math.min(100, (stats[item.id as keyof typeof stats] / TARGETS[item.id as keyof typeof TARGETS]) * 100)}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[280px] overflow-y-auto p-[18px] flex flex-col gap-[11px] scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 items-end animate-msgIn ${msg.role === 'u' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-[26px] h-[26px] rounded-full shrink-0 flex items-center justify-center text-[12px] ${msg.role === 'bot' ? 'bg-purple' : 'bg-[rgba(255,255,255,0.1)] text-[10px] text-[rgba(255,255,255,0.4)] font-[800]'}`}>
                  {msg.role === 'bot' ? '🐻' : 'You'}
                </div>
                <div className={`max-w-[70%] p-[10px_13px] text-[13px] font-[600] leading-[1.5] ${msg.role === 'u' ? 'bg-purple text-white rounded-[15px_15px_3px_15px]' : 'bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.8)] rounded-[15px_15px_15px_3px]'}`}>
                  {msg.content}
                  {msg.data && (
                    <div className="grid grid-cols-3 gap-[7px] mt-2 bg-[rgba(149,140,232,0.1)] border border-[rgba(149,140,232,0.22)] rounded-[11px] p-[11px]">
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.kcal} kcal</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.prot}g</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.carb}g</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.fat}g</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Fat</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.fib}g</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Fibre</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-[900] text-white">{msg.data.type}</div>
                        <div className="text-[8px] font-[800] text-[rgba(255,255,255,0.35)] uppercase tracking-[0.04em]">Type</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-2 p-[0_18px_6px]">
                <div className="w-[26px] h-[26px] rounded-full bg-purple flex items-center justify-center text-[12px] shrink-0">🐻</div>
                <div className="flex gap-[3px]">
                  <span className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.22)] rounded-full animate-td"></span>
                  <span className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.22)] rounded-full animate-td [animation-delay:0.2s]"></span>
                  <span className="w-[5px] h-[5px] bg-[rgba(255,255,255,0.22)] rounded-full animate-td [animation-delay:0.4s]"></span>
                </div>
                <span className="text-[11px] text-[rgba(255,255,255,0.28)] font-[700]">Calculating...</span>
              </div>
            )}
            <div ref={msgsEndRef} />
          </div>

          <div className="p-[9px_16px_0] flex gap-[6px] flex-wrap border-t border-[rgba(255,255,255,0.05)]">
            {CHIPS.map(chip => (
              <button 
                key={chip} 
                onClick={() => sendMsg(chip)}
                disabled={busy}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-[50px] px-[11px] py-[5px] font-nunito text-[11px] font-[700] text-[rgba(255,255,255,0.45)] hover:bg-[rgba(149,140,232,0.18)] hover:text-[rgba(255,255,255,0.9)] hover:border-[rgba(149,140,232,0.4)] transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="flex gap-[9px] p-[12px_16px] border-t border-[rgba(255,255,255,0.06)]">
            <textarea 
              ref={textareaRef}
              className="flex-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.09)] rounded-[16px] p-[10px_14px] resize-none font-nunito text-[13px] font-[600] text-white outline-none min-h-[42px] max-h-[90px] focus:border-purple transition-colors leading-[1.4]" 
              placeholder="e.g. had grilled salmon with rice and vegetables for dinner…" 
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMsg(input);
                }
              }}
            />
            <button 
              className="w-[42px] h-[42px] rounded-full bg-purple border-none cursor-pointer text-[15px] text-white hover:opacity-[0.85] transition-opacity shrink-0 flex items-center justify-center disabled:bg-[rgba(255,255,255,0.1)] disabled:cursor-not-allowed"
              disabled={busy || !input.trim()}
              onClick={() => sendMsg(input)}
            >
              ➤
            </button>
          </div>
        </div>
        <p className="max-w-[840px] mx-auto mt-3 text-center text-[11px] font-[700] text-[rgba(33,34,45,0.35)]">Powered by Claude AI · Numbers are estimates for demo purposes. The full app uses a calibrated nutrition model.</p>
      </div>
    </section>
  );
}
