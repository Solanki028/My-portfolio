'use client';

import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
    const { ref, isVisible } = useScrollAnimation(0.2, '-50px');

    const experiences = [
        {
            company: 'Astroxhub',
            role: 'MERN Stack Developer',
            location: 'Gurgaon, Haryana',
            period: 'July 2025 – Present',
            description: 'Architected a fully dynamic blog platform with role-based CMS and JWT auth, boosting content efficiency by 45% and strengthening session security.',
            color: 'from-red-600 to-red-900',
        },
        {
            company: 'Wictronix',
            role: 'Full Stack Developer',
            location: 'Mohali, Punjab',
            period: 'Apr 2024 – Sep 2024',
            description: 'Engineered high-performance dashboards and e-commerce interfaces using Next.js, driving a 35% boost in frontend performance and SEO visibility.',
            color: 'from-red-500 to-red-700',
        },

        {
            company: 'Brightspark Institute',
            role: 'Frontend Developer',
            location: 'Bhiwadi, Rajasthan · Remote',
            period: 'Jul 2021 – Apr 2022',
            description: 'Engineered an educational platform for 500+ students, digitizing 100% of workflows and reducing admin workload by 60% using the MERN stack.',
            color: 'from-red-600 to-red-900',
        },
        {
            company: 'Freelance Full-Stack Developer',
            role: 'Self-Employed',
            location: 'Remote',
            period: 'Mar 2024 – Present',
            description: 'Delivered scalable MERN solutions for 3+ clients, optimizing architecture to accelerate development cycles by 30% and reducing auth failures.',
            color: 'from-zinc-800 to-zinc-600',
        },

    ];

    return (
        <section ref={ref} id="experience" className="py-32 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(229,9,20,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,9,20,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-red-900/10 to-transparent blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-900/10 to-transparent blur-3xl -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black mb-6">
                            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                                Professional
                            </span>{' '}
                            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
                    </div>

                    {/* Timeline Layout */}
                    <div className="relative space-y-8">
                        {/* Vertical Line */}
                        <div className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-zinc-800 transform -translate-x-1/2 transition-all duration-1000 origin-top ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-500 transform -translate-x-1/2 z-10 box-content transition-all duration-500 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
                                >
                                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                                    }`}>
                                    <div
                                        className={`group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 ${isVisible ? (index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'
                                            }`}
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        {/* Role & Company Header */}
                                        <div className="flex flex-col gap-1 mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                                <Briefcase className="w-4 h-4 text-red-500" />
                                                <span className="font-medium text-zinc-300">{exp.company}</span>
                                            </div>
                                        </div>

                                        {/* Metadata (Date & Location) */}
                                        <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-4 font-mono uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                            {exp.description}
                                        </p>

                                        {/* Hover Decoration */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`} />
                                        <div className="absolute -right-1 -bottom-1 w-10 h-10 bg-gradient-to-br from-red-500/20 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Empty Space for Grid Alignment */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
