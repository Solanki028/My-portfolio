import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">

      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#C5FF52]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#C5FF52]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Top border with gradient ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C5FF52]/40 to-transparent" />

        {/* ── Divider ── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* ════════════════════════════════
            FOOTER GRID
        ════════════════════════════════ */}
        <div className="container-premium py-20">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-5">
            <Link
              href="/"
              className="inline-block mb-5 group"
            >
              <span className="font-heading text-2xl font-black tracking-tight text-white group-hover:text-[#C5FF52] transition-colors duration-300">
                Priyanshu
                <span className="text-[#C5FF52]">.sh</span>
              </span>
            </Link>
            <p className="text-[13px] text-white/70 leading-relaxed max-w-[280px] font-mono">
              Full-stack engineer. Building high-performance products with clean architecture and production-grade code.
            </p>

            {/* Social row */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { href: "https://github.com/Solanki028", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/priyanshu-solanki", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:Priyanshu.solankii@outlook.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C5FF52] hover:border-[#C5FF52]/30 hover:bg-[#C5FF52]/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 md:col-start-7">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5FF52] mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Work", "Projects", "Skills", "Experience", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-mono text-[13px] text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#C5FF52] transition-all duration-300 overflow-hidden" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 md:col-start-10">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5FF52] mb-6">
              Stack
            </h4>
            <ul className="space-y-3">
              {["Next.js", "TypeScript", "Node.js", "Tailwind", "AI/LLMs"].map((item) => (
                <li key={item}>
                  <span className="font-mono text-[13px] text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.1] gap-4">
          <p className="font-mono text-[11px] text-white/50 tracking-wider">
            © {currentYear} Priyanshu Solanki — All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF52] animate-pulse" />
            <span className="font-mono text-[11px] text-white/50 uppercase tracking-[0.2em]">
              Built with Next.js & Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}