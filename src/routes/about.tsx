import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Amine Lassri" },
      { name: "description", content: "About Amine Lassri, Big Data & AI Engineer." },
      { property: "og:title", content: "About Me — Amine Lassri" },
      { property: "og:description", content: "About Amine Lassri, Big Data & AI Engineer." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="bg-page min-h-[calc(100vh-4rem)] animate-page-in">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">whoami</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">About <span className="text-gradient">Me</span></h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          I'm Amine Lassri, a Big Data & AI Engineer who builds systems that move data from raw sources to production-ready models. I care about reliable pipelines, measurable results and clean architecture.
        </p>
        <Link to="/overview" className="mt-10 inline-flex rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:shadow-glow">See my work</Link>
      </div>
    </section>
  );
}
