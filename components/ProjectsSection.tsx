"use client";

import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Work
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Projects that matter
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Full-stack applications solving real problems
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
            {/* 圖片固定比例，自動伸縮 */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=31"
                alt="E-commerce platform"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 文字區 */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-lg md:text-xl font-serif">
                E-commerce platform
              </h3>
              <p className="text-sm text-gray-600">
                Twenty-table database with React frontend and Node backend
              </p>

              {/* 技術標籤 */}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  React
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  Node.js
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  PostgreSQL
                </span>
              </div>

              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
              >
                View project <span className="ml-1">›</span>
              </Link>
            </div>
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=32"
                alt="Electron desktop tool"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-lg md:text-xl font-serif">
                Electron desktop tool
              </h3>
              <p className="text-sm text-gray-600">
                Yield comparison workflow for semiconductor manufacturing
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  Electron
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  TypeScript
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
                  Desktop
                </span>
              </div>

              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
              >
                View project <span className="ml-1">›</span>
              </Link>
            </div>
          </article>
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
