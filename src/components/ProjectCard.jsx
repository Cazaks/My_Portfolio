import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {project.category}
        </p>

        {project.featured && (
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="max-w-lg text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
          >
            View Project
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}