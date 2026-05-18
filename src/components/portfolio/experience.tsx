import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./section-header";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Experience" title="Internships & professional work" />

        <div className="mx-auto max-w-4xl">
          <div className="reveal relative glass rounded-2xl p-8 sm:p-10 shadow-card transition-all hover:border-primary/40">
            <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-primary" />
            <div className="pl-4 sm:pl-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent">
                    <Briefcase className="size-3.5" />
                    Internship
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    Data Analytics Intern · Power BI
                  </h3>
                  <div className="mt-1 text-lg font-medium text-foreground/90">Yalimart</div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" /> December 2023
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> Madurai, India
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-muted-foreground">
                {[
                  "Built interactive Power BI dashboards visualizing business KPIs and operational performance.",
                  "Analyzed structured datasets and generated insights that supported data-driven decisions.",
                  "Performed data cleaning, validation, and reporting to improve dashboard accuracy.",
                  "Designed visual reports with charts, slicers, and filters for clear business analysis.",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-primary" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Power BI", "Data Cleaning", "KPI Tracking", "Reporting"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary-foreground/90 border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
