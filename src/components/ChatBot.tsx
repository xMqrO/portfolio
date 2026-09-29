"use client";

import { useState, useEffect, useRef } from "react";

// =============================================
// KNOWLEDGE BASE — All of Mohamed's portfolio data
// =============================================
const knowledgeBase: { id: string; question: string; answer: string; tags: string[] }[] = [
    {
        id: "intro",
        question: "Who are you?",
        answer: "I'm Mohamed, a software developer focused on building complete digital products. I take an idea from the first sketch and interface all the way through the backend, AI integrations, deployment, and the final user experience — one person responsible for the whole thing.",
        tags: ["who", "name", "about", "yourself", "introduce", "mohamed"],
    },
    {
        id: "projects",
        question: "What projects have you built?",
        answer: "My work spans AI, SaaS, and real-time products. **Lumen AI** is an AI-powered application with LLM integrations and structured AI output. **WatchAlong** is a real-time watch-party platform with synchronized playback and presence. **Suit-Up / Outfitly** is a complete web application with an AI wardrobe that generates outfits from your own clothes, and **HookHQ / NexChat** is a content and community platform paired with private real-time messaging. **Illy Skincare**, **Déesse**, and **Centre Attawazoune** round out the e-commerce, web, and institutional work.",
        tags: ["project", "built", "work", "portfolio", "app", "application", "made"],
    },
    {
        id: "ai",
        question: "Tell me about your AI work",
        answer: "I build AI into real products rather than demos: LLMs, conversational AI, AI agents, computer vision and image understanding, recommendation systems, structured AI outputs, and multimodal applications. I've worked across OpenAI-compatible services, NVIDIA NIM, OpenRouter, DeepSeek, GLM, GPT-based models, and high-speed inference platforms like Cerebras.",
        tags: ["ai", "llm", "agent", "openai", "vision", "multimodal", "prompt", "gpt", "deepseek", "cerebras", "openrouter"],
    },
    {
        id: "stack",
        question: "What technologies do you use?",
        answer: "My core languages are **TypeScript**, **Python**, **JavaScript**, **Java**, and **SQL**. On the web side that's React/Next.js, Node.js, TailwindCSS, and GSAP. For data I use PostgreSQL, SQLite with better-sqlite3, and MongoDB. For AI I work with model APIs and prompt engineering. I also build Discord.js bots, Minecraft/Java tooling, and Windows system automation.",
        tags: ["tech", "technologies", "stack", "use", "skills", "know", "languages", "tools", "framework"],
    },
    {
        id: "hire",
        question: "Why should we hire you?",
        answer: "Because you get the whole product, not a fragment. Most developers hand off half the work — I cover interface, backend, database, authentication, AI, and deployment. I care about the parts users actually feel: responsiveness, performance, and a finished feel. And I'm comfortable below the application layer when the problem demands it.",
        tags: ["hire", "why", "value", "choose", "pick", "good", "benefit", "strengths"],
    },
    {
        id: "experience",
        question: "Do you have any professional experience?",
        answer: "I've built and shipped complete products independently across web, AI, automation, and real-time systems — SaaS platforms, e-commerce sites, AI applications, messaging platforms, watch-party functionality, Discord bots with Elo ranking systems, and custom Python automation tools. I learn quickly and I own projects end to end.",
        tags: ["experience", "professional", "work", "job", "internship", "worked", "background"],
    },
    {
        id: "available",
        question: "Are you available? Open to work?",
        answer: "Yes! I'm available for projects and roles, remote-friendly. I'm comfortable taking something from a rough idea all the way to a deployed, usable product. Don't hesitate to reach out!",
        tags: ["available", "open", "hire", "looking", "work", "freelance", "remote", "start", "ready"],
    },
    {
        id: "contact",
        question: "How can I contact you?",
        answer: "The easiest way is via the contact form on this page — it's the fastest route and I read everything that comes through it.",
        tags: ["contact", "email", "reach", "linkedin", "github", "message", "talk", "touch"],
    },
    {
        id: "automation",
        question: "What automation do you do?",
        answer: "I build custom Python software and utilities: automation tools, desktop and GUI applications, background processes, file and data processing, JSON-based storage, text-to-speech systems, keyboard/mouse and clipboard automation, scheduled tasks, and Windows API integrations. If a task is repetitive, I can make it a tool.",
        tags: ["automation", "python", "script", "tool", "desktop", "gui", "background", "windows", "utility", "powershell"],
    },
    {
        id: "realtime",
        question: "Have you built real-time applications?",
        answer: "Yes — **HookHQ / NexChat** includes a private real-time messaging layer with typing indicators, online/offline presence, user profiles, themes, and authentication. **WatchAlong** adds synchronized playback and live chat for shared watch parties. I work with WebSockets, presence handling, and state synchronization.",
        tags: ["realtime", "real-time", "chat", "messaging", "websocket", "presence", "watch", "party"],
    },
    {
        id: "cv",
        question: "Can I see your CV?",
        answer: "Absolutely — there's a résumé section further down this page with the full breakdown: profile, skills, strengths, focus areas, projects and languages.",
        tags: ["cv", "resume", "download", "pdf", "curriculum"],
    },
    {
        id: "react",
        question: "How good are you with React?",
        answer: "React and Next.js are my primary frontend tools. I build with hooks, manage state deliberately, and care about performance patterns like memoization, lazy loading, and code splitting. This portfolio itself is built with React, Next.js, TailwindCSS, and GSAP.",
        tags: ["react", "next", "frontend", "hooks", "component"],
    },
    {
        id: "python",
        question: "Tell me about your Python experience",
        answer: "Python is where I do automation, tooling, backend services, and AI work. I've built Flask backends, file and data processing pipelines, GUI and desktop applications, background processes, and integrations against model APIs. I also use SQLite with better-sqlite3 for lightweight JSON/file-backed storage.",
        tags: ["python", "flask", "backend", "automation", "gui", "sqlite"],
    },
    {
        id: "database",
        question: "What databases have you worked with?",
        answer: "Mostly **PostgreSQL** for relational work, **SQLite** with better-sqlite3 for lightweight and file-backed storage, and **MongoDB** for document models. I design schemas, index for real query patterns, and think about normalization before I write the first query.",
        tags: ["database", "postgres", "postgresql", "sqlite", "mongodb", "sql", "db", "data", "storage", "schema"],
    },
    {
        id: "api",
        question: "Have you built REST APIs?",
        answer: "Yes — REST API design is core to my work. I've designed and built resource endpoints, authentication middleware, validation, error handling, and JSON responses across Node.js and Python backends, and integrated with third-party services and model APIs.",
        tags: ["api", "rest", "endpoint", "backend", "request", "response", "integration"],
    },
    {
        id: "discord",
        question: "Do you build Discord bots?",
        answer: "Yes. I build bots with **Discord.js** in JavaScript and TypeScript: slash commands, automated systems, API integrations, database-backed features, ranking systems, and community tools.",
        tags: ["discord", "bot", "discord.js", "slash", "command", "community", "ranking", "elo"],
    },
    {
        id: "minecraft",
        question: "Do you work with Minecraft?",
        answer: "Yes, both Java and Bedrock ecosystems — Forge, mods, client-side modifications, launchers, configuration, Java environments, and performance work around FPS, input latency, and server connectivity.",
        tags: ["minecraft", "forge", "mod", "java", "bedrock", "launcher", "client", "fps"],
    },
    {
        id: "systems",
        question: "What systems work do you do?",
        answer: "I'm comfortable below the application layer: Windows troubleshooting and configuration, drivers, BIOS/firmware, storage, boot, BitLocker, networking, Windows services, PowerShell, system automation, Windows APIs, scheduled tasks, and hardware/software diagnosis — plus GPU settings and Java environment setup.",
        tags: ["windows", "system", "driver", "bios", "bitlocker", "network", "service", "powershell", "hardware", "troubleshoot"],
    },
    {
        id: "performance",
        question: "Are you into performance optimization?",
        answer: "Very. I focus on web performance, application responsiveness, FPS optimization, GPU configuration, Java performance, network latency, input latency, resource usage, and startup time. Getting the frame rate and feel right matters as much as the code being correct.",
        tags: ["performance", "optimization", "fps", "gpu", "latency", "speed", "optimize", "java"],
    },
    {
        id: "github",
        question: "Where can I see your code?",
        answer: "Each project on this page links straight to its live deployment, so you can try the real thing rather than read about it. If you'd like the source, just ask in the contact form.",
        tags: ["github", "code", "source", "repository", "repo", "open source", "see"],
    },
    {
        id: "softskills",
        question: "What are your soft skills?",
        answer: "I think in products, not tickets — I care about the user experience end to end and about shipping something that feels finished. I'm a fast learner, comfortable solo or in a team, and I communicate clearly.",
        tags: ["soft", "skills", "personality", "team", "communication", "product", "work"],
    },
    {
        id: "salary",
        question: "What salary are you expecting?",
        answer: "I'm flexible and open to discussing what's fair based on the scope, the role, and the responsibilities. My focus is on work where I can own a product end to end — let's connect and talk numbers.",
        tags: ["salary", "compensation", "pay", "money", "expect", "rate"],
    },
];

// Derive all quick replies directly from the knowledge base so they always stay in sync
const quickReplies = knowledgeBase.map((entry) => entry.question);

interface Message {
    from: "user" | "bot";
    text: string;
    id: number;
}

function findAnswer(userInput: string): string {
    const lower = userInput.toLowerCase();
    
    // Find best matching entry
    let bestMatch: (typeof knowledgeBase)[0] | null = null;
    let bestScore = 0;

    for (const entry of knowledgeBase) {
        const score = entry.tags.reduce((acc, tag) => {
            return acc + (lower.includes(tag) ? 1 : 0);
        }, 0);
        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }

    if (bestMatch && bestScore > 0) return bestMatch.answer;
    
    return "That's a great question! I might not have a specific answer for that, but feel free to reach out directly — I'll love to chat!";
}

// Convert **bold** markdown to HTML
function formatText(text: string): React.ReactNode[] {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
    });
}

// Conversation history for OpenAI context
interface ChatMessage {
    role: "user" | "assistant";
    content: string;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            from: "bot",
            text: "Hey! 👋 I'm Mohamed's AI portfolio assistant. Ask me anything about his skills, projects, or availability — or pick a quick question below.",
            id: 0,
        },
    ]);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasNotification, setHasNotification] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const idRef = useRef(1);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay appearance for smoother page load
        const t = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setHasNotification(false);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isTyping) return;

        const userText = text.trim();
        const userMsg: Message = { from: "user", text: userText, id: idRef.current++ };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Build updated history matching route.ts expected array format: { role: 'user' | 'assistant', content: string }
        const updatedHistory = [
            ...chatHistory,
            { role: "user" as const, content: userText }
        ];

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    messages: updatedHistory.map(msg => ({
                        role: msg.role,
                        content: msg.content
                    }))
                }),
            });

            const data = await res.json();
            const answer: string = data.reply ?? "Sorry, I couldn't get a response. Please try again or use the contact form on this page!";

            // Save assistant reply to history for context
            setChatHistory([
                ...updatedHistory,
                { role: "assistant" as const, content: answer },
            ]);

            const botMsg: Message = { from: "bot", text: answer, id: idRef.current++ };
            setMessages((prev) => [...prev, botMsg]);
        } catch {
            const errMsg: Message = {
                from: "bot",
                text: "⚠️ Connection issue. Please try again or use the contact form on this page!",
                id: idRef.current++,
            };
            setMessages((prev) => [...prev, errMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") sendMessage(input);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] flex flex-col items-end gap-3 pointer-events-none">
            {/* Chat Window */}
            <div
                className={`transition-all duration-500 origin-bottom-right ${
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                }`}
                style={{ filter: isOpen ? "none" : "blur(4px)" }}
            >
                <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] sm:h-[520px] flex flex-col rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(14,165,233,0.15)] overflow-hidden"
                    style={{ background: "linear-gradient(145deg, rgba(10,10,26,0.97), rgba(5,5,16,0.99))" }}>
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/3">
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-lg font-bold text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] shrink-0">
                            M
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#05050f] animate-pulse" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-bold text-sm tracking-tight">Mohamed</p>
                            <p className="text-accent-cyan text-[10px] font-mono tracking-wider uppercase">AI Portfolio Assistant • Online</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-gray-400 hover:text-white shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} gap-2`}
                            >
                                {msg.from === "bot" && (
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1">
                                        M
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                                        msg.from === "user"
                                            ? "bg-gradient-to-br from-accent-cyan to-accent-blue text-white rounded-br-sm"
                                            : "bg-white/7 text-gray-200 rounded-bl-sm border border-white/8"
                                    }`}
                                >
                                    {msg.from === "bot" ? formatText(msg.text) : msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-xs font-bold text-white shrink-0">
                                    M
                                </div>
                                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/7 border border-white/8 flex gap-1.5 items-center">
                                    <span className="w-1.5 h-1.5 bg-accent-cyan/70 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <span className="w-1.5 h-1.5 bg-accent-cyan/70 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-1.5 h-1.5 bg-accent-cyan/70 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-white/10 bg-white/2">
                        <div className="flex gap-2 items-center">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:bg-white/8 transition-all"
                                disabled={isTyping}
                            />
                            <button
                                onClick={() => sendMessage(input)}
                                disabled={isTyping || !input.trim()}
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center shrink-0 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                            >
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group pointer-events-auto"
                aria-label="Open AI Chat"
            >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple opacity-30 animate-ping" />
                
                {/* Icon */}
                <div className={`transition-all duration-300 ${isOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
                    {isOpen ? (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.89 1.79 5.42 4.5 6.87-.5 1.5-1.7 2.8-1.72 2.83-.1.11-.12.27-.06.41.06.13.19.22.33.22.05 0 3.25-.5 5.32-2.12.53.07 1.08.12 1.63.12C17.5 19 22 15.42 22 11S17.5 3 12 3z" />
                        </svg>
                    )}
                </div>

                {/* Notification badge */}
                {hasNotification && !isOpen && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-pink rounded-full text-[9px] text-white font-bold flex items-center justify-center border-2 border-[#050510] animate-bounce">
                        1
                    </span>
                )}
            </button>
        </div>
    );
}
