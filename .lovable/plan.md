
# Portfolio Website — Mohamed Aslam M

A polished, dark-themed single-page portfolio inspired by kishore-portfolio-steel.vercel.app, built to look like a real fresher developer site for the Bangalore IT job market.

## Design System

- **Theme**: Dark, formal, recruiter-friendly
- **Palette**: Navy (#0a1128), charcoal (#111827), deep blue (#1e3a8a), purple (#7c3aed), cyan (#06b6d4) gradient accents
- **Background**: Layered radial/linear gradients + subtle glow blobs (no flashy neon)
- **Cards**: Glassmorphism (backdrop-blur, translucent border, soft shadow)
- **Typography**: Inter / Space Grotesk pairing — formal, modern
- **Motion**: Subtle fade/slide-up on scroll (Intersection Observer), smooth hover lifts on cards/buttons, gradient border hover on project cards
- **Layout**: CSS Grid + Flexbox, fully responsive (mobile → desktop)

All design tokens live in `index.css` and `tailwind.config.ts` as HSL semantic tokens — no hardcoded colors in components.

## Sections

1. **Navbar** — Sticky, glass background, links: Home / About / Skills / Experience / Projects / Certifications / Contact. Active section highlighting via scroll observer. Collapsible hamburger menu on mobile.
2. **Hero** — Name, title (Aspiring Software Developer | React Developer | MERN Stack Learner), short intro, gradient glow backdrop, 3 CTAs: Download Resume, View Projects, Contact Me. Resume PDF served from `/public`.
3. **About** — B.Tech IT background, interests (software dev, web dev, problem solving), Bangalore location. Formal tone.
4. **Skills** — Grid of category cards: Programming, Frontend, Backend, Database, Tools, Soft Skills. Each skill as a glass badge with icon.
5. **Experience** — Yalimart, Madurai — Data Analytics Intern (Power BI). Timeline-style card with bullet highlights.
6. **Projects** — 2 project cards (E-Commerce Web App, Call Center Dashboard) with tech stack chips, feature list, "View Project" + "GitHub" buttons.
7. **Certifications** — 3 cards: Infosys Springboard (Java), edX (DBMS), IBM (Intro to Cloud).
8. **Contact** — Email, phone, LinkedIn, location + functional contact form (zod validation, toast feedback; client-side only — no backend).
9. **Footer** — Copyright + socials.

## Technical Details

- Stack: existing Vite + React + TS + Tailwind + shadcn/ui
- Files:
  - `src/pages/Index.tsx` — assembles sections
  - `src/components/portfolio/Navbar.tsx`
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
  - `src/components/portfolio/Skills.tsx`
  - `src/components/portfolio/Experience.tsx`
  - `src/components/portfolio/Projects.tsx`
  - `src/components/portfolio/Certifications.tsx`
  - `src/components/portfolio/Contact.tsx`
  - `src/components/portfolio/Footer.tsx`
  - `src/hooks/useActiveSection.ts`
- `index.css` + `tailwind.config.ts` updated with dark semantic tokens (background, foreground, card, primary, accent, gradient utilities, glow shadows)
- Resume PDF copied to `public/Aslam_resume.pdf` for Download button
- SEO: page title, meta description, single H1, semantic landmarks
- Contact form: zod schema (name/email/message, length limits), shadcn Form + toast

## Out of Scope

- No backend / DB / auth (contact form is client-side with validation only)
- No real "View Project" / "GitHub" URLs — placeholder `#` links you can fill in later

Confirm and I'll build it.
