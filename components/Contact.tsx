"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Mail, Github, Linkedin, ArrowUpRight, ArrowRight, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Priyanshu.solankii@outlook.com",
    href: "mailto:Priyanshu.solankii@outlook.com",
  },
  {
    label: "LinkedIn",
    value: "in/priyanshu-solanki",
    href: "https://www.linkedin.com/in/priyanshu-solanki/",
  },
  {
    label: "GitHub",
    value: "github.com/Solanki028",
    href: "https://github.com/Solanki028",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
              Get in Touch
            </span>
            <m.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
              Let&apos;s build.
            </m.h2>
            <m.p variants={fadeUp} className="text-[#737373] text-lg leading-relaxed mb-12">
              Currently accepting new projects and consulting engagements.
              I typically respond within 12 hours.
            </m.p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <m.div key={link.label} variants={fadeUp}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group flex flex-col p-4 rounded-xl border border-[#1A1A1A] bg-[#0E0E0E] hover:border-[#262626] transition-all"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D] group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#222] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <span className="text-[13px] font-medium text-[#737373] group-hover:text-white transition-colors">
                      {link.value}
                    </span>
                  </Link>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Right: Premium Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-10 rounded-2xl border border-[#1A1A1A] bg-[#0E0E0E] shadow-2xl relative overflow-hidden">
              {/* Decorative subtle pulse */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted</h3>
                  <p className="text-[#4D4D4D] text-sm">Synchronizing with inbox now...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D]">Name</label>
                        <input
                          type="text" required placeholder="Project Partner"
                          className="w-full bg-[#111] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#333] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D]">Email</label>
                        <input
                          type="email" required placeholder="contact@domain.com"
                          className="w-full bg-[#111] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#333] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D]">Inquiry</label>
                      <textarea
                        rows={4} required placeholder="What are we building?"
                        className="w-full bg-[#111] border border-[#1A1A1A] rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#333] transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-12 bg-white text-black text-[13px] font-bold rounded-xl hover:bg-[#E5E5E5] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === "sending" ? "Processing..." : (
                      <>Establish Connection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
