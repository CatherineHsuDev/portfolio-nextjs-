// import ProjectCard from "@/components/ProjectCard";

// export default function ProjectPage() {
//   return (
//     <div>
//       <ProjectCard
//         title="Snapgram Social App"
//         description="An Instagram-style social app where users can upload photos, create posts, like and bookmark content, built with React, TypeScript, Vite, Tailwind CSS, and Appwrite."
//         image="/project/snapgram.png" // 這行換成你實際的截圖路徑
//         github="https://github.com/CatherineHsuDev/snapgram-deploy-demo"
//         story="/portfolio/project/snapgram-story"
//         tags={[
//           "React",
//           "TypeScript",
//           "Vite",
//           "Tailwind CSS",
//           "React Router",
//           "React Query",
//           "Appwrite",
//         ]}
//       />
//       <ProjectCard
//         title="E-commerce Platform"
//         description="A conceptual e-commerce project focusing on database schema design and system architecture, including product catalog, orders, users, and inventory relationships."
//         image="/project/ecommerce.png"
//         github="https://github.com/CatherineHsuDev/Ecommerce-ver-react/blob/main/clothing-run.sql"
//         story="/portfolio/project/ecommerce-story"
//         tags={["JavaScript", "Database Design", "ERD", "System Architecture"]}
//       />
//       <ProjectCard
//         title="Course Portal"
//         description="A full-stack course management portal with a React + Vite frontend and a Node.js/Express API backend, featuring JWT-based auth, Google login, and MongoDB for persistent storage."
//         image="/project/course.png" // 換成你實際的截圖路徑
//         github="https://github.com/yourname/course-portal" // 如果有
//         story="/portfolio/project/course-portal-story"
//         tags={[
//           "React",
//           "Vite",
//           "React Router",
//           "Axios",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "Mongoose",
//           "JWT",
//           "Google OAuth",
//           "Passport",
//         ]}
//       />
//     </div>
//   );
// }

// import ProjectCard from "@/components/ProjectCard";
// import { projectItems } from "@/lib/constants";
// export default function ProjectPage() {
//   return (
//     <div>
//       {projectItems.map((p) => (
//         <ProjectCard
//           key={p.id}
//           title={p.title}
//           description={p.description}
//           image={p.image}
//           github={p.github}
//           story={p.story}
//           tags={p.tags}
//         />
//       ))}
//     </div>
//   );
// }

"use client";

import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/app/LanguageProvider";
import { projectItems } from "@/i18n/portfolio";

export default function ProjectPage() {
  const { lang } = useLanguage();

  const storyText = lang === "zh" ? "開發故事" : "Story";

  return (
    <div>
      {projectItems[lang].map((p) => (
        <ProjectCard
          key={p.id}
          title={p.title}
          description={p.description}
          image={p.image}
          github={p.github}
          story={p.story}
          storyLabel={storyText} // ⭐ 這裡依語言給文字
          tags={p.tags}
          imageLink={p.story} // ⭐ 例如圖也連到 Story 頁
        />
      ))}
    </div>
  );
}
