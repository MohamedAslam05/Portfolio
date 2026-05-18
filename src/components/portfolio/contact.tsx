import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./section-header";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a little more (min 10 chars)").max(1000),
});

type FormState = z.infer<typeof schema>;

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "mhdaslam051103@gmail.com",
    href: "mailto:mhdaslam051103@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 88703 61551",
    href: "tel:+918870361551",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mohamed Aslam M",
    href: "https://www.linkedin.com/in/mohamed-aslam1551/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        if (!fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }
    setSubmitting(true);
    // No backend wired — open user's mail client as a friendly fallback
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio enquiry from ${parsed.data.name}`);
      const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`);
      window.location.href = `mailto:mhdaslam051103@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Thanks! Opening your mail client...");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm actively looking for fresher software developer roles. Reach out anytime."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 grid gap-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="reveal group glass rounded-2xl p-5 flex items-center gap-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-0.5 font-medium text-foreground truncate">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-3 glass rounded-2xl p-6 sm:p-8 shadow-card space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  maxLength={80}
                  placeholder="Jane Recruiter"
                  className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>
              <Field label="Your Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  maxLength={160}
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>
            </div>
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={onChange("message")}
                maxLength={1000}
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send className="size-4" />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
