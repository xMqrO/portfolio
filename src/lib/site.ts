export const site = {
    email: null,
    github: null,
    linkedin: null,
} as {
    email: string | null;
    github: string | null;
    linkedin: string | null;
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
