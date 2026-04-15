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
      <main className="flex-1 pt-24 pb-32 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#4D4D4D] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              All Projects.
            </h1>
            <p className="text-[#737373] text-lg max-w-2xl leading-relaxed">
              A comprehensive archive of production-grade applications, experiments, and architectural patterns developed throughout my career.
            </p>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {projects.map((project, index) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                <MockupFrame 
                  type="browser" 
                  title={project.id + ".sh"} 
                  className="mb-8 hover:border-[#333] transition-colors"
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
                      />
                    </div>
                  ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#111] text-[#222] font-mono text-xs italic">
                        [UI Preview]
                      </div>
                    )}
                  </div>
                </MockupFrame>

                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[13px] text-[#737373] leading-relaxed line-clamp-2 mb-6 flex-1">
                    {project.description}
                  </p>

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
                      Project <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#4D4D4D] hover:text-white transition-colors"
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
