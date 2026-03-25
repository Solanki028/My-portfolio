"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { MockupFrame } from "./ui/MockupFrame";

export default function Projects() {
  // Show all featured projects except the first one (which is in FeaturedProject component)
  const displayProjects = projects.filter((p) => p.featured).slice(1);

  return (
    <section id="projects" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="max-w-xl">
            <motion.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
              Curated Showcase
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Selected Projects.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#737373] hover:text-white transition-colors"
            >
              View all products 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <MockupFrame 
                type="browser" 
                title={project.id.replace(/-/g, " ")} 
                className="mb-8 group-hover:border-[#333] transition-colors"
              >
                <div className="relative aspect-[16/10] bg-[#0E0E0E] overflow-hidden p-3 pb-0">
                  {project.image ? (
                      <div className="relative w-full h-full rounded-t-lg overflow-hidden border border-[#1A1A1A]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                          quality={100}
                        />
                      </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#111] text-[#222] font-mono text-xs italic">
                      [UI Layout]
                    </div>
                  )}
                </div>
              </MockupFrame>

              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="text-[10px] font-bold text-[#4D4D4D] uppercase tracking-widest mb-1">Problem</p>
                    <p className="text-[13px] text-[#737373] leading-relaxed line-clamp-2 italic">
                      &quot;{project.problem}&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#4D4D4D] uppercase tracking-widest mb-1">Solution</p>
                    <p className="text-[13px] text-[#A3A3A3] leading-relaxed line-clamp-2">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#111] border border-[#1A1A1A] text-[#4D4D4D] text-[10px] font-mono rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-[#1A1A1A]">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white hover:text-white/80 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#4D4D4D] hover:text-white transition-colors"
                    >
                      GitHub <Github className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
