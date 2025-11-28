"use client";

import { useLanguage } from "@/app/LanguageProvider";
import { PROJECT_STORIES } from "../../../i18n/stories-data";
import { SendHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type StoryTemplateProps = {
  slug: string;
};

const storyUILocales = {
  en: {
    comingSoon: "Story coming soon…",
    pdfTitle: "ERD / Database Design PDF",
    openPdf: "Open PDF",
    // ⭐ 新增：留言區文案（英文）
    commentTitle: "Comment",
    commentHint:
      "Feel free to leave a comment here. Backend integration will be added later.",
    commentPlaceholder:
      "Write your thoughts, questions, or feedback about this project...",
    commentSubmit: "Submit Comment",
    commentAlert:
      "This is just a UI demo; the comment is not actually sent to a server yet 🙂",
  },
  zh: {
    comingSoon: "故事內容即將更新…",
    pdfTitle: "ERD / 資料庫設計 PDF",
    openPdf: "查看 PDF",
    // ⭐ 新增：留言區文案（中文）
    commentTitle: "留言",
    commentHint: "想說什麼都可以先寫在這裡，之後會再接上後端服務。",
    commentPlaceholder: "寫下你對這個專案的想法、問題或回饋…",
    commentSubmit: "送出留言",
    commentAlert: "目前只是介面示範，留言尚未真正送到伺服器 🙂",
  },
};

const textareaClass =
  "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 " +
  "text-sm text-gray-800 placeholder-gray-400 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
  "resize-none overflow-y-auto scrollbar-hide max-h-[200px]";

export default function StoryTemplate({ slug }: StoryTemplateProps) {
  const { lang } = useLanguage();

  const ui = storyUILocales[lang]; // ⭐ 這裡取得 UI 文字

  const storyList = PROJECT_STORIES[lang];
  const story = storyList.find((s) => s.slug === slug);

  const [pdfOpen, setPdfOpen] = useState(false);
  const [name, setName] = useState(""); // 使用者名稱
  const [email, setEmail] = useState(""); // Email
  const [comment, setComment] = useState(""); // ⭐ 新增：留言 state

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const hasDemo = story?.demo && story.demo !== "#";

  if (!story) {
    return (
      <section className="w-full bg-color-background">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-gray-600">{ui.comingSoon}</p>
        </div>
      </section>
    );
  }

  useEffect(() => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;

    const maxHeight = 200; // ⭐ 你想要的上限 px

    // 先重設高度才能正確抓 scrollHeight
    el.style.height = "auto";

    const newHeight = Math.min(el.scrollHeight, maxHeight);

    el.style.height = newHeight + "px";
  }, [comment]);

  return (
    <section className="w-full bg-color-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Title */}
        <h1 className="text-center md:text-left text-3xl md:text-4xl font-serif leading-tight">
          {story.title}
        </h1>
        {/* Buttons (Desktop) */}
        <div className="mt-2 md:flex gap-3 justify-center md:justify-end hidden">
          {story.github && (
            <Link
              href={story.github}
              target="_blank"
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              GitHub
            </Link>
          )}

          {/* {story.demo && (
            <Link
              href={story.demo}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          )} */}
          {hasDemo ? (
            <Link
              href={story.demo as string}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-5 py-2 text-sm font-medium text-gray-400 cursor-not-allowed opacity-60"
            >
              Demo / Website
            </button>
          )}
        </div>
        {/* Content */}
        <p className="mt-6 text-gray-600 whitespace-pre-line text-sm md:text-base">
          {story.content}
        </p>
        {/* ⭐ ONLY for ecommerce-story: 卡片 + Modal */}
        {slug === "ecommerce-story" && (
          <>
            {/* 卡片 */}
            <div className="mt-12 rounded-2xl p-6 bg-white shadow-sm">
              <h2 className="text-xl font-serif text-gray-800">
                {ui.pdfTitle}
              </h2>

              <button
                onClick={() => setPdfOpen(true)}
                className="mt-4 inline-flex items-center rounded-full border border-gray-300  bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                {ui.openPdf}
              </button>
            </div>

            {/* Modal */}
            {pdfOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
                <div className="bg-white rounded-xl w-full max-w-5xl h-[85vh] shadow-lg overflow-hidden relative">
                  <button
                    onClick={() => setPdfOpen(false)}
                    className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full px-3 py-1 text-xs"
                  >
                    ✕
                  </button>

                  <iframe
                    src="/project/ecommercedb.pdf"
                    className="w-full h-full"
                    title="E-commerce Database PDF"
                  />
                </div>
              </div>
            )}
          </>
        )}
        {/* Buttons (Mobile) */}
        <div className="mt-10 flex gap-5 justify-center md:hidden">
          {story.github && (
            <Link
              href={story.github}
              target="_blank"
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              GitHub
            </Link>
          )}

          {/* {story.demo && (
            <Link
              href={story.demo}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          )} */}
          {hasDemo ? (
            <Link
              href={story.demo as string}
              target="_blank"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              Demo / Website
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-5 py-2 text-sm font-medium text-gray-400 cursor-not-allowed opacity-60"
            >
              Demo / Website
            </button>
          )}
        </div>
        {/* ⭐⭐ 新增：留言區（放在 Buttons (Mobile) 後面） */}
        <div className="mt-12 rounded-2xl bg-white/40 shadow-md border border-gray-100 p-8 backdrop-blur-sm">
          <h2 className="text-lg font-serif text-gray-900">
            {ui.commentTitle}
          </h2>

          <p className="mt-2 text-sm text-gray-500">{ui.commentHint}</p>

          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const isValid =
                name.trim() !== "" &&
                email.trim() !== "" &&
                comment.trim() !== "";

              if (!isValid) {
                // HTML required 也會擋，這裡只是保險＋之後可以換成 toast
                return;
              }

              console.log("Comment submitted:", { name, email, comment });
              alert(ui.commentAlert);

              // 清空欄位
              setName("");
              setEmail("");
              setComment("");
            }}
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                {/* <label className="text-sm font-medium text-gray-700">
                  Name<span className="text-red-500">*</span>
                </label> */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={lang === "zh" ? "姓名" : "Name"}
                />
              </div>

              <div className="flex flex-col gap-1">
                {/* <label className="text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label> */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Comment Textarea */}
            <div className="flex flex-col gap-1">
              {/* <label className="text-sm font-medium text-gray-700">
                {ui.commentTitle}
                <span className="text-red-500">*</span>
              </label> */}

              <textarea
                ref={textareaRef}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3} // 初始高度，之後會由 effect 自動撐開
                required
                maxLength={1000}
                className={textareaClass}
                placeholder={ui.commentPlaceholder}
              />
              <p className="text-xs text-gray-400 text-right">
                {comment.length}/1000
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!name.trim() || !email.trim() || !comment.trim()}
                className={`cursor-pointer inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition ${
                  !name.trim() || !email.trim() || !comment.trim()
                    ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {ui.commentSubmit} <SendHorizontal size={14} className="ml-1" />
              </button>
            </div>
          </form>
        </div>
        {/* ⭐⭐ 留言區結束 */}
      </div>
    </section>
  );
}
