export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [


  {
    id: "nwb-fintech",
    title: "NWB Fintech Infrastructure",
    description: "A comprehensive, enterprise-grade fintech platform demonstrating next-generation payment solutions and real-time analytics.",
    problem: "Legacy banking interfaces fail to provide modern features like zero-latency UI dashboards and clear global card processing views.",
    solution: "Developed a Next-Gen UI using React, Shadcn, and Framer Motion, demonstrating advanced UPI collections and banking-as-a-service modules.",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Recharts", "Node.js"],
    github: "https://github.com/Solanki028/crimson-flow",
    live: "https://vaultpayy.netlify.app/",
    featured: true,
    image: "/images/nwb.png",
  },

  {
    id: "blog-platform",
    title: "Fully Dynamic Blog Website",
    description: "A sophisticated, modern blog platform featuring personalized email subscriptions, intelligent user interest tracking, and a content paywall system.",
    problem: "Content creators struggle to retain audiences and monetize without forcing users onto rigid third-party platforms.",
    solution: "Architected a full-stack platform with intelligent user tracking, targeted email subscriptions via Brevo, and a built-in paywall managed by a multilingual admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Brevo API", "Redux", "JWT"],
    github: "https://github.com/Solanki028/Astroxhub-Blogs",
    live: "https://www.innvibs.com",
    featured: true,
    image: "/images/innvibs.png",
  },

  {
    id: "travelx-booking",
    title: "TravelX Booking Engine",
    description: "A premium, full-stack travel booking platform providing seamless intercity bus ticketing and comprehensive domestic and international flight reservations.",
    problem: "Travelers often face fragmented, overly complex interfaces and slow processing times when attempting to compare pricing and secure multi-modal transit options on legacy platforms.",
    solution: "Engineered a responsive Next.js frontend with an intuitive multi-tab search widget, backed by a robust RESTful Node.js API, MongoDB database, and a secure internal Admin Portal for managing transport inventory.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS 4.0", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Solanki028/F-B-booking-platform",
    live: "https://f-b-booking-platform-one.vercel.app",
    featured: true,
    image: "/images/image copy.png", // Update this with your actual image path later
  },


  {
    id: "veridian-wealth",
    title: "VeridianWealth Research Portal",
    description: "An institutional-grade investment research and advisory platform delivering sophisticated market insights and fundamental analysis.",
    problem: "Individual investors often lack access to the high-conviction, professional-grade research reports and portfolio diagnoses reserved for institutions.",
    solution: "Built a premium Research & Advisory portal using Next.js 15 and Tailwind CSS 4.0, featuring thematic deep-dives, automated consultation routing, and a seamless institutional UX.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS 4.0", "Framer Motion", "EmailJS", "Lucide React"],
    github: "https://github.com/Solanki028/Veridianwealth---frontend-Focused-Financial-app",
    live: "https://veridianwealth-frontend-focused-fin.vercel.app/",
    featured: true,
    image: "/images/image.png",
  },

  {
    id: "astroxadv-legal-platform",
    title: "Astroxadv | Premier Law Firm Portal",
    description: "A highly optimized, full-stack law firm web application featuring dynamic practice areas, corporate blogging, and a secure custom admin dashboard.",
    problem: "Creating a high-performance online presence for a legal firm that requires instant page load speeds, flawless SEO, and an easy-to-use secure backend.",
    solution: "Architected a custom MERN-stack solution leveraging Next.js App Router for maximum performance, coupled with a robust Node.js backend featuring JWT and Cloudinary.",
    tech: ["Next.js 14", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Cloudinary", "SEO"],
    github: "https://github.com/Solanki028/Astroxadv-law-firm-associate",
    live: "https://astroxadv-law.netlify.app/",
    featured: true,
    image: "/images/astroxadv.png",
  },
  {
    id: "kooltour-app",
    title: "KOOLTour & Travels Portal",
    description: "A premium, full-featured travel and tourism platform designed to provide immersive destination discovery and streamlined booking experiences.",
    problem: "Travelers often struggle with fragmented destination information and impersonal booking processes, making it difficult to plan specialized or bespoke journeys.",
    solution: "Developed a comprehensive portal with curated travel categories (Spiritual, Adventure, Honeymoon, etc.), detailed multi-day itineraries, and a custom journey design engine to bridge the gap between inspiration and booking.",
    tech: ["HTML5", "Vanilla CSS", "JavaScript", "PHP (Mailer)", "Netlify"],
    github: "https://github.com/Solanki028/KOOLTour-and-Tourist-app",
    live: "https://kooltour.netlify.app/", // Replace with your actual Netlify URL once deployed
    featured: true,
    image: "/images/kooltour.png", // Update with a screenshot of your home page later
  },
  {
    id: "trinath-mental-health",
    title: "Trinath Mental Health Counseling Portal",
    description: "A premium mental health counseling platform connecting users with professional therapists, offering curated mental wellness resources, personalized session booking, and educational workshops.",
    problem: "Mental health seekers often face barriers in accessing quality counseling, fragmented resources, and impersonal booking experiences that hinder their path to wellness.",
    solution: "Built a comprehensive mental health portal with therapist profiles, AI-curated content, seamless session booking, blog-based mental health education, and interactive workshops to provide holistic mental wellness support.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Lucide Icons"],
    github: "https://github.com/Solanki028/Trinath-mental-health-App", // Replace with your GitHub URL
    live: "https://trinath-mental-health-app.vercel.app/", // Replace with your actual deployment URL
    featured: true,
    image: "/images/trinath.png", // Update with a screenshot of your home page
  },

  {
    id: "task-generator-ai",
    title: "Task Generator AI",
    description: "An intelligent project planning tool that uses AI to generate comprehensive specifications, user stories, and engineering tasks.",
    problem: "Project managers spend hours manually breaking down high-level ideas into actionable, prioritized engineering tasks.",
    solution: "Integrated LLMs to automatically generate comprehensive specs, user stories, and Jira-ready tasks from simple descriptions, complete with markdown export.",
    tech: ["Next.js 14", "LangChain", "AI Agents", "OpenAI / Gemini", "Function Calling", "MongoDB", "Tailwind"],
    github: "https://github.com/Solanki028/Task-Generator-AI",
    live: "https://taskaiflow.netlify.app/",
    featured: true,
    image: "/images/task ai.png",
  },
  {
    id: "meraki-tracker",
    title: "Meraki Client Tracker",
    description: "A minimalist, high-velocity internal management tool built for small teams to centralize client workflows and eliminate communication fragmentation.",
    problem: "Small teams often face 'management chaos' by relying on scattered WhatsApp threads, unmaintained spreadsheets, and memory, leading to operational friction and unreliable task tracking.",
    solution: "Engineered a focused daily-use platform that strips away the complexity of traditional project management tools. It provides instant visibility into client-specific projects and tasks with a zero-friction status management system.",
    tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase"],
    github: "https://github.com/Solanki028/meraki-tool",
    live: "https://meraki-tool.vercel.app/", // Update with your actual Vercel URL
    featured: true,
    image: "/images/meraki.png", // Update with your actual image path later
  },


  {
    id: "smart-bookmark-app",
    title: "Smart Bookmark App",
    description: "A production-ready bookmark manager featuring instant Google OAuth, real-time data sync, and optimistic UI updates.",
    problem: "Developers lose track of valuable resources without a fast, cross-device synchronized system that acts instantly.",
    solution: "Built a Next.js 14 application with Supabase Row Level Security (RLS) and optimistic UI mutations for instant, secure bookmarking across devices.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "OAuth 2.0"],
    github: "https://github.com/Solanki028/Smart-bookmark-app",
    live: "https://smart-bookmark-app-eosin.vercel.app/",
    featured: false,
    image: "/images/smartbook.png",
  },
  {
    id: "aspar-ecommerce-platform",
    title: "Aspar E-Commerce Platform",
    description: "A full-stack, production-ready e-commerce platform offering a seamless shopping experience and a comprehensive admin dashboard.",
    problem: "Managing an online store requires balancing a high-performance customer storefront with a complex administrative system.",
    solution: "Built a modern full-stack application using Next.js 14 and Express.js, featuring advanced product discovery, secure JWT authentication, and full CRUD admin capabilities.",
    tech: ["Next.js 14", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit", "JWT"],
    github: "https://github.com/Solanki028/Electronext--E-commerce-website ",
    live: "https://aspar-electronics-application.vercel.app/",
    featured: false,
    image: "/images/aspar.png",
  },

  {
    id: "ilp-lms",
    title: "ILP: Internship Platform",
    description: "A comprehensive Learning Management System designed to bridge the gap between students and mentors.",
    problem: "Managing courses, mentors, and students simultaneously required multiple disparate platforms.",
    solution: "Engineered a centralized platform featuring role-based access control, interactive course management, and automated PDF certification generation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "PDFKit", "RBAC"],
    github: "https://github.com/Solanki028/TDD-intersnhip-learning-platform",
    live: "https://mytutorx.netlify.app/",
    featured: false,
    image: "/images/ILD.png",
  },
  {
    id: "taskflow-ai",
    title: "TaskFlow: AI Powered Trello",
    description: "A modern, full-stack task management platform with intelligent AI recommendations.",
    problem: "Standard Kanban boards lack context-aware recommendations for task grouping and deadlines.",
    solution: "Implemented an AI recommendation engine that analyzes card content to suggest due dates, list movements, and related tasks alongside a robust drag-and-drop UI.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "@dnd-kit", "Vector DBs"],
    github: "https://github.com/Solanki028/TaskFlow",
    live: "https://trellox.netlify.app/",
    featured: false,
    image: "/images/task flow.png",
  },
  {
    id: "jk-designs",
    title: "JK Designs Portfolio",
    description: "A premium, high-performance portfolio for a creative design studio with a custom CMS.",
    problem: "Creative studios need blazing-fast websites with full control over their visual assets without relying on slow builders.",
    solution: "Delivered a custom Next.js frontend connected to a dedicated Node.js admin dashboard to manage images and site content in real-time.",
    tech: ["Next.js 14", "React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Solanki028/client-porfolio",
    live: "https://zencraftx.netlify.app/",
    featured: false,
    image: "/images/jk_digital.png",
  },
  {
    id: "flix-chill",
    title: "Flix-Chill Video Streaming Platform",
    description: "Netflix-inspired video streaming platform built with MERN stack featuring user authentication and video playback.",
    problem: "Building a scalable media-heavy application requires robust content delivery and state management.",
    solution: "Engineered a high-performance MERN stack application utilizing Redux for global state and Material-UI for cinematic viewing experiences.",
    tech: ["React.js", "Redux", "Express.js", "MongoDB", "Tailwind CSS", "MUI"],
    github: "https://github.com/Solanki028/Netflix_",
    live: "https://flixchillv1.netlify.app/",
    featured: false,
    image: "/images/flixchill.png"
  }
];
