export function GET() {
  const content = `User-agent: *
  Allow: /
  
  Sitemap: https://www.curatedinteriors.co.in/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
