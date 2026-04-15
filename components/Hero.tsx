"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal as TerminalIcon } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const TERMINAL_LINES = [
  { text: "Initializing portfolio.sh...", color: "text-[#4D4D4D]" },
  { text: "Status: Scanning architecture...", color: "text-[#4D4D4D]" },
  { text: "Detected: Next.js + TypeScript + Node.js", color: "text-[#22C55E]" },
  { text: "Engine: Production Mode [STABLE]", color: "text-[#22C55E]" },
  { text: "Experience: 1.5+ Years in Product Engineering", color: "text-[#22C55E]" },
  { text: "Focus: Scalable SaaS & AI Integration", color: "text-white" },
  { text: "> Ready to build.", color: "text-white font-bold" },
];

function TerminalWidget() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const intervals = TERMINAL_LINES.map((_, i) => {
      return setTimeout(() => setVisible(i + 1), 600 + i * 450);
    });
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-[440px] rounded-xl border border-[#1A1A1A] bg-[#0E0E0E] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A] bg-[#111]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#4D4D4D] font-mono uppercase tracking-widest">
          <TerminalIcon className="w-3 h-3" /> priyanshu.sh
        </div>
      </div>
      <div className="p-6 font-mono text-[13px] leading-relaxed space-y-2 min-h-[220px]">
        {TERMINAL_LINES.slice(0, visible).map((line, i) => (
          <m.p
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={line.color}
          >
            <span className="opacity-30 mr-2">$</span>
            {line.text}
          </m.p>
        ))}
        {visible < TERMINAL_LINES.length && (
          <m.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-[15px] bg-white align-middle ml-1" 
          />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#0B0B0B]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <m.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col"
          >
            <m.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-8 px-3 py-1 rounded-full border border-[#1A1A1A] bg-[#111] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#737373]">Available for select projects</span>
            </m.div>

            <m.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-white mb-8"
            >
              I engineer <br />
              <span className="text-white">scalable SaaS</span> <br />
              products.
            </m.h1>

            <m.p variants={fadeUp} className="text-[#737373] text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              Full-stack engineer building production-grade web applications. 
              Converting complex problems into seamless digital experiences with clean architecture.
            </m.p>

            <m.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 h-12 px-8 bg-white text-black text-[14px] font-bold rounded-lg hover:bg-[#E5E5E5] transition-all group shadow-xl"
              >
                View Work 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center h-12 px-8 border border-[#1A1A1A] bg-transparent text-white text-[14px] font-bold rounded-lg hover:bg-[#111] transition-all"
              >
                Let&apos;s Talk
              </Link>
            </m.div>

            <m.div variants={fadeUp} className="flex items-center gap-8 pt-8 border-t border-[#1A1A1A]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4D4D4D] font-bold">Connect</span>
                <div className="flex gap-4">
                  <Link href="https://github.com/Solanki028" target="_blank" className="text-[#737373] hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/priyanshu-solanki" target="_blank" className="text-[#737373] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="w-px h-10 bg-[#1A1A1A]" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4D4D4D] font-bold">Tech Stack</span>
                <span className="text-[13px] text-[#A3A3A3] font-medium">Next.js · TypeScript · AI</span>
              </div>
            </m.div>
          </m.div>

          {/* Right: Premium Visualization */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex justify-end relative"
          >
             <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
             <TerminalWidget />
          </m.div>

        </div>
      </div>
    </section>
  );
}
