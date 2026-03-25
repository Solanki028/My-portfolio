"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Astroxhub",
    role: "Full Stack Engineer",
    period: "July 2025 — Present",
    location: "Gurgaon, India",
    impact: [
      "Built and shipped full-stack features using React.js, Next.js, and Node.js across UI, APIs, and database layers.",
      "Designed scalable REST APIs and optimized backend performance reducing latency by 30%.",
      "Developed responsive and high-performance UI components improving user experience and load time by 25%.",
      "Optimized MongoDB queries using indexing and efficient data modeling.",
      "Implemented authentication and authorization using JWT with role-based access control.",
      "Collaborated with cross-functional teams to deliver end-to-end product features."
    ],
  },
  {
    company: "Wictronix",
    role: "Full Stack Developer",
    period: "Apr 2024 — Sep 2024",
    location: "Mohali, India",
    impact: [
      "Developed full-stack applications using React.js, Next.js, and backend APIs for SaaS dashboards.",
      "Implemented server-side rendering (SSR) and optimized frontend-backend data flow.",
      "Improved application performance through query optimization and efficient API handling.",
      "Debugged and resolved cross-layer issues across frontend, backend, and database systems."
    ],
  },
  {
    company: "Freelance Full-Stack Developer",
    role: "Self-Employed",
    period: "Mar 2024 — Present",
    location: "Remote",
    impact: [
      "Built scalable MERN applications with structured backend architecture and responsive frontend UI.",
      "Deployed applications on AWS EC2 and managed assets using S3.",
      "Handled production issues including debugging, logging, and data inconsistencies."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#0B0B0B] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-20"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Experience.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid md:grid-cols-12 gap-8 p-8 rounded-2xl border border-[#1A1A1A] bg-[#0E0E0E] hover:border-[#262626] transition-all group"
            >
              {/* Left Column: Role & Company */}
              <div className="md:col-span-4">
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1A1A] bg-[#111] w-fit">
                    <Briefcase className="w-3 h-3 text-[#4D4D4D]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#737373]">{exp.period}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-md font-medium text-[#4D4D4D] mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] text-[#333]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Impact */}
              <div className="md:col-span-8">
                 <ul className="space-y-4">
                    {exp.impact.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0 group-hover:bg-white/40 transition-colors" />
                         <p className="text-sm text-[#737373] leading-relaxed group-hover:text-[#A3A3A3] transition-colors">
                           {bullet}
                         </p>
                      </li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
