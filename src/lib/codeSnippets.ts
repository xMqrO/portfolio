"use client";

import { useEffect, useState } from "react";

export interface CodeSnippet {
    title: string;
    lang: string;
    code: string;
}

export const codeSnippets: CodeSnippet[] = [
    { title: "Product Surface", lang: "TSX", code: "export default function Product() {\n  const { idea, stack, deploy } = useBuild();\n\n  return <Ship idea={idea} stack={stack} deploy={deploy} />;\n}" },
    { title: "REST Controller", lang: "JS", code: "router.get('/projects/:id', auth, async (req, res) => {\n  const project = await Project.find(req.params.id);\n  res.json({ data: project, links: { self: req.originalUrl } });\n});" },
    { title: "GSAP 3D ScrollTrigger", lang: "TS", code: "gsap.to('.cyber-card', {\n  rotateY: 360,\n  z: 200,\n  scrollTrigger: { scrub: 1, trigger: '#section' }\n});" },
];

export function useTypingSnippet() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    const snippet = codeSnippets[index];

    useEffect(() => {
        let isCancelled = false;
        let charIndex = 0;
        const targetText = snippet.code;
        setText("");

        const interval = setInterval(() => {
            if (isCancelled) return;
            if (charIndex <= targetText.length) {
                setText(targetText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    if (!isCancelled) {
                        setIndex((prev) => (prev + 1) % codeSnippets.length);
                    }
                }, 3000);
            }
        }, 35);

        return () => {
            isCancelled = true;
            clearInterval(interval);
        };
    }, [snippet]);

    return { snippet, text };
}
