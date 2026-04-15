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
    <section id="projects" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6"
        >
          <div className="max-w-xl">
            <m.span variants={fadeUp} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
              Selected Works
            </m.span>
            <m.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Engineering Excellence.
            </m.h2>
          </div>
          <m.div variants={fadeUp}>
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#737373] hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </m.div>
        </m.div>

        <div className="space-y-32">
          {displayProjects.map((project, index) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className={cn(
                "flex flex-col gap-12 lg:gap-20 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-[60%]">
                <MockupFrame 
                  type="browser" 
                  title={project.id.replace(/-/g, " ") + ".sh"} 
                  className="shadow-3xl hover:scale-[1.01] transition-all duration-700"
                >
                  <div className="relative aspect-[2.2/1] bg-[#0A0A0A] overflow-hidden">
                    {project.image ? (
                          <div className="relative w-full h-full overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain brightness-[1.05] contrast-[1.05]"
                              quality={100}
                              priority={index === 0}
                              sizes="(max-width: 1024px) 100vw, 800px"
                            />
                          </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#111] text-[#222] font-mono text-xs italic">
                        [UI Preview]
                      </div>
                    )}
                  </div>
                </MockupFrame>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[#737373] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-5 bg-[#111] border border-[#1F1F1F] rounded-2xl">
                    <p className="text-[10px] font-bold text-[#4D4D4D] uppercase tracking-widest mb-2">Challenge</p>
                    <p className="text-[13px] text-[#A3A3A3] leading-relaxed italic line-clamp-3">
                      &quot;{project.problem}&quot;
                    </p>
                  </div>
                  <div className="p-5 bg-[#111] border border-[#1F1F1F] rounded-2xl">
                    <p className="text-[10px] font-bold text-[#4D4D4D] uppercase tracking-widest mb-2">Outcome</p>
                    <p className="text-[13px] text-[#A3A3A3] leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-[#1A1A1A] text-[#737373] text-[11px] font-medium rounded-full border border-[#2A2A2A]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="group inline-flex items-center gap-2 h-12 px-8 bg-white text-black text-[14px] font-bold rounded-xl hover:bg-[#E5E5E5] transition-all"
                  >
                    Launch <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-[#737373] hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" /> <span>Source</span>
                    </Link>
                  )}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
