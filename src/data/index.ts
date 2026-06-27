import { portfolioApps } from "./";

export * from "./portfolioApps";
export * from "./SkillsStacks";

export const getFeaturedApps = () =>
    portfolioApps.filter((app) => app.featured);
export const getAllApps = () => portfolioApps;
