export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const apiVersion = "2024-01-01"; // or today's date for latest
export const useCdn = process.env.NODE_ENV === "production";
