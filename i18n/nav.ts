// frontend/i18n/nav.ts
import type { Dict } from "./types";

export type NavContent = {
  brand: string;
  portfolio: string;
  blog: string;
  more: string;
  about: string;
  contact: string;
  resume: string;
  github: string;
  languageLabelShortEn: string; // 按鈕顯示
  languageLabelShortZh: string; // 如果你之後要用得到
};

export const navTranslations: Dict<NavContent> = {
  en: {
    brand: "Catherine",
    portfolio: "Portfolio",
    blog: "Blog",
    more: "More",
    about: "About",
    contact: "Contact",
    resume: "Resume",
    github: "Github",
    languageLabelShortEn: "EN",
    languageLabelShortZh: "ZH",
  },
  zh: {
    brand: "Catherine",
    portfolio: "作品集",
    blog: "部落格",
    more: "更多",
    about: "關於我",
    contact: "聯絡我",
    resume: "履歷",
    github: "Github",
    languageLabelShortEn: "EN",
    languageLabelShortZh: "繁中",
  },
};
