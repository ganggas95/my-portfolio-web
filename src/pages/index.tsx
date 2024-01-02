import ContactSection from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import { useEffect } from "react";

export default function Home() {
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
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
