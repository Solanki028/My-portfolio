"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { 
  Code2, Server, Cloud, Wrench,
  AppWindow, FileCode2, Wind, Activity, Component,
  Zap, Terminal, Network, Share2,
  Database, CloudLightning, Box,
  GitBranch, Workflow, TestTube2, Users, PenTool
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "React & Next.js", icon: <AppWindow className="w-4 h-4" /> },
        { name: "TypeScript", icon: <FileCode2 className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" /> },
        { name: "Framer Motion", icon: <Activity className="w-4 h-4" /> },
        { name: "Shadcn UI", icon: <Component className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", icon: <Zap className="w-4 h-4" /> },
        { name: "Python", icon: <Terminal className="w-4 h-4" /> },
        { name: "RESTful APIs", icon: <Network className="w-4 h-4" /> },
        { name: "GraphQL", icon: <Share2 className="w-4 h-4" /> }
      ]
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "Supabase", icon: <CloudLightning className="w-4 h-4" /> },
        { name: "AWS Core", icon: <Cloud className="w-4 h-4" /> },
        { name: "Docker", icon: <Box className="w-4 h-4" /> }
      ]
    },
    {
      title: "Tooling",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4" /> },
        { name: "CI/CD Pipelines", icon: <Workflow className="w-4 h-4" /> },
        { name: "Jest Testing", icon: <TestTube2 className="w-4 h-4" /> },
        { name: "Agile Dev", icon: <Users className="w-4 h-4" /> },
        { name: "Figma", icon: <PenTool className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-card border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Technical Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and mastering the modern tech stack to deliver reliable, cutting-edge software solutions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col"
            >
              <div className="flex flex-col items-start mb-6 border-b border-border/50 pb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 ring-1 ring-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx} 
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:bg-primary/5 hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                  >
                    <span className="text-primary/70">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <h4 className="text-xl font-bold text-foreground mb-3">Continuous Evolution</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Technology moves fast. Whether it's integrating the latest generation of LLMs, exploring edge computing, or adopting new structural design patterns, I heavily invest in continuous learning to ensure the products I build today are ready for tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
