import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-white/96 backdrop-blur-[24px] border-b border-border">
      <div className="max-w-[1120px] mx-auto px-10 flex items-center justify-between h-[62px]">
        <a href="#" className="flex items-center gap-[9px] text-[21px] font-[900] text-ink decoration-none tracking-[-0.5px]">
          <div className="w-8 h-8 bg-ink rounded-[8px] flex items-center justify-center text-[16px]">🐻</div>
          FitAkka
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#demo" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">Try it live</a>
          <a href="#how" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">How it works</a>
          <a href="#waitlist" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">Get early access</a>
        </div>
        <a href="#waitlist" className="bg-ink text-white px-5 py-[9px] rounded-[50px] font-nunito font-[800] text-[13px] hover:opacity-80 transition-opacity">
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
