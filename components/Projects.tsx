"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <m.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="sticky top-[15vh] mb-[10vh] w-full"
    >
      <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#121212] p-8 md:p-16 lg:p-20 shadow-2xl">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />
        
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-serif italic text-2xl text-white/20">0{index + 1}</span>
              <div className="h-px w-8 bg-white/10" />
              <div className="flex gap-2">
                {project.tech.slice(0, 2).map((t: string) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-[#C5FF52]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="max-w-md text-lg leading-relaxed text-white/50">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={project.live}
                target="_blank"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Launch App
                <ExternalLink className="h-4 w-4" />
              </Link>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Source
                </Link>
              )}
            </div>
          </div>

          <m.div 
            style={{ y }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-2xl"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index < 2}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white/10">
                [Visual]
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </m.div>
        </div>
      </div>
    </m.div>
  );
}

export default function Projects() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="bg-[#FCF9F5] py-32">
      <div className="container-premium">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-serif italic text-2xl text-black/20 block mb-4">Selected Work</span>
            <h2 className="font-heading text-display-sm font-bold text-black leading-none">
              Building products that <br />
              <span className="font-serif italic font-normal">matter</span> and scale.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="relative">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
