export const runtime = 'edge';
export function GET() {
  return new Response(`User-agent: *\nAllow: /`, { headers: { "content-type": "text/plain" }});
}