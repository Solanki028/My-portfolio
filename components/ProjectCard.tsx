"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/projects";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute top-0 right-0" />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </div>
          <CardDescription className="text-base text-muted-foreground line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col gap-4">
          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">Problem</span>
              <p className="text-sm text-foreground/80 mt-1 line-clamp-3">{project.problem}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">Solution</span>
              <p className="text-sm text-foreground/80 mt-1 line-clamp-3">{project.solution}</p>
            </div>
          </div>
          
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs font-medium backdrop-blur-sm border-border/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-4 border-t border-border/20 flex gap-3">
          <Button asChild variant="default" size="sm" className="w-full sm:w-auto font-medium">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto font-medium border-border/50 bg-background/50 hover:bg-secondary">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
