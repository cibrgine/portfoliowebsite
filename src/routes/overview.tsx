import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { EXPERIENCES, PROJECTS, SKILLS, PROFILE, type DocEntry } from "@/lib/content";
import { SiteFooter } from "@/components/SiteFooter";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";

export const Route = createFileRoute("/overview")({
  head: () => ({
    meta: [
      { title: "Skills, Experience & Projects — Amine Lassri" },
      { name: "description", content: "Hard skills, professional experience, projects and education of Amine Lassri, Big Data & AI Engineer." },
      { property: "og:title", content: "Skills, Experience & Projects — Amine Lassri" },
      { property: "og:description", content: "Hard skills, experience, projects and education." },
    ],
  }),
  component: Overview,
});

const THUMBS = [image1, image2, image3];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl"><span className="mr-3 font-mono text-base text-primary">//</span>{children}</h2>;
}

function DocCard({ entry, type, img }: { entry: DocEntry; type: "experience" | "project"; img: string }) {
  return (
    <Link to="/docs/$type/$id" params={{ type, id: entry.id }} className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card">
      <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      {entry.logo && (
        <div className="absolute right-6 top-6 rounded-lg bg-white p-2">
          <img src={entry.logo} alt={`${entry.title} logo`} className="h-12 w-auto max-w-32 object-contain" />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <span className="rounded-full border border-border bg-glass px-3 py-1 font-mono text-xs text-primary backdrop-blur">{entry.tag}</span>
        <h3 className="mt-3 text-2xl font-semibold">{entry.title}</h3>
        {entry.dates && <p className="mt-1 font-mono text-xs text-muted-foreground">{entry.dates}</p>}
        {type === "project" && (
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.stack.map((s) => <span key={s} className="rounded-md bg-glass px-2 py-0.5 font-mono text-xs text-muted-foreground">{s}</span>)}
          </div>
        )}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center gap-5 bg-overlay p-8 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-semibold">{entry.title}</h3>
        <p className="text-muted-foreground">{entry.summary}</p>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">
          View Documentation <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function Overview() {
  return (
    <div className="bg-page animate-page-in">
      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        <section>
          <SectionTitle>My Hard Skills</SectionTitle>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-4 animate-marquee">
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <span key={i} className="whitespace-nowrap rounded-full border border-border bg-glass px-5 py-2.5 font-mono text-sm backdrop-blur transition-colors hover:border-primary hover:text-primary">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>My Professional Experience</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {EXPERIENCES.map((e, i) => <DocCard key={e.id} entry={e} type="experience" img={THUMBS[(i + 2) % 3]!} />)}
          </div>
        </section>

        <section>
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-secondary/40 animate-glow-pulse">
                <Sparkles className="h-8 w-8 text-secondary" />
                <p className="text-xl font-semibold">Coming Soon</p>
                <p className="font-mono text-xs text-muted-foreground">next build in progress..</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <a href={PROFILE.universityUrl} target="_blank" rel="noreferrer" className="group grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-border bg-glass p-8 transition-colors group-hover:border-primary/50 md:col-span-3">
              <p className="font-mono text-xs text-primary">2022 – 2027</p>
              <h3 className="mt-2 text-2xl font-semibold">Bachelor & Master of Science in Computer Engineering</h3>
              <p className="mt-1 text-muted-foreground">Université Internationale de Rabat, Rabat, Morocco</p>
              <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <div><dt className="font-mono text-xs text-muted-foreground">Major</dt><dd>Computer Engineering</dd></div>
                <div><dt className="font-mono text-xs text-muted-foreground">Specialization</dt><dd>Big Data & Artificial Intelligence</dd></div>
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">Core coursework: Machine Learning, Deep Learning, Big Data Architectures, Advanced Database Systems, Distributed Computing.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={image3} alt="University campus" loading="lazy" className="h-full min-h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute bottom-3 right-3 rounded-full bg-overlay p-2"><ArrowUpRight className="h-4 w-4" /></span>
            </div>
          </a>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
