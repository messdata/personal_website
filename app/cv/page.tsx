export const metadata = { title: "CV — Chinmay Patil" };

export default function CVPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Curriculum Vitae</h1>
      <p className="text-slate-600">Download the latest PDF resume below. A web version is also shown.</p>
      <div className="flex gap-3">
        <a href="/resume.pdf" className="px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700">Download PDF</a>
        <a href="https://www.linkedin.com/in/chinmay-patil-055a41104/" target="_blank" className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-brand-600 hover:text-brand-700">LinkedIn</a>
      </div>
      <div className="card p-6 space-y-3">
        <h2 className="font-semibold">Professional Summary</h2>
        <p className="text-sm text-slate-700">
          6+ years in FMCG/e‑commerce across Zomato, Dunzo, and Purplle. Currently completing MSc Business Analytics (’25).
          Strengths in category growth, key accounts, pricing, and analytics‑driven initiatives.
        </p>
        <h3 className="font-semibold mt-4">Experience</h3>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
          <li>Assistant Category Manager — Purplle (India)</li>
          <li>Senior Key Account Manager — Dunzo (India)</li>
          <li>Business Analyst — Zomato (India)</li>
        </ul>
        <h3 className="font-semibold mt-4">Education</h3>
        <p className="text-sm text-slate-700">MSc Business Analytics, Maynooth University (Expected Sep 2025)</p>
      </div>
    </section>
  );
}