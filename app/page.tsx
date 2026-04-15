import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold components
const Projects = dynamic(() => import("@/components/Projects"), { 
  loading: () => <div className="h-[800px] bg-[#0B0B0B]" /> 
});
const Skills = dynamic(() => import("@/components/Skills"), { 
  loading: () => <div className="h-96 bg-[#0B0B0B]" /> 
});
const Experience = dynamic(() => import("@/components/Experience"), { 
  loading: () => <div className="h-96 bg-[#0B0B0B]" /> 
});
const About = dynamic(() => import("@/components/About"), { 
  loading: () => <div className="h-96 bg-[#0B0B0B]" /> 
});
const Contact = dynamic(() => import("@/components/Contact"), { 
  loading: () => <div className="h-96 bg-[#0B0B0B]" /> 
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}