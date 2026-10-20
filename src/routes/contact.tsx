import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amine Lassri" },
      { name: "description", content: "Get in touch with Amine Lassri, Big Data & AI Engineer." },
      { property: "og:title", content: "Contact — Amine Lassri" },
      { property: "og:description", content: "Get in touch with Amine Lassri." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: Github, label: "GitHub", value: "github.com", href: PROFILE.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com", href: PROFILE.linkedin },
  ];
  return (
    <section className="bg-page min-h-[calc(100vh-4rem)] animate-page-in">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">ping</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">Let's <span className="text-gradient">talk</span></h1>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-glass p-6 transition-all hover:border-primary/50 hover:shadow-glow">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-mono text-xs text-muted-foreground">{label}</p>
              <p className="mt-1">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
