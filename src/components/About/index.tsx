import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-14 w-full container" id="about">
      <div className="w-full flex flex-col items-center gap-y-6">
        <div className="w-full flex flex-col gap-y-2 items-center">
          <h1 className="text-center text-4xl">About</h1>
          <p className="text-center text-white/80 max-w-2xl">
            Senior Fullstack Engineer focused on backend engineering, workflow
            automation, and building reliable products for SaaS and public
            sector organizations.
          </p>
        </div>

        <div className="w-full max-w-3xl flex flex-col gap-4 text-white/90">
          <p className="text-center">
            I build scalable APIs, data-intensive services, and internal tools
            with a strong emphasis on maintainability, performance, and clear
            delivery practices.
          </p>
          <p className="text-center">
            I use AI-assisted software development as a practical engineering
            capability: to accelerate implementation, improve code quality,
            generate and maintain documentation, validate system design options,
            and support debugging and troubleshooting. The goal is simple—help
            teams move faster without compromising reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
