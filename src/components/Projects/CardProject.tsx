import { ProjectType } from "@/types/project.type";
import React from "react";
import { Badge } from "../ui/badge";
import { CarouselItem } from "../ui/carousel";

type CardProjectPropsType = {
  project: ProjectType;
};

const CardProject: React.FC<CardProjectPropsType> = ({
  project,
}: CardProjectPropsType) => {
  return (
    <CarouselItem
      className={
        "basis-1/1 md:basis-1/3 flex flex-col justify-start gap-2 card-project"
      }
    >
      <div
        className="h-80 w-full project-image"
        style={{
          backgroundImage: `url(/projects/${project.image})`,
        }}
      ></div>
      <p className="text-left">{project.name}</p>
      <p className="text-left font-thin ">{project.description}</p>
      <ul className="flex flex-row flex-wrap">
        {project.tags.map((tag, index) => (
          <li key={index}>
            <Badge variant={"destructive"}>{tag}</Badge>
          </li>
        ))}
      </ul>
    </CarouselItem>
  );
};

export default CardProject;
