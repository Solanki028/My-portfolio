"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { X, Menu, CornerDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-[850px]",
          scrolled ? "top-4" : "top-6"
        )}
      >
        <div className="bg-[#1A1A1A] border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="relative group pl-2">
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              Priyanshu<span className="text-[#C5FF52] group-hover:text-white transition-colors duration-300">.sh</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#A1A1AA] hover:text-white transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white transition-colors duration-300 rounded-[14px] h-[42px] px-5 text-[14px] font-medium"
            >
              <CornerDownRight className="w-4 h-4 text-white" /> Say hi
            </Link>
            <button
              className="md:hidden text-[#A1A1AA] hover:text-white transition-colors p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FCF9F5] flex flex-col md:hidden"
          >
            <div className="h-[72px]" />
            <nav className="flex flex-col px-8 pt-8 flex-1">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 text-3xl font-heading font-semibold text-black/60 hover:text-[#000000] transition-colors border-b border-black/[0.08]"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pb-12"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full text-base"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
