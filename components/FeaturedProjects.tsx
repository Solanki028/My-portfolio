"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="featured-projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Selected Work
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            A look at my most impactful work, where I've tackled complex problems with robust, scalable software architecture.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 flex justify-center"
        >
          <Button asChild size="lg" variant="outline" className="h-12 px-8 font-medium">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
