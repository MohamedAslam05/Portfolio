import { ExternalLink, Github, ShoppingBag, BarChart3 } from "lucide-react";
import { SectionHeader } from "./section-header";

const projects = [
  {
    icon: ShoppingBag,
    title: "E-Commerce Web Application",
    summary:
      "Responsive multi-page e-commerce app with product browsing, search, filtering, and a fully persistent cart.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "React Router", "localStorage"],
    features: [
      "Product listing, search, and category filtering",
      "Cart operations — add, remove, update quantities",
      "Cart persistence via localStorage across sessions",
      "Home, Cart, Profile, Checkout pages with React Router",
      "Responsive UI built with Flexbox & Grid",
    ],
    demo: "#",
    repo: "#",
  },
  {
    icon: BarChart3,
    title: "Call Center Dashboard",
    summary:
      "Interactive Power BI dashboard tracking call volume, response time, and handling metrics across regions.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    features: [
      "KPIs for total calls, response time, and handling metrics",
      "Call trends visualized by state, channel, sentiment",
      "Dynamic filters and slicers for deep-dive analysis",
      "Insightful charts and maps for business reporting",
    ],
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work I'm proud of"
          description="A snapshot of the projects where I applied what I've learned end-to-end."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="reveal group relative flex flex-col glass rounded-2xl p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity blur-md pointer-events-none" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
                      >
                        <Github className="size-4" />
                      </a>
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live project"
                        className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-accent hover:border-accent/40"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.summary}</p>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs font-medium text-foreground/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60 flex gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                    >
                      View Project <ExternalLink className="size-4" />
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground/40"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
