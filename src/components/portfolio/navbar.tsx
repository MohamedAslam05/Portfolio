import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const active = useActiveSection(links.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong py-2" : "py-4"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">Mohamed Aslam</span>
          <span className="text-foreground">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary transition-all duration-300",
                    active === l.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Hire Me
        </button>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border/40">
          <ul className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    active === l.id
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                  )}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => go("contact")}
                className="w-full rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
