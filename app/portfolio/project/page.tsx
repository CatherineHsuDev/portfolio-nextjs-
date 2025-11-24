import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
  return (
    <div>
      <ProjectCard
        title="E-commerce Platform"
        description="A scalable full-stack e-commerce system with Next.js frontend and Node.js APIs."
        image="/gallery-2.png"
        github="https://github.com/yourname/ecommerce"
        story="/portfolio/project/ecommerce-story"
      />

      <ProjectCard
        title="Electron Desktop Tool"
        description="Internal workflow desktop application built with Electron and TypeScript."
        image="/gallery-3.png"
        reverse
        github="https://github.com/yourname/electron-tool"
        story="/portfolio/project/electron-story"
      />
    </div>
  );
}
