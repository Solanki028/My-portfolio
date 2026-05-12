"use client";

import { m } from "framer-motion";
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
    categoryIcon: <Code2 className="w-5 h-5 text-[#000000]" />,
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
    categoryIcon: <Server className="w-5 h-5 text-[#000000]" />,
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
    categoryIcon: <Brain className="w-5 h-5 text-[#000000]" />,
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
    categoryIcon: <Cloud className="w-5 h-5 text-[#000000]" />,
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
    <section id="skills" className="section-spacing bg-[#FCF9F5] relative">
      <div className="section-divider" />

      <div className="container-premium pt-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="label-eyebrow mb-5 block">Technical Stack</span>
          <h2 className="font-heading text-display-sm font-bold text-[#000000] max-w-xl">
            Core competencies
            <span className="text-black/60">.</span>
          </h2>
        </m.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-x-20 lg:gap-y-24">
          {skillGroups.map((group, groupIndex) => (
            <m.div
              key={group.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: groupIndex * 0.1 }}
              className="flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-start gap-5 mb-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-black/[0.03] border border-black/[0.08] shrink-0">
                  {group.categoryIcon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-[#000000] mb-1.5">
                    {group.label}
                  </h3>
                  <p className="text-body-sm text-black/60">{group.description}</p>
                </div>
              </div>

              {/* Skill Items */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <m.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-black/[0.06] bg-white group cursor-default transition-all duration-300 hover:border-black/[0.12] hover:bg-black/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-black/40 group-hover:text-[#000000]/80 transition-colors duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-[13px] font-medium text-black/60 group-hover:text-[#000000] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.15em] text-[#000000]/[0.08] font-bold group-hover:text-[#000000]/20 transition-colors duration-300">
                      {skill.level}
                    </span>
                  </m.div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
