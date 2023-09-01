import React from "react";
import "@/components/Projects.modules.scss";

const ProjectSection: React.FC = () => {
  return (
    <section className="py-4 w-full project-section px-24 mt-24">
      <div className="container w-full flex justify-center">
        <h1 className="text-center text-4xl">Projects</h1>
      </div>
    </section>
  );
};

export default ProjectSection;
