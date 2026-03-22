"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              All Projects
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              A comprehensive collection of my engineering work, ranging from full-stack SaaS applicatons to backend CLIs and automation tools.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex gap-3 flex-wrap">
              <span className="px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium">All Frameworks</span>
              <span className="px-4 py-2 rounded-full border border-transparent hover:border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer">Fullstack</span>
              <span className="px-4 py-2 rounded-full border border-transparent hover:border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer">Backend</span>
              <span className="px-4 py-2 rounded-full border border-transparent hover:border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer">Optimization</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
