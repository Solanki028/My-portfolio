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
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Insider Jobs',
      description: 'Insider Jobs is a job portal web application that connects job seekers with recruiters. Built with the MERN stack, it features secure authentication, user and recruiter dashboards, job posting, and application tracking. The platform simplifies the hiring process with an intuitive UI and real-time updates.',
      image: 'https://www.templateshub.net/uploads/1539959384%20job%20Board.jpg',
      tech: ['React','Materail-UI', 'Redux', 'Node.js', 'Express.Js','Clerk', 'MongoDB'],
      category: 'web', // Changed to 'web' for consistency with common web projects
      github: 'https://github.com/Solanki028/InsiderJobs',
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
    {
      title: 'Flix-Chill (Video Streaming Platform)', // Adjusted title for readability
      description: 'Video Streaming Platform is a MERN-based web app for seamless video playback with user authentication and a clean, responsive UI.',
      image: 'https://filedb.experts-exchange.com/incoming/2015/06_w27/921333/Netflix.jpg',
      tech: ['React.js','Redux', 'Express.js', 'Node.js', 'Tailwind CSS', 'MongoDB','Material-UI'], // Corrected 'Talwind' to 'Tailwind'
      category: 'web',
      github: 'https://github.com/Solanki028/Netflix_', // **Ensure this is your actual repo URL**
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
    {
      title: 'Multiple Page React Website',
      description: 'Multiple Page React Website is a responsive, multi-route web app built with React Router, featuring clean navigation and dynamic content across pages.',
      image: 'https://i.ytimg.com/vi/0dOSLhPzSGI/maxresdefault.jpg',
      tech: ['React', 'Redux', 'Material-UI'], // Removed MongoDB as it's not typically for frontend-only
      category: 'web',
      github: 'https://github.com/Solanki028/Multipage-react-dynamic-website', // **Ensure this is your actual repo URL**
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
    {
      title: 'Expense-Tracker Application',
      description: 'Expense Tracker is a full-stack web app built with the MERN stack that helps users manage budgets, track expenses, and visualize spending with interactive charts.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVj18uc-Qjbi_XnW9EQGV8JGmb7ggqgxR_A&s',
      tech: ['React.js','Express.js', 'Node.js','MongoDB','Tailwind-CSS','Material-UI'], // Corrected 'Talwind' to 'Tailwind'
      category: 'web', // Changed to 'web' as it's a web app
      github: 'https://github.com/Solanki028/Expense-Tracker', // **Ensure this is your actual repo URL**
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
    {
      title: 'Weather Detection Platform', // Adjusted title
      description: 'Weather Detection App is a React-based web app that fetches real-time weather data using external APIs, displaying temperature, humidity, and conditions for any city',
      image: 'https://img.freepik.com/premium-vector/weather-forecast-widget-collection-icon-mobile-application-program-with-rain-cloud-sun-snowing-windy-sunlight-symbol-vector-illustration-concept_38364-159.jpg ',
      tech: ['JavaScript', 'React', 'Material-UI'],
      category: 'web', // Changed to 'web'
      github: 'https://github.com/Solanki028/weather-app-react', // **Ensure this is your actual repo URL**
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
    {
      title: 'Todo-App',
      description: 'ToDo App is a simple and responsive React application that lets users add, edit, and delete tasks to manage daily activities efficiently.',
      image: 'https://images.template.net/293459/weekly-to-do-list-template-26tvx.jpg',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js'], // Reordered for common MERN stack naming
      category: 'web',
      github: 'https://github.com/Solanki028/Todo-App-react', // **Ensure this is your actual repo URL**
      demo: '#', // Keep as '#' if no live demo, or provide URL
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Code },
    // Only include filters for categories you actually have projects in.
    // If you plan to add mobile, AI, or blockchain projects, uncomment/add these:
    // { id: 'mobile', label: 'Mobile Apps', icon: Zap },
    // { id: 'ai', label: 'AI/ML', icon: Brain },
    // { id: 'blockchain', label: 'Blockchain', icon: Database },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tech-gradient">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions and creative implementations across various technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900'
                    : 'tech-border hover:tech-glow text-gray-300'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index} // Consider a more stable key if project order can change (e.g., project.title if unique)
                className={`group tech-border rounded-xl overflow-hidden hover:tech-glow transition-all duration-300 ${
                  isVisible ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 space-x-2">
                    {/* GitHub Link for individual project - ADDED TARGET AND REL */}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank" // <--- Ensures it opens in a new tab
                        rel="noopener noreferrer" // <--- Security best practice
                        className="p-2 bg-slate-900/80 rounded-full hover:bg-cyan-500/20 transition-all duration-300"
                        title={`View ${project.title} on GitHub`} // Good for accessibility
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {/* Demo Link for individual project - ADDED TARGET AND REL */}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank" // <--- Ensures it opens in a new tab
                        rel="noopener noreferrer" // <--- Security best practice
                        className="p-2 bg-slate-900/80 rounded-full hover:bg-cyan-500/20 transition-all duration-300"
                        title={`View ${project.title} Live Demo`} // Good for accessibility
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button (already correct) */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Solanki028?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button inline-flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}