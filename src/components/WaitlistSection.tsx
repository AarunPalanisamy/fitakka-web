'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tags = [
  "Macro Tracking", "AI Food Parsing", "Streak System",
  "Voice Logging", "Activity Planner", "Push Reminders"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
};

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] opacity-40 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-3xl w-full">
        <motion.h2 
          className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          We&apos;re almost ready.
        </motion.h2>
        
        <motion.p 
          className="text-brand-silver text-lg md:text-xl font-normal mb-12 max-w-[560px] mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          FitAkka is under active development. Be the first to experience 
          the seamless layer between you and your health goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto p-1.5 premium-card border-white/10 rounded-full shadow-2xl">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none premium-input rounded-full font-medium"
              />
              <button 
                type="submit"
                className="bg-white hover:bg-gray-200 transition-colors duration-300 rounded-full px-8 py-3 text-black font-semibold whitespace-nowrap shadow-[inset_0_1px_0_rgba(255,255,255,1)]"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] backdrop-blur-md rounded-full px-8 py-4 inline-flex items-center gap-2 font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"></span>
              You&apos;re on the list.
            </div>
          )}
        </motion.div>

        {/* Floating tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {tags.map((tag) => (
            <motion.div 
              key={tag} 
              variants={tagVariants}
              className="px-4 py-2 text-xs md:text-sm text-gray-400 font-medium flex items-center gap-2"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="8" height="8" rx="2" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5"/>
                <circle cx="5" cy="5" r="1.5" fill="currentColor" fillOpacity="0.5"/>
              </svg>
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
