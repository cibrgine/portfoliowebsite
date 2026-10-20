import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-mono text-sm tracking-tight text-foreground">
          <span className="text-primary">&gt;</span> AI &amp; Data Engineer<span className="animate-pulse text-secondary">_</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="nav-link transition-colors hover:text-foreground">GitHub</a>
          <Link to="/contact" className="nav-link transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>Contact</Link>
          <Link to="/about" className="nav-link transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>About Me</Link>
        </nav>
      </div>
    </header>
  );
}
