import { ProjectType } from "@/types/project.type";
import React, { useMemo } from "react";
import { Badge } from "../ui/badge";
import { CarouselItem } from "../ui/carousel";

type CardProjectPropsType = {
  project: ProjectType;
};

const CardProject: React.FC<CardProjectPropsType> = ({
  project,
}: CardProjectPropsType) => {
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `/projects/${project.image}`;
  const hasLink = useMemo(() => !!project.url?.trim(), [project.url]);
  return (
    <CarouselItem
      className={
        "basis-1/1 lg:basis-1/3 flex flex-col justify-start gap-2 card-project"
      }
    >
      {hasLink ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
          aria-label={`Open project: ${project.name}`}
        >
          <div
            className="h-80 w-full project-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
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
        </a>
      ) : (
        <>
          <div
            className="h-80 w-full project-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
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
        </>
      )}
    </CarouselItem>
  );
};

export default CardProject;
