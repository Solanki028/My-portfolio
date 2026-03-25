import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshu.sh"),
  title: "Priyanshu Solanki — Full Stack Product Engineer",
  description:
    "Full-stack engineer building production-grade web applications. Expertise in Next.js, AI workflows, and scalable SaaS architecture.",
  keywords: [
    "Full Stack Developer",
    "Product Engineer",
    "SaaS Builder",
    "Next.js Expert",
    "AI Integration",
    "TypeScript",
    "Priyanshu Solanki",
  ],
  authors: [{ name: "Priyanshu Solanki", url: "https://priyanshu.sh" }],
  creator: "Priyanshu Solanki",
  openGraph: {
    title: "Priyanshu Solanki — Full Stack Product Engineer",
    description:
      "Full-stack engineer building production-grade web applications. Expertise in Next.js, AI workflows, and scalable SaaS architecture.",
    url: "https://priyanshu.sh",
    siteName: "Priyanshu Solanki",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Solanki Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Solanki — Full Stack Product Engineer",
    description:
      "Full-stack engineer building production-grade web applications.",
    creator: "@priyanshu_sh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-[#0B0B0B] text-foreground antialiased selection:bg-white/10 selection:text-white`}
      >
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}