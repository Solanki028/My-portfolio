"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      company: "Astroxhub",
      role: "MERN Stack Developer",
      period: "July 2025 – Present",
      location: "Gurgaon, Haryana",
      description: "Architected a fully dynamic blog platform with role-based CMS and JWT auth, boosting content efficiency by 45% and strengthening session security.",
    },
    {
      company: "Wictronix",
      role: "Full Stack Developer",
      period: "Apr 2024 – Sep 2024",
      location: "Mohali, Punjab",
      description: "Engineered high-performance dashboards and e-commerce interfaces using Next.js, driving a 35% boost in frontend performance and SEO visibility.",
    },
    {
      company: "Freelance / Self-Employed",
      role: "Full-Stack Engineer",
      period: "Mar 2024 – Present",
      location: "Remote",
      description: "Delivered scalable MERN solutions for 3+ clients, optimizing architecture to accelerate development cycles by 30% and reducing auth failures.",
    },
    {
      company: "Brightspark Institute",
      role: "Frontend Developer",
      period: "Jul 2021 – Apr 2022",
      location: "Bhiwadi, Rajasthan · Remote",
      description: "Engineered an educational platform for 500+ students, digitizing 100% of workflows and reducing admin workload by 60% using the MERN stack.",
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Work History
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
              Professional Experience
            </h2>
          </motion.div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border shadow-sm group-hover:border-primary/50 transition-colors">
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">{exp.period}</span>
                    </div>
                    <span className="font-medium text-muted-foreground">{exp.company} • {exp.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
