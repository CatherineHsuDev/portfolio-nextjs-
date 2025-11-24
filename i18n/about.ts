// frontend/i18n/about.ts
import type { Dict } from "./types";

export type AboutContent = {
  // Title
  title: string;

  // Intro
  intro: string;

  // Section: My Path into Engineering
  pathHeading: string;
  pathParagraph1: string;
  pathParagraph2: string;

  // Bullet list under "Along the way..."
  bulletModernPrefix: string;
  bulletModernLink: string;
  bulletModernSuffix: string;

  bulletDb: string;

  bulletAuthPrefix: string;
  bulletAuthLink: string;
  bulletAuthSuffix: string;

  bulletFullPrefix: string;
  bulletFullLink: string;
  bulletFullSuffix: string;

  // Section: How I Work
  howHeading: string;
  howParagraph1: string;
  howParagraph2: string;

  // Section: What I Build
  buildHeading: string;
  buildIntro: string;
  buildItems: string[];

  // Section: Why This Portfolio Exists
  portfolioHeading: string;
  portfolioIntro: string;

  // CTA
  ctaLabel: string;
};

export const aboutTranslations: Dict<AboutContent> = {
  en: {
    // Title
    title: "About Me",

    // Intro
    intro:
      "I am Catherine, a bilingual self-taught full-stack developer who builds modern, practical, and human-centered web applications. I specialize in React, Next.js, TypeScript, and Node.js. I enjoy turning ideas into clean, structured, and useful products.",

    // Section: My Path into Engineering
    pathHeading: "My Path into Engineering",
    pathParagraph1:
      "My journey into software was not traditional. I learned most things independently by watching tutorials, studying documentation, analyzing real websites, breaking down UI patterns, and building projects from scratch. Over the years, I taught myself how to think like an engineer by repeatedly solving real problems.",
    pathParagraph2: "Along the way, I have worked on projects such as:",

    // Bullet list
    bulletModernPrefix: "Modernizing legacy frontends and",
    bulletModernLink: "refactoring outdated code",
    bulletModernSuffix: "",

    bulletDb: "Designing relational databases with 15 or more tables",

    bulletAuthPrefix: "Building authentication systems like",
    bulletAuthLink: "Google OAuth",
    bulletAuthSuffix: "",

    bulletFullPrefix: "Completing",
    bulletFullLink: "full-stack systems end-to-end",
    bulletFullSuffix: "(frontend > backend > database > deployment)",

    // Section: How I Work
    howHeading: "How I Work",
    howParagraph1:
      "I approach development with a designer’s mindset. Clarity, spacing, consistency, and patterns all matter. I like building systems that feel clean, intentional, and easy to maintain.",
    howParagraph2:
      "I care deeply about user experience. Good product engineering should make users feel that everything is smooth, intuitive, and exactly what they need, not confusing or frustrating. If a project idea can make someone’s life or work easier, I genuinely want to build it.",

    // Section: What I Build
    buildHeading: "What I Build",
    buildIntro: "I build tools that are practical:",
    buildItems: [
      "Full-stack web applications",
      "Frontend UI systems",
      "Relational databases",
      "Desktop utilities and automation tools",
      "Prototypes and MVPs for new ideas",
    ],

    // Section: Why This Portfolio Exists
    portfolioHeading: "Why This Portfolio Exists",
    portfolioIntro:
      "This portfolio is a reflection of my learning journey. It includes the projects I built, the challenges I solved, and the engineering mindset I have developed. It is a snapshot of how I think, how I learn, and how I grow with trial and error through building.",

    // CTA
    ctaLabel: "Get in Touch",
  },

  zh: {
    // Title
    title: "關於我",

    // Intro
    intro:
      "我是 Catherine，一位雙語自學全端開發者，專注打造現代、實用且以使用者為中心的網頁應用。我使用 React、Next.js、TypeScript 與 Node.js，喜歡把想法轉化為乾淨、有結構、真正有用的產品。",

    // Section: My Path into Engineering
    pathHeading: "我如何走進工程領域",
    pathParagraph1:
      "我的軟體開發之路並不傳統。我完全靠自學成長，包括觀看教學影片、閱讀官方文件、拆解真實網站、分析 UI pattern，並從零開始完成專案。透過一次次解決實際問題，我學會用工程師的方式思考。",
    pathParagraph2: "在這個過程中，我做過的專案包括：",

    // Bullet list
    bulletModernPrefix: "將舊有前端現代化，並",
    bulletModernLink: "重構老舊程式碼",
    bulletModernSuffix: "",

    bulletDb: "設計包含 15 個以上資料表的關聯式資料庫",

    bulletAuthPrefix: "建置驗證系統，例如",
    bulletAuthLink: "Google OAuth",
    bulletAuthSuffix: "",

    bulletFullPrefix: "完成",
    bulletFullLink: "從頭到尾的全端系統",
    bulletFullSuffix: "(從前端、後端、資料庫到部署)",

    // Section: How I Work
    howHeading: "我如何工作",
    howParagraph1:
      "我用設計師的思維在寫程式，版面留白、層級關係、一致性與可重複的 pattern 對我來說都很重要。我喜歡建立結構清晰、容易維護、能長期演進的系統。",
    howParagraph2:
      "我重視使用者體驗。好的產品工程應該讓使用者感到好用、流程順暢、對!我就是要這個功能，而不是製造障礙，使用起來不流暢。如果一個專案和想法能讓某人的生活或工作變得更順，我就會很想把它做好。",

    // Section: What I Build
    buildHeading: "我能夠打造的東西",
    buildIntro: "我喜歡做實用、有影響力的工具：",
    buildItems: [
      "全端網頁應用（Full-stack web applications）",
      "前端 UI 系統（Frontend UI systems）",
      "關聯式資料庫（Relational databases）",
      "桌面小工具與自動化工具",
      "新點子的原型與 MVP",
    ],

    // Section: Why This Portfolio Exists
    portfolioHeading: "為什麼會有這個作品集",
    portfolioIntro:
      "這個作品集紀錄了我的學習歷程，包含我完成的專案、解決過的挑戰，以及逐漸形成的工程思維。它是一個當下的紀錄，呈現我如何思考、如何學習，也如何透過實作和試錯不斷成長。",

    // CTA
    ctaLabel: "聯絡我",
  },
};
