import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ananya R.',
      role: 'Software engineer, beta user',
      text: "I've tried every fitness app out there. They all make me feel like I need a nutrition degree. Fitakka is the first one that actually works the way my brain does.",
      ava: '👩'
    },
    {
      name: 'Karthik M.',
      role: 'Product manager, beta user',
      text: "The nudges are what got me. Most apps either spam you or go completely quiet. Fitakka messages you once, says something useful, and stops. That's it.",
      ava: '👨'
    },
    {
      name: 'Sneha P.',
      role: 'Marketing lead, beta user',
      text: "I was 11 days into my streak and missed a day. I expected to feel terrible. The streak just disappeared — no notification, no guilt trip. I was back the next day.",
      ava: '👩'
    }
  ];

  return (
    <section className="bg-[radial-gradient(ellipse_50%_55%_at_95%_15%,rgba(172,209,253,0.14)_0%,transparent_50%),radial-gradient(ellipse_50%_50%_at_5%_85%,rgba(149,140,232,0.12)_0%,transparent_50%),#fff] py-[100px] px-10">
      <div className="max-w-[1120px] mx-auto">
        <span className="text-[11px] font-[800] tracking-[0.14em] uppercase text-purple mb-3.5 block">Early users</span>
        <h2 className="text-[clamp(30px,3.8vw,50px)] font-[900] text-ink leading-[1.06] tracking-[-1.5px]">What people are saying.</h2>
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-border border border-border rounded-[20px] overflow-hidden mt-[56px]">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-[36px_32px]">
                <div className="text-[12px] tracking-[2px] text-purple mb-4">★★★★★</div>
                <p className="text-[15px] text-ink-50 font-[600] leading-[1.75] mb-[22px] italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-[10px]">
                  <div className="w-9 h-9 rounded-full bg-purple-12 flex items-center justify-center text-[16px]">{t.ava}</div>
                  <div>
                    <div className="text-[13px] font-[800] text-ink">{t.name}</div>
                    <div className="text-[11px] text-[rgba(33,34,45,0.35)] font-[700]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
