// frontend/i18n/faq.ts
import type { Dict } from "./types";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSectionContent = {
  title: string;
  intro: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  items: FAQItem[];

  // 👉 新增這兩個 key
  expandAll: string;
  collapse: string;
};

export const faqTranslations: Dict<FAQSectionContent> = {
  en: {
    title: "Questions",
    intro:
      "Find answers about my process, capabilities, and how we can work together.",
    ctaTitle: "Still have questions?",
    ctaDesc: "Reach out directly and let us talk about your needs.",
    ctaButton: "Contact",

    expandAll: "Show All",
    collapse: "Hide",

    items: [
      {
        id: "tech-stack",
        question: "What is your tech stack?",
        answer:
          "React, Next.js, TypeScript, and Node.js. I work with PostgreSQL or MongoDB and use OAuth for secure authentication.",
      },
      {
        id: "legacy-code",
        question: "How do you work with existing or legacy code?",
        answer:
          "I begin by understanding the existing structure, then add features or refactor progressively without breaking the original logic. When certain parts are overly complex or no longer maintainable, I redesign and implement them in a clearer and more scalable way.",
      },
      {
        id: "project-types",
        question: "What project types do you handle?",
        answer:
          "Full-stack apps, e-commerce systems, Electron desktop tools, and accessible design systems.",
      },
      {
        id: "design-systems",
        question: "How do you approach design systems?",
        answer:
          "By studying UI patterns, accessibility standards, and building consistent, purpose-driven components.",
      },
      {
        id: "bilingual",
        question: "Can you work bilingually?",
        answer:
          "Yes. I am fully comfortable communicating and documenting work in English and Mandarin.",
      },
      {
        id: "collaboration-style",
        question: "What is your collaboration style?",
        answer:
          "Clear communication, upfront questions, and consistent progress updates.",
      },
    ],
  },

  zh: {
    title: "常見問題",
    intro: "這裡整理了一些關於我的合作方式、技術能力與合作模式的常見問題。",
    ctaTitle: "還有其他想問的嗎？",
    ctaDesc: "歡迎參考聯絡頁面直接寫信和我聊聊你的需求。",
    ctaButton: "聯絡我",

    expandAll: "展開全部",
    collapse: "收起",

    items: [
      {
        id: "tech-stack",
        question: "你主要使用哪些技術？",
        answer:
          "我主要使用 React、Next.js、TypeScript 和 Node.js，並搭配 PostgreSQL 或 MongoDB，也熟悉使用 OAuth 做安全的登入驗證。",
      },
      {
        id: "legacy-code",
        question: "你如何接手既有專案或舊程式碼？",
        answer:
          "我會先深入理解現有架構，在不影響既有邏輯的前提下加入新功能並逐步重構需要改善的部分。若有區塊已經過度複雜或不具可維護性，我會以更清晰、可延伸的方式重新設計與實作。",
      },
      {
        id: "project-types",
        question: "你經手過哪些類型的專案？",
        answer:
          "全端網頁應用、電商系統、Electron 桌面工具，以及重視可用性與一致性的設計系統。",
      },
      {
        id: "design-systems",
        question: "你如何看待設計系統？",
        answer:
          "我會先研究 UI pattern 與無障礙設計原則，再建立一致、可維護、符合實際需求的元件與設計規則。",
      },
      {
        id: "bilingual",
        question: "你可以雙語工作嗎？",
        answer: "可以。我可以用中文與英文撰寫文件、溝通需求與做程式碼審查。",
      },
      {
        id: "collaboration-style",
        question: "你的合作風格是什麼？",
        answer:
          "清楚溝通、事前問清楚需求，以及持續定期回報進度，確保雙方對專案方向有共識。",
      },
    ],
  },
};
