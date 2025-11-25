"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { projectsSectionTranslations } from "@/i18n/projects";

const ProjectsSection = () => {
  const { lang } = useLanguage();
  const t = projectsSectionTranslations[lang];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            {t.sectionLabel}
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            {t.sectionTitle}
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.cards.map((card, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col h-full"
            >
              {/* 圖片固定比例，自動伸縮 */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 文字區 */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg md:text-xl font-serif">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>

                {/* 技術標籤 */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/portfolio/project"
                  className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                >
                  {t.viewProject}
                  <span className="ml-1">›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio/project"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
