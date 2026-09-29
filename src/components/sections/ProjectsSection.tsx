"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sound } from "@/lib/sounds";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    description: string;
    image?: string;
    tech: string[];
    features: string[];
    liveLink: string;
    gradient: string;
    category: "AI & Agents" | "SaaS & Platforms" | "Real-Time & Social" | "Bots, Gaming & Systems";
}

const projects: Project[] = [
    {
        title: "Lumen AI",
        description: "An AI-powered application built around LLM integrations — intelligent responses, structured AI output, and a polished, modern interface that makes the model feel like a real product feature.",
        tech: ["LLM APIs", "Prompt Engineering", "Web App", "APIs"],
        features: ["LLM Integration", "Structured AI Output", "Polished UI", "Production Deploy"],
        liveLink: "https://lumen-ai-nu.vercel.app/",
        gradient: "from-indigo-600/30 to-cyan-600/30",
        category: "AI & Agents",
    },
    {
        title: "Suit-Up / Outfitly",
        description: "A complete web application built from concept to deployment — product architecture, responsive UI, backend logic, authentication, and a database layer, with an AI wardrobe that generates outfits from the clothes a user already owns.",
        tech: ["React", "Node.js", "AI Recommendations", "Database"],
        features: ["Product Architecture", "Cart & Checkout", "AI Outfit Generation", "REST API"],
        liveLink: "https://suit-up.vercel.app/",
        gradient: "from-pink-600/30 to-indigo-600/30",
        category: "SaaS & Platforms",
    },
    {
        title: "HookHQ / NexChat",
        description: "A web platform built around content and community workflows, paired with a private real-time messaging layer — typing indicators, online/offline presence, profiles, themes, and authentication on a backend designed to scale.",
        tech: ["React", "Next.js", "WebSockets", "Database"],
        features: ["Content Workflows", "Private Messaging", "Online Presence", "Authentication"],
        liveLink: "https://hookhq.vercel.app/",
        gradient: "from-emerald-600/30 to-cyan-600/30",
        category: "SaaS & Platforms",
    },
    {
        title: "WatchAlong",
        description: "A real-time watch-party platform: synchronized playback, shared presence, live chat, and media integration so a group watches the same thing at the same moment from anywhere.",
        tech: ["Real-Time", "WebSockets", "React", "Media API"],
        features: ["Synchronized Playback", "Live Chat", "Presence", "Media Integration"],
        liveLink: "https://watchalong-iota.vercel.app/",
        gradient: "from-violet-600/30 to-fuchsia-600/30",
        category: "Real-Time & Social",
    },
    {
        title: "Illy Skincare",
        description: "An e-commerce website for a skincare brand: product catalogue, filtering, cart and checkout flow, media-rich product pages, and an interface tuned for a skincare audience.",
        tech: ["E-Commerce", "React", "Cart System", "Payments"],
        features: ["Product Catalogue", "Cart & Checkout", "Brand UI/UX", "Responsive Storefront"],
        liveLink: "https://illy-skincare.vercel.app/",
        gradient: "from-rose-600/30 to-orange-600/30",
        category: "SaaS & Platforms",
    },
    {
        title: "Déesse",
        description: "A modern web experience focused on atmosphere and motion — layered animation, refined typography, and a user flow that carries visitors through the whole experience without friction.",
        tech: ["React", "GSAP", "Animation", "UI/UX"],
        features: ["Motion Design", "Layered Animation", "Refined Typography", "Smooth Flow"],
        liveLink: "https://deese.vercel.app/",
        gradient: "from-purple-600/30 to-indigo-600/30",
        category: "SaaS & Platforms",
    },
    {
        title: "Centre Attawazoune",
        description: "An institutional website delivering a clear, trustworthy web presence — structured content, accessible layouts, and a maintainable front end for a real organisation.",
        tech: ["Web", "CMS", "Responsive", "SEO"],
        features: ["Institutional Design", "Content Structure", "Accessibility", "SEO Basics"],
        liveLink: "https://centre-attawazoune.vercel.app/",
        gradient: "from-sky-600/30 to-indigo-600/30",
        category: "SaaS & Platforms",
    },
];

const categories = ["All", "AI & Agents", "SaaS & Platforms", "Real-Time & Social", "Bots, Gaming & Systems"];

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [viewMode, setViewMode] = useState<"3D" | "GRID">("3D");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        if (viewMode !== "3D") return;

        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, { perspective: 2500 });
            gsap.set(carouselRef.current, { transformStyle: "preserve-3d" });

            const totalCards = projects.length;
            const isMobile = window.innerWidth < 768;
            // Keep card spacing constant as the roster grows
            const radius = (isMobile ? 175 : 255) / Math.sin(Math.PI / totalCards);
            const cardScale = isMobile ? 0.8 : 1;

            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                const theta = (i / totalCards) * (Math.PI * 2);

                gsap.set(card, {
                    rotationY: (i / totalCards) * 360,
                    z: Math.cos(theta) * radius,
                    x: Math.sin(theta) * radius,
                    scale: cardScale,
                    transformOrigin: "50% 50%",
                    backfaceVisibility: "hidden"
                });
            });

            const maxRotation = -360 * ((totalCards - 1) / totalCards);
            gsap.to(carouselRef.current, {
                rotationY: maxRotation,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 1,
                    pin: true,
                }
            });

            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * -20;
                gsap.to(carouselRef.current, {
                    rotationX: y,
                    rotationZ: x * 0.2,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, sectionRef.current!);

        return () => ctx.revert();
    }, [viewMode]);

    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el;
    };

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const openModal = (project: Project) => {
        sound.playClick();
        setSelectedProject(project);
    };

    const closeModal = () => {
        sound.playClick();
        setSelectedProject(null);
    };

    return (
        <section ref={sectionRef} id="projects" className={`relative w-full overflow-hidden bg-transparent ${viewMode === "3D" ? "h-screen flex flex-col items-center justify-center" : "py-24"}`}>
            
            {/* Title & View Switcher Controls */}
            <div ref={titleRef} className={`text-center px-6 z-40 ${viewMode === "3D" ? "absolute top-12 sm:top-16 z-50 pointer-events-auto" : "mb-12"}`}>
                <h2 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 text-white drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    My <span className="gradient-text">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full mb-6" />

                {/* View Mode Toggle Pill */}
                <div className="inline-flex items-center p-1 rounded-full glass-strong border border-white/20 gap-1 backdrop-blur-md">
                    <button
                        onClick={() => { sound.playClick(); setViewMode("3D"); }}
                        onMouseEnter={() => sound.playHover()}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${viewMode === "3D" ? "bg-accent-cyan text-black shadow-[0_0_15px_rgba(14,165,233,0.5)]" : "text-gray-400 hover:text-white"}`}
                    >
                        🔄 3D Carousel
                    </button>
                    <button
                        onClick={() => { sound.playClick(); setViewMode("GRID"); }}
                        onMouseEnter={() => sound.playHover()}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${viewMode === "GRID" ? "bg-accent-cyan text-black shadow-[0_0_15px_rgba(14,165,233,0.5)]" : "text-gray-400 hover:text-white"}`}
                    >
                        🎛️ Grid & Filters
                    </button>
                </div>
            </div>

            {/* 3D Rolodex Mode */}
            {viewMode === "3D" && (
                <div className="relative w-full max-w-[85vw] sm:max-w-md h-[400px] sm:h-[450px] mt-16 perspective-[2500px]">
                    <div ref={carouselRef} className="absolute inset-0 flex items-center justify-center transform-style-3d will-change-transform">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                ref={(el) => setCardRef(el, i)}
                                onClick={() => openModal(project)}
                                className="absolute w-full h-full glass-strong-fast rounded-3xl overflow-hidden pointer-events-auto shadow-2xl border border-white/20 transition-all duration-300 hover:border-accent-cyan/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] group backface-hidden will-change-transform cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />

                                <div className="relative h-1/2 w-full flex items-center justify-center border-b border-white/10 bg-black/40 overflow-hidden">
                                    {project.image && (
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    )}
                                    <div className="text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-white/20 group-hover:text-accent-cyan/40 transition-colors duration-500 relative z-10 pointer-events-none mix-blend-overlay">
                                        {project.title.charAt(0)}
                                    </div>
                                </div>

                                <div className="relative h-1/2 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)] text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="space-y-3 mt-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.slice(0, 4).map((t) => (
                                                <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-between items-center text-[10px] text-accent-cyan font-mono font-bold">
                                        <span>Click for details</span>
                                        <span>↗</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Grid View Mode */}
            {viewMode === "GRID" && (
                <div className="max-w-7xl mx-auto px-6 w-full relative z-20 space-y-10">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { sound.playClick(); setSelectedCategory(cat); }}
                                onMouseEnter={() => sound.playHover()}
                                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border ${selectedCategory === cat ? "bg-accent-cyan text-black font-bold border-accent-cyan shadow-[0_0_15px_rgba(14,165,233,0.4)]" : "glass-fast text-gray-300 border-white/10 hover:border-white/30"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, i) => (
                            <div
                                key={i}
                                onClick={() => openModal(project)}
                                onMouseEnter={() => sound.playHover()}
                                className="glass-strong rounded-3xl overflow-hidden border border-white/10 hover:border-accent-cyan/40 hover:shadow-[0_0_35px_rgba(14,165,233,0.25)] transition-all duration-500 group cursor-pointer flex flex-col justify-between"
                            >
                                <div>
                                    {/* Thumbnail Banner */}
                                    <div className="relative h-48 w-full bg-black/40 border-b border-white/10 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
                                        {project.image ? (
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-7xl font-black font-[family-name:var(--font-space-grotesk)] text-white/25 group-hover:text-accent-cyan/50 transition-colors duration-500 mix-blend-overlay">
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        <span className="absolute top-3 right-3 text-[10px] font-mono uppercase bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-accent-cyan border border-white/15">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white group-hover:text-accent-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 pt-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/5 text-gray-300 border border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                                    <span className="text-xs text-gray-500 font-mono">Tap to view specs</span>
                                    <span className="text-sm text-accent-cyan font-bold group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Project Lightbox Modal */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
                    onClick={closeModal}
                >
                    <div 
                        className="glass-strong max-w-3xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative my-auto animate-scaleUp text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Banner */}
                        <div className="relative h-64 sm:h-72 w-full bg-black overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-70`} />
                            {selectedProject.image && (
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover opacity-80"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            )}
                            {!selectedProject.image && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[10rem] sm:text-[14rem] font-black font-[family-name:var(--font-space-grotesk)] text-white/15 mix-blend-overlay select-none">
                                        {selectedProject.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                            
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                onMouseEnter={() => sound.playHover()}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/90 transition-all border border-white/20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block text-xs font-mono uppercase bg-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full border border-accent-cyan/30 mb-2 font-bold">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                                    {selectedProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold mb-2">Overview</h4>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold mb-3">Key Features</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {selectedProject.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5 text-xs text-gray-300 font-medium">
                                            <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer Actions */}
                        <div className="p-6 bg-black/50 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                            <button
                                onClick={closeModal}
                                className="px-5 py-2.5 rounded-full text-xs font-mono text-gray-400 hover:text-white transition-colors"
                            >
                                Close Modal
                            </button>

                            <div className="flex items-center gap-3">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => sound.playHover()}
                                    onClick={() => sound.playSuccess()}
                                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-black font-bold text-xs hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all hover:scale-105 flex items-center gap-2"
                                >
                                    Live Demo ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
