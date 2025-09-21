export const metadata = { title: "Contact — Chinmay Patil" };

export default function ContactPage() {
  return (
    <section className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-slate-600">Use the form below or email me directly.</p>
      <form className="card p-6 space-y-4" method="POST" action="https://formspree.io/f/your-id">
        <input className="w-full border border-slate-300 rounded-xl px-4 py-2.5" name="name" placeholder="Your name" required />
        <input className="w-full border border-slate-300 rounded-xl px-4 py-2.5" type="email" name="email" placeholder="Your email" required />
        <textarea className="w-full border border-slate-300 rounded-xl px-4 py-2.5" name="message" placeholder="Message" rows={5} required />
        <button className="px-5 py-2.5 rounded-full bg-brand-600 text-white hover:bg-brand-700" type="submit">Send</button>
      </form>
    </section>
  );
}