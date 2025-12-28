'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2, Briefcase } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Code2 },
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Sparkles },
    { name: 'Contact', href: '#contact', icon: Code2 },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/50 backdrop-blur-xl border-b border-white/5 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300">
              <span className="text-white font-bold text-lg">PS</span>

              {/* Animated background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />

              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-600 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="hidden sm:block">
              <span className="text-lg font-semibold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-red-200 group-hover:to-red-200 transition-all duration-300">
                Portfolio
              </span>
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-red-500 bg-white/5 border border-red-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-pulse" />
                  )}

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              );
            })}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 before:absolute before:inset-0 before:rounded-xl before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>

              {/* Animated background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-zinc-300 hover:text-red-500 hover:border-red-500/30 hover:bg-white/10 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

            {/* Menu button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </nav>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group w-full text-left px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-500 border border-red-500/30'
                    : 'text-zinc-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-semibold rounded-xl hover:from-red-500 hover:to-red-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25"
            >
              <Sparkles className="w-5 h-5" />
              <span>Let's Work Together</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-800/50">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 transition-all duration-300 ease-out shadow-lg shadow-red-500/50"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>
    </header>
  );
}