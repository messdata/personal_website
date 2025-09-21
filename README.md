# Chinmay Portfolio (Next.js 14 · Tailwind)

A clean, professional portfolio site for **Chinmay Patil** with sections for CV, Achievements, Certifications, Projects, and Contact.

## Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Lucide icons
- Ready for Vercel (zero config)

## Quickstart
```bash
pnpm i # or npm i / yarn
pnpm dev
```

## Deploy on Vercel
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → Import the repo.
3. Framework preset: **Next.js**. No extra env vars needed (Formspree is optional).
4. Deploy.

## Personalise
- Replace `/public/profile.jpg`, `/public/og.png`, and `/public/resume.pdf`.
- Edit data in `/data/*.ts` for projects, achievements, certifications.
- Update contact form action in `app/contact/page.tsx` (Formspree or your backend).
- Update metadata and `metadataBase` in `app/layout.tsx`.

## Suggested extra pages (optional)
- `/blog` using MDX (contentlayer), 
- `/press` for features, 
- `/references` for your academic citations.

## Accessibility & SEO
- Semantic headings, descriptive link text, sitemap & robots routes included.

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm start`

---
© 2025 Chinmay Patil