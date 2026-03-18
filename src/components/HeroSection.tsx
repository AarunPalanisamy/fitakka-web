'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';

const Hero3DOrb = dynamic(() => import('./Hero3DOrb'), { ssr: false });

export default function HeroSection() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Background glow attached to cursor */}
      <motion.div 
        className="fixed pointer-events-none mix-blend-screen z-50 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
          left: mouseX,
          top: mouseY,
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(139,92,246,0.3) 0%, transparent 80%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Waitlist Badge */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" as const }}
           className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/80 font-medium tracking-wide flex items-center gap-2 mb-8 backdrop-blur-md shadow-lg shadow-black/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_#8B5CF6]"></span>
          FitAkka Waitlist App is coming soon
        </motion.div>

        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="mb-8"
        >
          <Hero3DOrb />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
        >
          Your health,<br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-zinc-600">finally intelligent.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-lg md:text-xl text-brand-silver max-w-[500px] mx-auto mb-10 leading-relaxed font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
        >
          FitAkka calculates your macros, tracks your calories,
          and builds your activity plan — all in under 3 taps.
        </motion.p>

        {/* CTA row */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
        >
          <button className="w-full sm:w-auto bg-white hover:bg-gray-200 transition-colors duration-300 text-black font-semibold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Join the Waitlist &rarr;
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white/10 hover:bg-white/5 transition-all text-white/80 hover:text-white font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2">
            Watch how it works <span className="text-xs">&marker;</span>
          </button>
        </motion.div>

        {/* Stat row */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-semibold text-brand-silver tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
        >
          <span>AI Macros</span>
          <span className="text-white/10">&bull;</span>
          <span>Zero Guesswork</span>
          <span className="text-white/10">&bull;</span>
          <span>1-Tap Logging</span>
        </motion.div>
      </div>
    </section>
  );
}
