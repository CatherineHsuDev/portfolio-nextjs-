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
    {
      slug: "homework-pdf-tool-story",
      title: "Photos-to-PDF Tool — Development Story",
      content: `
This tool was developed to solve a practical bottleneck in my teaching workflow.
Students often submit homework through Messenger in multiple photos, and manually downloading,
ordering, and converting them into a single PDF was slow and repetitive.

To streamline the process, I built a lightweight web tool that allows users to upload multiple images
and instantly merge them into a single downloadable PDF using pdf-lib.

The project was driven by a real need and significantly improved my daily grading workflow.
It also strengthened my experience with Next.js Route Handlers, binary file handling (FormData, Uint8Array, Blob),
and PWA setup for mobile installation.

Key Challenges:
1. Handling FormData and multiple file uploads  
2. Using pdf-lib to embed images into PDF pages  
3. Returning binary data through a Route Handler API  
4. Setting up PWA (manifest.json) for home-screen installation  
5. Improving UX with a custom upload button and a smoother selection flow  

The tool is now fully usable on both mobile and desktop and has noticeably improved the speed and consistency
of my homework review process. Future enhancements include thumbnail previews, drag-to-reorder,
and automatic PDF naming.
`,
      github: "https://github.com/CatherineHsuDev/images-to-pdf",
      demo: "#",
    },
    {
      slug: "image-cropper-tool-story",
      title: "Image Cropping & Proportional Scaling Tool — Development Notes",
      content: `
Whenever I needed to resize or adjust an image slightly, I had to open Photoshop,  
a heavy, slow-to-launch application even though the task itself was extremely simple.

So I built a lightweight tool to handle these tasks instantly.

One of the features I use the most is the “Fill Canvas” button.  
I simply enter the canvas size → drop in the image → click “Fill Canvas,”  
and the tool automatically scales the image proportionally to cover the entire canvas.
No manual dragging or resizing like in Photoshop.


This custom image cropping tool supports:
- Custom canvas size (with transparent grid background)
- Dragging to reposition the image
- Proportional scaling that preserves the aspect ratio
- Eight resize handles with fixed reverse-anchor behavior
- Canvas zoom and image zoom (dual-layer zoom)
- One-click Fill Canvas to cover the entire canvas instantly
- Visual cropping of overflow areas (non-destructive)

The design goal was “fast, intuitive, and no heavy software,”  
allowing me to complete in seconds what previously required opening Photoshop.

Main challenges:
1. Converting between screen coordinates and canvas coordinates (canvasZoom)
2. Ensuring the cursor always holds the point originally clicked during dragging
3. Implementing cursor-centered zoom instead of top-left scaling
4. Using geometric calculations for resize handles to prevent drifting during fast movement
5. Synchronizing image scale, offset, anchor, and proportional constraints

The tool is built entirely with vanilla JavaScript, HTML Canvas, and CSS.

Results:
With this tool, I no longer need to open Photoshop for simple adjustments.  
My workflow is lighter, faster, and more convenient especially with the Fill Canvas feature.

Future improvements:
- PNG / JPG export
- Alignment guides
- Undo / Redo
- Image rotation and flipping
- Canvas size presets

This tool removes a small but frequent friction point from my daily workflow.
`,
      github: "https://github.com/CatherineHsuDev/img-crop-tool",
      demo: "#",
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
    {
      slug: "homework-pdf-tool-story",
      title: "作業照片一鍵轉 PDF 小工具 — 開發紀錄",
      content: `
這個小工具源自我在教學流程中的真實痛點：學生常用 Messenger 傳交多張作業照片，
每次都需要手動下載、整理順序、匯入 Notability，再轉成 PDF，非常耗時。

為了讓批改流程更順暢，我開發了這個「作業照片轉 PDF」的小工具。
使用者可以一次選取多張照片，後端會用 pdf-lib 自動合併成一份 PDF 並下載。

這個工具是根據實際需求而開發，完整解決了我在批改作業時的操作瓶頸，
同時也讓我更熟悉 Next.js Route Handlers、檔案處理流程（binary、FormData）
以及 PWA 設定與行動裝置相容性。

主要挑戰：
1. 處理 FormData 與多檔案上傳  
2. 使用 pdf-lib 合併圖片為 PDF  
3. 建立 Route Handler API 並回傳二進位檔案  
4. 設定 PWA（manifest.json）讓工具能加入手機主畫面  
5. UI/UX 設計：隱藏 file input、使用自訂按鈕、優化選檔流程  

這個工具目前已能在手機與桌面順利使用，也大幅改善了我批改作業的速度與效率。
未來計劃加入縮圖預覽、拖曳排序、自動命名等功能。
`,
      github: "https://github.com/CatherineHsuDev/images-to-pdf",
      demo: "#",
    },
    {
      slug: "image-cropper-tool-story",
      title: "圖片裁切與等比例縮放小工具 — 開發紀錄",
      content: `
每次只是想「調整圖片尺寸」或「移動一下構圖位置」，卻必須開啟 Photoshop，
不但啟動時間長，也非常吃電腦資源，而我要做的事情其實非常簡單。

於是我決定自己做一個能快速處理這類需求的小工具。

其中我最常用、也最省時的功能，就是「一鍵填滿 Fill Canvas」。  
我只需要輸入畫布尺寸 → 插入圖片 → 按下一鍵填滿，  
圖片就會自動等比例放大到覆蓋整個畫布，完全不用像在 Photoshop 那樣手拉調整。

這個自製圖片裁切工具支援：
- 自訂畫布尺寸（透明格子底）
- 拖曳調整圖片位置
- 維持原比例的等比例縮放
- 八個方向的縮放手把（固定反向錨點）
- 畫布 zoom 與圖片 zoom（雙層縮放）
- 一鍵填滿（Fill Canvas）快速覆蓋整個畫布
- 超出畫布範圍的圖片視覺裁切（不破壞原圖）

整體操作以「快速、直覺、不開大型軟體」為目標，
讓我能在幾秒內完成過去需要開 Photoshop 的操作。

主要挑戰：
1. 螢幕座標與畫布座標換算（canvasZoom）
2. 拖曳時游標始終抓住原本按下的位置，不會飄移
3. 圖片縮放以游標為中心，而不是固定左上角
4. 拉伸手把使用幾何方式解 scale，快速拖曳時仍不飄移
5. 圖片縮放、位移、錨點與 offset 的同步運算

完全使用原生 JavaScript、HTML Canvas 與 CSS 實作，不依賴外部套件。

使用成果：
有了這個工具後，我不再需要為了做一件非常簡單的事而打開 Photoshop，
工作流程變得更輕量、更快速，尤其是一鍵填滿功能讓日常處理圖片更直覺。

未來計畫加入：
- 匯出 PNG / JPG
- 對齊線（alignment guides）
- Undo / Redo
- 圖片旋轉與翻轉
- 常用畫布尺寸 preset

這個工具成功把我日常流程中一個「小但頻繁的痛點」完全移除。
`,
      github: "https://github.com/CatherineHsuDev/img-crop-tool",
      demo: "#",
    },
  ],
};
