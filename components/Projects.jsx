'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Zap, Code, Database, Brain } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Reduced from 0.3 to 0.1 for better mobile detection
        rootMargin: '50px' // Added margin to trigger earlier
      }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    // Fallback: Set visible after 2 seconds if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const projects = [
    {
      title: 'Insider Jobs',
      description: 'Insider Jobs is a job portal web application that connects job seekers with recruiters. Built with the MERN stack, it features secure authentication, user and recruiter dashboards, job posting, and application tracking. The platform simplifies the hiring process with an intuitive UI and real-time updates.',
      image: 'https://www.templateshub.net/uploads/1539959384%20job%20Board.jpg',
      tech: ['React', 'Material-UI', 'Redux', 'Node.js', 'Express.js', 'Clerk', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/Solanki028/InsiderJobs',
      demo: '#',
    },
    {
      title: 'Flix-Chill (Video Streaming Platform)',
      description: 'Video Streaming Platform is a MERN-based web app for seamless video playback with user authentication and a clean, responsive UI.',
      image: 'https://filedb.experts-exchange.com/incoming/2015/06_w27/921333/Netflix.jpg',
      tech: ['React.js', 'Redux', 'Express.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/Solanki028/Netflix_',
      demo: 'https://flixchillv1.netlify.app/',
    },
    {
      title: 'Multiple Page React Website',
      description: 'Multiple Page React Website is a responsive, multi-route web app built with React Router, featuring clean navigation and dynamic content across pages.',
      image: 'https://i.ytimg.com/vi/0dOSLhPzSGI/maxresdefault.jpg',
      tech: ['React', 'Redux', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/Solanki028/Multipage-react-dynamic-website',
      demo: '#',
    },




    {
      title: 'Fully Dynamic Blog Website',
      description: 'A sophisticated, modern blog platform featuring a personalized email subscription system, implicit user interest tracking based on likes, comments, and reading time, and a content paywall for non-subscribers. Includes a multilingual admin dashboard with a rich text editor for seamless content management.',
      image: 'https://w3layouts.b-cdn.net//wp-content/uploads/2022/07/Blog-Store-Website-Template-768x480.jpg',

      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Brevo API', 'node-cron'],
      category: 'web',
      github: 'https://github.com/Solanki028/Astroxhub-Blogs', // <-- REPLACE WITH YOUR ACTUAL GITHUB REPO URL
      demo: 'https://www.innvibs.com', // <-- REPLACE WITH YOUR ACTUAL LIVE DEMO URL
    },

    {
      title: 'Expense-Tracker Application',
      description: 'Expense Tracker is a full-stack web app built with the MERN stack that helps users manage budgets, track expenses, and visualize spending with interactive charts.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVj18uc-Qjbi_XnW9EQGV8JGmb7ggqgxR_A&s',
      tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/Solanki028/Expense-Tracker',
      demo: '#',
    },
    {
      title: 'Weather Detection Platform',
      description: 'Weather Detection App is a React-based web app that fetches real-time weather data using external APIs, displaying temperature, humidity, and conditions for any city',
      image: 'https://img.freepik.com/premium-vector/weather-forecast-widget-collection-icon-mobile-application-program-with-rain-cloud-sun-snowing-windy-sunlight-symbol-vector-illustration-concept_38364-159.jpg',
      tech: ['JavaScript', 'React', 'Material-UI'],
      category: 'web',
      github: 'https://github.com/Solanki028/weather-app-react',
      demo: '#',
    },
    {
      title: 'Todo-App',
      description: 'ToDo App is a simple and responsive React application that lets users add, edit, and delete tasks to manage daily activities efficiently.',
      image: 'https://images.template.net/293459/weekly-to-do-list-template-26tvx.jpg',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
      category: 'web',
      github: 'https://github.com/Solanki028/Todo-App-react',
      demo: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Code },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tech-gradient">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
              Showcasing innovative solutions and creative implementations across various technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900 font-semibold'
                    : 'tech-border hover:tech-glow text-gray-300 hover:text-white'
                  }`}
              >
                <filter.icon className="w-3 h-3 md:w-4 md:h-4" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group tech-border rounded-xl overflow-hidden hover:tech-glow transition-all duration-500 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                  {/* Action Buttons */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-900/90 rounded-full hover:bg-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
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
                        className="p-2 bg-slate-900/90 rounded-full hover:bg-green-500/20 transition-all duration-300 backdrop-blur-sm"
                        title={`View ${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full">
                    <span className="text-cyan-400 text-xs font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-slate-700 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 md:px-3 py-1 bg-slate-700 text-gray-400 text-xs rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 md:mt-12">
            <a
              href="https://github.com/Solanki028?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button inline-flex items-center space-x-2 text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}