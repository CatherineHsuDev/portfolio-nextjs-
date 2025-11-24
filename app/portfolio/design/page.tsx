"use client";

const files = [
  "gallery-1.jpg",
  "gallery-2.png",
  "gallery-3.png",
  "gallery-4.png",
  "gallery-5.png",
  // "gallery-1.jpg", // 第 6 格暫時再用第一張
];

export default function DesignPage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif leading-tight">
            Gallery
          </h1>
          {/* <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl">
            Visual explorations, interface snapshots, and design directions
            across different projects.
          </p> */}
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
            >
              <div className="w-full aspect-[4/3]">
                <img
                  src={`/${file}`}
                  alt={`Design sample ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
