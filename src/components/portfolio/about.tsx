import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeader } from "./section-header";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="A developer with curiosity and consistency"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="reveal lg:col-span-3 glass rounded-2xl p-8 sm:p-10 shadow-card">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-medium">Mohamed Aslam M</span>, a recent{" "}
              <span className="text-foreground font-medium">B.Tech Information Technology</span>{" "}
              graduate from Thiagarajar College of Engineering. I enjoy building software that's
              fast, reliable, and pleasant to use — from responsive frontends in React to
              REST APIs with Node and Express.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Beyond code, I'm drawn to{" "}
              <span className="text-foreground font-medium">problem solving</span>, clean
              architecture, and data-driven thinking. I'm currently sharpening my MERN stack
              skills and looking for a fresher software developer role in Bangalore where I can
              learn, contribute, and grow with a strong engineering team.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Web Development", "MERN Stack", "Problem Solving", "Data Analytics", "Agile"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-5">
            <InfoCard
              icon={<GraduationCap className="size-5" />}
              title="Education"
              line1="B.Tech in Information Technology"
              line2="Thiagarajar College of Engineering · CGPA 7.55"
            />
            <InfoCard
              icon={<MapPin className="size-5" />}
              title="Based In"
              line1="Bangalore, India"
              line2="Open to relocation & remote roles"
            />
            <InfoCard
              icon={<Sparkles className="size-5" />}
              title="Focus"
              line1="React & MERN Stack"
              line2="Building production-ready web apps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  line1,
  line2,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
}) {
  return (
    <div className="reveal group glass rounded-2xl p-5 transition-all hover:border-primary/40 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gradient-primary p-2.5 text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
          {icon}
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
          <div className="mt-1 font-medium text-foreground">{line1}</div>
          <div className="text-sm text-muted-foreground">{line2}</div>
        </div>
      </div>
    </div>
  );
}
