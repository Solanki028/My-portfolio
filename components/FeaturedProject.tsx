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
    <section id="featured" className="section-spacing bg-[#FCF9F5] relative">
      <div className="section-divider" />

      <div className="container-premium pt-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-20"
        >
          <span className="label-eyebrow mb-5">Highlighted Work</span>
          <h2 className="font-heading text-display-sm font-bold text-[#000000]">
            Engineering for scale<span className="text-black/60">.</span>
          </h2>
        </m.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Content Left */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <m.h3
                variants={fadeUp}
                className="font-heading text-title font-bold text-[#000000] mb-5"
              >
                {featured.title}
              </m.h3>
              <m.p
                variants={fadeUp}
                className="text-body text-black/60 leading-relaxed mb-8"
              >
                {featured.description}
              </m.p>
            </div>

            <m.div variants={fadeUp} className="space-y-4">
              <div className="p-6 bg-white border border-black/[0.08] rounded-2xl">
                <p className="text-eyebrow font-semibold text-black/40 uppercase mb-3">
                  The Challenge
                </p>
                <p className="text-body-sm text-black/60 leading-relaxed italic">
                  &quot;{featured.problem}&quot;
                </p>
              </div>
              <div className="p-6 bg-white border border-black/[0.08] rounded-2xl">
                <p className="text-eyebrow font-semibold text-black/40 uppercase mb-3">
                  The Innovation
                </p>
                <p className="text-body-sm text-black/60 leading-relaxed">
                  {featured.solution}
                </p>
              </div>
            </m.div>

            <m.div variants={fadeUp} className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-white text-black/70 text-[11px] font-medium rounded-full border border-black/[0.08]"
                >
                  {t}
                </span>
              ))}
            </m.div>

            <m.div variants={fadeUp} className="flex items-center gap-4 pt-4">
              <Link
                href={featured.live}
                target="_blank"
                className="btn-primary"
              >
                Launch App <ExternalLink className="w-4 h-4" />
              </Link>
              {featured.github && (
                <Link
                  href={featured.github}
                  target="_blank"
                  className="btn-ghost"
                >
                  Source <Github className="w-4 h-4" />
                </Link>
              )}
            </m.div>
          </m.div>

          {/* Visual Right */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <MockupFrame
              type="browser"
              title={featured.live.replace("https://", "")}
              className="hover:scale-[1.01] transition-all duration-700"
            >
              <div className="relative aspect-[16/10] bg-[#FCF9F5] overflow-hidden">
                 {featured.image ? (
                  <div className="absolute top-0 left-0 w-full h-fit transition-transform duration-[8000ms] ease-in-out group-hover:-translate-y-[calc(100%-600px)]">
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
                    <div className="w-full h-full border border-dashed border-black/[0.08] rounded-xl flex items-center justify-center text-[#000000]/[0.06] font-mono">
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
