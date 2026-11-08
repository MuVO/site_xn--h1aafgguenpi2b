const siteUrl = (import.meta.env.PUBLIC_SITE_URL || '').replace(/\/+$/, '');

export function GET() {
  const pages = ['/main/', '/bank/'];
  const urls = pages.map((page) => `<url><loc>${siteUrl}${page}</loc></url>`).join('');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
