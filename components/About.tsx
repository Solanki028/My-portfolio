"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
              The Perspective
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
              Builder mindset. <br />
              Product approach.
            </motion.h2>
            
            <div className="space-y-6 text-lg text-[#737373] leading-relaxed max-w-2xl">
              <motion.p variants={fadeUp}>
                I don’t just write code; I build solutions that drive products forward. 
                With a background in full-stack engineering and a deep focus on the 
                <span className="text-white font-semibold"> Next.js & AI ecosystem</span>, I help startups and companies bridge the gap between complex requirements and high-performance applications.
              </motion.p>
              <motion.p variants={fadeUp}>
                My philosophy is simple: <span className="text-white">Shipping is a feature.</span> I prioritize clean architecture, exceptional UX, and measurable impact over everything else. Whether it&apos;s architecting a SaaS dashboard or integrating LLMs into existing workflows, I build for scale and speed.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 pt-12 lg:pt-20"
          >
            <div className="p-8 rounded-2xl border border-[#1A1A1A] bg-[#0E0E0E] space-y-8">
               {[
                 { label: "Core Focus", val: "Product-Led Engineering" },
                 { label: "Expertise", val: "Full Stack AI & SaaS" },
                 { label: "Velocity", val: "20+ Initial Products Shipped" }
               ].map(stat => (
                 <div key={stat.label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D] mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-white tracking-tight">{stat.val}</p>
                 </div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
