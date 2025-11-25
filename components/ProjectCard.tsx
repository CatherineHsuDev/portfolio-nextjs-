"use client";

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  github?: string;
  story?: string; // href
  storyLabel?: string; // ⭐ 按鈕顯示文字（依語言切）
  tags?: string[];
  imageLink?: string; // ⭐ 圖片點擊連結
};

export default function ProjectCard({
  title,
  description,
  image,
  reverse = false,
  github,
  story,
  storyLabel,
  tags,
  imageLink,
}: ProjectCardProps) {
  return (
    <section className="w-full bg-color-background">
      <div
        className={`mx-auto max-w-6xl px-6 py-14 md:py-24 flex flex-col-reverse md:flex-row items-center gap-5 md:gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left – Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-serif leading-tight">
            {title}
          </h1>

          <p className="text-lg text-black/70 line-clamp-3">{description}</p>

          {/* ⭐ Tags Section */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-4 flex flex-row gap-2 w-full md:max-w-[66%] justify-center">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="sm:flex-1 inline-flex justify-center rounded-full bg-blue-600 
                px-6 py-2.5 text-sm font-medium text-white shadow-sm 
                hover:bg-blue-700 transition-colors"
              >
                GitHub
              </Link>
            )}

            {story && (
              <Link
                href={story}
                className="sm:flex-1 inline-flex justify-center rounded-full border border-gray-300 
                bg-white px-6 py-2.5 text-sm font-medium text-gray-800 
                hover:bg-gray-50 transition-colors"
              >
                {storyLabel ?? "Story"}
              </Link>
            )}
          </div>
        </div>

        {/* Right – Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            {imageLink ? (
              <Link href={imageLink}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover cursor-pointer"
                />
              </Link>
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
