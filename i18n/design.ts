// frontend/i18n/design.ts
import type { Dict } from "./types";

export const designTranslations: Dict<{
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;

  cards: {
    label: string;
    title: string;
    desc: string;
    imageSrc?: string;
  }[];
}> = {
  en: {
    sectionLabel: "Design",
    sectionTitle: "Systems that work",
    sectionSubtitle:
      "Accessible, responsive interfaces built on solid foundations",

    cards: [
      {
        label: "Accessibility",
        title: "Interfaces built for everyone",
        desc: "WCAG standards, semantic HTML, keyboard navigation",
        imageSrc: "/project/wireframe.png",
      },
      {
        label: "Color",
        title: "Palettes that guide the eye",
        desc: "Contrast, harmony, and intention in every shade",
        imageSrc: "/project/color.png",
      },
      {
        label: "Layout",
        title: "Grids that hold everything together",
        desc: "Responsive layouts that adapt without breaking",
      },
      {
        label: "Structure",
        title: "Structure that makes sense",
        desc: "Clean hierarchies and patterns users understand",
      },
    ],
  },

  zh: {
    sectionLabel: "設計",
    sectionTitle: "實用且清晰的設計系統",
    sectionSubtitle: "以可存取性與一致性為核心的介面設計",

    cards: [
      {
        label: "無障礙設計",
        title: "讓每個人都能使用的介面",
        desc: "符合 WCAG、語意化 HTML、鍵盤操作支援",
        imageSrc: "/project/wireframe.png",
      },
      {
        label: "色彩",
        title: "引導視線的色彩設計",
        desc: "對比、協調，以及每個色階背後的意圖",
        imageSrc: "/project/color.png",
      },
      {
        label: "版面配置",
        title: "穩定支撐內容的格線系統",
        desc: "能自適應的響應式排版，不因裝置而破版",
      },
      {
        label: "結構",
        title: "使用者容易理解的資訊架構",
        desc: "清晰層級、直覺化的介面與使用模式",
      },
    ],
  },
};
