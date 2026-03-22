"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Building Scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                SaaS Products
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              I'm <strong className="font-semibold text-foreground">Priyanshu.</strong> A full-stack engineer who designs and builds clean, performant web applications with modern technologies. Bridging the gap between robust architecture and flawless UX.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto font-medium h-12 px-8 rounded-lg shadow-sm">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-medium h-12 px-8 rounded-lg">
                <Link href="#contact">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6">
              <Link 
                href="https://github.com/Solanki028" 
                target="_blank" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </Link>
              <div className="w-1 h-1 rounded-full bg-border" />
              <Link 
                href="https://www.linkedin.com/in/priyanshu-solanki/" 
                target="_blank" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Minimalist Graphic Area (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-end relative"
          >
            {/* An abstract, code-editor like window or purely minimalistic grid */}
            <div className="w-[450px] h-[550px] rounded-2xl border border-border/50 bg-secondary/20 backdrop-blur-sm relative overflow-hidden shadow-2xl flex flex-col">
              {/* Window Header */}
              <div className="h-10 border-b border-border/50 bg-background/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              {/* Code execution representation */}
              <div className="p-6 font-mono text-xs md:text-sm text-muted-foreground flex flex-col gap-3 flex-1 overflow-hidden">
                <p><span className="text-primary">import</span> &#123; Developer, Architect &#125; <span className="text-primary">from</span> <span className="text-green-400">"@mindset/core"</span>;</p>
                <p className="mt-2"><span className="text-primary">const</span> profile = <span className="text-indigo-400">new</span> Developer(&#123;</p>
                <p className="pl-4">name: <span className="text-green-400">"Priyanshu"</span>,</p>
                <p className="pl-4">focus: [<span className="text-green-400">"SaaS"</span>, <span className="text-green-400">"Full Stack"</span>, <span className="text-green-400">"Scalability"</span>],</p>
                <p className="pl-4">experienceYears: <span className="text-orange-400">1</span>,</p>
                <p className="pl-4">passion: <span className="text-green-400">"Building polished products"</span></p>
                <p>&#125;);</p>
                
                <p className="mt-4"><span className="text-indigo-400">await</span> profile.<span className="text-yellow-200">initialize</span>();</p>
                <p><span className="text-indigo-400">await</span> profile.<span className="text-yellow-200">deploy</span>(&#123; target: <span className="text-green-400">"production"</span> &#125;);</p>
                
                <div className="mt-auto border-t border-border/50 pt-4 text-[10px] text-muted-foreground/50">
                  <p>&gt; Build successful in 420ms</p>
                  <p>&gt; System optimized.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative dots grid behind */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgo8cmVjdCB3aWR0aD0nOCcgaGVpZ2h0PSc4JyBmaWxsPSd0cmFuc3BhcmVudCcvPgo8Y2lyY2xlIGN4PSc0JyBjeT0nNCcgcj0nMScgZmlsbD0ncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJy8+Cjwvc3ZnPg==')] opacity-50" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
