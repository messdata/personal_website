"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-lg">
          <span className="text-brand-600">Chinmay</span> Patil
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-sm hover:text-brand-700 transition ${
                pathname === n.href ? "text-brand-700 font-medium" : "text-slate-600"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-max py-2 flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2 text-slate-700" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}