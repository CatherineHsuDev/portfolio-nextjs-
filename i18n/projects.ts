// Projects that matter at Home page
// frontend/i18n/projects.ts
import type { Dict } from "./types";

export const projectsSectionTranslations: Dict<{
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;

  cards: {
    imageSrc: string;
    title: string;
    desc: string;
    tags: string[];
  }[];

  viewProject: string;
  viewAll: string;
}> = {
  en: {
    sectionLabel: "Work",
    sectionTitle: "Projects that matter",
    sectionSubtitle: "Full-stack applications built with clean architecture",

    cards: [
      {
        imageSrc: "/project/database.png",
        title: "E-commerce Platform Database Prototype",
        desc: "A database-driven e-commerce prototype featuring over 15 relational tables with Postgres SQL script and test values.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        imageSrc: "/project/snapgram-2.png",

        title: "Social Platform",
        desc: "A social platform prototype featuring posts, interactions, and user authentication, designed with a focus on API and data-model architecture.",
        tags: ["React", "Node.js", "MongoDB"],
      },
    ],

    viewProject: "View project",
    viewAll: "View all",
  },

  zh: {
    sectionLabel: "作品",
    sectionTitle: "重要的專案",
    sectionSubtitle: "從前端到後端，聚焦實際問題的完整開發",

    cards: [
      {
        imageSrc: "/project/database.png",

        title: "電商平台資料庫原型",
        desc: "包含 15 張以上資料表的電商資料庫設計，採用 PostgreSQL 撰寫 schema 與測試資料。",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        imageSrc: "/project/snapgram-3.png",
        title: "社群平台",
        desc: "具備貼文發布、互動與身分驗證的社群平台原型，著重在 API 設計與資料架構規劃。",
        tags: ["React", "Node.js", "MongoDB"],
      },
    ],

    viewProject: "查看專案",
    viewAll: "查看全部作品",
  },
};
