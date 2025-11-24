// frontend/i18n/hero.ts
import type { Dict } from "./types";

export type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
};

export const heroTranslations: Dict<HeroContent> = {
  en: {
    title: "Full-Stack Developer Portfolio",
    subtitle:
      "Showcasing modern web experiences built with Next.js, React, TypeScript, and cloud-based backends including BaaS platforms.",
    primaryCta: "Explore Portfolio",
    secondaryCta: "Debug Story",
    imageAlt: "Developer workspace",
  },

  zh: {
    title: "全端開發者作品集",
    subtitle:
      "展示以 Next.js、React、TypeScript 與雲端後端（BaaS 平台）打造的現代網頁體驗與實作專案。",
    primaryCta: "查看作品集",
    secondaryCta: "Debug 筆記",
    imageAlt: "開發者的工作環境",
  },
};
