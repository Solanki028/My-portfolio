"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp } from "@/lib/animations";

const stats = [
  { label: "Core Focus", value: "Product-Led Engineering" },
  { label: "Expertise", value: "Full Stack AI & SaaS" },
  { label: "Velocity", value: "35+ Products Shipped" },
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-[#FCF9F5] relative">
      <div className="section-divider" />

      <div className="container-premium pt-10">
        
        {/* Centered Header & Stats Tagline */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24"
        >
          <m.span variants={fadeUp} className="label-eyebrow mb-6">
            The Perspective
          </m.span>
          <m.h2
            variants={fadeUp}
            className="font-heading text-display-sm font-bold text-[#000000] mb-16"
          >
            Builder mindset. <span className="text-black/40">Product approach.</span>
          </m.h2>

          {/* The Stats as a Dark Tagline Row */}
          <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 border border-white/10 py-10 bg-[#121212] rounded-3xl shadow-2xl relative overflow-hidden group">
            {/* Subtle glow inside the banner */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-[#C5FF52]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#C5FF52]/10 transition-colors duration-700" />
            
            {stats.map((stat) => (
              <m.div variants={fadeUp} key={stat.label} className="flex flex-col items-center relative z-10">
                <p className="text-eyebrow font-semibold text-white/50 uppercase mb-2">
                  {stat.label}
                </p>
                <p className="font-heading text-xl md:text-2xl font-medium text-white tracking-tight">
                  {stat.value}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Two Columns: Narrative & Image */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column — Narrative */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-7 text-body-lg text-black/60 leading-[1.8] max-w-2xl">
              <m.p variants={fadeUp}>
                I don&apos;t just write code — I build solutions that drive products forward.
                With a background in full-stack engineering and a deep focus on the
                <span className="text-[#000000] font-medium"> Next.js & AI ecosystem</span>,
                I help startups and companies bridge the gap between complex requirements
                and high-performance applications.
              </m.p>
              <m.p variants={fadeUp}>
                My philosophy is simple:{" "}
                <span className="text-[#000000] font-medium">Shipping is a feature.</span>{" "}
                I prioritize clean architecture, exceptional UX, and measurable impact
                over everything else. Whether it&apos;s architecting a SaaS dashboard or
                integrating LLMs into existing workflows, I build for scale and speed.
              </m.p>
            </div>
          </m.div>

          {/* Right Column — Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Ambient Lime Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C5FF52]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] border border-black/10 bg-white shadow-2xl overflow-hidden group z-10">
              <Image
                src="/images/mini%20me.png"
                alt="Priyanshu"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
