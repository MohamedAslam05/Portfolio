import { Award } from "lucide-react";
import { SectionHeader } from "./section-header";

const certs = [
  {
    issuer: "Infosys Springboard",
    title: "Java Programming Fundamentals",
    description: "Core Java concepts, OOP, and problem-solving foundations.",
  },
  {
    issuer: "edX",
    title: "Database Management System",
    description: "Relational databases, SQL, normalization, and transactions.",
  },
  {
    issuer: "IBM",
    title: "Introduction to Cloud",
    description: "Cloud computing fundamentals, deployment models, and services.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Continued learning"
          description="Industry-recognized courses I've completed alongside my degree."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div
              key={c.title}
              className="reveal group relative glass rounded-2xl p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow">
                  <Award className="size-5" />
                </div>
                <span className="text-xs uppercase tracking-wider text-accent">{c.issuer}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
