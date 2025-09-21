import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title, description, href, img = "/project.jpg", tags = []
}: { title: string; description: string; href?: string; img?: string; tags?: string[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>)}
        </div>
        {href && (
          <Link href={href} className="inline-flex items-center gap-1 text-brand-700 text-sm font-medium">
            View <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}