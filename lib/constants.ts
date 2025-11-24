// lib/faq.ts

export type FAQItem = {
  id: string; // 用來當 key
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "tech-stack",
    question: "What's your tech stack?",
    answer:
      "React, Next.js, TypeScript, Node.js and. I work with PostgreSQL/MongoDB and use OAuth for secure authentication.",
  },
  {
    id: "legacy-code",
    question: "Do you work with legacy code?",
    answer:
      "Yes. I modernize legacy systems carefully, improving structure and performance without breaking existing logic.",
  },
  {
    id: "project-types",
    question: "What project types do you handle?",
    answer:
      "Full-stack apps, e-commerce systems, Electron desktop tools, and accessible design systems.",
  },
  {
    id: "design-systems",
    question: "How do you approach design systems?",
    answer:
      "By studying UI patterns, accessibility standards, and building consistent, purpose-driven components.",
  },
  {
    id: "bilingual",
    question: "Can you work bilingually?",
    answer:
      "Yes. I'm fully comfortable communicating and documenting work in English and Mandarin.",
  },
  {
    id: "collaboration-style",
    question: "What's your collaboration style?",
    answer:
      "Clear communication, upfront questions, and consistent progress updates.",
  },
];

export default faqItems;
