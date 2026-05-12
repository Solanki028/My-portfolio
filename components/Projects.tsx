"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { MockupFrame } from "./ui/MockupFrame";

export default function Projects() {
  // Show the top 3 projects for maximum impact
  const displayProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section-spacing bg-[#FCF9F5] relative">
      {/* Section Divider */}
      <div className="section-divider" />

      <div className="container-premium pt-10">
        {/* Section Header */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8"
        >
          <div className="max-w-2xl">
            <m.span
              variants={fadeUp}
              className="label-eyebrow mb-5 block"
            >
              Selected Works
            </m.span>
            <m.h2
              variants={fadeUp}
              className="font-heading text-display-sm font-bold text-[#000000]"
            >
              Real results.
              <br />
              Real case studies.
            </m.h2>
          </div>
          <m.div variants={fadeUp}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 text-body-sm font-semibold text-black/60 hover:text-[#000000] transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </m.div>
        </m.div>

        {/* Projects List */}
        <div className="flex flex-col pb-32">
          {displayProjects.map((project, index) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="sticky top-24 z-10 w-full mb-8 lg:mb-12"
            >
              <div className="bg-[#121212] border border-white/10 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col gap-10 lg:gap-14 shadow-2xl relative overflow-hidden group transition-all duration-500">
                
                {/* Subtle Glow Effect */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5FF52]/5 rounded-full blur-[140px] pointer-events-none group-hover:bg-[#C5FF52]/10 transition-colors duration-700" />

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
                  <div className="flex flex-col gap-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-5 py-2 bg-transparent text-white/90 text-[13px] font-medium rounded-full border border-white/20 hover:border-white/40 transition-colors cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-[-0.03em]">
                      {project.title}
                    </h3>
                  </div>

                  {/* Explore Button */}
                  <div className="flex flex-col gap-4 items-start md:items-end shrink-0 mt-4 md:mt-0">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-[15px] font-medium transition-all duration-300 backdrop-blur-md"
                    >
                      Explore project
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </Link>
                    
                    {project.github && (
                       <Link
                         href={project.github}
                         target="_blank"
                         className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white transition-colors px-4"
                       >
                         <Github className="w-4 h-4" />
                         Source code
                       </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 max-w-3xl text-lg md:text-xl leading-relaxed relative z-10 -mt-4">
                  {project.description}
                </p>

                {/* Visual Section */}
                <div className="w-full relative z-10 mt-4 border border-white/10 rounded-xl overflow-hidden bg-[#1A1A1A]">
                  <div className="relative aspect-[16/9] w-full">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 1200px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 font-mono">
                        [Project Visual]
                      </div>
                    )}
                    
                    {/* Gradient overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
