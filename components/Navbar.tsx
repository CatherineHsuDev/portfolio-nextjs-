"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/app/LanguageProvider";
import { navTranslations } from "@/i18n";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = navTranslations[lang];
  const [isDesktopMoreOpen, setIsDesktopMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Desktop More hover handlers
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDesktopMoreOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDesktopMoreOpen(false);
      closeTimeoutRef.current = null;
    }, 1050);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-heading">
          {t.brand}
          {/* Catherine */}
        </Link>

        {/* Desktop menu (顯示在 >=768px，接近你設計的 768 / 1440 版本) */}
        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-1 text-sm font-medium hover:text-black/70 transition-colors cursor-pointer select-none"
          >
            {lang === "en" ? "繁中" : "EN"}
          </button>
          <Link
            href="/portfolio"
            className="text-sm font-medium hover:text-black/70 transition-colors"
          >
            {t.portfolio}
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium hover:text-black/70 transition-colors"
          >
            {t.blog}
          </Link>

          {/* More dropdown (Desktop only) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium hover:text-black/70 transition-colors cursor-pointer select-none"
            >
              {t.more} <ChevronDown size={16} />
            </button>

            {isDesktopMoreOpen && (
              <div
                className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-lg"
                role="menu"
              >
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                  onClick={() => setIsDesktopMoreOpen(false)}
                >
                  {t.about}
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                  onClick={() => setIsDesktopMoreOpen(false)}
                >
                  {t.contact}
                </Link>

                <Link
                  href="https://github.com/CatherineHsuDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                  onClick={() => setIsDesktopMoreOpen(false)}
                >
                  {t.github}
                </Link>

                {/* <Link
                    href="/resume"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                    onClick={() => setIsDesktopMoreOpen(false)}
                  >
                    Resume
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                    onClick={() => setIsDesktopMoreOpen(false)}
                  >
                    Resume
                  </Link>
                  */}
              </div>
            )}
          </div>
        </div>

        {/* Mobile / Tablet hamburger (顯示在 <768，包括 375 & 小平板斷點) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center px-2.5 py-1.5 text-sm font-medium hover:bg-gray-50 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile / Tablet menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-center">
            <div className="h-px bg-gray-200 my-1" />
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.portfolio}
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.blog}
            </Link>

            {/* More 區塊直接展開為一般連結，手機不用 hover dropdown */}
            <div className="h-px bg-gray-200 my-1" />

            <Link
              href="/about"
              className="text-sm font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-black/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.contact}
            </Link>

            {/* <Link
                href="/resume"
                className="text-sm font-medium hover:text-black/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.resume}
              </Link>
              <Link
                href="/resume"
                // href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-black/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </Link> */}
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="w-full py-1 text-xs font-medium hover:bg-gray-50 transition-colors"
            >
              {lang === "en" ? "繁中" : "EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
