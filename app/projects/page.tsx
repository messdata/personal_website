import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = { title: "Projects — Chinmay Patil" };

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-slate-600">Masters projects and personal builds.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}