import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-slate-300 bg-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 sm:text-sm">
              03 / Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Software built to solve real problems.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600 lg:ml-auto">
            These projects demonstrate how I approach application development
            — from designing APIs and data models to building interfaces,
            authentication, testing and deployment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}