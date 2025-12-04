"use client";
import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { contactTranslations } from "@/i18n";

const ContactPage = () => {
  const { lang } = useLanguage();
  const t = contactTranslations[lang];
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
          {t.title}
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
          {t.intro1}
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-8 text-left">
          {t.intro2}{" "}
        </p>

        {/* How to reach me */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t.emailDesc}{" "}
            </p>
            <p className="mt-2">
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t.emailLabel}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">{t.profilesTitle}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-2">
              {t.profilesDesc}
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              <li>
                <Link
                  href="https://github.com/CatherineHsuDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t.github}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/catherine-hsu-733239319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {t.linkedin}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">{t.topicsTitle}</h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
              {t.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
