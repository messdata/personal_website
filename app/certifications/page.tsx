import { certifications } from "@/data/certifications";

export const metadata = { title: "Certifications — Chinmay Patil" };

export default function CertificationsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Certifications</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map(c => (
          <div key={c.name} className="card p-6 flex items-center justify-between">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-slate-600">{c.issuer}</div>
            </div>
            <span className="text-xs text-slate-500">{c.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}