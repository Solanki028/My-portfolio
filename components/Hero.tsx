"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Sparkles,
  ChevronRight,
  Play,
  Mail,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TYPING_WORDS = ["innovative.", "scalable.", "AI-powered.", "beautiful."];

function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute size-[500px] rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-pink-500/30 blur-[120px]" />
      <div className="absolute left-1/3 top-1/4 size-[400px] rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-violet-500/25 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 size-[350px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-cyan-500/20 blur-[80px]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
    </div>
  );
}

function FloatingOrbs() {
  const orbs = [
    { size: "w-32 h-32", color: "bg-gradient-to-br from-violet-500 to-fuchsia-500", delay: 0, x: "10%", y: "20%" },
    { size: "w-24 h-24", color: "bg-gradient-to-br from-cyan-400 to-blue-500", delay: 0.5, x: "75%", y: "15%" },
    { size: "w-20 h-20", color: "bg-gradient-to-br from-pink-500 to-rose-500", delay: 1, x: "80%", y: "70%" },
    { size: "w-16 h-16", color: "bg-gradient-to-br from-emerald-400 to-teal-500", delay: 1.5, x: "15%", y: "75%" },
    { size: "w-12 h-12", color: "bg-gradient-to-br from-amber-400 to-orange-500", delay: 2, x: "50%", y: "85%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <m.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          className={`absolute ${orb.size} rounded-full ${orb.color} blur-[60px] opacity-60`}
          style={{ left: orb.x, top: orb.y }}
        />
      ))}
    </div>
  );
}

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentWord.length) {
            setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
          }
        }
      },
      isDeleting ? 80 : 150
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
      {displayedText}
      <span className="inline-block h-[1em] w-[3px] animate-pulse bg-gradient-to-b from-violet-400 to-pink-400 ml-1 align-middle" />
    </span>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl shadow-black/20 ${className}`}
    >
      {children}
    </div>
  );
}

function StatusBadge() {
  return (
    <GlassCard className="group inline-flex items-center gap-3 px-4 py-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[12px] font-medium text-white/80">Available for work</span>
      <ChevronRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
    </GlassCard>
  );
}

function SocialButton({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </m.a>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <m.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 px-3.5 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-sm"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      {name}
    </m.span>
  );
}

function StatsRow() {
  const stats = [
    { value: "2", label: "Years building" },
    { value: "35+", label: "Projects shipped" },
    { value: "100%", label: "Passion" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-6">
      {stats.map((stat, i) => (
        <m.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1 }}
          className="flex flex-col"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {stat.value}
          </span>
          <span className="text-[11px] text-white/40">{stat.label}</span>
        </m.div>
      ))}
    </div>
  );
}

 

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <AnimatedGradientBg />
      <FloatingOrbs />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute size-[600px] rounded-full border border-violet-500/10" />
        <div className="absolute size-[450px] rounded-full border border-fuchsia-500/10" />
        <div className="absolute size-[300px] rounded-full border border-pink-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex min-h-[100svh] flex-col items-center justify-center py-20 text-center"
        >
          <m.div variants={itemVariants} className="mb-6">
            <StatusBadge />
          </m.div>

          <m.div variants={itemVariants} className="mb-4">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                I build
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                <TypingText />
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h1>
          </m.div>

          <m.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-white/50"
          >
            Full-stack engineer crafting scalable SaaS products with cutting-edge AI integration.
            Based in India, building for the world.
          </m.p>

          <m.div
            variants={itemVariants}
            className="mb-10 flex flex-wrap items-center justify-center gap-4"
          >
            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 text-[14px] font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:shadow-xl"
              >
                <Play className="h-4 w-4" />
                Explore Projects
              </Link>
            </m.div>
            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </m.div>
          </m.div>

          <m.div variants={itemVariants} className="mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <SocialButton href="https://github.com/Solanki028" icon={Github} label="GitHub" />
              <SocialButton href="https://linkedin.com/in/priyanshu-solanki" icon={Linkedin} label="LinkedIn" />
            </div>
          </m.div>

          <m.div variants={itemVariants} className="mb-10">
            <StatsRow />
          </m.div>

          <m.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2">
            {["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "AI/ML"].map(
              (tech, i) => (
                <m.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                >
                  <TechBadge name={tech} />
                </m.div>
              )
            )}
          </m.div>
        </m.div>
      </div>

       
    </section>
  );
}