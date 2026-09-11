import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          CALEB EZAK<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-slate-950 px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}