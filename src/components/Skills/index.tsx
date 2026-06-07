import React from "react";
import { Badge } from "../ui/badge";
import "./Skills.modules.scss";

const SkillsSection: React.FC = () => {
  const coreStack = [
    "Python",
    "FastAPI",
    "Flask",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "React",
    "Next.js",
    "Vue 3",
    "Nuxt.js",
    "Apache Airflow",
    "n8n",
    "Docker",
  ] as const;

  const skillGroups = [
    {
      title: "Backend",
      items: [
        "Python",
        "FastAPI",
        "Flask",
        "Node.js",
        "NestJS",
        "SQLAlchemy",
        "Celery",
        "GraphQL",
      ],
    },
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "Vue 3",
        "Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      title: "Database",
      items: ["PostgreSQL", "MySQL", "Redis", "MariaDB", "MongoDB"],
    },
    {
      title: "Data Engineering",
      items: ["Apache Airflow", "Pandas", "Dask"],
    },
    {
      title: "DevOps",
      items: ["Docker", "Nginx", "Git", "GitLab CI/CD"],
    },
    {
      title: "Automation",
      items: ["n8n"],
    },
  ] as const;
  return (
    <section className="py-14 w-full container skills-section" id="skills">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-netural text-4xl text-center">Skills</h2>
          <p className="text-center text-white/80 max-w-2xl">
            Core stack for building scalable SaaS, government systems, and data
            automation pipelines.
          </p>
        </div>

        {/* <div className="w-full flex flex-col gap-3 items-center">
          <h3 className="text-sm font-semibold text-white/90 tracking-wide">
            Core Stack
          </h3>
          <ul className="flex flex-row flex-wrap justify-center gap-2 max-w-4xl">
            {coreStack.map((item) => (
              <li key={`core-${item}`}>
                <Badge variant={"destructive"}>{item}</Badge>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="text-sm text-white/70">
                  {group.items.length} technologies
                </p>
              </div>
              <ul className="mt-3 flex flex-row flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item}`}>
                    <Badge
                      variant={"outline"}
                      className="border-white/25 text-white/90 bg-white/5 hover:bg-white/10"
                    >
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
