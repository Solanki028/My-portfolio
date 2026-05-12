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
    <section id="contact" className="section-spacing bg-[#FCF9F5] relative">
      <div className="section-divider" />

      <div className="container-premium pt-10">
        {/* Large CTA Statement */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading text-display font-bold text-[#000000] mb-6">
            Let&apos;s build something
            <br />
            <span className="text-black/60">meaningful.</span>
          </h2>
          <p className="text-body-lg text-black/60 max-w-lg mx-auto">
            Currently accepting new projects and consulting engagements.
            I typically respond within 12 hours.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Contact Links */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="label-eyebrow mb-8 block">Get in Touch</span>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <m.div key={link.label} variants={fadeUp}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group flex flex-col p-6 rounded-2xl border border-black/[0.06] bg-white hover:border-black/[0.12] hover:bg-white transition-all duration-500"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-eyebrow font-semibold text-black/40 group-hover:text-black/60 transition-colors duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#000000]/[0.08] group-hover:text-[#000000] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <span className="text-body-sm font-medium text-black/60 group-hover:text-[#000000] transition-colors duration-300">
                      {link.value}
                    </span>
                  </Link>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Right: Form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-10 md:p-12 rounded-3xl border border-black/[0.08] bg-white relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full blur-[100px] pointer-events-none" />

              {status === "sent" ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-black/[0.03] flex items-center justify-center mb-8">
                    <CheckCircle className="w-8 h-8 text-[#000000]" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[#000000] mb-3">
                    Message transmitted
                  </h3>
                  <p className="text-body-sm text-black/60">
                    Synchronizing with inbox now...
                  </p>
                </m.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-3">
                        <label className="text-eyebrow font-semibold text-black/50">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full bg-white border border-black/[0.08] rounded-xl px-5 py-3.5 text-body-sm text-[#000000] placeholder:text-black/30 focus:outline-none focus:border-black/[0.15] focus:bg-black/[0.03] transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-eyebrow font-semibold text-black/50">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="w-full bg-white border border-black/[0.08] rounded-xl px-5 py-3.5 text-body-sm text-[#000000] placeholder:text-black/30 focus:outline-none focus:border-black/[0.15] focus:bg-black/[0.03] transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-eyebrow font-semibold text-black/50">
                        Tell me about your project
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="What are we building?"
                        className="w-full bg-white border border-black/[0.08] rounded-xl px-5 py-3.5 text-body-sm text-[#000000] placeholder:text-black/30 focus:outline-none focus:border-black/[0.15] focus:bg-black/[0.03] transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full !h-14 text-[15px] group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0D0D0D]/20 border-t-[#0D0D0D] rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
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
