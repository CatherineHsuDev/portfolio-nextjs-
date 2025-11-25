// app/portfolio/project/stories-data.ts

import type { Dict } from "@/i18n/types";

export type ProjectStory = {
  slug: string;
  title: string;
  content: string;
  github?: string;
  demo?: string;
};

export const PROJECT_STORIES: Dict<ProjectStory[]> = {
  en: [
    {
      slug: "snapgram-story",
      title: "Snapgram – Debug Story",
      content: `
Snapgram is a lightweight Instagram-style social platform built to practice SPA architecture.
It includes authentication, post creation, image uploads, likes, and bookmark features.

Key Challenges:
1. Implementing a full Appwrite-based authentication flow
2. Handling image uploads (dropzone, compression, preview)
3. Synchronizing global state using React Query
4. Building the application with Vite + TypeScript

5. After 2023, Appwrite introduced major updates to its integration format.  
   Older tutorials relied on built-in types and interfaces, but these approaches are no longer supported.  
   During the rebuild, I discovered that:
   - Appwrite now requires all authentication-related types to be rewritten manually  
   - Database documents have been replaced by structured tables  
   - Row data types must be redefined using custom interfaces  
   This required updating all authentication flows, DB schemas, and data models.
`,
      github: "https://github.com/CatherineHsuDev/snapgram-deploy-demo",
      demo: "https://snapgram-deploy-demo.onrender.com",
    },
    {
      slug: "ecommerce-story",
      title: "E-commerce Platform – Debug Story",
      content: `
This project was created to practice backend database schema design,
covering products, categories, stock, orders, and user relationships.

Highlights:
- ERD modeling and relational table design
- Implementing both one-to-many and many-to-many relationships
- Practicing real SQL queries

The schema was inspired by SQL tutorials on YouTube, particularly those simulating
an Amazon-style e-commerce platform.  
The design supports multi-variant products—for example, 3 colors × 3 sizes = 9 SKU combinations—  
and includes considerations such as stock management, inventory logic,  
and order formatting for customer checkouts.
`,
      github: "https://github.com/CatherineHsuDev/Ecommerce-ver-react",
      demo: "https://evaraclothing.netlify.app/",
    },
    {
      slug: "course-portal-story",
      title: "Course Portal – Debug Story",
      content: `
This project originally started as a tutorial. However, due to the 2024 Google OAuth security update
and the outdated Heroku deployment steps used in the tutorial,
the original instructions were no longer applicable.

About six months later, when I revisited the project,  
I redeployed it using Render instead of Heroku and successfully brought the system online.
The entire OAuth flow had to be rebuilt using updated documentation.

Challenges:
1. New Google OAuth redirect policy requirements
2. Rebuilding authentication using Express + Passport + JWT
3. Domain verification issues during Render deployment
4. Additional adjustments required for a fully separated frontend-backend architecture
`,
      github: "https://github.com/CatherineHsuDev/coursePortal-backend",
      demo: "https://courseportal-frontend.onrender.com/",
    },
  ],

  zh: [
    {
      slug: "snapgram-story",
      title: "Snapgram社群 — 開發紀錄",
      content: `
Snapgram 是一個類似 Instagram 的小型社交平台，用來練習 SPA 架構，
並包含使用者登入、發文、上傳圖片、按讚與收藏等功能。

主要挑戰：
1. 使用 Appwrite 實作完整的 Auth 流程  
2. 處理圖片上傳（dropzone、壓縮、預覽）  
3. 使用 React Query 做全站資料同步  
4. 使用 Vite + TypeScript 打包 SPA  

Appwrite 於 2023 年後更新了 API 串接方式。早期可以使用內建的 type 和 interface，
但在重新實作時發現這些寫法已被禁止。包含：

- 所有驗證流程相關的型別都必須自行定義  
- 資料庫文件（document）改為以資料表（table）為主  
- 每個 table 的資料列（row data）都需要重新撰寫 interface  
- 舊的文件格式全面淘汰，需要重建資料模型  

因此整個專案的驗證、資料結構與 API 互動方式都必須重新調整。
`,
      github: "https://github.com/CatherineHsuDev/snapgram-deploy-demo",
      demo: "https://snapgram-deploy-demo.onrender.com",
    },
    {
      slug: "ecommerce-story",
      title: "電商平台 — 開發紀錄",
      content: `
這個專案主要用來練習後端資料庫 schema 設計，
包含商品、分類、庫存、訂單、用戶等關聯。

主要內容：
- ERD 與資料表關聯建模  
- 多對多／一對多關係的設計  
- 實作 SQL 查詢、測試 schema 是否合理  

參考 YouTube 上以 Amazon 電商為示例的 SQL 架構教學，
練習設計多變體商品（例如 3 種顏色 × 3 種尺寸 = 9 種 SKU 組合），
並思考：

- 庫存系統如何追蹤每個 SKU  
- 顧客下單後訂單資料要如何儲存  
- 前後端未來如何串接這個資料庫  

這個專案主要聚焦在資料結構、關聯與電商後端邏輯。
`,
      github: "https://github.com/CatherineHsuDev/Ecommerce-ver-react",
      demo: "https://evaraclothing.netlify.app/",
    },
    {
      slug: "course-portal-story",
      title: "課程平台 — 開發紀錄",
      content: `
這個專案原本是一個教學示範（tutorial），但由於 Google OAuth 在 2024 年進行安全性更新，
加上原本以 Heroku 部署的教學流程已不適用，導致教學內容無法直接使用。

在暫停約半年後重新回來實作時，我改用 Render 部署，並成功讓專案上線。
整個登入流程需要完全重建，也必須自己查新版文件。

主要挑戰：
1. Google OAuth 新版 redirect policy 的限制  
2. 使用 Express + Passport + JWT 重建登入流程  
3. Render 部署時的 domain 驗證問題  
4. 全端分離架構下的 API 與登入流程調整  

這個專案讓我熟悉 OAuth 實際串接流程，以及前後端分離專案的部署細節。
`,
      github: "https://github.com/CatherineHsuDev/coursePortal-backend",
      demo: "https://courseportal-frontend.onrender.com/",
    },
  ],
};
