import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 md:py-12 px-6 md:px-12 text-xs text-gray-500 font-medium flex flex-col sm:flex-row items-center justify-between gap-6 z-10 relative bg-black/50 backdrop-blur-md mt-16">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2 select-none">
          <span className="text-white/80 font-semibold tracking-tight">FitAkka</span>
        </div>
        <span className="hidden sm:block text-white/10">|</span>
        <span>&copy; 2025 Accelerate. All rights reserved.</span>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </footer>
  );
}
