"use client";

import { m } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    company: "Astroxhub",
    role: "Full Stack Engineer",
    period: "jan 2025 - Present",
    location: "Gurgaon, India",
    tone: "bg-[#C5FF52]",
    summary: "Shipping production features across UI, APIs, auth, and database layers.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT"],
    impact: [
      "Built and shipped full-stack features using React.js, Next.js, and Node.js across UI, APIs, and database layers.",
      "Designed scalable REST APIs and optimized backend performance, reducing latency by 30%.",
      "Developed responsive high-performance UI components, improving experience and load time by 25%.",
      "Implemented JWT authentication with role-based access control and optimized MongoDB queries with indexing.",
    ],
  },
  {
    company: "Wictronix",
    role: "Full Stack Developer",
    period: "Apr 2024 - Sep 2024",
    location: "Mohali, India",
    tone: "bg-[#5CE1E6]",
    summary: "Built SaaS dashboard flows with cleaner SSR and frontend-backend data paths.",
    tags: ["React", "Next.js", "SSR", "APIs"],
    impact: [
      "Developed full-stack applications using React.js, Next.js, and backend APIs for SaaS dashboards.",
      "Implemented server-side rendering and optimized frontend-backend data flow.",
      "Improved application performance through query optimization and efficient API handling.",
      "Debugged and resolved cross-layer issues across frontend, backend, and database systems.",
    ],
  },
  {
    company: "Brightspark Institute",
    role: "Full Stack Developer",
    period: "Jul 2023 - Dec 2023",
    location: "Bhiwadi, Rajasthan / Remote",
    tone: "bg-[#FF6B6B]",
    summary: "Digitized academic workflows for 500+ students with custom portals and dashboards.",
    tags: ["MERN", "Payments", "Analytics", "Cloud"],
    impact: [
      "Engineered and maintained an educational platform serving 500+ students.",
      "Built course enrollment, results dashboards, attendance trackers, and homework management modules.",
      "Integrated third-party APIs for payments, email automation, and analytics.",
      "Deployed backend services on cloud environments for reliable uptime and scaling.",
    ],
  },
  {
    company: "Freelance Full-Stack Developer",
    role: "Self-Employed",
    period: "Mar 2024 - Present",
    location: "Remote",
    tone: "bg-white",
    summary: "End-to-end delivery for MERN apps, deployments, production fixes, and cloud assets.",
    tags: ["MERN", "AWS EC2", "S3", "Debugging"],
    impact: [
      "Built scalable MERN applications with structured backend architecture and responsive frontend UI.",
      "Deployed applications on AWS EC2 and managed assets using S3.",
      "Handled production issues including debugging, logging, and data inconsistencies.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden bg-[#FCF9F5]">
      <div className="section-divider" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute right-[-5rem] top-20 hidden h-40 w-72 rotate-[8deg] border-2 border-black bg-[#C5FF52] shadow-[-10px_10px_0_#121212] lg:block" />

      <div className="container-premium relative z-10 pt-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.45fr)] lg:items-end"
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#121212] shadow-[5px_5px_0_#121212]">
              <Sparkles className="h-4 w-4 text-[#FF6B6B]" />
              Professional Journey
            </span>
            <h2 className="max-w-4xl font-heading text-[clamp(2.5rem,7vw,5.8rem)] font-black uppercase leading-[0.9] tracking-normal text-[#121212]">
              Experience
              <span className="text-black/25"> timeline.</span>
            </h2>
          </div>

          <div className="border-2 border-black bg-[#121212] p-5 text-white shadow-[8px_8px_0_#C5FF52]">
            <p className="text-[12px] font-black uppercase tracking-[0.16em] text-white/45">
              Current mode
            </p>
            <p className="mt-2 font-heading text-2xl font-bold leading-tight">
              Product engineering with full-stack ownership.
            </p>
          </div>
        </m.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-[3px] bg-[#121212] md:block" />

          <div className="space-y-6 md:pl-14">
            {experiences.map((exp, index) => (
              <m.article
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative border-2 border-black bg-white p-5 shadow-[8px_8px_0_#121212] transition-transform duration-300 hover:-translate-y-1 sm:p-6 lg:p-7"
              >
                <div className="absolute -left-[3.85rem] top-7 hidden h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-[#FCF9F5] md:flex">
                  <span className={`h-4 w-4 rounded-full border-2 border-black ${exp.tone}`} />
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(230px,0.4fr)_minmax(0,1fr)] lg:gap-8">
                  <div className="min-w-0">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className={`inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#121212] ${exp.tone}`}>
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="font-heading text-[clamp(1.55rem,3vw,2.3rem)] font-black leading-none tracking-normal text-[#121212]">
                      {exp.role}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-black/60">
                      {exp.summary}
                    </p>

                    <div className="mt-5 grid gap-2 text-[12px] font-bold text-black/55">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-black/35" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-black/35" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-[11px] font-bold text-black/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="grid gap-3">
                      {exp.impact.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#121212]" />
                          <p className="text-[14px] leading-relaxed text-black/68">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
              </m.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
