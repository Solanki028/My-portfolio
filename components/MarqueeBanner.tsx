export default function MarqueeBanner() {
  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden py-10 border-b border-white/[0.04]">
      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Row 1 — scrolls left */}
      <div className="flex mb-3" style={{ animation: "marquee-left 22s linear infinite" }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(0.75rem,1.2vw,1rem)] font-bold uppercase tracking-[0.25em] shrink-0 mx-10 flex items-center gap-4"
          >
            <span className="text-[#C5FF52]">Building digital products that actually matter</span>
            <span className="text-[#C5FF52] opacity-50">✦</span>
          </span>
        ))}
      </div>
      {/* Row 2 — scrolls right */}
      <div className="flex" style={{ animation: "marquee-right 28s linear infinite" }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(0.75rem,1.2vw,1rem)] uppercase tracking-[0.2em] shrink-0 mx-10 flex items-center gap-4 text-white/20"
          >
            <span>Next.js</span>
            <span className="text-white/10">◆</span>
            <span>TypeScript</span>
            <span className="text-white/10">◆</span>
            <span>Node.js</span>
            <span className="text-white/10">◆</span>
            <span>AI Integration</span>
            <span className="text-white/10">◆</span>
            <span>SaaS</span>
            <span className="text-white/10">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
