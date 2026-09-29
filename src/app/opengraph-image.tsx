import { ImageResponse } from "next/og";

export const alt = "Mohamed — Software Developer: full-stack web, AI integrations, automation, and real-time systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const skills = [
    "TypeScript · Python · Java",
    "React · Next.js · Node.js",
    "AI Agents · Automation",
    "SaaS · Real-Time · APIs",
];

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 90,
                    background: "linear-gradient(135deg, #030712 0%, #0a0a1a 50%, #050510 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Accent glows */}
                <div
                    style={{
                        position: "absolute",
                        top: -180,
                        right: -120,
                        width: 620,
                        height: 620,
                        borderRadius: 9999,
                        background: "radial-gradient(circle, rgba(14,165,233,0.35) 0%, rgba(14,165,233,0) 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -220,
                        left: -120,
                        width: 620,
                        height: 620,
                        borderRadius: 9999,
                        background: "radial-gradient(circle, rgba(129,140,248,0.32) 0%, rgba(129,140,248,0) 70%)",
                        display: "flex",
                    }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
                    <div
                        style={{
                            width: 18,
                            height: 18,
                            borderRadius: 9999,
                            background: "#10B981",
                            display: "flex",
                        }}
                    />
                    <div style={{ display: "flex", color: "#6EE7B7", fontSize: 26, letterSpacing: 4 }}>
                        AVAILABLE FOR PROJECTS &amp; ROLES
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 20 }}>
                    <div style={{ display: "flex", fontSize: 104, fontWeight: 700, color: "#38BDF8" }}>
                        &lt;Mohamed /&gt;
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 44,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: 16,
                        letterSpacing: -1,
                    }}
                >
                    Software Developer
                </div>

                <div style={{ display: "flex", fontSize: 30, color: "#94A3B8", marginBottom: 44 }}>
                    From first idea and interface to backend, AI, and deployment.
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            style={{
                                display: "flex",
                                padding: "12px 22px",
                                borderRadius: 9999,
                                border: "1px solid rgba(255,255,255,0.16)",
                                background: "rgba(255,255,255,0.05)",
                                color: "#CBD5E1",
                                fontSize: 26,
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
