import { ArrowDown } from "lucide-react";
import { learningPath } from "../data/portfolioData";

export default function Learning() {
  return (
    <section className="border-b border-indigo-100 bg-indigo-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-700 sm:text-sm">
              04 / Engineering Direction
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Building beyond the application layer.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Building backend applications has led me to a broader question:
              what makes software reliable after it has been deployed?
            </p>
          </div>

          {/* Direction */}
          <div>
            <div className="space-y-3">
              {learningPath.map((item, index) => (
                <div key={item.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md sm:p-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {index < learningPath.length - 1 && (
                    <div className="flex h-6 items-center justify-center text-indigo-400">
                      <ArrowDown size={15} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-indigo-200 bg-indigo-100/60 p-6 sm:p-7">
              <p className="text-sm font-semibold leading-7 text-indigo-950">
                I'm extending my engineering foundation into Linux, Docker,
                CI/CD, infrastructure, monitoring and Site Reliability
                Engineering — with the goal of understanding the complete
                lifecycle of a production application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}