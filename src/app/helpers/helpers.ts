import { portfolioApps } from "@/data";

export const getFeaturedApps = () =>
    portfolioApps.filter((app) => app.featured);

export const getAllApps = () => portfolioApps;
