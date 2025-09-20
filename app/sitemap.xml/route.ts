import { publicRoutes } from "@/routes";

export async function GET() {
  const domain = "https://www.curatedinteriors.co.in/";

  // Format lastmod properly with timezone offset
  const lastmod = new Date().toISOString().replace(/\.\d{3}Z$/, "+00:00");

  const xml = publicRoutes
    .map((path) => {
      let priority = "0.80";
      if (path === "/") priority = "1.00";

      return `
  <url>
    <loc>${domain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created dynamically by Next.js Sitemap Generator -->

${xml}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
