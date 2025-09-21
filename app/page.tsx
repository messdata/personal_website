import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          <Badge>MSc Business Analytics · Maynooth (’25)</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Chinmay Patil
          </h1>
          <p className="text-slate-600 max-w-2xl">
            FMCG & e‑commerce specialist pivoting into data‑driven product and analytics. 
            I build usable dashboards (Next.js, MapLibre) and mobile apps (React Native) that turn messy data into decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cv" className="px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition">View CV</Link>
            <Link href="/projects" className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-700 transition">Projects</Link>
            <a href="https://www.linkedin.com/in/chinmay-patil-055a41104/" target="_blank" className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-700 transition">LinkedIn</a>
          </div>
        </div>
        <div className="relative h-56 md:h-72 w-full rounded-2xl overflow-hidden border border-slate-200">
          <Image src="/profile.jpg" alt="Chinmay" fill className="object-cover" />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">What I’m good at</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
          <li>Category & Key Account Management (FMCG)</li>
          <li>Next.js dashboards · MapLibre · Chart.js</li>
          <li>React Native apps · Firebase · OAuth</li>
          <li>SQL · Python (pandas) · BI tooling</li>
        </ul>
      </div>
    </section>
  );
}