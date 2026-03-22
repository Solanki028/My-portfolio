"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function About() {
  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const highlights = [
    {
      title: "Full Stack Architecture",
      description: "Expert in modern web technologies including React, Next.js, Node.js, and scaling platforms. Building fast applications with clean, maintainable code architectures.",
    },
    {
      title: "Generative AI Integration",
      description: "Building generative AI copilots and automations that ship faster, reduce manual work, and feel like magic for end users.",
    },
    {
      title: "Product Execution",
      description: "Thriving in fast-paced startup environments, I excel at taking full ownership of projects from concept to deployment with speed and precision.",
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column - Biography */}
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeInUp}>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
                Building the future, <br className="hidden md:block" /> one line at a time.
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                I'm a passionate <strong className="text-foreground">Full Stack Web Developer</strong> with a
                solid foundation in building responsive, scalable, and user-friendly web applications.
                With practical hands-on experience in the MERN stack and Next.js, I bring ideas to life
                through products that deliver impactful digital solutions.
              </p>
              <p>
                My approach is rooted in product engineering—I don't just write code, I solve business problems.
                Whether it's optimizing a slow database query or architecting an AI-powered SaaS tool, I aim for
                robust solutions that can scale globally.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-6 mt-6 border-t border-border/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground mb-1">{stat.number}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex flex-col gap-8 lg:pt-16">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
