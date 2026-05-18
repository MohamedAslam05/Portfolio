import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          © {year} <span className="text-foreground font-medium">Mohamed Aslam M</span>. Crafted
          with React & Tailwind in Bangalore.
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohamed-aslam-294b29224"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-accent hover:border-accent/40"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:mhdaslam051103@gmail.com"
            aria-label="Email"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-accent hover:border-accent/40"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
