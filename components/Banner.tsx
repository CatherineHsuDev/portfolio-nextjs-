"use client";

import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24 flex flex-col items-center text-center">
        {/* 小標 */}
        <span className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          About Me
        </span>

        {/* 大標 */}
        <h1 className="text-4xl md:text-5xl font-serif leading-tight">
          I’m Catherine
        </h1>

        {/* 主體文字（你的 About Me 內容） */}
        <p className="mt-6 max-w-3xl text-sm md:text-base leading-relaxed text-gray-700">
          I’m Catherine — a bilingual self-taught full-stack developer. I build
          React/Next.js applications and small tools that make daily work and
          life easier, with a focus on clean code and thoughtful design.
        </p>

        <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-700">
          This portfolio shares a few meaningful projects from my learning
          journey.
        </p>

        {/* 按鈕 */}
        <div className="mt-6 flex sm:flex-row gap-3">
          <Link
            href="/about"
            className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
