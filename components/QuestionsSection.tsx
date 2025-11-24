"use client";
import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { faqTranslations } from "@/i18n";

const QuestionsSection = () => {
  const { lang } = useLanguage();
  const t = faqTranslations[lang];
  return (
    <section className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">{t.intro}</p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {t.items.map((item) => (
            <div key={item.id}>
              <h3 className="font-semibold text-gray-900">{item.question}</h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif">{t.ctaTitle}</h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">{t.ctaDesc}</p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
