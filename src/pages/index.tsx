import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-800 text-white w-screen flex min-h-screen flex-col items-center overflow-y-auto">
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
      </main>
    </>
  );
}
