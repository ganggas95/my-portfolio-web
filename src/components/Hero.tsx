import "@/components/Hero.modules.scss";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-4 w-full hero-section px-24 flex items-center">
      <div className="w-full flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-y-4">
          <h3 className="text-yellow-400">Hi, I am</h3>
          <h1 className="text-4xl inline-flex gap-x-3">
            <span className="hero-name">Subhan Nizar</span>
          </h1>
          <p className="text-sm max-w-md">
            Middle-level Fullstack Engineer with +6 years of experience working
            with local companies and International Companies. Creating test
            cases, creating Rest-API based on JSON data schema, and fast
            learning ability.
          </p>

          <button className="btn">Hire me</button>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="relative h-[40rem] w-[40rem] min-w-[35rem] min-h-[35rem] bg-hero">
            <div
              className="absolute bottom-0 right-[5%] h-[80%] w-[80%] z-[2] bg-cover bg-main bg-no-repeat"
              style={{
                backgroundImage: `url(/images/nizar-no-bg.png)`,
              }}
            />
            <div className="bg-1" />
            <div className="bg-2" />
            <div className="bg-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
