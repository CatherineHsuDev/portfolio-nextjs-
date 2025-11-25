"use client";

import Link from "next/link";
import { useLanguage } from "@/app/LanguageProvider";
import { footerTranslations } from "@/i18n";

const Footer = () => {
  const { lang } = useLanguage();
  const t = footerTranslations[lang];
  return (
    <footer className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* 上半部：Logo + 資訊 + 導覽 */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* 左側：Logo + Address + Contact + Social */}
          <div className="space-y-6">
            <div className="text-2xl font-heading">{t.brand}</div>

            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <div className="font-semibold">{t.addressLabel}</div>
                <div>{t.addressValue}</div>
              </div>

              <div className="pt-2">
                <div className="font-semibold">{t.contactLabel}</div>
                <Link
                  href={`mailto:${t.contactEmail}`}
                  className="text-gray-800"
                >
                  {t.contactEmail}
                </Link>
              </div>
            </div>

            {/* Social icons（用簡單文字/emoji 代替） */}
            {/* <div className="flex items-center gap-4 text-gray-700 text-sm">
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
              <span>💼</span>
              <span>▶️</span>
            </div> */}
          </div>

          {/* 右側：多欄導覽 */}
          <div className="grid grid-cols-2 gap-8 text-sm text-gray-700 md:text-right md:gap-x-16">
            <div className="space-y-2">
              <Link href="/portfolio" className="block hover:underline">
                {t.navPortfolio}
              </Link>
              <Link href="/portfolio/project" className="block hover:underline">
                {t.navProject}
              </Link>
              <Link href="/blog" className="block hover:underline">
                {t.navBlog}
              </Link>
            </div>

            <div className="space-y-2">
              <Link href="/" className="block hover:underline">
                {t.navHome}
              </Link>
              <Link href="/contact" className="block hover:underline">
                {t.navContact}
              </Link>
              <Link
                href="https://github.com/CatherineHsuDev"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                {t.navGithub}
              </Link>
            </div>
          </div>
        </div>

        {/* 下半部：版權 & 法律連結 */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col gap-3 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {t.copyright}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:underline">
              {t.policyPrivacy}
            </Link>
            <Link href="/terms" className="hover:underline">
              {t.policyTerms}
            </Link>
            <Link href="/cookies" className="hover:underline">
              {t.policyCookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
