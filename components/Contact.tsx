"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16"
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">
                Let's build something <br className="hidden md:block"/> amazing together.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to new opportunities, freelance projects, or technical consulting. Drop a message and I'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 mt-4">
              <a href="mailto:Priyanshusolankii@outlook.com" className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">Priyanshusolankii@outlook.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/919996973755" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">+91 9996973755</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">Gurugram, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            variants={fadeInUp} 
            className="p-8 rounded-3xl bg-card border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Message sent successfully!</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl text-base font-semibold">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
