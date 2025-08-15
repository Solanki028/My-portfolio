'use client';

import { useState, useEffect } from 'react';
import { Code, Cpu, Zap, Target, Users, Award } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '6+', label: 'months Experience', icon: Award },
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '100%', label: 'Client Satisfaction', icon: Target },
    { number: '24/7', label: 'Available Support', icon: Zap },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, and cloud platforms.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Implementing intelligent solutions with cutting-edge AI technologies.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tech-gradient">
              About Me
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Passionate software developer with expertise in building scalable applications
              and innovative solutions that drive business growth.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image & Stats */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl tech-border relative overflow-hidden">
                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-xl overflow-hidden">
                    <img
                      src="/images/me.jpg"
                      alt="Priyanshu Solanki - Full Stack Developer"
                      className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't load
                        e.target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 border border-cyan-400/30 rounded-full rotating" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-green-400/30 rounded-lg rotating" style={{ animationDelay: '1s' }} />

                  {/* Tech Icons Overlay */}
                  <div className="absolute top-6 left-6 p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm">
                    <Code className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="absolute bottom-6 right-6 p-2 bg-slate-900/80 rounded-lg backdrop-blur-sm">
                    <Cpu className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 tech-border rounded-lg hover:tech-glow transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`space-y-6 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="prose prose-lg text-gray-300 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  I'm a passionate Full Stack Web Developer with a solid foundation in building responsive, scalable, and user-friendly web applications. With 1 year of hands-on experience in the MERN stack, I’ve brought ideas to life through real-world projects that deliver impactful digital solutions. I’m driven by curiosity, committed to continuous learning, and eager to contribute to innovative products that make a difference.                </p>


              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}