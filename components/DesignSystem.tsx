"use client";

import Link from "next/link";

const DesignSystems = () => {
  return (
    <section className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Design
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Systems that work
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Accessible, responsive interfaces built on solid foundations
          </p>
        </div>

        {/* Cards layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-[1fr]">
          {/* Card 1 - 左側高卡：文字 + 底圖 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] overflow-hidden flex flex-col lg:row-span-2">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Accessibility
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                Interfaces built for everyone
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                WCAG standards, semantic HTML, keyboard navigation
              </p>

              <Link
                href="#"
                className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
              >
                Learn <span>›</span>
              </Link>
            </div>

            <img
              src="https://picsum.photos/600/500?random=21"
              alt="Accessibility design"
              className="w-full h-52 object-cover"
            />
          </div>

          {/* Card 2 - 右上大卡：左文字 + 右圖，橫向 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] overflow-hidden flex flex-col lg:col-span-2 lg:flex-row">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Color
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                Palettes that guide the eye
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Contrast, harmony, and intention in every shade
              </p>

              <Link
                href="#"
                className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
              >
                Explore <span>›</span>
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <img
                src="https://picsum.photos/800/500?random=22"
                alt="Design collaboration"
                className="w-full h-56 lg:h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 - 左下小卡 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] p-6 flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Layout
            </span>
            <h3 className="mt-3 text-xl font-serif leading-snug">
              Grids that hold everything together
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Responsive layouts that adapt without breaking
            </p>

            <Link
              href="#"
              className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
            >
              Discover <span>›</span>
            </Link>
          </div>

          {/* Card 4 - 右下小卡 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] p-6 flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Structure
            </span>
            <h3 className="mt-3 text-xl font-serif leading-snug">
              Structure that makes sense
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Clean hierarchies and patterns users understand
            </p>

            <Link
              href="#"
              className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
            >
              View <span>›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystems;
