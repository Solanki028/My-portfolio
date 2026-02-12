'use client';

import { useState } from 'react';
import { ExternalLink, Github, Zap, Code, Database, Brain, Rocket, Globe, Star, Eye, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, isVisible } = useScrollAnimation(0.1, '-50px');

  const projects = [
    {
      title: 'Fully Dynamic Blog Website',
      description: 'A sophisticated, modern blog platform featuring personalized email subscriptions, intelligent user interest tracking based on likes, comments, and reading time, plus a content paywall system for non-subscribers. Includes a multilingual admin dashboard with rich text editor.',
      image: 'https://cdn.dribbble.com/userupload/17310275/file/original-fbd24572fb98ec395057d4ea6ccbfb40.png?format=webp&resize=400x300&vertical=center',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Brevo API', 'node-cron'],
      category: 'web',
      github: 'https://github.com/Solanki028/Astroxhub-Blogs',
      demo: 'https://www.innvibs.com',
      featured: true,
      color: 'from-red-600 to-red-900'
    },

    {
      title: "Task Generator AI",
      description: "An intelligent project planning tool that uses AI to generate comprehensive specifications, user stories, and engineering tasks from a simple id. Features a drag-and-drop interface, real-time status checks, and markdown export functionality.",
      image: "/images/task ai.png", // High-tech AI abstract image
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "OpenAI / Gemini"],
      category: "web",
      github: "https://github.com/Solanki028/Task-Generator-AI",
      demo: "https://taskaiflow.netlify.app/",
      featured: true,
      color: "from-violet-600 to-indigo-900"
    },
    {
      title: "Velora Spa & Massage",
      description: "A modern, full-stack wellness website for authentic Thai massage and spa services. Features a beautiful customer-facing frontend with comprehensive CMS system for seamless content management and booking functionality.",
      image: "https://media.istockphoto.com/id/117145821/photo/woman-getting-a-massage-at-tropical-spa.jpg?s=2048x2048&w=is&k=20&c=T-GVeeRSNyTOTb8ahGwhpWwZ7s8oA4DD7gTuBjeSQe0=",
      tech: ["Next.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      github: "https://github.com/Solanki028/serene-zen-booking",
      demo: "https://veloraaspa.netlify.app/",
      featured: true,
      color: 'from-red-700 to-red-950'
    },


    {
      title: "ILP: Internship Learning Platform",
      description: "A comprehensive Learning Management System (LMS) designed to bridge the gap between students and mentors. Features role-based access control, interactive course management, automated PDF certification, and a secure admin dashboard for total platform oversight.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "PDFKit"],
      category: "web",
      github: "https://github.com/Solanki028/TDD-intersnhip-learning-platform",
      demo: "https://mytutorx.netlify.app/",
      featured: true,
      color: 'from-red-600 to-black'
    },
    {
      title: 'NWB Fintech Infrastructure',
      description: 'A comprehensive, enterprise-grade fintech platform demonstrating next-generation payment solutions. Features include advanced UPI collections, real-time analytics dashboards, global card processing simulations, and banking-as-a-service modules. Built with a focus on high-performance animations, premium UI/UX, and responsive design.',
      image: 'https://vaultpayy.netlify.app/nwb.png',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI', 'Recharts', 'Vite'],
      category: 'web',
      github: 'https://github.com/Solanki028/crimson-flow',
      demo: 'https://vaultpayy.netlify.app/',
      featured: true,
      color: 'from-blue-600 to-indigo-900'
    },
    {
      title: "TaskFlow: AI-Powered Trello Clone",
      description: "A modern, full-stack task management platform with intelligent AI recommendations. Features drag-and-drop Kanban boards, real-time collaboration, and smart suggestions that analyze card content to recommend due dates, list movements, and related task groupings.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "@dnd-kit"],
      category: "web",
      github: "https://github.com/Solanki028/TaskFlow",
      demo: "https://trellox.netlify.app/",
      featured: false,
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Flix-Chill Video Streaming Platform',
      description: 'Netflix-inspired video streaming platform built with MERN stack. Features user authentication, video playback, content management, and responsive UI design with Material-UI components.',
      image: 'https://filedb.experts-exchange.com/incoming/2015/06_w27/921333/Netflix.jpg',
      tech: ['React.js', 'Redux', 'Express.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/Solanki028/Netflix_',
      demo: 'https://flixchillv1.netlify.app/',
      featured: false,
      color: 'from-red-700 to-red-950'
    },
    {
      title: 'JK Designs Portfolio',
      description: 'A premium, high-performance portfolio for a creative design studio. Features a fully custom Admin Dashboard for managing site content and images in real-time, dynamic multi-image carousels, and a sleek dark-mode aesthetic with red accents, all optimized for SEO and speed.',
      image: '/images/jk_digital.png',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/Solanki028/client-porfolio',
      demo: 'https://zencraftx.netlify.app/',
      featured: false,
      color: 'from-red-600 to-red-900'
    },
    {
      title: 'Insider Jobs Portal',
      description: 'Professional job portal connecting job seekers with recruiters. Features secure authentication, user dashboards, job posting, application tracking, and real-time updates with intuitive UI.',
      image: 'https://www.templateshub.net/uploads/1539959384%20job%20Board.jpg',
      tech: ['React', 'Material-UI', 'Redux', 'Node.js', 'Express.js', 'Clerk', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/Solanki028/InsiderJobs',
      demo: '#',
      featured: false,
      color: 'from-red-500 to-red-800'
    },
    {
      title: 'Expense Tracker App',
      description: 'Comprehensive expense tracking application with budget management, spending visualization through interactive charts, and financial insights. Built with MERN stack for optimal performance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVj18uc-Qjbi_XnW9EQGV8JGmb7ggqgxR_A&s',
      tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
      category: 'web',
      github: 'https://github.com/Solanki028/Expense-Tracker',
      demo: '#',
      featured: false,
      color: 'from-red-600 to-zinc-800'
    },
    {
      title: 'Weather Detection Platform',
      description: 'Real-time weather application fetching data from external APIs. Displays temperature, humidity, conditions, and forecasts for any city worldwide with beautiful visual representations.',
      image: 'https://img.freepik.com/premium-vector/weather-forecast-widget-collection-icon-mobile-application-program-with-rain-cloud-sun-snowing-windy-sunlight-symbol-vector-illustration-concept_38364-159.jpg',
      tech: ['JavaScript', 'React', 'Material-UI', 'Weather API'],
      category: 'web',
      github: 'https://github.com/Solanki028/weather-app-react',
      demo: '#',
      featured: false,
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Modern Todo Application',
      description: 'Feature-rich task management application with add, edit, delete functionality, category organization, and persistent storage. Clean, responsive design optimized for productivity.',
      image: 'https://images.template.net/293459/weekly-to-do-list-template-26tvx.jpg',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
      category: 'web',
      github: 'https://github.com/Solanki028/Todo-App-react',
      demo: '#',
      featured: false,
      color: 'from-red-800 to-black'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe, color: 'from-red-600 to-red-900' },
    { id: 'web', label: 'Web Apps', icon: Code, color: 'from-red-500 to-red-700' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section ref={ref} id="projects" className="py-32 relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-red-950/20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,9,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,9,20,0.03)_1px,transparent_1px)] bg-[size:120px_120px]" />

      {/* Floating Geometric Elements - Red/Black */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-red-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-red-800/20 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-red-400/20 rotate-12 animate-bounce-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Featured Projects
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full mb-6" />
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions and creative implementations across various technologies
            </p>
          </div>

          {/* Featured Projects Spotlight */}
          <div className="mb-20">
            <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-red-500" />
                Spotlight Projects
              </h3>
              <p className="text-zinc-400">My most innovative and impactful work</p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-left-top group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full">
                      <Star className="w-4 h-4 text-white" />
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/90 rounded-full hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm"
                          title={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/90 rounded-full hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm"
                          title={`View ${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full border border-white/10">
                      <span className="text-red-400 text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-sm rounded-full border border-zinc-700 hover:border-red-500/50 hover:text-red-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-zinc-700/50 text-zinc-400 text-sm rounded-full">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-4">
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 -z-10`} />
                </div>
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group inline-flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-500 font-semibold ${activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg shadow-red-500/25`
                  : 'bg-zinc-900/40 backdrop-blur-lg border border-white/10 text-zinc-300 hover:bg-white/10 hover:border-red-400/30 hover:text-white'
                  }`}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-red-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-left-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/90 rounded-full hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm"
                        title={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/90 rounded-full hover:bg-red-500/20 transition-all duration-300 backdrop-blur-sm"
                        title={`View ${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full border border-white/10">
                    <span className="text-red-400 text-xs font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-1 group-hover:text-red-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700 hover:border-red-400/50 hover:text-red-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-zinc-700/50 text-zinc-500 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center mt-16">
            <div className={`bg-gradient-to-r from-red-500/10 to-red-900/10 backdrop-blur-xl border border-red-400/20 rounded-3xl p-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <Code className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-4">Want to See More?</h4>
              <p className="text-zinc-300 mb-6">
                Explore my complete portfolio with additional projects, experiments, and contributions
              </p>
              <a
                href="https://github.com/Solanki028?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </section>
  );
}