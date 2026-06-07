import { ProjectType } from "@/types/project.type";
import React from "react";
import "./Projects.modules.scss";

const ProjectSection: React.FC = () => {
  const projects = [
    {
      name: "FlowClass — Education Management Platform",
      tags: [
        "NestJS",
        "PostgreSQL",
        "React",
        "Next.js",
        "TypeScript",
        "Docker",
        "n8n",
      ],
      description:
        "Enrollment management with recurring billing, invoicing workflows, prerequisites validation, and automated notifications/reminders.",
      image: "/projects/gisbwsnt1.png",
      url: "",
    },
    {
      name: "Ministry of Health — BPJS Data Automation",
      tags: ["Python", "Apache Airflow", "Dask", "Pandas", "PostgreSQL"],
      description:
        "Automated healthcare data ingestion/cleansing with orchestrated pipelines for large datasets, improving data quality and reducing manual processing.",
      image: "/images/hero.png",
      url: "",
    },
    {
      name: "Employee & Attendance System — Bima City Government",
      tags: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Celery", "Vue.js"],
      description:
        "Integrated employee management, attendance devices, and secure data exchange (E‑Kinerja), including deployment, maintenance, and scaling.",
      image: "sitampan.png",
      url: "",
    },
    {
      name: "Ludes.in — Point of Sales Platform",
      tags: ["NestJS", "PostgreSQL", "React", "Tailwind CSS", "React Native"],
      description:
        "Backend services and APIs for inventory & transaction management for SMEs, including testing and code review process improvements.",
      image: "/images/hero.png",
      url: "",
    },
    {
      name: "Quokka HR — Frontend Migration (Vue 2 → Vue 3)",
      tags: ["Vue.js", "Vue 3", "Nuxt.js", "Vite", "GraphQL", "PostgreSQL"],
      description:
        "Led enterprise frontend architecture migration, improved maintainability, and mentored team members through reviews and collaboration.",
      image: "quokkahr.png",
      url: "",
    },
    {
      name: "Ribath Al Musthofa — Foundation Website",
      tags: ["Website", "Non-profit", "Education"],
      description:
        "Foundation website highlighting free education, Qur'an memorization, and character building for the community.",
      image:
        "https://zhrvqlgrqqvltcpnrjkh.supabase.co/storage/v1/object/public/public-images/images/hero.jpg",
      url: "https://ribath-almusthofa.org/",
    },
  ] as ProjectType[];
  return (
    <section className="py-14 w-full container project-section" id="projects">
      <div className="w-full flex flex-col justify-center items-center gap-y-10">
        <div className="w-full flex flex-col gap-y-2 items-center">
          <h1 className="text-center text-4xl">Selected Projects</h1>
          <p className="text-center text-white/80 max-w-2xl">
            A curated set of projects from SaaS, public sector systems, and data
            automation work.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => {
            const hasLink = !!project.url?.trim();
            const CardWrapper = ({
              children,
            }: {
              children: React.ReactNode;
            }) =>
              hasLink ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-white/10 bg-white/5 p-4 outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                  aria-label={`Open project: ${project.name}`}
                >
                  {children}
                </a>
              ) : (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  {children}
                </div>
              );

            return (
              <CardWrapper key={project.name}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    {hasLink ? (
                      <span className="text-sm text-white/70">View</span>
                    ) : null}
                  </div>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
                <div className="mt-3 flex flex-row flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={`${project.name}-${t}`}
                      className="text-xs rounded-full bg-destructive/20 text-white px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
