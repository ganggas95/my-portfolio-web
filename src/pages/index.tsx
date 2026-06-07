import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import Head from "next/head";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const START_EXPERIENCE = parseInt(process.env.START_EXPERIENCE || "0");
  return {
    props: { experience: new Date().getFullYear() - START_EXPERIENCE },
    revalidate: 60 * 60 * 24,
  };
};

export default function Home({ experience }: { experience: number }) {
  useEffect(() => {
    const onScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        `${window.scrollY / (document.body.offsetHeight - window.innerHeight)}`,
      );
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Subhan Nizar - Senior Fullstack Engineer</title>
        <meta
          name="description"
          content="Senior Fullstack Engineer (Python/FastAPI/Flask, Node.js/NestJS, React/Next.js, Vue/Nuxt) with 9+ years of experience building scalable SaaS, government systems, and data automation pipelines."
        />
      </Head>
      <Header />
      <main className="bg-gray-800 text-white w-screen flex min-h-screen flex-col items-center overflow-y-auto">
        <HeroSection experience={experience} />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
