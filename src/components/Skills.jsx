import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200 bg-blue-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 sm:text-sm">
              02 / Engineering Stack
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              The technologies behind my work.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 lg:ml-auto">
            I use a practical stack to design, build, test and deploy web
            applications across the frontend and backend.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`group p-6 transition hover:bg-blue-50 sm:p-8 ${
                index !== skills.length - 1
                  ? "border-b border-blue-100"
                  : ""
              } ${
                index % 2 === 0 ? "sm:border-r sm:border-blue-100" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-950 sm:text-xl">
                  {skill.category}
                </h3>

                <span className="text-xs font-bold text-blue-600">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition group-hover:border-blue-200 group-hover:bg-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}