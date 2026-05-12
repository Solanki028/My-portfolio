"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { m } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { MockupFrame } from "@/components/ui/MockupFrame";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[72px] bg-[#FCF9F5]">
        <div className="container-premium section-spacing">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-body-sm font-semibold text-black/50 hover:text-[#000000] transition-colors duration-300 mb-10"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <h1 className="font-heading text-display font-bold text-[#000000] mb-8">
              All Projects<span className="text-black/60">.</span>
            </h1>
            <p className="text-body-lg text-black/60 max-w-2xl leading-relaxed">
              A comprehensive archive of production-grade applications,
              experiments, and architectural patterns developed throughout my
              career.
            </p>
          </m.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
            {projects.map((project, index) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <MockupFrame
                  type="browser"
                  title={project.id + ".sh"}
                  className="mb-8 hover:border-black/[0.12] transition-colors duration-500"
                >
                  <div className="relative aspect-[2.2/1] bg-[#F0EDEA] overflow-hidden">
                    {project.image ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain brightness-[1.05] contrast-[1.05]"
                          quality={100}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#111] text-[#000000]/[0.06] font-mono text-xs italic">
                        [UI Preview]
                      </div>
                    )}
                  </div>
                </MockupFrame>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-semibold text-[#000000] mb-3 group-hover:text-[#000000]/90 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body-sm text-black/60 leading-relaxed line-clamp-2 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-white border border-black/[0.06] text-black/50 text-[10px] font-mono rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-6 border-t border-black/[0.06]">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-caption font-semibold text-[#000000] hover:text-[#000000]/80 transition-colors duration-300"
                    >
                      Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-caption font-semibold text-black/40 hover:text-[#000000] transition-colors duration-300"
                      >
                        Source <Github className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
