"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  Terminal as TerminalIcon,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TERMINAL_LINES = [
  { text: "Initializing portfolio.sh...", color: "text-white/40" },
  { text: "Status: Scanning architecture...", color: "text-white/40" },
  { text: "Detected: Next.js + TypeScript + Node.js", color: "text-[#C5FF52]" },
  { text: "Engine: Production Mode [STABLE]", color: "text-[#C5FF52]" },
  { text: "Experience: 2 years of Product Building", color: "text-[#C5FF52]" },
  { text: "Focus: Scalable SaaS & AI Integration", color: "text-white/90" },
  { text: "> Ready to build.", color: "text-white font-semibold" },
];

function TerminalWidget() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const intervals = TERMINAL_LINES.map((_, i) =>
      setTimeout(() => setVisible(i + 1), 600 + i * 450)
    );

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#121212] shadow-[0_28px_70px_-24px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/5 bg-[#1A1A1A] px-5 py-3.5">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <TerminalIcon className="h-3 w-3" /> priyanshu.sh
        </div>
      </div>

      <div className="min-h-[210px] space-y-2.5 p-5 font-mono text-[12px] leading-[1.75] sm:p-6 sm:text-[13px]">
        {TERMINAL_LINES.slice(0, visible).map((line, i) => (
          <m.p
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={line.color}
          >
            <span className="mr-3 text-[#C5FF52] opacity-30">$</span>
            {line.text}
          </m.p>
        ))}
        {visible < TERMINAL_LINES.length && (
          <m.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 inline-block h-[15px] w-2 align-middle bg-[#C5FF52]"
          />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#FCF9F5]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute inset-x-0 top-[72px] h-16 rotate-[-2deg] scale-x-110 border-y border-black/10 bg-[#C5FF52]" />
      <div className="absolute -left-10 top-[20%] hidden h-24 w-48 rotate-[-10deg] border-2 border-black bg-[#FF6B6B] shadow-[8px_8px_0_#121212] md:block" />
      <div className="absolute -right-8 bottom-[18%] hidden h-24 w-56 rotate-[8deg] border-2 border-black bg-[#5CE1E6] shadow-[-8px_8px_0_#121212] md:block" />

      <div className="container-premium relative z-10 flex min-h-[100svh] w-full items-center pb-5 pt-[82px] sm:pb-8 sm:pt-[86px]">
        <div className="grid w-full items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:gap-8">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex min-w-0 flex-col items-start"
          >
            <m.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#121212] shadow-[5px_5px_0_#121212] sm:mb-5 sm:px-4 sm:text-[11px] sm:tracking-[0.14em]"
            >
              <Sparkles className="h-4 w-4 text-[#FF6B6B]" />
              Full-stack dev energy
            </m.div>

            <m.h1
              variants={fadeUp}
              className="max-w-[980px] font-heading text-[clamp(2.75rem,10vw,8.5rem)] font-black uppercase leading-[0.82] tracking-normal text-[#121212]"
            >
              Builds
              <br />
              digital
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">products</span>
                <span className="absolute inset-x-0 bottom-[0.04em] z-0 h-[0.22em] bg-[#C5FF52]" />
              </span>
              <br />
              <span className="text-black/25">that ship.</span>
            </m.h1>

            <m.p
              variants={fadeUp}
              className="mt-4 max-w-[650px] text-[clamp(0.95rem,2vw,1.25rem)] font-medium leading-relaxed text-black/65 sm:mt-5"
            >
              Full-stack engineer converting complex problems into seamless
              digital experiences with clean architecture and production-grade
              code.
            </m.p>

            <m.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-4"
            >
              <Link
                href="#projects"
                className="btn-primary group !h-11 !rounded-[16px] !bg-[#121212] !px-5 !text-[13px] shadow-[6px_6px_0_#C5FF52] sm:!h-14 sm:!px-8 sm:!text-[15px]"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="btn-ghost !h-11 !rounded-[16px] !border-2 !border-black !bg-white !px-5 !text-[13px] shadow-[6px_6px_0_#121212] sm:!h-14 sm:!px-8 sm:!text-[15px]"
              >
                Contact Me
              </Link>
            </m.div>

            <m.div
              variants={fadeUp}
              className="mt-5 flex w-full max-w-[650px] flex-col gap-3 border-t-2 border-black/10 pt-4 sm:mt-7 sm:flex-row sm:items-center sm:gap-7 sm:pt-5"
            >
              <div className="flex flex-col gap-2.5">
                <span className="text-eyebrow font-black text-black/40">
                  Connect
                </span>
                <div className="flex gap-5">
                  <Link
                    href="https://github.com/Solanki028"
                    target="_blank"
                    className="-ml-2 rounded-lg p-2 text-black/60 transition-all duration-300 hover:bg-[#121212] hover:text-[#C5FF52]"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/priyanshu-solanki"
                    target="_blank"
                    className="rounded-lg p-2 text-black/60 transition-all duration-300 hover:bg-[#121212] hover:text-[#C5FF52]"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-black/10 sm:block" />

              <div className="flex flex-col gap-2.5">
                <span className="text-eyebrow font-black text-black/40">
                  Tech Stack
                </span>
                <span className="w-fit rounded-[14px] border-2 border-black bg-[#C5FF52] px-4 py-2 text-body-sm font-black text-[#121212] shadow-[4px_4px_0_#121212]">
                  Next.js / TypeScript / AI
                </span>
              </div>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1],
              delay: 0.2,
            }}
            className="hidden min-w-0 lg:block"
          >
            <div className="relative rotate-[2deg] border-2 border-black bg-[#FCF9F5] p-3 shadow-[10px_10px_0_#121212] transition-transform duration-500 ease-out hover:rotate-0">
              <TerminalWidget />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
