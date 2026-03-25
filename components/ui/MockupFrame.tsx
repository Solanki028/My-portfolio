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
        <div className="relative rounded-t-xl bg-[#1A1A1A] border-t border-x border-[#2A2A2A] p-2 pb-0 overflow-hidden shadow-2xl">
          <div className="aspect-[16/10] w-full bg-[#0B0B0B] rounded-t-lg overflow-hidden border border-[#2A2A2A]">
            {children}
          </div>
        </div>
        <div className="relative h-4 bg-[#1A1A1A] rounded-b-xl border-x border-b border-[#2A2A2A] shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-[#2A2A2A] rounded-b-md" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("group relative flex flex-col rounded-xl border border-[#1F1F1F] bg-[#0E0E0E] overflow-hidden shadow-2xl transition-all duration-500", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1F1F1F] bg-[#111]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/20 group-hover:bg-[#FF5F57] transition-colors duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/20 group-hover:bg-[#FEBC2E] transition-colors duration-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C840]/20 group-hover:bg-[#27C840] transition-colors duration-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-1 bg-[#0B0B0B] border border-[#1F1F1F] rounded-md text-[10px] text-[#4D4D4D] font-mono lowercase tracking-wide">
            {title}
          </div>
        </div>
      </div>
      <div className="relative bg-[#0B0B0B] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
