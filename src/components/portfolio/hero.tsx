import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">

              Hi, I'm{" "}

              <span className="text-gradient">
                Mohamed Aslam
              </span>

              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground">
                MERN Stack Developer
              </span>

            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">

              Aspiring software developer focused on building responsive and
              scalable web applications using{" "}

              <span className="text-foreground font-medium">
                MERN stack
              </span>{" "}

              with clean UI and modern user experiences.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="/Aslam_resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                <Download className="size-4" />
                Resume
              </a>

              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card hover:border-primary/40"
              >
                View Projects

                <ArrowDown className="size-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/60 hover:text-accent"
              >
                Let's Connect
              </button>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border/60">

              <Stat
                value="7.55"
                label="CGPA / 10"
              />

              <Stat
                value="2+"
                label="Major Projects"
              />

              <Stat
                value="3"
                label="Certifications"
              />

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative hidden lg:block">

            <div className="relative w-[430px] h-[430px] mx-auto">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />

              {/* Card */}
              <div className="relative h-full rounded-3xl glass p-7 shadow-card flex flex-col justify-between overflow-hidden">

                {/* Top */}
                <div className="flex items-center justify-between">

                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-destructive/70" />
                    <span className="size-3 rounded-full bg-accent/70" />
                    <span className="size-3 rounded-full bg-primary/70" />
                  </div>

                  <span className="text-xs font-mono text-muted-foreground">
                    ~/portfolio
                  </span>

                </div>

                {/* Code Block */}
                <pre className="text-[16px] font-mono leading-[1.45] text-muted-foreground whitespace-pre-wrap">
{`const developer = {
  name: "Mohamed Aslam",
  role: "Software Developer",

  stack: [
    "React",
    "Node",
    "Express",
    "MongoDB"
  ],

  location: "Bangalore, IN"
};`}
</pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>

      <div className="text-3xl font-display font-bold text-gradient">
        {value}
      </div>

      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
        {label}
      </div>

    </div>
  );
}