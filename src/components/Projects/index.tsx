import { ProjectType } from "@/types/project.type";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CardProject from "./CardProject";
import "./Projects.modules.scss";

const ProjectSection: React.FC = () => {
  const projects = [
    {
      name: "Absensi Kota Bima (2022 - 2023)",
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
        "Absensi Kota Bima is a web application that manages employee data and attendance data within the scope of the Bima city government.",
      image: "sitampan.png",
      url: "http://absensi.bimakota.go.id/",
    },
    {
      name: "Jannata Resort & SPA Clone",
      tags: ["HTML", "CSS", "Javascript", "Typescript", "Nuxt.js"],
      description:
        "Jannata Resort & SPA clone is a project that I build using Nuxt.js for learning purpose. It is a clone of the Jannata Resort and SPA website.",
      image: "jannata.png",
      url: "https://jannata-resort-clone.vercel.app/",
    },
    {
      name: "Ribath Al Musthofa (Foundation Website)",
      tags: ["Website", "Non-profit", "Education", "Tahfidz"],
      description:
        "Ribath Al Musthofa is a foundation website that highlights free education, Qur'an memorization, and character building for the community—especially orphans and children from low-income families.",
      image:
        "https://zhrvqlgrqqvltcpnrjkh.supabase.co/storage/v1/object/public/public-images/images/hero.jpg",
      url: "https://ribath-almusthofa.org/",
    },
  ] as ProjectType[];
  return (
    <section className="py-4 w-full container project-section" id="projects">
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-center text-4xl">Projects</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="gap-x-10">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </CarouselContent>

          <CarouselPrevious
            variant={"destructive"}
            className="hidden lg:flex"
          />
          <CarouselNext variant={"destructive"} className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
