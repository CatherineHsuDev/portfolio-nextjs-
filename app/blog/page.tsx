// app/stories/page.tsx
"use client";

import React, { useState } from "react";
import { PROJECT_STORIES } from "@/i18n/debug-data";
import { useLanguage } from "@/app/LanguageProvider";

const StoriesPage = () => {
  const { lang } = useLanguage(); // "en" | "zh"

  // 依照目前語言選擇對應的 stories
  const stories = PROJECT_STORIES[lang];

  // 記錄每個 story 是否展開：key = slug
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleStory = (slug: string) => {
    setExpanded((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const isZh = lang === "zh";

  return (
    <main className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24 flex flex-col gap-8">
        <header className="text-center md:text-left mb-4">
          <h1 className="text-3xl md:text-4xl font-serif leading-tight">
            Debug / Dev Notes
          </h1>
          <p className="mt-2 text-base text-black/70">
            {isZh
              ? "把開發中踩過的坑、查過的錯誤訊息與解法整理成小故事。"
              : "Short stories of bugs, error messages, and how they were fixed during development."}
          </p>
        </header>

        {/* 列出所有故事卡片 */}
        {stories.map((story) => {
          const isExpanded = expanded[story.slug] ?? false;

          return (
            <section
              key={story.slug}
              className="w-full bg-white/90 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="px-6 py-6 md:px-8 md:py-8 flex flex-col gap-3 md:gap-4">
                <h2 className="text-xl md:text-2xl font-serif leading-snug">
                  {story.title}
                </h2>

                {/* 簡單顯示 slug 當作類別 / tag feel */}
                <p className="text-sm text-gray-500">{story.slug}</p>

                {/* 內容：預設 clamp，展開時顯示全文 */}
                <p
                  className={`text-base text-black/70 whitespace-pre-line ${
                    isExpanded ? "" : "line-clamp-4"
                  }`}
                >
                  {story.content}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => toggleStory(story.slug)}
                    className="cursor-pointer inline-flex items-center rounded-full border border-gray-300 
                    bg-white px-4 py-2 text-sm font-medium text-gray-800 
                    hover:bg-gray-50 transition-colors"
                  >
                    {isExpanded
                      ? isZh
                        ? "收合內容"
                        : "Collapse"
                      : isZh
                      ? "展開完整內容"
                      : "Read full story"}
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default StoriesPage;
