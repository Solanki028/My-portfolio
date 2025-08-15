'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Zap, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  const titles = [
    'Full Stack Developer',
    'AI Engineer',
    'Tech Innovator',
    'Problem Solver',
  ];

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

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,136,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-2xl rotate-45 animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-green-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-orange-400/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />

        {/* Code Symbols */}
        <div className="absolute top-32 left-1/4 text-cyan-400/20 text-6xl font-mono animate-float">{'<>'}</div>
        <div className="absolute bottom-40 right-1/4 text-green-400/20 text-4xl font-mono animate-float" style={{ animationDelay: '1.5s' }}>{'{ }'}</div>
        <div className="absolute top-1/2 left-16 text-orange-400/20 text-5xl font-mono animate-float" style={{ animationDelay: '0.8s' }}>{'</>'}</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="slide-in-up mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-400/30 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="slide-in-up">
              <p className="text-cyan-400 text-xl md:text-2xl font-medium mb-2">
                Hello, I'm
              </p>
            </div>

            {/* Name with Gradient */}
            <div className="slide-in-left">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative group cursor-pointer">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-green-400 group-hover:to-cyan-400 transition-all duration-500">
                  Priyanshu Solanki
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-green-400/20 blur-xl -z-10 group-hover:from-cyan-400/40 group-hover:to-green-400/40 transition-all duration-500" />
              </h1>
            </div>

            {/* Dynamic Title */}
            <div className="slide-in-right">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 min-h-[4rem] flex items-center justify-center">
                <span className="text-gray-300">I craft </span>
                <span className="ml-3 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent relative">
                  {displayText}
                  <span className="animate-pulse text-cyan-400">|</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full transform scale-x-0 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="slide-in-up">
              <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
                Transforming ideas into <span className="text-cyan-400 font-semibold">intelligent solutions</span> through
                cutting-edge technology, innovative design, and <span className="text-green-400 font-semibold">scalable architecture</span>.
              </p>
            </div>

            {/* Tech Stack Preview */}
            <div className="slide-in-up mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['React', 'Next.js', 'JavaScript', 'C++', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Python', 'AWS'].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 border border-cyan-400/20 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/70 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-cyan-400 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="slide-in-up flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Let's Connect</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="https://drive.google.com/file/d/1p6elxrIRoWwo3RuSz268glR1pnbRYwL2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400 cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="slide-in-up flex justify-center space-x-6 mb-16">
              {[
                { icon: Github, href: 'https://github.com/Solanki028', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanshu-solanki/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:Priyanshusolankii@outlook.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 backdrop-blur-sm cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="group mx-auto block animate-bounce hover:animate-none transition-all duration-300"
            >
              <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-cyan-400 rounded-full flex justify-center transition-colors duration-300">
                <div className="w-1 h-3 bg-gray-400 group-hover:bg-cyan-400 rounded-full mt-2 animate-bounce transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Cpu className="w-3 h-3" />

          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-3 h-3" />

          </div>
          <div className="flex items-center space-x-2">
            <Code2 className="w-3 h-3" />

          </div>
        </div>
      </div>
    </section>
  );
}