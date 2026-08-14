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
    <section className="bg-ink py-[120px] px-10 relative overflow-hidden" id="download">
      {/* Background glowing blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#958CE8] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#ACD1FD] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[620px] mx-auto text-center relative z-10">
        <span className="text-[56px] block mb-6">🚀</span>
        <h2 className="text-[clamp(36px,5vw,58px)] font-[900] text-white leading-[1.04] tracking-[-2px] mb-4">
          Start building your<br /><span className="serif-i text-blue">fitness habits</span><br />today.
        </h2>
        <p className="text-[16px] text-[rgba(255,255,255,0.45)] font-[600] leading-[1.75] mb-[44px]">
          Fitakka is now live on iOS! Describe what you eat, track your activity, and stay consistent with habit science. Android is coming soon.
        </p>

        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 backdrop-blur-sm">
          {/* iOS Section */}
          <div className="mb-8">
            <h3 className="text-[14px] font-[800] text-white/50 uppercase tracking-[0.12em] mb-4">iOS App Store</h3>
            <a 
              href="https://apps.apple.com/pk/app/fitakka/id6767862812" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[12px] bg-white text-ink px-[28px] py-[15px] rounded-[16px] font-[800] text-[16px] transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.22)]"
            >
              <svg viewBox="0 0 384 512" width="22" height="22" fill="currentColor" className="text-ink"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-93.1 22.7-18.9 0-46.2-21-76-21-46.2 0-89.8 29.5-115 72.8-51.4 86.8-11.4 213.7 38.3 286.3 23.3 34.3 52.8 72 89.2 70.8 35.1-1.2 48.7-22.7 91.2-22.7 42.4 0 54.8 22.7 92.1 21.5 38.6-1.2 63.8-35.5 86.2-68.5 26.6-39.2 37.6-77.2 38.8-79.3-1.1-.3-72.3-27.7-72.6-113.2zM228.6 83.6c20.3-24.8 34-59.5 30.2-93.6-28.7 1.3-64.6 20-85.7 45.4-18.1 21.8-34.1 57.3-29.3 90.6 32.1 2.6 65.5-18.2 84.8-42.4z"/></svg>
              <span>Download on the App Store</span>
            </a>
          </div>

          <div className="flex items-center text-[10px] font-[800] text-[rgba(255,255,255,0.15)] uppercase tracking-[0.15em] my-[30px] before:content-[''] before:flex-1 before:h-[1px] before:bg-[rgba(255,255,255,0.06)] before:mr-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[rgba(255,255,255,0.06)] after:ml-4">
            OR
          </div>

          {/* Android Section */}
          <div className="text-center">
            {!success ? (
              <form onSubmit={joinWL} className="max-w-[480px] mx-auto">
                <h3 className="text-[14px] font-[800] text-white/50 uppercase tracking-[0.12em] mb-2">Android Version</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)] font-[600] mb-5">Google Play release is coming soon. Enter your details to get notified on launch day.</p>
                <div className="flex gap-[10px] flex-wrap mb-[10px]">
                  <input 
                    className="flex-1 min-w-[160px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.09)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                    type="text" 
                    placeholder="Your name" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input 
                    className="flex-1 min-w-[160px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.09)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                    type="text" 
                    placeholder="Your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <input 
                  className="w-full mb-[12px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.09)] rounded-[12px] p-[14px_16px] font-nunito text-[14px] font-[600] text-white outline-none focus:border-purple transition-colors" 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="w-full p-4 rounded-[12px] border-none cursor-pointer bg-purple text-white font-nunito font-[900] text-[15px] hover:opacity-[0.87] hover:translate-y-[-1px] transition-all mt-1 tracking-[-0.2px] glow-btn">
                  Notify Me for Android
                </button>
              </form>
            ) : (
              <div className="text-center p-6 animate-popUp">
                <div className="text-[48px] mb-3">🎉</div>
                <h3 className="text-[22px] font-[900] text-blue mb-2">You&apos;re on the list!</h3>
                <p className="text-[14px] text-[rgba(255,255,255,0.5)] font-[600]">We will notify you immediately once the Android version launches.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
