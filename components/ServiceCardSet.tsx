"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { serviceTranslations } from "@/i18n/service";
import Link from "next/link";

const ServiceCardSet = () => {
  const { lang } = useLanguage();
  const t = serviceTranslations[lang];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            {t.sectionLabel}
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            {t.sectionTitle}
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-sm bg-white overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {card.label}
                </span>

                <h3 className="mt-3 text-xl font-serif leading-snug">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600">{card.desc}</p>

                <Link
                  href={card.link}
                  className="mt-auto pt-4 inline-flex text-sm font-medium text-gray-900 hover:underline"
                >
                  {card.linkLabel}
                </Link>
              </div>

              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSet;
