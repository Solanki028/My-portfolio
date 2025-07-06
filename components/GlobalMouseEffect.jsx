'use client';

import { useState, useEffect, useRef } from 'react';

export default function GlobalMouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePosition({ x, y });
      setIsActive(true);
      
      // Create particle trail
      setMouseTrail(prev => {
        const newTrail = [...prev, { 
          x, 
          y, 
          id: Date.now() + Math.random(),
          opacity: 1,
          size: Math.random() * 4 + 2
        }];
        
        // Keep only last 15 particles
        return newTrail.slice(-15);
      });
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Fade out trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseTrail(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.05,
          size: particle.size * 0.98
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isActive) return null;

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: isActive ? 1 : 0,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
        <div className="absolute inset-0 w-full h-full bg-cyan-400 rounded-full animate-ping opacity-40" />
      </div>

      {/* Mouse Trail Particles */}
      {mouseTrail.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `radial-gradient(circle, rgba(0, 217, 255, ${particle.opacity}) 0%, rgba(0, 255, 136, ${particle.opacity * 0.5}) 100%)`,
            borderRadius: '50%',
            transform: `scale(${particle.opacity})`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}

      {/* Interactive Glow Effect */}
      <div 
        className="fixed pointer-events-none z-[9997] transition-opacity duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          opacity: isActive ? 1 : 0,
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, rgba(0, 255, 136, 0.05) 30%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease-out',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Ripple Effects */}
      <div 
        className="fixed pointer-events-none z-[9996] transition-opacity duration-300"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          opacity: isActive ? 0.3 : 0
        }}
      >
        <div className="w-32 h-32 border border-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      </div>
      
      <div 
        className="fixed pointer-events-none z-[9996] transition-opacity duration-300"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          opacity: isActive ? 0.4 : 0
        }}
      >
        <div className="w-20 h-20 border border-green-400/30 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
      </div>
    </>
  );
}