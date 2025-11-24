// frontend/i18n/portfolio.ts
import type { Dict } from "./types";

export type PortfolioDict = {
  overviewTitle: string;
  projectCategory: string;
  designCategory: string;
  navProject: string;
  navDesign: string;
  codeAlt: string;
  artAlt: string;
};

export const portfolioTranslations: Dict<PortfolioDict> = {
  en: {
    overviewTitle: "Portfolio Overview",
    projectCategory: "Code Projects",
    designCategory: "Art",
    navProject: "Project",
    navDesign: "Art",
    codeAlt: "Code projects preview",
    artAlt: "Art and visual work preview",
  },

  zh: {
    overviewTitle: "作品集總覽",
    projectCategory: "程式專案",
    designCategory: "視覺創作",
    navProject: "專案",
    navDesign: "藝術",
    codeAlt: "開發專案預覽",
    artAlt: "視覺與插畫作品預覽",
  },
};
