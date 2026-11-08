const siteUrl = (import.meta.env.PUBLIC_SITE_URL || '').replace(/\/+$/, '');

export function GET() {
  const sitemap = siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
