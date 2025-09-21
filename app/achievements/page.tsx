import { achievements } from "@/data/achievements";

export const metadata = { title: "Achievements — Chinmay Patil" };

export default function AchievementsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Professional Achievements</h1>
      <div className="grid gap-4">
        {achievements.map((a) => (
          <div key={a.title} className="card p-6">
            <div className="text-xs text-slate-500">{a.year}</div>
            <div className="font-semibold">{a.title}</div>
            <p className="text-sm text-slate-700 mt-1">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}