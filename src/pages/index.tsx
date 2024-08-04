import ContactSection from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import { useEffect } from "react";

export const getServerSideProps = async () => {
  // Fetch data from external API
  const START_EXPERIENCE = parseInt(process.env.START_EXPERIENCE || "0");
  // Pass data to the page via props
  return { props: { experience: new Date().getFullYear() - START_EXPERIENCE } };
};

export default function Home({ experience }: { experience: number }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.body.style.setProperty(
        "--scroll",
        `${window.scrollY / (document.body.offsetHeight - window.innerHeight)}`
      );
    });
  }, []);
  return (
    <>
      <Header />
      <main className="bg-gray-800 text-white w-screen flex min-h-screen flex-col items-center overflow-y-auto">
        <HeroSection experience={experience} />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
