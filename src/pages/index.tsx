import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gray-800 text-white fixed top-0 left-0 w-screen flex min-h-screen flex-col items-center overflow-y-auto">
      <Header />
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
