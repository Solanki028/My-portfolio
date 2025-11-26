'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Code2, Terminal, Zap, Brain, Layers } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const titles = [
    'Full Stack Developer',
    'AI Engineer', 
    'Tech Innovator',
    'Problem Solver'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/15 to-rose-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern with subtle movement */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pan" />
        
        {/* Interactive Mouse Glow */}
        <div 
          className="absolute w-96 h-96 pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)'
          }}
        />

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-[10%] text-violet-400/30 text-xs font-mono animate-float">{'<Developer />'}</div>
        <div className="absolute top-40 right-[15%] text-blue-400/30 text-xs font-mono animate-float-slow" style={{ animationDelay: '1s' }}>{'{ Full Stack }'}</div>
        <div className="absolute bottom-32 left-[20%] text-cyan-400/30 text-xs font-mono animate-float" style={{ animationDelay: '3s' }}>{'[ AI Engineer ]'}</div>
        <div className="absolute bottom-40 right-[25%] text-pink-400/30 text-xs font-mono animate-float-slow" style={{ animationDelay: '2s' }}>{'( Innovator )'}</div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-violet-400/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-blue-400/20 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-cyan-400/20 rotate-12 animate-bounce-subtle" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Status Badge - Enhanced */}
          <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-400/30 transition-all duration-500 group">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                Available for new opportunities
              </span>
              <Sparkles className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Greeting - Enhanced Typography */}
            <div className={`transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-violet-400 text-xl md:text-2xl font-light tracking-wide mb-2">
                Hello, I'm
              </p>
            </div>

            {/* Name - Enhanced with Gradient */}
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                  Priyanshu
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]" style={{ animationDelay: '1s' }}>
                  Solanki
                </span>
              </h1>
            </div>

            {/* Dynamic Title - Enhanced */}
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 min-h-[4rem] flex items-center justify-center gap-3">
                <span className="text-slate-400">I build</span>
                <div className="relative">
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                    {displayText}
                  </span>
                  <span className="text-violet-400 animate-pulse ml-1">|</span>
                </div>
              </div>
            </div>

            {/* Description - Enhanced */}
            <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
                Crafting <span className="text-violet-400 font-semibold">exceptional digital experiences</span> through 
                clean code, innovative design, and <span className="text-cyan-400 font-semibold">scalable solutions</span> 
                that drive business growth and user satisfaction.
              </p>
            </div>

            {/* Tech Stack - Enhanced with hover effects */}
            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { name: 'React', icon: Layers, color: 'from-blue-500 to-cyan-400' },
                  { name: 'Next.js', icon: Code2, color: 'from-gray-400 to-white' },
                  { name: 'TypeScript', icon: Brain, color: 'from-blue-600 to-blue-400' },
                  { name: 'Node.js', icon: Terminal, color: 'from-green-500 to-emerald-400' },
                  { name: 'Python', icon: Zap, color: 'from-yellow-400 to-orange-400' },
                  { name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-400' }
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-violet-400/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 cursor-pointer`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <tech.icon className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors duration-300" />
                    <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </button>

                <a
                  href="https://drive.google.com/file/d/1ZZlASdw2fAi5TdywxTdMKXQ56Q4ZRCzP/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-400/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <Download className="w-5 h-5 group-hover:text-violet-400 transition-colors" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex justify-center gap-6 mb-20">
                {[
                  { 
                    icon: Github, 
                    href: 'https://github.com/Solanki028', 
                    label: 'GitHub',
                    color: 'hover:text-gray-300 hover:border-gray-300/30'
                  },
                  { 
                    icon: Linkedin, 
                    href: 'https://www.linkedin.com/in/priyanshu-solanki/', 
                    label: 'LinkedIn',
                    color: 'hover:text-blue-400 hover:border-blue-400/30'
                  },
                  { 
                    icon: Mail, 
                    href: 'mailto:Priyanshusolankii@outlook.com', 
                    label: 'Email',
                    color: 'hover:text-emerald-400 hover:border-emerald-400/30'
                  }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-300 hover:scale-110 ${social.color} before:absolute before:inset-0 before:rounded-2xl before:bg-white/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-slate-400 group-hover:text-current transition-colors duration-300 relative z-10" />
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll Indicator - Enhanced */}
            <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={scrollToAbout}
                className="group mx-auto block hover:scale-110 transition-transform duration-300"
                aria-label="Scroll to About section"
              >
                <div className="flex flex-col items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors duration-300">
                  <span className="text-xs font-medium tracking-widest uppercase">Discover More</span>
                  <div className="relative w-6 h-12 border-2 border-current rounded-full flex justify-center p-2 group-hover:border-violet-400 transition-colors duration-300">
                    <div className="w-1 h-3 bg-current rounded-full animate-bounce group-hover:bg-violet-400 transition-colors duration-300" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Corner Elements */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-3 text-slate-500 hover:text-violet-400 transition-colors duration-300">
        <Terminal className="w-5 h-5" />
        <span className="text-sm font-mono">portfolio.dev</span>
      </div>
      
      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-3 text-slate-500 hover:text-cyan-400 transition-colors duration-300">
        <Code2 className="w-5 h-5" />
        <span className="text-sm font-mono">v3.0</span>
      </div>

      {/* Bottom Center Brand */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono">Crafted with precision</span>
        </div>
      </div>
    </section>
  );
}