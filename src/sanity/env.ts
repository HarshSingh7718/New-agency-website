export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing1";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-17";
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333";

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET,
);
