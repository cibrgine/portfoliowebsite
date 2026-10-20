import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InteractiveGrid } from "@/components/InteractiveGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amine Lassri — Big Data & AI Engineer Portfolio" },
      { name: "description", content: "Big Data & AI Engineer specializing in MLOps pipelines, computer vision and scalable data architectures." },
      { property: "og:title", content: "Amine Lassri — Big Data & AI Engineer Portfolio" },
      { property: "og:description", content: "MLOps pipelines, computer vision systems and scalable data architectures." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <InteractiveGrid />
      <div className="pointer-events-none relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="pointer-events-auto flex flex-col items-center animate-page-in">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Portfolio / 2026</p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Amine Lassri's <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Big Data & AI Engineer specializing in end-to-end MLOps pipelines, computer vision systems, and scalable data architectures. Turning raw data into production-ready intelligence.
          </p>
          <Link to="/overview" className="group mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow">
            View My Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
