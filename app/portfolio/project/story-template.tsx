"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { PROJECT_STORIES } from "../../../i18n/stories-data";
import Link from "next/link";

type StoryTemplateProps = {
  slug: string;
};

export default function StoryTemplate({ slug }: StoryTemplateProps) {
  const { lang } = useLanguage();

  const storyList = PROJECT_STORIES[lang];
  const story = storyList.find((s) => s.slug === slug);

  if (!story) {
    return (
      <section className="w-full bg-color-background">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-gray-600">Story coming soon…</p>
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

        {/* ⭐ ONLY for ecommerce-story: embed PDF */}
        {slug === "ecommerce-story" && (
          <div className="mt-12">
            <h2 className="text-xl font-serif mb-4 text-gray-800">
              ERD / Database Design PDF
            </h2>

            <iframe
              src="/project/ecommercedb.pdf"
              className="w-full h-[800px] border rounded-lg"
              title="E-commerce Database PDF"
            />
          </div>
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
