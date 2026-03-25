import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1A1A1A] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tighter text-white mb-6 inline-block">
              Priyanshu<span className="text-[#4D4D4D]">.sh</span>
            </Link>
            <p className="text-[#737373] text-sm leading-relaxed max-w-xs">
              Building high-performance SaaS products with a focus on clean architecture and user experience.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Work", "Skills", "Experience", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#737373] text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/Solanki028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#737373] text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/priyanshu-solanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#737373] text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-[#737373] text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A1A] gap-4">
          <p className="text-[#4D4D4D] text-[12px] font-mono">
             {currentYear} Priyanshu Solanki. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#4D4D4D] text-[12px] font-mono uppercase tracking-widest">
              Built with Next.js & Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
