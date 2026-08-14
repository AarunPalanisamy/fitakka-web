import React from 'react';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-white/96 backdrop-blur-[24px] border-b border-border">
      <div className="max-w-[1120px] mx-auto px-10 flex items-center justify-between h-[62px]">
        <a href="#" className="flex items-center gap-[9px] text-[21px] font-[900] text-ink decoration-none tracking-[-0.5px]">
          <div className="rounded-full overflow-hidden flex items-center justify-center">
            <Image src="/logo.png" alt="Fitakka" width={42} height={42} className="object-contain" />
          </div>
          Fitakka
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#demo" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">Try it live</a>
          <a href="#how" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">How it works</a>
          <a href="#download" className="text-[13px] font-[700] text-ink-50 hover:text-ink transition-colors">Download</a>
        </div>
        <a 
          href="https://apps.apple.com/pk/app/fitakka/id6767862812" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-white px-5 py-[9px] rounded-[50px] font-nunito font-[800] text-[13px] transition-all hover:-translate-y-0.5 active:translate-y-0 glow-btn"
        >
          Download iOS
        </a>
      </div>
    </nav>
  );
}
