
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CodeStreamPanel from "@/components/CodeStreamPanel";
import { sound } from "@/lib/sounds";

gsap.registerPlugin(ScrollTrigger);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const nameRef = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const typingTextRef = useRef<HTMLSpanElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const geometryRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    
    // Command terminal interaction state
    const [terminalCommand, setTerminalCommand] = useState("");
    const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

    const typewriterFullText = "Hello, I'm Mohamed. I build complete digital products — from the first idea and interface all the way to the backend, AI integrations, deployment, and the final user experience.";

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;

            // --- 0. Setup 3D Space ---
            gsap.set(containerRef.current, { transformStyle: "preserve-3d" });

            // --- 1. Advanced Cyber Decrypt Entrance ---
            const tl = gsap.timeline({ delay: 0.1 });

            // Cyber Decrypt for Heading
            const nameElement = nameRef.current;
            if (nameElement) {
                const originalText = nameElement.dataset.value || "From First Idea to Production";
                let iterations = 0;

                const interval = setInterval(() => {
                    nameElement.innerText = originalText.split("")
                        .map((letter, index) => {
                            if (index < iterations) {
                                return originalText[index];
                            }
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join("");

                    if (iterations >= originalText.length) {
                        clearInterval(interval);
                    }

                    iterations += 1 / 3;
                }, 25);
            }

            // Pre-set every start state explicitly so the reveal never depends
            // on .from() immediateRender timing during hydration.
            const staged = [subtitleRef.current, titleRef.current, descRef.current, ctaRef.current];
            gsap.set(contentRef.current, { x: isMobile ? 0 : -80, y: isMobile ? 40 : 0 });
            gsap.set(staged, { y: 30, opacity: 0 });
            gsap.set(geometryRef.current, { scale: 0, y: 60, opacity: 0 });

            // Reveal only after every start state is applied, so the
            // server-rendered markup never flashes before the entrance runs.
            gsap.set(containerRef.current, { autoAlpha: 1 });

            // --- 2. Typewriter Effect for requested text ---
            // Starts almost immediately so the bio copy is the first thing seen.
            let charIndex = 0;
            const typeNextChar = () => {
                if (typingTextRef.current && charIndex <= typewriterFullText.length) {
                    typingTextRef.current.innerText = typewriterFullText.slice(0, charIndex);
                    charIndex++;
                    setTimeout(typeNextChar, charIndex < 20 ? 32 : 20);
                }
            };
            setTimeout(typeNextChar, 180);

            // Entrance order: bio box leads, everything else follows it.
            tl.to(descRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, 0.12)
            .to(contentRef.current, {
                x: 0,
                y: 0,
                duration: 1.2,
                ease: "power4.out"
            }, 0)
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            }, 0.34)
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            }, 0.46)
            .to(geometryRef.current, {
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out"
            }, 0.3)
            .to(ctaRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out"
            }, 0.85);


            // --- 3. Smooth Parallax Scroll-Out ---
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                animation: gsap.to(containerRef.current, {
                    scale: isMobile ? 0.92 : 0.8,
                    z: isMobile ? -150 : -400,
                    opacity: 0,
                    ease: "none"
                })
            });

        }, sectionRef.current!);

        return () => ctx.revert();
    }, []);

    const handleTerminalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = terminalCommand.trim().toLowerCase();
        setTerminalCommand("");
        sound.playClick();

        const scrollToSection = (id: string) => {
            const el = document.querySelector(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (cmd === "help") {
            setTerminalOutput("Commands: projects, skills, experience, resume, contact, about, matrix, clear, help");
        } else if (cmd === "projects") {
            setTerminalOutput("Navigating to Projects section...");
            scrollToSection("#projects");
        } else if (cmd === "skills") {
            setTerminalOutput("Navigating to Skills section...");
            scrollToSection("#skills");
        } else if (cmd === "experience") {
            setTerminalOutput("Navigating to Experience section...");
            scrollToSection("#experience");
        } else if (cmd === "resume") {
            setTerminalOutput("Navigating to Résumé section...");
            scrollToSection("#resume");
        } else if (cmd === "contact") {
            setTerminalOutput("Navigating to Contact section...");
            scrollToSection("#contact");
        } else if (cmd === "about") {
            setTerminalOutput("Navigating to About section...");
            scrollToSection("#about");
        } else if (cmd === "clear") {
            setTerminalOutput(null);
        } else if (cmd === "hire" || cmd === "matrix") {
            sound.playSuccess();
            setTerminalOutput("🚀 ACCESS GRANTED! Welcome aboard — let's build something production-ready. Reach out via the Contact section!");
        } else {
            setTerminalOutput(`Unknown command: '${cmd}'. Type 'help' for options.`);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-transparent py-20 lg:py-0"
        >
            {/* Ambient Floating Particle Grid */}
            {isMounted && [...Array(12)].map((_, i) => (
                <div 
                    key={i} 
                    className="flying-node absolute w-1.5 h-1.5 bg-accent-cyan/40 rounded-full blur-[1px] pointer-events-none animate-pulse"
                    style={{
                        top: `${(i * 8 + 10) % 95}%`,
                        left: `${(i * 13 + 5) % 95}%`,
                        animationDuration: `${2 + (i % 4)}s`
                    }}
                />
            ))}

            <div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full"
                style={{ visibility: "hidden" }}
            >
                {/* Left Column: Text content & Interactive Typewriter */}
                <div ref={contentRef} className="lg:col-span-7 text-center lg:text-left z-20">
                    
                    {/* Top Status & Availability Pill */}
                    <div className="w-fit mx-auto lg:mx-0 mb-4 sm:mb-6 flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>
                        <span className="text-[10px] sm:text-xs text-emerald-300 font-mono tracking-wider uppercase font-semibold">
                            Available for Projects &amp; Roles
                        </span>
                    </div>

                    {/* Dynamic Subtitle */}
                    <p
                        ref={subtitleRef}
                        className="text-xs sm:text-sm text-accent-cyan tracking-[0.25em] uppercase mb-4 font-mono font-medium w-fit mx-auto lg:mx-0 flex items-center gap-2"
                    >
                        <span className="w-6 sm:w-10 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple inline-block shrink-0" />
                        <span>Mohamed — Software Developer</span>
                    </p>

                    {/* Main Hero Headline */}
                    <h1
                        ref={titleRef}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.08] mb-6 tracking-tight text-white"
                    >
                        <span
                            ref={nameRef}
                            data-value="From First Idea to Production"
                            className="gradient-text drop-shadow-[0_0_35px_rgba(14,165,233,0.5)] inline-block"
                        >
                            From First Idea to Production
                        </span>
                    </h1>

                    {/* Requested Interactive Typing Box */}
                    <div
                        ref={descRef}
                        className="glass-strong p-4 sm:p-5 rounded-2xl border border-accent-cyan/30 shadow-[0_0_30px_rgba(14,165,233,0.1)] max-w-2xl mx-auto lg:mx-0 mb-8 text-left relative overflow-hidden group"
                    >
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10 text-[10px] sm:text-xs text-accent-cyan font-mono">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                            <span className="ml-2 text-gray-400">~/bio/overview.sh</span>
                        </div>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-mono min-h-[3.5rem]">
                            <span className="text-accent-purple font-semibold">&gt; </span>
                            <span ref={typingTextRef} className="text-cyan-100"></span>
                            <span className="inline-block w-2 h-5 bg-accent-cyan ml-1 animate-pulse align-middle" />
                        </p>
                    </div>

                    {/* CTA Action Buttons */}
                    <div ref={ctaRef} className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start mb-8 lg:mb-0">
                        <a 
                            href="#projects" 
                            className="btn-primary group relative overflow-hidden bg-white/5 border border-accent-cyan/40 text-white shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] px-8 py-4 rounded-full transition-all duration-500 hover:-translate-y-1 text-center" 
                        >
                            <span className="relative z-10 font-[family-name:var(--font-space-grotesk)] tracking-wider flex items-center justify-center gap-2 text-sm sm:text-base">
                                Explore Projects
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/30 to-accent-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>

                        <a 
                            href="#contact" 
                            className="btn-outline border-white/20 text-gray-300 hover:text-white hover:border-white/50 px-7 py-4 rounded-full transition-all duration-500 flex items-center justify-center gap-2 font-[family-name:var(--font-space-grotesk)] tracking-wider hover:-translate-y-1 text-center text-sm sm:text-base" 
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>Get In Touch</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Hologram Panel + Terminal */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center z-10 w-full">
                    
                    {/* Holographic Panel */}
                    <div ref={geometryRef} className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6">
                        {/* Glow Core & Pulsing Halo */}
                        <div className="absolute inset-0 bg-accent-cyan/30 rounded-full blur-[90px] animate-pulse-glow" />
                        <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-[70px]" />

                        {/* Hologram Frame */}
                        <div className="absolute inset-2 rounded-3xl border-2 border-accent-cyan/60 shadow-[0_0_60px_rgba(14,165,233,0.4)] bg-space-900/90 overflow-hidden group transition-all duration-700">
                            <CodeStreamPanel className="h-full w-full" />
                            {/* Cyber Scanline & Overlay Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(14,165,233,0.15)_50%)] bg-[length:100%_4px] pointer-events-none z-10 shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-80 z-10" />

                            <div className="absolute bottom-3 left-3 right-3 z-20 glass-strong p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                                <div>
                                    <p className="text-white font-bold font-[family-name:var(--font-space-grotesk)]">Mohamed</p>
                                    <p className="text-[10px] text-accent-cyan">Software Developer</p>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan text-[9px]">ONLINE</span>
                            </div>
                        </div>

                        {/* Floating Tech Badges */}
                        <div className="absolute -top-6 -right-4 glass-strong px-3 py-1.5 rounded-xl text-[10px] text-accent-cyan font-mono border border-accent-cyan/40 shadow-[0_0_20px_rgba(14,165,233,0.3)] z-30">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-accent-cyan rounded-full animate-ping" />
                                <span>AI &amp; AUTOMATION</span>
                            </div>
                        </div>
                        
                        <div className="absolute -bottom-6 -left-4 glass-strong px-3 py-1.5 rounded-xl text-[10px] text-accent-purple font-mono border border-accent-purple/40 shadow-[0_0_20px_rgba(129,140,248,0.3)] z-30">
                            <span>FULL-STACK &amp; REALTIME</span>
                        </div>
                    </div>

                    {/* Creative Interactive Terminal Console */}
                    <div 
                        className="w-full max-w-lg glass-strong rounded-2xl border border-accent-cyan/30 p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)] font-mono z-30 mt-14"
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-gray-400">
                            <span className="text-accent-cyan font-semibold text-sm">Interactive Shell v2.4</span>
                            <span className="text-gray-500">type &apos;help&apos;</span>
                        </div>

                        {terminalOutput && (
                            <div className="py-3 text-emerald-400 border-b border-white/5 break-words font-mono text-sm leading-relaxed">
                                {terminalOutput}
                            </div>
                        )}

                        <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2.5 pt-3">
                            <span className="text-accent-purple text-base">$</span>
                            <input
                                type="text"
                                value={terminalCommand}
                                onChange={(e) => setTerminalCommand(e.target.value)}
                                placeholder="Try typing 'help' or 'skills'..."
                                className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full text-sm font-mono"
                            />
                        </form>
                    </div>

                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-accent-cyan/60 z-0">
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase">Scroll_To_Explore</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-accent-cyan/60 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-cyan animate-[translate-y_2s_linear_infinite]" style={{ animationName: "slideDown" }} />
                </div>
            </div>

            <style jsx>{`
                @keyframes slideDown {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(200%); opacity: 0; }
                }
            `}</style>
        </section>
    );
}

