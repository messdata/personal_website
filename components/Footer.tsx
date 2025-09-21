export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="container-max py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2025 Chinmay Patil. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/chinmay-patil-055a41104/" target="_blank" className="hover:text-brand-700">LinkedIn</a>
          <a href="mailto:someone@example.com" className="hover:text-brand-700">Email</a>
          <a href="https://github.com/messdata" target="_blank" className="hover:text-brand-700">GitHub</a>
        </div>
      </div>
    </footer>
  );
}