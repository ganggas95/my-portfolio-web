import React from "react";
import MyPicture from "../MyPicture";
import { Progress } from "../ui/progress";
import "./Skills.modules.scss";

type SkillType = {
  name: string;
  level: number;
};

const SkillsSection: React.FC = () => {
  const skills = [
    {
      name: "Next.js",
      level: 8,
    },
    {
      name: "N8N Automation",
      level: 7,
    },
    {
      name: "FastAPI",
      level: 8,
    },
    {
      name: "TypeScript",
      level: 9,
    },
    {
      name: "React",
      level: 8,
    },
    {
      name: "Vue.js",
      level: 8,
    },
    {
      name: "Python",
      level: 9,
    },
    {
      name: "Dask",
      level: 8,
    },
    {
      name: "Pandas",
      level: 8,
    },
    {
      name: "Flask",
      level: 9,
    },
    {
      name: "Node.js",
      level: 8,
    },
    {
      name: "Nest.js",
      level: 8,
    },
    {
      name: "PostgreSQL",
      level: 8,
    },
  ] as SkillType[];
  return (
    <section
      className="py-4 w-full container skills-section justify-between flex items-center"
      id="skills"
    >
      <MyPicture className="hidden lg:flex transform -scale-x-100" />
      <div className="w-full flex justify-end items-end">
        <div className="w-full mx-4 items-end flex flex-col gap-y-4">
          <h3 className="text-netural text-2xl text-center lg:text-left">
            My Skills
          </h3>
          <p className="text-center lg:text-left">
            I have skills in the following technologies.
          </p>
          <ul className="flex flex-col gap-y-4 w-full lg:max-w-lg">
            {skills.map((skill) => (
              <div className="flex flex-col" key={skill.name}>
                <label className="text-sm">{skill.name}</label>
                <Progress
                  value={skill.level * 10}
                  max={10}
                  className="w-full bg-destructive-foreground"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
