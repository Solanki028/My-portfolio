"use client";

import { m } from "framer-motion";
import { 
  Code2, Server, Brain, Cloud, 
  Atom, Layout, FileCode2, Wind, Activity, Layers,
  Terminal, Zap, Database, CpuIcon,
  Link2, Bot, Globe, Box, GitBranch
} from "lucide-react";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: <Code2 className="w-5 h-5" />
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    icon: <Server className="w-5 h-5" />
  },
  {
    label: "AI & ML",
    skills: ["LangChain", "Vector DBs", "AI Agents", "OpenAI", "Function Calling"],
    icon: <Brain className="w-5 h-5" />
  },
  {
    label: "DevOps",
    skills: ["AWS", "Docker", "Supabase", "CI/CD", "Vercel"],
    icon: <Cloud className="w-5 h-5" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-32 overflow-hidden">
      <div className="container-premium">
        <div className="mb-24 flex flex-col items-center text-center">
          <m.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif italic text-2xl text-white/20 block mb-6"
          >
            Capabilities
          </m.span>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-display-sm font-bold text-white"
          >
            The technical <span className="font-serif italic font-normal text-[#C5FF52]">toolkit</span>.
          </m.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <m.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C5FF52] text-black">
                {group.icon}
              </div>
              <h3 className="mb-6 font-heading text-xl font-bold text-white">{group.label}</h3>
              <div className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    <div className="h-1 w-1 rounded-full bg-[#C5FF52]" />
                    {skill}
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
