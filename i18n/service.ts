// frontend/i18n/service.ts
import type { Dict } from "./types";

export const serviceTranslations: Dict<{
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;

  cards: {
    label: string;
    title: string;
    desc: string;
    link: string;
    imageSrc: string;
    linkLabel: string;
  }[];
}> = {
  en: {
    sectionLabel: "Expertise",
    sectionTitle: "What I build and deliver",
    sectionSubtitle:
      "Complete applications from frontend to backend infrastructure",

    cards: [
      {
        label: "Development",
        title: "Modern web applications end-to-end",
        desc: "React and Next.js interfaces, Node.js APIs, databases, cloud auth",
        link: "/portfolio/project", // ⭐ project 列表
        imageSrc: "/project/course.png",
        linkLabel: "Explore →",
      },
      {
        label: "Legacy modernization",
        title: "Modernizing aging systems with contemporary tools",
        desc: "Refactoring, modularizing, restructuring legacy codebases for long-term maintainability.",
        link: "/portfolio/project/snapgram-story", // ⭐ Snapgram
        imageSrc: "/project/snapgram-3.png",
        linkLabel: "See details →",
      },
      {
        label: "E-commerce & system design",
        title: "Database and architecture foundations",
        desc: "Schema design, ERD modeling, relational structure planning, system workflows.",
        link: "/portfolio/project/ecommerce-story", // ⭐ Ecommerce
        imageSrc: "/project/database.png",
        linkLabel: "View work →",
      },
    ],
  },

  zh: {
    sectionLabel: "專業領域",
    sectionTitle: "我擅長打造的產品與解決方案",
    sectionSubtitle: "涵蓋前端介面到後端架構的完整應用程式",

    cards: [
      {
        label: "開發",
        title: "現代化全端 Web 應用程式",
        desc: "React、Next.js 介面、Node.js API、資料庫、雲端認證",
        link: "/portfolio/project", // ⭐ 和英文一樣
        imageSrc: "/project/course.png",
        linkLabel: "查看 →",
      },
      {
        label: "舊系統現代化",
        title: "以現代工具為老舊系統注入新生命",
        desc: "重構、模組化、改善可維護性，讓系統更可延伸與穩定。",
        link: "/portfolio/project/snapgram-story",
        imageSrc: "/project/snapgram-3.png",
        linkLabel: "了解更多 →",
      },
      {
        label: "電商與系統設計",
        title: "資料庫與架構規劃基礎",
        desc: "Schema 設計、ERD 建模、關聯規劃、系統流程思考。",
        link: "/portfolio/project/ecommerce-story",
        imageSrc: "/project/database.png",
        linkLabel: "查看作品 →",
      },
    ],
  },
};
