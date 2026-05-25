"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="bg-[#FCF9F5] py-32">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div>
            <span className="font-serif italic text-2xl text-black/20 block mb-6">Connect</span>
            <h2 className="font-heading text-display font-bold text-black mb-10 leading-none">
              Let&apos;s build <br />
              <span className="font-serif italic font-normal text-black/40">something meaningful.</span>
            </h2>
            <p className="text-body-lg text-black/60 max-w-md mb-12">
              Available for new projects and consulting. I respond within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail />, label: "Email", value: "Priyanshu.solankii@outlook.com", href: "mailto:Priyanshu.solankii@outlook.com" },
                { icon: <Linkedin />, label: "LinkedIn", value: "in/priyanshu-solanki", href: "https://linkedin.com/in/priyanshu-solanki" },
                { icon: <Github />, label: "GitHub", value: "Solanki028", href: "https://github.com/Solanki028" },
              ].map((link) => (
                <Link key={link.label} href={link.href} target="_blank" className="flex items-center gap-6 group">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white transition-all group-hover:bg-black group-hover:text-white">
                      {link.icon}
                   </div>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-black/20">{link.label}</p>
                      <p className="font-heading text-lg font-bold text-black">{link.value}</p>
                   </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-black/5 border border-black/5">
             {status === "sent" ? (
                <m.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center py-20"
                >
                   <CheckCircle className="h-16 w-16 text-[#C5FF52] mb-6" />
                   <h3 className="font-heading text-3xl font-bold text-black mb-4">Message Sent</h3>
                   <p className="text-black/60">Thank you. I&apos;ll be in touch soon.</p>
                </m.div>
             ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Name</label>
                         <input required type="text" className="h-14 rounded-2xl border border-black/5 bg-black/[0.02] px-6 text-sm focus:border-black focus:outline-none transition-colors" />
                      </div>
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email</label>
                         <input required type="email" className="h-14 rounded-2xl border border-black/5 bg-black/[0.02] px-6 text-sm focus:border-black focus:outline-none transition-colors" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Message</label>
                      <textarea required rows={5} className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 text-sm focus:border-black focus:outline-none transition-colors resize-none" />
                   </div>
                   <button 
                     type="submit" 
                     disabled={status === "sending"}
                     className="h-16 rounded-full bg-black text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                   >
                      {status === "sending" ? "Sending..." : "Send Message"}
                   </button>
                </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
}
