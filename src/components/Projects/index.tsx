import { ProjectType } from "@/types/project.type";
import React from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CardProject from "./CardProject";
import "./Projects.modules.scss";

const ProjectSection: React.FC = () => {
  const projects = [
    {
      name: "GISBWSNT1 (2017)",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Python",
        "jQuery",
        "Google Maps API",
        "Flask",
        "MySql",
      ],
      description:
        "GISBWSNT1 is a web application that allows the user to view rivers, dams, reservoirs, springs, wells, lakes, and other water resources within the scope of the West Nusa Tenggara region.",
      image: "gisbwsnt1.png",
      url: "http://gis.bwsnt1.net/",
    },
    {
      name: "Sitampan Kota Bima (2022 - 2023)",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Python",
        "Vue3",
        "Flask",
        "FastAPI",
        "Postgres",
        "Celery",
      ],
      description:
        "Sitampan Kota Bima is a web application that manages employee data and attendance data within the scope of the Bima city government.",
      image: "sitampan.png",
      url: "http://sitampan.bimakota.go.id/",
    },
    {
      name: "QuokkaHR (Okt 2021 - Jun 2023)",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Python",
        "Vue3",
        "Flask",
        "Postgres",
        "Celery",
      ],
      description:
        "Quokka is a SaaS cloud-based people management platform which helps companies develop engaged and high performing teams.",
      image: "quokkahr.png",
      url: "https://quokkahr.com/",
    },
    {
      name: "Jannata Resort & SPA Clone",
      tags: ["HTML", "CSS", "Javascript", "Typescript", "Nuxt.js"],
      description:
        "Jannata Resort & SPA clone is a project that I build using Nuxt.js for learning purpose. It is a clone of the Jannata Resort and SPA website.",
      image: "jannata.png",
      url: "https://jannata-resort-clone.vercel.app/",
    },
  ] as ProjectType[];
  return (
    <section className="py-4 w-full project-section px-24 mt-24" id="projects">
      <div className="container w-full flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-center text-4xl">Projects</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </CarouselContent>

          <CarouselPrevious variant={"destructive"} />
          <CarouselNext variant={"destructive"}/>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
