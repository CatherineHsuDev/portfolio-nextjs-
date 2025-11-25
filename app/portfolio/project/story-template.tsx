"use client";

import { useState } from "react";
import { useLanguage } from "@/app/LanguageProvider";
import { PROJECT_STORIES } from "../../../i18n/stories-data";
import Link from "next/link";

type StoryTemplateProps = {
  slug: string;
};

const storyUILocales = {
  en: {
    comingSoon: "Story coming soon…",
    pdfTitle: "ERD / Database Design PDF",
    openPdf: "Open PDF",
  },
  zh: {
    comingSoon: "故事內容即將更新…",
    pdfTitle: "ERD / 資料庫設計 PDF",
    openPdf: "查看 PDF",
  },
};

export default function StoryTemplate({ slug }: StoryTemplateProps) {
  const { lang } = useLanguage();
  const ui = storyUILocales[lang]; // ⭐ 這裡取得 UI 文字

  const storyList = PROJECT_STORIES[lang];
  const story = storyList.find((s) => s.slug === slug);

  const [pdfOpen, setPdfOpen] = useState(false);

  if (!story) {
    return (
      <section className="w-full bg-color-background">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-gray-600">{ui.comingSoon}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-color-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Title */}
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-serif leading-tight">
          {story.title}
        </h1>

        {/* Buttons (Desktop) */}
        <div className="mt-2 md:flex gap-3 justify-center md:justify-end hidden">
          {story.github && (
            <Link
              href={story.github}
              target="_blank"
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              GitHub
            </Link>
          )}

          {story.demo && (
            <Link
              href={story.demo}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          )}
        </div>

        {/* Content */}
        <p className="mt-6 text-gray-600 whitespace-pre-line text-sm md:text-base">
          {story.content}
        </p>

        {/* ⭐ ONLY for ecommerce-story: 卡片 + Modal */}
        {slug === "ecommerce-story" && (
          <>
            {/* 卡片 */}
            <div className="mt-12 rounded-2xl p-6 bg-white shadow-sm">
              <h2 className="text-xl font-serif text-gray-800">
                {ui.pdfTitle}
              </h2>

              <button
                onClick={() => setPdfOpen(true)}
                className="mt-4 inline-flex items-center rounded-full border border-gray-300  bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                {ui.openPdf}
              </button>
            </div>

            {/* Modal */}
            {pdfOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div className="bg-white rounded-xl w-full max-w-5xl h-[85vh] shadow-lg overflow-hidden relative">
                  <button
                    onClick={() => setPdfOpen(false)}
                    className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full px-3 py-1 text-xs"
                  >
                    ✕
                  </button>

                  <iframe
                    src="/project/ecommercedb.pdf"
                    className="w-full h-full"
                    title="E-commerce Database PDF"
                  />
                </div>
              </div>
            )}
          </>
        )}

        {/* Buttons (Mobile) */}
        <div className="mt-10 flex gap-5 justify-center md:hidden">
          {story.github && (
            <Link
              href={story.github}
              target="_blank"
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              GitHub
            </Link>
          )}

          {story.demo && (
            <Link
              href={story.demo}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
