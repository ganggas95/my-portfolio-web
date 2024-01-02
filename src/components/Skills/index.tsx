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
      name: "HTML",
      level: 8,
    },
    {
      name: "CSS (Cascade Style Sheets)",
      level: 7,
    },
    {
      name: "JavaScript",
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
      level: 7,
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
  ] as SkillType[];
  return (
    <section
      className="py-4 w-full skills-section px-14 md:px-24 justify-between flex items-center"
      id="skills"
    >
      <MyPicture className="hidden md:flex" />
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4">
          <h3 className="text-netural text-2xl text-center md:text-left">
            My Skills
          </h3>
          <p className="text-center md:text-left">
            I have skills in the following technologies.
          </p>
          <ul className="flex flex-col gap-y-4">
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
