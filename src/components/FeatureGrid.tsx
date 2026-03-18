'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Flame, Activity, Mic } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function FeatureGrid() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Everything your body needs to know.
        </motion.h2>
        <motion.p 
          className="text-brand-silver text-lg font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Built around your goals. Powered by AI.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Card 1 — Spans 2 cols */}
        <motion.div 
          variants={cardVariants}
          className="md:col-span-2 premium-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex-1 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <Zap className="text-brand-purple w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">AI-Calculated Macros</h3>
            <p className="text-brand-silver leading-relaxed font-normal">
              Tell FitAkka what you ate. It parses the food, calculates protein, carbs, fat and fiber — and updates your daily targets instantly.
            </p>
          </div>
          <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 relative flex justify-center items-center self-center md:self-auto py-4 z-10">
            <div className="w-full h-full macro-ring absolute inset-0"></div>
            <div className="w-[75%] h-[75%] bg-[#0A0A0C] rounded-full absolute z-10 flex items-center justify-center shadow-inner border border-white/5">
              <span className="text-xl font-bold tracking-tight text-white px-2 text-center">
                42g
                <small className="block text-[10px] text-brand-silver font-semibold mt-1 uppercase tracking-widest">Protein</small>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          variants={cardVariants}
          className="premium-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <Flame className="text-brand-blue w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white mb-3 leading-tight">Intake vs Burn</h3>
            <p className="text-brand-silver leading-relaxed text-sm font-normal">
              See your intake and burn as live fill bars. No spreadsheets. No mental math.
            </p>
          </div>
          
          <div className="mt-8 flex gap-4 h-24 items-end justify-start opacity-70 group-hover:opacity-100 transition-opacity relative z-10">
            <motion.div 
              className="w-10 bg-gradient-to-t from-brand-purple to-[#A78BFA] rounded-t-lg relative shadow-[0_0_15px_rgba(139,92,246,0.5)] border-t border-white/20"
              initial={{ height: 0 }}
              whileInView={{ height: "80%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="absolute -top-7 w-full text-center text-[10px] font-bold text-[#A78BFA] hidden group-hover:block transition-all tracking-widest">IN</div>
            </motion.div>
            <motion.div 
              className="w-10 bg-gradient-to-t from-brand-blue to-[#60A5FA] rounded-t-lg relative shadow-[0_0_15px_rgba(59,130,246,0.5)] border-t border-white/20"
              initial={{ height: 0 }}
              whileInView={{ height: "55%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              <div className="absolute -top-7 w-full text-center text-[10px] font-bold text-[#60A5FA] hidden group-hover:block transition-all tracking-widest">OUT</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          variants={cardVariants}
          className="premium-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <Activity className="text-brand-purple w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white mb-3">Your weekly plan, built for you</h3>
            <p className="text-brand-silver leading-relaxed text-sm font-normal">
              Based on your goal and lifestyle, FitAkka designs a weekly activity plan. Lose weight. Build muscle. Just maintain. You pick it.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - Spans 2 cols */}
        <motion.div 
          variants={cardVariants}
          className="md:col-span-2 premium-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <Mic className="text-brand-blue w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Log by voice or text</h3>
            <p className="text-brand-silver leading-relaxed font-normal">
              Say &ldquo;I had rice and dal for lunch.&rdquo; FitAkka handles the rest. No dropdowns. No gram-counting.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
