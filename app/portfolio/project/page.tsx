

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
