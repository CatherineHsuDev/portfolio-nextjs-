import type { Dict } from "./types";

export type BannerContent = {
  smallTitle: string; // 小標
  mainTitle: string; // 大標
  paragraph1: string; // 主文第一段
  paragraph2: string; // 主文第二段
  button: string; // 按鈕文字
};

export const bannerTranslations: Dict<BannerContent> = {
  en: {
    smallTitle: "About Me",
    mainTitle: "I'm Catherine",
    paragraph1:
      "I am Catherine, a bilingual self-taught full-stack developer. I build React and Next.js applications, and small tools that make daily work and life easier, with a focus on clean code and thoughtful design.",
    paragraph2:
      "This portfolio showcases a selection of meaningful projects from my learning journey.",
    button: "Read More",
  },

  zh: {
    smallTitle: "關於我",
    mainTitle: "Hi，我是 Catherine",
    paragraph1:
      "我是一位雙語自學的全端開發者，主要使用 React 與 Next.js 打造簡潔、實用、\n能減少日常工作負擔的小工具與網頁應用。我重視乾淨的程式碼與有思考的介面設計。",
    paragraph2: "這份作品集精選了我學習旅程中幾個有意義的專案。",
    button: "了解更多",
  },
};
