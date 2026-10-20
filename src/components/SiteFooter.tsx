import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE } from "@/lib/content";

export function SiteFooter() {
  const items = [
    { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Github, label: "GitHub", href: PROFILE.github },
    { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin },
    { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  ];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Amine Lassri</p>
        <div className="flex flex-wrap items-center gap-6">
          {items.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
