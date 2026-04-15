"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/projects";
import { MockupFrame } from "./ui/MockupFrame";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <section id="featured" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4">
            Highlighted Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Engineering for Scale.
          </h2>
        </m.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Content Left */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <m.h3 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
                {featured.title}
              </m.h3>
              <m.p variants={fadeUp} className="text-[#737373] text-base leading-relaxed mb-6">
                {featured.description}
              </m.p>
            </div>

            <m.div variants={fadeUp} className="space-y-4">
              <div className="p-4 bg-[#111] border border-[#1F1F1F] rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D] mb-2">The Challenge</p>
                <p className="text-sm text-[#A3A3A3] leading-relaxed italic">&quot;{featured.problem}&quot;</p>
              </div>
              <div className="p-4 bg-[#111] border border-[#1F1F1F] rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#4D4D4D] mb-2">The Innovation</p>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">{featured.solution}</p>
              </div>
            </m.div>

            <m.div variants={fadeUp} className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-[#1A1A1A] text-[#737373] text-[11px] font-medium rounded-full border border-[#2A2A2A]">
                  {t}
                </span>
              ))}
            </m.div>

            <m.div variants={fadeUp} className="flex items-center gap-4 pt-4">
              <Link
                href={featured.live}
                target="_blank"
                className="inline-flex items-center gap-2 h-11 px-6 bg-white text-black text-[13px] font-bold rounded-lg hover:bg-[#E5E5E5] transition-all"
              >
                Launch App <ExternalLink className="w-4 h-4" />
              </Link>
              {featured.github && (
                <Link
                  href={featured.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 h-11 px-6 border border-[#1A1A1A] text-white text-[13px] font-bold rounded-lg hover:bg-[#111] transition-all"
                >
                  Source <Github className="w-4 h-4" />
                </Link>
              )}
            </m.div>
          </m.div>

          {/* Visual Right */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <MockupFrame type="browser" title={featured.live.replace("https://", "")} className="hover:scale-[1.01] transition-all duration-700 shadow-3xl">
              <div className="relative aspect-[16/10] bg-[#0E0E0E] overflow-hidden">
                {featured.image ? (
                  <div className="absolute top-0 left-0 w-full h-fit transition-transform duration-[8s] ease-in-out group-hover:-translate-y-[calc(100%-600px)]">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      width={1200}
                      height={1800}
                      className="w-full h-auto brightness-[1.02] contrast-[1.02]"
                      priority
                      quality={95}
                    />
                  </div>
                ) : (
                   <div className="w-full h-full flex items-center justify-center p-12">
                      <div className="w-full h-full border border-dashed border-[#1F1F1F] rounded-lg flex items-center justify-center text-[#1F1F1F] font-mono">
                        [Project Visualization]
                      </div>
                   </div>
                )}
              </div>
            </MockupFrame>
          </m.div>
        </div>
      </div>
    </section>
  );
}
