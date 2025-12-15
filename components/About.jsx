'use client';

import { Code, Cpu, Zap, Target, Users, Award, Brain, Rocket, Globe, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2, '-50px');

  const stats = [
    { number: '1.5+', label: 'Years Experience', icon: Award, color: 'from-violet-500 to-purple-500' },
    { number: '50+', label: 'Projects Completed', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { number: '100%', label: 'Client Satisfaction', icon: Target, color: 'from-emerald-500 to-green-500' },
    { number: '24/7', label: 'Available Support', icon: Zap, color: 'from-orange-500 to-red-500' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in modern web technologies including React, Next.js, Node.js, and cloud platforms. Building scalable applications with clean, maintainable code.',
      color: 'from-violet-500 to-purple-500',
      delay: '0s'
    },
    {
      icon: Brain,
      title: 'Generative AI',
      description: 'Building generative AI copilots, agents, and automations that ship faster, reduce manual work, and feel like magic for end users.',
      color: 'from-blue-500 to-cyan-500',
      delay: '0.2s'
    },
    {
      icon: Rocket,
      title: 'Innovation & Growth',
      description: 'Continuously learning and adopting new technologies. Committed to delivering innovative solutions that drive business growth and user satisfaction.',
      color: 'from-emerald-500 to-green-500',
      delay: '0.4s'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experienced in leading development teams and mentoring junior developers. Strong focus on collaborative problem-solving and knowledge sharing.',
      color: 'from-orange-500 to-red-500',
      delay: '0.6s'
    }
  ];

  const values = [
    { icon: Heart, title: 'Passionate', description: 'Driven by curiosity and love for creating' },
    { icon: Globe, title: 'Global', description: 'Building for worldwide audiences' },
    { icon: Target, title: 'Focused', description: 'Delivering results that matter' },
    { icon: Brain, title: 'Innovative', description: 'Always exploring new possibilities' }
  ];

  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-violet-500/10 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-500/10 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-cyan-500/10 rotate-12 animate-bounce-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                  About Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
            </div>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate software developer with expertise in building scalable applications
              and innovative solutions that drive business growth and create meaningful user experiences.
            </p>
          </div>

          {/* Enhanced Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Column - Profile & Stats */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              {/* Enhanced Profile Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:border-violet-400/30">
                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 mx-auto mb-8">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-3xl animate-pulse-slow" />
                    
                    {/* Profile Image */}
                    <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/25">
                      <img
                        src="/images/me pic.png"
                        alt="Priyanshu Solanki - Full Stack Developer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                        }}
                      />
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      
                      {/* Floating Tech Icons */}
                      <div className="absolute top-4 right-4 p-3 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-violet-400/20">
                        <Code className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="absolute bottom-4 left-4 p-3 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-400/20">
                        <Brain className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border border-violet-400/30 rounded-full animate-spin-slow" />
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-blue-400/30 rounded-lg rotate-45 animate-pulse" />
                    <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                    <div className="absolute bottom-1/2 -left-6 w-3 h-3 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-violet-400/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content & Highlights */}
            <div className={`space-y-8 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
              {/* Enhanced Bio */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Building the Future, One Line at a Time
                </h3>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-violet-400 font-semibold">Full Stack Web Developer</span> with a 
                    solid foundation in building responsive, scalable, and user-friendly web applications. 
                    With 1+ years of hands-on experience in the <span className="text-cyan-400 font-semibold">MERN stack</span>, 
                    I've brought ideas to life through real-world projects that deliver impactful digital solutions.
                  </p>
                  <p>
                    I'm driven by curiosity, committed to continuous learning, and eager to contribute to 
                    <span className="text-emerald-400 font-semibold"> innovative products</span> that make a difference. 
                    My approach combines technical excellence with creative problem-solving to deliver 
                    exceptional user experiences.
                  </p>
                </div>
              </div>

              {/* Enhanced Core Values */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-violet-400" />
                  Core Values
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="p-2 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors duration-300">
                        <value.icon className="w-4 h-4 text-violet-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{value.title}</div>
                        <div className="text-xs text-slate-400">{value.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Highlights */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-white">What I Bring</h4>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className={`group flex items-start gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: highlight.delay }}
                    >
                      <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${highlight.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                          {highlight.title}
                        </h5>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
    </section>
  );
}