"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, m, useMotionValue, useSpring } from "framer-motion";
import { X, Menu, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];

/* ---------- Animated Nav Link (letter shuffle on hover) ---------- */
function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-10 items-center overflow-hidden px-4 text-[13px] font-medium tracking-wide"
    >
      <div className="relative h-4 overflow-hidden">
        {/* Top text (slides up on hover) */}
        <m.span
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="block text-white/50 transition-colors group-hover:text-white"
        >
          {label}
        </m.span>

        {/* Bottom text (slides up from below) */}
        <m.span
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="block text-white"
        >
          {label}
        </m.span>
      </div>

      {/* Underline accent */}
      <m.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
        className="absolute bottom-1 left-4 right-4 h-[1.5px] origin-left bg-gradient-to-r from-[#C5FF52] to-[#7C5CFF]"
      />
    </Link>
  );
}

/* ---------- Magnetic CTA Button ---------- */
function MagneticCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.a
      ref={ref}
      href="/#contact"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="group relative hidden md:inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#C5FF52] px-5 py-2.5 text-[13px] font-semibold text-black"
    >
      {/* Sliding background on hover */}
      <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black" />
        </span>
        Let&apos;s talk
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </m.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <m.header
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed left-1/2 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "top-3 w-[calc(100%-1.5rem)] max-w-[780px]"
            : "top-5 w-[calc(100%-2rem)] max-w-[860px]"
        )}
      >
        {/* Gradient border wrapper */}
        <div className="relative rounded-full p-[1px]">
          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-[#C5FF52]/30 to-white/20 opacity-60" />

          <div
            className={cn(
              "relative flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
              scrolled
                ? "bg-[#0A0A0B]/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                : "bg-[#0A0A0B]/60 backdrop-blur-xl"
            )}
          >
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="group relative flex items-center gap-2 w-fit">
                <m.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#C5FF52] to-[#7C5CFF]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-black" strokeWidth={2.5} />
                </m.div>
                <span className="font-heading text-[15px] font-bold tracking-tight text-white">
                  Priyanshu
                  <span className="text-[#C5FF52] transition-colors duration-300 group-hover:text-white">
                    .sh
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav with hover indicator */}
            <nav
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative hidden items-center gap-4 md:flex"
            >
              {navLinks.map((link, i) => (
                <div
                  key={link.label}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="relative"
                >
                  {/* Floating background pill */}
                  {hoveredIndex === i && (
                    <m.div
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <NavLink label={link.label} href={link.href} />
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex flex-1 items-center justify-end gap-2">
              <MagneticCTA />

              <button
                className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <m.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-4 w-4" />
                    </m.div>
                  ) : (
                    <m.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-4 w-4" />
                    </m.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </m.header>

      {/* Mobile Overlay — Dark cinematic version */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0A0A0B] md:hidden"
          >
            {/* Aurora bg */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7C5CFF] opacity-[0.15] blur-[120px]" />
              <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C5FF52] opacity-[0.10] blur-[120px]" />
            </div>

            {/* Grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="h-[80px]" />

            <nav className="relative z-10 flex flex-1 flex-col px-7 pt-8">
              {/* Tag */}
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Navigation
              </m.div>

              {/* Links */}
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.07,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/[0.08] py-6 transition-colors"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-white/30">
                          0{i + 1}
                        </span>
                        <span className="font-heading text-[2.25rem] font-medium leading-none tracking-tight text-white/70 transition-colors duration-300 group-hover:text-white">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#C5FF52]" />
                    </Link>
                  </m.div>
                ))}
              </div>

              {/* Footer CTA */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-auto space-y-4 pb-10"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C5FF52] px-6 py-4 text-base font-semibold text-black"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    Let&apos;s build something
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Available for opportunities
                </p>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}