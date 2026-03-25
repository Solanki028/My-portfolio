"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  Code2, Server, Cloud, Wrench,
  Atom, Wind, FileCode2, Activity, Layout,
  Zap, Terminal, Network, Share2,
  Database, Box, GitBranch, TestTube2, PenTool,
  Bot, Brain, Link2, Wifi, Cpu, Globe, Layers,
  ShieldCheck, Smartphone, CpuIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = { name: string; icon: React.ReactNode; level: string };
type Group = { label: string; description: string; categoryIcon: React.ReactNode; skills: Skill[] };

const skillGroups: Group[] = [
  {
    label: "Frontend Architecture",
    description: "Building immersive, high-performance interfaces.",
    categoryIcon: <Code2 className="w-5 h-5 text-white" />,
    skills: [
      { name: "React", icon: <Atom className="w-4 h-4" />, level: "Expert" },
      { name: "Next.js 14/15", icon: <Layout className="w-4 h-4" />, level: "Expert" },
      { name: "TypeScript", icon: <FileCode2 className="w-4 h-4" />, level: "Expert" },
      { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" />, level: "Expert" },
      { name: "Framer Motion", icon: <Activity className="w-4 h-4" />, level: "Advanced" },
      { name: "shadcn/ui", icon: <Layers className="w-4 h-4" />, level: "Expert" },
    ],
  },
  {
    label: "Backend & Systems",
    description: "Architecting resilient server-side logic.",
    categoryIcon: <Server className="w-5 h-5 text-white" />,
    skills: [
      { name: "Node.js", icon: <CpuIcon className="w-4 h-4" />, level: "Expert" },
      { name: "Express.js", icon: <Zap className="w-4 h-4" />, level: "Expert" },
      { name: "Python / Django", icon: <Terminal className="w-4 h-4" />, level: "Advanced" },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, level: "Advanced" },
      { name: "MongoDB", icon: <Database className="w-4 h-4" />, level: "Expert" },
      { name: "Redis", icon: <Activity className="w-4 h-4" />, level: "Intermediate" },
    ],
  },
  {
    label: "AI & Intelligence",
    description: "Integrating LLMs and intelligent workflows.",
    categoryIcon: <Brain className="w-5 h-5 text-white" />,
    skills: [
      { name: "LangChain", icon: <Link2 className="w-4 h-4" />, level: "Advanced" },
      { name: "Vector DBs", icon: <Layers className="w-4 h-4" />, level: "Advanced" },
      { name: "AI Agents", icon: <Bot className="w-4 h-4" />, level: "Advanced" },
      { name: "OpenAI / Gemini", icon: <Globe className="w-4 h-4" />, level: "Expert" },
      { name: "Function Calling", icon: <Terminal className="w-4 h-4" />, level: "Expert" },
    ],
  },
  {
    label: "DevOps & Infrastructure",
    description: "Ensuring zero-downtime deployments.",
    categoryIcon: <Cloud className="w-5 h-5 text-white" />,
    skills: [
      { name: "AWS / Google Cloud", icon: <Cloud className="w-4 h-4" />, level: "Advanced" },
      { name: "Docker", icon: <Box className="w-4 h-4" />, level: "Advanced" },
      { name: "Supabase", icon: <Zap className="w-4 h-4" />, level: "Advanced" },
      { name: "CI / CD Pipelines", icon: <GitBranch className="w-4 h-4" />, level: "Expert" },
      { name: "Vercel / Netlify", icon: <Globe className="w-4 h-4" />, level: "Expert" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-20"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Core Competencies.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#111] border border-[#1A1A1A] shrink-0">
                  {group.categoryIcon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{group.label}</h3>
                  <p className="text-sm text-[#4D4D4D]">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-[#1A1A1A] bg-[#0E0E0E] group transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#4D4D4D] group-hover:text-white transition-colors">
                        {skill.icon}
                      </span>
                      <span className="text-[13px] font-medium text-[#737373] group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-[#222] font-bold group-hover:text-[#444] transition-colors">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
