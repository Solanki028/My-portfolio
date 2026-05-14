"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { m } from "framer-motion";
import { projects } from "@/lib/projects";
import { MockupFrame } from "@/components/ui/MockupFrame";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#F5F2EC] pt-[72px]">
        {/* Subtle texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.025] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-premium section-spacing relative">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-20 sm:mb-28"
          >
            <Link
              href="/"
              className="group mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#3D3A35]/60 transition-colors duration-300 hover:text-[#1A1816]"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[#3D3A35]/50">
                  Archive — 2023 / 2025
                </p>
                <h1 className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.025em] text-[#1A1816]">
                  Selected
                  <br />
                  <span className="italic text-[#3D3A35]/70">works.</span>
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-[#3D3A35]/70 sm:text-lg">
                  A curated archive of production-grade applications,
                  experiments, and architectural patterns crafted with care
                  across the years.
                </p>
              </div>

              {/* Count badge */}
              <div className="flex items-baseline gap-3 border-l border-[#1A1816]/10 pl-6">
                <span className="font-heading text-5xl font-medium text-[#1A1816] sm:text-6xl">
                  {String(projects.length).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3D3A35]/50">
                  Projects
                </span>
              </div>
            </div>
          </m.div>

          {/* Divider */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="mb-16 h-px origin-left bg-[#1A1816]/10 sm:mb-20"
          />

          {/* Projects Grid */}
          <div className="grid gap-12 gap-y-20 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
            {projects.map((project, index) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <Link
                  href={project.live}
                  target="_blank"
                  className="relative mb-7 block overflow-hidden"
                >
                  <MockupFrame
                    type="browser"
                    title={project.id + ".sh"}
                    className="border-[#1A1816]/[0.08] bg-[#EDEAE3] shadow-[0_2px_20px_-8px_rgba(26,24,22,0.08)] transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:border-[#1A1816]/[0.14] group-hover:shadow-[0_20px_50px_-15px_rgba(26,24,22,0.15)]"
                  >
                    <div className="relative aspect-[2.2/1] overflow-hidden bg-[#E8E4DC]">
                      {project.image ? (
                        <m.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain brightness-[1.02]"
                            quality={100}
                          />
                        </m.div>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-xs italic text-[#1A1816]/30">
                          [Preview unavailable]
                        </div>
                      )}

                      {/* Hover overlay arrow */}
                      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1816] text-[#F5F2EC] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </MockupFrame>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  {/* Index + Year */}
                  <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#3D3A35]/45">
                    <span>{String(index + 1).padStart(2, "0")} / Project</span>
                    <span>2025</span>
                  </div>

                  <h3 className="mb-3 font-heading text-2xl font-medium leading-tight text-[#1A1816] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="mb-7 line-clamp-2 flex-1 text-[15px] leading-relaxed text-[#3D3A35]/70">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mb-7 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#1A1816]/10 bg-[#F5F2EC] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#3D3A35]/65 transition-colors duration-300 group-hover:border-[#1A1816]/20 group-hover:text-[#1A1816]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 border-t border-[#1A1816]/[0.08] pt-6">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[#1A1816] transition-colors duration-300 hover:text-[#3D3A35]"
                    >
                      View Live
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3D3A35]/50 transition-colors duration-300 hover:text-[#1A1816]"
                      >
                        Source
                        <Github className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Bottom signature */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 flex flex-col items-center gap-4 border-t border-[#1A1816]/10 pt-12 text-center sm:mt-40"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#3D3A35]/40">
              End of archive
            </p>
            <p className="max-w-md text-sm text-[#3D3A35]/60">
              Interested in working together?{" "}
              <Link
                href="/#contact"
                className="font-medium text-[#1A1816] underline decoration-[#1A1816]/20 underline-offset-4 transition-all hover:decoration-[#1A1816]"
              >
                Let&apos;s start a conversation
              </Link>
              .
            </p>
          </m.div>
        </div>
      </main>
      <Footer />
    </>
  );
}