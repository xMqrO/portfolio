import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohamed | Software Developer — Full-Stack, AI & Automation",
  description:
    "Portfolio of Mohamed — software developer building complete digital products end to end: web apps, SaaS, AI integrations, real-time systems, automation, APIs, and deployment.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "AI Developer",
    "Automation Developer",
    "SaaS Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Node.js Developer",
    "Discord.js Developer",
    "Real-Time Applications",
    "REST API",
    "Database Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Mohamed | Software Developer",
    description:
      "From first idea and interface to backend, AI integrations, deployment, and the final user experience. Explore my projects, skills, and work.",
    url: siteUrl,
    siteName: "Mohamed — Software Developer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed | Software Developer",
    description:
      "Full-stack web, AI integrations, automation, and real-time systems — built end to end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
