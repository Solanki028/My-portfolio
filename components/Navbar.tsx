"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 z-[100] w-full px-6 py-8 transition-all duration-500 md:px-12",
          scrolled ? "py-4 backdrop-blur-md bg-white/80 border-b border-black/5" : ""
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-[101]">
            <span className="font-heading text-xl font-bold tracking-tight text-black">
              Priyanshu<span className="font-serif italic font-normal">.sh</span>
            </span>
            <m.div 
              className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all group-hover:w-full" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative overflow-hidden py-1 text-[13px] font-bold uppercase tracking-widest text-black/50 transition-colors hover:text-black"
              >
                <span className="relative z-10">{link.label}</span>
                <m.div 
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all group-hover:w-full" 
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/#contact"
            className="hidden h-12 items-center gap-3 rounded-full bg-black px-6 text-xs font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 md:flex"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[101] flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <m.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="h-4 w-4" />
                </m.div>
              ) : (
                <m.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="h-4 w-4" />
                </m.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white p-6 md:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-5xl font-bold tracking-tighter text-black"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </div>
            
            <div className="mb-8 flex flex-col gap-4 text-center">
              <p className="font-serif italic text-xl text-black/40">Available for new opportunities</p>
              <div className="flex justify-center gap-8">
                <a href="#" className="text-sm font-bold uppercase tracking-widest">LinkedIn</a>
                <a href="#" className="text-sm font-bold uppercase tracking-widest">Twitter</a>
                <a href="#" className="text-sm font-bold uppercase tracking-widest">GitHub</a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
