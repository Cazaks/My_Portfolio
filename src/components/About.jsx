```jsx
export default function About() {
  return (
    <section id="about" className="border-b border-slate-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 sm:text-sm">
              01 / About
            </p>

            <h2 className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              I build software from the inside out.
            </h2>

            <div className="mt-8 h-px w-20 bg-blue-600" />
          </div>

          {/* Right */}
          <div>
            <div className="space-y-7 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                My development work is grounded in backend engineering, with a
                focus on building applications that are structured,
                maintainable and ready to grow.
              </p>

              <p>
                I work with Java and Spring Boot, as well as Python, Django and
                Django REST Framework, building REST APIs, implementing
                business logic, designing databases, and developing
                authentication and authorization systems.
              </p>

              <p>
                I also work across the frontend with React and JavaScript,
                allowing me to understand and build the complete path from
                user interaction to backend service and database.
              </p>

              <p>
                My engineering approach is test-driven and practical. I use
                JUnit and Mockito for Java applications, Docker to create
                consistent development environments, and Git-based workflows
                to keep development structured.
              </p>

              <p>
                I'm now extending that foundation into infrastructure, CI/CD
                and Site Reliability Engineering — focusing on what happens
                after the code is written: how applications are deployed,
                monitored, maintained and kept reliable.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-sm font-bold text-slate-950">Build</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Applications and APIs
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-sm font-bold text-slate-950">Test</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Behaviour and reliability
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-4">
                <p className="text-sm font-bold text-slate-950">Operate</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Deployment and infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```
