'use client';

import React, { useState } from 'react';

export default function WaitlistSection() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const joinWL = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !email.includes('@')) {
      alert('Please enter your name and a valid email.');
      return;
    }
    setSuccess(true);
  };

  return (
    <section className="bg-ink py-[120px] px-10 relative overflow-hidden" id="waitlist">
      <div className="max-w-[580px] mx-auto text-center relative z-10">
        <span className="text-[56px] block mb-6">🐻</span>
        <h2 className="text-[clamp(36px,5vw,58px)] font-[900] text-white leading-[1.04] tracking-[-2px] mb-4">
          Your dearly<br /><span className="serif-i text-blue">habit builder</span><br />is ready.
        </h2>
        <p className="text-[16px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.75] mb-[44px]">
          Beta is live. Join now to get early access and lock in the launch price before it goes public.
        </p>

        <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)] rounded-[22px] p-8">
          {!success ? (
            <form onSubmit={joinWL}>
              <div className="flex gap-[10px] flex-wrap mb-[10px]">
                <input 
                  className="flex-1 min-w-[160px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                  type="text" 
                  placeholder="Your name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input 
                  className="flex-1 min-w-[160px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                  type="text" 
                  placeholder="Your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <input 
                className="w-full mb-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                type="email" 
                placeholder="Your email address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full p-4 rounded-[12px] border-none cursor-pointer bg-purple text-white font-nunito font-[900] text-[15px] hover:opacity-[0.87] hover:translate-y-[-1px] transition-all mt-1 tracking-[-0.2px]">
                Join the Fitakka waitlist
              </button>
              <p className="text-[11px] text-[rgba(255,255,255,0.28)] font-[700] mt-3">No spam. No payment details. Just your spot in the queue.</p>
            </form>
          ) : (
            <div className="text-center p-6 animate-popUp">
              <div className="text-[48px] mb-3">🎉</div>
              <h3 className="text-[24px] font-[900] text-blue mb-2">You&apos;re on the list.</h3>
              <p className="text-[14px] text-[rgba(255,255,255,0.5)] font-[600]">We&apos;ll reach out when your spot opens.<br />Refer a friend — referrals move you up the queue.</p>
            </div>
          )}

          <div className="flex items-center gap-3 text-[10px] font-[800] text-[rgba(255,255,255,0.2)] uppercase tracking-[0.1em] my-[26px] before:content-[''] before:flex-1 before:h-[1px] before:bg-[rgba(255,255,255,0.07)] after:content-[''] after:flex-1 after:h-[1px] after:bg-[rgba(255,255,255,0.07)]">
            Already have access? Download the app
          </div>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="#" className="inline-flex items-center gap-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[13px] p-[12px_20px] text-white font-nunito font-[800] text-[13px] decoration-none hover:bg-[rgba(255,255,255,0.1)] hover:border-purple transition-all" onClick={(e) => { e.preventDefault(); alert('Coming soon'); }}>
              <span className="text-[20px]">🍎</span>
              <span className="flex flex-col text-left">
                <span className="text-[9px] text-[rgba(255,255,255,0.3)] font-[700] uppercase tracking-[0.05em]">Download on the</span>
                App Store
              </span>
            </a>
            <a href="#" className="inline-flex items-center gap-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[13px] p-[12px_20px] text-white font-nunito font-[800] text-[13px] decoration-none hover:bg-[rgba(255,255,255,0.1)] hover:border-purple transition-all" onClick={(e) => { e.preventDefault(); alert('Coming soon'); }}>
              <span className="text-[20px]">▶️</span>
              <span className="flex flex-col text-left">
                <span className="text-[9px] text-[rgba(255,255,255,0.3)] font-[700] uppercase tracking-[0.05em]">Get it on</span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
