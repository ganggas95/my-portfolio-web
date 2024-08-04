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
    <section className="py-4 w-full hero-section px-4 md:px-24 flex items-center">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 items-center md:items-start mt-10 md:mt-0">
          <h3 className="text-netural">Hi, I am</h3>
          <h1 className="text-4xl inline-flex gap-x-3 text-center md:text-left hero-name">
            Subhan Nizar
          </h1>
          <p className="text-sm max-w-md text-center md:text-left">
            Middle-level Fullstack Engineer with +{experience} years of
            experience working with local companies and International Companies.
            Creating test cases, creating Rest-API based on JSON data schema,
            and fast learning ability.
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
