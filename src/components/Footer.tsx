import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0C0D15] py-8 px-10 text-center">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center gap-3.5">
        <div className="text-[18px] font-[900] text-white">Fitakka</div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="text-[12px] font-[700] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-[12px] font-[700] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors">Privacy</a>
          {/* <a href="#waitlist" className="text-[12px] font-[700] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors">Join beta</a> */}
          <a href="mailto:hello@fitakka.app" className="text-[12px] font-[700] text-[rgba(255,255,255,0.3)] hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-[11px] font-[700] text-[rgba(255,255,255,0.2)]">© 2026 Fitakka — Your dearly fitness habit builder.</p>
      </div>
    </footer>
  );
}
