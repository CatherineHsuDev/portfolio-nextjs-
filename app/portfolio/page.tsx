"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { portfolioTranslations } from "@/i18n";

export default function PortfolioHome() {
  const { lang } = useLanguage();
  const t = portfolioTranslations[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
      {/* 上方文案 */}
      <h3 className="text-3xl md:text-4xl font-serif">{t.overviewTitle}</h3>

      {/* 下方左右兩張圖 */}
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        {/* 左：Code Projects */}
        <Link
          href="/portfolio/project"
          className="group relative w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[70%] md:w-[60%] lg:w-[55%] aspect-square overflow-hidden rounded-2xl shadow-sm mx-auto">
            <img
              src="/gallery-2.png"
              alt={t.codeAlt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* ★★★ 遮罩 + 文案移到正方形容器內 ★★★ */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span
                className={`text-white text-lg md:text-xl tracking-wide ${
                  lang === "en" ? "font-semibold" : ""
                }`}
              >
                {t.projectCategory}
              </span>
            </div>
          </div>
        </Link>

        {/* 右：Art */}
        <Link
          href="/portfolio/design"
          className="group relative w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[70%] md:w-[60%] lg:w-[55%] aspect-square overflow-hidden rounded-2xl shadow-sm mx-auto">
            <img
              src="/gallery-3.png"
              alt={t.artAlt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span
                className={`text-white text-lg md:text-xl tracking-wide ${
                  lang === "en" ? "font-semibold" : ""
                }`}
              >
                {t.designCategory}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
