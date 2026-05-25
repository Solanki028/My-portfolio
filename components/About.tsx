"use client";

import { m, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function About() {
  return (
    <section id="about" className="bg-[#FCF9F5] py-32 relative overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <m.span variants={fadeUp} className="font-serif italic text-2xl text-black/20 block mb-6">
              The Perspective
            </m.span>
            
            <m.h2 variants={fadeUp} className="font-heading text-display-sm font-bold text-black mb-10 leading-tight">
              Builder mindset. <br />
              <span className="font-serif italic font-normal">Product</span> approach.
            </m.h2>

            <div className="space-y-8 text-body-lg text-black/60 leading-relaxed max-w-xl">
              <m.p variants={fadeUp}>
                I don&apos;t just write code — I build solutions that drive products forward. 
                With a focus on the <span className="text-black font-semibold">Next.js & AI ecosystem</span>, 
                I bridge the gap between complex requirements and high-performance applications.
              </m.p>
              
              <m.p variants={fadeUp}>
                My philosophy is rooted in simplicity and speed. I believe that 
                <span className="font-serif italic text-black mx-1.5 text-2xl font-normal">shipping is a feature</span> 
                and that exceptional user experiences are the foundation of successful products.
              </m.p>

              <m.div variants={fadeUp} className="pt-8 grid grid-cols-2 gap-8 border-t border-black/5">
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-black/20 mb-2">Core Focus</p>
                   <p className="font-heading text-lg font-bold text-black">Product Engineering</p>
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-black/20 mb-2">Expertise</p>
                   <p className="font-heading text-lg font-bold text-black">AI & SaaS Architecture</p>
                </div>
              </m.div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
              <Image
                src="/images/mini%20me.png"
                alt="Priyanshu"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C5FF52]/20 rounded-full blur-3xl -z-10" />
          </m.div>

        </div>
      </div>
    </section>
  );
}
