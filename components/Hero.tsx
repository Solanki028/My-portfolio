"use client";

import { m, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FCF9F5] px-6 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#C5FF52]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#7C5CFF]/5 rounded-full blur-[120px]" />
      </div>

      <m.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <m.div variants={fadeUp} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5FF52] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C5FF52]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
              Available for New Projects
            </span>
          </div>
        </m.div>

        <m.h1 variants={fadeUp} className="mb-8 text-display-xl font-bold tracking-tight text-black">
          Crafting <span className="font-serif italic font-normal">exceptional</span> digital 
          <br className="hidden md:block" /> experiences with purpose.
        </m.h1>

        <m.p variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-body-lg text-black/60">
          Full-stack product engineer specializing in high-performance web applications, 
          AI-driven workflows, and elegant user interfaces.
        </m.p>

        <m.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-black px-8 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 active:scale-95"
          >
            <span>View my work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="flex h-14 items-center gap-3 rounded-full border border-black/10 bg-transparent px-8 text-sm font-semibold text-black transition-all hover:bg-black/5 hover:border-black/20 active:scale-95"
          >
            <Mail className="h-4 w-4" />
            <span>Get in touch</span>
          </Link>
        </m.div>

        <m.div variants={fadeUp} className="mt-16 flex items-center justify-center gap-8">
          <div className="flex -space-x-3">
             {/* Tech Stack Icons Placeholder or dynamic */}
             {["React", "Next.js", "Tailwind"].map((tech) => (
                <div key={tech} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FCF9F5] bg-white text-[10px] font-bold shadow-sm">
                  {tech[0]}
                </div>
             ))}
          </div>
          <div className="h-px w-12 bg-black/10" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/Solanki028" target="_blank" className="text-black/40 transition-colors hover:text-black">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/priyanshu-solanki" target="_blank" className="text-black/40 transition-colors hover:text-black">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </m.div>
      </m.div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">Scroll to explore</span>
          <div className="h-12 w-px bg-gradient-to-b from-black/20 to-transparent" />
        </div>
      </m.div>
    </section>
  );
}
