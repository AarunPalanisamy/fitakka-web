import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-5 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-4xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
        <div className="flex items-center gap-2 pl-2 select-none cursor-pointer">
          <span className="text-brand-purple text-lg leading-none">◆</span>
          <span className="text-white font-semibold text-lg tracking-tight">FitAkka</span>
        </div>
        
        <button className="bg-white hover:bg-gray-200 transition-colors duration-300 text-black font-semibold py-2 px-6 rounded-full text-sm">
          Join Waitlist
        </button>
      </nav>
    </div>
  );
}
