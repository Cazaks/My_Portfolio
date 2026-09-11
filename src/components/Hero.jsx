import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import portfolioImage from "../assets/images/portfolio_Image.JPG";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-100"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 sm:text-sm">
                Full-Stack Developer
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Building web applications that solve real problems.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I build full-stack applications across the frontend, backend
              and database layers — from responsive React interfaces and REST
              APIs to authentication, automated testing and containerized
              deployment.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View My Work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:bg-white"
              >
                Let's Connect
              </a>
            </div>

            {/* Technology highlights */}
            <div className="mt-12 grid grid-cols-2 border-y border-slate-300 sm:grid-cols-4">
              <div className="border-r border-slate-300 px-4 py-5 sm:px-5">
                <p className="text-sm font-bold text-slate-950">React</p>
                <p className="mt-1 text-xs text-slate-500">Frontend</p>
              </div>

              <div className="border-b border-slate-300 px-4 py-5 sm:border-b-0 sm:border-r sm:px-5">
                <p className="text-sm font-bold text-slate-950">Java</p>
                <p className="mt-1 text-xs text-slate-500">Backend</p>
              </div>

              <div className="border-r border-slate-300 px-4 py-5 sm:px-5">
                <p className="text-sm font-bold text-slate-950">MySQL</p>
                <p className="mt-1 text-xs text-slate-500">Database</p>
              </div>

              <div className="px-4 py-5 sm:px-5">
                <p className="text-sm font-bold text-slate-950">Docker</p>
                <p className="mt-1 text-xs text-slate-500">Deployment</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />

            <div className="relative">
              {/* Number */}
              <div className="absolute -left-3 -top-3 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-bold text-slate-700 shadow-lg sm:-left-5 sm:-top-5">
                01
              </div>

              {/* Image frame */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-300 bg-white p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3">
                <img
                  src={portfolioImage}
                  alt="Caleb Ezak"
                  className="h-auto max-h-[680px] w-full rounded-[1.5rem] object-cover object-center sm:rounded-[2rem]"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <ArrowDownRight size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Backend & Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute -bottom-4 right-4 rounded-full border border-slate-300 bg-slate-950 px-4 py-2 text-xs font-semibold text-white shadow-lg sm:right-6">
                Software Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}