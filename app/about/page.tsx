// "use client";

// import Link from "next/link";

// const AboutPage = () => {
//   return (
//     <section className="w-full bg-white">
//       <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
//           About Me
//         </h1>

//         {/* Intro */}
//         <p className="text-gray-700 text-base leading-relaxed mb-6">
//           I’m Catherine — a bilingual self-taught full-stack developer who
//           builds modern, practical, and human-centered web applications. I
//           specialize in React, Next.js, TypeScript, Node.js. I enjoy turning
//           ideas into clean, structured, and useful products.
//         </p>

//         {/* Section: My Path */}
//         <h2 className="text-xl font-semibold mt-10 mb-4">
//           My Path into Engineering
//         </h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           My journey into software wasn’t traditional. I learned everything
//           independently — studying documentation, analyzing real websites,
//           breaking down UI patterns, and building projects from scratch. Over
//           the years, I taught myself how to think like an engineer by repeatedly
//           solving real problems.
//         </p>

//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Along the way, I’ve worked on projects such as:
//         </p>

//         <ul className="list-disc list-inside text-gray-700 text-base space-y-2 mb-6">
//           <li>
//             Modernizing legacy frontends and{" "}
//             <Link
//               href="/portfolio"
//               className="text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               refactoring outdated code
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/portfolio"
//               className="text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Designing relational databases with 15+ tables
//             </Link>
//           </li>

//           <li>
//             Building authentication systems like{" "}
//             <Link
//               href="/portfolio"
//               className="text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Google OAuth
//             </Link>
//           </li>

//           <li>
//             Completing{" "}
//             <Link
//               href="/portfolio"
//               className="text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               full-stack systems end-to-end
//             </Link>{" "}
//             — frontend → backend → database → deployment
//           </li>
//         </ul>

//         {/* Section: How I Work */}
//         <h2 className="text-xl font-semibold mt-10 mb-4">How I Work</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           I approach development with a designer’s mindset — clarity, spacing,
//           consistency, and patterns matter. I like building systems that feel
//           clean, intentional, and easy to maintain.
//         </p>

//         <p className="text-gray-700 text-base leading-relaxed mb-6">
//           I care deeply about user experience. Good engineering should reduce
//           friction, not create it. If a project can make someone’s life or work
//           easier, I want to build it.
//         </p>

//         {/* Section: What I Build */}
//         <h2 className="text-xl font-semibold mt-10 mb-4">What I Build</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           I build tools that are practical and impactful:
//         </p>

//         <ul className="list-disc list-inside text-gray-700 text-base space-y-2 mb-6">
//           <li>Full-stack web applications</li>
//           <li>Frontend UI systems</li>
//           <li>Relational databases</li>
//           <li>Desktop utilities and automation tools</li>
//           <li>Prototypes and MVPs for new ideas</li>
//         </ul>

//         {/* Section: Portfolio */}
//         <h2 className="text-xl font-semibold mt-10 mb-4">
//           Why This Portfolio Exists
//         </h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-8">
//           This portfolio is a reflection of my learning journey — the projects I
//           built, the challenges I solved, and the engineering mindset I’ve
//           developed. It’s a snapshot of how I think, how I learn, and how I grow
//           through building.
//         </p>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <a
//             href="/contact"
//             className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;

"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { aboutTranslations } from "@/i18n";

const AboutPage = () => {
  const { lang } = useLanguage();
  const t = aboutTranslations[lang]; // 這裡改成用 aboutTranslations

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* Title */}
        <h1 className="mb-8 text-center text-4xl font-serif md:text-5xl">
          {t.title}
        </h1>

        {/* Intro */}
        <p className="mb-6 text-base leading-relaxed text-gray-700">
          {t.intro}
        </p>

        {/* Section: My Path */}
        <h2 className="mt-10 mb-4 text-xl font-semibold">{t.pathHeading}</h2>
        <p className="mb-4 text-base leading-relaxed text-gray-700">
          {t.pathParagraph1}
        </p>
        <p className="mb-4 text-base leading-relaxed text-gray-700">
          {t.pathParagraph2}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-base text-gray-700">
          <li>
            {t.bulletModernPrefix}{" "}
            <Link
              href="/portfolio/project/snapgram-story"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t.bulletModernLink}
            </Link>
            {t.bulletModernSuffix && <> {t.bulletModernSuffix}</>}
          </li>

          <li>
            <Link
              href="/portfolio/project/ecommerce-story"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t.bulletDb}
            </Link>
          </li>

          <li>
            {t.bulletAuthPrefix}{" "}
            <Link
              href="/portfolio/project/course-portal-story"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t.bulletAuthLink}
            </Link>
            {t.bulletAuthSuffix && <> {t.bulletAuthSuffix}</>}
          </li>

          <li>
            {t.bulletFullPrefix}{" "}
            <Link
              href="/portfolio/project"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t.bulletFullLink}
            </Link>{" "}
            {t.bulletFullSuffix}
          </li>
        </ul>

        {/* Section: How I Work */}
        <h2 className="mt-10 mb-4 text-xl font-semibold">{t.howHeading}</h2>
        <p className="mb-4 text-base leading-relaxed text-gray-700">
          {t.howParagraph1}
        </p>
        <p className="mb-6 text-base leading-relaxed text-gray-700">
          {t.howParagraph2}
        </p>

        {/* Section: What I Build */}
        <h2 className="mt-10 mb-4 text-xl font-semibold">{t.buildHeading}</h2>
        <p className="mb-4 text-base leading-relaxed text-gray-700">
          {t.buildIntro}
        </p>

        <ul className="mb-6 list-inside list-disc space-y-2 text-base text-gray-700">
          {t.buildItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Section: Why This Portfolio Exists */}
        <h2 className="mt-10 mb-4 text-xl font-semibold">
          {t.portfolioHeading}
        </h2>
        <p className="mb-8 text-base leading-relaxed text-gray-700">
          {t.portfolioIntro}
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            {t.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
