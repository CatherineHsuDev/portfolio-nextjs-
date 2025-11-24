// lib/faq.ts

// export type FAQItem = {
//   id: string; // 用來當 key
//   question: string;
//   answer: string;
// };

// export const faqItems: FAQItem[] = [
//   {
//     id: "tech-stack",
//     question: "What's your tech stack?",
//     answer:
//       "React, Next.js, TypeScript, Node.js and. I work with PostgreSQL/MongoDB and use OAuth for secure authentication.",
//   },
//   {
//     id: "legacy-code",
//     question: "Do you work with legacy code?",
//     answer:
//       "Yes. I modernize legacy systems carefully, improving structure and performance without breaking existing logic.",
//   },
//   {
//     id: "project-types",
//     question: "What project types do you handle?",
//     answer:
//       "Full-stack apps, e-commerce systems, Electron desktop tools, and accessible design systems.",
//   },
//   {
//     id: "design-systems",
//     question: "How do you approach design systems?",
//     answer:
//       "By studying UI patterns, accessibility standards, and building consistent, purpose-driven components.",
//   },
//   {
//     id: "bilingual",
//     question: "Can you work bilingually?",
//     answer:
//       "Yes. I'm fully comfortable communicating and documenting work in English and Mandarin.",
//   },
//   {
//     id: "collaboration-style",
//     question: "What's your collaboration style?",
//     answer:
//       "Clear communication, upfront questions, and consistent progress updates.",
//   },
// ];

// export default faqItems;

// Project cards
export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  story: string;
  tags?: string[];
};

export const projectItems: ProjectItem[] = [
  {
    id: "snapgram",
    title: "Snapgram Social App",
    description:
      "An Instagram-style social app where users can upload photos, create posts, like and bookmark content, built with React, TypeScript, Vite, Tailwind CSS, and Appwrite.",
    image: "/project/snapgram.png",
    github: "https://github.com/CatherineHsuDev/snapgram-deploy-demo",
    story: "/portfolio/project/snapgram-story",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "Appwrite",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description:
      "A conceptual e-commerce project focusing on database schema design and system architecture, including product catalog, orders, users, and inventory relationships.",
    image: "/project/ecommerce.png",
    github:
      "https://github.com/CatherineHsuDev/Ecommerce-ver-react/blob/main/clothing-run.sql",
    story: "/portfolio/project/ecommerce-story",
    tags: ["JavaScript", "Database Design", "ERD", "System Architecture"],
  },
  {
    id: "course-portal",
    title: "Course Portal",
    description:
      "A full-stack course management portal with a React + Vite frontend and a Node.js/Express API backend, featuring JWT-based auth, Google login, and MongoDB for persistent storage.",
    image: "/project/course.png",
    github: "https://github.com/CatherineHsuDev/coursePortal-backend",
    story: "/portfolio/project/course-portal-story",
    tags: [
      "React",
      "Vite",
      "React Router",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google OAuth",
      "Passport",
    ],
  },
];
