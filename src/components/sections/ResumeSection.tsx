"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const resumeData = {
    name: "MOHAMED",
    title: "Software Developer — Full-Stack, AI & Automation",
    subtitle: "TypeScript · Python · Java · SQL · Node.js · React",
    location: "Available worldwide — Remote friendly",
    email: site.email,
    linkedin: site.linkedin,
    github: site.github,
    profile: "Software developer focused on building complete digital products — from the first idea and interface through the backend, AI integrations, deployment, and the final user experience. Comfortable across web, AI, automation, real-time systems, and Windows-level engineering, with a strong focus on products that are used repeatedly rather than demonstrated once.",
    skills: {
        languages: ["TypeScript", "Python", "JavaScript", "Java", "SQL", "JSON", "HTML / CSS", "Bash / PowerShell"],
        frontend: ["React.js", "Next.js", "TailwindCSS", "GSAP", "Responsive Design", "UI/UX", "Framer Motion"],
        backend: ["Node.js", "Express", "Python", "Flask", "REST APIs", "Authentication", "WebSockets"],
        ai: ["LLM Applications", "AI Agents", "Prompt Engineering", "Structured Output", "Computer Vision", "Multimodal", "OpenAI-compatible APIs", "OpenRouter", "DeepSeek", "GLM", "NVIDIA NIM", "Cerebras"],
        data: ["PostgreSQL", "SQLite / better-sqlite3", "MongoDB", "Schema Design", "Redis", "File & JSON Storage"],
        systems: ["Windows", "Windows APIs", "PowerShell Automation", "Driver & BIOS Troubleshooting", "GPU & FPS Optimization", "Java / JDK", "Network Latency", "Docker", "Vercel"],
        platforms: ["Discord.js", "Slash Commands", "Minecraft Forge", "Launchers & Mods", "Elo Ranking Systems"],
    },
    experience: [
        {
            company: "Independent Product Development",
            role: "Full-Stack Software Developer",
            date: "Ongoing",
            bullets: [
                "Design, build, and deploy complete digital products end to end — interface, backend, database, authentication, and infrastructure.",
                "Ship production web applications and SaaS platforms on Vercel with REST APIs, real-time features, and third-party integrations.",
                "Own UI/UX and performance: responsive layouts, animation, web performance, and the final user experience.",
            ],
            stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "REST APIs", "Vercel"]
        },
        {
            company: "AI & Automation",
            role: "AI Application & Automation Developer",
            date: "Ongoing",
            bullets: [
                "Build AI-powered applications: LLM integrations, conversational AI, AI agents, computer vision, and recommendation systems.",
                "Integrate structured AI outputs and prompt engineering into products across OpenAI-compatible providers, OpenRouter, DeepSeek, GLM, NVIDIA NIM, and Cerebras.",
                "Develop Python automation tools, desktop and GUI applications, background processes, and Windows integrations.",
            ],
            stack: ["Python", "LLM APIs", "Prompt Engineering", "Agents", "Windows APIs", "PowerShell"]
        },
        {
            company: "Real-Time & Community",
            role: "Real-Time Systems & Bot Developer",
            date: "Ongoing",
            bullets: [
                "Develop real-time applications with private messaging, typing indicators, online/offline presence, profiles, themes, media integrations, and watch-party functionality.",
                "Build Discord bots with Discord.js in JavaScript and TypeScript: slash commands, automated systems, APIs, databases, ranking systems, and community tools.",
            ],
            stack: ["WebSockets", "Discord.js", "TypeScript", "SQL", "React"]
        }
    ],
    projects: [
        {
            name: "Lumen AI",
            desc: "AI-powered application with LLM integrations and structured AI output, wrapped in a modern, polished interface.",
            stack: ["LLM APIs", "Prompt Engineering", "Web App", "APIs"],
            link: "https://lumen-ai-nu.vercel.app/",
            highlight: true,
        },
        {
            name: "WatchAlong",
            desc: "Real-time watch-party platform with synchronized playback, shared presence, live chat, and media integration.",
            stack: ["Real-Time", "WebSockets", "React", "Media API"],
            link: "https://watchalong-iota.vercel.app/",
            highlight: false,
        },
        {
            name: "Suit-Up / Outfitly",
            desc: "Complete web application — product architecture, responsive UI, backend, authentication, database, and an AI wardrobe that generates outfits from a user's own clothes.",
            stack: ["React", "Node.js", "AI Recommendations", "Database"],
            link: "https://suit-up.vercel.app/",
            highlight: false,
        },
        {
            name: "HookHQ / NexChat",
            desc: "Web platform with content and community workflows, paired with private real-time messaging: typing indicators, presence, profiles, themes, and authentication.",
            stack: ["React", "Next.js", "WebSockets", "Auth"],
            link: "https://hookhq.vercel.app/",
            highlight: false,
        },
    ],
    personalProjects: [
        { name: "Illy Skincare", desc: "E-commerce skincare website with cart and checkout." },
        { name: "Déesse", desc: "Modern web experience built around atmosphere and motion." },
        { name: "Centre Attawazoune", desc: "Institutional website with structured, accessible content." },
    ],
    strengths: [
        { title: "End-to-End Delivery", detail: "One owner from idea to deploy — no orphaned halves or integration gaps." },
        { title: "Interface Quality", detail: "Modern, responsive, interactive UI with animation that serves the product, not distracts from it." },
        { title: "Systems Thinking", detail: "Comfortable below the application layer: Windows, networking, drivers, GPU and Java performance." },
        { title: "Fast Learner", detail: "Continuously expanding across software engineering, AI, web, systems, and product engineering." }
    ],
    focusAreas: [
        { name: "Web Development", detail: "Modern, responsive, interactive websites and full-stack web applications with a strong focus on UI/UX, performance, and functionality." },
        { name: "Software Development", detail: "Custom Python software, automation tools, desktop and GUI applications, system utilities, and Windows integrations." },
        { name: "Artificial Intelligence", detail: "LLMs, conversational AI, agents, computer vision, recommendation systems, structured outputs, multimodal apps, and model APIs." },
        { name: "SaaS & Product", detail: "Concept to implementation: architecture, UI/UX, frontend, backend, authentication, databases, APIs, AI integrations, and deployment." },
        { name: "Real-Time Applications", detail: "Messaging, typing indicators, online/offline presence, profiles, themes, media integrations, and watch-party functionality." },
        { name: "Discord & Bots", detail: "Discord.js bots in JavaScript and TypeScript — slash commands, automated systems, APIs, databases, ranking, and community tools." },
        { name: "Minecraft", detail: "Java and Bedrock ecosystems: Forge, mods, client modifications, launchers, configuration, Java environments, FPS and input-latency optimization." },
        { name: "Windows & Systems", detail: "Drivers, BIOS/firmware, storage, boot, BitLocker, networking, Windows services, PowerShell, GPU settings, and hardware troubleshooting." },
        { name: "Performance", detail: "Web performance, responsiveness, FPS optimization, GPU configuration, Java performance, network latency, resource usage, and startup time." }
    ],
    softSkills: ["Product Thinking", "Problem Solving", "End-to-End Ownership", "Fast Learning", "UI/UX Sensibility", "Detail Oriented"],
    languages: [
        { lang: "Arabic", level: "Native" },
        { lang: "English", level: "Professional" },
        { lang: "French", level: "Working" }
    ]
};

export default function ResumeSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".resume-item", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 82%",
                }
            });
        }, sectionRef.current!);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="resume" className="section-padding relative overflow-hidden">
            <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Label */}
                <div className="resume-item text-center mb-16">
                    <p className="text-xs sm:text-sm text-accent-cyan tracking-[0.5em] uppercase mb-4 font-[family-name:var(--font-space-grotesk)]">
                        Digital Resume
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 text-white">
                        {resumeData.name}
                    </h2>
                    <p className="text-xl text-accent-cyan font-medium mb-1">{resumeData.title}</p>
                    <p className="text-sm text-gray-500 font-mono tracking-widest">{resumeData.subtitle}</p>

                    {/* Contact Bar */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-500">
                        {resumeData.email && (
                        <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" /></svg>
                            {resumeData.email}
                        </a>
                        )}
                        {resumeData.linkedin && (
                        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors">

                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            LinkedIn
                        </a>
                        )}
                        {resumeData.github && (
                        <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                        </a>
                        )}
                        <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {resumeData.location}
                        </span>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" /></svg>
                            Let&apos;s Talk
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ── Left Column ── */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Profile */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8 hover:border-accent-cyan/20 transition-colors">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                                Profile
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{resumeData.profile}</p>
                        </div>

                        {/* Skills */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8 hover:border-accent-purple/20 transition-colors">
                            <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-accent-purple rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                                Technical Skills
                            </h4>
                            <div className="space-y-5">
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Languages</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.languages.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-accent-cyan/10 rounded-lg text-[11px] text-accent-cyan border border-accent-cyan/20 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Frontend</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.frontend.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-accent-purple/10 rounded-lg text-[11px] text-purple-300 border border-purple-500/20 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Backend</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.backend.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-blue-500/10 rounded-lg text-[11px] text-blue-300 border border-blue-500/20 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">AI</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.ai.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-emerald-500/10 rounded-lg text-[11px] text-emerald-300 border border-emerald-500/20 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Data</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.data.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] text-gray-400 border border-white/10 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Systems</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.systems.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] text-gray-400 border border-white/10 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">Platforms</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {resumeData.skills.platforms.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-white/5 rounded-lg text-[11px] text-gray-400 border border-white/10 font-mono">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strengths */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8 hover:border-yellow-500/20 transition-colors">
                            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                                Strengths
                            </h4>
                            <div className="space-y-4">
                                {resumeData.strengths.map((s) => (
                                    <div key={s.title} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                        <p className="text-xs font-bold text-white">{s.title}</p>
                                        <p className="text-[11px] text-gray-400 leading-relaxed mt-1">{s.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8">
                            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                                Soft Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.softSkills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-teal-500/10 rounded-lg text-xs text-teal-300 border border-teal-500/20 font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8">
                            <h4 className="text-sm font-bold text-white mb-5 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                Languages
                            </h4>
                            <div className="space-y-3">
                                {resumeData.languages.map(l => (
                                    <div key={l.lang} className="flex justify-between items-center">
                                        <span className="text-sm text-gray-300 font-medium">{l.lang}</span>
                                        <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20 font-mono uppercase">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Focus Areas */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8">
                            <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                                Focus Areas
                            </h4>
                            <div className="space-y-6">
                                {resumeData.focusAreas.map((area, idx) => (
                                    <div key={idx} className="relative pl-6 border-l border-white/10">
                                        <div className="absolute top-1.5 left-[-4.5px] w-[8px] h-[8px] bg-orange-400 rounded-full" />
                                        <h5 className="text-base font-bold text-white">{area.name}</h5>
                                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{area.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8 hover:border-blue-500/20 transition-colors">
                            <h4 className="text-sm font-bold text-white mb-7 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                Professional Experience
                            </h4>
                            <div className="space-y-8">
                                {resumeData.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8 border-l border-white/10">
                                        <div className="absolute top-1 left-[-5px] w-[9px] h-[9px] bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.7)]" />
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                            <div>
                                                <h5 className="text-lg font-bold text-white">{exp.role}</h5>
                                                <p className="text-accent-cyan text-sm font-medium">{exp.company}</p>
                                            </div>
                                            <span className="text-[11px] text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">{exp.date}</span>
                                        </div>
                                        <ul className="space-y-2 mb-4 mt-3">
                                            {exp.bullets.map((b, bi) => (
                                                <li key={bi} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <span className="w-1 h-1 bg-accent-cyan rounded-full mt-2 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.stack.map(t => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 font-mono">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Flagship Projects */}
                        <div className="resume-item">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
                                Featured Projects
                            </h4>
                            <div className="space-y-4">
                                {resumeData.projects.map((proj, idx) => (
                                    <div key={idx} className={`glass-fast rounded-2xl p-6 border transition-all duration-300 ${proj.highlight ? "border-accent-cyan/25 bg-accent-cyan/5 hover:border-accent-cyan/40" : "border-white/8 hover:border-white/15"}`}>
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-accent-cyan transition-colors flex items-center gap-2">
                                                {proj.name}
                                                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                            {proj.highlight && (
                                                <span className="text-[9px] text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider shrink-0">
                                                    Flagship
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm mb-3 leading-relaxed">{proj.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {proj.stack.map(t => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 font-mono">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Projects */}
                        <div className="resume-item glass-fast rounded-2xl p-7 border border-white/8">
                            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                                Other Projects
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {resumeData.personalProjects.map((p, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <p className="text-xs font-bold text-white mb-1">{p.name}</p>
                                        <p className="text-[11px] text-gray-400 leading-relaxed">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Background glow elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
