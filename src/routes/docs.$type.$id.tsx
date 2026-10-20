import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { EXPERIENCES, PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/docs/$type/$id")({
  loader: ({ params }) => {
    const list = params.type === "experience" ? EXPERIENCES : params.type === "project" ? PROJECTS : [];
    const entry = list.find((e) => e.id === params.id);
    if (!entry) throw notFound();
    return { entry, type: params.type };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.entry.title} — Amine Lassri` },
          { name: "description", content: loaderData.entry.summary },
          { property: "og:title", content: `${loaderData.entry.title} — Amine Lassri` },
          { property: "og:description", content: loaderData.entry.summary },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  component: DocPage,
});

function DocPage() {
  const { entry, type } = Route.useLoaderData();
  return (
    <article className="bg-page min-h-[calc(100vh-4rem)] animate-page-in">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/overview" className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Overview
        </Link>
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-primary">{type} / {entry.tag}</p>
        <div className="mt-2 flex items-center gap-4">
          {entry.logo && <img src={entry.logo} alt={`${entry.title} logo`} className="h-12 w-auto max-w-32 rounded-md bg-white p-1 object-contain" />}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{entry.title}</h1>
        </div>
        {entry.dates && <p className="mt-3 font-mono text-sm text-muted-foreground">{entry.dates}</p>}

        <h2 className="mt-12 text-xl font-semibold">Overview</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{entry.summary}</p>

        <h2 className="mt-10 text-xl font-semibold">Key Contributions</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          {entry.contributions.map((c) => <li key={c} className="flex gap-3"><span className="text-secondary">▹</span>{c}</li>)}
        </ul>

        <h2 className="mt-10 text-xl font-semibold">Technical Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.stack.map((s) => <span key={s} className="rounded-full border border-border bg-glass px-3 py-1 font-mono text-xs">{s}</span>)}
        </div>

        <h2 className="mt-10 text-xl font-semibold">Architecture</h2>
        <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-border bg-card p-5 font-mono text-sm text-muted-foreground">{entry.architecture}</pre>

        <div className="mt-10 flex gap-3">
          <a href={entry.github ?? "https://github.com/"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"><Github className="h-4 w-4" /> GitHub</a>
          <a href={entry.demo ?? "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary"><ExternalLink className="h-4 w-4" /> Demo</a>
        </div>
      </div>
    </article>
  );
}
