// CommentBoard.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal } from "lucide-react";

type CommentBoardProps = {
  lang: "en" | "zh";
  ui: {
    commentTitle: string;
    commentHint: string;
    commentPlaceholder: string;
    commentSubmit: string;
    commentAlert: string;
  };
};

const textareaClass =
  "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 " +
  "text-sm text-gray-800 placeholder-gray-400 shadow-sm " +
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
  "resize-none overflow-y-auto scrollbar-hide max-h-[200px]";

const CommentBoard: React.FC<CommentBoardProps> = ({ lang, ui }) => {
  const [name, setName] = useState(""); // 使用者名稱
  const [email, setEmail] = useState(""); // Email
  const [comment, setComment] = useState(""); // 留言內容

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 自動撐高 textarea（保留你原本的邏輯）
  useEffect(() => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;

    const maxHeight = 200;

    el.style.height = "auto";
    const newHeight = Math.min(el.scrollHeight, maxHeight);
    el.style.height = newHeight + "px";
  }, [comment]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid =
      name.trim() !== "" && email.trim() !== "" && comment.trim() !== "";

    if (!isValid) return;

    console.log("Comment submitted:", { name, email, comment });
    alert(ui.commentAlert);

    setName("");
    setEmail("");
    setComment("");
  };

  const isDisabled = !name.trim() || !email.trim() || !comment.trim();

  return (
    <div className="mt-12 rounded-2xl bg-white/40 shadow-md border border-gray-100 p-8 backdrop-blur-sm">
      <h2 className="text-lg font-serif text-gray-900">{ui.commentTitle}</h2>

      <p className="mt-2 text-sm text-gray-500">{ui.commentHint}</p>

      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
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
          <textarea
            ref={textareaRef}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
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
            disabled={isDisabled}
            className={`cursor-pointer inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition ${
              isDisabled
                ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {ui.commentSubmit}
            <SendHorizontal size={14} className="ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentBoard;
