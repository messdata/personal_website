export const runtime = 'edge';

const routes = ["", "/cv", "/achievements", "/certifications", "/projects", "/contact"].map((r) => ({
  url: `https://your-domain.vercel.app${r}`,
  lastModified: new Date().toISOString()
}));

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  routes.map(r => `<url><loc>${r.url}</loc><lastmod>${r.lastModified}</lastmod></url>`).join("") +
  `</urlset>`;
  return new Response(body, { headers: { "content-type": "application/xml" }});
}