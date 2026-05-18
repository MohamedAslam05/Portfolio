import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Users,
} from "lucide-react";
import { SectionHeader } from "./section-header";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Java"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & OS",
    skills: ["Linux", "WinSCP", "PuTTY", "Git"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem Solving", "Adaptability", "Collaboration", "Agile"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies & tools I work with"
          description="A focused toolkit covering frontend, backend, databases, and the developer workflow."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="reveal group relative glass rounded-2xl p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity blur-md pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
