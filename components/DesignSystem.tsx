"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { designTranslations } from "@/i18n/design";

const DesignSystems = () => {
  const { lang } = useLanguage();
  const t = designTranslations[lang];

  return (
    <section className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            {t.sectionLabel}
          </span>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            {t.sectionTitle}
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-[1fr]">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] overflow-hidden flex flex-col lg:row-span-2">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {t.cards[0].label}
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                {t.cards[0].title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{t.cards[0].desc}</p>
            </div>

            <img
              src={t.cards[0].imageSrc}
              alt="Accessibility design"
              className="w-full h-52 object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] overflow-hidden flex flex-col lg:col-span-2 lg:flex-row">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {t.cards[1].label}
              </span>
              <h3 className="mt-3 text-xl font-serif leading-snug">
                {t.cards[1].title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{t.cards[1].desc}</p>
            </div>

            <div className="lg:w-1/2 w-full">
                 <img
              src={t.cards[1].imageSrc}
              alt="Accessibility design"
              className="w-full h-52 object-cover"
            />

            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] p-6 flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              {t.cards[2].label}
            </span>
            <h3 className="mt-3 text-xl font-serif leading-snug">
              {t.cards[2].title}
            </h3>
            <p className="mt-3 text-sm text-gray-600">{t.cards[2].desc}</p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-[#f5f7ff] p-6 flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              {t.cards[3].label}
            </span>
            <h3 className="mt-3 text-xl font-serif leading-snug">
              {t.cards[3].title}
            </h3>
            <p className="mt-3 text-sm text-gray-600">{t.cards[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystems;
