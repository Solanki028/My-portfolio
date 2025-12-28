'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles = [];
    const particleCount = 150;
    const mouse = { x: 0, y: 0 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;

        // Enhanced color palette
        const colors = [
          'rgba(139, 92, 246,', // violet
          'rgba(99, 102, 241,', // blue
          'rgba(6, 182, 212,',  // cyan
          'rgba(16, 185, 129,', // emerald
          'rgba(245, 158, 11,', // orange
          'rgba(236, 72, 153,', // pink
        ];

        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Enhanced movement
        this.baseVx = this.vx;
        this.baseVy = this.vy;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary collision with bounce
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150 && distance > 0) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.01;
          this.vy += (dy / distance) * force * 0.01;
        }

        // Pulsing effect
        this.pulsePhase += this.pulseSpeed;
        this.currentRadius = this.radius + Math.sin(this.pulsePhase) * 0.5;

        // Opacity animation
        this.opacity += (Math.random() - 0.5) * 0.01;
        this.opacity = Math.max(0.1, Math.min(1, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();

        // Add glow effect
        if (Number.isFinite(this.x) && Number.isFinite(this.y) && Number.isFinite(this.currentRadius)) {
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, Math.max(0, this.currentRadius * 3)
          );
          gradient.addColorStop(0, this.color + (this.opacity * 0.5) + ')');
          gradient.addColorStop(1, this.color + '0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        ctx.restore();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.opacity = Math.random() * 0.8 + 0.2;
      }
    }

    // Enhanced constellation lines
    function drawConstellation() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            // Gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(99, 102, 241, ${opacity})`);
            gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    // Mouse tracking
    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    // Enhanced initialization
    const init = () => {
      resizeCanvas();
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines first (behind particles)
      drawConstellation();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Mouse glow effect
      if (mouse.x !== 0 || mouse.y !== 0) {
        ctx.save();
        const mouseGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 100
        );
        mouseGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        mouseGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
        mouseGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    // Performance monitoring
    let lastTime = performance.now();
    let frameCount = 0;

    const performanceCheck = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;

        // Adjust particle count based on performance
        if (fps < 30 && particles.length > 50) {
          particles.splice(0, 10);
        } else if (fps > 50 && particles.length < particleCount) {
          for (let i = 0; i < 5; i++) {
            particles.push(new Particle());
          }
        }
      }

      requestAnimationFrame(performanceCheck);
    };

    init();
    animate();
    performanceCheck();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      // Reinitialize particles on resize to maintain density
      init();
    });

    window.addEventListener('mousemove', handleMouseMove);

    // Visibility API for performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', () => { });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}