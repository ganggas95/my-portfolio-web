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
    <section className="py-4 w-full container hero-section flex items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-4 items-center lg:items-start mt-10 lg:mt-0">
          <h3 className="text-netural">Hi, I am</h3>
          <h1 className="text-4xl inline-flex gap-x-3 text-center lg:text-left hero-name">
            Subhan Nizar
          </h1>
          <p className="text-sm max-w-md text-center lg:text-left">
            Fullstack Engineer ({experience}+ years) specializing in Python
            (FastAPI/Flask) and Node.js (NestJS) for scalable backend, alongside
            React/Next.js and Vue.js for high-performance frontends. Proven
            track record in automating data pipelines for government health
            sectors and developing SaaS platforms for international markets.
          </p>

          <div>
            <Button
              className="max-w-md"
              variant={"destructive"}
              onClick={downloadCv}
            >
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
