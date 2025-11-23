"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-color-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-6 md:py-24">
        {/* 上半部：Logo + 資訊 + 導覽 */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* 左側：Logo + Address + Contact + Social */}
          <div className="space-y-6">
            <div className="text-2xl font-heading">Catherine</div>

            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <div className="font-semibold">Address</div>
                <div>Taichung, Taiwan</div>
              </div>

              <div className="pt-2">
                <div className="font-semibold">Contact</div>
                <Link
                  href="mailto:hello@example.com"
                  className="text-gray-800 underline underline-offset-2"
                >
                  catherine.hsu.dev@gmail.com
                </Link>
              </div>
            </div>

            {/* Social icons（用簡單文字/emoji 代替） */}
            <div className="flex items-center gap-4 text-gray-700 text-sm">
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
              <span>💼</span>
              <span>▶️</span>
            </div>
          </div>

          {/* 右側：多欄導覽 */}
          <div className="grid grid-cols-2 gap-8 text-sm text-gray-700 md:text-right md:gap-x-16">
            <div className="space-y-2">
              <Link href="/home" className="block hover:underline">
                Home
              </Link>
              <Link href="/portfolio" className="block hover:underline">
                Portfolio
              </Link>
              <Link href="/projects" className="block hover:underline">
                Project
              </Link>
              <Link href="/blog" className="block hover:underline">
                Blog
              </Link>
              <Link href="/blog/post" className="block hover:underline">
                Blog post
              </Link>
            </div>

            <div className="space-y-2">
              <Link href="/contact" className="block hover:underline">
                Contact
              </Link>
              <Link href="/react" className="block hover:underline">
                React work
              </Link>
              <Link href="/nextjs" className="block hover:underline">
                Next.js apps
              </Link>
              <Link href="/typescript" className="block hover:underline">
                TypeScript
              </Link>
              <Link href="/node" className="block hover:underline">
                Node.js
              </Link>
            </div>
          </div>
        </div>

        {/* 下半部：版權 & 法律連結 */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col gap-3 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} All rights reserved.</div>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of service
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
