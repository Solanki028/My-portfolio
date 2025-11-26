'use client';

import { 
  Code, 
  Database, 
  Cloud, 
  Server,
  Wrench,
  Brain,
  Zap,
  Layers,
  Globe,
  Cpu,
  Smartphone,
  GitBranch
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.2, '-50px');

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'React/Next.js', level: 95, icon: Layers },
        { name: 'TypeScript', level: 92, icon: Code },
        { name: 'Tailwind CSS', level: 95, icon: Smartphone },
        { name: 'HTML/CSS', level: 90, icon: Globe },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 92, icon: Server },
        { name: 'Express.js', level: 90, icon: Zap },
        { name: 'Python', level: 88, icon: Brain },
        { name: 'REST APIs', level: 95, icon: Cpu },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'MongoDB', level: 88, icon: Database },
        { name: 'PostgreSQL', level: 85, icon: Database },
        { name: 'AWS', level: 90, icon: Cloud },
        { name: 'Docker', level: 87, icon: GitBranch },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 92, icon: GitBranch },
        { name: 'CI/CD', level: 88, icon: Zap },
        { name: 'Testing', level: 85, icon: Brain },
        { name: 'Agile', level: 90, icon: Wrench },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'Figma', icon: Layers },
    { name: 'Postman', icon: Zap },
    { name: 'MongoDB Compass', icon: Database },
    { name: 'Docker Desktop', icon: GitBranch },
    { name: 'AWS Console', icon: Cloud },
  ];

  return (
    <section ref={ref} id="skills" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 border border-violet-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border border-blue-500/20 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-cyan-500/20 rotate-12 animate-bounce-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Constantly learning and mastering new technologies to deliver cutting-edge solutions
              that drive innovation and excellence.
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors duration-300" />
                          <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-violet-400 font-bold text-lg">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                        
                        {/* Skill Level Glow */}
                        <div 
                          className={`absolute top-0 w-1 h-3 bg-gradient-to-t ${category.color} rounded-full opacity-80`}
                          style={{ 
                            left: isVisible ? `${skill.level}%` : '0%',
                            transform: 'translateX(-50%)',
                            transitionDelay: `${(index * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>

          {/* Enhanced Tools & Technologies Section */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <h3 className="text-3xl font-bold text-white mb-8">Tools & Technologies</h3>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              The modern toolkit I use to bring ideas to life with efficiency and precision
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tool.icon className="w-10 h-10 text-slate-400 group-hover:text-violet-400 transition-colors duration-300 mx-auto mb-3" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 backdrop-blur-xl border border-violet-400/20 rounded-3xl p-8 max-w-4xl mx-auto">
              <Brain className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-4">Continuous Learning</h4>
              <p className="text-slate-300 leading-relaxed">
                Technology evolves rapidly, and so do I. I believe in staying ahead of the curve by constantly 
                exploring new frameworks, tools, and methodologies. Whether it's emerging AI technologies, 
                cutting-edge frameworks, or innovative design patterns, I'm always ready to learn and adapt 
                to deliver the best solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
    </section>
  );
}