import Banner from "@/components/Banner";
import DesignSystems from "@/components/DesignSystem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuestionsSection from "@/components/QuestionsSection";
import ServiceCardSet from "@/components/ServiceCardSet";

export default async function Home() {
  const res = await fetch("http://localhost:8000/api/hello");
  const data = await res.json();

  return (
    <section>
      <p>{data.message}</p>
      <Hero />
      <ServiceCardSet />
      <DesignSystems />
      <ProjectsSection />
      <QuestionsSection />
      <Banner />
      {/* <NewsletterSection /> */}
      <Footer />
    </section>
  );
}
