import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              05 / Let's Connect
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Have a problem worth building a solution for?
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I'm open to opportunities in software engineering, backend
              development and teams building reliable web applications.
            </p>
          </div>

          <div className="lg:ml-auto lg:w-full">
            <div className="flex flex-col gap-3">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-blue-50 sm:px-6 sm:py-5"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} />
                  Get In Touch
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-slate-800 sm:px-6 sm:py-5"
              >
                GitHub

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-slate-800 sm:px-6 sm:py-5"
              >
                LinkedIn

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}