'use client';

import { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  GitBranch,
  Server,
  Wrench,
  Palette
} from 'lucide-react';

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

 const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML CSS', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'REST API', level: 95 },
    ],
  },


  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "AWS", level: 92 },
      { name: "Git", level: 88 },
      { name: "CI/CD", level: 90 },
    ],
  },
  

  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'SQL', level: 88 },
      { name: 'MongoDB', level: 85 },
    ],
  }, // Added closing brace for skillCategories array element
]; // Added closing bracket for skillCategories array

  // Added closing bracket for tools array

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900/50">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tech-gradient">
              Skills & Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Constantly learning and mastering new technologies to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`tech-border rounded-xl p-6 hover:tech-glow transition-all duration-300 ${
                  isVisible ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`tech-border rounded-lg p-4 hover:tech-glow transition-all duration-300 group ${
                    isVisible ? 'slide-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tool.icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 mx-auto mb-2" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}