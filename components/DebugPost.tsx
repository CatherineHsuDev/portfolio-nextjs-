// frontend/app/(somewhere)/StoryTemplate.tsx
"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { PROJECT_STORIES } from "@/i18n/debug-data"; // ← 路徑依你的結構調整

type DebugPostProps = {
  slug: string;
};

export default function DebugPost({ slug }: DebugPostProps) {
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
        <h1 className="text-3xl md:text-4xl font-serif leading-tight">
          {story.title}
        </h1>

        <p className="mt-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
          {story.content}
        </p>
      </div>
    </section>
  );
}
