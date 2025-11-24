"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { portfolioTranslations } from "@/i18n";
import { useLanguage } from "../LanguageProvider";

const PortfolioNav = () => {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = portfolioTranslations[lang];

  const isActive = (route: string) => pathname.startsWith(route);

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-4 flex gap-6 text-sm font-medium justify-center">
        {/* Projects */}
        <Link
          href="/portfolio/project"
          className={`
            group relative px-1 py-1 transition-all
            ${
              isActive("/portfolio/project")
                ? "font-semibold text-[#2f88e1]"
                : "text-gray-700 hover:text-[#2f88e1]"
            }
          `}
        >
          {t.navProject}
          <span
            className={`
              absolute left-0 -bottom-0.5 h-[2px] bg-[#2f88e1]
              transition-transform duration-300 origin-left w-full
              ${
                isActive("/portfolio/project")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }
            `}
          />
        </Link>
        {/* Design */}
        <Link
          href="/portfolio/design"
          className={`
            group relative px-1 py-1 transition-all
            ${
              isActive("/portfolio/design")
                ? "font-semibold text-[#2f88e1]"
                : "text-gray-700 hover:text-[#2f88e1]"
            }
          `}
        >
          {t.navDesign}
          <span
            className={`
              absolute left-0 -bottom-0.5 h-[2px] bg-[#2f88e1]
              transition-transform duration-300 origin-left w-full
              ${
                isActive("/portfolio/design")
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }
            `}
          />
        </Link>
      </div>
    </nav>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PortfolioNav />
      <div>{children}</div>
    </div>
  );
}
