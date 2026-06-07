import React from "react";
import MyPicture from "../MyPicture";
import { Button } from "../ui/button";
import "./Hero.modules.scss";

const HeroSection: React.FC<{ experience: number }> = ({
  experience,
}: {
  experience: number;
}) => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/resume/Subhan-Nizar-Resume.pdf";
    link.download = "Subhan-Nizar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-14 w-full container hero-section" id="home">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 items-center lg:items-start mt-10 lg:mt-0">
          <h3 className="text-netural">Hi, I’m</h3>
          <h1 className="text-4xl inline-flex gap-x-3 text-center lg:text-left hero-name">
            Subhan Nizar
          </h1>
          <p className="text-sm max-w-xl text-center lg:text-left text-white/90">
            Senior Fullstack Engineer & Backend Specialist with 9+ years of
            experience delivering scalable SaaS and government systems. I build
            reliable backends with Python (FastAPI, Flask) and Node.js (NestJS),
            and modern frontends with React/Next.js. I also use workflow
            automation and AI-assisted software development—including agentic
            development workflows—to accelerate delivery while keeping code
            quality high.
          </p>

          <ul className="text-sm max-w-xl w-full list-disc pl-5 text-left text-white/85">
            <li>
              Delivered mission-critical systems for Indonesian government.
            </li>
            <li>
              Automated healthcare data workflows using Apache Airflow and
              Python.
            </li>
            <li>
              Optimized PostgreSQL reporting with complex JSON aggregation.
            </li>
            <li>
              Applied AI-assisted workflows for faster implementation, clearer
              documentation, and more effective code reviews.
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button variant={"destructive"} onClick={downloadCv}>
              Download Resume
            </Button>
          </div>
        </div>

        <MyPicture />
      </div>
    </section>
  );
};

export default HeroSection;
