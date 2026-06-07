import React from "react";
import "../Experience/Experience.modules.scss";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Fullstack Engineer",
      company: "Flowclass",
      period: "Aug 2024 – Oct 2025",
      location: "Hong Kong SAR",
      highlights: [
        "Designed and developed scalable REST APIs using NestJS and PostgreSQL.",
        "Built frontend modules using React, Next.js, and TypeScript.",
        "Implemented workflow automation for enrollment and payment reminders using n8n.",
        "Optimized reporting performance with PostgreSQL query and JSON aggregation improvements.",
        "Used AI-assisted workflows to accelerate implementation and keep documentation and reviews consistent.",
      ],
      technologies: [
        "NestJS",
        "PostgreSQL",
        "React",
        "Next.js",
        "TypeScript",
        "Docker",
        "n8n",
      ],
    },
    {
      title: "Independent Fullstack Consultant",
      company: "Self-employed",
      period: "Aug 2023 – Aug 2024",
      location: "Mataram, Indonesia",
      highlights: [
        "Delivered custom web applications and automation systems for public and private sector clients.",
        "Built and maintained APIs, dashboards, and workflow automation solutions.",
        "Translated business requirements into scalable software products and deployments.",
        "Applied AI-assisted workflows for faster iteration, troubleshooting, and documentation maintenance.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Flask",
        "NestJS",
        "PostgreSQL",
        "Docker",
        "n8n",
      ],
    },
    {
      title: "Fullstack Engineer",
      company: "Quokka HR",
      period: "2021 – Jul 2023",
      location: "Hong Kong SAR",
      highlights: [
        "Led migration of enterprise frontend architecture from Vue 2 to Vue 3.",
        "Developed and maintained APIs and frontend applications.",
        "Built administrative back-office systems and led frontend code reviews.",
        "Used AI-assisted workflows to support refactoring, code review, and issue investigation.",
      ],
      technologies: [
        "Vue.js",
        "Vue 3",
        "Nuxt.js",
        "Flask",
        "GraphQL",
        "PostgreSQL",
        "Vite",
      ],
    },
    {
      title: "Fullstack Engineer",
      company: "ITEC Mataram",
      period: "2017 – 2021",
      location: "Mataram, Indonesia",
      highlights: [
        "Developed government information systems and internal business applications.",
        "Designed databases and application architectures for multiple projects.",
        "Built and maintained Point-of-Sale (POS) systems and mentored students.",
        "Used AI-assisted workflows to speed up debugging, documentation, and implementation planning.",
      ],
      technologies: [
        "React",
        "Python",
        "Flask",
        "FastAPI",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Docker",
      ],
    },
  ] as const;

  return (
    <section
      className="py-14 w-full container experience-section"
      id="experience"
    >
      <div className="w-full flex flex-col justify-center items-center gap-y-10">
        <div className="w-full flex flex-col gap-y-2 items-center">
          <h1 className="text-center text-4xl">Experience</h1>
          <p className="text-center text-white/80 max-w-2xl">
            Recent roles and responsibilities across SaaS, public sector
            systems, and data automation—using AI-assisted workflows where it
            improves delivery and quality.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {experiences.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <div className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold">
                    {item.title} · {item.company}
                  </h3>
                  <span className="text-sm text-white/70">{item.period}</span>
                </div>
                <span className="text-sm text-white/70">{item.location}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-white/90 space-y-1">
                {item.highlights.map((h) => (
                  <li key={`${item.company}-${h}`}>{h}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-row flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <span
                    key={`${item.company}-${t}`}
                    className="text-xs rounded-full bg-destructive/20 text-white px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
