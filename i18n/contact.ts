// frontend/i18n/contact.ts
import type { Dict } from "./types";

export type ContactContent = {
  title: string;
  intro1: string;
  intro2: string;
  emailTitle: string;
  emailDesc: string;
  emailLabel: string;
  profilesTitle: string;
  profilesDesc: string;
  github: string;
  linkedin: string;
  topicsTitle: string;
  topics: string[];
};

export const contactTranslations: Dict<ContactContent> = {
  en: {
    title: "Contact",
    intro1:
      "If something in this portfolio resonates with you, I’d love to connect. I’m open to frontend and full-stack roles, collaborations, and meaningful technical conversations.",
    intro2:
      "I’m comfortable working and communicating in both English and Mandarin, whether it’s for documentation, code reviews, or meetings.",

    emailTitle: "Email",
    emailDesc:
      "The best way to reach me is by email. Feel free to share a brief introduction and what you’d like to talk about.",
    emailLabel: "catherine.hsu.dev@gmail.com",

    profilesTitle: "Professional Profiles",
    profilesDesc: "You can also find more about my work and background here:",
    github: "GitHub",
    linkedin: "LinkedIn",

    topicsTitle: "What to Reach Out About",
    topics: [
      "Frontend or full-stack engineering roles",
      "Small tools, internal utilities, or web app ideas",
      "Questions about any project in this portfolio",
    ],
  },

  zh: {
    title: "聯絡我",
    intro1:
      "如果這份作品集中有任何內容引起你的興趣，非常歡迎寫信給我。我願意討論前端或全端職位、合作機會，或任何有深度的技術交流。",
    intro2:
      "我能以中文與英文順暢工作與溝通，包含撰寫技術文件、程式碼審查與會議討論。",

    emailTitle: "電子郵件",
    emailDesc:
      "與我聯絡最直接的方式是寄信。歡迎簡單介紹你自己，以及想討論的內容。",
    emailLabel: "catherine.hsu.dev@gmail.com",

    profilesTitle: "專業檔案",
    profilesDesc: "你也可以在以下平台看到更多我的背景與作品：",
    github: "GitHub",
    linkedin: "LinkedIn",

    topicsTitle: "建議聯絡我的主題",
    topics: [
      "前端或全端工程職缺",
      "小工具、內部系統或網站開發合作",
      "作品集專案相關問題",
    ],
  },
};
