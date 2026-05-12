"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
  type?: "browser" | "laptop";
  title?: string;
}

export function MockupFrame({
  children,
  className,
  type = "browser",
  title = "localhost:3000",
}: MockupFrameProps) {
  if (type === "laptop") {
    return (
      <div className={cn("relative mx-auto", className)}>
        <div className="relative rounded-t-2xl bg-white border-t border-x border-black/[0.08] p-2 pb-0 overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]">
          <div className="aspect-[16/10] w-full bg-[#FCF9F5] rounded-t-xl overflow-hidden border border-black/[0.08]">
            {children}
          </div>
        </div>
        <div className="relative h-4 bg-white rounded-b-2xl border-x border-b border-black/[0.08] shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-black/[0.05] rounded-b-md" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-black/[0.08] bg-[#FCF9F5] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] transition-all duration-700",
        className
      )}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-black/[0.08] bg-white">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.03] group-hover:bg-[#FF5F57] transition-all duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.03] group-hover:bg-[#FEBC2E] transition-all duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/[0.03] group-hover:bg-[#27C840] transition-all duration-500" />
        </div>
        <div className="flex-1 flex justify-center mr-8">
          <div className="px-4 py-1 bg-white border border-black/[0.06] rounded-lg text-[9px] text-black/40 font-mono lowercase tracking-wider">
            {title}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative bg-[#FCF9F5]">{children}</div>
    </div>
  );
}
