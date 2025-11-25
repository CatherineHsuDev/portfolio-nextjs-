import type { Dict } from "./types";

export type FooterContent = {
  brand: string;

  addressLabel: string;
  addressValue: string;

  contactLabel: string;
  contactEmail: string;

  navHome: string;
  navPortfolio: string;
  navProject: string;
  navBlog: string;
  navContact: string;
  navGithub: string;

  policyPrivacy: string;
  policyTerms: string;
  policyCookies: string;

  copyright: string;
};

export const footerTranslations: Dict<FooterContent> = {
  en: {
    brand: "Catherine",

    addressLabel: "Address",
    addressValue: "Taichung, Taiwan",

    contactLabel: "Contact",
    contactEmail: "catherine.hsu.dev@gmail.com",

    navHome: "Home",
    navPortfolio: "Portfolio",
    navProject: "Project",
    navBlog: "Blog",
    navContact: "Contact",
    navGithub: "Github",
    policyPrivacy: "Privacy policy",
    policyTerms: "Terms of service",
    policyCookies: "Cookie settings",

    copyright: "All rights reserved.",
  },

  zh: {
    brand: "Catherine",

    addressLabel: "地址",
    addressValue: "台中 台灣",

    contactLabel: "聯絡方式",
    contactEmail: "catherine.hsu.dev@gmail.com",

    navHome: "首頁",
    navPortfolio: "作品集",
    navProject: "專案",
    navBlog: "部落格",
    navContact: "聯絡我",
    navGithub: "Github",

    policyPrivacy: "隱私權政策",
    policyTerms: "服務條款",
    policyCookies: "Cookie 設定",

    copyright: "保留所有權利。",
  },
};
