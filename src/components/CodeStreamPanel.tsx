"use client";

import { useTypingSnippet } from "@/lib/codeSnippets";

export default function CodeStreamPanel({ className = "" }: { className?: string }) {
    const { snippet, text } = useTypingSnippet();

    return (
        <div className={`relative flex h-full min-h-0 flex-col font-mono ${className}`}>
            {/* Stream header */}
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
                <span className="flex items-center gap-1.5 text-[9px] font-semibold tracking-widest text-accent-purple">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
                    LIVE STREAM
                </span>
                <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-gray-400">
                    {snippet.lang}
                </span>
            </div>

            {/* Typed code */}
            <div className="min-h-0 flex-1 overflow-hidden px-3 py-2.5">
                <p className="mb-1 truncate text-[9px] text-gray-500">{snippet.title}</p>
                <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[10px] leading-relaxed text-cyan-200">
                    {text}
                    <span className="ml-0.5 inline-block h-2.5 w-1 animate-pulse bg-accent-cyan align-middle" />
                </pre>
            </div>
        </div>
    );
}
