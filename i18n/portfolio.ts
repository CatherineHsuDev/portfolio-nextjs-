// frontend/i18n/portfolio.ts
import type { Dict } from "./types";

export type PortfolioDict = {
  overviewTitle: string;
  projectCategory: string;
  designCategory: string;
  navProject: string;
  navDesign: string;
  codeAlt: string;
  artAlt: string;
};

export const portfolioTranslations: Dict<PortfolioDict> = {
  en: {
    overviewTitle: "Portfolio Overview",
    projectCategory: "Code Projects",
    designCategory: "Art",
    navProject: "Project",
    navDesign: "Art",
    codeAlt: "Code projects preview",
    artAlt: "Art and visual work preview",
  },

  zh: {
    overviewTitle: "作品集總覽",
    projectCategory: "程式專案",
    designCategory: "視覺創作",
    navProject: "專案",
    navDesign: "藝術",
    codeAlt: "開發專案預覽",
    artAlt: "視覺與插畫作品預覽",
  },
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  story: string;
  tags?: string[];
};

// 雙語 project cards
export const projectItems: Dict<ProjectItem[]> = {
  en: [
    {
      id: "snapgram",
      title: "Snapgram Social App",
      description:
        "An Instagram-style social app where users can upload photos, create posts, like and bookmark content, built with React, TypeScript, Vite, Tailwind CSS, and Appwrite.",
      image: "/project/snapgram.png",
      github: "https://github.com/CatherineHsuDev/snapgram-deploy-demo",
      story: "/portfolio/project/snapgram-story",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "React Query",
        "Appwrite",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A conceptual e-commerce project focusing on database schema design and system architecture, including product catalog, orders, users, and inventory relationships.",
      image: "/project/ecommerce.png",
      github:
        "https://github.com/CatherineHsuDev/Ecommerce-ver-react/blob/main/clothing-run.sql",
      story: "/portfolio/project/ecommerce-story",
      tags: ["JavaScript", "Database Design", "ERD", "System Architecture"],
    },
    {
      id: "course-portal",
      title: "Course Portal",
      description:
        "A full-stack course management portal with a React + Vite frontend and a Node.js/Express API backend, featuring JWT-based auth, Google login, and MongoDB for persistent storage.",
      image: "/project/course.png",
      github: "https://github.com/CatherineHsuDev/coursePortal-backend",
      story: "/portfolio/project/course-portal-story",
      tags: [
        "React",
        "Vite",
        "React Router",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Google OAuth",
        "Passport",
      ],
    },
    {
      id: "homework-pdf-tool",
      title: "Photos-to-PDF Tool",
      description:
        "A lightweight tool designed for teachers to instantly merge multiple homework photos into a single PDF. Built with Next.js and supports PWA, allowing installation as a home-screen Web App.",
      image: "/project/pdftool.png",
      github: "https://github.com/CatherineHsuDev/images-to-pdf",
      story: "/portfolio/project/homework-pdf-tool-story",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Route Handlers API",
        "pdf-lib",
        "PWA",
      ],
    },
  ],

  zh: [
    {
      id: "snapgram",
      title: "Snapgram 社交平台",
      description:
        "一個類似 Instagram 的社交 App，使用者可上傳照片、發文、按讚與收藏。使用 React、TypeScript、Vite、Tailwind CSS 與 Appwrite 製作。",
      image: "/project/snapgram.png",
      github: "https://github.com/CatherineHsuDev/snapgram-deploy-demo",
      story: "/portfolio/project/snapgram-story",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "React Query",
        "Appwrite",
      ],
    },
    {
      id: "ecommerce",
      title: "電商系統",
      description:
        "一個專注於資料庫架構與系統設計的電商概念專案，包含商品、訂單、使用者與庫存的資料關聯。",
      image: "/project/ecommerce.png",
      github:
        "https://github.com/CatherineHsuDev/Ecommerce-ver-react/blob/main/clothing-run.sql",
      story: "/portfolio/project/ecommerce-story",
      tags: ["JavaScript", "資料庫設計", "ERD", "系統架構"],
    },
    {
      id: "course-portal",
      title: "課程管理平台",
      description:
        "全端課程管理平台，前端使用 React + Vite、後端使用 Node.js/Express，支援 JWT、Google 登入與 MongoDB。",
      image: "/project/course.png",
      github: "https://github.com/CatherineHsuDev/coursePortal-backend",
      story: "/portfolio/project/course-portal-story",
      tags: [
        "React",
        "Vite",
        "React Router",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Google OAuth",
        "Passport",
      ],
    },
    {
      id: "homework-pdf-tool",
      title: "作業照片一鍵轉 PDF 小工具",
      description:
        "為老師開發的教學小工具，支援多張照片上傳並自動合併成單一 PDF，使用 Next.js 構建，並支援 PWA，可加入手機主畫面當作 Web App。",
      image: "/project/homework-pdf.png",
      github: "https://github.com/CatherineHsuDev/pdftool.png",
      story: "/portfolio/project/homework-pdf-tool-story",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Route Handlers API",
        "pdf-lib",
        "PWA",
      ],
    },
  ],
};
